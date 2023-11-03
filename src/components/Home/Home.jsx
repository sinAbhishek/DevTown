import React, { useEffect, useState } from "react";
import { data } from "../../data/data";
import Card from "../Card/Card";
import { PageCont, PageBtn, Main, Category, Select, CardCont } from "./Home.styled";

const Home = () => {
  const [items, setitems] = useState(data.slice(0, 8));

  const [pages, setpages] = useState([])
  const [activepage, setactivepage] = useState(1)
  useEffect(() => {
    const totalitems = data.length
    let pagetotal = ""
    if (totalitems % 8 !== 0) {
      pagetotal = (totalitems / 8) + 1

    }
    else {
      pagetotal = totalitems / 8
    }
    for (let i = 1; i <= pagetotal; i++) {

      setpages((prev) => [...prev, i])
    }
    return () => setpages([])
  }, [])
  const Categoryfilter = (e) => {
    setitems(data.filter((c) => c.type === e.target.value));
  };
  const Pricefilter = (e) => {
    setitems(data.filter((c) => c.Price <= e.target.value));
  };
  const Ratingfilter = (e) => {
    setitems(data.filter((c) => c.Rating <= e.target.value));
    console.log(e.target.value);
  };
  const changePage = (pageno) => {
    console.log(pageno)
    let updated = ""
    if (pageno === 1) {
      updated = data.slice(0, 8)
      setitems(updated)
      setactivepage(pageno)
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    else {
      updated = data.slice(8 * (pageno - 1), 8 * pageno)
      setitems(updated)
      setactivepage(pageno)
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }
  return (
    <Main >
      <Category >
        <Select
          onChange={Categoryfilter}
        >
          <option disabled selected value="">
            Category
          </option>
          <option>Lightnovel</option>
          <option>Fantasy</option>
          <option>Sci-fi</option>
        </Select>
        <Select
          onChange={Pricefilter}
          className=" px-2 py-1 border border-slate-600 mx-2 text-slate-100 bg-gray-800 rounded-md"
        >
          <option disabled selected value="">
            Price
          </option>
          <option value={300}>Upto 200</option>
          <option value={400}>Upto 400</option>
          <option value={700}>Upto 700</option>
        </Select>
        <Select
          onChange={Ratingfilter}
          className=" px-2 py-1 border border-slate-600 text-slate-100 bg-gray-800 rounded-md"
        >
          <option disabled selected value="">
            Rating
          </option>
          <option value={3}>Less than 2</option>
          <option value={4}> Less than 3</option>
          <option value={5}>5 rating</option>
        </Select>
      </Category>
      <CardCont>
        {items.map((c) => (
          <Card detail={c} />
        ))}
      </CardCont>

      <PageCont>
        {pages.map((c) => (
          <PageBtn active={activepage === c ? true : false} onClick={() => changePage(c)}  >{c}</PageBtn>
        ))}
      </PageCont>
    </Main>
  );
};

export default Home;

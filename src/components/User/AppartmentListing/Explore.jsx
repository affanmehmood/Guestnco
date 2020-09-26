import React, { useState, useEffect } from "react";
import axios from "axios";

import { useHistory, Link } from "react-router-dom";

const Explore = () => {
  // Appartments data
  const [appartmentList, setAppartmentList] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://18.223.32.178:3000/user/getapartmentlist?search=&city=&checkin=&budget=`
      )

      .then((res) => {
        console.log("DATA", res.data.data);
        const d = res.data.data;

        console.log("D", d.length);
        var list = [];
        for (var i = 0; i < d.length; i++) {
          if (d[i].images[0] != null) {
            list.push({
              id: d[i].id,
              imageUrl: "http://18.223.32.178:3000/" + d[i].images[i],
              name: d[i].adress1,
            });
          }
        }

        setAppartmentList(list);
      })
      .then(() => {
        console.log("APP NAME", appartmentList.length);
      });
  }, [appartmentList.length]);
  const history = useHistory();

  return (
    <div id="" class="widget widget-taxonomies-card widget-categories">
      <div class="widget-top">
        <h3 class="widget-title">Explore</h3>
      </div>
      <div class="widget-body">
        {appartmentList.map((val, ind) => {
          return (
            <div class="taxonomy-card">
              <a
                onClick={() => {
                  sessionStorage.setItem("idFromAptCard", val.id);
                  history.push("/details-2");
                }}
                class="taxonomy-link hover-effect"
                href="#"
              >
                <div class="taxonomy-title">{val.name}</div>
                <img
                  class="img-responsive"
                  src={val.imageUrl}
                  width="360"
                  height="120"
                  alt="Los Angeles"
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Explore;

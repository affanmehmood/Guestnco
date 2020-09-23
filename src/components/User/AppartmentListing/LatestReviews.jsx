import React from "react";

const LatestReviews = () => {
  const reviewList = [
    {
      reviewNo: 122,
      timeAgo: "1 week",
      msg: "Very good appartment",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgZ4I_ePmZ584hPCVYlynXGCerexXg-ApfPg&usqp=CAU",
    },
    {
      reviewNo: 124,
      timeAgo: "1 month",
      msg: "Very good appartment",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgZ4I_ePmZ584hPCVYlynXGCerexXg-ApfPg&usqp=CAU",
    },
    {
      reviewNo: 135,
      timeAgo: "2 month",
      msg: "Very good appartment",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgZ4I_ePmZ584hPCVYlynXGCerexXg-ApfPg&usqp=CAU",
    },
  ];
  return (
    <div id="" className="widget widget-latest-reviews">
      <div className="widget-top">
        <h3 className="widget-title">Latest Reviews</h3>
      </div>
      <div className="widget-body">
        {reviewList.map((val, ind) => {
          return (
            <div className="review-block">
              <div className="media">
                <div className="media-left">
                  <a className="media-object">
                    <img
                      width="70"
                      height="70"
                      src={val.imageUrl}
                      className="img-circle"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div className="media-body media-middle">
                  <div className="msg-user-info">
                    <div className="msg-user-left">
                      <h2 className="title">
                        <a href="#">Review {val.reviewNo}</a>
                      </h2>
                      <div className="message-date">
                        <i className="fa fa-calendar-o"></i>
                        {val.monthsAgo} months ago
                        <span className="rating"></span>
                      </div>
                    </div>
                  </div>
                  <p>{val.msg}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default LatestReviews;

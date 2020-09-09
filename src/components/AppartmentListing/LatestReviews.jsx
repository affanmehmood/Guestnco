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
    <div id="" class="widget widget-latest-reviews">
      <div class="widget-top">
        <h3 class="widget-title">Latest Reviews</h3>
      </div>
      <div class="widget-body">
        {reviewList.map((val, ind) => {
          return (
            <div class="review-block">
              <div class="media">
                <div class="media-left">
                  <a class="media-object">
                    <img
                      width="70"
                      height="70"
                      src={val.imageUrl}
                      class="img-circle"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div class="media-body media-middle">
                  <div class="msg-user-info">
                    <div class="msg-user-left">
                      <h2 class="title">
                        <a href="#">Review {val.reviewNo}</a>
                      </h2>
                      <div class="message-date">
                        <i class="fa fa-calendar-o"></i>
                        {val.monthsAgo} months ago
                        <span class="rating"></span>
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

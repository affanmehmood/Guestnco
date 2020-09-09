import React from "react";

const LatestPosts = () => {
  const latestPosts = [
    {
      type: "Appartment",
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      userName: "Altaf Hussain",
      description: "Lorem ipsum dolor sit amet, consectetur... ",
      timeAgo: " 1 month",
    },
    {
      type: "Rental",
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      userName: "Altaf Hussain",
      description: "Lorem ipsum dolor sit amet, consectetur... ",
      timeAgo: " 6 month",
    },
    {
      type: "Home",
      imageUrl: "https://wallpaperaccess.com/full/1142283.jpg",
      userName: "Altaf Hussain",
      description: "Lorem ipsum dolor sit amet, consectetur... ",
      timeAgo: " 1 year",
    },
  ];

  return (
    <div id="" class="widget widget-latest-posts">
      <div class="widget-top">
        <h3 class="widget-title">Latest Posts</h3>
      </div>
      <div class="widget-body">
        {latestPosts.map((val, ind) => {
          return (
            <div class="item-list-view">
              <div class="media property-item">
                <div class="media-left">
                  <div class="item-media item-media-thumb">
                    <a href="#">
                      <img
                        width="120"
                        height="80"
                        src={val.imageUrl}
                        class="img-responsive wp-post-image"
                        alt=""
                        loading="lazy"
                      />{" "}
                    </a>
                  </div>
                </div>
                <div class="media-body item-body clearfix">
                  <div class="item-title-head">
                    <div class="title-head-left">
                      <h2 class="title">
                        <a href="#">
                          Here&#8217;s What People Are Saying About {val.type}
                        </a>
                      </h2>
                      <i class=" fa fa-calendar-o"></i>
                      <span class="post-author">
                        {val.timeAgo} ago by
                        <a href="#"> {val.userName}</a>
                      </span>
                    </div>
                  </div>
                  <p>
                    {val.description}
                    <a href="#">Read more</a>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default LatestPosts;

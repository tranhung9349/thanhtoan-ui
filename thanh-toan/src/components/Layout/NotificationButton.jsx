import { Badge, Popover } from "antd";
import React from "react";

function NotificationButton() {
  const content = (
    <div className="flex flex-col gap-3 w-[240px]">
      <div class="flex justify-between">
        <span class="font-semibold">Mới</span>
        <a href="/">Xem tất cả</a>
      </div>
      <div class="flex flex-col gap-3">
        <span className="flex justify-between">
          Bạn có 1 thông báo mới{" "}
          <a href="/" class="">
            Chi tiết
          </a>
        </span>
        <span>Bạn có 1 thông báo mới dài loằng ngoằng xuống dòng thứ 2</span>
      </div>
      <div class="flex flex-col">
        <span class="font-semibold">Trước đó </span>
        <div class="">
          <p>Bạn có 1 thông báo cũ hơn </p>
          <p>Bạn có 1 thông báo cũ hơn </p>
          <p>Bạn có 1 thông báo cũ hơn </p>
          <p>Bạn có 1 thông báo cũ hơn </p>
          <p>Bạn có 1 thông báo cũ hơn </p>
        </div>
      </div>
    </div>
  );
  return (
    <div className="_notification-btn">
      <Popover content={content} title={"Thông báo"} trigger={"click"} arrow={false}>
        <Badge dot>
          <span className="">
            <i class="fa-regular fa-bell"></i>
          </span>
        </Badge>
      </Popover>
    </div>
  );
}

export default NotificationButton;

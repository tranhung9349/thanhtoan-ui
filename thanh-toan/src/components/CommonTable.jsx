import React from "react";
import { Table, Image, Popover } from "antd";
import EmptyImg from "../assets/images/empty-1.png";

function CommonTable() {
  const columns_example_1 = [
    {
      title: (
        <div>
          Column 1{" "}
          <span className="ml-2">
            <i class="fa-solid fa-sort"></i>
          </span>
        </div>
      ),
      key: "1",
      render: () => (
        <div>
          <a href="/" className="text-[#007CC3] font-semibold">
            0057/02
          </a>
        </div>
      ),
    },
    {
      title: (
        <div>
          Column 2{" "}
          <span className="ml-2">
            <i class="fa-solid fa-sort"></i>
          </span>
        </div>
      ),
      key: "2",
      render: () => (
        <div>
          <span>CT1</span>
        </div>
      ),
    },
    {
      title: (
        <div>
          Column 3{" "}
          <span className="ml-2">
            <i class="fa-solid fa-sort"></i>
          </span>
        </div>
      ),
      key: "3",
      render: () => (
        <div>
          <span>30/7/2022</span>
        </div>
      ),
    },
    {
      title: (
        <div>
          Column 4{" "}
          <span className="ml-2">
            <i class="fa-solid fa-sort"></i>
          </span>
        </div>
      ),
      key: "4",
      render: () => (
        <div>
          <span>LanNT</span>
        </div>
      ),
    },
    {
      title: (
        <div>
          Column 5{" "}
          <span className="ml-2">
            <i class="fa-solid fa-sort"></i>
          </span>
        </div>
      ),
      key: "5",
      render: () => (
        <div>
          <span className="font-semibold text-[#007CC3]">1.100.000</span>
        </div>
      ),
    },
    {
      title: (
        <div>
          Column 5{" "}
          <span className="ml-2">
            <i class="fa-solid fa-sort"></i>
          </span>
        </div>
      ),
      key: "5",
      render: () => (
        <div>
          <span>Lorem ipsum</span>
        </div>
      ),
    },
    {
      title: (
        <div>
          Column 6{" "}
          <span className="ml-2">
            <i class="fa-solid fa-sort"></i>
          </span>
        </div>
      ),
      key: "5",
      render: () => (
        <div>
          <span>Lorem ipsum</span>
        </div>
      ),
    },
    {
      title: "",
      key: "6",
      render: () => {
        return (
          <div className="_row-action flex gap-2">
            <span className="text-[#FFA634]">
              <i class="fa-regular fa-pen-to-square"></i>
            </span>
            <span className="text-[#FF4559]">
              <i class="fa-regular fa-trash"></i>
            </span>
            <span className="">
              <i class="fa-regular fa-file-pdf"></i>
            </span>
            <Popover
              placement="bottom"
              arrow={false}
              title={""}
              content={
                <div className="flex flex-col gap-3 _more-action px-3">
                  <span>Chứng từ có VAT hoặc không VAT</span>
                  <span>Chứng từ không kê khai hoá đơn</span>
                  <span>Chứng từ tạm ứng</span>
                  <span>Chứng từ nộp vào quỹ</span>
                </div>
              }
              trigger="hover"
            >
              <span>...</span>
            </Popover>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <article>
        <Table
          columns={columns_example_1}
          dataSource={[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ]}
          pagination={{}}
          locale={{
            emptyText: (
              <div className="px-3 py-4">
                <Image src={EmptyImg} preview={false} />
              </div>
            ),
          }}
        />
      </article>
    </>
  );
}

export default CommonTable;

import React from "react";
import { Table, Image, Steps, Tooltip } from "antd";

import EmptyImg from "../assets/images/empty-1.png";

function CommonTableWithRowExpand() {
  const columns_example_1 = [
    {
      title: (
        <div>
          STT
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
          Tên cấu hình
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
          Ngày áp dụng
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
          Loại chi phí
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
  ];

  return (
    <React.Fragment>
      <Table
        columns={columns_example_1}
        dataSource={[1]}
        expandable={{
          expandRowByClick: true,
          expandedRowRender: (record) => (
            <div className="flex items-center gap-3">
              <StepCustom />
              <Tooltip title={'Chỉnh sửa'}>
                <span className="cursor-pointer text-[#FFA634]">
                  <i class="fa-regular fa-pen-to-square"></i>
                </span>
              </Tooltip>
            </div>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        pagination={{}}
        locale={{
          emptyText: (
            <div className="px-3 py-4">
              <Image src={EmptyImg} preview={false} />
            </div>
          ),
        }}
        scroll={{
          x: 1279,
        }}
      />
    </React.Fragment>
  );
}

export default CommonTableWithRowExpand;

export const StepCustom = () => {
  const items = [
    {
      title: <span className="text-[#E2B950]">CB tạo</span>,
    },
    {
      title: <span className="text-[#008DF9]">Đã chuyển tp</span>,
      description: <></>,
    },
    {
      title: <span className="text-[#09B8AF]">Kế toán thanh toán xử lý</span>,
      description: <></>,
    },
    {
      title: <span className="text-[#80C8FF]">Chuyển hạch toán trên PIAS</span>,
      description: <></>,
    },
    {
      title: (
        <span className="text-[#FFA634]">KTTT chuyển TP/Trưởng nhóm KT</span>
      ),
      description: <></>,
    },
    {
      title: <span className="text-[#FFA634]">KTT duyệt</span>,
      description: <></>,
    },
    {
      title: <span className="text-[#FFA634]">Chuyển lãnh đạo phê duyệt</span>,
      description: <></>,
    },
    {
      title: <span className="text-[#008DF9]">Lãnh đạo duyệt</span>,
      description: <></>,
    },
  ];
  const customDot = (dot, { status, index }) => {
    return (
      <span>
        <i class="fa-solid fa-circle"></i>
      </span>
    );
  };
  return <Steps current={items.length} progressDot={customDot} items={items} />;
};

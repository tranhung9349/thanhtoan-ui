import {
  Badge,
  Button,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Switch,
  Tabs,
  Timeline,
} from "antd";
import React from "react";
import CommonTable from "../components/CommonTable";
import CommonTableWithRowExpand from "../components/CommonTableWithRowExpand";

function ComponentGuideline() {
  const [displayModalFilter, setDisplayModalFilter] = React.useState(false);
  const [displayModalCreate, setDisplayModalCreate] = React.useState(false);

  return (
    <>
      <article className="flex flex-col gap-3 flex-wrap">
        <section>
          {/* PAGE HEADER */}
          <div className="_page-header">
            <div className="flex items-center">
              <span className="mr-[8px] font-semibold text-base">
                Danh Sách Chứng Từ
              </span>
              <span className="mr-[32px]">
                <Badge count={999} overflowCount={9999} showZero />
              </span>
              <span className="mr-[8px]">
                <Input
                  className="_search-input"
                  placeholder="Nhập từ khoá tìm kiếm"
                />
              </span>
              <span>
                <Button
                  type="text"
                  icon={
                    <i class="fa-sharp fa-regular fa-arrow-up-wide-short text-[#707070]"></i>
                  }
                  onClick={() => setDisplayModalFilter(true)}
                />
              </span>
            </div>
          </div>
          {/* ---END PAGE HEADER */}
        </section>

        <Divider />

        <section>
          <Tabs
            type="card"
            items={new Array(3).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: (
                  <div className="flex items-center">
                    <span>Tab {id}</span>
                    <span className="ml-2">
                      <Badge count={999} overflowCount={9999} />
                    </span>
                  </div>
                ),
                key: id,
                children: `Content of Tab Pane ${id}`,
              };
            })}
          />
        </section>

        <Divider />

        <section className="flex gap-5">
          <section className=" border-r-1">
            <div className="font-semibold mb-2">Buttons Common</div>
            <div className="flex gap-2 flex-col">
              <Button
                type="primary"
                onClick={() => setDisplayModalCreate(true)}
              >
                <i class="fa-regular fa-plus mr-2"></i> Thêm mới
              </Button>
              <Button type="default">
                <i class="fa-regular fa-gear mr-2"></i>Tuỳ chọn cột
              </Button>
              <Button type="ghost">Huỷ bỏ</Button>
              <Button
                type="primary"
                className="!bg-[#E2B950] hover:!bg=[#E2B950]"
              >
                <i class="fa-regular fa-rotate-left mr-2"></i>
                Trả lại
              </Button>
              <Button
                type="primary"
                className="!bg-[#00ACC3] hover:!bg-[#00ACC3]"
              >
                <i class="fa-regular fa-arrow-turn-down-right mr-2"></i>
                Chuyển
              </Button>
              <Button type="primary">
                <i class="fa-regular fa-floppy-disk mr-2"></i> Cập nhật
              </Button>
              <Button type="default">
                <i class="fa-regular fa-print mr-2"></i>In
              </Button>
              <Button type="default">
                <i class="fa-regular fa-file-pdf mr-2"></i>Xem tất cả file đính
                kèm (pdf,ảnh)
              </Button>

              <Button type="link">
                <i class="fa-regular fa-upload mr-2"></i>Chọn file
              </Button>
            </div>

            <div className="my-5">
              <div className="mb-2 font-semibold text-base">
                Button with dropdown menu
              </div>
              <Dropdown
                className="_btn-dropdown"
                menu={{
                  items: [
                    {
                      label: "Chứng từ có VAT  hoặc không VAT (CT1)",
                      key: "1",
                    },
                    { label: "Chứng từ không kê khai hóa đơn (CT2)", key: "2" },
                    { label: "Chứng từ tạm ứng (CT3)", key: "3" },
                    { label: "Chứng từ nộp tiền vào quỹ (CT4)", key: "4" },
                  ],
                }}
                trigger={["hover"]}
                arrow={false}
              >
                <Button type="primary">
                  <i class="fa-regular fa-plus mr-2"></i> Thêm mới
                </Button>
              </Dropdown>
            </div>
          </section>

          <section className="ml-[32px]">
            <div className="flex flex-col gap-5">
              <Switch
                className="_view-switch"
                checked
                checkedChildren={"Cần bổ sung"}
                unCheckedChildren={"Đã đủ"}
              ></Switch>

              <Switch
                className="_view-switch"
                checkedChildren={"Cần bổ sung"}
                unCheckedChildren={"Đã đủ"}
              ></Switch>
            </div>
          </section>

          <section className="flex-1 ml-[32px]">
            <Form layout="vertical">
              <Row gutter={[12, 0]}>
                <Col lg={24}>
                  <Form.Item label={"Input fieldname "} name={"field1"}>
                    <Input size="large" placeholder="Input placeholder...." />
                  </Form.Item>
                </Col>
                <Col lg={24}>
                  <Form.Item label={"Select fieldname "} name={"field2"}>
                    <Select size="large" placeholder={"Select placeholder..."}>
                      <Select.Option>Select Value 1</Select.Option>
                      <Select.Option>Select Value 2</Select.Option>
                      <Select.Option>Select Value 3</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col lg={24}>
                  <Form.Item label={"Input group fieldname 1"} name={"field1"}>
                    <Input.Group className="_input-range-group-number">
                      <Select
                        size="large"
                        placeholder={"Select placeholder..."}
                      >
                        <Select.Option>Select Value 1</Select.Option>
                        <Select.Option>Select Value 2</Select.Option>
                        <Select.Option>Select Value 3</Select.Option>
                      </Select>
                      <Input size="large" placeholder="Từ" />
                      <Input size="large" placeholder="Đến" />
                    </Input.Group>
                  </Form.Item>
                </Col>
                <Col lg={24}>
                  <Form.Item label={"Date range picker field"} name={"field1"}>
                    <DatePicker.RangePicker
                      size="large"
                      className="w-full"
                      placeholder={["Ngày bắt đầu", "Ngày kết thúc"]}
                    />
                  </Form.Item>
                </Col>
                <Col lg={24}>
                  <Form.Item label={"Date picker field"} name={"field1"}>
                    <DatePicker
                      size="large"
                      className="w-full"
                      placeholder="Chọn ngày"
                    />
                  </Form.Item>
                </Col>

                <Col lg={24}>
                  <Form.Item label={"datepicker field"} name={"field1"}>
                    <DatePicker
                      size="large"
                      className="w-full"
                      placeholder="Chọn ngày"
                    />
                  </Form.Item>
                </Col>

                <Col lg={24}>
                  <Form.Item label={"Input group field type 2"} name={"field1"}>
                    <Input.Group className="_input-group-type2">
                      <Input size="large" />
                      <Select size="large">
                        <Select.Option>VND</Select.Option>
                        <Select.Option>USD</Select.Option>
                        <Select.Option>CNY</Select.Option>
                      </Select>
                    </Input.Group>
                  </Form.Item>
                </Col>

                <Col lg={24}>
                  <Form.Item
                    label={"Input field with copy suffix"}
                    name={"field1"}
                  >
                    <Input
                      size={"large"}
                      suffix={
                        <span className="cursor-pointer text-[#7D7E7E] text-sm">
                          <i class="fa-regular fa-pen-to-square"></i>
                        </span>
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </section>
        </section>
      </article>

      <CommonTable />

      <CommonTableWithRowExpand />

      <div className="rounded-[6px] bg-[#F6F6F6] p-4 w-1/2 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[#707070]">
            Số tiền thanh toán có hoá đơn VAT
          </span>
          <span>
            <Input size="large" value={0} disabled />
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#707070]">
            Số tiền thanh toán không có hoá đơn VAT
          </span>
          <span>
            <Input size="large" value={0} />
          </span>
        </div>
        <Divider className="!m-0" dashed />
        <div className="flex items-center justify-between">
          <span className="text-black font-semibold">
            Tổng số tiền được thanh toán
          </span>
          <span>
            <Input size="large" value={0} disabled />
          </span>
        </div>
      </div>

      <div className="mt-[32px]">
        <Timeline
          items={[
            {
              dot: (
                <span className="rounded-md bg-[#E2B950] text-white flex items-center justify-center w-[26px] h-[26px]">
                  <i class="fa-regular fa-arrow-rotate-left"></i>
                </span>
              ),
              children: (
                <div className="flex flex-col gap-4">
                  <div className="text-black font-semibold">
                    Trả lại:{" "}
                    <span className="text-[#707070] font-normal">
                      (08:20:25 20/06/2023)
                    </span>
                  </div>
                  <div className="text-black font-semibold">
                    Nguyễn Hồng Điệp{" "}
                    <span className="text-[#707070] font-normal">(Diepng)</span>
                  </div>
                  <div className="text-[#707070] font-normal">
                    {" "}
                    Ghi chú: Lorem ipsum
                  </div>
                </div>
              ),
            },
            {
              dot: (
                <span className="rounded-md bg-[#00ACC3] text-white flex items-center justify-center w-[26px] h-[26px]">
                  <i class="fa-regular fa-share"></i>
                </span>
              ),
              children: (
                <div className="flex gap-5">
                  <div className="flex flex-col gap-4 rounded-lg bg-[#F0F9FF] p-3">
                    <div className="text-black font-semibold">
                      Trả lại:{" "}
                      <span className="text-[#707070] font-normal">
                        (08:20:25 20/06/2023)
                      </span>
                    </div>
                    <div className="text-black font-semibold">
                      Nguyễn Hồng Điệp{" "}
                      <span className="text-[#707070] font-normal">
                        (Diepng)
                      </span>
                    </div>
                    <div className="text-[#707070] font-normal">
                      {" "}
                      Ghi chú: Lorem ipsum
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 rounded-lg bg-[#F0F9FF] p-3">
                    <div className="text-black font-semibold">
                      Trả lại:{" "}
                      <span className="text-[#707070] font-normal">
                        (08:20:25 20/06/2023)
                      </span>
                    </div>
                    <div className="text-black font-semibold">
                      Nguyễn Hồng Điệp{" "}
                      <span className="text-[#707070] font-normal">
                        (Diepng)
                      </span>
                    </div>
                    <div className="text-[#707070] font-normal">
                      {" "}
                      Ghi chú: Lorem ipsum
                    </div>
                  </div>
                </div>
              ),
            },
            {
              dot: (
                <span className="rounded-md bg-[#007CC3] text-white flex items-center justify-center w-[26px] h-[26px]">
                  <i class="fa-regular fa-plus"></i>
                </span>
              ),
              children: (
                <div className="flex flex-col gap-4">
                  <div className="text-black font-semibold">
                    Trả lại:{" "}
                    <span className="text-[#707070] font-normal">
                      (08:20:25 20/06/2023)
                    </span>
                  </div>
                  <div className="text-black font-semibold">
                    Nguyễn Hồng Điệp{" "}
                    <span className="text-[#707070] font-normal">(Diepng)</span>
                  </div>
                  <div className="text-[#707070] font-normal">
                    {" "}
                    Ghi chú: Lorem ipsum
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>

      {/* Modal filter */}
      <Modal
        open={displayModalFilter}
        centered
        title={"Tìm kiếm"}
        footer={null}
        onCancel={() => setDisplayModalFilter(false)}
        width={window.innerWidth < 768 ? "100%" : "75%"}
      >
        <Form layout="vertical">
          <Row gutter={[12, 0]}>
            <Col lg={6}>
              <Form.Item label={"Input fieldname "} name={"field1"}>
                <Input size="large" placeholder="Input placeholder...." />
              </Form.Item>
            </Col>
            <Col lg={6}>
              <Form.Item label={"Select fieldname "} name={"field2"}>
                <Select size="large" placeholder={"Select placeholder..."}>
                  <Select.Option>Select Value 1</Select.Option>
                  <Select.Option>Select Value 2</Select.Option>
                  <Select.Option>Select Value 3</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col lg={6}>
              <Form.Item label={"Input group fieldname 1"} name={"field1"}>
                <Input.Group className="_input-range-group-number">
                  <Select size="large" placeholder={"Select placeholder..."}>
                    <Select.Option>Select Value 1</Select.Option>
                    <Select.Option>Select Value 2</Select.Option>
                    <Select.Option>Select Value 3</Select.Option>
                  </Select>
                  <Input size="large" placeholder="Từ" />
                  <Input size="large" placeholder="Đến" />
                </Input.Group>
              </Form.Item>
            </Col>
            <Col lg={6}>
              <Form.Item label={"Input group fieldname 1"} name={"field1"}>
                <Input.Group className="_input-range-group-number">
                  <Select size="large" placeholder={"Select placeholder..."}>
                    <Select.Option>Select Value 1</Select.Option>
                    <Select.Option>Select Value 2</Select.Option>
                    <Select.Option>Select Value 3</Select.Option>
                  </Select>
                  <Input size="large" placeholder="Từ" />
                  <Input size="large" placeholder="Đến" />
                </Input.Group>
              </Form.Item>
            </Col>
            <Col lg={6}>
              <Form.Item label={"Date range picker field"} name={"field1"}>
                <DatePicker.RangePicker size="large" />
              </Form.Item>
            </Col>
          </Row>
          <div className="flex justify-between">
            <div className="text-[#FF4559]">Xoá bộ lọc</div>
            <div>
              <Button
                type="text"
                className="text-[#B1B1B1] font-medium hover:!bg-transparent hover:!text-[#7D7E7E]"
              >
                Huỷ bỏ
              </Button>
              <Button
                type="text"
                className="text-[#007CC3] font-medium hover:!bg-transparent hover:!text-[#007CC3]"
              >
                Áp dụng
              </Button>
            </div>
          </div>
        </Form>
      </Modal>

      <Modal
        open={displayModalCreate}
        centered
        title={"Chứng từ không kê khai hóa đơn (CT2)"}
        footer={null}
        onCancel={() => setDisplayModalCreate(false)}
        width={window.innerWidth < 768 ? "100%" : "75%"}
      >
        <Form layout="vertical">
          <div className="mb-3">
            <div className="_sector-title">Thông tin bắt buộc</div>
          </div>
          <Row gutter={[12, 0]}>
            <Col lg={12}>
              <Form.Item
                label={"Input fieldname "}
                name={"field1"}
                rules={[{ required: true, message: "" }]}
              >
                <Input size="large" placeholder="Input placeholder...." />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item label={"Input fieldname "} name={"field1"}>
                <Input size="large" placeholder="Input placeholder...." />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item label={"Input fieldname "} name={"field1"}>
                <Input size="large" placeholder="Input placeholder...." />
              </Form.Item>
            </Col>

            <Col lg={12}>
              <Form.Item label={"Select fieldname "} name={"field2"}>
                <Select size="large" placeholder={"Select placeholder..."}>
                  <Select.Option>Select Value 1</Select.Option>
                  <Select.Option>Select Value 2</Select.Option>
                  <Select.Option>Select Value 3</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item label={"Input group fieldname 1"} name={"field1"}>
                <Input.Group className="_input-range-group-number">
                  <Select size="large" placeholder={"Select placeholder..."}>
                    <Select.Option>Select Value 1</Select.Option>
                    <Select.Option>Select Value 2</Select.Option>
                    <Select.Option>Select Value 3</Select.Option>
                  </Select>
                  <Input size="large" placeholder="Từ" />
                  <Input size="large" placeholder="Đến" />
                </Input.Group>
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item label={"Input group fieldname 1"} name={"field1"}>
                <Input.Group className="_input-range-group-number">
                  <Select size="large" placeholder={"Select placeholder..."}>
                    <Select.Option>Select Value 1</Select.Option>
                    <Select.Option>Select Value 2</Select.Option>
                    <Select.Option>Select Value 3</Select.Option>
                  </Select>
                  <Input size="large" placeholder="Từ" />
                  <Input size="large" placeholder="Đến" />
                </Input.Group>
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item label={"Date range picker field"} name={"field1"}>
                <DatePicker.RangePicker size="large" className="w-full" />
              </Form.Item>
            </Col>
          </Row>

          <div className="flex justify-end">
            <div className="flex gap-3">
              <Button type="ghost">Huỷ</Button>
              <Button type="primary">
                <i className="fa-regular fa-check mr-2"></i> Xác nhận
              </Button>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
}

export default ComponentGuideline;

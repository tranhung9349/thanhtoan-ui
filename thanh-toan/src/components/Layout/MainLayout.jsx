import React from "react";
import { Avatar, Layout, Tooltip } from "antd";
import AppMenu from "./AppMenu";
import NotificationButton from "./NotificationButton";

const { Content, Sider } = Layout;

function MainLayout({ children }) {
  const [collapsed, setCollapsed] = React.useState(true);

  return (
    <article className="bg-slate-300 w-screen h-screen mx-0 my-0">
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="flex flex-col relative items-center mt-[24px]">
            <div>
              <span
                className="absolute right-[-30px] rounded-full bg-white px-3 py-2 cursor-pointer shadow-md"
                onClick={() => setCollapsed(!collapsed)}
              >
                <i class="fa-solid fa-bars"></i>
              </span>
            </div>
            <div className="mt-[24px]">

            </div>
            <AppMenu />
          </div>
          <div className="absolute bottom-4 left-[26px] flex items-center gap-3 justify-between w-full pr-[48px] ">
            <Avatar
            className="_user-avt"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              }
            />
            <div className="flex gap-5 cursor-pointer _user-actions">
              <Tooltip title={"Đăng nhập lại"}>
                <span className="text-white text-base">
                  <i class="fa-regular fa-rotate-right"></i>
                </span>
              </Tooltip>

              <Tooltip title={"Quản lý tài khoản kí số cá nhân"}>
                <span className="text-white text-base">
                  <i class="fa-regular fa-pager"></i>
                </span>
              </Tooltip>

              <Tooltip title={"Đăng xuất"}>
                <span className="text-white text-base">
                  <i class="fa-regular fa-arrow-right-to-bracket"></i>
                </span>
              </Tooltip>
            </div>
          </div>
        </Sider>
        <Layout>
          <Content>
            <NotificationButton />
            <section className="px-[24px] py-[16px]">{children}</section>
          </Content>
        </Layout>
      </Layout>
    </article>
  );
}

export default MainLayout;

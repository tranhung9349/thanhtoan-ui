import React from "react";
import { Layout } from "antd";
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
              <span className="absolute right-[-30px] rounded-full bg-white px-3 py-2 cursor-pointer shadow-md"
                onClick={()=> setCollapsed(!collapsed)}
              >
                <i class="fa-solid fa-bars"></i>
              </span>
            </div>
            <AppMenu />
          </div>
        </Sider>
        <Layout>
          <Content>
            <NotificationButton/>
            <section className="px-[24px] py-[16px]">{children}</section>
          </Content>
        </Layout>
      </Layout>
    </article>
  );
}

export default MainLayout;

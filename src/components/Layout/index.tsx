import { RouteProps } from "react-router";
import SideBar from "../SideBar";
import "./styles.scss";

interface ILayoutProps {
  children: RouteProps["children"];
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <main className="layout">
      <SideBar />

      <div className="layout__content">
        <span className="layout__tags layout__top-tags">
          <span className="layout__tags layout__tag-html">&lt;html&gt;</span>
          &lt;body&gt;
        </span>

        {children}
        <span className="layout__tags layout__bottom-tags">
          &lt;/body&gt;
          <span className="layout__tags layout__tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </main>
  );
};

export default Layout;

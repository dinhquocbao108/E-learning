import classnames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Action from "../Action/Action";
import Search from "../Search/Search";
import styles from "./header.module.scss";
// import userLocal from "~/api/userLocal";
import logo from "~/assets/vendor/logoElearning.png";
const cx = classnames.bind(styles);
// let handleLogout = () => {
//   userLocal.remove();
// };
export default function Header() {
  // const heading = "Học Lập Trình Để Đi Làm";

  const [cateList, setCateList] = useState([]);

  const BASE_URL =
    "https://e-learning-976fe-default-rtdb.asia-southeast1.firebasedatabase.app/";
  useEffect(() => {
    (async () => {
      const response = await fetch(BASE_URL + "cate.json");
      var cateListData = await response.json();
      setCateList([...cateListData]);
    })();
  }, []);

  const [openCourses, setOpenCourses] = useState(false);
  const handleOpenCourses = () => {
    setOpenCourses(!openCourses);
  };
  const handleCloseCourses = () => {
    setOpenCourses(false);
  };
  return (
    <div className={cx("header")}>
      <div className={cx("header-left")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          {/* <h4 className={cx("logo-heading")}>{heading}</h4> */}
          <div className={cx("search")}></div>
          <Search />
        </div>
      </div>
      <div className={cx("header-menu")}>
        <ul className={cx("header-list")}>
          <li className={cx("header-item")}>
            <Link className={cx("header-item-link")} to="/courseList">
              Khóa học
            </Link>

            <div className={cx("item-list-container")}>
              <ul className={cx("item-list")}>
                {cateList.map((cate, index) => (
                  <li key={index}>
                    <Link to={`/courseList?category=${cate.categoryId}`}>
                      {cate.categoryName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className={cx("header-item")}>
            <Link className={cx("header-item-link")} to="/blog">
              Blog
            </Link>
          </li>
          <li className={cx("header-item")}>
            <Link className={cx("header-item-link")} to="/about">
              Thông tin
            </Link>
          </li>
          <li className={cx("header-item")}>
            <Link className={cx("header-item-link")} to="/cart">
              Giỏ hàng
            </Link>
          </li>
        </ul>
      </div>
      <div className={cx("menuMobile")} onClick={handleOpenCourses}>
        <i className="fa fa-bars"></i>
        {openCourses && (
          <>
            <div className={cx("overlay")} onClick={handleCloseCourses}></div>
            <div className={cx("menuMobile-wrapper")}>
              <ul className={cx("header-list")}>
                <li className={cx("header-item")}>
                  <a href="/courseList">Khóa học</a>
                </li>
                <li className={cx("header-item")}>
                  <a href="/blog">Blog</a>
                </li>
                <li className={cx("header-item")}>
                  <a href="/about">Thông tin</a>
                </li>
                <li className={cx("header-item")}>
                  <a href="/cart">Giỏ hàng</a>
                </li>
                {/* <li className={cx("header-item")}>
                  <a onClick={handleLogout} href="">Đăng xuất</a>
                </li> */}
              </ul>
            </div>
          </>
        )}
      </div>
      <div className={cx("header-right")}>
        <Action />
      </div>
    </div>
  );
}

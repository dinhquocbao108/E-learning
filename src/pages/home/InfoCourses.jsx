import React from "react";
import PropTypes from "prop-types";
import styles from "./infoCouses.module.scss";
import classNames from "classnames/bind";
InfoCourses.propTypes = {};
const cx = classNames.bind(styles);
function InfoCourses(props) {
  return (
    <div className={cx("container")}>
      <div className={cx("main-content")}>
        <div className={cx("courses-home")}>
          <div className={cx("item", "large-item")}>
            <div className={cx("item-content")}>
              <h3>KHÓA HỌC</h3>
              <p>
                <span className={cx("bold-content")}>
                  Học qua dự án thực tế
                </span>
                , học đi đôi với hành, không lý thuyết lan man, phân tích cội
                nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự
                án lớn ngoài thực tế để học viên học xong làm được ngay
              </p>
              <ul>
                <li>Hơn 1000 bài tập và dự án thực tế</li>
                <li>Công nghệ cập nhật mới nhất</li>
                <li>Hình ảnh, ví dụ, bài giảng sinh động trực quan</li>
                <li>Tư duy phân tích, giải quyết vấn đề trong dự án</li>
                <li>
                  Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong
                  dự án
                </li>
                <li>Cơ hội thực tập tại các công ty lớn như FPT, Microsoft</li>
              </ul>
            </div>
          </div>
          <div className={cx("item", "small-item-b")}>
            <div className={cx("item-content")}>
              <h3>Lộ trình phù hợp</h3>
              <ul>
                <li>
                  <span>
                    Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao
                  </span>
                </li>
                <li>
                  <span>
                    Học, luyện tập code, kỹ thuật phân tích, soft skill
                  </span>
                </li>
                <li>
                  <span>
                    Huấn luyện để phát triển năng lực và niềm đam mê lập trình
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("item", "small-item-a")}>
            <div className={cx("item-content")}>
              <h3>HỆ THỐNG HỌC TẬP</h3>
              <ul>
                <li>
                  <span>
                    Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ
                    học viên
                  </span>
                </li>
                <li>
                  <span>
                    Học, luyện tập code, kỹ thuật phân tích, soft skill
                  </span>
                </li>
                <li>
                  <span>
                    Thống kê, so sánh khả năng học của các học viên cùng level
                    để đưa ra mục tiêu học tập
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("item", "small-item-b")}>
            <div className={cx("item-content")}>
              <h3>GIẢNG VIÊN</h3>
              <ul>
                <li>
                  <span>
                    Tương tác cùng mentor và giảng viên qua phần thảo luận
                  </span>
                </li>
                <li>
                  <span>Review code và đưa ra các nhận xét góp ý</span>
                </li>
                <li>
                  <span>Chấm điểm tương tác thảo luận giữa các học viên</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("item", "small-item-c")}>
            <div className={cx("item-content")}>
              <h3>CHỨNG NHẬN</h3>
              <ul>
                <li>
                  <span>Chấm bài và có thể vấn đáp trực tuyến để review</span>
                </li>
                <li>
                  <span>
                    Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến
                    độc đáo
                  </span>
                </li>
                <li>
                  <span>
                    Kết nối CV của bạn đến với các đối tác của V learning
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCourses;

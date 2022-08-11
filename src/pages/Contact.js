import React from "react";
import BannerImage from "../assets/back6.jpeg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1> 우리에게 연락하세요</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">이름</label>
          <input name="name" placeholder="이름 입력..." type="text" />
          <label htmlFor="email">이메일</label>
          <input name="email" placeholder="이메일 입력..." type="email" />
          <label htmlFor="message">문의내용</label>
          <textarea
            rows="6"
            placeholder="마사지 입력..."
            name="message"
            required
          ></textarea>
          <button type="submit"> 신청하기</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

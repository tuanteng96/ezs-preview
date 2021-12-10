/*eslint-disable */

import React from 'react'

export default function Footer() {
    return (
        <footer id="footer-1" className="bg-color-01 footer division">
            <div className="container">
                {/* FOOTER CONTENT */}
                <div className="row">
                    {/* FOOTER INFO */}
                    <div className="col-md-6 col-lg-4 col-xl-5">
                        <div className="footer-info mb-40">
                            {/* For Retina Ready displays take a image with double the amount of pixels that your image will be 
								displayed (e.g 408 x 120  pixels) */}
                            <img src="https://cser.vn/Upload/image/2021/12/01/undefined_2021-12-01-152949.png" alt="Cser Beauty" width={204} height={60} />
                            {/* Footer Contacts */}
                            <div className="footer-contacts txt-color-05 mt-25">
                                {/* Address */}
                                <p>ACM building - 22/42 Vũ Ngọc Phan<br />
                                    Láng Hạ, Đống Đa, Hà Nội</p>
                                {/* Email */}
                                <p className="foo-email">E: <a href="mailto:lienhe@ezs.vn">lienhe@ezs.vn</a></p>
                                {/* Phone */}
                                <p>P: 0981883338</p>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER LINKS */}
                    <div className="col-md-3 col-lg-2">
                        <div className="footer-links mb-40">
                            {/* Title */}
                            <h6 className="h6-lg txt-color-01">Sản phẩm</h6>
                            <ul className="clearfix txt-color-05">
                                <li>
                                    <p>
                                        <a href="/san-pham/cham-soc-da-mat-8977.aspx">Chăm sóc da mặt</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="/san-pham/son-10007.aspx">Son</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="/san-pham/thuc-pham-chuc-nang-10011.aspx">Thực phẩm chức năng</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="/san-pham/cham-soc-body-8978.aspx">Chăm sóc Body</a>
                                    </p>
                                </li>
                            </ul>
                            {/* Footer Links */}
                        </div>
                    </div>
                    {/* FOOTER LINKS */}
                    <div className="col-md-3 col-lg-2">
                        <div className="footer-links mb-40">
                            {/* Title */}
                            <h6 className="h6-lg txt-color-01">Dịch vụ</h6>
                            <ul className="clearfix txt-color-05">
                                <li>
                                    <p>
                                        <a href="/dv/san-pham/triet-long-8980.aspx">Triệt lông</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="/dv/san-pham/tam-trang-8981.aspx">Tắm trắng</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="/dv/san-pham/cham-soc-da-8979.aspx">Chăm sóc da</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* FOOTER NEWSLETTER FORM */}
                    <div className="col-md-8 col-lg-4 col-xl-3">
                        <div className="footer-form mb-20">
                            {/* Title */}
                            <h6 className="h6-lg txt-color-01">Kết nối với chúng tôi:</h6>
                            {/* Text */}
                            <p className="txt-color-05 mb-20">Cập nhật sớm nhất thông tin về các chương trình ưu đãi</p>
                            {/* Newsletter Form Input */}
                            <div className="input-group js-submit-reg">
                                <input type="text" className="form-control" placeholder="Email" autoComplete="off" />
                                <span className="input-group-btn">
                                    <button type="button" className="btn txt-color-06 send-email" data-dismiss="alert">
                                        <i className="far fa-arrow-alt-circle-right" />
                                    </button>
                                </span>
                            </div>
                            {/* Newsletter Form Notification */}
                            <label htmlFor="s-email" className="form-notification error" />
                        </div>
                    </div>
                    {/* END FOOTER NEWSLETTER FORM */}
                </div>
                {/* END FOOTER CONTENT */}
                {/* BOTTOM FOOTER */}
                <div className="bottom-footer txt-color-05">
                    <div className="row d-flex align-items-center">
                        {/* FOOTER COPYRIGHT */}
                        <div className="col-lg-6">
                            <div className="footer-copyright">
                                <div className="stock-checked">
                                    <p>Cơ sở hiện tại: </p>
                                <i className="fal fa-map-marker-times" />Cser Hà Nội</div>
                            </div>
                        </div>
                        {/* BOTTOM FOOTER LINKS */}
                        <div className="col-lg-6">
                            <ul className="bottom-footer-list text-right clearfix">
                                <li>
                                    <p className="first-list-link"><a target="_blank" href="https://fb.com/phanmemezs"><i className="fab fa-facebook-f" />Fanpage</a></p>
                                </li>
                                <li>
                                    <p><a href="https://apps.apple.com/us/app/cser-vn/id1476018610"><i className="fab fa-app-store" />App store</a></p>
                                </li>
                                <li>
                                    <p className="last-li"><a href="https://play.google.com/store/apps/details?id=vn.cservn2020"><i className="fab fa-google-play" />CH play</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* END BOTTOM FOOTER */}
            </div>
            {/* End container */}
        </footer>
    )
}

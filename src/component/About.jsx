import React from "react";
import { NavLink } from "react-router-dom";
import { MdSchool, MdComputer } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { GiCampingTent, GiPistolGun } from "react-icons/gi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import kamp from "../images/kamp.jpg";

function About() {
  console.log(kamp);
  return (
    <div className="mt-5">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2004 - 2012"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Eğitme ilk adım</h3>
          <h6 className="vertical-timeline-element-subtitle text-base">
            Esenler/İstanbul
          </h6>
          <hr />
          <p>Atışalanı İsmetpaşa İlkokulu Ve Ortaokulu</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012 - 2016"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Lise</h3>
          <h6 className="vertical-timeline-element-subtitle text-base">
            Esenler/İstanbul
          </h6>
          <hr />
          <p>Esenler Güzide Özdilek Anadolu İmam Hatip Lisesi</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - ..."
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GiCampingTent />}
        >
          <h3 className="vertical-timeline-element-title">Doğayla İç İçe</h3>
          <h6 className="vertical-timeline-element-subtitle text-base">Türkiye</h6>
          <hr />
          <p>Türkiye İzcilik Federasyonu'da Yardımcı lider.</p>
          <img className="img-thumbnail" src={kamp} alt="" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Üniversite</h3>
          <h6 className="vertical-timeline-element-subtitle text-base">
            Merkez/Çanakkale
          </h6>
          <hr />
          <p>Çanakkale Onsekiz Mart Üniversitesi-İlahiyat</p>
          <p>Mart 2021 tarihinde okulu bırakma kararı aldım.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - ..."
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdComputer />}
        >
          <h3 className="vertical-timeline-element-title">Yazılımla Tanışma</h3>
          <h6 className="vertical-timeline-element-subtitle text-base">Youtube-Udemy</h6>
          <hr />
          <p>Frontend tarafında kendimi geliştirmeye başladım.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="3/2021 - 9/2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GiPistolGun />}
        >
          <h3 className="vertical-timeline-element-title">T.S.K.</h3>
          <h6 className="vertical-timeline-element-subtitle text-base">Reyhanlı/Hatay</h6>
          <hr />
          <p>
            Türk Silahlı Kuvvetleri'nde,Suriye sınırında Hudut bekçisi olarak 6
            aylık vatani görevimi yaptım.
          </p>
          <img
            className="img-thumbnail"
            src="https://serving.photos.photobox.com/791569438c1eb34a29ecd6ead0c4e5d9709c9b81c5a2a607ccb93454af815d02cce16e02.jpg"
            alt=""
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdComputer />}
        >
          <h3 className="vertical-timeline-element-title">
            Jr. Frontend Developer
          </h3>
          <h6 className="vertical-timeline-element-subtitle text-base">Remote</h6>
          <hr />
          <p>
            Askerden sonra React öğrenmeye başladım ve öğrenmeye aç bir şekilde
            öğrenme-deneme-geliştirme süreçlirenden geçiyorum.
          </p>
          <br />
          <button className="btn btn-primary">
            <NavLink to="/projects" className="nav-link text-light fw-bold">
              Yaptığım Projeler
            </NavLink>
          </button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="06/2022 - ..."
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<HiOutlineDesktopComputer />}
        >
          <h3 className="vertical-timeline-element-title">İŞ</h3>
          <h6 className="vertical-timeline-element-subtitle text-base">
            İstanbul & Remote 
          </h6>
          <hr />
          <p>Ntt Data</p>
          <p>Haziran 2022'de Frontend developer olarak çalışmaya başladım.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default About;

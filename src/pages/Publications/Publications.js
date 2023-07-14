import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"; 
import PublicationCard from "../../components/publicationsCard/PublicationCard"; 
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  // greeting,
  PublicationsHeader,
  publicationsHeader,
  Journal,
  Conference,
  Thesis,
  Workshop
} from "../../portfolio.js"; 
import "./Publications.css";
import PublicationsImg from "./PublicationsImg";

class Publications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="Publication-main">
        <Header theme={theme} />
        <div className="basic-Publications">
          <Fade bottom duration={2000} distance="40px">
            <div className="Publication-heading-div">
              <div className="Publication-heading-img-div"> 
                <PublicationsImg theme={theme} />
              </div>
              <div className="Publication-heading-text-div">
                <h1
                  className="Publication-heading-text"
                  style={{ color: theme.text }}
                >
                  {PublicationsHeader.title}
                </h1>
                <p
                  className="Publication-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {PublicationsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div> 
        {/* Journal  */}
        {Journal.data.length > 0 ? (
          <div className="basic-Publication">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.titleJ}
                  </h1>
                  <p
                    className="Publication-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {Journal.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div>

        {/* Conference  */}
        {Conference.data.length > 0 ? (
          <div className="basic-Publication">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.titleC}
                  </h1>
                  <p
                    className="Publication-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {Conference.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div>

        {/* Thesis  */}
        {Thesis.data.length > 0 ? (
          <div className="basic-Publication">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.titleT}
                  </h1>
                  <p
                    className="Publication-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {Thesis.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div>

        {/* Workshop  */}
        {Workshop.data.length > 0 ? (
          <div className="basic-Publication">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.titleW}
                  </h1>
                  <p
                    className="Publication-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {Workshop.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Publications;

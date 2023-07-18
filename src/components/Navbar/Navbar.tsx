import { useEffect, useState, Fragment } from "react";
import "./Navbar.sass";
import NetflixIcon from "../../icons/Netflix";
import LoopIcon from "../../icons/Loop";
import NotificationIcon from "../../icons/Notification";
import { MOBILE_BREAKPOINT } from "../../constants";
import { useWindowSize } from "../../hooks/useWindowSize";

const Navbar = () => {
  const { width } = useWindowSize();

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__item">
          <NetflixIcon
            style={{ width: "100px", height: "100%", cursor: "pointer" }}
          />
          {width > MOBILE_BREAKPOINT ? (
            <Fragment>
              <p className="navbar__container__item__tab">Accueil</p>
              <p className="navbar__container__item__tab">Séries</p>
              <p className="navbar__container__item__tab">Films</p>
              <p className="navbar__container__item__tab">
                Nouveautés les plus regardées
              </p>
              <p className="navbar__container__item__tab">Ma liste</p>
              <p className="navbar__container__item__tab">
                Explorer par langue
              </p>
            </Fragment>
          ) : (
            <Fragment>
              <p className="navbar__container__item__tab">Parcourir</p>
              <span className="navbar__dropdown" role="presentation"></span>
            </Fragment>
          )}
        </div>
        <div className="navbar__container__item">
          <div className="navbar__container__item__tab">
            <LoopIcon />
          </div>
          <div className="navbar__container__item__tab">
            <NotificationIcon />
          </div>
          <img src="https://occ-0-767-1335.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABblk273QcrCjR5jPR9T6L9taELQ9mbaVRrNiR2HzjkJRGuz7kz-ZQAPz4hEXsNe2xFZP7FZtdetaa8xsfjD1apzCdT9BqtE.png?r=3e2" />
          <span className="navbar__dropdown" role="presentation"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

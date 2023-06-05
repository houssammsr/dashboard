import { useState, useCallback } from "react";
import EventDetails from "../components/EventDetails";
import PortalPopup from "../components/PortalPopup";
import "./Dashboard.css";
const Dashboard = () => {
  const [isEventDetailsPopupOpen, setEventDetailsPopupOpen] = useState(false);
  const [isEventDetailsPopup1Open, setEventDetailsPopup1Open] = useState(false);
  const [isEventDetailsPopup2Open, setEventDetailsPopup2Open] = useState(false);

  const openEventDetailsPopup = useCallback(() => {
    setEventDetailsPopupOpen(true);
  }, []);

  const closeEventDetailsPopup = useCallback(() => {
    setEventDetailsPopupOpen(false);
  }, []);

  const openEventDetailsPopup1 = useCallback(() => {
    setEventDetailsPopup1Open(true);
  }, []);

  const closeEventDetailsPopup1 = useCallback(() => {
    setEventDetailsPopup1Open(false);
  }, []);

  const openEventDetailsPopup2 = useCallback(() => {
    setEventDetailsPopup2Open(true);
  }, []);

  const closeEventDetailsPopup2 = useCallback(() => {
    setEventDetailsPopup2Open(false);
  }, []);

  const onValidateButtonClick = useCallback(() => {
  }, []);

  const onValidateButton1Click = useCallback(() => {
  }, []);

  const onValidateButton2Click = useCallback(() => {
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="events-lines-conatiner">
          <div className="line">
            <div className="event-card">
              <div className="img-and-title">
                <img className="event-img-icon" alt="" src="/eventimg@2x.png" />
                <div className="title">
                  <div className="event-title">Omra Juillet 2023</div>
                  <div className="organisation-title">ESI-SBA SW</div>
                </div>
              </div>
              <button
                className="details-button"
                onClick={openEventDetailsPopup}
              >
                <div className="details">Details</div>
                <img className="vector-icon" alt="" src="/vector.svg" />
              </button>
              <div className="start-date-container">
                <div className="start-date-text">Start Date</div>
                <div className="date">
                  <img className="icon" alt="" src="/icon.svg" />
                  <div className="event-title">July 21, 2023</div>
                </div>
              </div>
              <div className="end-date-container">
                <div className="start-date-text">End Date</div>
                <div className="date">
                  <img className="icon" alt="" src="/icon.svg" />
                  <div className="event-title">August 21, 2023</div>
                </div>
              </div>
              <div className="contact-info-container">
                <div className="contact-text">Contact</div>
                <div className="phone-info">
                  <img className="icon1" alt="" src="/icon1.svg" />
                  <div className="event-title">05 55 99 55 08</div>
                </div>
                <div className="phone-info">
                  <img className="icon2" alt="" src="/icon2.svg" />
                  <div className="event-title">h.mansour@esi-sba.dz</div>
                </div>
              </div>
              <button
                className="validate-button"
                onClick={onValidateButtonClick}
              >
                <img className="vector-icon2" alt="" src="/vector1.svg" />
                <div className="register">Register</div>
              </button>
            </div>
            <div className="event-card">
              <div className="img-and-title">
                <img
                  className="event-img-icon"
                  alt=""
                  src="/eventimg1@2x.png"
                />
                <div className="title">
                  <div className="event-title">Summer trip</div>
                  <div className="organisation-title">ESI-SBA SW</div>
                </div>
              </div>
              <button
                className="details-button"
                onClick={openEventDetailsPopup1}
              >
                <div className="details">Details</div>
                <img className="vector-icon" alt="" src="/vector.svg" />
              </button>
              <div className="start-date-container">
                <div className="start-date-text">Start Date</div>
                <div className="date">
                  <img className="icon" alt="" src="/icon.svg" />
                  <div className="event-title">July 21, 2023</div>
                </div>
              </div>
              <div className="end-date-container">
                <div className="start-date-text">End Date</div>
                <div className="date">
                  <img className="icon" alt="" src="/icon.svg" />
                  <div className="event-title">August 21, 2023</div>
                </div>
              </div>
              <div className="contact-info-container">
                <div className="contact-text">Contact</div>
                <div className="phone-info">
                  <img className="icon1" alt="" src="/icon1.svg" />
                  <div className="event-title">05 55 99 55 08</div>
                </div>
                <div className="phone-info">
                  <img className="icon2" alt="" src="/icon2.svg" />
                  <div className="event-title">h.mansour@esi-sba.dz</div>
                </div>
              </div>
              <button
                className="validate-button"
                onClick={onValidateButton1Click}
              >
                <img className="vector-icon2" alt="" src="/vector1.svg" />
                <div className="register">Register</div>
              </button>
            </div>
            <div className="event-card">
              <div className="img-and-title">
                <img
                  className="event-img-icon"
                  alt=""
                  src="/eventimg2@2x.png"
                />
                <div className="title">
                  <div className="event-title">International event</div>
                  <div className="organisation-title">ESI-SBA SW</div>
                </div>
              </div>
              <button
                className="details-button"
                onClick={openEventDetailsPopup2}
              >
                <div className="details">Details</div>
                <img className="vector-icon" alt="" src="/vector.svg" />
              </button>
              <div className="start-date-container">
                <div className="start-date-text">Start Date</div>
                <div className="date">
                  <img className="icon" alt="" src="/icon.svg" />
                  <div className="event-title">July 21, 2023</div>
                </div>
              </div>
              <div className="end-date-container">
                <div className="start-date-text">End Date</div>
                <div className="date">
                  <img className="icon" alt="" src="/icon.svg" />
                  <div className="event-title">August 21, 2023</div>
                </div>
              </div>
              <div className="contact-info-container">
                <div className="contact-text">Contact</div>
                <div className="phone-info">
                  <img className="icon1" alt="" src="/icon1.svg" />
                  <div className="event-title">05 55 99 55 08</div>
                </div>
                <div className="phone-info">
                  <img className="icon2" alt="" src="/icon2.svg" />
                  <div className="event-title">h.mansour@esi-sba.dz</div>
                </div>
              </div>
              <button
                className="validate-button"
                onClick={onValidateButton2Click}
              >
                <img className="vector-icon2" alt="" src="/vector1.svg" />
                <div className="register">Register</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isEventDetailsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.15)"
          placement="Centered"
          onOutsideClick={closeEventDetailsPopup}
        >
          <EventDetails onClose={closeEventDetailsPopup} />
        </PortalPopup>
      )}
      {isEventDetailsPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.15)"
          placement="Centered"
          onOutsideClick={closeEventDetailsPopup1}
        >
          <EventDetails onClose={closeEventDetailsPopup1} />
        </PortalPopup>
      )}
      {isEventDetailsPopup2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.15)"
          placement="Centered"
          onOutsideClick={closeEventDetailsPopup2}
        >
          <EventDetails onClose={closeEventDetailsPopup2} />
        </PortalPopup>
      )}
    </>
  );
};

export default Dashboard;

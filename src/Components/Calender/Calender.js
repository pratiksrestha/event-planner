import React, { useState, useEffect } from "react";

import UserService from "../../Services/user-service";


const Calender = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>

<div className="content container-fluid">
      <div className="page-header">
        <div className="row align-items-end">
          <div className="col-sm mb-2 mb-sm-0">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-no-gutter">
                <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Apps</a></li>
                <li className="breadcrumb-item active" aria-current="page">Calendar</li>
              </ol>
            </nav>

            <h1 className="page-header-title">Calendar</h1>
          </div>

          <div className="col-sm-auto">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addEventToCalendarModal">
              <i className="bi-plus"></i> Create event
            </button>
          </div>
        </div>
      </div>

      <div className="row align-items-sm-center mb-4">
        <div className="col-lg-5 mb-2 mb-lg-0">
          <div className="d-flex align-items-center">
            <button type="button" className="btn btn-white me-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Sat Nov 19 2022" data-fc-today="">Today</button>

            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm btn-no-focus rounded-circle me-1" data-fc-prev-month="" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Previous month" data-bs-original-title="Previous month">
              <i className="bi-chevron-left"></i>
            </button>

            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm btn-no-focus rounded-circle ms-1" data-fc-next-month="" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Next month" data-bs-original-title="Next month">
              <i className="bi-chevron-right"></i>
            </button>

            <div className="ms-3">
              <h4 className="h3 mb-0" data-fc-title="">November 2022</h4>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="d-sm-flex align-items-sm-center">
            <div className="input-group input-group-merge me-2 mb-2 mb-sm-0">
              <div className="input-group-prepend input-group-text">
                <i className="bi-search"></i>
              </div>
              <input type="text" id="filter-by-title" className="form-control" placeholder="Search by title"/>
            </div>

            <div className="d-flex align-items-center">
              <div className="dropdown me-2">
                <button type="button" className="btn btn-white dropdown-toggle" id="calendarFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                  <i className="bi-filter me-1"></i> Filter
                </button>

                <div className="dropdown-menu dropdown-card" aria-labelledby="calendarFilterDropdown" style={{"min-width": "15rem"}}>
                  <div className="card">
                    <div className="card-body">
                      <small className="card-subtitle">My calendars</small>

                      <div className="form-check" data-filter="">
                        <input className="form-check-input" type="checkbox" value="fullcalendar-custom-event-hs-team" id="calendarPersonalCheck" checked=""/>
                        <label className="form-check-label" for="calendarPersonalCheck">HS Team</label>
                      </div>

                      <div className="form-check form-check-danger" data-filter="">
                        <input className="form-check-input" type="checkbox" value="fullcalendar-custom-event-reminders" id="calendarRemindersCheck" checked=""/>
                        <label className="form-check-label" for="calendarRemindersCheck">Reminders</label>
                      </div>

                      <div className="form-check form-check-warning" data-filter="">
                        <input className="form-check-input" type="checkbox" value="fullcalendar-custom-event-tasks" id="calendarTasksCheck" checked=""/>
                        <label className="form-check-label" for="calendarTasksCheck">Tasks</label>
                      </div>
                    </div>

                    <hr className="my-0"/>

                    <div className="card-body">
                      <small className="card-subtitle">Other calendars</small>

                      <div className="form-check form-check-success" data-filter="">
                        <input className="form-check-input" type="checkbox" value="fullcalendar-custom-event-holidays" id="calendarHolidaysCheck" checked=""/>
                        <label className="form-check-label" for="calendarHolidaysCheck">Holidays</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropdown me-2">
                <button type="button" className="btn btn-white dropdown-toggle" id="calendarEventsDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                  <i className="bi-calendar-event me-1"></i> Events
                </button>

                <div className="dropdown-menu dropdown-menu-sm-end dropdown-card" aria-labelledby="calendarFilterDropdown" style={{"width": "17rem"}}>
                  <div className="card">
                    <div className="card-body card-body-height">
                      <small className="card-subtitle">Drag these onto the calendar:</small>

                      <div id="external-events" className="fullcalendar-custom">
                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event fc-daygrid-inline-block-event fullcalendar-custom-event-hs-team" style={{"background-color": "#eaf1ff","border-color": "#eaf1ff"}} data-event="{}"></div>
                          <div className="fc-event-title" style={{"max-width": "14rem"}}>
                            <div className="d-flex">
                              <img className="avatar avatar-xss me-2" src="./assets/svg/brands/jira-icon.svg" alt="Image Description"/>
                              <span className="text-truncate">Open a new task on Jira</span>
                            </div>
                          </div>
                        </div>

                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event fc-daygrid-inline-block-event fullcalendar-custom-event-reminders" style={{"background-color": "#fdeef2", "border-color": "#fdeef2"}} data-event="{
                             }"></div>
                          <div className="fc-event-title" style={{"max-width": "14rem"}}>
                            <div className="d-flex">
                              <img className="avatar avatar-xss me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description"/>
                              <span className="text-truncate">Send weekly invoice to John</span>
                            </div>
                          </div>
                        </div>

                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event fc-daygrid-inline-block-event fullcalendar-custom-event-hs-team" style={{"background-color": "#eaf1ff" ,"border-color": "#eaf1ff"}} data-event="{
                               
                             }"></div>
                          <div className="fc-event-title" style={{"max-width": "14rem"}}>
                            <div className="d-flex">
                              <img className="avatar avatar-xss me-2" src="./assets/svg/brands/slack-icon.svg" alt="Image Description"/>
                              <span className="text-truncate">Shoot a message to Christina on Slack</span>
                            </div>
                          </div>
                        </div>

                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event fc-daygrid-inline-block-event fullcalendar-custom-event-tasks" style={{"background-color": "#fdf3e8", "border-color": "#fdf3e8"}} data-event="{
                            
                             }"></div>
                          <div className="fc-event-title" style={{"max-width": "14rem"}}>
                            <div className="d-flex">
                              <span className="avatar avatar-xss avatar-info avatar-circle me-2">
                                <span className="text-truncate">F</span>
                              </span>
                              <span>First team timeline</span>
                            </div>
                          </div>
                        </div>

                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event fc-daygrid-inline-block-event fullcalendar-custom-event-reminders" style={{"background-color": "#fdeef2", "border-color": "#fdeef2"}} data-event="{
                              
                             }"></div>
                          <div className="fc-event-title" style={{"max-width": "14rem"}}>
                            <div className="d-flex">
                              <img className="avatar avatar-xss me-2" src="./assets/svg/brands/digitalocean-icon.svg" alt="Image Description"/>
                              <span className="text-truncate">Download monthly data in DigitalOcean</span>
                            </div>
                          </div>
                        </div>

                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event fc-daygrid-inline-block-event fullcalendar-custom-event-tasks" style={{"background-color": "#fdf3e8", "border-color": "#fdf3e8"}} data-event="{
                               
                             }"></div>
                          <div className="fc-event-title" style={{"max-width": "14rem"}}>
                            <div className="d-flex">
                              <img className="avatar avatar-xss me-2" src="./assets/svg/brands/figma-icon.svg" alt="Image Description"/>
                              <span className="text-truncate">Hire a Figma designer</span>
                            </div>
                          </div>
                        </div>

                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event fc-daygrid-inline-block-event fullcalendar-custom-event-hs-team" style={{"background-color": "#eaf1ff","border-color": "#eaf1ff"}} data-event="{
                        
                             }"></div>
                          <div className="fc-event-title" style={{"max-width": "14rem"}}>
                            <div className="d-flex">
                              <span className="avatar avatar-xss avatar-primary avatar-circle me-2">
                                <span className="text-truncate">M</span>
                              </span>
                              <span>Mobile App rework for (Pixeel)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* </div>
              </div> */}


              <div className="tom-select-custom">
                <select className="js-select form-select tomselected ts-hidden-accessible" data-fc-grid-view="" data-hs-tom-select-options="{
            
                        }" id="tomselect-1" tabindex="-1">
                  
                  <option value="timeGridWeek">Week</option>
                  <option value="timeGridDay">Day</option>
                  <option value="listWeek">List</option>
                <option value="dayGridMonth">Month</option></select><div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items"><div className="ts-control"><div data-value="dayGridMonth" className="item" data-ts-item="">Month</div></div><div className="tom-select-custom"><div className="ts-dropdown single plugin-change_listener plugin-hs_smart_position" style={{"display": "none"}}><div role="listbox" tabindex="-1" className="ts-dropdown-content" id="tomselect-1-ts-dropdown"></div></div></div></div>
              </div>
            </div>
        //   </div>
        // </div>
    //   </div>

     
    // </div>
    // </div>
  );
};

export default Calender;








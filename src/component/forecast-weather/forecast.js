import React from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";
import "./forecast.css"
const dayInAWeek = new Date().getDay()
const WEEK_DAY = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
export const currentDay = WEEK_DAY[dayInAWeek]

function Forecast({ data }) {

    const dayInAWeek = new Date().getDay()

    const day = WEEK_DAY.slice(dayInAWeek , WEEK_DAY.length).concat(WEEK_DAY.slice(0, dayInAWeek))


    return (
        <>
            <label className="title">Daily</label>

            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">

                                    <div className="imgwrap"> <img alt='weather' className="icon-small" src={`icon/${item.weather[0].icon}.png`} />
                                        <label className="day">{day[index]}</label>
                                    </div>
                                    <label className="item-description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min) - 273}°C  /  {Math.round(item.main.temp_max) - 273}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-container">
                                <div>
                                    <div className="daily-details">
                                        <label>Cloud</label>
                                        <span>{Math.round(item.clouds.all)}</span>
                                    </div>


                                    <div className="daily-details">
                                        <label>Pressure</label>
                                        <span>{Math.round(item.main.pressure)}hpa</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="daily-details">
                                        <label>Humdity</label>
                                        <span>{Math.round(item.main.humidity)} g.m-3</span>
                                    </div>



                                    <div className="daily-details">
                                        <label>Wind Speed</label>
                                        <span>{Math.round(item.wind.speed)}m/s</span>
                                    </div>

                                </div>

                                <div>
                                    <div className="daily-details">
                                        <label>Feels like</label>
                                        <span>{Math.round(item.main.feels_like) - 273}°C</span>
                                    </div>

                                    <div className="daily-details">
                                        <label>Wind Deg
                                        </label>
                                        <span>{Math.round(item.wind.deg) }°</span>
                                    </div>

                                </div>


                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
}

export default Forecast;

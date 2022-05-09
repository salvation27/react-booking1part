import React, {useState} from 'react'
import './Hotel.css'
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import HotelItems from '../HotelItems/HotelItems';
import { useLocation } from 'react-router-dom';
const Hotel = () => {

  const location = useLocation()

  console.log(location);
  const [destination, setDestination] = useState(location.state.dastenation);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  
const [openDate, setOpenDate] = useState(false);


  return (
    <div className="container">
      <div className="hotel_list_wrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Destination</label>
            <input placeholder={destination} type="text" />
          </div>
          <div className="lsItem">
            <label>Check-in Date</label>
            <span onClick={() => setOpenDate(!openDate)}>{`${format(
              date[0].startDate,
              "MM/dd/yyyy"
            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && (
              <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />
            )}
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.adult}
                  value={options.adult}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder={options.children}
                  value={options.children}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input
                  type="number"
                  min={1}
                  value={options.room}
                  className="lsOptionInput"
                  placeholder={options.room}
                />
              </div>
            </div>
          </div>
          <button>Search</button>
        </div>
        <div className="listResult">
          <HotelItems />
          <HotelItems />
          <HotelItems />
          <HotelItems />
          <HotelItems />
          <HotelItems />
          <HotelItems />
          <HotelItems />
          <HotelItems />
        </div>
      </div>
    </div>
  );
}

export default Hotel
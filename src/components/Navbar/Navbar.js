import React,{useState} from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import CarRentalIcon from "@mui/icons-material/CarRental";
import ChildCareIcon from "@mui/icons-material/ChildCare";

import { DateRange} from "react-date-range";
import { addDays,format } from "date-fns";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate, useLocation } from "react-router-dom";



const Navbar = () => {

  const lo = useLocation()

  const [dastenation,setDastenation] = useState('')
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [showDate,setShowDate]= useState(false)

  const showDateHandler = () => {
    setShowDate(!showDate);
  }

  const [openOptions,setOpenOptions] = useState(false)
  const [options,setOptions] = useState({
    adult:1,
    children:0,
    room:1
  })

  const showOptionsHandler = () => {
    setOpenOptions(!openOptions);
  };

  // прибавляем или удаляем для кнопок
  const optionsHandel = (name,operation) => {
    setOptions(prev=> {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 :options[name] -1 ,
      }
    })
}

const navigate  = useNavigate()

const handleSerch = () =>{
navigate('/hotels',{state:{dastenation,date,options}})
}

  return (
    <div className="nav_bar">
      <div className="container">
        <div className="nav_bar_wrap">
          <div className="logo">
            <Link to="/">react.js</Link>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* <li>
              <Link to="/hotels">Hotels</Link>
            </li> */}
          </ul>
          <div className="button">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
        <div className="dostoinstva_wrap">
          <div className="dostoinstva active">
            <EscalatorWarningIcon sx={{ color: "white" }} />
            <span style={{ color: "white" }}>Stays</span>
          </div>
          <div className="dostoinstva">
            <AirplanemodeActiveIcon sx={{ color: "white" }} />
            <span style={{ color: "white" }}>Flights</span>
          </div>
          <div className="dostoinstva">
            <CarRentalIcon sx={{ color: "white" }} />
            <span style={{ color: "white" }}>Car rentals</span>
          </div>
          <div className="dostoinstva">
            <ChildCareIcon sx={{ color: "white" }} />
            <span style={{ color: "white" }}>Attractions</span>
          </div>
        </div>
        <div className="offer_text">
          <h1>A lifetime of discount?</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
            culpa.
          </h3>
          <button>Sign in /Register</button>
        </div>

        {lo.pathname == "/hotels" ? (
          ""
        ) : (
          <div className="header_serch">
            <input
              placeholder="Weare you goin?"
              className="header_serch_input"
              value={dastenation}
              onChange={(e) => setDastenation(e.target.value)}
            ></input>
            {/* <DateRangePicker /> */}
            <div className="date_to_date">
              {showDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              )}
              <span onClick={showDateHandler}>{`${format(
                date[0].startDate,
                "MM.dd.yyyy"
              )} - ${format(date[0].endDate, "MM.dd.yyyy")} `}</span>
            </div>
            <div className="men_wrap" onClick={showOptionsHandler}>
              {`${options.adult} adult. ${options.children} children. ${options.room} room `}
              {openOptions && (
                <div className="options">
                  <div className="options_item">
                    <div className="options_text">adult</div>
                    <div className="option_btn_wrap">
                      <button
                        disabled={options.adult <= 1}
                        className="option_btn"
                        onClick={() => optionsHandel("adult", "d")}
                      >
                        -
                      </button>
                      <div className="option_num">{options.adult}</div>
                      <button
                        className="option_btn"
                        onClick={() => optionsHandel("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="options_item">
                    <div className="options_text">children</div>
                    <div className="option_btn_wrap">
                      <button
                        disabled={options.children <= 1}
                        className="option_btn"
                        onClick={() => optionsHandel("children", "d")}
                      >
                        -
                      </button>
                      <div className="option_num">{options.children}</div>
                      <button
                        className="option_btn"
                        onClick={() => optionsHandel("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="options_item">
                    <div className="options_text">room</div>
                    <div className="option_btn_wrap">
                      <button
                        disabled={options.room <= 1}
                        className="option_btn"
                        onClick={() => optionsHandel("room", "d")}
                      >
                        -
                      </button>
                      <div className="option_num">{options.room}</div>
                      <button
                        className="option_btn"
                        onClick={() => optionsHandel("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button onClick={handleSerch} className="btn_serch">
              serch
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
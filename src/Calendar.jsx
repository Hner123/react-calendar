import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./calendar.css";

export default function Calendar() {
  const [listMonths, setListMonths] = useState([]);
  const [listBlankDays, setListBlankDays] = useState([]);
  const [whatYear, setWhatYear] = useState(0);
  const [showCal, setShowCal] = useState("");

  const generateCalendar = (year) => {
    const daysInMonth = (days) => {
      const listDay = [];
      for (let i = 1; i <= days; i++) {
        listDay.push(i);
      }
      return listDay;
    };

    const months = {
      January: daysInMonth(new Date(year, 1, 0).getDate()),
      February: daysInMonth(new Date(year, 2, 0).getDate()),
      March: daysInMonth(new Date(year, 3, 0).getDate()),
      April: daysInMonth(new Date(year, 4, 0).getDate()),
      May: daysInMonth(new Date(year, 5, 0).getDate()),
      June: daysInMonth(new Date(year, 6, 0).getDate()),
      July: daysInMonth(new Date(year, 7, 0).getDate()),
      August: daysInMonth(new Date(year, 8, 0).getDate()),
      September: daysInMonth(new Date(year, 9, 0).getDate()),
      October: daysInMonth(new Date(year, 10, 0).getDate()),
      November: daysInMonth(new Date(year, 11, 0).getDate()),
      December: daysInMonth(new Date(year, 12, 0).getDate()),
    };

    const getBlankDays = (days) => {
      const listOfBlank = [];
      for (let i = 1; i <= days; i++) {
        listOfBlank.push(i);
      }
      return listOfBlank;
    };

    const daysBlank = {
      January: getBlankDays(new Date(year, 0, 1).getDay()),
      February: getBlankDays(new Date(year, 1, 1).getDay()),
      March: getBlankDays(new Date(year, 2, 1).getDay()),
      April: getBlankDays(new Date(year, 3, 1).getDay()),
      May: getBlankDays(new Date(year, 4, 1).getDay()),
      June: getBlankDays(new Date(year, 5, 1).getDay()),
      July: getBlankDays(new Date(year, 6, 1).getDay()),
      August: getBlankDays(new Date(year, 7, 1).getDay()),
      September: getBlankDays(new Date(year, 8, 1).getDay()),
      October: getBlankDays(new Date(year, 9, 1).getDay()),
      November: getBlankDays(new Date(year, 10, 1).getDay()),
      December: getBlankDays(new Date(year, 11, 1).getDay()),
    };

    setListMonths(months);
    setListBlankDays(daysBlank);
  };

  // useEffect(() => {
  //   generateCalendar(2024);
  // }, []);

  return (
    <>
      <div className="container d-flex justify-content-center mt-5">
        <div>
          <input type="text" onChange={(e) => setWhatYear(e.target.value)} />
          <button
            onClick={() => {
              setShowCal("show");
              generateCalendar(whatYear);
            }}
          >
            Enter Year
          </button>
        </div>
      </div>
      {showCal == "show" && (
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-3">
              <h5 className="text-center">January</h5>
              <ul className="daysName">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className="dayList">
                {listBlankDays.January &&
                  listBlankDays.January.map((jan, i) => <li key={i}></li>)}

                {listMonths.January &&
                  listMonths.January.map((jan, i) => <li key={i}>{jan}</li>)}
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="text-center">February</h5>
              <ul className="daysName">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className="dayList">
                {listBlankDays.February &&
                  listBlankDays.February.map((feb, i) => <li key={i}></li>)}

                {listMonths.February &&
                  listMonths.February.map((feb, i) => <li key={i}>{feb}</li>)}
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="text-center">March</h5>
              <ul className="daysName">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className="dayList">
                {listBlankDays.March &&
                  listBlankDays.March.map((mar, i) => <li key={i}></li>)}

                {listMonths.March &&
                  listMonths.March.map((mar, i) => <li key={i}>{mar}</li>)}
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="text-center">April</h5>
              <ul className="daysName">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className="dayList">
                {listBlankDays.April &&
                  listBlankDays.April.map((apr, i) => <li key={i}></li>)}

                {listMonths.April &&
                  listMonths.April.map((apr, i) => <li key={i}>{apr}</li>)}
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <h5 className="text-center">May</h5>
              <ul className="daysName">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className="dayList">
                {listBlankDays.May &&
                  listBlankDays.May.map((may, i) => <li key={i}></li>)}

                {listMonths.May &&
                  listMonths.May.map((may, i) => <li key={i}>{may}</li>)}
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="text-center">June</h5>
              <ul className="daysName">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className="dayList">
                {listBlankDays.June &&
                  listBlankDays.June.map((jun, i) => <li key={i}></li>)}

                {listMonths.June &&
                  listMonths.June.map((jun, i) => <li key={i}>{jun}</li>)}
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="text-center">July</h5>
              <ul className="daysName">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className="dayList">
                {listBlankDays.July &&
                  listBlankDays.July.map((jul, i) => <li key={i}></li>)}

                {listMonths.July &&
                  listMonths.July.map((jul, i) => <li key={i}>{jul}</li>)}
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="text-center">August</h5>
              <ul className="daysName">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className="dayList">
                {listBlankDays.August &&
                  listBlankDays.August.map((aug, i) => <li key={i}></li>)}

                {listMonths.August &&
                  listMonths.August.map((aug, i) => <li key={i}>{aug}</li>)}
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <h5 className="text-center">September</h5>
              <ul className="daysName">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className="dayList">
                {listBlankDays.September &&
                  listBlankDays.September.map((sep, i) => <li key={i}></li>)}

                {listMonths.September &&
                  listMonths.September.map((sep, i) => <li key={i}>{sep}</li>)}
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="text-center">October</h5>
              <ul className="daysName">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className="dayList">
                {listBlankDays.October &&
                  listBlankDays.October.map((oct, i) => <li key={i}></li>)}

                {listMonths.October &&
                  listMonths.October.map((oct, i) => <li key={i}>{oct}</li>)}
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="text-center">November</h5>
              <ul className="daysName">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className="dayList">
                {listBlankDays.November &&
                  listBlankDays.November.map((nov, i) => <li key={i}></li>)}

                {listMonths.November &&
                  listMonths.November.map((nov, i) => <li key={i}>{nov}</li>)}
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="text-center">December</h5>
              <ul className="daysName">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className="dayList">
                {listBlankDays.December &&
                  listBlankDays.December.map((dec, i) => <li key={i}></li>)}

                {listMonths.December &&
                  listMonths.December.map((dec, i) => <li key={i}>{dec}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

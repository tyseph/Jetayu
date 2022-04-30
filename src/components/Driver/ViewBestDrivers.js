import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBestDrivers } from "../../redux/DriverSlice";

import { viewBestDrivers } from "../../services/DriverService";

const ViewBestDrivers = () => {
  const allDriverDataFromStore = useSelector(
    (state) => state.Driver.DriverList
  );
  const dispatch = useDispatch();
  const submitViewBestDrivers = (evt) => {
    evt.preventDefault();
    viewBestDrivers()
      .then((response) => {
        dispatch(getBestDrivers(response.data));
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="container">
      <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-8">
        <p>Get Best Drivers</p>
        <div className="form form-group">
          <input
            type="button"
            className="btn btn-primary form-control mb-3 mt-3"
            value="Get Best Drivers"
            onClick={submitViewBestDrivers}
          />
        </div>
        <div>
          <div>
            {allDriverDataFromStore.length !== 0 && (
              <div>
                <p className="text-primary text-center font-weight-bold lead">
                  List of Best Drivers
                </p>
                {
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Driver Id</th>
                        <th>Driver Name</th>
                        <th>License No</th>
                        <th>Rating</th>
                        <th>Cab Id</th>
                        <th>Cab Type</th>
                        <th>Per Km Rate</th>
                      </tr>
                    </thead>
                    {allDriverDataFromStore.map((e) => (
                      <tbody>
                        <tr>
                          <td>{e.driverId}</td>
                          <td>{e.driverName}</td>
                          <td>{e.licenseNo}</td>
                          <td>{e.rating}</td>
                          {e.cab && (
                            <>
                              <td>{e.cab.cabId}</td>
                              <td>{e.cab.carType}</td>
                              <td>{e.cab.perKmRate}</td>
                            </>
                          )}
                        </tr>
                      </tbody>
                    ))}
                  </table>
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBestDrivers;

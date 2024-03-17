import React, { useEffect, useState } from "react";
import axios from "axios";

const MyMeasurementComponent = ({ property, record, onChange }) => {
  const [measurements, setMeasurements] = useState([]);
  const isTailorable = record.params.is_tailorable;

  useEffect(() => {
    if (isTailorable) {
      const fetchMeasurements = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/measurements`
          );
          setMeasurements(response.data);
        } catch (error) {
          console.error("Failed to fetch measurements", error);
        }
      };

      fetchMeasurements();
    }
  }, [isTailorable]);

  const handleCheckboxChange = (measurementId, checked) => {
    let updatedMeasurements;
    const currentMeasurements = record.params[property.name] || [];

    if (checked) {
      updatedMeasurements = [...currentMeasurements, measurementId.toString()];
    } else {
      updatedMeasurements = currentMeasurements.filter(
        (id) => id !== measurementId.toString()
      );
    }

    onChange(property.name, updatedMeasurements);
  };

  if (!isTailorable) {
    return null;
  }

  return (
    <>
      <div>
        {measurements.map((measurement) => (
          <label key={measurement.measurement_id}>
            <input
              type="checkbox"
              checked={record.params[property.name]?.includes(
                measurement.measurement_id
              )}
              onChange={(e) =>
                handleCheckboxChange(
                  measurement.measurement_id,
                  e.target.checked
                )
              }
            />
            {measurement.measurement_name}
          </label>
        ))}
      </div>
      <br></br>
      <br></br>
    </>
  );
};

export default MyMeasurementComponent;

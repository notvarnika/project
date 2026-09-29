import { useEffect, useState } from "react";
import SelectField from "../selectField/SelectField";

function useFetch({ endpoint, valueKey, labelKey }) {
  const BASE_URL = "http://localhost:8083";
  const [options, setOptions] = useState([]);

  const fetchLookupData = (endpoint) => {
    return fetch(`${BASE_URL}${endpoint}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(` ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error(` ${endpoint}:`, error);
        return [];
      });
  };

  useEffect(() => {
    fetchLookupData(endpoint).then((data) => {
      if (Array.isArray(data)) {
        const formatted = data.map((item) => {
          // Find the actual JSON key case-insensitively
          const itemKeys = Object.keys(item);
          const foundValueKey = itemKeys.find(
            (k) => k.toLowerCase() === String(valueKey).toLowerCase(),
          );
          const foundLabelKey = itemKeys.find(
            (k) => k.toLowerCase() === String(labelKey).toLowerCase(),
          );

          return {
            value: item[foundValueKey] ?? item[valueKey],
            label: item[foundLabelKey] ?? item[labelKey],
          };
        });

        setOptions(formatted);
      }
    });
  }, [endpoint, valueKey, labelKey]);

  return options;
}

export default useFetch;

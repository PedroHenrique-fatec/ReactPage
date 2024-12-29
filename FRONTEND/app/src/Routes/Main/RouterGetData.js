import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import GetRoom from "./GetRoom";

function useGetData() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetRoom();

        if (response.statusBar === 401) {
            navigate('../../Components/Form/formMain');
            return
        }

        setData(response);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [navigate]);

  return { data, error };
}

export default useGetData;

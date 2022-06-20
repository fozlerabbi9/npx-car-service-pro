import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useServiceDitlesFun = () => {
    const { detailesId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        // fetch("services.json")
        fetch(`https://calm-basin-38280.herokuapp.com/service/${detailesId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return [service, setService]
}
export default useServiceDitlesFun;
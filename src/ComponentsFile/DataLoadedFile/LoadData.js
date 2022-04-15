// import { useEffect, useState } from "react";

import { useEffect, useState } from "react"

// const usedataLoadFun = () =>{
//     const [servises, setServices] = useState([]);

//     useEffect(() => {
//         fetch("services.json")
//             .then(res => res.json())
//             .then(data => setServices(data))
//     }, [])
//     console.log(servises)
//     return [servises, setServices];
// }

// export default usedataLoadFun;


const useDataFun = () =>{
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return [services, setServices]
}
export default useDataFun;
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            const email = user?.user?.email;
            console.log(email);
            console.log(user);
            if (email) {
                const { data } = await axios.post('https://calm-basin-38280.herokuapp.com/logingettoke', { email })
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken)
            }
        }
        getToken();
    }, [user]);
    return [token]
}
export default useToken;
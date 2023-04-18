import {
    Text,
    SafeAreaView,
    FlatList,
    View,
} from 'react-native'

import axios from 'axios'
import { useEffect, useLayoutEffect, useState } from 'react'
import DashboardScreen from '../Screen/Dashboard/Dashboard';
import Jobs from '../Screen/Dashboard/ListJobs';
function ListJobs() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const getData = async ()=>{
            try {
                const respone = await axios.get(`https://api-v2.devwork.vn/jobs`)
                setData(respone.data.data)
            }
            catch(error){
                console.log(error)
            }
        }
        getData()
    },[data])
    return (
         <Jobs data = {data} />
    )
}

export default ListJobs
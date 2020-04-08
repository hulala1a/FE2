import axios from 'axios'

const getSpeciallyData = ()=> {
    let url1 = 'http://47.116.70.195:3000/apis/years/';
    for(let i of state.years){
        if(i.checked == true)url1 += i.year;
    }
    url1 += '/reaching_points';
    axios.get(url1)
    .then((response)=>{commit('setSpecially', {specially:response.data[0].specially});})
}

export default getSpeciallyData
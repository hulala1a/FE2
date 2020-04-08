import axios from 'axios'

const state = {
    years: [],
    datas: {},
    specialty: [],
    num: [],
    sex: [],
    nation: [],
    nativePlace: [],
    requirement: [],
    course: [],
    zhe: [],
    class1: [],
    student: [],
}

// getters
const getters = {
    getYear: state =>{
        let rtn = ['specialty'];
        for(let i of state.years){
            if(i.checked) rtn.push(i.year.toString());
        }
        console.log(rtn);
        return rtn;
    },
    getSpecialty: (state,getters) =>{
        let rtn = [];
        let j = 0;
        rtn.push(getters.getYear);
        for(let i of state.specialty){
            if(i.specialty!=rtn[j][0]){rtn.push([]);rtn[++j].push(i.specialty);}
        }
        for(let i of state.specialty){
            for(let n=0;n<rtn.length;n++){
                if(i.specialty==rtn[n][0]){rtn[n].push(i.reaching_point);break;}
            }
        }
        return rtn;
    }
}

// actions
const actions = {
    yearData({commit}){
        //let m = []
        return axios.get('http://47.116.70.195:3000/apis/years')
        .then((response)=>{
            /*for(let i of response.data){
                console.log(i.year);
                m.push(i.year);
            }*/
            commit('setYear', {year: response.data});
            commit('setDataYear', {year: response.data[0].year});
            commit('changeYear', {year:response.data[0].year});
        });
    },
    specialtyData({dispatch,state,commit}){
        return dispatch('yearData').then(()=>{
            let url1 = 'http://47.116.70.195:3000/apis/years/';
            for(let i of state.years){
                if(i.checked == true)url1 += i.year;
            }
            url1 += '/reaching_points';
            return axios.get(url1)
            .then((response)=>{commit('setSpecialty', {specialty:response.data});})
        })
    },
    changeSpecialtyData({state,commit}){
        let url1 = 'http://47.116.70.195:3000/apis/years/';
        for(let i of state.years){
            if(i.checked == true)url1 += i.year;
        }
        url1 += '/reaching_points';
        axios.get(url1)
        .then((response)=>{commit('setSpecialty', {specialty:response.data});})
    },
    numData({dispatch,state,commit}){
        return dispatch('specialtyData').then(()=>{
            let url2 = 'http://47.116.70.195:3000/apis/years/';
            for(let i of state.years){
                if(i.checked == true)url2 += i.year;
            }
            return axios.get(url2)
            .then((response)=>{commit('setNum', {num:response.data});})
        })
    },
    changeNumData({state,commit}){
        let url2 = 'http://47.116.70.195:3000/apis/years/';
        for(let i of state.years){
            if(i.checked == true)url2 += i.year;
        }
        axios.get(url2)
        .then((response)=>{commit('setNum', {num:response.data});})
    },
    sexData({dispatch,state,commit}){
        return dispatch('numData').then(()=>{
            let url3 = 'http://47.116.70.195:3000/apis/years/';
            for(let i of state.years){
                if(i.checked == true)url3 += i.year;
            }
            url3 += '/sexes';
            return axios.get(url3)
            .then((response)=>{commit('setSex', {sex:response.data});})
        })
    },
    changeSexData({state,commit}){
        let url3 = 'http://47.116.70.195:3000/apis/years/';
        for(let i of state.years){
            if(i.checked == true)url3 += i.year;
        }
        url3 += '/sexes';
        axios.get(url3)
        .then((response)=>{commit('setSex', {sex:response.data});})
    },
    nationData({dispatch,state,commit}){
        return dispatch('sexData').then(()=>{
            let url4 = 'http://47.116.70.195:3000/apis/years/';
            for(let i of state.years){
                if(i.checked == true)url4 += i.year;
            }
            url4 += '/nations';
            return axios.get(url4)
            .then((response)=>{commit('setNation', {nation:response.data});})
        })
    },
    changeNationData({state,commit}){
        let url4 = 'http://47.116.70.195:3000/apis/years/';
        for(let i of state.years){
            if(i.checked == true)url4 += i.year;
        }
        url4 += '/nations';
        axios.get(url4)
        .then((response)=>{commit('setNation', {nation:response.data});})
    },
    nativePlaceData({dispatch,state,commit}){
        return dispatch('nationData').then(()=>{
            let url5 = 'http://47.116.70.195:3000/apis/years/';
            for(let i of state.years){
                if(i.checked == true)url5 += i.year;
            }
            url5 += '/native_places';
            return axios.get(url5)
            .then((response)=>{commit('setNativePlace', {nativePlace:response.data});})
        })
    },
    changeNativePlaceData({state,commit}){
        let url5 = 'http://47.116.70.195:3000/apis/years/';
        for(let i of state.years){
            if(i.checked == true)url5 += i.year;
        }
        url5 += '/native_places';
        axios.get(url5)
        .then((response)=>{commit('setNativePlace', {nativePlace:response.data});})
    },
    requirementData({state,commit}){
        let url6 = 'http://47.116.70.195:3000/apis/specialties/'+state.datas.specialty+'/years/'+state.datas.year;
        return axios.get(url6)
        .then((response)=>{commit('setRequirement', {requirement:response.data});commit('setDataTarget',{target:response.data[0].target});})
    },
    changeRequirementData({state,commit}){
        let url6 = 'http://47.116.70.195:3000/apis/specialties/'+state.datas.specialty+'/years/'+state.datas.year;
        return axios.get(url6)
        .then((response)=>{commit('setRequirement', {requirement:response.data});commit('setDataTarget',{target:response.data[0].target});})
    },
    courseData({dispatch,state,commit}){
        return dispatch('requirementData').then(()=>{
            let url7 = 'http://47.116.70.195:3000/apis/specialties/'+state.datas.specialty+'/years/'+state.datas.year+'/targets/'+state.datas.target;
            return axios.get(url7)
            .then((response)=>{commit('setCourse', {course:response.data});commit('setDataCourse',{course:response.data[0].course});})
        });
    },
    changeCourseData1({dispatch,state,commit}){
        return dispatch('changeRequirementData').then(()=>{
            let url7 = 'http://47.116.70.195:3000/apis/specialties/'+state.datas.specialty+'/years/'+state.datas.year+'/targets/'+state.datas.target;
            return axios.get(url7)
            .then((response)=>{commit('setCourse', {course:response.data});commit('setDataCourse',{course:response.data[0].course});})
        });
    },
    changeCourseData({state,commit}){
        let url7 = 'http://47.116.70.195:3000/apis/specialties/'+state.datas.specialty+'/years/'+state.datas.year+'/targets/'+state.datas.target;
        return axios.get(url7)
        .then((response)=>{commit('setCourse', {course:response.data});commit('setDataCourse',{course:response.data[0].course});})
    },
    zheData({dispatch,state,commit}){
        return dispatch('courseData').then(()=>{
            let url8 = 'http://47.116.70.195:3000/apis/specialties/'+state.datas.specialty+'/targets/'+state.datas.target+'/courses/'+state.datas.course;
            console.log(state.datas.course);
            return axios.get(url8)
            .then((response)=>{commit('setZhe', {zhe:response.data});})
        });
    },
    changeZheData1({dispatch,state,commit}){
        return dispatch('changeCourseData1').then(()=>{
            let url8 = 'http://47.116.70.195:3000/apis/specialties/'+state.datas.specialty+'/targets/'+state.datas.target+'/courses/'+state.datas.course;
            console.log(url8);
            axios.get(url8)
            .then((response)=>{commit('setZhe', {zhe:response.data});})
        });
    },
    changeZheData2({dispatch,state,commit}){
        return dispatch('changeCourseData').then(()=>{
            let url8 = 'http://47.116.70.195:3000/apis/specialties/'+state.datas.specialty+'/targets/'+state.datas.target+'/courses/'+state.datas.course;
            console.log(url8);
            axios.get(url8)
            .then((response)=>{commit('setZhe', {zhe:response.data});})
        });
    },
    changeZheData({state,commit}){
        let url8 = 'http://47.116.70.195:3000/apis/specialties/'+state.datas.specialty+'/targets/'+state.datas.target+'/courses/'+state.datas.course;
        console.log(url8);
        axios.get(url8)
        .then((response)=>{commit('setZhe', {zhe:response.data});})
    },
    classData({state,commit}){
        let url9 = 'http://47.116.70.195:3000/apis/specialties/'+state.datas.specialty+'/years/'+state.datas.year+'/classes';
        return axios.get(url9)
        .then((response)=>{commit('setClass', {class1:response.data});commit('setDataClass',{class1:response.data[0].class});})
    },
    changeClassData({state,commit}){
        let url9 = 'http://47.116.70.195:3000/apis/specialties/'+state.datas.specialty+'/years/'+state.datas.year+'/classes';
        return axios.get(url9)
        .then((response)=>{commit('setClass', {class1:response.data});commit('setDataClass',{class1:response.data[0].class});})
    },
    studentData({dispatch,state,commit}){
        return dispatch('classData').then(()=>{
            let url10 = 'http://47.116.70.195:3000/apis/classes/'+state.datas.class1+'/years/'+state.datas.year+'/students';
            return axios.get(url10)
            .then((response)=>{commit('setStudent', {student:response.data});})
        });
    },
    changeStudentData1({dispatch,state,commit}){
        return dispatch('changeClassData').then(()=>{
            let url10 = 'http://47.116.70.195:3000/apis/classes/'+state.datas.class1+'/years/'+state.datas.year+'/students';
            return axios.get(url10)
            .then((response)=>{commit('setStudent', {student:response.data});})
        });
    },
    changeStudentData({state,commit}){
        let url10 = 'http://47.116.70.195:3000/apis/classes/'+state.datas.class1+'/years/'+state.datas.year+'/students';
        axios.get(url10)
        .then((response)=>{commit('setStudent', {student:response.data});})
    }
}

// mutations
const mutations = {
    setYear(state, {year}){
        state.years = year;
        for(let i of state.years){
            i.checked = false;
        }
    },
    changeYear(state, {year}){
        for(let i of state.years){
            if(i.year == year){
                i.checked = !(i.checked);
                break;
            }
        }
    },
    setSpecialty(state, {specialty}){
        state.specialty = specialty;
    },
    setNum(state, {num}){
        state.num = num;
    },
    setSex(state, {sex}){
        state.sex = sex;
    },
    setCourse(state, {course}){
        state.course = course;
    },
    setZhe(state, {zhe}){
        state.zhe = zhe;
    },
    setClass(state, {class1}){
        state.class1 = class1;
    },
    setNation(state, {nation}){
        state.nation = nation;
    },
    setRequirement(state, {requirement}){
        state.requirement = requirement;
    },
    setStudent(state, {student}){
        state.student = student;
    },
    setNativePlace(state, {nativePlace}){
        state.nativePlace = nativePlace;
    },
    setDataSpecialty(state, {specialty}){
        state.datas.specialty = specialty;
    },
    setDataYear(state, {year}){
        state.datas.year = year;
    },
    setDataCourse(state, {course}){
        state.datas.course = course;
    },
    setDataTarget(state, {target}){
        state.datas.target = target;
    },
    setDataClass(state, {class1}){
        state.datas.class1 = class1;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
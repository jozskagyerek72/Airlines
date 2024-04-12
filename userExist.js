export const userExist = (arr,key,value)=>{
    return arr.find(obj=>obj[key]==value)
}
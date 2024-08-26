// 从localstroge中读取数据
function getData(){
    // 若本地localstorage中不存在数据,则需创建一个新的数据
    if(!localStorage.getItem('geojson')){
        localStorage.setItem('geojson','[]')//设置空数据
    }
    return JSON.parse(localStorage.getItem('geojson'))//字符串类型转换为JSON类型
}


// 将数据保存到Localstorage
function saveData(data){
    localStorage.setItem('geojson',JSON.stringify(data))//将JSON格式转换为字符串类型
}
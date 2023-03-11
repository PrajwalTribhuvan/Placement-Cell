function mergeData(array){
    const q = "'";
    const colon = ",";
    let result = "";
    array.forEach(function (arrayItem) {
        result = result + q + arrayItem + q + colon;
});
    result = result.slice(0, -1);
    return result
}

module.exports = {
    mergeData : mergeData
}
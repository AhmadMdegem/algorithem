function deepClone(data, newData = {}, index = 0) {
    if (typeof data !== 'object') {
        return data;
    }

    const keys = Object.keys(data);
    if (index >= keys.length) {
        if (Array.isArray(data)) {
            newData = Object.values(newData);
        }
        return newData;
    }
    newData[keys[index]] = deepClone(data[keys[index]]);
    
    index++;
    return deepClone(data, newData, index);
}

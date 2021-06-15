exports.apiResponse = (data, success = false, meta = false) => {
    let res = {};
    
    res.data = data;
    res.message = '';
    res.success = success;

    if (meta) {
        res.meta = meta;
    }

    if (!success) {
        res.message = data;
        res.data = '';
    }

    return res

};

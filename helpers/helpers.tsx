const getPriceQueryParams = (queryParams: any, key:any, value:any) => {
    const hasValueInParams= queryParams.has(key);

    if(value && hasValueInParams){
        queryParams.set(key, value)
    } else if (value){
        queryParams.append(key,value)
    } else if(hasValueInParams){
        queryParams.delete(key)
    }

    return queryParams
}

export default getPriceQueryParams;
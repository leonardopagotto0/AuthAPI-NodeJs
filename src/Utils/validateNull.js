function validateNull(fields){
    const errors = [];
    
    fields.forEach(field => {
        console.log(field);
        if(!field) errors.push(field);
    });

    return errors;
}

export default validateNull;
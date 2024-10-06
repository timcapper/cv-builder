export const serializeNonPOJOs = (obj: any) => {
    return structuredClone(obj);
};

export const getJobDescriptionUrl = (collectionId: any, recordId: any, fileName: any) => {
    return `http://localhost:8090/api/files/${collectionId}/${recordId}/${fileName}`;
};

export const validateData = async (formData, schema) => {
    const body = Object.fromEntries(formData);

    try {
        const data = schema.parse(body);
        return {
            formData: data,
            errors: null
        };
    } catch (err) {
        console.log('Error: ', err);
        const errors = err.flatten();
        return {
            formData: body,
            errors: errors
        };
    }
};
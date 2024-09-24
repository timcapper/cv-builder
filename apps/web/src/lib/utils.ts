export const serializeNonPOJOs = (obj: any) => {
    return structuredClone(obj);
};

export const getJobDescriptionUrl = (collectionId: any, recordId: any, fileName: any) => {
    return `http://localhost:8090/api/files/${collectionId}/${recordId}/${fileName}`
};
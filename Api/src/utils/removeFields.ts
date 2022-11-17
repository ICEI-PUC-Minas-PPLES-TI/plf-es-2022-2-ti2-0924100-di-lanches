export const removeFields = (obj: any, fields: string[]): object => {
    let newObj = Object.assign({}, obj)

    for (let index = 0; index < fields.length; index++) {
        delete newObj[fields[index]]
    }

    return newObj as typeof obj
}
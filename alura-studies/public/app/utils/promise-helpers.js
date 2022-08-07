export const haldleStatus = res => res.ok ? res.json() : Promise.reject(res.statusText)

export const log = parametro => {
    console.log(parametro)
    return parametro
}
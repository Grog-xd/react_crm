// приходится так генерировать id (не люблю писать бек)

export const createId = ():number =>{
 return Math.floor(Math.random() * 10000)
}
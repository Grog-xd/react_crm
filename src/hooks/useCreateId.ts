// приходится так генерировать id (не люблю писать бек)

export const useCreateId = ():number =>{
 return Math.floor(Math.random() * 10000)
}
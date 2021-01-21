import axios from 'axios'

const instance = axios.create({
   baseURL: 'http://erp.apptrix.ru/api/clients',
})

const interceptorRequestConfigCreator = () => config => {
   const token = localStorage.getItem('accessToken')
   if (Boolean(token)) {
      config.headers.Authorization = `Bearer ${token}`
   } else {
      delete config.headers.Authorization
   }
   return config
}

const interceptorsConfig = interceptorRequestConfigCreator()
instance.interceptors.request.use(interceptorsConfig)

instance.interceptors.response.use(
   response => {
      return response
   },
   error => {
      if (error.response.status === 401) {
         const refreshToken = localStorage.getItem('refreshToken')
         if (refreshToken) {
            instance
               .post(`token/refresh/`, { refresh: refreshToken })
               .then(response => {
                  localStorage.setItem('accessToken', response.data.access)
               })
               .catch(e => {
                  localStorage.clear()
               })
         } else {
            return error
         }
      }
   },
)

export const api = {
   createUser: async data => {
      return await instance.post(`/create/`, data)
   },
   authUser: async data => {
      return await instance.post(`/token/`, data)
   },
   refreshToken: async data => {
      return await instance.post(`token/refresh/`, { refresh: data })
   },
   showUser: async id => {
      return await instance.get(`/${id}`)
   },
}

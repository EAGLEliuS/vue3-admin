import Axios from 'axios'
const service = Axios.create({
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// 添加請求攔截器
service.interceptors.request.use(
    function (config) {
      // 添加請求攔截器
      return config
    },
    function error() {
      // 對請求錯誤做些什麼
      return Promise.reject(error)
    }
  )
  
  //添加響應攔截器
  service.interceptors.response.use(
    function (response) {
      // 2xx 範圍內的狀態碼不會觸發該函數。
      // 對響應數據做點什麼
      return response
    },
    function (error) {
      // 超除 2xx 範圍的狀態碼都會被觸發該函數
      // 對響應錯誤做點什麼
      return Promise.reject(error)
    }
  )
  export default service
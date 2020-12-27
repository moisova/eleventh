class Api {
    constructor(config) {
        this.url = config.url;
        this.authorization= config.authorization;
    }
    /*

    Здорово, что проверка ответа сервера и преобразование из json вынесены в отдельный метод класса
    */
    getResponseData(res){
        if(!res.ok){
          return Promise.reject(new Error(`Ошибка: ${res.status}`));
        } else {
          return res.json();
        }
      }
  
      getCards = () => {
        return fetch(this.url, {
          method: 'GET',
          headers: {
            authorization: this.authorization
          }
        })
        .then(this.getResponseData)
      }
  
      /* Можно лучше:

      Назвать метод getUserInfo, будет более описательно
      */
      sendRequest(url) {
        return fetch(url, {
          method: 'GET',
          headers: {
          authorization: this.authorization
          }
        })
        .then(this.getResponseData)
      }
      
      /* Можно лучше:

      Лучше всего соблюдать единый стиль наименования: url, name, about, а не Name и about
      */
      changeProfile(url, Name, About) {
          fetch(url, {
              method: 'PATCH',
              headers: {
              authorization: this.authorization,
            'Content-Type': 'application/json'
              },
              body: JSON.stringify({
              name: Name,
              about: About
              })
          })
          .then(this.getResponseData)

          return fetch();
      }


}
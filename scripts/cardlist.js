class CardList {
  constructor(container, api, createCardFunc) {
    this.container = container;
    this.api = api;
    this.createCardFunc = createCardFunc;
  }

  addCard(name, link) {
    const card = this.createCardFunc(name, link);
    this.container.appendChild(card);
  }

  render(){
    this.api.getCards().then((res)=>{
      res.forEach((item) =>{
        this.addCard(item.name, item.link);
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}
// import React from 'react'

// Так или иначе тут будет реализовано общение с сервером
// То есть логично было бы тут прописать функции

// ЗАМЕТКА: мб это стоит сделать с помощью кастомного hook

/////  URL  ///////////////////////////////////////////
// const URL = 'http://'
const peoples = 'https://randomuser.me/api/?results=50'
///////////////////////////////////////////////////////

export default class Server {
    // render() {
    //     return (
    //         <Fragment>Lorem ipsum</Fragment>
    //     );
    // }

    componentDidMount() {
        fetch(peoples)
        .then(res => {
        if(res.status !== 200) {
            console.log(res.status);

            return;
        }
        res.json().then(function(res) {
            this.setState({data: res});
        });
        })
    }
}
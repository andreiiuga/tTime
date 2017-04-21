var HelloComponent = React.createClass({
    render() {
    const data = axios.get('http://api.openweathermap.org/data/2.5/weather?units=metric&id=683506&APPID=30719c8a2baaffbfaaef83f39373f66d').
        then(response => {
            console.log(response.data);
        }).catch(err => {
            console.log(err.response);
        });
        return (
            <h1>Hello, World!</h1>
        )
    }
})
ReactDOM.render(<HelloComponent />, document.querySelector('#app'))
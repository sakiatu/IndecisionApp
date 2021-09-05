const app = {
    title: 'Indecision',
    subtitle: 'how you think so you be!',
    options: []
}

const details = {
    isHide: true,
    text: "the is some text over here"
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(option);
        renderApp();
    }
}
const wipeAll = () => {
    app.options = []
    renderApp();
}
const onMakeDecision = () => {
    const random = Math.floor(Math.random() * app.options.length);
    console.log(random)
    const option = app.options[random]
    alert(option)
}
const onToggleVisibilityClick = () => {
    details.isHide = !details.isHide;
    renderApp()
}
const getIndecisionTemplate = () => {
    return (<div>
        <h1 id="header">{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <button disabled={!app.options.length} onClick={onMakeDecision}>What Should I do</button>
        <button disabled={!app.options.length} onClick={wipeAll}>Remove All</button>
        <p>{app.options.length > 0 ? app.options.length + " options" : 'no options'}</p>
        <ul type="none">
            {
                app.options.map((option, index) => <p key={index}>{index + 1 + ": " + option}</p>)
            }
        </ul>

        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
        </form>
    </div>)
}
const getVisibilityToggleTemplate = () => {
    return (<div>
        <h1>VisibilityToggle</h1>
        <button onClick={onToggleVisibilityClick}>{details.isHide ? "show details" : "hide details"}</button>
        {!details.isHide && <p>{details.text}</p>}
    </div>)
}

const renderApp = () => {
    var template = getIndecisionTemplate()
    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot)
}

renderApp()
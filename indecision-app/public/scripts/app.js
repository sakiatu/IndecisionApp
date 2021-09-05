'use strict';

var app = {
    title: 'Indecision',
    subtitle: 'how you think so you be!',
    options: []
};

var details = {
    isHide: true,
    text: "the is some text over here"
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(option);
        renderApp();
    }
};
var wipeAll = function wipeAll() {
    app.options = [];
    renderApp();
};
var onMakeDecision = function onMakeDecision() {
    var random = Math.floor(Math.random() * app.options.length);
    console.log(random);
    var option = app.options[random];
    alert(option);
};
var onToggleVisibilityClick = function onToggleVisibilityClick() {
    details.isHide = !details.isHide;
    renderApp();
};
var getIndecisionTemplate = function getIndecisionTemplate() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            { id: 'header' },
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'button',
            { disabled: !app.options.length, onClick: onMakeDecision },
            'What Should I do'
        ),
        React.createElement(
            'button',
            { disabled: !app.options.length, onClick: wipeAll },
            'Remove All'
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? app.options.length + " options" : 'no options'
        ),
        React.createElement(
            'ul',
            { type: 'none' },
            app.options.map(function (option, index) {
                return React.createElement(
                    'p',
                    { key: index },
                    index + 1 + ": " + option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );
};
var getVisibilityToggleTemplate = function getVisibilityToggleTemplate() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'VisibilityToggle'
        ),
        React.createElement(
            'button',
            { onClick: onToggleVisibilityClick },
            details.isHide ? "show details" : "hide details"
        ),
        !details.isHide && React.createElement(
            'p',
            null,
            details.text
        )
    );
};

var renderApp = function renderApp() {
    var template = getIndecisionTemplate();
    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

renderApp();

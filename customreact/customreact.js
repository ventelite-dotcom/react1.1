
function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('Target',reactElement.props.Target)

    // container.appendChild(domElement)
    for(const prop in reactElement.props){
        if (prop =='Children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])

    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props:{
        herf:'https://google.com',
        Target : '_blank'
    },
        Children: 'click me to visit google ',
}


const mainContainer = document.getElementById('root')
customRender(reactElement,mainContainer)


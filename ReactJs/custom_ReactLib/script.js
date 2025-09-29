// chai with code react playlist (class 4)
// creating custom react library
// how the react component work behind the scence 
// like how the bellow
// function Anchor {
//  return(
//          <a href="" target="">
//        )
// }export default Anchor 

// are renderd in 
// render(
// <Anchor/>
// );

let root = document.querySelector("#root");
console.log(root);
let div1 = document.createElement('div');
div1.setAttribute("class", "container");
div1.setAttribute("id", "cont");
root.appendChild(div1);

// creating a element object like react creates
const reactElem = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "click me to visit google"
}

// appending to page
function customRender(reactElem, rootElem) {
    const domelem = document.createElement(reactElem.type);
    domelem.innerHTML = reactElem.children;
    // domelem.setAttribute("href", reactElem.props.href);
    // domelem.setAttribute("target", reactElem.props.target);
    // rootElem.appendChild(domelem);
    for (const prop in reactElem.props) {
        if (prop == 'children') continue;
        domelem.setAttribute(prop, reactElem.props[prop]);
    }
    rootElem.appendChild(domelem);
}
customRender(reactElem, root);



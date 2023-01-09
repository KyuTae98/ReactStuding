import _ from 'lodash';
import printMe from './print.js';


function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = '클릭 후 콜솔 체크해봐';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component())
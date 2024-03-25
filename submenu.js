const backgroundBody = document.querySelector('.body');
const contentHappines = document.querySelector('.color-text');


let creatSubMenu = function (targetItem, content, dataStyle) {
    if (!targetItem.children.length == 0) {
        return;
    }
    else {
        const createConteiner = document.createElement('div');

        createConteiner.classList.add('sub-menu');
        createConteiner.classList.add('active');
        createConteiner.setAttribute('data-style', dataStyle);
        createConteiner.innerHTML = content;

        targetItem.appendChild(createConteiner);
    }
}

let changeBackground = function () {
    const targetItem = document.querySelector('div[data-id="item01"]');

    let content = `<p class="title-sub-menu">Change Background:</p><div class="menu-backgroun">${backgrounList
        .map((el) =>
            `<div class="backgroun-container">
                <div class="backgroun" data-id="${el.id}" style="background: ${el.backgrounMain}"></div>
                <p class="backgroun-name" data-id="${el.id}">${el.backgrounName}</p></div>`)
        .join('')}`;


    creatSubMenu(targetItem, content, 'style-backgroun');

    const subBackgrounMenu = document.querySelector('div[data-style="style-backgroun"]');
    // subBackgrounMenu.setAttribute('data-style', 'style-menu');    
    const conteinerInput = document.querySelector('.menu-backgroun');
    const castomMenu = document.querySelector('.castom-menu');

    conteinerInput.addEventListener('click', (event) => {
        const idEl = event.target.dataset.id;
        event.stopPropagation();

        backgrounAction[idEl](castomMenu);
    })

    targetItem.addEventListener('mouseover', (event) => {
        subBackgrounMenu.classList.add('active');
        event.stopPropagation();
    })

    subBackgrounMenu.addEventListener('mouseout', (event) => {
        subBackgrounMenu.classList.remove('active');
        event.stopPropagation();
    })
}

let changeColorText = function () {
    const targetItem = document.querySelector('div[data-id="item02"]');
    const subStyle = document.querySelector('div[data-style="style-backgroun"]');

    let content = `<p class="title-sub-menu">New color:</p>
        <div class="menu-change-color"><input class="color" type="color" value="#c000cc">
        <button class="save">Save</button></div>`;

    creatSubMenu(targetItem, content, 'style-color');

    const subColorMenu = document.querySelector('div[data-style="style-color"]');

    if (subStyle) {
        if (subStyle.classList.contains('new-style')) {
            subColorMenu.classList.add('new-style');
        }
    }

    const colorInput = document.querySelector('.color');

    let button = document.querySelector('.save');

    button.addEventListener('click', (event) => {
        let colorValue = colorInput.value;
        event.stopPropagation();

        contentHappines.style.color = `${colorValue}`;
    })


    targetItem.addEventListener('mouseover', (event) => {
        subColorMenu.classList.add('active');
        event.stopPropagation();
    })

    subColorMenu.addEventListener('mouseout', (event) => {
        subColorMenu.classList.remove('active');
        event.stopPropagation();
    })

    colorInput.addEventListener('click', (event) => {
        subColorMenu.classList.add('active');
        event.stopPropagation();
    })
}

const menuHandler = {
    item01: () => {
        changeBackground();
    }
}
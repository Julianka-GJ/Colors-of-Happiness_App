const castomMenu = [
    {
        title: 'Change Background',
        img: 'id="Outline" viewBox="0 0 24 24" width="18" height="18" fill="#efbbff"><path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM5,2H19a3,3,0,0,1,3,3V19a2.951,2.951,0,0,1-.3,1.285l-9.163-9.163a5,5,0,0,0-7.072,0L2,14.586V5A3,3,0,0,1,5,2ZM5,22a3,3,0,0,1-3-3V17.414l4.878-4.878a3,3,0,0,1,4.244,0L20.285,21.7A2.951,2.951,0,0,1,19,22Z"/><path d="M16,10.5A3.5,3.5,0,1,0,12.5,7,3.5,3.5,0,0,0,16,10.5Zm0-5A1.5,1.5,0,1,1,14.5,7,1.5,1.5,0,0,1,16,5.5Z"',
        id: 'item01'
    },
];

const backgrounList = [
    {
        backgrounMain: 'linear-gradient(#3bd1b8, #109ccc)',
        colorMenu: '#555556',
        backgrounName: "The Lonely Sea",
        backgrounMenu: `linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.45) 0%,
            rgba(255, 255, 255, 0.85) 100%
           )`,
        id: 'version01'
    },
    {
        backgrounMain: 'linear-gradient(#3bd1b8, #155ccc)',
        colorMenu: '#75757a',
        backgrounName: "Cool blue",
        backgrounMenu: `linear-gradient(
            45deg,
            rgba(106, 25, 285, 0.45) 0%,
            rgba(215, 200, 245, 0.85) 100%
           )`,
        id: 'version02'
    },
    {
        backgrounMain: 'linear-gradient(#f3d0e3, #4e3f70',
        colorMenu: '#75757a',
        backgrounName: "Sleep Magic",
        backgrounMenu: `linear-gradient(
            45deg,
            rgba(106, 25, 285, 0.45) 0%,
            rgba(215, 200, 245, 0.85) 100%
           )`,
        id: 'version03'
    },
    {
        backgrounMain: 'linear-gradient(#512d5f, #4a4563)',
        colorMenu: '#d5d5d7',
        backgrounName: "You cant be serious",
        backgrounMenu: `linear-gradient(
            45deg,
            rgba(33, 31, 43, 0.45) 0%,
            rgba(55, 53, 64, 0.85) 100%
           )`,
        
        id: 'version04'
    },
    {
        backgrounMain: 'linear-gradient(#678ba5, #9dbfe5, #ad97c6, #060a0b)',
        colorMenu: '#d5d5d7',
        backgrounName: "Fantasea Waves",
        backgrounMenu: `linear-gradient(
            45deg,
            rgba(33, 31, 43, 0.45) 0%,
            rgba(55, 53, 64, 0.85) 100%
           )`,
        
        id: 'version05'
    },
    {
        backgrounMain: 'linear-gradient(#492c79, #ffb5d3)',
        colorMenu: '#d5d5d7',
        backgrounName: "Hate Machine",
        backgrounMenu: `linear-gradient(
            45deg,
            rgba(33, 31, 43, 0.45) 0%,
            rgba(55, 53, 64, 0.85) 100%
           )`,
        
        id: 'version06'
    }
];

let getNewStyle = function(castomMenu, numberItem, toggleStyle){
    backgroundBody.style.background = `${backgrounList[numberItem].backgrounMain}`;

        let itemSbmenu = document.querySelectorAll('.sub-menu');

        if(toggleStyle) {
            itemSbmenu.forEach((el) => {el.classList.toggle('new-style')});
            castomMenu.classList.toggle('new-style');

        }
        else {
            itemSbmenu.forEach((el) => {el.classList.add('new-style')});
            castomMenu.classList.add('new-style');
        }
}

const backgrounAction = {
    version01: (castomMenu) => {
        getNewStyle(castomMenu, 0);
    },

    version02: (castomMenu) => {
        getNewStyle(castomMenu, 1);
    },

    version03: (castomMenu) => {
        getNewStyle(castomMenu, 2, 'toggleStyle');
    },

    version04: (castomMenu) => {
        getNewStyle(castomMenu, 3, 'toggleStyle');
    },

    version05: (castomMenu) => {
        getNewStyle(castomMenu, 4);
    },

    version06: (castomMenu) => {
        getNewStyle(castomMenu, 5, 'toggleStyle');
    }
};
class MenuActions {
    constructor(list, handlers, container, targetContainer = document) {
        this.handlers = handlers;
        this.container = container;
        this.targetContainer = targetContainer;

        //Render 
        this.preparationItem(list);

        //Event

        this.initHandlers();

    }

    preparationItem(source) {
        this.container.innerHTML = `${source.map((event) => `<div class="item-block"><svg "${event.img}">
        </svg><div class="item" data-id="${event.id}">${event.title}</div></div>`).join('')}`;
    }

    enabel() {
        this.container.classList.add('active');
    }

    disabel() {
        this.container.classList.remove('active');
    }

    positioning(x, y) {
        this.container.style.left = `${x}px`;
        this.container.style.top = `${y}px`;
    }

    initHandlers() {
        this.targetContainer.addEventListener('contextmenu', event => {
            event.preventDefault();
            event.stopPropagation();

            this.positioning(event.clientX + 10, event.clientY + 10);
            this.enabel();
        })

        //Click on menu item

        this.container.addEventListener('mouseover', (event) => {
            const id = event.target.dataset.id;
            event.stopPropagation();

            if (!this.handlers[id]) {
                return console.warn('No handler for id - ', id);
            }

            this.handlers[id]();
        })

        document.addEventListener('click', () => {
            this.disabel();
        })
    }
}

window.addEventListener('load', () => {
    const menu = document.querySelector('.castom-menu');

    new MenuActions(castomMenu, menuHandler, menu);
})
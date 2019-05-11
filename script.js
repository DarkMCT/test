

action = () => {
    const loading_bar = document.getElementsByClassName("loading-bar");

    let value = 0;
    let order = 1; // 1 Inc, -1 Dec

    const MAX_VALUE = 20;

    load = () => {
        value += order;
        loading_bar[0].innerHTML =  "*".repeat(value);

        if (value === MAX_VALUE) order = -1;
        if (value === 0        ) order = +1;
    };

    setInterval(load, 100);
};

action();



action = () => {
    const loading_bar = document.getElementsByClassName("loading-bar");

    let value = 0;
    const MAX_VALUE = 100;

    load = () => {
        let order = 1; // 1 Inc, -1 Dec

        value += order;
        loading_bar.innerHTML =  "*" * value;

        if (value == MAX_VALUE) order = -1;
        if (value == 0        ) order = +1;
    };

    setInterval(load, 500);
};

document.onload = action;

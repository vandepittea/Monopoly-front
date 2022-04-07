"use strict";
let _currentGameState = null;

function manageGame()
{
    fetchFromServer('/games/dummy', 'GET')
        .then (game =>
        {
            _currentGameState = game;
            injectProperties(game);
            injectBalance(game);
        })
        .catch(errorHandler);
}

function injectBalance(game)
{
    const $balanceContainer = document.querySelector('#balance-container');
    //Using dummy data, need to change to own's player money.
    $balanceContainer.innerHTML = game.players[0].money;
    console.log("added the balance of the dummy game");
}

function injectProperties(game)
{
    const $smallPropertyContainer = document.querySelector('#small-property-container');
    game.players[0].properties.forEach(function(property, index)
    {
        if (index < 3)
        {
            injectPropertyInContainer($smallPropertyContainer, property);
        }
    });
}

function injectPropertyInContainer($container, property)
{
    _tiles.forEach(tile =>
    {
        if (property.property === tile.name)
        {
            const $template = $container.querySelector('template').content.firstElementChild.cloneNode(true);
            $template.setAttribute('src', `../images/deeds/${tile.nameAsPathParameter}.jpg`);
            $template.setAttribute('alt', `${tile.name}`);
            $template.setAttribute('name', `${tile.name}`);

            const image = $template.outerHTML;
            $container.insertAdjacentHTML('beforeend',
                `<div class="partially-of-screen">
                        <div class="partially-of-screen-images">${image}</div>
                 </div>`);
        }
    });
}

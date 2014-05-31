var infoPanel = L.Control.extend({
    options: {
        position: 'bottomleft'
    },

onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
},

// method that we will use to update the control based on feature properties passed
update = function (props) {
    this._div.innerHTML = '<h4>Name: </h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
        : 'Hover over a region');
}
});
// Import stylesheets
import './style.css';

carto.setDefaultAuth({
    username: 'romaing6',
    apiKey: 'a508a5fcde7a2ef52caab5fc031f43e96a0204cc'
});

const map = new mapboxgl.Map({
      container: 'map',
      style: carto.basemaps.darkmatter,
      center: [35, -6],
      zoom: 4
    });

const source = new carto.source.SQL("SELECT A.*,B.status_group FROM pump_it_up_data_mining_the_water_table_training_set_values A left join pump_it_up_data_mining_the_water_table_training_set_labels B on B.id = A.id");


const viz = new carto.Viz(`
    color: ramp($status_group, [#66cc85, #f67171, #f8c374])
    strokeWidth:0
    width: sqrt(ramp(zoomRange([1,15]),[1,$population]))
`);

const layer = new carto.Layer('layer', source, viz);

layer.addTo(map);
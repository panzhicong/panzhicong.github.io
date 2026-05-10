const iconSets = [
  ['fivetran_symbol.png', 'airbyte_symbol.png', 'apache-airflow_symbol.png', 'clickhouse_symbol.png', 'databricks_symbol.png'],
  ['dbt-core_symbol.png', 'google-bigquery_symbol.png', 'looker_symbol.png', 'metabase_symbol.png', 'postgresql_symbol.png'],
  ['power-bi_symbol.png', 'segment_symbol.png', 'snowflake_symbol.png', 'tableau_symbol.png', 'fivetran_symbol.png']
];

let currentSetIndex = 0;

function rotateIcons() {
  const iconGraphs = document.querySelectorAll('.icon-graph');
  const nextSetIndex = (currentSetIndex + 1) % iconSets.length;
  const nextSet = iconSets[nextSetIndex];

  iconGraphs.forEach(graph => {
    const icons = graph.querySelectorAll('.icon');
    icons.forEach((icon, index) => {
      icon.style.opacity = 0;
      setTimeout(() => {
        icon.src = `assets/${nextSet[index]}`;
        icon.style.opacity = 1;
      }, 50);
    });
  });

  currentSetIndex = nextSetIndex;
}

setInterval(rotateIcons, 5000);

//
// const iconSets = [
//   ['fivetran_symbol.png', 'airbyte_symbol.png', 'apache-airflow_symbol.png', 'clickhouse_symbol.png', 'databricks_symbol.png'],
//   ['dbt-core_symbol.png', 'google-bigquery_symbol.png', 'looker_symbol.png', 'metabase_symbol.png', 'postgresql_symbol.png'],
//   ['power-bi_symbol.png', 'segment_symbol.png', 'snowflake_symbol.png', 'tableau_symbol.png', 'fivetran_symbol.png']
// ];
//
// let currentSetIndex = 0;
//
// function rotateIcons() {
//   const iconContainers = document.querySelectorAll('.icon-container');
//   const nextSetIndex = (currentSetIndex + 1) % iconSets.length;
//   const nextSet = iconSets[nextSetIndex];
//
//   // Slide current icons to the left
//   iconContainers.forEach(container => {
//     container.classList.add('sliding-left');
//   });
//
//   setTimeout(() => {
//     // Update icons and prepare them off-screen to the right
//     iconContainers.forEach((container, index) => {
//       const img = container.querySelector('img');
//       img.src = `assets/${nextSet[index]}`;
//       container.classList.remove('sliding-left');
//       container.classList.add('sliding-right');
//     });
//
//     // Trigger reflow
//     void iconContainers[0].offsetWidth;
//
//     // Slide new icons from right to center
//     iconContainers.forEach(container => {
//       container.classList.remove('sliding-right');
//     });
//   }, 300);
//
//   currentSetIndex = nextSetIndex;
// }
//
// setInterval(rotateIcons, 5000);

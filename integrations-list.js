// Fetch integrations data
// let integrations = [];

const integrationsData = [
  {
    "name": "fivetran",
    "category": "transformations_etl",
    "tool_icon": "assets/fivetran_symbol.png",
    "description": "Fivetran is an automated data integration tool that connects various data sources and loads them into a data warehouse, simplifying the ETL process."
  },
  {
    "name": "airbyte",
    "category": "transformations_etl",
    "tool_icon": "assets/airbyte_symbol.png",
    "description": "Airbyte is an open-source ETL tool that helps sync data from various APIs, databases, and other data sources into data warehouses."
  },
  {
    "name": "apache-airflow",
    "category": "transformations_etl",
    "tool_icon": "assets/apache-airflow_symbol.png",
    "description": "Apache Airflow is an open-source platform to programmatically author, schedule, and monitor workflows, widely used for managing complex ETL pipelines."
  },
  {
    "name": "clickhouse",
    "category": "databases_warehouses",
    "tool_icon": "assets/clickhouse_symbol.png",
    "description": "ClickHouse is a fast open-source columnar database management system for online analytical processing (OLAP), enabling high-speed data processing."
  },
  {
    "name": "databricks",
    "category": "databases_warehouses",
    "tool_icon": "assets/databricks_symbol.png",
    "description": "Databricks is a cloud-based platform for big data analytics and AI, built on Apache Spark, enabling data engineers to process data efficiently."
  },
  {
    "name": "dbt-core",
    "category": "transformations_etl",
    "tool_icon": "assets/dbt-core_symbol.png",
    "description": "dbt (Data Build Tool) enables analytics engineers to transform data in their warehouse by writing SQL SELECT statements and transforming the data directly within the warehouse."
  },
  {
    "name": "google-bigquery",
    "category": "databases_warehouses",
    "tool_icon": "assets/google-bigquery_symbol.png",
    "description": "Google BigQuery is a fully-managed, serverless data warehouse that enables scalable analysis of large datasets using SQL."
  },
  {
    "name": "looker",
    "category": "business_intelligence",
    "tool_icon": "assets/looker_symbol.png",
    "description": "Looker is a business_intelligence platform that helps organizations explore, analyze, and share real-time business insights from data."
  },
  {
    "name": "metabase",
    "category": "business_intelligence",
    "tool_icon": "assets/metabase_symbol.png",
    "description": "Metabase is an open-source business_intelligence tool that lets users easily query and visualize data, creating dashboards without needing to know SQL."
  },
  {
    "name": "postgresql",
    "category": "databases_warehouses",
    "tool_icon": "assets/postgresql_symbol.png",
    "description": "PostgreSQL is a powerful, open-source object-relational database system known for its reliability, robustness, and performance."
  },
  {
    "name": "power-bi",
    "category": "business_intelligence",
    "tool_icon": "assets/power-bi_symbol.png",
    "description": "Power BI is a suite of business analytics tools that helps organizations visualize and share insights from their data through interactive dashboards."
  },
  {
    "name": "segment",
    "category": "transformations_etl",
    "tool_icon": "assets/segment_symbol.png",
    "description": "Segment is a customer data platform that helps businesses collect, clean, and control customer data for use in analytics and marketing tools."
  },
  {
    "name": "snowflake",
    "category": "databases_warehouses",
    "tool_icon": "assets/snowflake_symbol.png",
    "description": "Snowflake is a cloud-based data warehousing platform designed for scalability and performance, enabling data storage, processing, and analytic solutions."
  },
  {
    "name": "tableau",
    "category": "business_intelligence",
    "tool_icon": "assets/tableau_symbol.png",
    "description": "Tableau is a powerful data visualization tool used to simplify raw data into understandable, actionable insights via interactive dashboards."
  },
  {
    'name': 'aws-redshift',
    'category': 'databases_warehouses',
    'tool_icon': 'assets/aws-redshift_symbol.png',
    'description': 'Amazon Redshift is a fully managed data warehouse service in the cloud, optimized for fast query performance on large datasets.'
  }, {
    'name': 'aws-glue',
    'category': 'transformations_etl',
    'tool_icon': 'assets/aws-glue_symbol.png',
    'description': 'AWS Glue is a fully managed ETL service that makes it easy to prepare and transform data for analytics, machine learning, and application development.'
  }, {
    'name': 'amazon-quicksight',
    'category': 'business_intelligence',
    'tool_icon': 'assets/amazon-quicksight_symbol.png',
    'description': 'Amazon QuickSight is a scalable, serverless, embeddable BI service that lets you create interactive dashboards for data analysis.'
  }, {
    'name': 'azure-synapse-analytics',
    'category': 'databases_warehouses',
    'tool_icon': 'assets/azure-synapse-analytics_symbol.png',
    'description': 'Azure Synapse Analytics is an integrated analytics service that accelerates time to insight by bringing together big data and data warehousing.'
  }, {
    'name': 'azure-data-factory',
    'category': 'transformations_etl',
    'tool_icon': 'assets/azure-data-factory_symbol.png',
    'description': 'Azure Data Factory is a cloud-based ETL service that allows you to create, schedule, and orchestrate data workflows at scale.'
  }, {
    'name': 'google-cloud-dataflow',
    'category': 'transformations_etl',
    'tool_icon': 'assets/google-cloud-dataflow_symbol.png',
    'description': 'Google Cloud Dataflow is a fully managed service for stream and batch processing of large datasets, enabling real-time data transformation.'
  }
]


// Render integration cards
function renderIntegrations(integrations) {
  const grid = document.getElementById('integration-grid');
  grid.innerHTML = '';
  integrations.forEach(integration => {
    const card = createIntegrationCard(integration);
    grid.appendChild(card);
  });
  // updateIntegrationCount(integrations.length);
}

// Create integration card
function createIntegrationCard(integration) {
  const card = document.createElement('div');
  card.className = 'integration-card';
  card.innerHTML = `
        <div class="integration-header">
            <img src="${integration.tool_icon}" alt="${integration.name}" class="integration-icon">
            <h3 class="integration-name">${integration.name}</h3>
        </div>
        <p class="integration-description">${integration.description}</p>
<!--        <a href="#" class="learn-more">Learn more</a>-->
    `;
  return card;
}

// Update integration count
function updateIntegrationCount(count) {
  document.getElementById('integration-count').textContent = count;
}


function loadTools(category) {
  // Remove active class from all tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  // Add active class to clicked tab
  document.querySelector(`.tab[data-category="${category}"]`).classList.add('active');

  const filteredIntegrations = category === 'all'
    ? integrationsData
    : integrationsData.filter(integration => integration.category === category);


  // Render integrations
  renderIntegrations(filteredIntegrations);
}

// Call loadTools function with the default category
loadTools('all');

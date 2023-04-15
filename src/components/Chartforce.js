import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"; 

class Graficoforce extends Component {
    componentDidMount() {
        // Create chart
        let chart = am4core.create("chartdivforce", am4plugins_forceDirected.ForceDirectedTree);
        // Create series
        let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
        // Set up data fields
        series.dataFields.value = "value";
        series.dataFields.name = "name";
        series.dataFields.children = "children";
        series.dataFields.collapsed = "0";
        series.data = [
            {
              name: "HABILIDADES",
              value: 600,
              children: [
                {
                  name: "FRONTEND",
                  value: 300,
                  children: [
                    {
                      name: "CSS", value: 200, children: [
                        { name: "SCSS", value: 50 },
                        { name: "TAILWIND", value: 50 },
                        { name: "BOOTSTRAP", value: 50 },
                      ]
                    },
                    {
                      name: "JS", value:200, children: [
                        { name: "REACT", value: 100, children: [
                          { name: "STYLED COMP", value: 50 },
                          { name: "MATERIAL UI", value: 50 },
                          { name: "HOOKS", value: 50 },
                          { name: "NEXT.JS", value: 50 },
                          { name: "REDUX", value: 50 }
                          ]
                    },
                        { name: "TYPESCRIPT", value: 100 },
                        { name: "THREE.JS", value: 100 }
                      ]
                    },
                    { name: "HTML5", value: 200 },
                  ]
                },
                {
                  name: "MKT",
                  value: 300,
                  children: [  
                      { name: "SEO", value: 80},
                      { name: "ANALYTICS", value: 80},
                      { name: "INSTAGRAM ADS", value: 80},
                  ]
                },
                {
                  name: "BACKEND",
                  value: 300,
                  children: [
                    {
                      name: "API'S", value: 200, children: [
                        { name: "REST/API", value: 33 },
                        { name: "FUNÇÕES", value: 40 },
                        { name: "INTEGRAR DADOS", value: 89 }
                      ]
                    },
                    {
                      name: "BANCO DE DADOS", value: 200, children: [
                        { name: "MYSQL", value: 100 },
                        { name: "NOSQL", value: 100},
                      ]
                    },
                      {
                      name: "LINGUAGENS", value: 200,
                       children: [
                        { name: "JS", value: 100, children: [
                            {name: "NODE"},
                            {name: "Jest"},
                            {name: "Nest/Express"}
                        ]},
                        { name: "PHP", value: 100, children: [
                            {name: "WORDPRESS"}
                        ] },
                      ]
                    }
                  ]
                },
                {
                    name: "DESIGN",
                    value: 300,
                    children: [  
                        { name: "CRIAÇÃO DE LOGOTIPOS", value: 100},
                        { name: "IDENTIDADE VISUAL", value: 100},
                        { name: "UI/UX", value: 100},
                    ]
                  },         
              ]
            }
          ];
        // NODES
        series.nodes.template.label.text = "[bold]{name}[/]";
        series.nodes.template.outerCircle.filters.push(new am4core.DropShadowFilter());
        series.nodes.template.togglable = true;
        series.nodes.template.tooltipText = "{name}";
        series.nodes.template.events.on("hit", function(event) {
        chart.zoomToDataItem(event.target.dataItem, 1.3, true)
        });
        series.maxLevels = 5;
        series.fontSize = 20;
        series.minRadius = 30;
        series.maxRadius = 100;
        series.links.template.distance = 1.3;
        series.links.template.tooltipText = "{name}: [bold]{value}[/]";
        series.links.template.interactionsEnabled = true;
        series.links.template.strokeWidth = 5;
        series.links.template.strokeOpacity = 1;
        chart.zoomable = true;
        series.colors.list = [
          am4core.color("#f26419"),
          am4core.color("#9E0059"),
          am4core.color("#9E0059"),
          am4core.color("#f26419"),
          am4core.color("#FFBD00"),
          am4core.color("#FFBD00"),
          am4core.color("#390099"),
          am4core.color("#390099"),
          am4core.color("#FF0054"),
        ];    

    }  
    componentWillUnmount() {
      if (this.chart) {
        this.chart.dispose();
      }
    }  
    render() {
      return (
        <div id="chartdivforce" style={{ width: "100%", height: "100vh", position: "absolute", top: "0", left: "0"}}></div>
      );
    }
  }
  export default Graficoforce;
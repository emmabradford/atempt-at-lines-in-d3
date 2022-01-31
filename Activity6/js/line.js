class Line {

  constructor(_config) {
    this.config = {
      parentElement: _config.parentElement,
      containerWidth: _config.containerWidth || 500,
      containerHeight: _config.containerHeight || 140,
      margin: { top: 10, bottom: 30, right: 10, left: 30 }
    }

    // Call a class function
    this.initVis();
  }

  initVis() {
	let vis = this;

    	vis.width = vis.config.containerWidth - vis.config.margin.left - vis.config.margin.right;
    	vis.height = vis.config.containerHeight - vis.config.margin.top - vis.config.margin.bottom;

    	vis.xScale = d3.scaleTime()
        	.range([0, vis.width]);

    	vis.yScale = d3.scaleLinear()
        	.range([vis.height, 0])
        	.nice();

    	// Initialize axes
    	vis.xAxis = d3.axisBottom(vis.xScale)
        	.ticks(6)
        	.tickSizeOuter(0)
        	.tickPadding(10);
        	//.tickFormat(d => d + ' km');

    	vis.yAxis = d3.axisLeft(vis.yScale)
        	.ticks(6)
        	.tickSizeOuter(0)
        	.tickPadding(10);

    	// Define size of SVG drawing area
    	vis.svg = d3.select(vis.config.parentElement)
        	.attr('width', vis.config.containerWidth)
        	.attr('height', vis.config.containerHeight);

    	// Append group element that will contain our actual chart (see margin convention)
    	vis.chart = vis.svg.append('g')
        	//.attr('transform', `translate(${vis.config.margin.left},${vis.config.margin.top})`);

    	// Append empty x-axis group and move it to the bottom of the chart
    	vis.xAxisG = vis.chart.append('g')
        	.attr('class', 'axis x-axis')
        	//.attr('transform', `translate(0,${vis.height})`);
    
    	// Append y-axis group
    	vis.yAxisG = vis.chart.append('g')
        	.attr('class', 'axis y-axis');      


      updateVis(); //leave this empty for now...
  }


  //leave this empty for now
 updateVis() { 
   
   renderVis(); 

 }


 //leave this empty for now...
 renderVis() { 

  }



}

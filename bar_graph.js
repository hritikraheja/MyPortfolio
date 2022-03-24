var easySolved;
var mediumSolved;
var hardSolved;
var acceptanceRate;
var totalSolved;

$.getJSON(
  "https://leetcode-stats-api.herokuapp.com/hritikraheja",
  function (data) {
    easySolved = $(data.easySolved);
    mediumSolved = $(data.mediumSolved);
    hardSolved = $(data.hardSolved);
    acceptanceRate = $(data.acceptanceRate);
    totalSolved = $(data.totalSolved);

    anychart.onDocumentReady(function () {
      var data = {
        header: ["DIFFICULTY", "NO. OF QUESTIONS SOLVED"],
        rows: [
          {
            x: "EASY",
            value: easySolved[0],
            normal: {
              fill: "#5cd65c",
              stroke: "#5cd65c",
              label: { enabled: true },
            },
            hovered: {
              fill: "#5cd65c",
              stroke: "#5cd65c",
              label: { enabled: true },
            },
            selected: {
              fill: "#5cd65c",
              stroke: "#5cd65c",
              label: { enabled: true },
            },
          },
          {
            x: "INTERMEDIATE",
            value: mediumSolved[0],
            normal: {
              fill: "yellow",
              stroke: "yellow",
              label: { enabled: true },
            },
            hovered: {
              fill: "yellow",
              stroke: "#5cd65c",
              label: { enabled: true },
            },
            selected: {
              fill: "yellow",
              stroke: "#5cd65c",
              label: { enabled: true },
            },
          },
          {
            x: "HARD",
            value: hardSolved[0],
            normal: {
              fill: "red",
              stroke: "red",
              label: { enabled: true },
            },
            hovered: {
              fill: "red",
              stroke: "#5cd65c",
              label: { enabled: true },
            },
            selected: {
              fill: "red",
              stroke: "#5cd65c",
              label: { enabled: true },
            },
          },
        ],
      };

      anychart.theme(anychart.themes.coffee);
      var chart = anychart.bar();
      chart.data(data);
      var a = chart.bar(0);
      chart.xAxis().title("DIFFICULTY");
      // chart.yAxis().title("NO. OF QUESTIONS SOLVED");
      chart.barsPadding(-0.9);
      chart.container("bar_graph");
      chart.draw();
    });

     var a = document.getElementById('total_questions_id');
     var b = document.getElementById('acceptance_rate_id');
     a.innerHTML = "Total Questions Solved : " + totalSolved[0];
     a.setAttribute('class', 'acceptance_rate');
     b.innerHTML = "Acceptance Rate : " + acceptanceRate[0] + "%";
     b.setAttribute('class', 'acceptance_rate')
  }
);

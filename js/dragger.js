// var myChart4 = echarts.init(document.getElementById('main4'));
// 
// var symbolSize = 20;
// var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
// 
// var option4 = {
//     title: {
//         text: '实现拖拽事件'
//     },
//     tooltip: {
//         triggerOn: 'none',
//         formatter: function (params) {
//             return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
//         }
//     },
//     grid: {
//     },
//     xAxis: {
//         min: -100,
//         max: 80,
//         type: 'value',
//         axisLine: {onZero: false}
//     },
//     yAxis: {
//         min: -30,
//         max: 60,
//         type: 'value',
//         axisLine: {onZero: false}
//     },
//     dataZoom: [
//         {
//             type: 'slider',
//             xAxisIndex: 0,
//             filterMode: 'empty'
//         },
//         {
//             type: 'slider',
//             yAxisIndex: 0,
//             filterMode: 'empty'
//         },
//         {
//             type: 'inside',
//             xAxisIndex: 0,
//             filterMode: 'empty'
//         },
//         {
//             type: 'inside',
//             yAxisIndex: 0,
//             filterMode: 'empty'
//         }
//     ],
//     series: [
//         {
//             id: 'a',
//             type: 'line',
//             smooth: true,
//             symbolSize: symbolSize,
//             data: data
//         }
//     ]
// };
// 
// 
// if (!myChart4.inNode) {
//     setTimeout(function () {
//         // Add shadow circles (which is not visible) to enable drag.
//         myChart4.setOption({
//             graphic: echarts.util.map(data, function (item, dataIndex) {
//                 return {
//                     type: 'circle',
//                     position: myChart4.convertToPixel('grid', item),
//                     shape: {
//                         cx: 0,
//                         cy: 0,
//                         r: symbolSize / 2
//                     },
//                     invisible: true,
//                     draggable: true,
//                     ondrag: echarts.util.curry(onPointDragging, dataIndex),
//                     onmousemove: echarts.util.curry(showTooltip, dataIndex),
//                     onmouseout: echarts.util.curry(hideTooltip, dataIndex),
//                     z: 100
//                 };
//             })
//         });
//     }, 0);
// 
//     window.addEventListener('resize', updatePosition);
// }
// 
// myChart4.on('dataZoom', updatePosition);
// 
// function updatePosition() {
//     myChart4.setOption({
//         graphic: echarts.util.map(data, function (item, dataIndex) {
//             return {
//                 position: myChart4.convertToPixel('grid', item)
//             };
//         })
//     });
// }
// 
// function showTooltip(dataIndex) {
//     myChart4.dispatchAction({
//         type: 'showTip',
//         seriesIndex: 0,
//         dataIndex: dataIndex
//     });
// }
// 
// function hideTooltip(dataIndex) {
//     myChart4.dispatchAction({
//         type: 'hideTip'
//     });
// }
// 
// function onPointDragging(dataIndex, dx, dy) {
//     data[dataIndex] = myChart4.convertFromPixel('grid', this.position);
// 
//     // Update data
//     myChart4.setOption({
//         series: [{
//             id: 'a',
//             data: data
//         }]
//     });
// }
// 
// myChart4.setOption(option4);
// 

var myChart = echarts.init(document.getElementById('main'));

var symbolSize = 20;
var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];

option = {
    title: {
        text: 'Try Dragging these Points'
    },
    tooltip: {
        triggerOn: 'none',
        formatter: function (params) {
            return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
        }
    },
    grid: {
    },
    xAxis: {
        min: -100,
        max: 80,
        type: 'value',
        axisLine: {onZero: false}
    },
    yAxis: {
        min: -30,
        max: 60,
        type: 'value',
        axisLine: {onZero: false}
    },
    dataZoom: [
        {
            type: 'slider',
            xAxisIndex: 0,
            filterMode: 'empty'
        },
        {
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'empty'
        },
        {
            type: 'inside',
            xAxisIndex: 0,
            filterMode: 'empty'
        },
        {
            type: 'inside',
            yAxisIndex: 0,
            filterMode: 'empty'
        }
    ],
    series: [
        {
            id: 'a',
            type: 'line',
            smooth: true,
            symbolSize: symbolSize,
            data: data
        }
    ]
};


if (!myChart.inNode) {
    setTimeout(function () {
        // Add shadow circles (which is not visible) to enable drag.
        myChart.setOption({
            graphic: echarts.util.map(data, function (item, dataIndex) {
                return {
                    type: 'circle',
                    position: myChart.convertToPixel('grid', item),
                    shape: {
                        cx: 0,
                        cy: 0,
                        r: symbolSize / 2
                    },
                    invisible: true,
                    draggable: true,
                    ondrag: echarts.util.curry(onPointDragging, dataIndex),
                    onmousemove: echarts.util.curry(showTooltip, dataIndex),
                    onmouseout: echarts.util.curry(hideTooltip, dataIndex),
                    z: 100
                };
            })
        });
    }, 0);

    window.addEventListener('resize', updatePosition);
}

myChart.on('dataZoom', updatePosition);

function updatePosition() {
    myChart.setOption({
        graphic: echarts.util.map(data, function (item, dataIndex) {
            return {
                position: myChart.convertToPixel('grid', item)
            };
        })
    });
}

function showTooltip(dataIndex) {
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
    });
}

function hideTooltip(dataIndex) {
    myChart.dispatchAction({
        type: 'hideTip'
    });
}

function onPointDragging(dataIndex, dx, dy) {
    data[dataIndex] = myChart.convertFromPixel('grid', this.position);

    // Update data
    myChart.setOption({
        series: [{
            id: 'a',
            data: data
        }]
    });
}
myChart.setOption(option);
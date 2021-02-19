const menuConfig = {
  551: {
    icon: 'core',
    sColor: '#1274FF',
    eColor: '#0059FF',
  },
  557: {
    icon: 'wave',
    sColor: '#CB37FF',
    eColor: '#9946FF',
  },
  567: {
    icon: 'wave',
    sColor: '#FF00A2',
    eColor: '#FF598E',
  },
  568: {
    icon: 'wave',
    sColor: '#FF5E00',
    eColor: '#FFB358',
  },
  605: {
    icon: 'wave',
    sColor: '#FFBB00',
    eColor: '#EDFF4C',
  },
  604: {
    icon: 'wave',
    sColor: '#1BDB61',
    eColor: '#1DFFE7',
  },
  601: {
    icon: 'bar',
    sColor: '#00A5AF',
    eColor: '#00C1C8',
  },
  1122: {
    icon: 'bar',
    sColor: '#00A5AF',
    eColor: '#00C1C8',
  },
  default: {
    icon: 'defaultIcon',
    sColor: '#1274FF',
    eColor: '#0059FF',
  }
}

const chartConfig = [
  {
    "chart": {
    	"renderTo": "chart_94a51b3d_1150_4b99_96cb_92b324a3fc14",
    },
    "title": {
    	"text": "二氧化硫（SO2）监测区间",
    	"x": "center",
    	"textStyle": {
    		"fontSize": "14",
    		"fontWeight": "normal",
        color:"#fff"
    	},
    	"padding": [0, 0, 0, 0]
    },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      grid: {
          left: '0%',
  		top:'10px',
          right: '0%',
          bottom: '4%',
         containLabel: true
      },
      xAxis: [{
          type: 'category',
        		data: ['中韩庄乡', '固店镇', '寺庄乡', '望都镇', '贾村镇', '赵庄乡', '高岭乡'],
          axisLine: {
              show: true,
           lineStyle: {
                  color: "rgba(255,255,255,.1)",
                  width: 1,
                  type: "solid"
              },
          },

          axisTick: {
              show: false,
          },
  		axisLabel:  {
                  interval: 0,
                 // rotate:50,
                  show: true,
                  splitNumber: 15,
                  textStyle: {
   					color: "rgba(255,255,255,.6)",
                      fontSize: '12',
                  },
              },
      }],
      yAxis: [{
          type: 'value',
          axisLabel: {
             //formatter: '{value} %'
  			show:true,
  			 textStyle: {
   					color: "rgba(255,255,255,.6)",
                      fontSize: '12',
                  },
          },
          axisTick: {
              show: false,
          },
          axisLine: {
              show: true,
              lineStyle: {
                  color: "rgba(255,255,255,.1	)",
                  width: 1,
                  type: "solid"
              },
          },
          splitLine: {
              lineStyle: {
                 color: "rgba(255,255,255,.1)",
              }
          }
      }],
      series: [
  		{
          type: 'bar',
          data: [50, 30, 20, 90, 10, 20, 60],
          barWidth:'35%', //柱子宽度
         // barGap: 1, //柱子之间间距
          itemStyle: {
              normal: {
                  color:'#2f89cf',
                  opacity: 1,
  				barBorderRadius: 5,
              }
          }
      }

  	]
  },
  {
  	"color": ["#1172EA",
  		"#ff2680",
  		"#38CEAC",
  		"#ff7E11",
  		"#FFEA1B",
  		"69F3FF",
  		"BA32ED",
  		"#ffffff"
  	],
  	"chart": {
  		"renderTo": "chart_94a51b3d_1150_4b99_96cb_92b324a3fc14",
  		"type": "bar"
  	},
  	"backgroundColor": "#fff",
  	"title": {
  		"text": "小时监控",
  		"x": "center",
  		"textStyle": {
  			"fontSize": "14",
  			"fontWeight": "normal"
  		},
  		"padding": [0, 0, 0, 0]
  	},
  	"legend": {
  		"orient": "horizontal",
  		"x": "center",
  		"y": "bottom",
  		"data": ["当日", "昨日", "上周同日"],
  		"textStyle": {
  			"fontSize": 9,
  			"lineHeight": 10
  		},
  		"selected": {
  			"当日": true,
  			"昨日": true,
  			"上周同日": true
  		},
  		"show": true
  	},
  	"calculable": false,
  	"toolbox": {
  		"feature": {
  			"magicType": {
  				"type": ["bar", "line"]
  			}
  		}
  	},
  	"series": [{
  		"name": "当日",
  		"type": "bar",
  		"format": null,
  		"data": ["619129.61", "282965.01", "277136.15", "271192.64", "276024.97", "274090.87", "269527.02", "533046.59", "534347.11", "575921.35", "586954.99", "568553.02", "550926.20", "539441.27", "380389.77", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
  	}, {
  		"name": "昨日",
  		"type": "bar",
  		"format": null,
  		"data": ["970270.47", "632187.40", "624796.50", "618199.28", "628978.28", "624694.72", "620348.04", "889985.32", "859037.12", "884711.05", "470408.45", "446503.05", "395932.52", "389509.81", "374265.74", "396996.05", "437741.41", "423594.32", "526996.86", "476668.02", "474622.92", "450234.07", "424035.39", "404747.30"]
  	}],
  	"yAxis": {
  		"type": "value",
  		"axisLabel": {
  			"formatter": ""
  		},
  		"axisLine": {
  			"lineStyle": {
  				"color": "#999",
  				"width": 1
  			}
  		}
  	},
  	"xAxis": {
  		"type": "category",
  		"data": [" 00", " 01", " 02", " 03", " 04", " 05", " 06", " 07", " 08", " 09", " 10", " 11", " 12", " 13", " 14", " 15", " 16", " 17", " 18", " 19", " 20", " 21", " 22", " 23"],
  		"axisLabel": {
  			"rotate": 30
  		},
  		"axisLine": {
  			"lineStyle": {
  				"color": "#999",
  				"width": 1
  			}
  		}
  	},
  	"grid": {
  		"x": 0,
  		"x2": 0,
  		"y2": 10
  	},
  	"tooltip": {
  		"trigger": "axis"
  	}
  },
  {
      "chart": {
      	"renderTo": "chart_94a51b3d_1150_4b99_96cb_92b324a3fc14",
      },
  	  title: [{
          text: 'PM10',
          left: 'center',
          textStyle: {
              color: '#fff',
  			fontSize:'16'
          }

      }],
      tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          position:function(p){   //其中p为当前鼠标的位置
              return [p[0] + 10, p[1] - 10];
          }
      },
      legend: {

      top:'70%',
         itemWidth: 10,
          itemHeight: 10,
          data:['中韩庄乡', '固店镇', '寺庄乡', '望都镇', '贾村镇', '赵庄乡', '高岭乡'],
                  textStyle: {
             color: 'rgba(255,255,255,.5)',
  			fontSize:'12',
          }
      },
      series: [
          {
          	name:'PM10',
              type:'pie',
  			center: ['50%', '42%'],
              radius: ['40%', '60%'],
              color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],
              label: {show:false},
  			labelLine: {show:false},
              data:[
                  {value:5, name:'中韩庄乡'},
                  {value:1, name:'固店镇'},
                  {value:6, name:'寺庄乡'},
                  {value:2, name:'望都镇'},
                  {value:1, name:'贾村镇'},
                  {value:1, name:'赵庄乡'},
              ]
          }
      ]
  },
  {
    "color": [
      "#1172EA",
      "#ff2680",
      "#38CEAC",
      "#ff7E11",
      "#FFEA1B",
      "69F3FF",
      "BA32ED",
      "#ffffff"
    ],
    "chart": {
      "renderTo": "chart_5efb872e_0732_400c_958d_45c8012e7f1a",
      "type": "bar"
    },
    "backgroundColor": "#fff",
    "title": {
      "text": "排名数据",
      "x": "center",
      "textStyle": {
        "fontSize": "12",
        "fontWeight": "normal",
        "color": "#ECEFFE"
      },
      "padding": [
        10,
        10,
        3,
        10
      ]
    },
    "legend": {
      "orient": "horizontal",
      "x": "center",
      "y": "bottom",
      "data": [
        "PM10",
        "PM2.5"
      ],
      "textStyle": {
        "fontSize": 9,
        "lineHeight": 10,
        "color": "#ECEFFE"
      },
      "selected": {
        "PM10": true,
        "PM2.5": true
      },
      "show": true
    },
    "calculable": false,
    "toolbox": {
      "feature": {
        "magicType": {
          "type": [
            "bar",
            "line"
          ]
        }
      }
    },
    "series": [
      {
        "name": "PM10",
        "type": "bar",
        "format": null,
        "data": [
          "19820165",
          "42126980",
          "101048087",
          "712727"
        ],
        "stack": "总量"
      },
      {
        "name": "PM2.5",
        "type": "bar",
        "format": null,
        "data": [
          "16774047",
          "41148654",
          "543699",
          "228977"
        ],
        "stack": "总量"
      }
    ],
    "yAxis": {
      "type": "value",
      "axisLabel": {
        "formatter": ""
      },
      "axisLine": {
        "lineStyle": {
          "color": "#999",
          "width": 1
        },
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "splitLine": {
        "lineStyle": {
          "color": "#474D67",
          "type": "solid"
        }
      }
    },
    "xAxis": {
      "type": "category",
      "data": [
        '中韩庄乡', '固店镇', '寺庄乡', '望都镇'
      ],
      "axisLabel": {
        "rotate": 30
      },
      "axisLine": {
        "lineStyle": {
          "color": "#999",
          "width": 1
        },
        "show": false
      },
      "axisTick": {
        "lineStyle": {
          "color": "#474D67"
        }
      }
    },
    "grid": {
      "top": 30,
      "left": "3%",
      "right": "4%",
      "bottom": "18%",
      "containLabel": true,
      "shadowColor": true
    },
    "tooltip": {
      "trigger": "axis"
    }
  }
]
const wave = {
  transform: "translate(-212.000000, -167.000000)",
  width: 17,
  height: 14,
  widthRuler: 25,
  heightRuler: 21,
  path: 'M236.038529,176.491567 L233.897625,176.491567 L232.404482,172.574567 C232.259016,172.19199 231.904489,171.940042 231.511277,171.940042 L231.50901,171.940042 C231.118065,171.940042 230.763538,172.189662 230.615804,172.572274 L226.572638,183.091469 L224.584003,167.87136 C224.52491,167.418778 224.181755,167.061841 223.747658,167.008165 C223.322632,166.949833 222.902174,167.208798 222.738567,167.633413 L218.561307,178.607586 L216.099992,176.577935 C215.929548,176.440288 215.720419,176.363265 215.504522,176.363265 L212.961369,176.363265 C212.429528,176.363265 212,176.813554 212,177.368763 C212,177.928662 212.429562,178.378951 212.961369,178.378951 L215.172705,178.378951 L218.384094,181.024505 C218.622736,181.222811 218.938646,181.288091 219.229544,181.20412 C219.522744,181.124804 219.759118,180.900824 219.872736,180.60458 L223.172698,171.930697 L225.159065,187.127459 C225.218159,187.580076 225.561314,187.936978 225.993143,187.990654 C226.034062,187.997672 226.072679,188 226.113631,188 C226.502274,188 226.854534,187.755036 227.004535,187.367769 L231.506843,175.656409 L232.352259,177.875021 C232.497726,178.257632 232.85452,178.507252 233.247732,178.507252 L236.040932,178.507252 C236.570438,178.50958 237,178.056963 237,177.501755 C236.999932,176.944183 236.570371,176.491567 236.038529,176.491567 Z'
}

const core = {
  transform: "translate(-35.000000, -165.000000)",
  width: 14,
  height: 17,
  widthRuler: 21,
  heightRuler: 24,
  path: 'M52.9469569,177 C55.3640719,174.661596 56.5408649,172.368751 55.7607443,171 C55.31382,170.217868 54.2956642,169.845533 52.9020212,169.845533 C51.857417,169.845533 50.5986341,170.067835 49.2261233,170.475003 C48.4327785,167.180353 47.0629125,165 45.5,165 C43.9370875,165 42.5672215,167.18038 41.7738767,170.472322 C40.4013659,170.06518 39.1399381,169.842851 38.0979788,169.842851 C36.7069806,169.842851 35.68618,170.215187 35.2392557,170.997318 C34.4591351,172.366069 35.6359545,174.658941 38.0530431,176.997318 C35.6359281,179.338404 34.4591351,181.631249 35.2392557,183 C35.68618,183.782132 36.7043358,184.154467 38.0979788,184.154467 C39.142583,184.154467 40.4013659,183.932165 41.7738767,183.524997 C42.5672215,186.819647 43.9370875,189 45.5,189 C47.0629125,189 48.4327785,186.81962 49.2261233,183.527678 C50.5986341,183.93482 51.8600619,184.157149 52.9020212,184.157149 C54.2930194,184.157149 55.31382,183.784813 55.7607443,183.002682 C56.5408649,181.631249 55.3640455,179.338404 52.9469569,177 Z M52.8851736,171.328492 C53.944483,171.328492 54.3740043,171.592894 54.4530584,171.731799 C54.5584551,171.916049 54.5479286,172.826789 53.1618498,174.53339 C52.7745137,175.008804 52.3186499,175.489528 51.8206009,175.967598 C51.2092737,175.449466 50.5478533,174.936697 49.8337478,174.437229 C49.7626017,173.561242 49.657205,172.725318 49.5201761,171.932085 C50.7770812,171.547495 51.9365241,171.328492 52.8851736,171.328492 Z M46.9811078,179.587709 C46.4891684,179.874637 45.9945842,180.140112 45.5,180.392179 C45.0054158,180.140112 44.5108316,179.874637 44.0188922,179.587709 C43.5216632,179.295419 43.0535274,178.987039 42.5880363,178.678659 C42.5589432,178.134302 42.5377845,177.576536 42.5377845,176.986592 C42.5377845,176.396648 42.5589432,175.838883 42.5880363,175.294525 C43.0535274,174.986145 43.5216632,174.677765 44.0188922,174.385475 C44.5108316,174.098547 45.0054158,173.833073 45.5,173.581006 C45.9945842,173.833073 46.4891684,174.098547 46.9811078,174.385475 C47.4783368,174.677765 47.9464726,174.986145 48.4119637,175.294525 C48.4410568,175.838883 48.4622155,176.396648 48.4622155,176.986592 C48.4622155,177.576536 48.4410568,178.134302 48.4119637,178.678659 C47.9464726,178.987039 47.4783368,179.295419 46.9811078,179.587709 Z M48.2241804,180.579888 C48.1832161,180.91139 48.1367132,181.242164 48.0846917,181.572067 C47.7820697,181.457082 47.4767763,181.33137 47.1662462,181.197667 C47.3425774,181.098717 47.5188821,181.007785 47.6978581,180.903499 C47.8768077,180.796505 48.0478492,180.686856 48.2241804,180.579888 Z M43.8073054,181.197667 C43.4967753,181.33137 43.191482,181.4544 42.8888599,181.572067 C42.8342624,181.242564 42.7877518,180.911735 42.7493713,180.579888 C42.9257025,180.686883 43.096744,180.796505 43.2783384,180.903473 C43.4520247,181.007785 43.6283559,181.098691 43.8073054,181.19764 L43.8073054,181.197667 Z M41.0831251,177.603352 C40.8150181,177.40312 40.5415157,177.205569 40.2896745,177 C40.5415157,176.797113 40.8150181,176.599535 41.0831251,176.396648 C41.0804273,176.59688 41.0722812,176.794431 41.0722812,177 C41.0722812,177.205569 41.0804273,177.400465 41.0831251,177.603352 Z M42.7493713,173.420112 C42.7903355,173.08861 42.8368384,172.757836 42.8888599,172.427933 C43.191482,172.542918 43.4967753,172.66863 43.8073054,172.802333 C43.6309742,172.901283 43.4546695,172.992215 43.2756935,173.096501 C43.096744,173.203495 42.9257025,173.313144 42.7493713,173.420112 Z M47.1662462,172.802333 C47.4767763,172.66863 47.7820697,172.5456 48.0846917,172.427933 C48.137324,172.746181 48.1820746,173.07781 48.2241804,173.420112 C48.0478492,173.313117 47.8768077,173.203495 47.6952133,173.096527 C47.521527,172.992215 47.3451958,172.901309 47.1662462,172.80236 L47.1662462,172.802333 Z M49.9168749,176.396648 C50.1849819,176.59688 50.4584843,176.794431 50.7103255,177 C50.4584843,177.202887 50.1849819,177.400465 49.9168749,177.603352 C49.9195727,177.40312 49.9277188,177.205569 49.9277188,177 C49.9277188,176.794431 49.9195727,176.599535 49.9168749,176.396648 Z M45.5,166.501676 C46.0502315,166.501676 47.1138785,168.040492 47.8010067,170.956988 C47.0533118,171.236273 46.2845639,171.563906 45.5,171.945251 C44.7154361,171.566615 43.9466882,171.236246 43.1989933,170.956988 C43.8861215,168.040492 44.9497685,166.501676 45.5,166.501676 Z M37.8180759,174.53339 C36.425385,172.826789 36.4148056,171.916049 36.5207048,171.731772 C36.6001292,171.592894 37.0343583,171.328492 38.0987458,171.328492 C39.051918,171.328492 40.2168886,171.547495 41.4798504,171.92943 C41.3357111,172.759832 41.2305662,173.596709 41.1647711,174.437229 C40.4765886,174.916141 39.8104306,175.426801 39.1683966,175.967598 C38.6653489,175.489528 38.2072899,175.008804 37.8180759,174.53339 Z M38.0910229,182.671508 C37.0317135,182.671508 36.6021922,182.407106 36.5205197,182.268201 C36.415123,182.083951 36.4256495,181.173211 37.8117283,179.46661 C38.1990644,178.991196 38.6549282,178.510472 39.1529772,178.032402 C39.7643044,178.550534 40.4257248,179.063303 41.1398303,179.562771 C41.2109764,180.438758 41.3163731,181.274682 41.453402,182.07057 C40.1990889,182.452532 39.0396724,182.671508 38.0910229,182.671508 Z M45.5,187.498324 C44.9497685,187.498324 43.8861215,185.959508 43.1989933,183.043012 C43.9466882,182.763727 44.7154361,182.436094 45.5,182.054749 C46.2845639,182.433385 47.0533118,182.763754 47.8010067,183.043012 C47.1138785,185.959508 46.0502315,187.498324 45.5,187.498324 Z M54.4795861,182.268201 C54.4001617,182.407106 53.9659062,182.671508 52.9014658,182.671508 C51.9482407,182.671508 50.7831907,182.452505 49.5201496,182.07057 C49.6643,181.240169 49.7694538,180.403292 49.8352553,179.562771 C50.5234726,179.08386 51.1896659,178.5732 51.8317357,178.032402 C52.3321914,178.510472 52.7929217,178.988541 53.1794909,179.46661 C54.5722611,181.173211 54.5855117,182.083951 54.4795861,182.268228 L54.4795861,182.268201 Z M44.7594461,176.986592 C44.7594461,176.571915 45.0910027,176.235754 45.5,176.235754 C45.9089973,176.235754 46.2405539,176.571915 46.2405539,176.986592 C46.2405539,177.401269 45.9089973,177.73743 45.5,177.73743 C45.0910027,177.73743 44.7594461,177.401269 44.7594461,176.986592 Z'
}

const bar = {
  transform: "translate(-212.000000, -165.000000)",
  width: 16,
  height: 14,
  widthRuler: 22,
  heightRuler: 22,
  path: 'M213.277004,186.990888 C213.231868,186.996904 213.185919,187 213.139317,187 C212.510074,187 212,186.435639 212,185.739487 L212,166.260513 C212,165.564361 212.510105,165 213.139317,165 C213.768561,165 214.278635,165.564361 214.278635,166.260513 L214.278635,184.863385 L232.712406,184.863385 C233.423514,184.863385 234,185.341677 234,185.931662 C234,186.521677 233.423514,186.999969 232.712406,186.999969 L213.445646,186.999969 C213.388485,186.999969 213.332195,186.996879 213.277004,186.990888 Z M219.592517,182.426947 C219.592517,183.162305 218.983582,183.758434 218.232425,183.758434 C217.481268,183.758434 216.872333,183.162305 216.872333,182.426947 L216.872333,178.808193 C216.872333,178.072834 217.481268,177.476706 218.232425,177.476706 C218.983582,177.476706 219.592517,178.072834 219.592517,178.808193 L219.592517,182.426947 Z M225.329374,182.426947 C225.329374,183.162305 224.720439,183.758434 223.969282,183.758434 C223.218126,183.758434 222.60919,183.162305 222.60919,182.426947 L222.60919,170.190452 C222.60919,169.455093 223.218126,168.858965 223.969282,168.858965 C224.720439,168.858965 225.329374,169.455093 225.329374,170.190452 L225.329374,182.426947 Z M231.304129,182.426947 C231.304129,183.162305 230.695194,183.758434 229.944037,183.758434 C229.192881,183.758434 228.583945,183.162305 228.583945,182.426947 L228.583945,177.038609 C228.583945,176.30325 229.192881,175.707122 229.944037,175.707122 C230.695194,175.707122 231.304129,176.30325 231.304129,177.038609 L231.304129,182.426947 Z'
}

const defaultIcon = {
  transform: "translate(-161.000000, -653.000000)",
  width: 18,
  height: 18,
  widthRuler: 22,
  heightRuler: 22,
  path: 'M174.333303,653 L163.666636,653 C162.195987,653 161,654.153095 161,655.569963 L161,667.430037 C161,668.846846 162.195987,670 163.666636,670 L174.333303,670 C175.803447,670 177,668.846846 177,667.430037 L177,655.569943 C177,654.153095 175.803447,653 174.333303,653 Z M175.768843,667.430017 C175.768843,668.193097 175.125036,668.813683 174.333303,668.813683 L163.666636,668.813683 C162.875005,668.813683 162.230489,668.193097 162.230489,667.430017 L162.230489,655.569943 C162.230489,654.806962 162.875005,654.186337 163.666636,654.186337 L174.333303,654.186337 C175.125036,654.186337 175.768843,654.806962 175.768843,655.569943 L175.768843,667.430017 Z M164.615214,666.185682 L169.213516,666.185682 C169.553379,666.185682 169.828791,665.920043 169.828791,665.593139 C169.828791,665.264984 169.553379,665 169.213516,665 L164.615214,665 C164.275412,665 164,665.264984 164,665.593139 C164,665.920043 164.275452,666.185682 164.615214,666.185682 Z M173.350239,660.907139 L164.6497,660.907139 C164.309898,660.907139 164.034486,661.172778 164.034486,661.500337 C164.034486,661.827896 164.309898,662.093436 164.6497,662.093436 L173.350239,662.093436 C173.690102,662.093436 173.966222,661.827896 173.966222,661.500337 C173.966222,661.172778 173.690102,660.907139 173.350239,660.907139 Z M173.315753,657 L164.615214,657 C164.275412,657 164,657.265738 164,657.593198 C164,657.920757 164.275412,658.186396 164.615214,658.186396 L173.315753,658.186396 C173.655617,658.186396 173.931736,657.920757 173.931736,657.593198 C173.931736,657.265738 173.655617,657 173.315753,657 Z'
}

const baseList = [{
        url: 'javascript:',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579453219568&di=d0f68a410a7fe49e216816b74b0301af&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01310b58b6d02aa801219c779535f8.png%40900w_1l_2o_100sh.jpg',
        title: '全国分布'
      }, {
        url: 'javascript:',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579689211584&di=6dffca6a0e9c8e3f3db6b9b833b782aa&imgtype=0&src=http%3A%2F%2Fchinapower.com.cn%2Fu%2Fcms%2Fwww%2F201608%2F251126192l08.jpg',
        title: '气象地图'
      }, {
        url: 'javascript:',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579689313723&di=cb1e86e86c023971df0ff690a87bb05e&imgtype=0&src=http%3A%2F%2Fdata.useit.com.cn%2Fuseitdata%2Fforum%2F201706%2F30%2F094606a99lkscung9bsohu.jpg', // 404
        title: '地域分布',
        fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
      }]
export {
  menuConfig,
    wave,
    core,
    bar,
    defaultIcon,
    chartConfig,
    baseList
}

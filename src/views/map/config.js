

const markData  = [
    {longitude: 115.143697, latitude: 38.724589, num: 69, name: '城内村'},
    {longitude: 115.133397, latitude: 38.716018, num: 69, name: '所药村'},
    {longitude: 115.165326, latitude: 38.71441, num: 18, name: '南关村'},
    {longitude: 115.14404, latitude: 38.711196, num: 7, name: '东关村'},
    {longitude: 115.14816, latitude: 38.707713, num: 13, name: '北关村'},
    {longitude: 115.140263, latitude: 38.704766, num: 86, name: '曲家湾村'},
    {longitude: 115.150563, latitude: 38.705302, num: 37, name: '韩庄村'},
    {longitude: 115.15022, latitude: 38.701819, num: 24, name: '小西堤村'},
    {longitude: 115.14507, latitude: 38.694584, num: 3, name: '彤霞村'},
    {longitude: 115.128247, latitude: 38.69378, num: 120, name: '沈庄村'},
    {longitude: 115.14198, latitude: 38.694048, num: 72, name: '小杨青庄村'},
    {longitude: 115.1461, latitude: 38.686009, num: 96, name: '北康庄村'},
    {longitude: 115.158803, latitude: 38.690565, num: 5, name: '齐庄村'},
    {longitude: 115.172536, latitude: 38.69512, num: 76, name: '谷家村'},
    {longitude: 115.180775, latitude: 38.695924, num: 92, name: '大西堤村'},
    {longitude: 115.180775, latitude: 38.71066, num: 51, name: '八里庄村'},
    {longitude: 115.162236, latitude: 38.712803, num: 29, name: '北陈庄村'},
    {longitude: 115.178029, latitude: 38.686009, num: 73, name: '辛街村'},
    {longitude: 115.195195, latitude: 38.694584, num: 8, name: '北韩庄村'},
    {longitude: 115.187642, latitude: 38.668587, num: 71, name: '龙庄村'},
    {longitude: 115.14301, latitude: 38.681989, num: 78, name: '大杨青庄村'},
    {longitude: 115.140607, latitude: 38.635877, num: 69, name: '樊家村'},
    {longitude: 115.096318, latitude: 38.636413, num: 26, name: '马家村'},
    {longitude: 115.095975, latitude: 38.660813, num: 113, name: '望都镇'},
    {longitude: 115.128934, latitude: 38.644994, num: 97, name: '寺庄乡'},
    {longitude: 115.163266, latitude: 38.64124, num: 116, name: '赵庄乡'},
    {longitude: 115.154683, latitude: 38.656256, num: 27, name: '黑堡乡'},
    {longitude: 115.082242, latitude: 38.667515, num: 77, name: '固店乡'},
    {longitude: 115.071599, latitude: 38.697532, num: 97, name: '高岭乡'},
    {longitude: 115.0407, latitude: 38.683061, num: 39, name: '中韩庄乡'},
    {longitude: 115.027997, latitude: 38.666443, num: 115, name: '贾村乡'},
    {longitude: 115.118291, latitude: 38.739855, num: 16, name: '城内村'},
    {longitude: 115.12962, latitude: 38.76181, num: 93, name: '所药村'},
    {longitude: 115.154683, latitude: 38.764488, num: 10, name: '南关村'},
    {longitude: 115.158803, latitude: 38.745211, num: 67, name: '东关村'},
    {longitude: 115.182492, latitude: 38.75833, num: 83, name: '北关村'},
    {longitude: 115.193478, latitude: 38.762346, num: 98, name: '曲家湾村'},
    {longitude: 115.206181, latitude: 38.739052, num: 21, name: '韩庄村'},
    {longitude: 115.227467, latitude: 38.73075, num: 12, name: '小西堤村'},
    {longitude: 115.231244, latitude: 38.701551, num: 119, name: '彤霞村'},
    {longitude: 115.232617, latitude: 38.67368, num: 106, name: '沈庄村'},
    {longitude: 115.210988, latitude: 38.685473, num: 47, name: '小杨青庄村'},
    {longitude: 115.232274, latitude: 38.711464, num: 44, name: '北康庄村'},
    {longitude: 115.149533, latitude: 38.731553, num: 117, name: '齐庄村'},
    {longitude: 115.167386, latitude: 38.7195, num: 114, name: '谷家村'},
    {longitude: 115.166012, latitude: 38.734767, num: 94, name: '大西堤村'},
    {longitude: 115.149533, latitude: 38.722447, num: 13, name: '八里庄村'},
    {longitude: 115.143353, latitude: 38.716018, num: 3, name: '北陈庄村'},
    {longitude: 115.123097, latitude: 38.741462, num: 23, name: '辛街村'},
    {longitude: 115.112454, latitude: 38.727268, num: 109, name: '北韩庄村'},
    {longitude: 115.101124, latitude: 38.69378, num: 21, name: '龙庄村'}
]

const colorMap = [
   {
     level:"优",
     color:"#43ce17"
   },
   {
     level:"良",
     color:"#efdc31"
   },{
     level:"轻度污染",
     color:"#fa0"
   },{
     level:"中度污染",
     color:"#ff401a"
   },{
     level:"重度污染",
     color:"#d20040"
   },{
     level:"严重污染",
     color:"#9c0a4e"
   }
]
const iconMap = [
  '#6CD7DB', '#6CD7DB', '#6CD7DB','#6CD7DB',
 '#6CD7DB', '6CD7DB', '#E2D200', '#87EF5A', '#6CD7DB'
]
// const  tips = [{
// 		  'key':'aqi',
// 		  'name':'AQI'
// 	 },{
// 		  'key':'pm2_5',
// 		  'name':'PM2.5'
// 	  },{
// 		  'key':'pm_10',
// 		  'name':'PM10'
// 	  },{
// 		  'key':'so_2',
// 		  'name':'SO2'
// 	  },{
// 		  'key':'no_2',
// 		  'name':'NO2'
// 	  },{
// 		  'key':'co',
// 		  'name':'CO'
// 	  },{
// 		  'key':'o_3',
// 		  'name':'O3'
// 	  }
//     ,{
// 		  'key':'wind_speed',
// 		  'name':'风速'
// 	  },{
// 		  'key':'wind_direction',
// 		  'name':'风向'
// 	  },{
// 		  'key':'temperature',
// 		  'name':'温度'
// 	  },{
// 		  'key':'humidity',
// 		  'name':'湿度'
// 	  },{
// 		  'key':'illumination',
// 		  'name':'光照'
// 	  },{
// 		  'key':'atmospheric_pressure',
// 		  'name':'大气压'
// 	  },{
// 		  'key':'noise',
// 		  'name':'噪声'
// 	  },{
// 		  'key':'tsp',
// 		  'name':'TSP(总悬浮颗粒物)'
// 	  },{
// 		  'key':'tvoc',
// 		  'name':'TVOC'
// 	  }
//     ]
    const typeMap  = [
      {
        type:"all",
        name:"全部",
        icon:"iconquanbu-copy",
        list:[],
      },
      {
        type:"village",
        name:"村级网格点",
        color:'#6CD7DB',
        icon:'iconw_cunzhuang',
        list:[{
          'key':'aqi',
          'name':'AQI'
        },{
          'key':'pm2_5',
          'name':'PM2.5'
        },{
          'key':'pm_10',
          'name':'PM10'
        },{
          'key':'so_2',
          'name':'SO2'
        },{
          'key':'no_2',
          'name':'NO2'
        },{
          'key':'co',
          'name':'CO'
        },{
          'key':'o_3',
          'name':'O3'
        },
        {
          'key':'wind_speed',
          'name':'风速'
        },{
          'key':'wind_direction',
          'name':'风向'
        },{
          'key':'temperature',
          'name':'温度'
        },{
          'key':'humidity',
          'name':'湿度'
        },{
          'key':'illumination',
          'name':'光照'
        },{
          'key':'atmospheric_pressure',
          'name':'大气压'
        },{
          'key':'tvoc',
          'name':'TVOC'
        }
        ]
      },
      {
        type:"business",
        name:'重点企业',
        color:'#6CD7DB',
        icon:"iconweb-icon-",
        list:[
          {
            'key':'pm2_5',
            'name':'PM2.5'
          },{
            'key':'pm_10',
            'name':'PM10'
          },
          {
            'key':'wind_speed',
            'name':'风速'
          },{
            'key':'wind_direction',
            'name':'风向'
          },{
            'key':'temperature',
            'name':'温度'
          },{
            'key':'humidity',
            'name':'湿度'
          },{
            'key':'illumination',
            'name':'光照'
          },{
            'key':'atmospheric_pressure',
            'name':'大气压'
          }

        ],
      },
      {
        type:"construction",
        icon:'iconicon2',
        color:'#6CD7DB',
        name:"工地扬尘",
        list:[
          {
            'key':'pm2_5',
            'name':'PM2.5'
          },{
            'key':'pm_10',
            'name':'PM10'
          },
          {
            'key':'wind_speed',
            'name':'风速'
          },{
            'key':'wind_direction',
            'name':'风向'
          },{
            'key':'temperature',
            'name':'温度'
          },{
            'key':'humidity',
            'name':'湿度'
          },{
            'key':'illumination',
            'name':'光照'
          },{
            'key':'atmospheric_pressure',
            'name':'大气压'
          },{
            'key':'noise',
            'name':'噪声'
          },{
            'key':'tsp',
            'name':'TSP(总悬浮颗粒物)'
          },{
            'key':'tvoc',
            'name':'TVOC'
          }
        ],
      }
    ]
    const  allMetricUnit = [{
    		  'key':'aqi',
    		  'name':'AQI',
          'unit':'μg/m3'
    	 },{
    		  'key':"pm2_5",
    		  'name':'PM2.5',
          'unit':'μg/m3'
    	  },{
    		  'key':'pm_10',
    		  'name':'PM10',
          'unit':'μg/m3'
    	  },{
    		  'key':'so_2',
    		  'name':'SO2',
          'unit':'μg/m3'
    	  },{
    		  'key':'no_2',
    		  'name':'NO2',
          'unit':'μg/m3'
    	  },{
    		  'key':'co',
    		  'name':'CO',
          'unit':'mg/m3'
    	  },{
    		  'key':'o_3',
    		  'name':'O3',
          'unit':'μg/m3'
    	  }
        ,{
    		  'key':'wind_speed',
    		  'name':'风速',
          'unit':'m/s'
    	  },{
    		  'key':'wind_direction',
    		  'name':'风向',
          'unit':' '
    	  },{
    		  'key':'temperature',
    		  'name':'温度',
          'unit':'℃'
    	  },{
    		  'key':'humidity',
    		  'name':'湿度',
          'unit':'%RH'
    	  },{
    		  'key':'illumination',
    		  'name':'光照',
          'unit':'Lm'
    	  },{
    		  'key':'atmospheric_pressure',
    		  'name':'大气压',
          'unit':'mbar'
    	  },{
    		  'key':'noise',
    		  'name':'噪声',
          'unit':'dB'
    	  },{
    		  'key':'tsp',
    		  'name':'TSP(总悬浮颗粒物)',
          'unit':'ug/m3'
    	  },{
    		  'key':'tvoc',
    		  'name':'TVOC',
          'unit':'ppb'
    	  }
  ]
export {
  typeMap,
  allMetricUnit,
  colorMap,
  iconMap
}

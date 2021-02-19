<template>
  <div class="map">
    <div class="menu-wrapper">
      <div id="container" style="height: 100%;" tabindex="0"></div>
    </div>
    <div class="showBox" ref="dialogbox">
          xxxx
    </div>
  </div>
</template>

<script>

//import { CommonChart } from '../../components/commonChart/index.js'
import {
  typeMap,
  iconMap,
  colorMap,
  allMetricUnit
} from './config.js'
export default {
  components: {
	//CommonChart
  },
  computed: {
    sublistArr () {
      let _this = this
      if (this.curentType !== 'all') {
        let tmp = this.typeMap.find((item) => {
          if (item.type === _this.curentType) {
            return item.list
          }
        })
        return tmp.list
      } else {
        return []
      }
    }
  },
  data () {
    return {
      map:null,
	  dialogstatus:false,
	  curentWindow:null
    }
  },
  created() {
  },
  mounted () {
		this.$nextTick(() => {
		  //this.getaMapData()
		  this.init()
		})
  },
  methods: {
	async getWangdoData () {
	  let resposeData = await this.axios.get('/welcome/realtime', {})
	  this.dialogstatus = true
	},
    init(){
      let _this = this
      let map = new AMap.Map('container', {
        zoom: 11,
        center: [116.396214,39.916967],
        resizeEnable: true,
        zoomEnable: true,
        mapStyle: 'amap://styles/69b0c4cbb08834cb39cffad47d32f8d9'
      })
      AMapUI.loadUI(['control/BasicControl', 'misc/MarkerList', 'overlay/SimpleMarker', 'overlay/SimpleInfoWindow'], function(BasicControl,MarkerList, SimpleMarker, SimpleInfoWindow) {
          //缩放控件，显示Zoom值
          map.addControl(new BasicControl.Zoom({
              position: 'lb',
              showZoomNum: true
          }));
          //图层切换控件
          map.addControl(new BasicControl.LayerSwitcher({
              position: 'rt'
          }));
          // var markerList = new MarkerList({
          //     //关联的map对象
          //     map: map,
          //     //列表的dom容器的id
          //     listContainer: 'my-list',
          //     //返回数据项的Id
          //     getDataId: function(dataItem, index) {
          //         //index表示该数据项在数组中的索引位置，从0开始，如果确实没有id，可以返回index代替
          //         return dataItem.id;
          //     },
          //     //返回数据项的位置信息，需要是AMap.LngLat实例，或者是经纬度数组，比如[116.789806, 39.904989]
          //     getPosition: function(dataItem) {
          //          var postion =  [];
          //          postion[0]  = dataItem.longitude
          //          postion[1]  = dataItem.latitude
          //         return postion;
          //     },
          //     //返回数据项对应的Marker
          //     getMarker: function(dataItem, context, recycledMarker) {
          //         let divobj = ''
          //         if (_this.curentMetric !== '') {
          //           let tmpnum = dataItem[_this.curentMetric]
          //           if (tmpnum) {
          //             divobj = _this.setMarkerContent(dataItem[_this.curentMetric])
          //           } else {
          //             divobj = _this.getPointer(dataItem)
          //           }
          //         } else {
          //           divobj = _this.getPointer(dataItem)
          //         }
          //         let tagdiv = document.createElement('div')
          //         tagdiv.className = 'marker_tag'
          //         tagdiv.innerHTML = dataItem.name
          //         let bodydiv = document.createElement('div')
          //         bodydiv.className = 'marker_box'
                  
          //         if (!_this.isHot) {
          //           bodydiv.appendChild(divobj)
          //           if (_this.mapStyle !== 'normal') {
          //             bodydiv.appendChild(tagdiv)
          //           }
          //         }
          //         return new AMap.Marker({
          //             content: bodydiv,
          //             offset: new AMap.Pixel(-15, -15)
          //         })
          //         //this.markers.push( )
          //         // //返回一个新的Marker
          //         // return new SvgMarker(shape, {
          //         //     showPositionPoint: true,
          //         //     containerClassNames: containerClassNames,
          //         //     iconLabel: context.id
          //         // });
          //     },
          //     markerEvents: ['click', 'mouseover', 'mouseout'],
          //      selectedClassNames: 'selected',
          //     autoSetFitView: true,
          //     //返回数据项对应的infoWindow
          //     getInfoWindow: function(dataItem, context, recycledInfoWindow) {
          //         var offset = new AMap.Pixel(0, -59);
          //         if (recycledInfoWindow) {
          //             //存在可回收利用的infoWindow, 直接更新内容返回
          //             recycledInfoWindow.setInfoTitle(dataItem.name);
          //             recycledInfoWindow.setInfoBody(dataItem.name  + "("+dataItem.num+ ")");
          //             recycledInfoWindow.setOffset(offset);
          //             return recycledInfoWindow;
          //         }
          //         //返回一个新的InfoWindow
          //         _this.curentWindow  =  new SimpleInfoWindow({
          //             offset: offset,
          //             infoTitle: dataItem.name,
          //             infoBody: dataItem.name  + "("+dataItem.num+ ")"
          //         });
          //         return _this.curentWindow
          //     },
          //     getListElement: function(dataItem, context, recycledListElement) {
          //         return false;
          //     }

          // });
          // markerList.on('listElementClick listElementMouseenter listElementMouseleave ' +
          //   'markerClick markerMouseover markerMouseout ' +
          //   'infoWindowClick infoWindowMouseover infoWindowMouseout',
          //   function(event, record) {
          //       _this.getWindowContent(record);
          // });
          // markerList.render(_this.markData)
          // _this.markList = markerList;
      });
      this.map = map
      //this.changeData();
    },
    getWindowContent(val){
	  this.dialogstatus = true
      this.curentWindow.setInfoBody(this.$refs.dialogbox)
    }
  }
}
</script>

<style lang="less">
   .el-button--primary{
	    background-color: #121734;
		padding: 5px 10px;
   }
   .active_btn {
     background-color: #040f3c !important;  //040f3c  1eb6fe
     color: #32ffc7 !important;
   }
   .active_sub{
       background-color: #0071FF !important;  //040f3c  1eb6fe
       color: #fff !important;
   }
  .showBox{
     width: 300px;
     .tablebox{
       margin-bottom: 10px;
       background-color: #121734;
       color: #fff;
     }
     .common-chart {
       border-radius: 4px;
       .chartcanvas{
         height: 150px;
       }
      }
  }
  .amap-logo{
    display: none!important;
  }
  .amap-copyright{
    opacity:0;
  }
  .tablebox{
    margin-bottom: 10px;
    color: #fff;
    .special_class {
      background-color: #4a97da;
    }
    .infolist{
      display: flex;
      flex-direction: row;
      .da_item{
         flex:1;
         line-height: 20px;
         text-align: center;
         display: flex;
         color: #6a6e8a;
      }
    }
  }
  .window_content{
     display: flex;
     flex-direction: row;
     align-items: center;
     padding: 0px 10px;
     .left{
        h5{
           font-size: 60px;
           padding: 0;
           margin: 0;
           color: #fff;
        }
     }
     p{
       color: #fff;
       font-size: 12px;
     }
     .middle{
        margin-left: 10px;
        .tag{
           width: 60px;
           padding: 3px;
           margin-bottom: 3px;
           background-color: rgb(239, 220, 49);
           border-radius: 10px;
           text-align: center;
        }
     }
     .right{
        margin-left:10px;
     }
  }
  .marker_box{
      display: flex;
      justify-content: center;
      flex-direction: column;
     .marker_tag{
       background-color:#fff;
       color:#424765;
       font-size:12px;
       white-space:nowrap;
       border-radius: 5px;
       padding: 5px;
       margin-top: 5px;
     }
   }
  .amap-ui-mobile {
      .amap-ui-control-layer {
          label{
             font-size: 12px !important;
          }
      }
  }
  .amap-ui-control-theme-light {
    .amap-ui-control-zoom{
       border-color: #6a6e8a !important;
       a {
         background-color: #000 !important;;
         border-bottom-color: #ccc !important;;
         color: #fff !important;;
         opacity: 0.7;
       }
    }
    .amap-ui-control-zoom-num{
       background-color: #000 !important;
       border-bottom-color: #ccc !important;;
       color: #fff !important;
       opacity: 0.7;
    }
  }
  .amap-ui-smp-ifwn-info-title{
     font-size: 12px !important;
	 border-bottom: 0px !important;
	 color: #fff !important;
  }
  .amap-ui-smp-ifwn-content-body{
	  background-color: #121734 !important;
  }
  .amap-ui-infowindow-body{
     font-size: 12px !important;
  }
  .amap-ui-infowindow-close{
    margin:0px !important;
    font-size:16px;
  }
  .map{
    position: fixed;
	top:0;
	left: 0;
	right: 0;
	bottom: 0;
    .menu-wrapper{
      flex: 1;
      height: 100%;
      width: 100%;
    }
  }
  .menuTab{

  }
  .catalogBox{
    height: 260px;
    position: fixed;
    left:10px;
    top: 10px;
    flex-direction: column;
    // button{
    //    flex:1;
    //    border-bottom:1px solid #eee;
    //    height: 34px;
    //    background-color: #fff;
    //    &:active{
    //      background: #006064;
    //    }
    //    &:visited{
    //      background-color: 006064;
    //    }
    // }
  }
  .sub_menu_box{
     position: absolute;
     right: 10px;
     top:130px;
     width: 100px;
     display: flex;
     flex-direction: column;
     z-index: 100;
     border: 1px solid #6A6E8A;
     .submenu{
        line-height: 22px;
        text-align: center;
        border-bottom: 1px solid #6A6E8A;
		background-color: #121734;
        cursor: pointer;
		color: #fff;
		font-size: 14px;
     }
  }
  .typebox{
     height: 260px;
     width: 90px;
     display: flex;
     position: fixed;
     left:10px;
     bottom: 90px;
     background-color: #FFF;
     flex-direction: column;
     button{
        flex:1;
        border-bottom:1px solid #eee;
        height: 34px;
        background-color: #fff;
        &:active{
          background: #006064;
        }
        &:visited{
          background-color: 006064;
        }
     }
  }
  .active_btn {
    background-color: #424765 !important;
    border-bottom:1px solid #424765 !important;
    color: #fff;
  }
   
</style>

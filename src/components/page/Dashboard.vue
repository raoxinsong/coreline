<template>
    <div class="homepage">
        <div id="container" style="height: 100%;" tabindex="0"></div> 
    </div>
</template>

<script>

//import { CommonChart } from '../../components/commonChart/index.js'
export default {
  components: {
	//CommonChart
  },
  computed: {
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
 .homepage{
	 height: 100%;
	 position: relative;
	 .opreateBox{
		 position: absolute;
		 top: 10px;
	 }
 }
</style>

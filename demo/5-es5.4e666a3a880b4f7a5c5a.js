(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ll73:function(t,e,n){"use strict";n.r(e);var o=n("CcnG"),r=function(){return function(){}}(),i=n("pMnS"),s=n("mrSG"),a=n("6blF"),u=function(){return function(){}}(),l=function(){function t(t,e){var n=this;this._loader=t,this._zone=e,this._map=new Promise(function(t){n._mapResolver=t})}return t.prototype.createMap=function(t,e){var n=this;return this._zone.runOutsideAngular(function(){return n._loader.load().then(function(){var o=new google.maps.Map(t,e);n._mapResolver(o)})})},t.prototype.setMapOptions=function(t){this._map.then(function(e){e.setOptions(t)})},t.prototype.createMarker=function(t,e){return void 0===t&&(t={}),void 0===e&&(e=!0),this._map.then(function(n){return e&&(t.map=n),new google.maps.Marker(t)})},t.prototype.createInfoWindow=function(t){return this._map.then(function(){return new google.maps.InfoWindow(t)})},t.prototype.createCircle=function(t){return this._map.then(function(e){return"string"==typeof t.strokePosition&&(t.strokePosition=google.maps.StrokePosition[t.strokePosition]),t.map=e,new google.maps.Circle(t)})},t.prototype.createRectangle=function(t){return this._map.then(function(e){return t.map=e,new google.maps.Rectangle(t)})},t.prototype.createPolyline=function(t){return this.getNativeMap().then(function(e){var n=new google.maps.Polyline(t);return n.setMap(e),n})},t.prototype.createPolygon=function(t){return this.getNativeMap().then(function(e){var n=new google.maps.Polygon(t);return n.setMap(e),n})},t.prototype.createDataLayer=function(t){return this._map.then(function(e){var n=new google.maps.Data(t);return n.setMap(e),n})},t.prototype.createTransitLayer=function(t){return this._map.then(function(e){var n=new google.maps.TransitLayer;return n.setMap(t.visible?e:null),n})},t.prototype.containsLocation=function(t,e){return google.maps.geometry.poly.containsLocation(t,e)},t.prototype.subscribeToMapEvent=function(t){var e=this;return new a.a(function(n){e._map.then(function(o){o.addListener(t,function(t){e._zone.run(function(){return n.next(t)})})})})},t.prototype.clearInstanceListeners=function(){this._map.then(function(t){google.maps.event.clearInstanceListeners(t)})},t.prototype.setCenter=function(t){return this._map.then(function(e){return e.setCenter(t)})},t.prototype.getZoom=function(){return this._map.then(function(t){return t.getZoom()})},t.prototype.getBounds=function(){return this._map.then(function(t){return t.getBounds()})},t.prototype.getMapTypeId=function(){return this._map.then(function(t){return t.getMapTypeId()})},t.prototype.setZoom=function(t){return this._map.then(function(e){return e.setZoom(t)})},t.prototype.getCenter=function(){return this._map.then(function(t){return t.getCenter()})},t.prototype.panTo=function(t){return this._map.then(function(e){return e.panTo(t)})},t.prototype.panBy=function(t,e){return this._map.then(function(n){return n.panBy(t,e)})},t.prototype.fitBounds=function(t){return this._map.then(function(e){return e.fitBounds(t)})},t.prototype.panToBounds=function(t){return this._map.then(function(e){return e.panToBounds(t)})},t.prototype.getNativeMap=function(){return this._map},t.prototype.triggerMapEvent=function(t){return this._map.then(function(e){return google.maps.event.trigger(e,t)})},t}(),c=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function s(t){try{u(o.next(t))}catch(e){i(e)}}function a(t){try{u(o.throw(t))}catch(e){i(e)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}u((o=o.apply(t,e||[])).next())})},p=function(t,e){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(a){i=[6,a],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},h=function(){function t(t,e){this._mapsWrapper=t,this._zone=e,this._markers=new Map}return t.prototype.convertAnimation=function(t){return c(this,void 0,void 0,function(){return p(this,function(e){return null===t?[2,null]:[2,this._mapsWrapper.getNativeMap().then(function(){return google.maps.Animation[t]})]})})},t.prototype.deleteMarker=function(t){var e=this,n=this._markers.get(t);return null==n?Promise.resolve():n.then(function(n){return e._zone.run(function(){n.setMap(null),e._markers.delete(t)})})},t.prototype.updateMarkerPosition=function(t){return this._markers.get(t).then(function(e){return e.setPosition({lat:t.latitude,lng:t.longitude})})},t.prototype.updateTitle=function(t){return this._markers.get(t).then(function(e){return e.setTitle(t.title)})},t.prototype.updateLabel=function(t){return this._markers.get(t).then(function(e){e.setLabel(t.label)})},t.prototype.updateDraggable=function(t){return this._markers.get(t).then(function(e){return e.setDraggable(t.draggable)})},t.prototype.updateIcon=function(t){return this._markers.get(t).then(function(e){return e.setIcon(t.iconUrl)})},t.prototype.updateOpacity=function(t){return this._markers.get(t).then(function(e){return e.setOpacity(t.opacity)})},t.prototype.updateVisible=function(t){return this._markers.get(t).then(function(e){return e.setVisible(t.visible)})},t.prototype.updateZIndex=function(t){return this._markers.get(t).then(function(e){return e.setZIndex(t.zIndex)})},t.prototype.updateClickable=function(t){return this._markers.get(t).then(function(e){return e.setClickable(t.clickable)})},t.prototype.updateAnimation=function(t){return c(this,void 0,void 0,function(){var e,n,o;return p(this,function(r){switch(r.label){case 0:return[4,this._markers.get(t)];case 1:return e=r.sent(),o=(n=e).setAnimation,[4,this.convertAnimation(t.animation)];case 2:return o.apply(n,[r.sent()]),[2]}})})},t.prototype.addMarker=function(t){var e=this,n=new Promise(function(n){return c(e,void 0,void 0,function(){var e,o,r;return p(this,function(i){switch(i.label){case 0:return o=(e=this._mapsWrapper).createMarker,r={position:{lat:t.latitude,lng:t.longitude},label:t.label,draggable:t.draggable,icon:t.iconUrl,opacity:t.opacity,visible:t.visible,zIndex:t.zIndex,title:t.title,clickable:t.clickable},[4,this.convertAnimation(t.animation)];case 1:return[2,o.apply(e,[(r.animation=i.sent(),r)]).then(n)]}})})});this._markers.set(t,n)},t.prototype.getNativeMarker=function(t){return this._markers.get(t)},t.prototype.createEventObservable=function(t,e){var n=this;return new a.a(function(o){n._markers.get(e).then(function(e){e.addListener(t,function(t){return n._zone.run(function(){return o.next(t)})})})})},t}(),f=function(){function t(t,e,n){this._mapsWrapper=t,this._zone=e,this._markerManager=n,this._infoWindows=new Map}return t.prototype.deleteInfoWindow=function(t){var e=this,n=this._infoWindows.get(t);return null==n?Promise.resolve():n.then(function(n){return e._zone.run(function(){n.close(),e._infoWindows.delete(t)})})},t.prototype.setPosition=function(t){return this._infoWindows.get(t).then(function(e){return e.setPosition({lat:t.latitude,lng:t.longitude})})},t.prototype.setZIndex=function(t){return this._infoWindows.get(t).then(function(e){return e.setZIndex(t.zIndex)})},t.prototype.open=function(t){var e=this;return this._infoWindows.get(t).then(function(n){return null!=t.hostMarker?e._markerManager.getNativeMarker(t.hostMarker).then(function(t){return e._mapsWrapper.getNativeMap().then(function(e){return n.open(e,t)})}):e._mapsWrapper.getNativeMap().then(function(t){return n.open(t)})})},t.prototype.close=function(t){return this._infoWindows.get(t).then(function(t){return t.close()})},t.prototype.setOptions=function(t,e){return this._infoWindows.get(t).then(function(t){return t.setOptions(e)})},t.prototype.addInfoWindow=function(t){var e={content:t.content,maxWidth:t.maxWidth,zIndex:t.zIndex,disableAutoPan:t.disableAutoPan};"number"==typeof t.latitude&&"number"==typeof t.longitude&&(e.position={lat:t.latitude,lng:t.longitude});var n=this._mapsWrapper.createInfoWindow(e);this._infoWindows.set(t,n)},t.prototype.createEventObservable=function(t,e){var n=this;return new a.a(function(o){n._infoWindows.get(e).then(function(e){e.addListener(t,function(t){return n._zone.run(function(){return o.next(t)})})})})},t}(),d=function(){function t(t,e){this._apiWrapper=t,this._zone=e,this._circles=new Map}return t.prototype.addCircle=function(t){this._circles.set(t,this._apiWrapper.createCircle({center:{lat:t.latitude,lng:t.longitude},clickable:t.clickable,draggable:t.draggable,editable:t.editable,fillColor:t.fillColor,fillOpacity:t.fillOpacity,radius:t.radius,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokePosition:t.strokePosition,strokeWeight:t.strokeWeight,visible:t.visible,zIndex:t.zIndex}))},t.prototype.removeCircle=function(t){var e=this;return this._circles.get(t).then(function(n){n.setMap(null),e._circles.delete(t)})},t.prototype.setOptions=function(t,e){return this._circles.get(t).then(function(t){"string"==typeof e.strokePosition&&(e.strokePosition=google.maps.StrokePosition[e.strokePosition]),t.setOptions(e)})},t.prototype.getBounds=function(t){return this._circles.get(t).then(function(t){return t.getBounds()})},t.prototype.getCenter=function(t){return this._circles.get(t).then(function(t){return t.getCenter()})},t.prototype.getRadius=function(t){return this._circles.get(t).then(function(t){return t.getRadius()})},t.prototype.setCenter=function(t){return this._circles.get(t).then(function(e){return e.setCenter({lat:t.latitude,lng:t.longitude})})},t.prototype.setEditable=function(t){return this._circles.get(t).then(function(e){return e.setEditable(t.editable)})},t.prototype.setDraggable=function(t){return this._circles.get(t).then(function(e){return e.setDraggable(t.draggable)})},t.prototype.setVisible=function(t){return this._circles.get(t).then(function(e){return e.setVisible(t.visible)})},t.prototype.setRadius=function(t){return this._circles.get(t).then(function(e){return e.setRadius(t.radius)})},t.prototype.createEventObservable=function(t,e){var n=this;return new a.a(function(o){var r=null;return n._circles.get(e).then(function(e){r=e.addListener(t,function(t){return n._zone.run(function(){return o.next(t)})})}),function(){null!==r&&r.remove()}})},t}(),g=function(){function t(t,e){this._apiWrapper=t,this._zone=e,this._rectangles=new Map}return t.prototype.addRectangle=function(t){this._rectangles.set(t,this._apiWrapper.createRectangle({bounds:{north:t.north,east:t.east,south:t.south,west:t.west},clickable:t.clickable,draggable:t.draggable,editable:t.editable,fillColor:t.fillColor,fillOpacity:t.fillOpacity,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokePosition:t.strokePosition,strokeWeight:t.strokeWeight,visible:t.visible,zIndex:t.zIndex}))},t.prototype.removeRectangle=function(t){var e=this;return this._rectangles.get(t).then(function(n){n.setMap(null),e._rectangles.delete(t)})},t.prototype.setOptions=function(t,e){return this._rectangles.get(t).then(function(t){return t.setOptions(e)})},t.prototype.getBounds=function(t){return this._rectangles.get(t).then(function(t){return t.getBounds()})},t.prototype.setBounds=function(t){return this._rectangles.get(t).then(function(e){return e.setBounds({north:t.north,east:t.east,south:t.south,west:t.west})})},t.prototype.setEditable=function(t){return this._rectangles.get(t).then(function(e){return e.setEditable(t.editable)})},t.prototype.setDraggable=function(t){return this._rectangles.get(t).then(function(e){return e.setDraggable(t.draggable)})},t.prototype.setVisible=function(t){return this._rectangles.get(t).then(function(e){return e.setVisible(t.visible)})},t.prototype.createEventObservable=function(t,e){var n=this;return a.a.create(function(o){var r=null;return n._rectangles.get(e).then(function(e){r=e.addListener(t,function(t){return n._zone.run(function(){return o.next(t)})})}),function(){null!==r&&r.remove()}})},t}(),y=n("isby"),m=n("2Bdj"),_=n("67Y/");function b(t){var e=["insert_at","remove_at","set_at"];return function t(e,n,o){return o?t(e,n).pipe(Object(_.a)(function(t){return Object(y.a)(t)?o.apply(void 0,t):o(t)})):new a.a(function(t){var o,r=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.next(1===e.length?e[0]:e)};try{o=e(r)}catch(i){return void t.error(i)}if(Object(m.a)(n))return function(){return n(r,o)}})}(function(n){return e.map(function(e){return t.addListener(e,function(o,r){return n.apply(t,[{newArr:t.getArray(),evName:e,index:o,previous:r}])})})},function(t,e){return e.forEach(function(t){return t.remove()})})}var v=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function s(t){try{u(o.next(t))}catch(e){i(e)}}function a(t){try{u(o.throw(t))}catch(e){i(e)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}u((o=o.apply(t,e||[])).next())})},w=function(t,e){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(a){i=[6,a],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},C=function(){function t(t,e){this._mapsWrapper=t,this._zone=e,this._polylines=new Map}var e;return e=t,t._convertPoints=function(t){return t._getPoints().map(function(t){return{lat:t.latitude,lng:t.longitude}})},t._convertPath=function(t){var e=google.maps.SymbolPath[t];return"number"==typeof e?e:t},t._convertIcons=function(t){var n=t._getIcons().map(function(t){return{fixedRotation:t.fixedRotation,offset:t.offset,repeat:t.repeat,icon:{anchor:new google.maps.Point(t.anchorX,t.anchorY),fillColor:t.fillColor,fillOpacity:t.fillOpacity,path:e._convertPath(t.path),rotation:t.rotation,scale:t.scale,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokeWeight:t.strokeWeight}}});return n.forEach(function(t){Object.entries(t).forEach(function(e){void 0===e[1]&&delete t[e[0]]}),void 0!==t.icon.anchor.x&&void 0!==t.icon.anchor.y||delete t.icon.anchor}),n},t.prototype.addPolyline=function(t){var n=this,o=this._mapsWrapper.getNativeMap().then(function(){return[e._convertPoints(t),e._convertIcons(t)]}).then(function(e){return n._mapsWrapper.createPolyline({clickable:t.clickable,draggable:t.draggable,editable:t.editable,geodesic:t.geodesic,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokeWeight:t.strokeWeight,visible:t.visible,zIndex:t.zIndex,path:e[0],icons:e[1]})});this._polylines.set(t,o)},t.prototype.updatePolylinePoints=function(t){var n=this,o=e._convertPoints(t),r=this._polylines.get(t);return null==r?Promise.resolve():r.then(function(t){return n._zone.run(function(){t.setPath(o)})})},t.prototype.updateIconSequences=function(t){return v(this,void 0,void 0,function(){var n,o,r=this;return w(this,function(i){switch(i.label){case 0:return[4,this._mapsWrapper.getNativeMap()];case 1:return i.sent(),n=e._convertIcons(t),null==(o=this._polylines.get(t))?[2]:[2,o.then(function(t){return r._zone.run(function(){return t.setOptions({icons:n})})})]}})})},t.prototype.setPolylineOptions=function(t,e){return this._polylines.get(t).then(function(t){t.setOptions(e)})},t.prototype.deletePolyline=function(t){var e=this,n=this._polylines.get(t);return null==n?Promise.resolve():n.then(function(n){return e._zone.run(function(){n.setMap(null),e._polylines.delete(t)})})},t.prototype.getMVCPath=function(t){return v(this,void 0,void 0,function(){return w(this,function(e){switch(e.label){case 0:return[4,this._polylines.get(t)];case 1:return[2,e.sent().getPath()]}})})},t.prototype.getPath=function(t){return v(this,void 0,void 0,function(){return w(this,function(e){switch(e.label){case 0:return[4,this.getMVCPath(t)];case 1:return[2,e.sent().getArray()]}})})},t.prototype.createEventObservable=function(t,e){var n=this;return new a.a(function(o){n._polylines.get(e).then(function(e){e.addListener(t,function(t){return n._zone.run(function(){return o.next(t)})})})})},t.prototype.createPathEventObservable=function(t){return v(this,void 0,void 0,function(){return w(this,function(e){switch(e.label){case 0:return[4,this.getMVCPath(t)];case 1:return[2,b(e.sent())]}})})},t}(),k=n("p0ib"),O=n("p0Sj"),M=n("15JJ"),P=n("0mNj"),I=function(){function t(t,e){this._mapsWrapper=t,this._zone=e,this._polygons=new Map}return t.prototype.addPolygon=function(t){var e=this._mapsWrapper.createPolygon({clickable:t.clickable,draggable:t.draggable,editable:t.editable,fillColor:t.fillColor,fillOpacity:t.fillOpacity,geodesic:t.geodesic,paths:t.paths,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokeWeight:t.strokeWeight,visible:t.visible,zIndex:t.zIndex});this._polygons.set(t,e)},t.prototype.updatePolygon=function(t){var e=this,n=this._polygons.get(t);return null==n?Promise.resolve():n.then(function(n){return e._zone.run(function(){n.setPaths(t.paths)})})},t.prototype.setPolygonOptions=function(t,e){return this._polygons.get(t).then(function(t){t.setOptions(e)})},t.prototype.deletePolygon=function(t){var e=this,n=this._polygons.get(t);return null==n?Promise.resolve():n.then(function(n){return e._zone.run(function(){n.setMap(null),e._polygons.delete(t)})})},t.prototype.getPath=function(t){return this._polygons.get(t).then(function(t){return t.getPath().getArray()})},t.prototype.getPaths=function(t){return this._polygons.get(t).then(function(t){return t.getPaths().getArray().map(function(t){return t.getArray()})})},t.prototype.createEventObservable=function(t,e){var n=this;return new a.a(function(o){n._polygons.get(e).then(function(e){e.addListener(t,function(t){return n._zone.run(function(){return o.next(t)})})})})},t.prototype.createPathEventObservable=function(t){return e=this,void 0,o=function(){var e,n;return function(t,e){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(a){i=[6,a],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,function(o){switch(o.label){case 0:return[4,this._polygons.get(t)];case 1:return e=o.sent(),[2,b(n=e.getPaths()).pipe(Object(O.a)({newArr:n.getArray()}),Object(M.a)(function(t){return k.a.apply(void 0,t.newArr.map(function(e,n){return b(e).pipe(Object(_.a)(function(e){return{parentMVEvent:t,chMVCEvent:e,pathIndex:n}}))})).pipe(Object(O.a)({parentMVEvent:t,chMVCEvent:null,pathIndex:null}))}),Object(P.a)(1),Object(_.a)(function(t){var e,n=t.parentMVEvent,o=t.chMVCEvent,r=t.pathIndex;return o?(e={newArr:n.newArr.map(function(t){return t.getArray().map(function(t){return t.toJSON()})}),pathIndex:r,eventName:o.evName,index:o.index},o.previous&&(e.previous=o.previous)):(e={newArr:n.newArr.map(function(t){return t.getArray().map(function(t){return t.toJSON()})}),eventName:n.evName,index:n.index},n.previous&&(e.previous=n.previous.getArray())),e}))]}})},new((n=void 0)||(n=Promise))(function(t,r){function i(t){try{a(o.next(t))}catch(e){r(e)}}function s(t){try{a(o.throw(t))}catch(e){r(e)}}function a(e){e.done?t(e.value):new n(function(t){t(e.value)}).then(i,s)}a((o=o.apply(e,[])).next())});var e,n,o},t}(),x=function(){function t(t,e){this._wrapper=t,this._zone=e,this._layers=new Map}return t.prototype.addKmlLayer=function(t){var e=this._wrapper.getNativeMap().then(function(e){return new google.maps.KmlLayer({clickable:t.clickable,map:e,preserveViewport:t.preserveViewport,screenOverlays:t.screenOverlays,suppressInfoWindows:t.suppressInfoWindows,url:t.url,zIndex:t.zIndex})});this._layers.set(t,e)},t.prototype.setOptions=function(t,e){this._layers.get(t).then(function(t){return t.setOptions(e)})},t.prototype.deleteKmlLayer=function(t){var e=this;this._layers.get(t).then(function(n){n.setMap(null),e._layers.delete(t)})},t.prototype.createEventObservable=function(t,e){var n=this;return new a.a(function(o){n._layers.get(e).then(function(e){e.addListener(t,function(t){return n._zone.run(function(){return o.next(t)})})})})},t}(),T=function(){function t(t,e){this._wrapper=t,this._zone=e,this._layers=new Map}return t.prototype.addDataLayer=function(t){var e=this,n=this._wrapper.createDataLayer({style:t.style}).then(function(n){return t.geoJson&&e.getDataFeatures(n,t.geoJson).then(function(t){return n.features=t}),n});this._layers.set(t,n)},t.prototype.deleteDataLayer=function(t){var e=this;this._layers.get(t).then(function(n){n.setMap(null),e._layers.delete(t)})},t.prototype.updateGeoJson=function(t,e){var n=this;this._layers.get(t).then(function(t){t.forEach(function(e){t.remove(e);var n=t.features.indexOf(e,0);n>-1&&t.features.splice(n,1)}),n.getDataFeatures(t,e).then(function(e){return t.features=e})})},t.prototype.setDataOptions=function(t,e){this._layers.get(t).then(function(t){t.setControlPosition(e.controlPosition),t.setControls(e.controls),t.setDrawingMode(e.drawingMode),t.setStyle(e.style)})},t.prototype.createEventObservable=function(t,e){var n=this;return new a.a(function(o){n._layers.get(e).then(function(e){e.addListener(t,function(t){return n._zone.run(function(){return o.next(t)})})})})},t.prototype.getDataFeatures=function(t,e){return new Promise(function(n,o){if("object"==typeof e)try{n(t.addGeoJson(e))}catch(r){o(r)}else"string"==typeof e?t.loadGeoJson(e,null,n):o("Impossible to extract features from geoJson: wrong argument type")})},t}(),W=function(){function t(t){this._wrapper=t,this._layers=new Map}return t.prototype.addTransitLayer=function(t,e){var n=this._wrapper.createTransitLayer(e);this._layers.set(t,n)},t.prototype.setOptions=function(t,e){return this.toggleTransitLayerVisibility(t,e)},t.prototype.deleteTransitLayer=function(t){var e=this;return this._layers.get(t).then(function(n){n.setMap(null),e._layers.delete(t)})},t.prototype.toggleTransitLayerVisibility=function(t,e){var n=this;return this._layers.get(t).then(function(t){return e.visible?n._wrapper.getNativeMap().then(function(e){t.setMap(e)}):(t.setMap(null),Promise.resolve())})},t}(),E=n("26FU"),z=n("0/uQ"),B=n("gI3B"),S=n("psW0"),L=n("MGBS"),A=n("zotm"),N=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,e){var n=new D(t),o=e.subscribe(n);return o.add(Object(A.a)(n,this.notifier)),o},t}(),D=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.hasValue=!1,e}return s.__extends(e,t),e.prototype._next=function(t){this.value=t,this.hasValue=!0},e.prototype.notifyNext=function(t,e,n,o,r){this.emitValue()},e.prototype.notifyComplete=function(){this.emitValue()},e.prototype.emitValue=function(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.value))},e}(L.a),V=n("klSw"),R=function(){function t(t){var e,n=this;this._boundsChangeSampleTime$=new E.a(200),this._includeInBounds$=new E.a(new Map),this.bounds$=Object(z.a)(t.load()).pipe(Object(S.a)(function(){return n._includeInBounds$}),(e=this._boundsChangeSampleTime$.pipe(Object(M.a)(function(t){return Object(B.a)(0,t)})),function(t){return t.lift(new N(e))}),Object(_.a)(function(t){return n._generateBounds(t)}),Object(V.a)(1))}return t.prototype._generateBounds=function(t){var e=new google.maps.LatLngBounds;return t.forEach(function(t){return e.extend(t)}),e},t.prototype.addToBounds=function(t){var e=this._createIdentifier(t);if(!this._includeInBounds$.value.has(e)){var n=this._includeInBounds$.value;n.set(e,t),this._includeInBounds$.next(n)}},t.prototype.removeFromBounds=function(t){var e=this._includeInBounds$.value;e.delete(this._createIdentifier(t)),this._includeInBounds$.next(e)},t.prototype.changeFitBoundsChangeSampleTime=function(t){this._boundsChangeSampleTime$.next(t)},t.prototype.getBounds$=function(){return this.bounds$},t.prototype._createIdentifier=function(t){return t.lat+"+"+t.lng},t}(),Z=function(){function t(t,e,n,r){this._elem=t,this._mapsWrapper=e,this._fitBoundsService=n,this._zone=r,this.longitude=0,this.latitude=0,this.zoom=8,this.draggable=!0,this.disableDoubleClickZoom=!1,this.disableDefaultUI=!1,this.scrollwheel=!0,this.keyboardShortcuts=!0,this.zoomControl=!0,this.styles=[],this.usePanning=!1,this.streetViewControl=!0,this.fitBounds=!1,this.scaleControl=!1,this.mapTypeControl=!1,this.panControl=!1,this.rotateControl=!1,this.fullscreenControl=!1,this.mapTypeId="roadmap",this.clickableIcons=!0,this.showDefaultInfoWindow=!0,this.gestureHandling="auto",this.tilt=0,this._observableSubscriptions=[],this.mapClick=new o.EventEmitter,this.mapRightClick=new o.EventEmitter,this.mapDblClick=new o.EventEmitter,this.centerChange=new o.EventEmitter,this.boundsChange=new o.EventEmitter,this.mapTypeIdChange=new o.EventEmitter,this.idle=new o.EventEmitter,this.zoomChange=new o.EventEmitter,this.mapReady=new o.EventEmitter}var e;return e=t,t.prototype.ngOnInit=function(){var t=this._elem.nativeElement.querySelector(".agm-map-container-inner");this._initMapInstance(t)},t.prototype._initMapInstance=function(t){var e=this;this._mapsWrapper.createMap(t,{center:{lat:this.latitude||0,lng:this.longitude||0},zoom:this.zoom,minZoom:this.minZoom,maxZoom:this.maxZoom,controlSize:this.controlSize,disableDefaultUI:this.disableDefaultUI,disableDoubleClickZoom:this.disableDoubleClickZoom,scrollwheel:this.scrollwheel,backgroundColor:this.backgroundColor,draggable:this.draggable,draggableCursor:this.draggableCursor,draggingCursor:this.draggingCursor,keyboardShortcuts:this.keyboardShortcuts,styles:this.styles,zoomControl:this.zoomControl,zoomControlOptions:this.zoomControlOptions,streetViewControl:this.streetViewControl,streetViewControlOptions:this.streetViewControlOptions,scaleControl:this.scaleControl,scaleControlOptions:this.scaleControlOptions,mapTypeControl:this.mapTypeControl,mapTypeControlOptions:this.mapTypeControlOptions,panControl:this.panControl,panControlOptions:this.panControlOptions,rotateControl:this.rotateControl,rotateControlOptions:this.rotateControlOptions,fullscreenControl:this.fullscreenControl,fullscreenControlOptions:this.fullscreenControlOptions,mapTypeId:this.mapTypeId,clickableIcons:this.clickableIcons,gestureHandling:this.gestureHandling,tilt:this.tilt,restriction:this.restriction}).then(function(){return e._mapsWrapper.getNativeMap()}).then(function(t){return e.mapReady.emit(t)}),this._handleMapCenterChange(),this._handleMapZoomChange(),this._handleMapMouseEvents(),this._handleBoundsChange(),this._handleMapTypeIdChange(),this._handleIdleEvent()},t.prototype.ngOnDestroy=function(){this._observableSubscriptions.forEach(function(t){return t.unsubscribe()}),this._mapsWrapper.clearInstanceListeners(),this._fitBoundsSubscription&&this._fitBoundsSubscription.unsubscribe()},t.prototype.ngOnChanges=function(t){this._updateMapOptionsChanges(t),this._updatePosition(t)},t.prototype._updateMapOptionsChanges=function(t){var n={};Object.keys(t).filter(function(t){return-1!==e._mapOptionsAttributes.indexOf(t)}).forEach(function(e){n[e]=t[e].currentValue}),this._mapsWrapper.setMapOptions(n)},t.prototype.triggerResize=function(t){var e=this;return void 0===t&&(t=!0),new Promise(function(n){setTimeout(function(){return e._mapsWrapper.triggerMapEvent("resize").then(function(){t&&(null!=e.fitBounds?e._fitBounds():e._setCenter()),n()})})})},t.prototype._updatePosition=function(t){(null!=t.latitude||null!=t.longitude||t.fitBounds)&&("fitBounds"in t?this._fitBounds():"number"==typeof this.latitude&&"number"==typeof this.longitude&&this._setCenter())},t.prototype._setCenter=function(){var t={lat:this.latitude,lng:this.longitude};this.usePanning?this._mapsWrapper.panTo(t):this._mapsWrapper.setCenter(t)},t.prototype._fitBounds=function(){switch(this.fitBounds){case!0:this._subscribeToFitBoundsUpdates();break;case!1:this._fitBoundsSubscription&&this._fitBoundsSubscription.unsubscribe();break;default:this._updateBounds(this.fitBounds)}},t.prototype._subscribeToFitBoundsUpdates=function(){var t=this;this._zone.runOutsideAngular(function(){t._fitBoundsSubscription=t._fitBoundsService.getBounds$().subscribe(function(e){t._zone.run(function(){return t._updateBounds(e)})})})},t.prototype._updateBounds=function(t){if(this._isLatLngBoundsLiteral(t)&&"undefined"!=typeof google&&google&&google.maps&&google.maps.LatLngBounds){var e=new google.maps.LatLngBounds;e.union(t),t=e}this.usePanning?this._mapsWrapper.panToBounds(t):this._mapsWrapper.fitBounds(t)},t.prototype._isLatLngBoundsLiteral=function(t){return null!=t&&void 0===t.extend},t.prototype._handleMapCenterChange=function(){var t=this,e=this._mapsWrapper.subscribeToMapEvent("center_changed").subscribe(function(){t._mapsWrapper.getCenter().then(function(e){t.latitude=e.lat(),t.longitude=e.lng(),t.centerChange.emit({lat:t.latitude,lng:t.longitude})})});this._observableSubscriptions.push(e)},t.prototype._handleBoundsChange=function(){var t=this,e=this._mapsWrapper.subscribeToMapEvent("bounds_changed").subscribe(function(){t._mapsWrapper.getBounds().then(function(e){t.boundsChange.emit(e)})});this._observableSubscriptions.push(e)},t.prototype._handleMapTypeIdChange=function(){var t=this,e=this._mapsWrapper.subscribeToMapEvent("maptypeid_changed").subscribe(function(){t._mapsWrapper.getMapTypeId().then(function(e){t.mapTypeIdChange.emit(e)})});this._observableSubscriptions.push(e)},t.prototype._handleMapZoomChange=function(){var t=this,e=this._mapsWrapper.subscribeToMapEvent("zoom_changed").subscribe(function(){t._mapsWrapper.getZoom().then(function(e){t.zoom=e,t.zoomChange.emit(e)})});this._observableSubscriptions.push(e)},t.prototype._handleIdleEvent=function(){var t=this,e=this._mapsWrapper.subscribeToMapEvent("idle").subscribe(function(){t.idle.emit(void 0)});this._observableSubscriptions.push(e)},t.prototype._handleMapMouseEvents=function(){var t=this;[{name:"click",emitter:this.mapClick},{name:"rightclick",emitter:this.mapRightClick},{name:"dblclick",emitter:this.mapDblClick}].forEach(function(e){var n=t._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function(n){var o={coords:{lat:n.latLng.lat(),lng:n.latLng.lng()},placeId:n.placeId};o.placeId&&!t.showDefaultInfoWindow&&n.stop(),e.emitter.emit(o)});t._observableSubscriptions.push(n)})},t._mapOptionsAttributes=["disableDoubleClickZoom","scrollwheel","draggable","draggableCursor","draggingCursor","keyboardShortcuts","zoomControl","zoomControlOptions","styles","streetViewControl","streetViewControlOptions","zoom","mapTypeControl","mapTypeControlOptions","minZoom","maxZoom","panControl","panControlOptions","rotateControl","rotateControlOptions","fullscreenControl","fullscreenControlOptions","scaleControl","scaleControlOptions","mapTypeId","clickableIcons","gestureHandling","tilt","restriction"],t}(),j=o["\u0275crt"]({encapsulation:0,styles:[".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"],data:{}});function F(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,0,"div",[["class","agm-map-container-inner sebm-google-map-container-inner"]],null,null,null,null,null)),(t()(),o["\u0275eld"](1,0,null,null,1,"div",[["class","agm-map-content"]],null,null,null,null,null)),o["\u0275ncd"](null,0)],null,null)}var $=function(){function t(){this.title="My first AGM project",this.lat=51.678418,this.lng=7.809007}return t.prototype.ngOnInit=function(){},t}(),G=o["\u0275crt"]({encapsulation:0,styles:[["agm-map[_ngcontent-%COMP%]{height:100%}"]],data:{}});function J(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,12,"agm-map",[],[[2,"sebm-google-map-container",null]],null,null,F,j)),o["\u0275prd"](4608,null,h,h,[l,o.NgZone]),o["\u0275prd"](4608,null,f,f,[l,o.NgZone,h]),o["\u0275prd"](4608,null,d,d,[l,o.NgZone]),o["\u0275prd"](4608,null,g,g,[l,o.NgZone]),o["\u0275prd"](4608,null,C,C,[l,o.NgZone]),o["\u0275prd"](4608,null,I,I,[l,o.NgZone]),o["\u0275prd"](4608,null,x,x,[l,o.NgZone]),o["\u0275prd"](4608,null,T,T,[l,o.NgZone]),o["\u0275prd"](4608,null,W,W,[l]),o["\u0275prd"](512,null,l,l,[u,o.NgZone]),o["\u0275prd"](512,null,R,R,[u]),o["\u0275did"](12,770048,null,0,Z,[o.ElementRef,l,R,o.NgZone],{longitude:[0,"longitude"],latitude:[1,"latitude"]},null)],function(t,e){var n=e.component;t(e,12,0,n.lng,n.lat)},function(t,e){t(e,0,0,!0)})}function H(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,1,"app-g-layer",[],null,null,null,J,G)),o["\u0275did"](1,114688,null,0,$,[],null,null)],function(t,e){t(e,1,0)},null)}var U=o["\u0275ccf"]("app-g-layer",$,H,{},{},[]),K=n("Ip0R"),Y=function(){function t(){}return t.prototype.getNativeWindow=function(){return window},t}(),q=function(){function t(){}return t.prototype.getNativeDocument=function(){return document},t}(),Q=[Y,q],X=function(t){return t[t.HTTP=1]="HTTP",t[t.HTTPS=2]="HTTPS",t[t.AUTO=3]="AUTO",t}({}),tt=new o.InjectionToken("angular-google-maps LAZY_MAPS_API_CONFIG"),et=function(t){function e(e,n,o){void 0===e&&(e=null);var r=t.call(this)||this;return r._SCRIPT_ID="agmGoogleMapsApiScript",r.callbackName="agmLazyMapsAPILoader",r._config=e||{},r._windowRef=n,r._documentRef=o,r}return Object(s.__extends)(e,t),e.prototype.load=function(){var t=this._windowRef.getNativeWindow();if(t.google&&t.google.maps)return Promise.resolve();if(this._scriptLoadingPromise)return this._scriptLoadingPromise;var e=this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);if(e)return this._assignScriptLoadingPromise(e),this._scriptLoadingPromise;var n=this._documentRef.getNativeDocument().createElement("script");return n.type="text/javascript",n.async=!0,n.defer=!0,n.id=this._SCRIPT_ID,n.src=this._getScriptSrc(this.callbackName),this._assignScriptLoadingPromise(n),this._documentRef.getNativeDocument().body.appendChild(n),this._scriptLoadingPromise},e.prototype._assignScriptLoadingPromise=function(t){var e=this;this._scriptLoadingPromise=new Promise(function(n,o){e._windowRef.getNativeWindow()[e.callbackName]=function(){n()},t.onerror=function(t){o(t)}})},e.prototype._getScriptSrc=function(t){var e;switch(this._config&&this._config.protocol||X.HTTPS){case X.AUTO:e="";break;case X.HTTP:e="http:";break;case X.HTTPS:e="https:"}var n={v:this._config.apiVersion||"quarterly",callback:t,key:this._config.apiKey,client:this._config.clientId,channel:this._config.channel,libraries:this._config.libraries,region:this._config.region,language:this._config.language};return e+"//"+(this._config.hostAndPath||"maps.googleapis.com/maps/api/js")+"?"+Object.keys(n).filter(function(t){return null!=n[t]}).filter(function(t){return!Array.isArray(n[t])||Array.isArray(n[t])&&n[t].length>0}).map(function(t){var e=n[t];return Array.isArray(e)?{key:t,value:e.join(",")}:{key:t,value:n[t]}}).map(function(t){return t.key+"="+t.value}).join("&")},e}(u),nt=n("ZYCi"),ot=function(){return function(){}}();n("S5bw"),n("K9Ia"),n("ad02"),n("ny24");var rt=function(){function t(){}var e;return e=t,t.forRoot=function(t){return{ngModule:e,providers:Q.concat([{provide:u,useClass:et},{provide:tt,useValue:t}])}},t}();n.d(e,"GMapModuleNgFactory",function(){return it});var it=o["\u0275cmf"](r,[],function(t){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,U]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,K.m,K.l,[o.LOCALE_ID,[2,K.A]]),o["\u0275mpd"](4608,Y,Y,[]),o["\u0275mpd"](4608,q,q,[]),o["\u0275mpd"](4608,u,et,[[2,tt],Y,q]),o["\u0275mpd"](1073742336,K.c,K.c,[]),o["\u0275mpd"](1073742336,nt.o,nt.o,[[2,nt.t],[2,nt.k]]),o["\u0275mpd"](1073742336,ot,ot,[]),o["\u0275mpd"](1073742336,rt,rt,[]),o["\u0275mpd"](1073742336,r,r,[]),o["\u0275mpd"](1024,nt.i,function(){return[[{path:"",component:$}]]},[]),o["\u0275mpd"](256,tt,void 0,[])])})}}]);
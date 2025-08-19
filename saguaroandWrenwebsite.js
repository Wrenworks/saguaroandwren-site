(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"saguaroandWrenwebsite_atlas_1", frames: [[0,0,1812,1855]]},
		{name:"saguaroandWrenwebsite_atlas_2", frames: [[0,0,1681,1290]]},
		{name:"saguaroandWrenwebsite_atlas_3", frames: [[0,929,746,855],[1465,0,452,518],[0,0,1463,927],[748,929,740,781]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(ss["saguaroandWrenwebsite_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["saguaroandWrenwebsite_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["saguaroandWrenwebsite_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(img.CachedBmp_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2442,780);


(lib.CachedBmp_5 = function() {
	this.initialize(ss["saguaroandWrenwebsite_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1321,2111);


(lib.CachedBmp_3 = function() {
	this.initialize(ss["saguaroandWrenwebsite_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3954,1246);


(lib.BMP_ddcb7a1f_c0d3_4b6d_8e91_55172e29b4d8 = function() {
	this.initialize(ss["saguaroandWrenwebsite_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wing_frontr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,373,427.5);


(lib.tail = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tail, new cjs.Rectangle(0,0,226,259), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {night:3,dusk:2,day:1,dawn:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// night_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#622A90","#171363","#000000"],[0,0.251,0.996],0,360.9,0,-360.9).s().p("EiX4A4ZMAAAhwxMEvxAAAMAAABwxg");
	this.shape.setTransform(972.3197,361.5196,20.3439,24.0314,-0.7313);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// sunset_ai
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEC51F","#DE5D00","#5F2E8B"],[0,0.478,0.996],0,360.9,0,-360.9).s().p("EiX4A4ZMAAAhwxMEvxAAAMAAABwxg");
	this.shape_1.setTransform(972.1071,361.4168,20.04,22.6378);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// day_ai
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#79C9FE","#005CBE"],[0,0.992],0,360.9,0,-360.9).s().p("EiX4A4ZMAAAhwxMEvxAAAMAAABwxg");
	this.shape_2.setTransform(972.1071,361.4168,20.04,22.6378);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// sunrise_ai
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FED679","#E87D04","#E4800D","#D98724","#C8944A","#B0A481","#92B9C6","#79C9FE"],[0.008,0.325,0.373,0.451,0.549,0.663,0.788,0.882],0,360.9,0,-360.9).s().p("EiX4A4ZMAAAhwxMEvxAAAMAAABwxg");
	this.shape_3.setTransform(972.1071,361.4168,20.04,22.6378);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18912.8,-8562.4,39770.3,17847.9);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EA0iARQQgjgGgggfQgWgWgbgpQgdgsgOgZQgVgogHgjQgIgqAKgnQALgqAfgYQAdgYAoABQApAAAdAYQAUAQASAgIAcA4QAMAVAbApQAXAmAHAdQAHAegGAfQgGAfgTAXQgTAYgdAMQgUAIgVAAQgJAAgJgCgEA+vAPmQgggYgOgtQgMgnADgvQAFhPAmgzQAWgcAfgQQAhgRAiADQAUACAaAKIAsATIBEAbQAlASAPAbQAQAdgEA4QgFBDgZAeQgNAQgWANQgPAIgbALQhGAdgpAGQgOACgNAAQgyAAgjgbgEhCzgOhQgfgHgTgYQgSgXgBgeQgCgjAXgZQAYgbAjAAQAMAAAAgFQAeABAZAUQAYAVAGAdQAGAegOAcQgOAdgcANQgRAIgTAAQgLAAgLgDg");
	this.shape.setTransform(434.5354,150.4614);

	this.shape_1 = new cjs.Shape();
	var sprImg_shape_1 = cjs.SpriteSheetUtils.extractFrame(ss["saguaroandWrenwebsite_atlas_3"],3);
	sprImg_shape_1.onload = function(){
		this.shape_1.graphics.bf(sprImg_shape_1, null, new cjs.Matrix2D(1,0,0,1,-370,-390.5)).s().p("Eg5zA9BMAAAh6BMBznAAAMAAAB6BgEgmMgaWQgeAYgLApQgLAnAJAqQAHAkAVAoQANAZAdArQAcAqAWAVQAgAgAiAGQAeAGAegMQAdgMATgYQATgYAGgeQAFgfgGgeQgHgdgXgmQgbgpgMgVIgdg5QgSgfgTgQQgdgZgpAAIgCAAQgnAAgdAYgA5G7CQgfAPgWAdQgmAzgFBPQgEAvANAnQAOAtAgAYQAsAhBDgJQApgFBHgdQAbgLAOgJQAXgMAMgQQAZgfAGhCQADg4gQgdQgPgbglgSIhDgbIgsgTQgbgLgTgBIgLAAQgcAAgcAOg")
	}.bind(this);
	this.shape_1.setTransform(1000.85,390.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,1370.9,781), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ar2PvQCMt4CSqoQCTqoGNlHQB8hmCHg2QBDgbArgHQIxBZivNlQg6EfiOGAQhMDLhuEMQhmERhvCxQhfCYhaBCQhEAxhIgkQgXgMgUgTIgPgPQABAIgNArIg9DIQghByh4BDQg8Ahg2ALQgqCBiqBlQhUAzhNAZQApk0BFm8g");
	this.shape.setTransform(86.87,175.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.8,351.9);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,840.5,645), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(272.85,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(272.9,0,1221,390), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,731.5,463.5), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.4625,0.4625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,611,976.3), null);


(lib.rock1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rock1, new cjs.Rectangle(0,0,906,927.5), null);


(lib.pupils = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPB2QgsgXgbgzQgagxAIgxQAHgxAjgSQAjgTAsAXQArAXAaAyQAbAygIAwQgGAxgkATQgQAIgSAAQgWAAgWgMg");
	this.shape.setTransform(10.7,24.205);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhgBhQgogoAAg5QAAg4AogoQAogoA4AAQA5AAAoAoQAoAoAAA4QAAA5goAoQgoAog5AAQg4AAgogog");
	this.shape_1.setTransform(89.275,13.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103,37.3);


(lib.legs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah6L8QgWhJgUhcQgni4AMhcQAMhcBnjYIBkjGIm4EPIgGBrQgNCEgeCBQgfCBhdCLQgvBGgoAsQBElDAUhKQAGgWADgwIAFhcQAKh/AphOQAshSDui8IDlirIhBtFICmg7IATAxQASA+AAA/IAAK1IE3FFQChCwgYAbQgVAZAKBbQAOCGgDA7QgFBcA2EtQAbCXAbCEQg1hUg5hwQhxjggTiKQgQh3AQh6QANhmgNgoQgSg3iVhmIiRhbIiHFCIAvDMQAyDnAECKQAECKhVClQgqBTgrA3g");
	this.shape.setTransform(269.825,141.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AtBPQQgxjSglhSQglhTAshcQAOgdAUgaIASgUQFDkJA8gsQAlgcEFgvQCCgYB6gTQgXjNgcihQgShlAqlsIAulYIBcAOQBfAVANAiQANAhg1DhQgaBwgdBpIAXCiQAOBlAEC/QADBggBBKIBcg0QBsg0BWAJQCJAPESAPIgHAYQgLAegWAbQhFBciVAuQhPAZhWABQg0AAhdgLQhdgLgsAAQhLABhBAZQiEAyhgBQQhJA8hQBoQggAogGAqQgGAgAJAxIATBfQAKA/gDA9QgIB3hIBOQgkAmgiAPIAKhnQAFgwgxiTQgwiTAHhGQAJhSCKiIQArgrAzgqIAqgjQg0APhEAPQiJAdhQAAQhRAAg1BnQgaAzgKA0IApCjQArC0AJBTQAJBThIBNQgkAngmAWQgRhYgZhpg");
	this.shape_1.setTransform(93.6799,116.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legs, new cjs.Rectangle(0,0,337.6,267.6), null);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0,0,1977,623), null);


(lib.wrenbody = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEZGZQgvgCgYAAIg/ABQglAAgZgJQgvgSgng7QghgxgKgsIgHgkIgHgjQgDgOgKgcQgKgcgEgOQgMgxAMg2QAKgzAcgvQAZgpAngpQAeggAwgnQA9gyAwgcQBAgkA8gKQA1gJA/AKQAxAHBBAUQBRAaAtAfQAnAZAcAlQAdAmAPArQAPAsgCAvQgCAwgSApQgSAogsA0QgeAigpAoIhMBGQhQBIgqAhQg+AvgtAMQgZAFgiAAIgKAAgAoPGYQg1gCgtgeQhGgwgzh3QgfhJgUhSQgJgjgBgWQgCghAJgZQAMgiAggVQAggVAlACQAfACAjAUQANAHAwAgIBGAwQAoAbAXAcQA7BKgEB7QgEBqg3AuQglAeg0AAIgHAAg");
	this.shape.setTransform(199.6886,227.0878);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(38).to({_off:false},0).wait(2).to({_off:true},1).wait(19).to({_off:false},0).wait(3));

	// Layer_3
	this.instance = new lib.pupils();
	this.instance.setTransform(177.8,241,1,1,0,0,0,51.5,18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({x:187.8,y:234.15},0).wait(18).to({x:166.3},0).wait(25));

	// MergedLayer_1
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(54.55,390.5,1,1,0,0,0,685.4,390.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmAgQgJgKgDgKQgDgMAGgQQACgGAEgGQAHgLAMgGQAMgGAMABIAAgCQAOABAMAIQAMAJAGANQAGANgBAOQgBAPgIALQgPAUgVABIgDAAQgWAAgTgVg");
	this.shape_1.setTransform(212.6542,247.4796);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_1},{t:this.instance_1}]},20).to({state:[{t:this.shape_1},{t:this.instance_1}]},17).to({state:[{t:this.shape_1},{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.instance_1}]},3).to({state:[{t:this.shape_1},{t:this.instance_1}]},18).to({state:[{t:this.shape_1},{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-630.8,0,1370.8,781);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(139.9,107.4,0.3331,0.3331,0,0,0,420.1,322.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,280,214.9), null);


(lib.body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// frontwing
	this.instance = new lib.wing_frontr();
	this.instance.setTransform(480.75,371.95,1,1,0,0,0,96.5,108.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({regX:40.1,regY:43.2,rotation:-10.953,x:424.3,y:306.25},0).wait(5).to({regX:40.2,regY:43.3,rotation:-0.4267,x:424.45,y:306.35},0).wait(27));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqCHGQgegEgggUQgXgPgdgdQhDhCgxhNQhQh+APhlQAKg9AwgrQAygtA6AKQAdAFAfAVQASALAjAdQBTBEAbAbQA5A7AWA7QASAygEA3QgFA3gaAvQgZAsgpAaQglAXglAAIgQgCgAB8GqQg5gNgvgfIgWgOQgNgIgLgDQgRgFgXAEIgoAJQgsAKgogIQgtgJgbgdQgagdgGgtQgFgmAKgtQAYhwBehrQAkgqA0gvQAggdA/g1QA2gtAdgWQAvgjAqgXQAfgQAwgTIBPghIA+gaQAkgOAdgDQAjgEAgAMQAiANAQAcIAMAXQAJAMAKADQANAEAXgPIA3giQAhgSAbgFQAmgHAkAPQAlAOAVAfQAOAUAIAeQAFASAGAlQAIA0AAAeQAAAugQAhQgJASgSAUIgfAiQggAhg5BGQg5BFgSATQg/BFhNA1Qg8AqhfAyQgzAbggAOQgwAUgpAGQgZAFgYAAQggAAgfgHg");
	this.shape.setTransform(209.5336,223.5037);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(42).to({_off:false},0).wait(7).to({_off:true},1).wait(32));

	// body
	this.ikNode_1 = new lib.wrenbody();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(370.2,391.1,1,1,0,0,0,370.2,391.1);

	this.timeline.addTween(cjs.Tween.get(this.ikNode_1).wait(82));

	// tail
	this.tail = new lib.tail();
	this.tail.name = "tail";
	this.tail.setTransform(699.45,582.75,1,1,0,0,0,12,238.5);

	this.timeline.addTween(cjs.Tween.get(this.tail).wait(41).to({regX:12.1,rotation:64.9936,x:699.4,y:582.8},0).wait(2).to({regX:12,regY:238.6,rotation:55.9676,x:699.3,y:582.85},0).wait(2).to({regX:12.1,regY:238.5,rotation:59.9996,x:699.45},0).wait(2).to({regX:12,rotation:0,y:582.75},0).wait(35));

	// backwing
	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(171.2,456.15,1,1,0,0,0,98.2,85.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({rotation:21.2475,x:171.1},0).wait(5).to({rotation:6.2477},0).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-630.8,0,1647.6999999999998,785.4);


(lib.Wren = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wrenbody
	this.instance = new lib.body();
	this.instance.setTransform(370.1,391.1,1,1,0,0,0,370.2,391.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAtQgQgCgPgMQgFgEgBgDIgBgMIgDgMQgCgJAGgKQAGgLALgGIAAAAIADgDQADgDAEgBIAGgBIAGAAIAAAAIAAAAIAIABIAGAEIABABQAPAIAGAKQAJAPgHAVQgDAKgGAHQgKAMgRAAIgEAAg");
	this.shape.setTransform(291.3963,553.3879);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},11).to({state:[{t:this.shape},{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},13).to({state:[{t:this.instance}]},43).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({y:431.1,mode:"synched",startPosition:0},0).wait(12).to({y:391.1,mode:"independent"},0).wait(22).to({y:431.1,mode:"synched",startPosition:0},0).wait(6).to({startPosition:0},0).wait(6).to({y:391.1,mode:"independent"},0).wait(11).to({y:431.1,mode:"synched",startPosition:0},0).wait(13).to({y:391.1,mode:"independent"},0).wait(44));

	// legs_feet
	this.instance_1 = new lib.legs();
	this.instance_1.setTransform(386.8,764.75,1,1,0,0,0,178.8,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(125));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-630.9,0,1544.3,1009.5);


// stage content:
(lib.saguaroandWrenwebsite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		// Pick a label based on local hour
		function skyLabelForHour(h) {
		  if (h >= 5 && h <= 7) return "dawn";
		  if (h >= 8 && h <= 17) return "day";
		  if (h >= 18 && h <= 20) return "dusk";
		  return "night";
		}
		
		// Set once on load
		var hour = (new Date()).getHours();
		this.sky.gotoAndStop(skyLabelForHour(hour));
		
		// OPTIONAL: if you have a separate Stars instance and want it only at night:
		// this.stars.visible = (skyLabelForHour(hour) === "night");
		
		// Utility: decide which label to show
		function skyLabelForHour(h) {
		  if (h >= 5 && h <= 7) return "dawn";
		  if (h >= 8 && h <= 17) return "day";
		  if (h >= 18 && h <= 20) return "dusk";
		  return "night";
		}
		
		// Reference to 'this' timeline
		var _this = this;
		
		// Run once on load
		var h = (new Date()).getHours();
		var label = skyLabelForHour(h);
		this.sky.gotoAndStop(label);
		
		// Update every tick (optional, keeps checking)
		createjs.Ticker.on("tick", function() {
		  var hourNow = (new Date()).getHours();
		  var newLabel = skyLabelForHour(hourNow);
		  if (_this.sky.currentLabel !== newLabel) {
		    _this.sky.gotoAndStop(newLabel);
		  }
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(752));

	// wren
	this.instance = new lib.Wren();
	this.instance.setTransform(821.3,416.7,0.0549,0.0549,0,0,0,457.3,505.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(752));

	// Layer_27
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37541C").s().p("Ah9BRIAAgOIgDgMIAEgEIAAAAIACgOQACgTATgRQAKgIAWgSIAUgTQANgMAfgOQARgJALAAQAJgBAOADIAWAGQAVAEAGADIAFADIAFACIAHABIAGAAIAFAHIAEAEIABACQACAHgBADIgFAHIgCALQgBAHgGACQgEABgGgHQgFgHgFAAQgEABgDAHQgDAIgDACQgCABgGABIgUACQhhAQg6ArIgCABQAAAEgEAEIgGAGIgIAFIgDABIgBAAg");
	this.shape.setTransform(814.6446,444.2407);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(752));

	// logo
	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(960,-111.65,1,1,0,0,0,139.9,107.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:156.45},12).to({regY:107.5,rotation:-4.1994,x:959.95,y:154.55},1).to({rotation:4.223,x:960,y:152.55},1).to({regY:107.4,rotation:0,y:150.45},1).to({y:148.45},1).wait(46).to({regX:140,regY:107.5,scaleX:1.1,scaleY:1.1,rotation:-6.2369,x:960.1,y:159.25},2).to({scaleX:1.05,scaleY:1.05,rotation:6.7098,x:960.05,y:153.95},2).to({regX:139.9,regY:107.4,scaleX:1,scaleY:1,rotation:0,x:960,y:148.45},2).wait(181).to({regX:140,regY:107.5,scaleX:1.1,scaleY:1.1,rotation:-6.2369,x:960.1,y:159.25},2).to({scaleX:1.05,scaleY:1.05,rotation:6.7098,x:960.05,y:153.95},2).to({regX:139.9,regY:107.4,scaleX:1,scaleY:1,rotation:0,x:960,y:148.45},2).wait(464).to({regX:140,regY:107.5,scaleX:1.1,scaleY:1.1,rotation:-6.2369,x:960.1,y:159.25},2).to({scaleX:1.05,scaleY:1.05,rotation:6.7098,x:960.05,y:153.95},2).to({regX:139.9,regY:107.4,scaleX:1,scaleY:1,rotation:0,x:960,y:148.45},2).wait(27));

	// rocks
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(1476.7,1096,0.2242,0.4091,0,0,0,747.4,195.2);

	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(1944.85,783.9,0.4091,0.4091,0,0,0,747.2,195.2);

	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(1326.65,836.5,0.3046,0.3046,0,0,0,747,195.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},14).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},737).wait(1));

	// Layer_1
	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(205.7,869.6,0.171,0.1135,0,0,0,731.5,231.7);

	this.instance_6 = new lib.Symbol2();
	this.instance_6.setTransform(885.9,847.6,0.2257,0.2257,0,0,0,731.4,231.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).to({state:[{t:this.instance_6},{t:this.instance_5}]},751).wait(1));

	// rock_1
	this.instance_7 = new lib.rock1();
	this.instance_7.setTransform(-57.4,913.55,0.2535,0.255,0,0,0,452.8,463.7);

	this.instance_8 = new lib.rock1();
	this.instance_8.setTransform(588.8,781.65,0.2535,0.255,0,0,0,452.8,463.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},751).wait(1));

	// saguaro
	this.instance_9 = new lib.Symbol1();
	this.instance_9.setTransform(970.05,639.4,1.0811,1.0811,0,0,0,473.6,302.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(752));

	// Layer_2
	this.instance_10 = new lib.background();
	this.instance_10.setTransform(963.05,781.65,1,1,0,0,0,988.6,311.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(752));

	// Layer_29
	this.sky = new lib.Symbol10();
	this.sky.name = "sky";
	this.sky.setTransform(969.4,311.15,0.0498,0.0386,0,0,0,972.7,361.4);
	this.sky.alpha = 0.7617;

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(680).to({regX:973.5,regY:354.1,scaleX:0.0523,scaleY:0.0429,x:947.4,y:291.95,alpha:1},0).wait(72));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(787.9,321,1462.4,1047.3);
// library properties:
lib.properties = {
	id: '5EB7B55DAEFF4DE0842EEF5E2BDFA162',
	width: 1920,
	height: 1080,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_6.png?1755556445632", id:"CachedBmp_6"},
		{src:"images/CachedBmp_4.png?1755556445632", id:"CachedBmp_4"},
		{src:"images/CachedBmp_1.png?1755556445632", id:"CachedBmp_1"},
		{src:"images/saguaroandWrenwebsite_atlas_1.png?1755556445619", id:"saguaroandWrenwebsite_atlas_1"},
		{src:"images/saguaroandWrenwebsite_atlas_2.png?1755556445619", id:"saguaroandWrenwebsite_atlas_2"},
		{src:"images/saguaroandWrenwebsite_atlas_3.png?1755556445619", id:"saguaroandWrenwebsite_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5EB7B55DAEFF4DE0842EEF5E2BDFA162'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;

(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{iYbM:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var s=n("XNiG"),i=n("xgIS"),r=n("Kj3r"),o=n("1G5W");class h{constructor(e,t){this._elementRef=e,this._renderer=t,this._onDestroy$=new s.a}ngAfterViewInit(){this.update(),Object(i.a)(window,"resize").pipe(Object(r.a)(100),Object(o.a)(this._onDestroy$)).subscribe(()=>this.update())}ngOnDestroy(){this._onDestroy$.next(),this._onDestroy$.complete()}update(){this._renderer.setProperty(this._elementRef.nativeElement,"innerText",this.content);let e=this.content;for(;this._elementRef.nativeElement.scrollHeight>this._elementRef.nativeElement.offsetHeight;)e=e.substring(0,e.lastIndexOf(" "))+"\u2026",this._renderer.setProperty(this._elementRef.nativeElement,"innerText",e)}}}}]);
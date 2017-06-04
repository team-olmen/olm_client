/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/router';
import * as import2 from '@angular/common';
import * as import3 from '../shared/text-view.component.ngfactory';
import * as import4 from '../../../../src/app/shared/text-view.component';
import * as import5 from '../../../../src/app/services/olm.service';
import * as import6 from '../../../../src/app/text/texts-view.component';
import * as import7 from '../../../../src/app/services/alert.service';
const styles_TextsViewComponent:any[] = ([] as any[]);
export const RenderType_TextsViewComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_TextsViewComponent,
  data: {}
}
);
function View_TextsViewComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),11,(null as any),(null as any),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n			',
      '\n			'
    ]
    )),
      (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',[[
        'class',
        'btn btn-edit'
      ]
    ],[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,3).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(335872,(null as any),0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(3),
    (l()(),import0.ɵted((null as any),['bearbeiten'])),
    (l()(),import0.ɵted((null as any),['\n			'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',[[
        'class',
        'btn btn-delete'
      ]
    ],[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,8).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(335872,(null as any),0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(2),
    (l()(),import0.ɵted((null as any),['löschen'])),
    (l()(),import0.ɵted((null as any),['\n		']))
  ]
  ,(ck,v) => {
    const currVal_3:any = ck(v,4,0,'/text/edit',(<any>v.parent).context.$implicit.id,'current');
    ck(v,3,0,currVal_3);
    const currVal_6:any = ck(v,9,0,'/text/delete',(<any>v.parent).context.$implicit.id);
    ck(v,8,0,currVal_6);
  },(ck,v) => {
    const currVal_0:any = (<any>v.parent).context.$implicit.path;
    ck(v,1,0,currVal_0);
    const currVal_1:any = import0.ɵnov(v,3).target;
    const currVal_2:any = import0.ɵnov(v,3).href;
    ck(v,2,0,currVal_1,currVal_2);
    const currVal_4:any = import0.ɵnov(v,8).target;
    const currVal_5:any = import0.ɵnov(v,8).href;
    ck(v,7,0,currVal_4,currVal_5);
  });
}
function View_TextsViewComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n		'])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_TextsViewComponent_2)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n	']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.auth.admin;
    ck(v,3,0,currVal_0);
  },(null as any));
}
export function View_TextsViewComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Texte / Hilfen'])),
    (l()(),import0.ɵted((null as any),['\n\n'])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'text-view',([] as any[]),(null as any),(null as any),(null as any),import3.View_TextViewComponent_0,import3.RenderType_TextViewComponent)),
    import0.ɵdid(57344,(null as any),0,import4.TextViewComponent,[
      import1.ActivatedRoute,
      import5.OlmService,
      import1.Router
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n'])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'ul',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n	'])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_TextsViewComponent_1)),
    import0.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n\n'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),9,'menu',[[
        'class',
        'bottom'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n	'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[[
        'class',
        'btn btn-back'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import6.TextsViewComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.back()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['zurück'])),
    (l()(),import0.ɵted((null as any),['\n	'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',[[
        'class',
        'btn btn-create'
      ]
    ],[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,18).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(335872,(null as any),0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(2),
    (l()(),import0.ɵted((null as any),['Text / Hilfe anlegen'])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import6.TextsViewComponent = v.component;
    ck(v,4,0);
    const currVal_0:any = co.items;
    ck(v,9,0,currVal_0);
    const currVal_3:any = ck(v,19,0,'/text/create/',co.id);
    ck(v,18,0,currVal_3);
  },(ck,v) => {
    const currVal_1:any = import0.ɵnov(v,18).target;
    const currVal_2:any = import0.ɵnov(v,18).href;
    ck(v,17,0,currVal_1,currVal_2);
  });
}
function View_TextsViewComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'texts-view',([] as any[]),(null as any),(null as any),(null as any),View_TextsViewComponent_0,RenderType_TextsViewComponent)),
    import0.ɵdid(57344,(null as any),0,import6.TextsViewComponent,[
      import5.OlmService,
      import7.AlertService,
      import2.Location
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const TextsViewComponentNgFactory:import0.ComponentFactory<import6.TextsViewComponent> = import0.ɵccf('texts-view',import6.TextsViewComponent,View_TextsViewComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2RhdGEvZWlrZS9kYXRhL0NvZGUvb2xtX2NsaWVudC9zcmMvYXBwL3RleHQvdGV4dHMtdmlldy5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vZGF0YS9laWtlL2RhdGEvQ29kZS9vbG1fY2xpZW50L3NyYy9hcHAvdGV4dC90ZXh0cy12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vL2RhdGEvZWlrZS9kYXRhL0NvZGUvb2xtX2NsaWVudC9zcmMvYXBwL3RleHQvdGV4dHMtdmlldy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2RhdGEvZWlrZS9kYXRhL0NvZGUvb2xtX2NsaWVudC9zcmMvYXBwL3RleHQvdGV4dHMtdmlldy5jb21wb25lbnQudHMuVGV4dHNWaWV3Q29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGgxPlRleHRlIC8gSGlsZmVuPC9oMT5cblxuPHRleHQtdmlldz48L3RleHQtdmlldz5cblxuPHVsPlxuXHQ8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiYXV0aC5hZG1pblwiPlxuXHRcdFx0e3tpdGVtLnBhdGh9fVxuXHRcdFx0PGEgY2xhc3M9XCJidG4gYnRuLWVkaXRcIiBbcm91dGVyTGlua109XCJbJy90ZXh0L2VkaXQnLCBpdGVtLmlkLCAnY3VycmVudCddXCI+YmVhcmJlaXRlbjwvYT5cblx0XHRcdDxhIGNsYXNzPVwiYnRuIGJ0bi1kZWxldGVcIiBbcm91dGVyTGlua109XCJbJy90ZXh0L2RlbGV0ZScsIGl0ZW0uaWRdXCI+bMO2c2NoZW48L2E+XG5cdFx0PC9uZy1jb250YWluZXI+XG5cdDwvbGk+XG48L3VsPlxuXG48bWVudSBjbGFzcz1cImJvdHRvbVwiPlxuXHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1iYWNrXCIgKGNsaWNrKT1cImJhY2soKVwiPnp1csO8Y2s8L2J1dHRvbj5cblx0PGEgY2xhc3M9XCJidG4gYnRuLWNyZWF0ZVwiIFtyb3V0ZXJMaW5rXT1cIlsnL3RleHQvY3JlYXRlLycsIGlkXVwiPlRleHQgLyBIaWxmZSBhbmxlZ2VuPC9hPlxuPC9tZW51PlxuIiwiPHRleHRzLXZpZXc+PC90ZXh0cy12aWV3PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNNRTtJQUFpQztNQUFBO01BQUE7SUFBQTtJQUFBO01BRWhDO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQXdCO0lBQWtEO0lBQWM7TUFDeEY7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBMEI7SUFBeUM7SUFBVzs7O0lBRHREO0lBQXhCLFNBQXdCLFNBQXhCO0lBQzBCO0lBQTFCLFNBQTBCLFNBQTFCOztJQUhnQztJQUFBO0lBRWhDO0lBQUE7SUFBQSxTQUFBLG1CQUFBO0lBQ0E7SUFBQTtJQUFBLFNBQUEsbUJBQUE7Ozs7O0lBSkY7SUFBK0I7SUFDOUI7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUllOzs7O0lBSkQ7SUFBZCxTQUFjLFNBQWQ7Ozs7O0lBTkY7SUFBSTtJQUFtQjtJQUV2QjtnQkFBQTs7OztJQUFBO0tBQUE7SUFBdUI7SUFFdkI7SUFBSTtJQUNIO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBTUs7SUFDRDtNQUVMO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBcUI7TUFDcEI7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUE2QjtRQUFBO1FBQUE7TUFBQTtNQUE3QjtJQUFBO0lBQThDO0lBQWU7TUFDN0Q7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBMEI7SUFBcUM7SUFBd0I7SUFDakY7Ozs7SUFmUDtJQUdLO0lBQUosU0FBSSxTQUFKO0lBVzBCO0lBQTFCLFVBQTBCLFNBQTFCOztJQUFBO0lBQUE7SUFBQSxVQUFBLG1CQUFBOzs7OztJQ2hCRDtnQkFBQTs7OztJQUFBO0tBQUE7OztJQUFBOzs7In0=

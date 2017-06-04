/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './mcq-display.component.ngfactory';
import * as import2 from '../../../../src/app/mcq/mcq-display.component';
import * as import3 from '../../../../src/app/services/olm.service';
import * as import4 from '../../../../src/app/services/alert.service';
import * as import5 from '@angular/common';
import * as import6 from '../shared/text-view.component.ngfactory';
import * as import7 from '../../../../src/app/shared/text-view.component';
import * as import8 from '@angular/router';
import * as import9 from '../../../../src/app/mcq/mcqs-view.component';
const styles_McqsViewComponent:any[] = ([] as any[]);
export const RenderType_McqsViewComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_McqsViewComponent,
  data: {}
}
);
function View_McqsViewComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'mcq-display',([] as any[]),(null as any),(null as any),(null as any),import1.View_McqDisplayComponent_0,import1.RenderType_McqDisplayComponent)),
    import0.ɵdid(4513792,(null as any),0,import2.McqDisplayComponent,[
      import3.OlmService,
      import4.AlertService
    ]
    ,{
      item: [
        0,
        'item'
      ]
      ,
      discussion: [
        1,
        'discussion'
      ]

    }
    ,(null as any))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = (<any>v.parent).context.$implicit;
    const currVal_1:any = co.discussion;
    ck(v,1,0,currVal_0,currVal_1);
  },(null as any));
}
function View_McqsViewComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n		'])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_McqsViewComponent_2)),
    import0.ɵdid(8192,(null as any),0,import5.NgIf,[
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
    const currVal_0:any = v.context.$implicit;
    ck(v,3,0,currVal_0);
  },(null as any));
}
export function View_McqsViewComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['MC-Fragen'])),
    (l()(),import0.ɵted((null as any),['\n\n'])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'text-view',([] as any[]),(null as any),(null as any),(null as any),import6.View_TextViewComponent_0,import6.RenderType_TextViewComponent)),
    import0.ɵdid(57344,(null as any),0,import7.TextViewComponent,[
      import8.ActivatedRoute,
      import3.OlmService,
      import8.Router
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n'])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'ul',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n	'])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_McqsViewComponent_1)),
    import0.ɵdid(401408,(null as any),0,import5.NgForOf,[
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
      (l()(),import0.ɵeld(0,(null as any),(null as any),10,'menu',[[
        'class',
        'bottom'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n	'])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'a',[
      [
        'class',
        'btn btn-back'
      ]
      ,
      [
        'routerLink',
        '/dashboard'
      ]

    ]
    ,[
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
        const pd_0:any = ((<any>import0.ɵnov(v,15).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(335872,(null as any),0,import8.RouterLinkWithHref,[
      import8.Router,
      import8.ActivatedRoute,
      import5.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
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
        const pd_0:any = ((<any>import0.ɵnov(v,19).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(335872,(null as any),0,import8.RouterLinkWithHref,[
      import8.Router,
      import8.ActivatedRoute,
      import5.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(2),
    (l()(),import0.ɵted((null as any),['MC-Frage erschaffen'])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import9.McqsViewComponent = v.component;
    ck(v,4,0);
    const currVal_0:any = co.items;
    ck(v,9,0,currVal_0);
    const currVal_3:any = '/dashboard';
    ck(v,15,0,currVal_3);
    const currVal_6:any = ck(v,20,0,'/mcq/create/',co.module);
    ck(v,19,0,currVal_6);
  },(ck,v) => {
    const currVal_1:any = import0.ɵnov(v,15).target;
    const currVal_2:any = import0.ɵnov(v,15).href;
    ck(v,14,0,currVal_1,currVal_2);
    const currVal_4:any = import0.ɵnov(v,19).target;
    const currVal_5:any = import0.ɵnov(v,19).href;
    ck(v,18,0,currVal_4,currVal_5);
  });
}
function View_McqsViewComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'mcqs-view',([] as any[]),(null as any),(null as any),(null as any),View_McqsViewComponent_0,RenderType_McqsViewComponent)),
    import0.ɵdid(57344,(null as any),0,import9.McqsViewComponent,[
      import8.ActivatedRoute,
      import3.OlmService,
      import4.AlertService,
      import8.Router,
      import5.Location
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const McqsViewComponentNgFactory:import0.ComponentFactory<import9.McqsViewComponent> = import0.ɵccf('mcqs-view',import9.McqsViewComponent,View_McqsViewComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2RhdGEvZWlrZS9kYXRhL0NvZGUvb2xtX2NsaWVudC9zcmMvYXBwL21jcS9tY3FzLXZpZXcuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2RhdGEvZWlrZS9kYXRhL0NvZGUvb2xtX2NsaWVudC9zcmMvYXBwL21jcS9tY3FzLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly8vZGF0YS9laWtlL2RhdGEvQ29kZS9vbG1fY2xpZW50L3NyYy9hcHAvbWNxL21jcXMtdmlldy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2RhdGEvZWlrZS9kYXRhL0NvZGUvb2xtX2NsaWVudC9zcmMvYXBwL21jcS9tY3FzLXZpZXcuY29tcG9uZW50LnRzLk1jcXNWaWV3Q29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGgxPk1DLUZyYWdlbjwvaDE+XG5cbjx0ZXh0LXZpZXc+PC90ZXh0LXZpZXc+XG5cbjx1bD5cblx0PGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XG5cdFx0PG1jcS1kaXNwbGF5ICpuZ0lmPVwiaXRlbVwiIFtpdGVtXT1cIml0ZW1cIiBbZGlzY3Vzc2lvbl09XCJkaXNjdXNzaW9uXCI+PC9tY3EtZGlzcGxheT5cblx0PC9saT5cbjwvdWw+XG5cbjxtZW51IGNsYXNzPVwiYm90dG9tXCI+XG5cdDxhIGNsYXNzPVwiYnRuIGJ0bi1iYWNrXCIgcm91dGVyTGluaz1cIi9kYXNoYm9hcmRcIj56dXLDvGNrPC9hPlxuXHQ8YSBjbGFzcz1cImJ0biBidG4tY3JlYXRlXCIgW3JvdXRlckxpbmtdPVwiWycvbWNxL2NyZWF0ZS8nLCBtb2R1bGVdXCI+TUMtRnJhZ2UgZXJzY2hhZmZlbjwvYT5cbjwvbWVudT5cbiIsIjxtY3FzLXZpZXc+PC9tY3FzLXZpZXc+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDTUU7Z0JBQUE7OztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBOzs7O0lBQTBCO0lBQWM7SUFBeEMsU0FBMEIsVUFBYyxTQUF4Qzs7Ozs7SUFERDtJQUErQjtJQUM5QjtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWdGOzs7SUFBbkU7SUFBYixTQUFhLFNBQWI7Ozs7O0lBTkY7SUFBSTtJQUFjO0lBRWxCO2dCQUFBOzs7O0lBQUE7S0FBQTtJQUF1QjtJQUV2QjtJQUFJO0lBQ0g7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFFSztJQUNEO01BRUw7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFxQjtJQUNwQjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBZ0Q7SUFBVTtNQUMxRDtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUEwQjtJQUF3QztJQUF1QjtJQUNuRjs7OztJQVhQO0lBR0s7SUFBSixTQUFJLFNBQUo7SUFNd0I7SUFBeEIsVUFBd0IsU0FBeEI7SUFDMEI7SUFBMUIsVUFBMEIsU0FBMUI7O0lBREE7SUFBQTtJQUFBLFVBQUEsbUJBQUE7SUFDQTtJQUFBO0lBQUEsVUFBQSxtQkFBQTs7Ozs7SUNaRDtnQkFBQTs7Ozs7O0lBQUE7S0FBQTs7O0lBQUE7OzsifQ==

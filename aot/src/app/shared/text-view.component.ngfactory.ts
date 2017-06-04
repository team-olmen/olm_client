/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../../src/app/shared/text-view.component';
import * as import3 from '@angular/router';
import * as import4 from '../../../../src/app/services/olm.service';
const styles_TextViewComponent:any[] = ([] as any[]);
export const RenderType_TextViewComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_TextViewComponent,
  data: {}
}
);
function View_TextViewComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'details',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n		',
      '\n	'
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.model.help;
    ck(v,1,0,currVal_0);
  });
}
function View_TextViewComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),8,'section',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n	'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'menu',[[
        'class',
        'top'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[[
        'class',
        'btn btn-help'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.toggleHelp()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['?!'])),
    (l()(),import0.ɵted((null as any),[
      '\n	',
      '\n	'
    ]
    )),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_TextViewComponent_2)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_1:any = co.help;
    ck(v,7,0,currVal_1);
  },(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.model.text;
    ck(v,5,0,currVal_0);
  });
}
export function View_TextViewComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_TextViewComponent_1)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import2.TextViewComponent = v.component;
    const currVal_0:any = co.model.text;
    ck(v,1,0,currVal_0);
  },(null as any));
}
function View_TextViewComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'text-view',([] as any[]),(null as any),(null as any),(null as any),View_TextViewComponent_0,RenderType_TextViewComponent)),
    import0.ɵdid(57344,(null as any),0,import2.TextViewComponent,[
      import3.ActivatedRoute,
      import4.OlmService,
      import3.Router
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const TextViewComponentNgFactory:import0.ComponentFactory<import2.TextViewComponent> = import0.ɵccf('text-view',import2.TextViewComponent,View_TextViewComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2RhdGEvZWlrZS9kYXRhL0NvZGUvb2xtX2NsaWVudC9zcmMvYXBwL3NoYXJlZC90ZXh0LXZpZXcuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2RhdGEvZWlrZS9kYXRhL0NvZGUvb2xtX2NsaWVudC9zcmMvYXBwL3NoYXJlZC90ZXh0LXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly8vZGF0YS9laWtlL2RhdGEvQ29kZS9vbG1fY2xpZW50L3NyYy9hcHAvc2hhcmVkL3RleHQtdmlldy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2RhdGEvZWlrZS9kYXRhL0NvZGUvb2xtX2NsaWVudC9zcmMvYXBwL3NoYXJlZC90ZXh0LXZpZXcuY29tcG9uZW50LnRzLlRleHRWaWV3Q29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPHNlY3Rpb24gKm5nSWY9XCJtb2RlbC50ZXh0XCI+XG5cdDxtZW51IGNsYXNzPVwidG9wXCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taGVscFwiIChjbGljayk9XCJ0b2dnbGVIZWxwKClcIj4/ITwvYnV0dG9uPjwvbWVudT5cblx0e3ttb2RlbC50ZXh0fX1cblx0PGRldGFpbHMgKm5nSWY9XCJoZWxwXCI+XG5cdFx0e3ttb2RlbC5oZWxwfX1cblx0PC9kZXRhaWxzPlxuPC9zZWN0aW9uPlxuIiwiPHRleHQtdmlldz48L3RleHQtdmlldz4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDR0M7SUFBc0I7TUFBQTtNQUFBO0lBQUE7SUFBQTs7OztJQUFBO0lBQUE7Ozs7O0lBSHZCO0lBQTRCO01BQzNCO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBa0I7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUE2QjtRQUFBO1FBQUE7TUFBQTtNQUE3QjtJQUFBO0lBQW9EO0lBQWtCO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFFeEY7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUVVOzs7O0lBRkQ7SUFBVCxTQUFTLFNBQVQ7OztJQUZ3RjtJQUFBOzs7OztJQUR6RjtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBTVU7Ozs7SUFORDtJQUFULFNBQVMsU0FBVDs7Ozs7SUNBQTtnQkFBQTs7OztJQUFBO0tBQUE7OztJQUFBOzs7In0=

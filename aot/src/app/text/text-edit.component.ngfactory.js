/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from '../shared/text-view.component.ngfactory';
import * as import2 from '../../../../src/app/shared/text-view.component';
import * as import3 from '@angular/router';
import * as import4 from '../../../../src/app/services/olm.service';
import * as import5 from './text-form.component.ngfactory';
import * as import6 from '../../../../src/app/text/text-form.component';
import * as import7 from '../../../../src/app/services/alert.service';
import * as import8 from '@angular/common';
import * as import9 from '../../../../src/app/text/text-edit.component';
var styles_TextEditComponent = [];
export var RenderType_TextEditComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_TextEditComponent,
    data: {}
});
export function View_TextEditComponent_0(l) {
    return import0.ɵvid(0, [
        import0.ɵqud(201326592, 1, { form: 0 }),
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Text / Hilfe bearbeiten'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'text-view', [], null, null, null, import1.View_TextViewComponent_0, import1.RenderType_TextViewComponent)),
        import0.ɵdid(57344, null, 0, import2.TextViewComponent, [
            import3.ActivatedRoute,
            import4.OlmService,
            import3.Router
        ], null, null),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'text-form', [], null, null, null, import5.View_TextFormComponent_0, import5.RenderType_TextFormComponent)),
        import0.ɵdid(4218880, [[
                1,
                4
            ]
        ], 0, import6.TextFormComponent, [
            import7.AlertService,
            import8.Location
        ], {
            model: [
                0,
                'model'
            ],
            parent: [
                1,
                'parent'
            ],
            submitLabel: [
                2,
                'submitLabel'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        ck(v, 5, 0);
        var currVal_0 = co.model;
        var currVal_1 = co;
        var currVal_2 = co.submitLabel;
        ck(v, 8, 0, currVal_0, currVal_1, currVal_2);
    }, null);
}
function View_TextEditComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'text-edit', [], null, null, null, View_TextEditComponent_0, RenderType_TextEditComponent)),
        import0.ɵdid(57344, null, 0, import9.TextEditComponent, [
            import3.ActivatedRoute,
            import4.OlmService,
            import7.AlertService,
            import3.Router,
            import8.Location
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var TextEditComponentNgFactory = import0.ɵccf('text-edit', import9.TextEditComponent, View_TextEditComponent_Host_0, {}, {}, []);
//# sourceMappingURL=text-edit.component.ngfactory.js.map
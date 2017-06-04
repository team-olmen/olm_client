/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from '@angular/router';
import * as import2 from '@angular/common';
import * as import3 from '@angular/forms';
import * as import4 from '../shared/text-view.component.ngfactory';
import * as import5 from '../../../../src/app/shared/text-view.component';
import * as import6 from '../../../../src/app/services/olm.service';
import * as import7 from '../../../../src/app/mcq/mcq-display.component';
import * as import8 from '../../../../src/app/services/alert.service';
var styles_McqDisplayComponent = [];
export var RenderType_McqDisplayComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_McqDisplayComponent,
    data: {}
});
function View_McqDisplayComponent_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [[
                'class',
                'btn btn-rate'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.rate(0) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['-']))
    ], null, null);
}
function View_McqDisplayComponent_3(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [[
                'class',
                'btn btn-rate'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.rate(1) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['+']))
    ], null, null);
}
function View_McqDisplayComponent_4(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 3, 'a', [[
                'class',
                'btn btn-primary'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (import0.ɵnov(v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(335872, null, 0, import1.RouterLinkWithHref, [
            import1.Router,
            import1.ActivatedRoute,
            import2.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        import0.ɵpad(2),
        (l()(), import0.ɵted(null, ['ansehen / diskutieren']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_2 = ck(v, 2, 0, '/mcq/view', co.item.id);
        ck(v, 1, 0, currVal_2);
    }, function (ck, v) {
        var currVal_0 = import0.ɵnov(v, 1).target;
        var currVal_1 = import0.ɵnov(v, 1).href;
        ck(v, 0, 0, currVal_0, currVal_1);
    });
}
function View_McqDisplayComponent_5(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 11, null, null, null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵeld(0, null, null, 3, 'a', [[
                'class',
                'btn btn-primary'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (import0.ɵnov(v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(335872, null, 0, import1.RouterLinkWithHref, [
            import1.Router,
            import1.ActivatedRoute,
            import2.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        import0.ɵpad(2),
        (l()(), import0.ɵted(null, ['History'])),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵeld(0, null, null, 3, 'a', [[
                'class',
                'btn btn-delete'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (import0.ɵnov(v, 8).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(335872, null, 0, import1.RouterLinkWithHref, [
            import1.Router,
            import1.ActivatedRoute,
            import2.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        import0.ɵpad(2),
        (l()(), import0.ɵted(null, ['löschen'])),
        (l()(), import0.ɵted(null, ['\n		']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_2 = ck(v, 4, 0, '/mcq/history', co.item.id);
        ck(v, 3, 0, currVal_2);
        var currVal_5 = ck(v, 9, 0, '/mcq/delete', co.item.id);
        ck(v, 8, 0, currVal_5);
    }, function (ck, v) {
        var currVal_0 = import0.ɵnov(v, 3).target;
        var currVal_1 = import0.ɵnov(v, 3).href;
        ck(v, 2, 0, currVal_0, currVal_1);
        var currVal_3 = import0.ɵnov(v, 8).target;
        var currVal_4 = import0.ɵnov(v, 8).href;
        ck(v, 7, 0, currVal_3, currVal_4);
    });
}
function View_McqDisplayComponent_6(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'li', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit;
        ck(v, 1, 0, currVal_0);
    });
}
function View_McqDisplayComponent_8(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 4, null, null, null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n				'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'pre', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n			']))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.item.discussion;
        ck(v, 3, 0, currVal_0);
    });
}
function View_McqDisplayComponent_9(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.formErrors.code;
        ck(v, 1, 0, currVal_0);
    });
}
function View_McqDisplayComponent_7(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 41, null, null, null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Diskussion'])),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵeld(0, null, null, 35, 'form', [[
                'novalidate',
                ''
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'ngSubmit'
            ],
            [
                null,
                'submit'
            ],
            [
                null,
                'reset'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('submit' === en)) {
                var pd_0 = (import0.ɵnov(v, 7).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (import0.ɵnov(v, 7).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (co.onSubmit() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(8192, null, 0, import3.ɵbf, [], null, null),
        import0.ɵdid(8192, [
            [
                1,
                4
            ],
            [
                'form',
                4
            ]
        ], 0, import3.NgForm, [
            [
                8,
                null
            ],
            [
                8,
                null
            ]
        ], null, { ngSubmit: 'ngSubmit' }),
        import0.ɵprd(1024, null, import3.ControlContainer, null, [import3.NgForm]),
        import0.ɵdid(8192, null, 0, import3.NgControlStatusGroup, [import3.ControlContainer], null, null),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqDisplayComponent_8)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵeld(0, null, null, 19, 'ul', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n				'])),
        (l()(), import0.ɵeld(0, null, null, 16, 'li', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n					'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [[
                'for',
                'discussion'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Discussion'])),
        (l()(), import0.ɵted(null, ['\n					'])),
        (l()(), import0.ɵeld(0, null, null, 7, 'textarea', [
            [
                'id',
                'discussion'
            ],
            [
                'name',
                'discussion'
            ],
            [
                'required',
                ''
            ],
            [
                'type',
                'text'
            ]
        ], [
            [
                1,
                'required',
                0
            ],
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('input' === en)) {
                var pd_0 = (import0.ɵnov(v, 22)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 22).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 22)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 22)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.model.discussion = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(8192, null, 0, import3.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import3.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵdid(8192, null, 0, import3.RequiredValidator, [], { required: [
                0,
                'required'
            ]
        }, null),
        import0.ɵprd(512, null, import3.NG_VALIDATORS, function (p0_0) {
            return [p0_0];
        }, [import3.RequiredValidator]),
        import0.ɵprd(512, null, import3.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import3.DefaultValueAccessor]),
        import0.ɵdid(335872, [[
                'discussion',
                4
            ]
        ], 0, import3.NgModel, [
            [
                2,
                import3.ControlContainer
            ],
            [
                2,
                import3.NG_VALIDATORS
            ],
            [
                8,
                null
            ],
            [
                2,
                import3.NG_VALUE_ACCESSOR
            ]
        ], {
            name: [
                0,
                'name'
            ],
            model: [
                1,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        import0.ɵprd(1024, null, import3.NgControl, null, [import3.NgModel]),
        import0.ɵdid(8192, null, 0, import3.NgControlStatus, [import3.NgControl], null, null),
        (l()(), import0.ɵted(null, ['\n					'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqDisplayComponent_9)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n				'])),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵeld(0, null, null, 4, 'menu', [[
                'class',
                'bottom'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n				'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [
            [
                'class',
                'btn btn-submit'
            ],
            [
                'type',
                'submit'
            ]
        ], [[
                8,
                'disabled',
                0
            ]
        ], null, null, null, null)),
        (l()(), import0.ɵted(null, ['abschicken'])),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵted(null, ['\n	']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_7 = !co.auth.admin;
        ck(v, 12, 0, currVal_7);
        var currVal_16 = '';
        ck(v, 23, 0, currVal_16);
        var currVal_17 = 'discussion';
        var currVal_18 = co.model.discussion;
        ck(v, 26, 0, currVal_17, currVal_18);
        var currVal_19 = co.formErrors.code;
        ck(v, 31, 0, currVal_19);
    }, function (ck, v) {
        var currVal_0 = import0.ɵnov(v, 9).ngClassUntouched;
        var currVal_1 = import0.ɵnov(v, 9).ngClassTouched;
        var currVal_2 = import0.ɵnov(v, 9).ngClassPristine;
        var currVal_3 = import0.ɵnov(v, 9).ngClassDirty;
        var currVal_4 = import0.ɵnov(v, 9).ngClassValid;
        var currVal_5 = import0.ɵnov(v, 9).ngClassInvalid;
        var currVal_6 = import0.ɵnov(v, 9).ngClassPending;
        ck(v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = (import0.ɵnov(v, 23).required ? '' : null);
        var currVal_9 = import0.ɵnov(v, 28).ngClassUntouched;
        var currVal_10 = import0.ɵnov(v, 28).ngClassTouched;
        var currVal_11 = import0.ɵnov(v, 28).ngClassPristine;
        var currVal_12 = import0.ɵnov(v, 28).ngClassDirty;
        var currVal_13 = import0.ɵnov(v, 28).ngClassValid;
        var currVal_14 = import0.ɵnov(v, 28).ngClassInvalid;
        var currVal_15 = import0.ɵnov(v, 28).ngClassPending;
        ck(v, 21, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);
        var currVal_20 = !import0.ɵnov(v, 7).form.valid;
        ck(v, 37, 0, currVal_20);
    });
}
function View_McqDisplayComponent_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 39, null, null, null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n	'])),
        (l()(), import0.ɵeld(0, null, null, 21, 'menu', [[
                'class',
                'top'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqDisplayComponent_2)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'output', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '\n			',
            '\n		'
        ])),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqDisplayComponent_3)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqDisplayComponent_4)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵeld(0, null, null, 3, 'a', [[
                'class',
                'btn btn-edit'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (import0.ɵnov(v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(335872, null, 0, import1.RouterLinkWithHref, [
            import1.Router,
            import1.ActivatedRoute,
            import2.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        import0.ɵpad(3),
        (l()(), import0.ɵted(null, ['bearbeiten'])),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqDisplayComponent_5)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n	'])),
        (l()(), import0.ɵted(null, ['\n	'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n	'])),
        (l()(), import0.ɵeld(0, null, null, 4, 'ol', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqDisplayComponent_6)),
        import0.ɵdid(401408, null, 0, import2.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n	'])),
        (l()(), import0.ɵted(null, ['\n	'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            'Die richtige Lösung ist: ',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n	'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqDisplayComponent_7)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = (co.item.rated != 0);
        ck(v, 5, 0, currVal_0);
        var currVal_2 = (co.item.rated != 1);
        ck(v, 11, 0, currVal_2);
        var currVal_3 = !co.discussion;
        ck(v, 14, 0, currVal_3);
        var currVal_6 = ck(v, 18, 0, '/mcq/edit', co.item.id, 'current');
        ck(v, 17, 0, currVal_6);
        var currVal_7 = co.auth.admin;
        ck(v, 22, 0, currVal_7);
        var currVal_9 = co.item.answers;
        ck(v, 31, 0, currVal_9);
        var currVal_11 = co.discussion;
        ck(v, 38, 0, currVal_11);
    }, function (ck, v) {
        var co = v.component;
        var currVal_1 = co.item.rating;
        ck(v, 8, 0, currVal_1);
        var currVal_4 = import0.ɵnov(v, 17).target;
        var currVal_5 = import0.ɵnov(v, 17).href;
        ck(v, 16, 0, currVal_4, currVal_5);
        var currVal_8 = co.item.question;
        ck(v, 26, 0, currVal_8);
        var currVal_10 = (co.item.solution + 1);
        ck(v, 35, 0, currVal_10);
    });
}
export function View_McqDisplayComponent_0(l) {
    return import0.ɵvid(0, [
        import0.ɵqud(335544320, 1, { currentForm: 0 }),
        (l()(), import0.ɵeld(0, null, null, 1, 'text-view', [], null, null, null, import4.View_TextViewComponent_0, import4.RenderType_TextViewComponent)),
        import0.ɵdid(57344, null, 0, import5.TextViewComponent, [
            import1.ActivatedRoute,
            import6.OlmService,
            import1.Router
        ], null, null),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqDisplayComponent_1)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        ck(v, 2, 0);
        var currVal_0 = co.item;
        ck(v, 5, 0, currVal_0);
    }, null);
}
function View_McqDisplayComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'mcq-display', [], null, null, null, View_McqDisplayComponent_0, RenderType_McqDisplayComponent)),
        import0.ɵdid(4513792, null, 0, import7.McqDisplayComponent, [
            import6.OlmService,
            import8.AlertService
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var McqDisplayComponentNgFactory = import0.ɵccf('mcq-display', import7.McqDisplayComponent, View_McqDisplayComponent_Host_0, {
    item: 'item',
    discussion: 'discussion'
}, {}, []);
//# sourceMappingURL=mcq-display.component.ngfactory.js.map
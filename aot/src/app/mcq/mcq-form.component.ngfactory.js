/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from '@angular/forms';
import * as import2 from '@angular/common';
import * as import3 from '@angular/router';
import * as import4 from '../../../../src/app/mcq/mcq-form.component';
import * as import5 from '../../../../src/app/services/alert.service';
import * as import6 from '../../../../src/app/services/olm.service';
var styles_McqFormComponent = [];
export var RenderType_McqFormComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_McqFormComponent,
    data: {}
});
function View_McqFormComponent_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'details', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.formErrors.raw;
        ck(v, 1, 0, currVal_0);
    });
}
function View_McqFormComponent_3(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 3, 'option', [], null, null, null, null, null)),
        import0.ɵdid(73728, null, 0, import1.NgSelectOption, [
            import0.ElementRef,
            import0.Renderer,
            [
                2,
                import1.SelectControlValueAccessor
            ]
        ], { ngValue: [
                0,
                'ngValue'
            ]
        }, null),
        import0.ɵdid(73728, null, 0, import1.ɵq, [
            import0.ElementRef,
            import0.Renderer,
            [
                8,
                null
            ]
        ], { ngValue: [
                0,
                'ngValue'
            ]
        }, null),
        (l()(), import0.ɵted(null, [
            '\n					',
            '\n				'
        ]))
    ], function (ck, v) {
        var currVal_0 = v.context.$implicit.id;
        ck(v, 1, 0, currVal_0);
        var currVal_1 = v.context.$implicit.id;
        ck(v, 2, 0, currVal_1);
    }, function (ck, v) {
        var currVal_2 = v.context.$implicit.name;
        ck(v, 3, 0, currVal_2);
    });
}
function View_McqFormComponent_4(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'details', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.formErrors.generation;
        ck(v, 1, 0, currVal_0);
    });
}
function View_McqFormComponent_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 20, 'li', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [[
                'for',
                'generation'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Generation'])),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵeld(0, null, null, 11, 'select', [
            [
                'id',
                'generation'
            ],
            [
                'name',
                'generation'
            ],
            [
                'required',
                ''
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
                'change'
            ],
            [
                null,
                'blur'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('change' === en)) {
                var pd_0 = (import0.ɵnov(v, 6).onChange($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 6).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_2 = ((co.model.generation = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(8192, null, 0, import1.SelectControlValueAccessor, [
            import0.Renderer,
            import0.ElementRef
        ], null, null),
        import0.ɵdid(8192, null, 0, import1.RequiredValidator, [], { required: [
                0,
                'required'
            ]
        }, null),
        import0.ɵprd(512, null, import1.NG_VALIDATORS, function (p0_0) {
            return [p0_0];
        }, [import1.RequiredValidator]),
        import0.ɵprd(512, null, import1.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import1.SelectControlValueAccessor]),
        import0.ɵdid(335872, [[
                'generation',
                4
            ]
        ], 0, import1.NgModel, [
            [
                2,
                import1.ControlContainer
            ],
            [
                2,
                import1.NG_VALIDATORS
            ],
            [
                8,
                null
            ],
            [
                2,
                import1.NG_VALUE_ACCESSOR
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
        import0.ɵprd(1024, null, import1.NgControl, null, [import1.NgModel]),
        import0.ɵdid(8192, null, 0, import1.NgControlStatus, [import1.NgControl], null, null),
        (l()(), import0.ɵted(null, ['\n				'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqFormComponent_3)),
        import0.ɵdid(401408, null, 0, import2.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqFormComponent_4)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n		']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_8 = '';
        ck(v, 7, 0, currVal_8);
        var currVal_9 = 'generation';
        var currVal_10 = co.model.generation;
        ck(v, 10, 0, currVal_9, currVal_10);
        var currVal_11 = co.generationCats;
        ck(v, 15, 0, currVal_11);
        var currVal_12 = co.formErrors.generation;
        ck(v, 19, 0, currVal_12);
    }, function (ck, v) {
        var currVal_0 = (import0.ɵnov(v, 7).required ? '' : null);
        var currVal_1 = import0.ɵnov(v, 12).ngClassUntouched;
        var currVal_2 = import0.ɵnov(v, 12).ngClassTouched;
        var currVal_3 = import0.ɵnov(v, 12).ngClassPristine;
        var currVal_4 = import0.ɵnov(v, 12).ngClassDirty;
        var currVal_5 = import0.ɵnov(v, 12).ngClassValid;
        var currVal_6 = import0.ɵnov(v, 12).ngClassInvalid;
        var currVal_7 = import0.ɵnov(v, 12).ngClassPending;
        ck(v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
    });
}
function View_McqFormComponent_6(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 3, 'option', [], null, null, null, null, null)),
        import0.ɵdid(73728, null, 0, import1.NgSelectOption, [
            import0.ElementRef,
            import0.Renderer,
            [
                2,
                import1.SelectControlValueAccessor
            ]
        ], { ngValue: [
                0,
                'ngValue'
            ]
        }, null),
        import0.ɵdid(73728, null, 0, import1.ɵq, [
            import0.ElementRef,
            import0.Renderer,
            [
                8,
                null
            ]
        ], { ngValue: [
                0,
                'ngValue'
            ]
        }, null),
        (l()(), import0.ɵted(null, [
            '\n					',
            '\n				'
        ]))
    ], function (ck, v) {
        var currVal_0 = v.context.$implicit.value;
        ck(v, 1, 0, currVal_0);
        var currVal_1 = v.context.$implicit.value;
        ck(v, 2, 0, currVal_1);
    }, function (ck, v) {
        var currVal_2 = v.context.$implicit.label;
        ck(v, 3, 0, currVal_2);
    });
}
function View_McqFormComponent_7(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'details', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.formErrors.original;
        ck(v, 1, 0, currVal_0);
    });
}
function View_McqFormComponent_5(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 20, 'li', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [[
                'for',
                'original'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Prüfungsfrage'])),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵeld(0, null, null, 11, 'select', [
            [
                'id',
                'original'
            ],
            [
                'name',
                'original'
            ],
            [
                'required',
                ''
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
                'change'
            ],
            [
                null,
                'blur'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('change' === en)) {
                var pd_0 = (import0.ɵnov(v, 6).onChange($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 6).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_2 = ((co.model.original = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(8192, null, 0, import1.SelectControlValueAccessor, [
            import0.Renderer,
            import0.ElementRef
        ], null, null),
        import0.ɵdid(8192, null, 0, import1.RequiredValidator, [], { required: [
                0,
                'required'
            ]
        }, null),
        import0.ɵprd(512, null, import1.NG_VALIDATORS, function (p0_0) {
            return [p0_0];
        }, [import1.RequiredValidator]),
        import0.ɵprd(512, null, import1.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import1.SelectControlValueAccessor]),
        import0.ɵdid(335872, [[
                'original',
                4
            ]
        ], 0, import1.NgModel, [
            [
                2,
                import1.ControlContainer
            ],
            [
                2,
                import1.NG_VALIDATORS
            ],
            [
                8,
                null
            ],
            [
                2,
                import1.NG_VALUE_ACCESSOR
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
        import0.ɵprd(1024, null, import1.NgControl, null, [import1.NgModel]),
        import0.ɵdid(8192, null, 0, import1.NgControlStatus, [import1.NgControl], null, null),
        (l()(), import0.ɵted(null, ['\n				'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqFormComponent_6)),
        import0.ɵdid(401408, null, 0, import2.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqFormComponent_7)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n		']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_8 = '';
        ck(v, 7, 0, currVal_8);
        var currVal_9 = 'original';
        var currVal_10 = co.model.original;
        ck(v, 10, 0, currVal_9, currVal_10);
        var currVal_11 = co.originalCats;
        ck(v, 15, 0, currVal_11);
        var currVal_12 = co.formErrors.original;
        ck(v, 19, 0, currVal_12);
    }, function (ck, v) {
        var currVal_0 = (import0.ɵnov(v, 7).required ? '' : null);
        var currVal_1 = import0.ɵnov(v, 12).ngClassUntouched;
        var currVal_2 = import0.ɵnov(v, 12).ngClassTouched;
        var currVal_3 = import0.ɵnov(v, 12).ngClassPristine;
        var currVal_4 = import0.ɵnov(v, 12).ngClassDirty;
        var currVal_5 = import0.ɵnov(v, 12).ngClassValid;
        var currVal_6 = import0.ɵnov(v, 12).ngClassInvalid;
        var currVal_7 = import0.ɵnov(v, 12).ngClassPending;
        ck(v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
    });
}
function View_McqFormComponent_9(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'details', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.formErrors.discussion;
        ck(v, 1, 0, currVal_0);
    });
}
function View_McqFormComponent_8(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 15, 'li', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [[
                'for',
                'discussion'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Discussion'])),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵeld(0, null, null, 6, 'textarea', [
            [
                'id',
                'discussion'
            ],
            [
                'name',
                'discussion'
            ],
            [
                'type',
                'text'
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
                var pd_0 = (import0.ɵnov(v, 6)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 6).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 6)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 6)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.model.discussion = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(8192, null, 0, import1.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import1.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵprd(512, null, import1.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import1.DefaultValueAccessor]),
        import0.ɵdid(335872, [[
                'discussion',
                4
            ]
        ], 0, import1.NgModel, [
            [
                2,
                import1.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import1.NG_VALUE_ACCESSOR
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
        import0.ɵprd(1024, null, import1.NgControl, null, [import1.NgModel]),
        import0.ɵdid(8192, null, 0, import1.NgControlStatus, [import1.NgControl], null, null),
        (l()(), import0.ɵted(null, ['			'])),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqFormComponent_9)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n		']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_7 = 'discussion';
        var currVal_8 = co.model.discussion;
        ck(v, 8, 0, currVal_7, currVal_8);
        var currVal_9 = co.formErrors.discussion;
        ck(v, 14, 0, currVal_9);
    }, function (ck, v) {
        var currVal_0 = import0.ɵnov(v, 10).ngClassUntouched;
        var currVal_1 = import0.ɵnov(v, 10).ngClassTouched;
        var currVal_2 = import0.ɵnov(v, 10).ngClassPristine;
        var currVal_3 = import0.ɵnov(v, 10).ngClassDirty;
        var currVal_4 = import0.ɵnov(v, 10).ngClassValid;
        var currVal_5 = import0.ɵnov(v, 10).ngClassInvalid;
        var currVal_6 = import0.ɵnov(v, 10).ngClassPending;
        ck(v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
    });
}
function View_McqFormComponent_10(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 2, 'a', [
            [
                'class',
                'btn btn-back'
            ],
            [
                'routerLink',
                '/dashboard'
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
        import0.ɵdid(335872, null, 0, import3.RouterLinkWithHref, [
            import3.Router,
            import3.ActivatedRoute,
            import2.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['zurück']))
    ], function (ck, v) {
        var currVal_2 = '/dashboard';
        ck(v, 1, 0, currVal_2);
    }, function (ck, v) {
        var currVal_0 = import0.ɵnov(v, 1).target;
        var currVal_1 = import0.ɵnov(v, 1).href;
        ck(v, 0, 0, currVal_0, currVal_1);
    });
}
function View_McqFormComponent_11(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.back() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['zurück']))
    ], null, null);
}
function View_McqFormComponent_12(l) {
    return import0.ɵvid(0, [
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
                var pd_0 = (import0.ɵnov(v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(335872, null, 0, import3.RouterLinkWithHref, [
            import3.Router,
            import3.ActivatedRoute,
            import2.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        import0.ɵpad(2),
        (l()(), import0.ɵted(null, ['Frage löschen']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_2 = ck(v, 2, 0, '/mcq/delete/', co.model.id);
        ck(v, 1, 0, currVal_2);
    }, function (ck, v) {
        var currVal_0 = import0.ɵnov(v, 1).target;
        var currVal_1 = import0.ɵnov(v, 1).href;
        ck(v, 0, 0, currVal_0, currVal_1);
    });
}
export function View_McqFormComponent_0(l) {
    return import0.ɵvid(0, [
        import0.ɵqud(201326592, 1, { currentForm: 0 }),
        (l()(), import0.ɵeld(0, null, null, 51, 'form', [[
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
                var pd_0 = (import0.ɵnov(v, 3).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (import0.ɵnov(v, 3).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (co.parent.onSubmit() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(8192, null, 0, import1.ɵbf, [], null, null),
        import0.ɵdid(8192, [
            [
                1,
                4
            ],
            [
                'form',
                4
            ]
        ], 0, import1.NgForm, [
            [
                8,
                null
            ],
            [
                8,
                null
            ]
        ], null, { ngSubmit: 'ngSubmit' }),
        import0.ɵprd(1024, null, import1.ControlContainer, null, [import1.NgForm]),
        import0.ɵdid(8192, null, 0, import1.NgControlStatusGroup, [import1.ControlContainer], null, null),
        (l()(), import0.ɵted(null, ['\n	'])),
        (l()(), import0.ɵeld(0, null, null, 29, 'ul', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵeld(0, null, null, 17, 'li', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [[
                'for',
                'raw'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Name'])),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵeld(0, null, null, 8, 'textarea', [
            [
                'id',
                'raw'
            ],
            [
                'name',
                'raw'
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
                var pd_0 = (import0.ɵnov(v, 15)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 15).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 15)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 15)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.model.raw = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(8192, null, 0, import1.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import1.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵdid(8192, null, 0, import1.RequiredValidator, [], { required: [
                0,
                'required'
            ]
        }, null),
        import0.ɵprd(512, null, import1.NG_VALIDATORS, function (p0_0) {
            return [p0_0];
        }, [import1.RequiredValidator]),
        import0.ɵprd(512, null, import1.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import1.DefaultValueAccessor]),
        import0.ɵdid(335872, [[
                'raw',
                4
            ]
        ], 0, import1.NgModel, [
            [
                2,
                import1.ControlContainer
            ],
            [
                2,
                import1.NG_VALIDATORS
            ],
            [
                8,
                null
            ],
            [
                2,
                import1.NG_VALUE_ACCESSOR
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
        import0.ɵprd(1024, null, import1.NgControl, null, [import1.NgModel]),
        import0.ɵdid(8192, null, 0, import1.NgControlStatus, [import1.NgControl], null, null),
        (l()(), import0.ɵted(null, ['			'])),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqFormComponent_1)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqFormComponent_2)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqFormComponent_5)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqFormComponent_8)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n	'])),
        (l()(), import0.ɵted(null, ['\n\n	'])),
        (l()(), import0.ɵeld(0, null, null, 13, 'menu', [[
                'class',
                'bottom'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqFormComponent_10)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['	\n		'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqFormComponent_11)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n		'])),
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
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_McqFormComponent_12)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n	'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_15 = '';
        ck(v, 16, 0, currVal_15);
        var currVal_16 = 'raw';
        var currVal_17 = co.model.raw;
        ck(v, 19, 0, currVal_16, currVal_17);
        var currVal_18 = co.formErrors.raw;
        ck(v, 25, 0, currVal_18);
        var currVal_19 = ((co.model == null) ? null : co.model.generation);
        ck(v, 29, 0, currVal_19);
        var currVal_20 = ((co.model == null) ? null : co.model.original);
        ck(v, 32, 0, currVal_20);
        var currVal_21 = co.parent.auth.admin;
        ck(v, 35, 0, currVal_21);
        var currVal_22 = !co.model.id;
        ck(v, 41, 0, currVal_22);
        var currVal_23 = co.model.id;
        ck(v, 44, 0, currVal_23);
        var currVal_26 = co.model.id;
        ck(v, 50, 0, currVal_26);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = import0.ɵnov(v, 5).ngClassUntouched;
        var currVal_1 = import0.ɵnov(v, 5).ngClassTouched;
        var currVal_2 = import0.ɵnov(v, 5).ngClassPristine;
        var currVal_3 = import0.ɵnov(v, 5).ngClassDirty;
        var currVal_4 = import0.ɵnov(v, 5).ngClassValid;
        var currVal_5 = import0.ɵnov(v, 5).ngClassInvalid;
        var currVal_6 = import0.ɵnov(v, 5).ngClassPending;
        ck(v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = (import0.ɵnov(v, 16).required ? '' : null);
        var currVal_8 = import0.ɵnov(v, 21).ngClassUntouched;
        var currVal_9 = import0.ɵnov(v, 21).ngClassTouched;
        var currVal_10 = import0.ɵnov(v, 21).ngClassPristine;
        var currVal_11 = import0.ɵnov(v, 21).ngClassDirty;
        var currVal_12 = import0.ɵnov(v, 21).ngClassValid;
        var currVal_13 = import0.ɵnov(v, 21).ngClassInvalid;
        var currVal_14 = import0.ɵnov(v, 21).ngClassPending;
        ck(v, 14, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
        var currVal_24 = !import0.ɵnov(v, 3).form.valid;
        ck(v, 46, 0, currVal_24);
        var currVal_25 = co.submitLabel;
        ck(v, 47, 0, currVal_25);
    });
}
function View_McqFormComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'mcq-form', [], null, null, null, View_McqFormComponent_0, RenderType_McqFormComponent)),
        import0.ɵdid(4251648, null, 0, import4.McqFormComponent, [
            import5.AlertService,
            import6.OlmService,
            import2.Location
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var McqFormComponentNgFactory = import0.ɵccf('mcq-form', import4.McqFormComponent, View_McqFormComponent_Host_0, {
    model: 'model',
    parent: 'parent',
    submitLabel: 'submitLabel'
}, {}, []);
//# sourceMappingURL=mcq-form.component.ngfactory.js.map
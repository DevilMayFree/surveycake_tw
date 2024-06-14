(this.webpackJsonpsurvey = this.webpackJsonpsurvey || []).push([[0], {
    104: function (t, e, n) {
        "use strict";
        n.d(e, "b", (function () {
            return s
        })), n.d(e, "a", (function () {
            return l
        })), n.d(e, "c", (function () {
            return d
        }));
        var r = n(32), a = n(11), c = n(433), o = n.n(c);

        function i(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        var u = function () {
            var t, e, n = window.location.pathname, c = [{
                label: "tempAnswer",
                pattern: "^(?:".concat(a.e, ")?/s/([^/]+?)/a/([^/]+?)(?:/)?$")
            }, {label: "referral", pattern: "^(?:".concat(a.e, ")?/s/([^/]+?)/f/([^/]+?)(?:/)?$")}, {
                label: "none",
                pattern: "^(?:".concat(a.e, ")?/s/([^/]+?)(?:/)?$")
            }].map((function (t) {
                return function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? i(n, !0).forEach((function (e) {
                            Object(r.a)(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(n).forEach((function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({}, t, {pattern: (e = t.pattern, new RegExp(e, "i"))});
                var e
            }));
            return o()(c, (function (r) {
                var a = r.label, c = r.pattern.exec(n);
                if (c) return t = a, e = c, !1
            })), {
                surveyHash: e && e[1] ? e[1] : "",
                tempAnswerHash: "tempAnswer" === t && e && e[2] ? e[2] : void 0,
                referral: "referral" === t && e && e[2] ? e[2] : void 0
            }
        }(), s = u.surveyHash, l = u.referral, d = u.tempAnswerHash
    }, 11: function (t, e, n) {
        "use strict";
        n.d(e, "J", (function () {
            return o
        })), n.d(e, "A", (function () {
            return u
        })), n.d(e, "t", (function () {
            return l
        })), n.d(e, "c", (function () {
            return d
        })), n.d(e, "u", (function () {
            return p
        })), n.d(e, "i", (function () {
            return m
        })), n.d(e, "s", (function () {
            return f
        })), n.d(e, "b", (function () {
            return b
        })), n.d(e, "k", (function () {
            return v
        })), n.d(e, "D", (function () {
            return g
        })), n.d(e, "x", (function () {
            return h
        })), n.d(e, "F", (function () {
            return O
        })), n.d(e, "v", (function () {
            return y
        })), n.d(e, "a", (function () {
            return j
        })), n.d(e, "E", (function () {
            return x
        })), n.d(e, "I", (function () {
            return w
        })), n.d(e, "o", (function () {
            return E
        })), n.d(e, "m", (function () {
            return k
        })), n.d(e, "d", (function () {
            return N
        })), n.d(e, "l", (function () {
            return S
        })), n.d(e, "C", (function () {
            return C
        })), n.d(e, "n", (function () {
            return A
        })), n.d(e, "G", (function () {
            return I
        })), n.d(e, "p", (function () {
            return D
        })), n.d(e, "g", (function () {
            return _
        })), n.d(e, "r", (function () {
            return T
        })), n.d(e, "h", (function () {
            return L
        })), n.d(e, "y", (function () {
            return P
        })), n.d(e, "z", (function () {
            return R
        })), n.d(e, "B", (function () {
            return U
        })), n.d(e, "e", (function () {
            return z
        })), n.d(e, "f", (function () {
            return H
        })), n.d(e, "j", (function () {
            return V
        })), n.d(e, "w", (function () {
            return W
        })), n.d(e, "H", (function () {
            return $
        })), n.d(e, "q", (function () {
            return tt
        }));
        var r = n(432), a = n(59),
            c = JSON.parse('{"amazon":{"fileuploadBucket":"surveycake-s3.surveycakecdn.com","fileuploadFolder":"temp/","fileuploadRegion":"us-west-2"},"config":{"activeDirectoryAutoLoginEnable":false,"adLoginGoogleRecaptchaKey":"","amplitude":"03411bba6dd564bcb61fec485d08336a","amplitudeSurvey":"e74c4aaf9d9511bdbc62e3a89989a5db","backstageThirdPartyAuthTokenUrl":"","calcModeVerifyUrl":"https://www.surveycake.com/calc/v1/verify","customizedFontFamily":[],"defaultLanguage":"tw","enableAdLoginGoogleRecaptcha":false,"enableDefaultThankYouMessage":true,"enableHiddenIndexLogo":false,"enableLogoLink":true,"enableSurveyFinishedInfo":true,"enableThirdPartyLogin":false,"enterpriseSurveyTitle":" \xbb SurveyCake Enterprise","externalNetDisabled":false,"facebookAppVersion":"v6.0","fileuploadEnable":true,"ga":"G-5BK2E0R7JC","googleRecaptchaKey":"6Lfa-WUUAAAAAHizu95xzDXSRvQoobuoi4ZkMvFx","gtm":"GTM-PSDKGNF","hiddenSubmitEnable":false,"languageWhitelist":["tw","en","ja","zh-hans","th"],"nestedDropdownGeneralSource":false,"nestedDropdownGeneralUrl":"/s3/json/nested_dropdown/general.json","remoteBucket":"https://www.surveycake.com/s3","remoteCdn":"https://www.surveycake.com/s3","submitWithPreviewObj":true,"surveyLoginFacebookAppId":"","surveyLoginFacebookAppSecret":"","surveyLoginType":"","tempAnswerEnable":false,"useSurveyDefaultBanner":true,"userLoginEnable":false},"server":{"api":"https://www.surveycake.com","apiPath":"/api","baseURL":"","leadgenApi":"https://leadgen.surveycake.com/backstage","main":"https://www.surveycake.com","opensslCipherAlgo":"AES-128-CBC","shortUrlPrefix":"https://s3-us-west-2.amazonaws.com/shorten.surveycake/u"},"website":"https://www.surveycake.com/?utm_source=s&utm_medium=logo&utm_content=logolink&utm_campaign=exposed"}'),
            o = c.website, i = c.config, u = i.remoteBucket, s = i.remoteCdn, l = (i.externalNetDisabled, i.ga),
            d = (i.gtm, i.amplitudeSurvey), p = i.googleRecaptchaKey, m = (i.fileuploadEnable, i.defaultLanguage),
            f = i.facebookAppVersion, b = i.adLoginGoogleRecaptchaKey, v = i.enableAdLoginGoogleRecaptcha,
            g = i.surveyLoginFacebookAppId, h = (i.surveyLoginFacebookAppSecret, i.languageWhitelist),
            O = i.tempAnswerEnable, y = i.hiddenSubmitEnable, j = i.activeDirectoryAutoLoginEnable,
            x = i.surveyLoginType, w = i.userLoginEnable, E = i.enableLogoLink, k = i.enableDefaultThankYouMessage,
            N = i.backstageThirdPartyAuthTokenUrl, S = i.enableThirdPartyLogin, C = i.submitWithPreviewObj,
            A = i.enableHiddenIndexLogo, I = i.useSurveyDefaultBanner, D = i.enableSurveyFinishedInfo,
            _ = i.calcModeVerifyUrl, T = i.enterpriseSurveyTitle, L = i.customizedFontFamily,
            P = i.nestedDropdownGeneralSource, R = i.nestedDropdownGeneralUrl, M = c.server, F = M.shortUrlPrefix,
            U = M.api, z = M.baseURL, G = M.api, B = M.apiPath, Y = M.main, H = (M.leadgenApi, "production"), V = {
                api: a.a ? B : "".concat(G).concat(B),
                assets: a.a ? "/assets" : "".concat(Y, "/assets"),
                server: Y,
                file: u || (a.a ? "/s3" : "".concat(c.server.main, "/s3")),
                image: u ? s || u : a.a ? "/s3" : "".concat(Y, "/s3"),
                shorten: F,
                leadgen: a.a ? "https://staging.svy.do/leadgen/admin" : "".concat(c.server.api, "/leadgen/admin"),
                calc: a.a ? "/calc/v1/verify" : c.config.calcModeVerifyUrl
            }, W = function () {
                try {
                    return window.self !== window.top
                } catch (t) {
                    return !0
                }
            }(), J = new r.UAParser, Z = ["mobile", "tablet"].includes(J.getDevice().type),
            q = null !== navigator.userAgent.match(/(iPad|iPhone)/i),
            X = null !== navigator.userAgent.match(/Firefox/i), Q = null !== navigator.userAgent.match(/MSIE|rv:11.0/i);
        var K = function () {
            if (q) {
                var t = function () {
                    var t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                    return null !== t && [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3] || "0", 10)]
                }();
                if (!t) return !1;
                if (t[0] <= 12) return !0
            }
            return !1
        }(), $ = {isMobile: Z, isIOS: q, isFirefox: X, isIE: Q, isIOSVersionBelow12: K}, tt = {
            is: H.startsWith("enterprise") || H.startsWith("chief"), name: function () {
                var t = /^(enterprise|chief)-(.*)$/.exec(H);
                return t ? t[2] : null
            }()
        }
    }, 14: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return d
        })), n.d(e, "b", (function () {
            return p
        }));
        var r = n(32), a = n(56), c = n(11), o = n(111);

        function i(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        var u = function (t) {
            return t.startsWith(c.j.file) || t.startsWith(c.j.assets) || t.startsWith(c.j.leadgen) || t.startsWith(c.j.shorten) ? "omit" : "include"
        }, s = function (t) {
            return function (e, n) {
                return fetch(e, function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? i(n, !0).forEach((function (e) {
                            Object(r.a)(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(n).forEach((function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({}, n, {method: t, credentials: u(e)}))
            }
        }, l = function (t) {
            return function (e) {
                return "".concat(c.j[t]).concat(e)
            }
        }, d = {
            handleResponse: a.c, url: {
                api: function (t, e) {
                    return "".concat(c.j.api, "/v").concat(e).concat(t)
                }, assets: l("assets"), file: l("file"), shorten: l("shorten"), calc: l("calc"), leadgen: l("leadgen")
            }, query: o.stringify, get: s("GET"), post: s("POST"), delete: s("DELETE"), head: s("HEAD")
        }, p = function (t) {
            var e = t;
            if (c.H.isIE) {
                var n = Object(o.stringify)({t: (new Date).getTime()});
                e = "".concat(e, "&").concat(n)
            }
            return e
        }
    }, 140: function (t, e, n) {
        t.exports = n.p + "static/media/error.d5d84bc9.png"
    }, 152: function (t, e, n) {
        "use strict";
        var r = n(0), a = n.n(r), c = n(527), o = n.n(c), i = n(18), u = n(11), s = n(26), l = n(57), d = n(4),
            p = n(528), m = n.n(p),
            f = Object(d.a)("\n\t:lang(ar){\n\t\ttransform: scaleX(-1);\n\t\tdirection: rtl;\n\t}\n\tdisplay: inline-block;\n\tuser-select: ".concat(u.o ? "auto" : "none", ";\n\twidth: 90px;\n\theight: 90px;\n\tbackground-image: url('").concat(m.a, "');\n\tbackground-position: 0 -90px;\n\tbackground-size: 100% auto;\n\tvertical-align: middle;\n"));
        n.d(e, "b", (function () {
            return b
        }));
        var b = function (t, e) {
            var n = t.indexOf("?"), r = "undefined" !== typeof e && "tw" !== e.toLowerCase() ? e.toLowerCase() : "";
            return -1 === n ? "".concat(t, "/").concat(r, "/") : "".concat(t.slice(0, n)).concat(r).concat(t.slice(n))
        };
        e.a = function () {
            var t = l.PageService.usePage().page, e = s.b.useException(), n = Object(i.c)().data;
            if (!e && o()(t, "index") && u.n) return null;
            var r = u.q.is ? "" : "SurveyCake \u5354\u52a9\u4f60\u5efa\u7acb\u5c08\u696d\u3001\u53cb\u5584\u7684\u7dda\u4e0a\u554f\u5377",
                c = u.q.is ? u.J : b(u.J, n.language);
            return a.a.createElement("a", {
                className: f,
                target: "_blank",
                title: r,
                href: u.o ? c : void 0,
                "aria-label": "logo",
                "data-qa": "logo-link",
                rel: "noopener noreferrer"
            })
        }
    }, 156: function (t, e, n) {
        "use strict";
        n.d(e, "b", (function () {
            return c
        })), n.d(e, "a", (function () {
            return o
        })), n.d(e, "c", (function () {
            return i
        }));
        var r = n(4), a = n(2),
            c = Object(r.a)("\n\t&:not(:empty) {\n\t\tmargin-bottom: 16px;\n\t}\n\t:lang(ar){\n\t\ttransform: scaleX(-1);\n\t\tdirection: rtl;\n\t}\n\t& > div {\n\t\tmargin-right: 8px;\n\t}\n"),
            o = Object(r.a)("\n\tdisplay: inline-block;\n\tline-height: 28px;\n\tmargin: 0 10px 8px 0;\n"),
            i = Object(a.y)([["inportantInfo", function (t) {
                return "\n\t\t  color: ".concat(t.color.semantic.error, ";\n\t  ")
            }]])
    }, 160: function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAH1WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTctMDItMDdUMTY6MjY6NTArMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTExLTI2VDE0OjUxOjU5KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTExLTI2VDE0OjUxOjU5KzA4OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjc0YzkzLWM1ZjktNDUzMS05YmViLTk2ZmNhMjRhODg2MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4M0UwODBGQUU1MzMxMUU2OTc0Q0FCODgwOEFDOTFDOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjgzRTA4MEZBRTUzMzExRTY5NzRDQUI4ODA4QUM5MUM5IiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB0aWZmOk9yaWVudGF0aW9uPSIxIiB0aWZmOlhSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgZXhpZjpDb2xvclNwYWNlPSI2NTUzNSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjE4MCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjE0OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgzRTA4MEY3RTUzMzExRTY5NzRDQUI4ODA4QUM5MUM5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgzRTA4MEY4RTUzMzExRTY5NzRDQUI4ODA4QUM5MUM5Ii8+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmI1ZjYwZmNjLTZmNzktNDAwNS1hYzExLTYzNjljMDY4ZjdkNSIgc3RFdnQ6d2hlbj0iMjAxNy0wMi0wN1QxNjo1MDoyMyswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjc0YzkzLWM1ZjktNDUzMS05YmViLTk2ZmNhMjRhODg2MCIgc3RFdnQ6d2hlbj0iMjAxOC0xMS0yNlQxNDo1MTo1OSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bvYCbgAAG+1JREFUeJztnXmQJFd95z8vj8o6+pienpmaU5rRLSSBhADhFRi0huCyFgKFMQuLw1iO2PVBmTXELjL4WLysZPmI2AJ5d8HLFQZ2WS8GBOYwNrDChkFCYqQRw4iRRnOr5ui7jqw83v7xqvqs6qrursqqyn6fiIyqrnyZ71fV33z5y/d+7/eElBKNJi4YvTZAo+kkWtCaWKEFrYkVWtCaWKEFrYkVWtCaWKEFrYkVWtCaWKEFrYkVWtCaWKEFrYkVWtCaWKEFrYkVWtCaWKEFrYkVWtCaWKEFrYkVWtCaWKEFrYkVWtCaWKEFrYkVWtCaWKEFrYkVWtCaWKEFrYkVWtCaWKEFrYkVWtCaWKEFrYkVWtCaWKEFrYkVWtCaWKEFrYkVWtCaWKEFrYkVWtCaeBHlokGy5L5eltxjsuRKWXLPypJ7ryy56cgM0MQWKSVSSoSUEiFE9yssuePAKSC1bNcPgVeItFPpuhGa2FJvmKN0OW5gpZgBXgK8K0I7NDEmSkH/BPCa7PuFCO3QxJjIBC3SzkXgvia7T0ZlhybmRL2SrCy575Yld7L2YChlyT0kS+6eSI3QxI76Q2HkggaQJTchS+6tsuReL0tuw7uELLmjsuR+Tpbci7LkPilL7m/Kktv9p1fNQNJTQbeDLLkPLGrF69t/7bVdmv6kLuh+Hlj5Fw0+y8mS+/ORW6IZGPpZ0JeafP7GSK3QDBT9LOhPNflcjyxqmtLPgv7r2racB6M2RDM4RDb0DSBL7vXAXcBOoIwabPmWSDunmpQXwDuAtwJJ4OMi7TQSuWaTM9+5EVUvhyy5d8iSW23QcyFlyf2mLLmNHgI1mrboRS/HHYDdZN+rgX+SJfd+3des2QhRRtvdBvygjaJ/ItLO+7ptz3qQhXwC9VA6Cji198O190OLig4B1iqnKrIQ11JBuV/TQKm2zQGzIpsLOml/nKl7GlH70O8F/rRFsQDYIdLORNftKeQFkAV2A7uAvbXX3cA4MAZsq71uJfoelkngIqoL8xJQqP19GhX/cgo4JbK5CxHb1Xf0RNAAsuTeCXwYuLxJkQDYI9JOoWN1FvI7gJuAq2vbVYu2RKfq6SEV4FngaG07Un8V2dxU78yKjp4JGlQsB/AW4JeB21EtIMBx4A820pMhC/ldwMuAW4Cba9uuDZg76JwCHqltDwM/Etlc1+9+UdNTQa8wpuQOAVKkneKajy3k96HiqV8OvAK4ssPmxZGjwHeAbwHfjYPL0leCXiuykL8ZNQT+JlQLrNkYh4GvAF8AHhHZXH9GrK3CwAlaFvK7gV8DfhXdCneTU8CXgM+KbO77vTamXQZG0LKQfw3wm8AbALPH5mw2ngT+Cvh0v/vdfS9oWcjfCXwQ7VL0A1VUXM2fiWzuSK+NaUTfCloW8jcBD6Ae8gYXCfTPz9opJPB54AMimzvWa2MW03eCloW8DfwBcA8xcC3KZ8vYIzbWkIU342FlLITZ+9+5Q3hAHvigyOZmem0M9CYvR1NqfccPAR8gBmIGQIIM1I/sz/lUJ6s9Nqij2MB7gMOykH91r41ZTM9b6JqL8XXUcHOfIMDcAuYwCAvCCgRTEJZaHikDSaVQIfRCUrtTGLZBUAqonK+Q3pdus5UWYI2DOabqJ4RgDvzzIJulNukp96HckJ7FnvSFyyEL+ecB30XFS/QecxjSL0I6V3GyIjlXcXHDkBHbYn86xZiYhfITUD4MhA1PIUOJN+1hDVkY9sINMKgEmMkWNx9hq/pTN3CyAs+Wysz4PknDYHcqyTWZJHb1OBR/oC6w/uJB4K0im2t91XeBngu6Fl/xI1RAUO+xs7DlTRyedfns6bNcqq5sCZ8/MsyvXLaH4fA5mP4yyA42SMKBsbs46w/x8ROnOFVemepv2LJ4+77d3DKShqkvgneuc/V3hm8DbxDZXDnqivvBh/40/SJmgKGf55IHf3n8ZEMxAzw+M8snT56BxF5wrl39fJdK8DdPwueegMfaEF76+WCN8z+biBlg1vf52LOnmPGBzEtbnzN67gA+VYti7Ak9EbQs5N8GvKYXdTfFcCgHIUGLGTxF36+VbxGk9/9OwLEJODEF3zgGFb+FAUoDreqXta2P+SXgt3pVeeSCloW8hRow6S+KD7M3leTOnTswmrhg2xIJ3nHZHgimofLT1c9XXtbKuy0EXX4Cgml+/fJ9ZB2nYZG0aXL35XsZtVB+dP9yXy1UIXKij4cu5N8IfDGyCtdC4jIYup1JOcqPp2d4ruJSDSWjtsWBdIobhtNY1adg7p8hbOImVgM4ehEeOgEz7sLnt+2FG3fA9kzz+o0kZG5DJq/nqWKVZ0tlir5P0jTZnXS4fjiN451U9QeTnf3unefDIpvLRVVZ7wL8C/nPAG+LrML1YG0FKwvmEGCorrJgAqpnQa7SnxxI+OjDMO02L/Pm58E146vXL0ywdqiuQ8Op1T8D3nmQq5y7v5gFtotsLhKD64Jebd5bt+j/XND+hNrWiinguu3w6FnwGnTrXTYKO1ZpoevIQPVg9F8vxloYDkrB24BPRFlppC10+fH7X5/MJr8aSWW9JAjhQgnmqhBKSFkwnoZ0s0nv8cSb8Z5MXP2eG6OoK3KXY+7gvTcYCeOR1O5UsuuVafoCb8ajOlE9MHTbPc92u65e9EPfLwyxOcRcrMLFEhTm4NQ0FIpwobiy5yPuKK/rLVFWGaUP/crQC+MXVlkowskpODsL54swVVYPh80wDdiagu1p2DMCl2+BbfHLPykDiTfrgQoDvj+qeqMUdCgDSXWiSmJ8wDMHuD48chaeKMDUGlejC0LVWl8owk9qc1O3puDmnXDLbrD7IgByQ4RuiHvBrUcbRrrcSJS/3ucBvFlvPhptIKn48LEfqX7mtYq5GRNl+Mfj8NnHO3O+HlEXcvlcmdCf///ORmlDlC307wGvBXYH5YDymTJW2sIasjBT5uC4IUkLXne1cjGKVdU9V11HkJJjghCqqy9pw6ij3I8BI3ADgnJAUAyaNVJfj9KeSLvt5g7eezMqXHRkiRGGwEyamCkTwzEwEoN/240j0peEXkjohgRuQOiGyHDVyJKjwIuGbrtnruu29WqkcO7gvb+Aumqb3h2EITBsA2ELjISBYatNWIPSjA8uMpBqq4u3tklPthLvEszMvhlM++bU9b98vIvmztPL3HYZf/qpY+6pv9uJXKMfLcCwDIQp1GYtvBqmAYa6GGI0d68zyEVCDWtbsGzzpfJ7NxTKJzCHD2BvvxUzsw/gAZF2frszX2J1einoPwL+MJg7iXvyK8igO2vWC0MogZtCvRc1sYva54tfxcry9WP6ipowQz9E+gsCJawl/K6/D6UqWxNv1+JNhcAavRYjuR2RGMXM7EFYS4b2A+A6kXa6PkO8V+l0HeActeSM0pvDPfNNgtlnI6l/zdSFXr8Y6iJf/LlY+rr4IhBG899VLRK56IOaKJeIsyZKQhbE2ycII4Gz/431lng1/lyknfd2255eCfoNqBxqSwiKp/EvHcKfeRpkq0B4Tbexxm5EWCmkX0IGZQhqEYbCQFgZjPROrNFrlrfGzTgq0s513bQXehdt95JGH5qZvZiZvTjSJygVkO4EoTuJ9GaQMoDQn5+/J4MyYaXZEoaaDSEMEtnbsbe/uJNnvVaW3JRIO5HMM4xa0JetuldYmJk9kFl9cCl0J6ie+07/uiqDhjCwRq7C3vFSjGRXJuBnUQnZu07Ugu6Ib2M4W0nufzNB8RTexUcJZo+z5h6TGCLMJNb4zZjpncjQR/plpD+H9MsQVJCBC4YJCIRhIxKjGMkdmEP7EGY84sZ6EeDfMczMPszMPmRYJSyeJqxcVK5KUIGgNlFCGGDYCCOBsIcQ9ghGYhhhjyLsIWRQxp84jHfx0b7z30ViFHPoMoSVUf6sXwIkovadEBaGPYSwhzGS2zCSO9To4yZmoAVdRxgJzOErMIevWPuxpkNi58uwt91KMHOMYO4kYeU8YXVmad4Nw8JwtiHMBGG5oFq7TiMMzPQezJEDmMMHMJwWU7U0K4iFoDuBsFJYW2/C2nrT/Gd10QphgrH0pwrdScLSuQXx184hrAyGPUxQLhDOnST0Zhq6Q8JKIexRDGcLRiqLkdqJmdqhWl7NutGCXgVhNk4nAGA4YxjOGPC8hvstaheGlMoFCmvB/WYCIawVF4imM+hftdsIgbBSQKrXlmwKdFibJlZoQWuiYKh1kc6gBa2JgshcWy1oTayIWtCbbB6/pkZkifiiFvTAL8GrWTM+UIiqsqgFfTDi+jS95yGRdrozi6MBUQv6a8DJiOvU9JY/jbKySAUt0k519sTTvy+lDo3bJPxnkXa+FmWFkfdyPP2lz2x/5kufMbzZvlivUdMFArcyXbl0/rdF2vn9qOvuxdD3bbMnn+HIpz/ClmtuYOv1L2Bo7/4emKHpNNPPHOXi448wd+qZUSlXywzfPXoh6FsBwsBn4sghJo8+wRV3/muGL7+yrYNlGDJz/CiTR5/Er5QIqi7U5pMlRsbI7NrD0J79pLPRLvERVMp45SJ+cZagWiX0PGQYYCYSmMk0qW1ZTCe6IPq5Myc48fX/i1dsneNFCMGu21/Fjhf+3Lrr8+ZmOPGNLxB68z2zLwE+tu4TrpNIBf3Yfe8fApYELcsw5JkHP8f4Tbey7cZbSY7vWHFc4FYonjvF7ImnmfrZT/BKjf9J5QvPMf30EQCsVJrhfVcwvP8qhvcdwM4Mb8j2oOpSnZ6kOjOJOz1Fdaa+TVKdniIMWk8OSG3LMn7DCxm/8YUIszsrQEspufDoP3Pu+99Ghu09qkgpOfu9v0eYJttf0HDaZ0suHX50sZgBbmpWtptE3UI3zOYuw5CLhx7m4qGHMRIJEkMjCNMi9D38UpHAXXuvj18uMfnUYSafOgxAYniU1I5dOKNbcbZsxXSSGJaFkXBAhqpV9T1Cz8MrzuLNzeLNTlOdm8Gbm1mXDcspXyxw+rtf48Khg+z7l7/YUVdLhiFTP/sJhYcfojKxvu7+s9/7e7ZccR328EjrwovrlpJLR368/OOr12XEBok0jcFj973/ncDHN3KOsBog/RAMgelY/ZcMZg2MHLiG8RtuYfiyKzGstbctoecxd/YEM88cZerYT/HLxQ3btOWaG9j/2rvWdMylJx/j1D882PB0t7zvQ9MbNqoNepXGYO1zpGrIIMS9VCZ0F6ZFCUNgjzhYw4OZb3rm+FPMHH8KYZqktmVJju/A2TKOnc5gJpfGT8sgwK+U8eamqU5PUr54HnfqUttuRbtMPfUkz7gue175OpzRsdbljx3hzHebJhjdB0Qi6DqDIWgJ7vnS4pzD6uNQUp2qEPohibHBnbUsg4BS4SylwtnI6gy9kLCq/H4jYWEsSrQ+c+IYM5/+CEN79jN64GrS2d0kRsYwEglkGOLNzVAqnGXyp48zd+bEatXsAg539YssYyAE7c9VV4h5+X7DMbG6tMqU9EO8GZegEoAAK21jjzgD6e7IUFKdKBOUlz7EmimLxNbUQvoyKZk7fZy50xtKHrp9Iwevh6gHVlZ2YbRB0HKdbPCmurO+Y1D2KT9XxC96yCCcF3d1cn2JgGQo2169QPphfVmHziAl7vnSCjGD+p7u+WKn8+dFLuioW+h1peVp558qg5CwGmAkOtcdFlYD3Eulhtk7/aKHNZRouz4ZhFQnK/NiEqaBsy3V9Hj3Upmg5IGA5PYMhrPx7+VNu4Re89UGQk9drIktHXPf1tZd0gEia6Efu+/9Nuv9gj26tVenKqumovWL7YV3y1BSKSxtGWUQ4l4sNzy/9EMlZgDZ+A61npa0HXuDudXLSD9c1f1bRlvZHDtJlC30urOmGAmTsMU6JkbCbNjaST/EL3qqZZIq/7OZsjFTq391GcglPSqNWK21W0xQc1dW1hESeivvKsIysLck8WddhCGwMvZ8eW/KxS97898lsTWFmWzj3yjbuwjm0/wua0RkIKleKhO46uKyhxPYrVvyyKe6Rynodd/HrLSNP9c8NKD+QLOcoOThTqxsBf2ih5m0cLalm7b+jQS4slDrIsDqd5gm++zhBPbi7kgpqZwvqT74+keBesBL7W5jFFSAmbRaPo+YycZ9+96MOy9mAG+2ij2abHX3HG1tWGcZiDmFhmNiNujBMFM2yWwGZ1t6ZXJxCdWJ5i5DUPHxS81vr8Js/dO0UwbATNtLusXqGJaBYbfnGwcVf4mY68hAzseytCKxNbVqfYZtNmwYgBULOQmzD1c4IOKFNzdysLM1he+YhF6IYRmYabvFWipyfvSouUXN9yvXxGrYI1Cn7gq0QhgCZ0cGb9pVfqyUGAkTZ7z9O3Kzr6KE1Z6yhClI7szgF70lF4iwDMykter3sTIJhGHgF6sgwR5tnlWql0Qp6I0FQAuwhtYwIijUKKI307g7T1gGZgtBJsZSVLxiw5bRGk609MOX1GcIEmNJEmNJ1hNuMD/Mv0zYVmbto6RWxm77YlxiQ8pa03emB5OiI3M5bnnfh6ZQEyYjwx51cMbVQ1N9jRTDNrBHHJLZzKproECtRctmsIcTalk5U2A4qmXdSNfWemJnhClwxtNLWmPTsdQAT/+y8eCSNRJ1P/RZWmXx7zBm2m7of7eLMAT2liT9kBPUTFmkdg8RuoG6ODvQN91lIp+WFPVDYaTj+nFEGMq3HwAxQ8TrfEP0gn4k4vo0veVU1BVGLehIFzLX9JbUqNkVH1oW8vtkIX93o32RBvjPfv/e55/4YelhrxwOZgCzpn0EXPnyzGnDFHcM3XZPR1aSlYX8fwK+BZjAPwJ7ARvw2fGuM7CshZaFfFoW8l1Z2GPu4L1DwuCr4wcSWsybgOSIiWGKvcBX5g7e26n/+buAlwI3ozoxs8CngH9fL7C8l+N+YI8s5H8D2C6yuSc6ZAjAG4C9w1kLr5Lg0jM9meWu6TKGKRjeabH18nkNXwu8HvhiB05/DPgTFsYo/w4VIzS/9LIFIAv5t6Oa8N2orpZ/B/yOLOR3iWyuU3nJ5jtMx/YlsBKCmYJPebK9AB9NfyIMcDIGzrBJZtwkvdVCrHwyO7fRemQh/05UCozF/vFO4LeA11HrcKi30O8G3gJcBN656KC7gQc2akyN71GL4xIGjOyyGdllUy2FzF3wKU0EVGaDJSupaXqDMMC0BVZCYNgCMyEwbYFpCQxLvbccgZUUWI7RdOTdsA3MtPlJ57r3rjtJpyzkE8B/Ad7TpMhHUNr6Y6g9FHL+w7cBD9J4hsHHgP8osrkN5/gtP3H/k0EpaLxsFKiAonJItRjiVSS+GxJUJaEvCTwIPPVeSlU27ORsjk2IEGAlDeykIJExcIYNUqMmdqp155eRMNRmGwhLLO1YEMx/Djwssrl1JfuQhfxLgP8GvLBJkTPArwDfYce7QlgQdAH4AfCvmhx4Hvgg8HGRza1r7pEs5O9A8uXyufJQWO3sTGUZri3gXYYQhrJ2nLowgqrEdyVeOcSdU1vo98cFYyYEtiMaBigJU6xoIQ1LqAV0DfXeMGstrS0wbTAtgZU0sBJriJgTYCZNrIyFmTJbBIYtoSyyuXS7hQFkIf9i4HeBt65S7GnglSKbOw0LaQzqgr4LeBvwKlafVXIB+Gvg/wA/FNlcUwdBFvIGKrHML6KuomtBhTu6512CFsHz/YDvSqrFkGppYfNKIX5Vth8L3SbCAGfYxBkycDIGiYyhbukJo5FP2lWEqeJehCkQtsBMmkrELWJfVuFDwDeBJxrd6WUhvwXlH78cuIsmCYkWcQh4vcjm5qfJLxF0/XYhC/mrgL9t44SgHh4Poa6U80AZGAa2AlcCL2CViyMoBfhFn6ASdHYiaARICX5FuUWqZQ+VS1QNCXzm3SIVq8ySVtCst5QJtdlJJd5EprkvGhVm2sQesTGTXR1WnwGmUPk6MqheirVMBPg8cLfI5pbkg2soaABZyCeBvwB+YyNWrwUZSvXPD2kYw7wwtR5CP8SfVReCZgPU/FwjYSy0wO27Eb1gAnivyOY+0WhnU0HPFyjkfw74S1Qndt/hF328Ka/tlACbBSNhYDhGzbdWPvL8qyHABMOcf2AbBDzgfwB/KLK5iWaFWgoa5v3gNwH3AC/qgHGzKLekYwSVgKAUEFQCJe5VvJd5v9BScdEIkL7EL0Yapr12GgT2z++qf5+EgZVWD2wx4QLwV8ADIps706pwW4JeckAh/wLgHcBrgRvWYNizqKCkLwBHgJ/Sxent0q9Nvao33PWWyaDpQ03ohXjTHkEp6HSilXVhWAZmxsRMm5gJU1144YJLJkTt+4j+nNe3iHOoEcIXozSz2pwzF3gM+D7wZeCh1TodlrNmQS85uJDPAregei72AGOoIJE51CyFU8DPgB+LbK6w7Ni7UVdeX6JyvoULF4ZcaNmNhKEyH7khoRsSuCsfaOtl23WFhLHQwpqOieEYKyakDihl4HaRzT0G83f7y1D57kZQ4i6hNHMaOLMWAS9nQ4LeKLKQ/xDwe5FW2iVkKJGhRCCWzISWgVQXRbisi08w37oKS2ykK6yfKQN3imzuH6KqsKeCBpCF/H8A7mVAUilo2uY08GaRzT0cZaV1QfdMTCKbux/lj0eXQ1bTbf43cHPUYl5Mz1roOrVRoj9G9XvH5hF9k3EE+F2RzfVsRlLPXY7l1EYpPwD8G7SwB4UjqBifz4tsrqcDAn0n6Do1Yf8Oqosw8txompYEqCWuPwp8tddCrtO3gq4jC/k08EuomOyX0e89rvHnMPC/gE8sDgrqF/pe0IuRhfxu1Ijlm4FX0JsFQzcbEngU+Bvgb0U2d7TH9qzKQAl6MbKQH0OJ+lXAHUDzCQOatfI0alb1t4Bvi2zuUo/taZuBFfRyZCG/E+WSvHjRNtRTowaDWeCHte0gcFBkc8/11qT1ExtBL6c2xHod8HxU631j7fUqNmfvSRU4ivKBn6y9PgE82y8PdJ0gtoJuRm2y5YHadgWwv/Z6OSoeZQeDK/hJ4HHUHLtnFm1Po2Ikeh9x1WU2naBbIQt5gRL1nwNvX7b7EEowY6jAmlEgAaRRkYMJ1r/ik0TN4iihYiBmUQFe5drnE8u2V6F6fxbzUZHN/dt11h8LerU0ct9Sa8UKspC/2GD3d0Q29+52zyUL+RFWDyuYXm+rWevxWU5fJ4mOEi3oLiCyucjzImsUOtJNEyu0oDWxQgtaEyu0oDWxQgtaEyu0oDWxQgtaEyu0oFcy3WsDNOtHC3olsY97iDNa0JpYoQWtiRVa0O0xqGGlmw4t6PboaMZUTffQgtbECi1oTazQgtbECi3owaPPlxvoLVrQg8dc6yKbFy1oTazQgtbECj1JFpCFfIaFdc639NCU9bJTFvKvrL2fAQ5tZL2SQWZTC1oW8ibw34FfY7DvVq+pbXWOyEL+1e0shxY3Bvmf2Al+Ffh14vc7XA/8Ua+N6AVx+0eulZvaLNdPt+92bbmiq1b0KZtd0I+0We6fumrF2vg2C8uKrsY3um1IP7LZBf0Z4M+ASpP9ZeAvgE9GZVArRDZ3GHgLKtfedG2bAE7UtmPAfagcfZuO/w8EXIPzzNUoVAAAAABJRU5ErkJggg=="
    }, 18: function (t, e, n) {
        "use strict";
        var r = n(6), a = n.n(r), c = n(15), o = n(124), i = n(221), u = n(103), s = n(2), l = n(11), d = n(34),
            p = n(26), m = n(59), f = function (t) {
                var e = t.language && t.language.language_others;
                return e && e.find((function (t) {
                    return t.toLowerCase().startsWith(navigator.language.toLowerCase())
                }))
            }, b = n(392), v = n(17), g = n(32), h = n(4), O = n(56), y = n(290), j = n.n(y), x = n(53), w = n.n(x),
            E = n(218);

        function k() {
            var t = Object(v.a)(["\n        @import url(", ");\n\n        body, .MuiTypography-root.MuiTypography-root {\n          font-family: '", "', ", ";\n        }\n    "]);
            return k = function () {
                return t
            }, t
        }

        function N() {
            var t = Object(v.a)(["\n        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');\n\n        body, .MuiTypography-root.MuiTypography-root {\n          font-family: 'Noto Sans JP', 'Meiryo', 'Hiragino Sans', ", ";\n        }\n      "]);
            return N = function () {
                return t
            }, t
        }

        function S(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function C(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? S(n, !0).forEach((function (e) {
                    Object(g.a)(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : S(n).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function A(t, e, n) {
            return I.apply(this, arguments)
        }

        function I() {
            return (I = Object(c.a)(a.a.mark((function t(e, n, r) {
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, Object(d.o)(e, n, r);
                        case 3:
                            return t.abrupt("return", t.sent);
                        case 6:
                            if (t.prev = 6, t.t0 = t.catch(0), "MASTER_SURVEY_IS_NOT_EXISTED" !== t.t0.message && "MASTER_SURVEY_IS_OFF" !== t.t0.message) {
                                t.next = 10;
                                break
                            }
                            throw new p.a(t.t0.message);
                        case 10:
                            throw new p.a("NOT_FOUND");
                        case 11:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 6]])
            })))).apply(this, arguments)
        }

        function D(t, e) {
            return _.apply(this, arguments)
        }

        function _() {
            return (_ = Object(c.a)(a.a.mark((function t(e, n) {
                var r, c, o;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, Object(d.s)(e, n);
                        case 3:
                            if (r = t.sent, c = r.data, o = r.subjects, !(c = Object(u.c)(c)).masterhash) {
                                t.next = 11;
                                break
                            }
                            return t.next = 10, A(e, c.masterhash, n);
                        case 10:
                            o = t.sent;
                        case 11:
                            return t.abrupt("return", {data: c, subjects: o});
                        case 14:
                            throw t.prev = 14, t.t0 = t.catch(0), t.t0;
                        case 17:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 14]])
            })))).apply(this, arguments)
        }

        function T(t, e) {
            return L.apply(this, arguments)
        }

        function L() {
            return (L = Object(c.a)(a.a.mark((function t(e, n) {
                var r, c, o;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, Object(d.i)(e, n);
                        case 3:
                            return r = t.sent, c = r.data, o = c.reduce((function (t, e) {
                                return t[e.sn] = {
                                    sn: e.sn,
                                    banner: e.banner,
                                    text: e.content,
                                    redirectEnabled: e.redirect_enable,
                                    redirectText: e.redirect_text,
                                    redirectUrl: e.redirect_url
                                }, t
                            }), {}), t.abrupt("return", o);
                        case 9:
                            throw t.prev = 9, t.t0 = t.catch(0), t.t0;
                        case 12:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 9]])
            })))).apply(this, arguments)
        }

        function P(t, e, n, r) {
            return R.apply(this, arguments)
        }

        function R() {
            return (R = Object(c.a)(a.a.mark((function t(e, n, r, c) {
                var o, i, u;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (t.prev = 0, o = {}, !r) {
                                t.next = 7;
                                break
                            }
                            return t.next = 5, Object(d.q)(e, n);
                        case 5:
                            i = t.sent, o = C({}, i);
                        case 7:
                            if (!(c && l.y && l.z)) {
                                t.next = 12;
                                break
                            }
                            return t.next = 10, Object(d.r)(l.z);
                        case 10:
                            u = t.sent, o.general = u;
                        case 12:
                            if (Object.keys(o).length) {
                                t.next = 14;
                                break
                            }
                            throw new Error("The obtained NestedDropdown data is empty, but the NestedDropdown subject exists.");
                        case 14:
                            return t.abrupt("return", o);
                        case 17:
                            throw t.prev = 17, t.t0 = t.catch(0), console.log(t.t0), t.t0;
                        case 21:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 17]])
            })))).apply(this, arguments)
        }

        function M(t, e) {
            return F.apply(this, arguments)
        }

        function F() {
            return (F = Object(c.a)(a.a.mark((function t(e, n) {
                var r, c, o, i, s, m, f, b;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, Object(d.k)(e, n);
                        case 3:
                            if (r = t.sent, c = r.data, o = r.subjects, !c.calc_mode) {
                                t.next = 10;
                                break
                            }
                            return t.next = 9, T(e, n);
                        case 9:
                            c.conditionalthankyoupages = t.sent;
                        case 10:
                            if ("ja" === c.language && Object(h.c)(N(), E.a), w()(c, "font_name", null) && (i = w()(c, "font_name", ""), (s = O.g[i] ? O.g[i] : j()(l.h || [], ["name", i]) ? j()(l.h || [], ["name", i]) : null) && Object(h.c)(k(), s.url, s.name, E.a)), !c.masterhash) {
                                t.next = 16;
                                break
                            }
                            return t.next = 15, A(e, c.masterhash);
                        case 15:
                            o = t.sent;
                        case 16:
                            if (!((m = (o || []).filter((function (t) {
                                return t.type === u.a.NESTED_DROPDOWN
                            }))).length > 0)) {
                                t.next = 23;
                                break
                            }
                            return f = m.some((function (t) {
                                return t.extras && t.extras.use_general_source
                            })), b = m.some((function (t) {
                                return t.extras && !t.extras.use_general_source
                            })), t.next = 22, P(c.masterhash || e, n, b, f);
                        case 22:
                            c.nested_dropdowns = t.sent;
                        case 23:
                            return c = Object(u.c)(c), t.abrupt("return", {data: c, subjects: o});
                        case 27:
                            throw t.prev = 27, t.t0 = t.catch(0), t.t0 instanceof p.a ? t.t0 : new p.a("NOT_FOUND");
                        case 30:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 27]])
            })))).apply(this, arguments)
        }

        var U = n(223), z = n(111);

        function G(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        var B = ["utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign"];

        function Y() {
            if (window.location.search) try {
                var t = Object(z.parse)(window.location.search, {ignoreQueryPrefix: !0}), e = {}, n = {}, r = {};
                return Object.keys(t).forEach((function (a) {
                    var c = t[a];
                    if (B.includes(a)) e[a] = c || "unknown"; else if (a.startsWith("ssn")) {
                        var o = parseInt(a.replace("ssn", ""), 10);
                        n[o] = "string" === typeof c ? [c] : c
                    } else if (a.startsWith("aka_")) {
                        var i = a.replace("aka_", "");
                        r[i] = ("string" === typeof c ? [c] : c).map((function (t) {
                            return t.replace("aka_", "")
                        }))
                    } else e[a] = c
                })), function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? G(n, !0).forEach((function (e) {
                            Object(g.a)(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : G(n).forEach((function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({}, e, {ssn: n, aka: r})
            } catch (a) {
                throw new p.a("NOT_FOUND")
            }
        }

        var H, V = n(139), W = n.n(V);

        function J(t, e) {
            return Z.apply(this, arguments)
        }

        function Z() {
            return (Z = Object(c.a)(a.a.mark((function t(e, n) {
                var r, c, o, i, u, s, l, d;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return r = n.hash, c = n.iv, t.prev = 1, o = q(e), t.next = 5, X(r);
                        case 5:
                            return i = t.sent, u = K(c), t.next = 9, window.crypto.subtle.decrypt({
                                name: "AES-GCM",
                                iv: u
                            }, i, o);
                        case 9:
                            return s = t.sent, l = (new TextDecoder).decode(s), d = JSON.parse(l), Object.keys(d.sn).forEach((function (t) {
                                var e = d.sn[t];
                                d.sn[t] = e instanceof Array ? e : [e]
                            })), t.abrupt("return", d);
                        case 16:
                            throw t.prev = 16, t.t0 = t.catch(1), console.error("Web Crypto decryption error:", t.t0), t.t0;
                        case 20:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[1, 16]])
            })))).apply(this, arguments)
        }

        function q(t) {
            for (var e = window.atob(t), n = new Uint8Array(e.length), r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
            return n.buffer
        }

        function X(t) {
            return Q.apply(this, arguments)
        }

        function Q() {
            return (Q = Object(c.a)(a.a.mark((function t(e) {
                var n, r;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, n = (new TextEncoder).encode(e), t.next = 4, window.crypto.subtle.importKey("raw", n, {name: "AES-GCM"}, !1, ["decrypt"]);
                        case 4:
                            return r = t.sent, t.abrupt("return", r);
                        case 8:
                            throw t.prev = 8, t.t0 = t.catch(0), console.error("importKey error:", t.t0), t.t0;
                        case 12:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 8]])
            })))).apply(this, arguments)
        }

        function K(t) {
            for (var e = t, n = new Uint8Array(e.length), r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
            return n
        }

        function $(t, e) {
            var n = e.hash, r = e.iv;
            try {
                var a = W.a.lib.CipherParams.create({ciphertext: W.a.enc.Base64.parse(t)}),
                    c = W.a.AES.decrypt(a, W.a.enc.Utf8.parse(n), {iv: W.a.enc.Utf8.parse(r)}),
                    o = JSON.parse(c.toString(W.a.enc.Utf8));
                return Object.keys(o.sn).forEach((function (t) {
                    var e = o.sn[t];
                    o.sn[t] = e instanceof Array ? e : [e]
                })), o
            } catch (i) {
                throw i
            }
        }

        function tt(t, e) {
            return et.apply(this, arguments)
        }

        function et() {
            return (et = Object(c.a)(a.a.mark((function t(e, n) {
                var r, c;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (r = n.hash, c = n.iv, n.encrypt_algo !== H.AES_128_GCM) {
                                t.next = 5;
                                break
                            }
                            return t.next = 4, J(e, {hash: r, iv: c});
                        case 4:
                            return t.abrupt("return", t.sent);
                        case 5:
                            return t.abrupt("return", $(e, {hash: r, iv: c}));
                        case 6:
                        case"end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function nt(t, e, n) {
            return rt.apply(this, arguments)
        }

        function rt() {
            return (rt = Object(c.a)(a.a.mark((function t(e, n, r) {
                var c;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, Object(d.f)(e, n);
                        case 3:
                            return c = t.sent, t.abrupt("return", tt(c.enc, r));
                        case 7:
                            throw t.prev = 7, t.t0 = t.catch(0), t.t0;
                        case 10:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function at(t, e) {
            return ct.apply(this, arguments)
        }

        function ct() {
            return (ct = Object(c.a)(a.a.mark((function t(e, n) {
                var r;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, Object(d.c)(e);
                        case 3:
                            if (200 !== t.sent.status) {
                                t.next = 9;
                                break
                            }
                            return t.next = 7, Object(d.u)(e);
                        case 7:
                            return r = t.sent, t.abrupt("return", tt(r.enc, n));
                        case 9:
                            return t.abrupt("return");
                        case 12:
                            throw t.prev = 12, t.t0 = t.catch(0), t.t0;
                        case 15:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 12]])
            })))).apply(this, arguments)
        }

        function ot(t, e, n) {
            return it.apply(this, arguments)
        }

        function it() {
            return (it = Object(c.a)(a.a.mark((function t(e, n, r) {
                var c, o;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, Object(d.m)(e, r);
                        case 3:
                            return c = t.sent, o = c.enc, t.abrupt("return", tt(o, n));
                        case 8:
                            throw t.prev = 8, t.t0 = t.catch(0), t.t0;
                        case 11:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 8]])
            })))).apply(this, arguments)
        }

        function ut(t, e) {
            return st.apply(this, arguments)
        }

        function st() {
            return (st = Object(c.a)(a.a.mark((function t(e, n) {
                var r, c;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, Object(d.l)(e, n);
                        case 3:
                            if (r = t.sent, 32 !== n.length) {
                                t.next = 8;
                                break
                            }
                            return t.next = 7, nt(e, n, r);
                        case 7:
                            return t.abrupt("return", t.sent);
                        case 8:
                            return t.next = 10, at(n, r);
                        case 10:
                            if (t.t0 = t.sent, t.t0) {
                                t.next = 15;
                                break
                            }
                            return t.next = 14, ot(n, r, e);
                        case 14:
                            t.t0 = t.sent;
                        case 15:
                            return c = t.t0, Object(d.A)(e, n), t.abrupt("return", c);
                        case 20:
                            throw t.prev = 20, t.t1 = t.catch(0), t.t1;
                        case 23:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 20]])
            })))).apply(this, arguments)
        }

        function lt(t, e) {
            return dt.apply(this, arguments)
        }

        function dt() {
            return (dt = Object(c.a)(a.a.mark((function t(e, n) {
                var r;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, ut(e, n);
                        case 3:
                            return r = t.sent, t.abrupt("return", r ? {sn: r.sn, params: r.params} : void 0);
                        case 7:
                            throw t.prev = 7, t.t0 = t.catch(0), new p.a("NOT_FOUND");
                        case 10:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function pt(t, e) {
            return mt.apply(this, arguments)
        }

        function mt() {
            return (mt = Object(c.a)(a.a.mark((function t(e, n) {
                var r, c, o;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, Object(d.v)(e, n);
                        case 3:
                            return r = t.sent, c = r.ansobj, o = c.tempAnswers, t.abrupt("return", o);
                        case 9:
                            throw t.prev = 9, t.t0 = t.catch(0), new p.a("INVALID_TEMPORARY_SURVEY");
                        case 12:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 9]])
            })))).apply(this, arguments)
        }

        function ft(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function bt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ft(n, !0).forEach((function (e) {
                    Object(g.a)(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ft(n).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function vt(t, e) {
            return bt({}, t, {
                color: bt({}, t.color, {
                    primary: bt({}, t.color.primary, {}, e.color.primary),
                    semantic: bt({}, t.color.semantic, {}, e.color.semantic)
                }), survey: bt({}, e.survey)
            })
        }

        function gt(t) {
            return ht.apply(this, arguments)
        }

        function ht() {
            return (ht = Object(c.a)(a.a.mark((function t(e) {
                var n, r, c, o = arguments;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            for (n = o.length, r = new Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++) r[c - 1] = o[c];
                            if (e || 0 !== r.length) {
                                t.next = 3;
                                break
                            }
                            throw new p.a("NOT_FOUND");
                        case 3:
                            if (t.prev = 3, !e) {
                                t.next = 8;
                                break
                            }
                            return t.next = 7, Object(d.w)(e);
                        case 7:
                            return t.abrupt("return", t.sent);
                        case 8:
                            return t.next = 10, gt.apply(void 0, r);
                        case 10:
                            return t.abrupt("return", t.sent);
                        case 13:
                            return t.prev = 13, t.t0 = t.catch(3), t.next = 17, gt.apply(void 0, r);
                        case 17:
                            return t.abrupt("return", t.sent);
                        case 18:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[3, 13]])
            })))).apply(this, arguments)
        }

        function Ot() {
            return yt.apply(this, arguments)
        }

        function yt() {
            return (yt = Object(c.a)(a.a.mark((function t() {
                var e, n, r, c, o = arguments;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            for (t.prev = 0, e = o.length, n = new Array(e), r = 0; r < e; r++) n[r] = o[r];
                            return t.next = 4, gt.apply(void 0, n.concat(["surveycake"]));
                        case 4:
                            return c = t.sent, t.abrupt("return", vt(s.r, c));
                        case 8:
                            throw t.prev = 8, t.t0 = t.catch(0), new p.a("NOT_FOUND");
                        case 11:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 8]])
            })))).apply(this, arguments)
        }

        function jt(t, e) {
            return xt.apply(this, arguments)
        }

        function xt() {
            return (xt = Object(c.a)(a.a.mark((function t(e, n) {
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, Object(d.x)(e, n);
                        case 3:
                            return t.abrupt("return", t.sent);
                        case 6:
                            throw t.prev = 6, t.t0 = t.catch(0), t.t0;
                        case 9:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 6]])
            })))).apply(this, arguments)
        }

        function wt(t) {
            return Et.apply(this, arguments)
        }

        function Et() {
            return (Et = Object(c.a)(a.a.mark((function t(e) {
                var n, r, c, o = arguments;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            for (n = o.length, r = new Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++) r[c - 1] = o[c];
                            if (e || 0 !== r.length) {
                                t.next = 3;
                                break
                            }
                            throw new p.a("NOT_FOUND");
                        case 3:
                            if (t.prev = 3, !e || !l.x.includes(e)) {
                                t.next = 8;
                                break
                            }
                            return t.next = 7, Object(d.z)(e);
                        case 7:
                            return t.abrupt("return", t.sent);
                        case 8:
                            return t.next = 10, wt.apply(void 0, r);
                        case 10:
                            return t.abrupt("return", t.sent);
                        case 13:
                            return t.prev = 13, t.t0 = t.catch(3), t.next = 17, wt.apply(void 0, r);
                        case 17:
                            return t.abrupt("return", t.sent);
                        case 18:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[3, 13]])
            })))).apply(this, arguments)
        }

        function kt() {
            return Nt.apply(this, arguments)
        }

        function Nt() {
            return (Nt = Object(c.a)(a.a.mark((function t() {
                var e, n, r, c = arguments;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            for (t.prev = 0, e = c.length, n = new Array(e), r = 0; r < e; r++) n[r] = c[r];
                            return t.next = 4, wt.apply(void 0, n.concat([l.i]));
                        case 4:
                            return t.abrupt("return", t.sent);
                        case 7:
                            throw t.prev = 7, t.t0 = t.catch(0), t.t0;
                        case 10:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        !function (t) {
            t[t.AES_128_CBC = 0] = "AES_128_CBC", t[t.AES_128_GCM = 1] = "AES_128_GCM"
        }(H || (H = {}));
        var St = function () {
            function t(e, n, r) {
                Object(o.a)(this, t), this.surveyHash = e, this.referralToken = n, this.tempAnswerHash = r, this.query = void 0, this.referral = void 0, this.data = {}, this.subjects = [], this.meta = void 0, this.answers = void 0, this.theme = s.r, this.translation = {}, this.wording = {}, this.serverTime = "", this.logicJSON = void 0, this.reissueInvoiceSurveyHash = "69mWq", this.adOptions = {
                    needRecommendAd: !1,
                    ad: null
                }
            }

            return Object(i.a)(t, [{
                key: "redirectToPassword", value: function () {
                    return "PRIVATE" === this.data.status && !(this.query && "preview" === this.query.status)
                }
            }, {
                key: "redirectToThirdPartyLogin", value: function () {
                    return this.data.regneed
                }
            }, {
                key: "validateSurveyStatus", value: function () {
                    return "OFF" === this.data.status ? new p.a("NOT_PUBLIC") : this.meta && this.meta.file_upload && this.meta.file_upload.status && "NOT_AVAILABLE" === this.meta.file_upload.status ? new p.a("NOT_AVAILABLE") : "undefined" !== typeof this.data.ppl_count && "undefined" !== typeof this.data.limitcount && this.data.ppl_count >= this.data.limitcount ? new p.a("FULLED") : this.data.starttime && this.serverTime && this.data.starttime > this.serverTime || this.data.endtime && this.serverTime && this.data.endtime < this.serverTime ? new p.a("INVALID_DURATION") : void 0
                }
            }, {
                key: "isBackstageLogin", value: function () {
                    return this.data.regneed && l.l && "ad" !== l.E
                }
            }, {
                key: "getSurveyHash", value: function () {
                    return this.surveyHash
                }
            }, {
                key: "getQueryThemeName", value: function () {
                    return this.query && this.query.theme
                }
            }, {
                key: "getQueryLanguage", value: function () {
                    return this.query && this.query.lang
                }
            }, {
                key: "getQueryLandingToken", value: function () {
                    return this.query && (this.query.mbunq || this.query.landingToken)
                }
            }, {
                key: "getCsrftoken", value: function () {
                    return this.meta && this.meta.csrftoken
                }
            }, {
                key: "getAdOptions", value: function () {
                    return this.adOptions
                }
            }, {
                key: "setCsrftoken", value: function (t) {
                    this.meta && (this.meta.csrftoken = t)
                }
            }, {
                key: "setAdOptions", value: function (t) {
                    this.adOptions = t
                }
            }, {
                key: "isPro", value: function () {
                    return this.meta && this.meta.pro
                }
            }, {
                key: "isPreview", value: function () {
                    return Boolean(this.query && "preview" === this.query.status)
                }
            }, {
                key: "isChildSurvey", value: function () {
                    return Boolean(this.data.masterhash)
                }
            }, {
                key: "isMetaCalcMode", value: function () {
                    return Boolean(this.meta && void 0 !== this.meta.calc_mode && this.meta.calc_mode)
                }
            }, {
                key: "isDataCalcMode", value: function () {
                    return Boolean(void 0 !== this.data.calc_mode && this.data.calc_mode)
                }
            }, {
                key: "isSurveyPrivate", value: function () {
                    return Boolean("PRIVATE" === this.data.status)
                }
            }, {
                key: "handleStageFinished", value: function (t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.password,
                        a = n.thirdPartyLogin;
                    if (r && this.redirectToPassword()) return t("password");
                    if (a && !this.isBackstageLogin() && this.redirectToThirdPartyLogin()) return t("thirdpartylogin");
                    var c = this.validateSurveyStatus();
                    return c ? e(c) : t("index")
                }
            }, {
                key: "logSelf", value: function () {
                    m.a && console.log("--- survey config ---", this)
                }
            }, {
                key: "initialPrivateData", value: function () {
                    var t = Object(c.a)(a.a.mark((function t(e) {
                        var n, r, c, o, i, s;
                        return a.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, D(this.surveyHash, e);
                                case 3:
                                    if (n = t.sent, r = n.data, c = n.subjects, !r.calc_mode) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.next = 9, T(this.surveyHash, this.isPreview());
                                case 9:
                                    r.conditionalthankyoupages = t.sent;
                                case 10:
                                    if (!((o = (c || []).filter((function (t) {
                                        return t.type === u.a.NESTED_DROPDOWN
                                    }))).length > 0)) {
                                        t.next = 17;
                                        break
                                    }
                                    return i = o.some((function (t) {
                                        return t.extras && t.extras.use_general_source
                                    })), s = o.some((function (t) {
                                        return t.extras && !t.extras.use_general_source
                                    })), t.next = 16, P(r.masterhash || this.surveyHash, this.isPreview(), s, i);
                                case 16:
                                    r.nested_dropdowns = t.sent;
                                case 17:
                                    return this.data = r, this.subjects = c, this.logSelf(), t.next = 22, this.getSurveyLogicJSON(e);
                                case 22:
                                    t.next = 27;
                                    break;
                                case 24:
                                    throw t.prev = 24, t.t0 = t.catch(0), t.t0;
                                case 27:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this, [[0, 24]])
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "getSurveyLogicJSON", value: function () {
                    var t = Object(c.a)(a.a.mark((function t(e) {
                        var n, r = this;
                        return a.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!(this.isMetaCalcMode() || this.isPreview() && this.isDataCalcMode())) {
                                        t.next = 11;
                                        break
                                    }
                                    if (n = function () {
                                        return r.isChildSurvey() ? r.data.masterhash : r.surveyHash
                                    }, !(this.isChildSurvey() || this.isSurveyPrivate() && !this.isPreview())) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 5, Object(d.h)(this.surveyHash, {
                                        password: e,
                                        masterid: this.isChildSurvey() ? n() : ""
                                    });
                                case 5:
                                    this.logicJSON = t.sent, t.next = 11;
                                    break;
                                case 8:
                                    return t.next = 10, Object(d.n)(n(), {usePreviewData: this.isPreview()});
                                case 10:
                                    this.logicJSON = t.sent;
                                case 11:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "initial", value: function () {
                    var t = Object(c.a)(a.a.mark((function t() {
                        var e, n, r, c, o, i, u;
                        return a.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    try {
                                        this.query = Y()
                                    } catch (a) {
                                        e = e || a
                                    }
                                    if (t.prev = 1, !this.tempAnswerHash || !l.F) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 5, pt(this.surveyHash, this.tempAnswerHash);
                                case 5:
                                    this.answers = t.sent;
                                case 6:
                                    t.next = 11;
                                    break;
                                case 8:
                                    t.prev = 8, t.t0 = t.catch(1), e = e || t.t0;
                                case 11:
                                    if (t.prev = 11, !this.referralToken) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.next = 15, lt(this.surveyHash, this.referralToken);
                                case 15:
                                    this.referral = t.sent;
                                case 16:
                                    t.next = 21;
                                    break;
                                case 18:
                                    t.prev = 18, t.t1 = t.catch(11), e = e || t.t1;
                                case 21:
                                    return t.prev = 21, t.next = 24, M(this.surveyHash, this.isPreview());
                                case 24:
                                    n = t.sent, r = n.data, c = n.subjects, this.data = r, this.subjects = c, t.next = 34;
                                    break;
                                case 31:
                                    t.prev = 31, t.t2 = t.catch(21), e = e || t.t2;
                                case 34:
                                    return o = document.querySelector("html"), (this.query && ("ar" === this.query.lang || "rtl" === this.query.dir) || "ar" === this.data.language) && o && (o.lang = "ar"), t.prev = 36, t.next = 39, Object(U.a)(this.surveyHash, this.isPreview());
                                case 39:
                                    if (this.meta = t.sent, this.meta && (this.serverTime = this.meta.time), !this.isPreview() && this.isSurveyPrivate()) {
                                        t.next = 44;
                                        break
                                    }
                                    return t.next = 44, this.getSurveyLogicJSON();
                                case 44:
                                    t.next = 49;
                                    break;
                                case 46:
                                    t.prev = 46, t.t3 = t.catch(36), e = e || t.t3;
                                case 49:
                                    if (!((i = this.getQueryLanguage()) && this.meta && this.meta.language && this.meta.language.language_others && this.meta.language.language_others.includes(i))) {
                                        t.next = 60;
                                        break
                                    }
                                    return t.prev = 51, t.next = 54, jt(this.surveyHash, i);
                                case 54:
                                    this.translation = t.sent, t.next = 60;
                                    break;
                                case 57:
                                    t.prev = 57, t.t4 = t.catch(51), e = new p.a("NOT_FOUND");
                                case 60:
                                    return i && this.meta && this.meta.language && this.meta.language.language_others && this.meta.language.language_others.includes(i), !i && this.meta && this.meta.language && this.meta.language.language_others && this.meta.language.language_others.length > 0 && this.meta.language.auto_detect_navigator_language && (u = f(this.meta)) && Object(b.a)(u), t.prev = 62, t.next = 65, Ot(this.getQueryThemeName(), this.data.theme);
                                case 65:
                                    this.theme = t.sent, t.next = 71;
                                    break;
                                case 68:
                                    t.prev = 68, t.t5 = t.catch(62), e = e || t.t5;
                                case 71:
                                    return t.prev = 71, t.next = 74, kt(i, this.data.language);
                                case 74:
                                    this.wording = t.sent, t.next = 80;
                                    break;
                                case 77:
                                    t.prev = 77, t.t6 = t.catch(71), e = e || t.t6;
                                case 80:
                                    if (!this.isBackstageLogin()) {
                                        t.next = 89;
                                        break
                                    }
                                    return t.prev = 81, t.next = 84, Object(d.F)(this.getSurveyHash(), this.data.regneed);
                                case 84:
                                    t.next = 89;
                                    break;
                                case 86:
                                    t.prev = 86, t.t7 = t.catch(81), e = e || t.t7;
                                case 89:
                                    if (this.logSelf(), !e) {
                                        t.next = 92;
                                        break
                                    }
                                    throw e;
                                case 92:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this, [[1, 8], [11, 18], [21, 31], [36, 46], [51, 57], [62, 68], [71, 77], [81, 86]])
                    })));
                    return function () {
                        return t.apply(this, arguments)
                    }
                }()
            }]), t
        }(), Ct = n(10), At = n(29), It = n(57), Dt = n(0), _t = n.n(Dt), Tt = Object(Dt.createContext)({});

        function Lt() {
            return Object(Dt.useContext)(Tt)
        }

        var Pt = function (t) {
            var e = t.surveyConfig, n = t.children, r = Object(Dt.useState)(!1), o = Object(Ct.a)(r, 2), i = o[0],
                u = o[1], s = It.PageService.useSetPage(), l = p.b.useSetException();
            return Object(At.b)(Object(c.a)(a.a.mark((function t() {
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, e.initial();
                        case 3:
                            e.handleStageFinished(s, l, {password: !0, thirdPartyLogin: !0}), t.next = 9;
                            break;
                        case 6:
                            t.prev = 6, t.t0 = t.catch(0), l(t.t0);
                        case 9:
                            u(!0);
                        case 10:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 6]])
            })))), _t.a.createElement(Tt.Provider, {value: e}, n(i))
        };
        n.d(e, "a", (function () {
            return St
        })), n.d(e, "c", (function () {
            return Lt
        })), n.d(e, "b", (function () {
            return Pt
        }))
    }, 213: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return c
        }));
        var r = n(55), a = n(234), c = {
            REQUIRED: function (t) {
                return t.message.validate_message.required
            }, REPEATED: function (t) {
                return t.message.error.repeated
            }, INVALID_ATTR_EMAIL: function (t) {
                return t.message.validate_message.email
            }, INVALID_DATE_FORMAT: function (t) {
                return t.message.validate_message.date
            }, INVALID_DATE_PERIOD: function (t) {
                return t.message.validate_message.dateInvalidRange
            }, INVALID_ATTR_TEL: function (t) {
                return t.message.validate_message.digits
            }, INVALID_ATTR_API_ERROR: function (t) {
                return t.message.validate_message.api
            }, INVALID_ATTR_API_LOADING: function (t) {
                return t.message.validate_message.api_loading
            }, INVALID_ATTR_URL: function (t) {
                return t.message.validate_message.url
            }, INVALID_NUMBER: function (t) {
                return t.message.validate_message.number
            }, INVALID_RANGE: function (t, e) {
                var n = e.payload, a = n.gte, c = n.lte;
                return a || 0 === a ? Object(r.t)(t.message.validate_message.min, {0: a}) : c || 0 === c ? Object(r.t)(t.message.validate_message.max, {0: c}) : void 0
            }, INVALID_DECIMAL: function (t) {
                return t.message.error.invalid_decimal
            }, INVALID_FILEUPLOAD_DISABLE: function (t) {
                return t.subject.fileupload.status.disabled
            }, INVALID_FILEUPLOAD_FAILED: function (t) {
                return t.subject.fileupload.status.failed
            }, INVALID_FILEUPLOAD_PREVIEW: function (t) {
                return t.subject.fileupload.status.preview
            }, INVALID_FILEUPLOAD_SPACE_NOT_ENOUGH: function (t) {
                return t.subject.fileupload.status.fulled
            }, INVALID_FILE: function (t, e) {
                var n = e.payload, c = n.lte, o = n.format;
                return o instanceof Array ? Object(a.b)(t, o) : "number" === typeof c ? Object(r.t)(t.subject.fileupload.error.filesize, {filesize: c}) : void 0
            }, INVALID_SORT: function (t) {
                return t.message.error.invalid_sort
            }, INVALID_OPTION_COUNT: function (t, e) {
                if (e.payload) {
                    var n = e.payload, a = n.decrease, c = n.increase;
                    if (c) return Object(r.t)(t.message.error.invalid_option_count.too_little, {gap: c});
                    if (a) return Object(r.t)(t.message.error.invalid_option_count.too_much, {gap: a})
                }
            }, INVALID_TEXT_LENGTH: function (t, e) {
                if (e.payload) {
                    var n = e.payload, a = n.gte, c = n.lte;
                    return Object(r.t)(t.message.error.text_length, {0: a, 1: c})
                }
            }
        }
    }, 214: function (t, e, n) {
        "use strict";

        function r(t) {
            return /[\u4e00-\u9fa5]/.test(t)
        }

        n.d(e, "a", (function () {
            return r
        }))
    }, 215: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return u
        }));
        var r = n(55), a = n(0), c = n.n(a), o = n(234), i = n(156), u = {
            RANGE_DECIMAL: function (t, e) {
                var n = e.payload, a = n.gte, c = n.lte, o = n.decimal, i = c || 0 === c, u = a || 0 === a, s = "",
                    l = void 0 !== o && null !== o ? Object(r.t)(t.message.info.digit_lowbound, {point: o}) : "";
                return u && i ? s = "".concat(t.message.info.need_between, " ").concat(a, " \uff5e ").concat(c, " ").concat(t.message.info.between) : u ? s = "".concat(t.message.info.need_upper, " ").concat(a) : i && (s = "".concat(t.message.info.need_lower, " ").concat(c)), "".concat(s).concat(s && l ? " " : "").concat(l)
            }, SORT_COUNT: function (t, e) {
                var n = e.payload, r = n.gte, a = n.lte, c = r === a ? "".concat(r) : "".concat(r, " ~ ").concat(a);
                return "".concat(t.message.info.need_sort, " ").concat(c, " ").concat(t.message.info.option_count.optcount)
            }, FILE: function (t, e) {
                var n = Object(i.c)(), a = e.payload, u = a.lte, s = a.format, l = navigator.userAgent,
                    d = l.indexOf("Android") > -1 || l.indexOf("Adr") > -1,
                    p = c.a.createElement(r.Trans, {info: c.a.createElement("p", {className: n.inportantInfo}, t.subject.fileupload.info.androidMsg)}, "{{info}}"),
                    m = c.a.createElement(r.Trans, {filesize: c.a.createElement("b", null, u)}, t.subject.fileupload.info.size),
                    f = s && s.length && c.a.createElement(r.Trans, {filetype: c.a.createElement("b", null, Object(o.a)(t, s))}, t.subject.fileupload.info.type);
                return c.a.createElement(c.a.Fragment, null, d && p, m, m || f ? " " : "", f)
            }, OPTION_COUNT: function (t, e) {
                if (e.payload) {
                    var n = e.payload, r = n.count, a = n.gte, c = n.lte, o = "";
                    return a && !c ? o += "".concat(t.message.placeholder.select, " ").concat(t.message.info.atleast, " ").concat(a, " ").concat(t.message.info.option_count.optcount) : !a && c ? o += "".concat(t.message.placeholder.select, " ").concat(t.message.info.atmost, " ").concat(c, " ").concat(t.message.info.option_count.optcount) : a && c && (o += "".concat(t.message.placeholder.select, " ").concat(a, " ~ ").concat(c, " ").concat(t.message.info.option_count.optcount)), r && (o += "\uff08".concat(t.message.info.option_count.correct.replace("{{count}}", "".concat(r)), "\uff09")), o
                }
            }
        }
    }, 216: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return u
        }));
        var r = n(6), a = n.n(r), c = n(10), o = n(15), i = n(95);

        function u(t, e) {
            return s.apply(this, arguments)
        }

        function s() {
            return (s = Object(o.a)(a.a.mark((function t(e, n) {
                var r, o, u, s, l, d, p, m, f;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return r = Object(c.a)(n, 5), o = r[0], u = r[1], s = r[2], l = r[3], d = r[4], t.prev = 1, t.next = 4, e();
                        case 4:
                            p = t.sent, u.setThirdPartyLogin(p), o.handleStageFinished(s, l), t.next = 13;
                            break;
                        case 9:
                            t.prev = 9, t.t0 = t.catch(1), "ALREADY_DONE" === (m = t.t0.message) ? d(!0) : "LOGIN_FAILED" !== m && "TOKEN_ERROR" !== m || (f = o.wording, Object(i.b)(f));
                        case 13:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[1, 9]])
            })))).apply(this, arguments)
        }
    }, 217: function (t, e, n) {
        "use strict";
        var r = {
            "ease-out": function (t) {
                return Math.sin(t * (Math.PI / 2))
            }, "ease-in-out": function (t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            }
        };
        var a = "ease-out";
        var c = n(11);

        function o(t, e) {
            var n = document.querySelector('[data-subject-id="'.concat(t, '"]')), o = 0;
            if (n && e && "NESTCHILD" === e.type) {
                var i = n;
                if (i && i.parentNode && i.parentElement) {
                    var u = Array.prototype.slice.call(i.parentNode.children).indexOf(i);
                    window.innerWidth < 720 && u++;
                    var s = 0;
                    if (n = document.querySelector('[data-subject-id="'.concat(t - u, '"]'))) {
                        var l = n.querySelector('[aria-label="subject title container"]');
                        s = l ? l.offsetHeight : 0
                    }
                    o += s + i.offsetTop + 10
                }
            }
            n && (c.H.isIOSVersionBelow12 && c.w ? function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = document.querySelector("#iOS12IframeHackWrapper"), c = n.scrollHeight / .75,
                    o = t.offsetTop + e, i = n.scrollTop, u = 0, s = Math.max(.1, Math.min(Math.abs(i - o) / c, .8));
                !function t() {
                    var e = (u += 1 / 60) / s, c = r[a](e);
                    e < 1 ? (requestAnimationFrame(t), n.scrollTo(0, i + (o - i) * c)) : n.scrollTo(0, o)
                }()
            }(n, o) : function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ease-out",
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, c = t.offsetTop + a,
                    o = window.scrollY || document.documentElement.scrollTop, i = 0,
                    u = Math.max(.1, Math.min(Math.abs(o - c) / e, .8));
                !function t() {
                    var e = (i += 1 / 60) / u, a = r[n](e);
                    e < 1 ? (requestAnimationFrame(t), window.scrollTo(0, o + (c - o) * a)) : window.scrollTo(0, c)
                }()
            }(n, document.body.scrollHeight / .75, "ease-in-out", o))
        }

        n.d(e, "a", (function () {
            return o
        }))
    }, 218: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return u
        }));
        var r = n(17), a = (n(764), n(4)), c = n(429), o = n.n(c);

        function i() {
            var t = Object(r.a)(["\n  /* global.css */\n  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,500,700|Roboto:400,500,700&display=swap&subset=chinese-traditional');\n\n  html {\n    height: 100%;\n  }\n\n  body {\n    position: relative;\n    font-size: 1em;\n    width: 100%;\n    height: auto;\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 0;\n    overflow: auto;\n  }\n\n  body:lang(ar) > div{\n    transform: scaleX(-1);\n  }\n\n  body:lang(ar) input,\n  body:lang(ar) textarea\n  {\n    transform: scaleX(-1);\n    direction: rtl;\n  }\n\n  body, .MuiTypography-root.MuiTypography-root {\n    font-family: ", ";\n  }\n\n  body.freeze {\n    position: fixed;\n  }\n\n  /* loading.css */\n\n  @keyframes loading-rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes loading-dash {\n    0% {\n      stroke-dasharray: 1, 200;\n      stroke-dashoffset: 0;\n    }\n\n    50% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -40px;\n    }\n\n    100% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -120px;\n    }\n  }\n\n  #loading {\n    width: 100%;\n    height: 100%;\n    padding: 200px 0 0;\n    color: #989898;\n    background-color: #fff;\n    box-sizing: border-box;\n    position: fixed;\n    text-align: center;\n    top: 0;\n    left: 0;\n    z-index: 99;\n  }\n\n  #loading.removing {\n    opacity: 0;\n    transition: opacity 0.3s;\n  }\n\n  #loading .loading-logo {\n    :lang(ar){\n\t\t\ttransform: scaleX(-1);\n\t\t}\n    display: block;\n    width: 240px;\n    height: 60px;\n    margin: 0 auto 16px;\n    background-image: url(", ");\n    background-position: 0 -100%;\n    background-size: 100% auto;\n  }\n\n  #loading .loading-logo.removing {\n    width: 20px;\n    height: 5px;\n    opacity: 0;\n    transition: all 0.6s;\n  }\n\n  #loading .loading-icon svg {\n    width: 30px;\n    height: 30px;\n    /* stylelint-disable property-no-vendor-prefix */\n    -webkit-animation: Loading__loading-rotate___3LqhG 2s linear infinite;\n    /* stylelint-enable */\n    animation: loading-rotate 2s linear infinite;\n  }\n\n  #loading .loading-icon svg circle {\n    /* stylelint-disable property-no-vendor-prefix */\n    -webkit-animation: loading-dash 1.5s ease-in-out infinite;\n    /* stylelint-enable */\n    animation: loading-dash 1.5s ease-in-out infinite;\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: 0;\n    stroke-width: 2;\n    stroke: #989898;\n    stroke-linecap: round;\n  }\n\n  #loading .loading-icon.removing {\n    opacity: 0;\n    transition: opacity 0.3s;\n  }\n\n  ::-ms-clear {\n    display: none;\n  }\n"]);
            return i = function () {
                return t
            }, t
        }

        var u = "'Helvetica Neue', Helvetica, 'Roboto', Arial, 'Noto Sans TC', 'Apple LiGothic', '\u5fae\u8edf\u6b63\u9ed1\u9ad4', 'Microsoft JhengHei', sans-serif";
        Object(a.c)(i(), u, o.a)
    }, 223: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return u
        }));
        var r = n(6), a = n.n(r), c = n(15), o = n(34), i = n(26);

        function u(t, e) {
            return s.apply(this, arguments)
        }

        function s() {
            return (s = Object(c.a)(a.a.mark((function t(e, n) {
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (t.prev = 0, !n) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            return t.next = 5, Object(o.p)(e);
                        case 5:
                            return t.abrupt("return", t.sent);
                        case 8:
                            throw t.prev = 8, t.t0 = t.catch(0), new i.a("NOT_FOUND");
                        case 11:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 8]])
            })))).apply(this, arguments)
        }
    }, 23: function (t, e, n) {
        "use strict";
        var r = n(0), a = n.n(r), c = n(10), o = n(11), i = n(4), u = n(294),
            s = Object(i.a)("\n\t:lang(ar) {\n\t\ttransform: scaleX(-1);\n\t\tdirection: rtl;\n\t}\n\tmax-width: 100%;\n\ttransition: opacity 0.6s;\n"),
            l = function (t) {
                return t.startsWith("/asset") ? "".concat(o.j.image).concat(t) : t
            }, d = function (t) {
                var e = t.className, n = t.src, o = Object(r.useState)(!1), i = Object(c.a)(o, 2), u = i[0], s = i[1];
                return a.a.createElement("img", {
                    className: e, src: n, style: {opacity: u ? 1 : 0}, onLoad: function () {
                        s(!0)
                    }, alt: ""
                })
            }, p = function (t) {
                var e = t.className, n = t.src, r = t.lazyload;
                return n ? r ? a.a.createElement(u.SimpleImg, {
                    className: Object(i.b)(s, e),
                    src: l(n),
                    placeholder: !1,
                    onComplete: function () {
                        return Object(u.initSimpleImg)(void 0, !0)
                    }
                }) : a.a.createElement(d, {className: Object(i.b)(s, e), src: l(n)}) : null
            }, m = n(2), f = Object(m.y)([["banner", function (t, e) {
                var n = Object(c.a)(e, 2), r = n[0], a = n[1];
                return ["\n\t\t\toverflow: hidden;\n\t\t", r && "number" === typeof a && "\n\t\t\t".concat(r, "-height: ").concat(a, "px;\n\t\t")]
            }], ["image", "\n\t\twidth: 100%;\n\t"]]), b = function (t) {
                var e = t.banner, n = t.limitType, r = t.limitSize, c = f([n, r]);
                return a.a.createElement("div", {
                    className: c.banner,
                    "aria-label": "banner"
                }, e && a.a.createElement(p, {className: c.image, src: e}))
            }, v = n(73), g = Object(m.y)([["button", function (t, e) {
                var n = Object(c.a)(e, 2), r = n[0], a = n[1];
                return ["\n\t\t\t:lang(ar) {\n\t\t\t\ttransform: scaleX(-1);\n\t\t\t\tdirection: rtl;\n\t\t\t}\n\t\t\tdisplay: inline-block;\n\t\t\tcolor: ".concat(t.color.text.white, ";\n\t\t\tline-height: 1.5;\n\t\t\tborder-radius: 4px;\n\t\t\tborder: 0;\n\t\t\tbox-shadow: none;\n\t\t\ttext-align: center;\n\t\t\ttext-shadow: none;\n\t\t\ttransition: background-color 0.3s ease, opacity 0.3s ease;\n\t\t\toutline: none;\n\t\t\tbox-sizing: border-box;\n\t\t\tcursor: pointer;\n\n\t\t\t&:disabled {\n\t\t\t\tcursor: not-allowed;\n\t\t\t}\n\n\t\t\t& span + svg,\n\t\t\t& svg + span {\n\t\t\t\tmargin-left: 8px;\n\t\t\t}\n\t\t"), !r && "\n\t\t\tbackground-color: ".concat(t.color.text.B3, ";\n\n\t\t\t&:hover:not(:disabled) {\n\t\t\t\tbackground-color: ").concat(t.color.text.B4, ";\n\t\t\t}\n\n\t\t\t&:disabled {\n\t\t\t\tbackground-color: ").concat(t.color.text.B2, ";\n\t\t\t}\n\t\t"), "primary" === r && "\n\t\t\tbackground-color: ".concat(t.color.primary.default, ";\n\n\t\t\t&:hover:not(:disabled) {\n\t\t\t\tbackground-color: ").concat(t.color.primary.active, ";\n\t\t\t}\n\n\t\t\t&:disabled {\n\t\t\t\tbackground-color: ").concat(t.color.primary.disabled, ";\n\t\t\t}\n\t\t"), "medium" === a && "\n\t\t\tfont-size: 16px;\n\t\t\tpadding: 8px 12px;\n\t\t", "large" === a && "\n\t\t\tfont-size: 24px;\n\t\t\tpadding: 12px 16px;\n\t\t"]
            }]]), h = Object(r.forwardRef)((function (t, e) {
                var n = t.children, r = t.className, c = t.color, o = t.size, u = void 0 === o ? "medium" : o,
                    s = t.disabled, l = void 0 !== s && s, d = t.loading, p = void 0 !== d && d, f = t.onTouchEnd,
                    b = void 0 === f ? function () {
                    } : f,
                    h = Object(v.a)(t, ["children", "className", "color", "size", "disabled", "loading", "onTouchEnd"]),
                    O = g([c, u]);
                return a.a.createElement("button", Object.assign({
                    ref: e,
                    className: r ? Object(i.b)(O.button, r) : O.button,
                    disabled: l || p,
                    onTouchEnd: function (t) {
                        l || p || b(t)
                    }
                }, h), p && a.a.createElement(m.b, {icon: m.z, spin: !0}), a.a.Children.map(n, (function (t) {
                    return "string" === typeof t ? a.a.createElement("span", null, t) : t
                })))
            })), O = n(29), y = n(525), j = n.n(y),
            x = Object(m.y)([["container", "\n      position: relative;\n      overflow: hidden;\n    "], ["content", "\n      display: flex;\n      width: 100%;\n      flex-direction: column;\n      overflow: hidden;\n      padding-top: 40px;\n    "]]),
            w = function (t) {
                var e = t.children, n = Object(r.useRef)(null), c = x(), o = Object(r.useCallback)(j()((function (t) {
                    var e = t.height;
                    n.current && (n.current.style.minHeight = "".concat(e - 200, "px"))
                }), 1e3, {trailing: !1}), []);
                return Object(O.h)(o), a.a.createElement("div", {
                    className: c.container,
                    "aria-label": "container"
                }, a.a.createElement("div", {ref: n, className: c.content}, e))
            }, E = Object(m.y)([["slateHtml", function (t) {
                return "\n\t\tline-height: 1.4;\n\n\t\t& .ansTag {\n\t\t\tcolor: ".concat(t.color.primary.default, ";\n\t\t}\n\n\t\t& p {\n\t\t\tmargin: 0;\n\t\t}\n\n\t\t& img {\n\t\t\tmax-width: 100%;\n\t\t\tline-height: 0;\n\t\t}\n\n\t\t& ol,\n\t\t& ul,\n\t\t& table {\n\t\t\tmargin-top: 16px;\n\t\t\tmargin-bottom: 16px;\n\n\t\t\t& p {\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t}\n\n\t\t& ol,\n\t\t& ul {\n\t\t\tdisplay: block;\n\t\t\tpadding-left: 40px;\n\n\t\t\t& > li {\n\t\t\t\tdisplay: list-item;\n\t\t\t\tmargin: 0;\n\t\t\t\tline-height: 1.4;\n\t\t\t}\n\t\t}\n\n\t\t& ul > li {\n\t\t\tlist-style-type: disc;\n\t\t}\n\n\t\t& ol > li {\n\t\t\tlist-style-type: decimal;\n\t\t}\n\n\t\t& table {\n\t\t\tdisplay: block;\n\t\t\tborder-collapse: collapse;\n\t\t\toverflow: auto;\n\n\t\t\t& tbody {\n\t\t\t\tdisplay: table-row-group;\n\t\t\t\tvertical-align: middle;\n\t\t\t\tborder-color: inherit;\n\n\t\t\t\t& tr {\n\t\t\t\t\tdisplay: table-row;\n\t\t\t\t\tvertical-align: inherit;\n\t\t\t\t\tborder-color: inherit;\n\n\t\t\t\t\t& td {\n\t\t\t\t\t\tdisplay: table-cell;\n\t\t\t\t\t\tvertical-align: top;\n\t\t\t\t\t\tmin-width: 50px;\n\t\t\t\t\t\tpadding: 4px;\n\t\t\t\t\t\tborder: 1px solid ").concat(t.color.text.B, ";\n\t\t\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t\t\tmin-width: 20px;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t")
            }]]), k = n(526), N = {
                none: [],
                paragraph: ["class", "rel", "style"],
                block: ["class", "rel", "style"],
                span: ["style"],
                link: ["href", "target"],
                image: ["src", "alt", "style", "data-width", "data-height"]
            }, S = {
                whiteList: {
                    a: N.link,
                    b: N.none,
                    br: N.none,
                    del: N.none,
                    div: N.block,
                    em: N.none,
                    h1: N.paragraph,
                    h2: N.paragraph,
                    h3: N.paragraph,
                    h4: N.paragraph,
                    h5: N.paragraph,
                    h6: N.paragraph,
                    i: N.none,
                    img: N.image,
                    li: N.block,
                    ol: N.block,
                    p: N.paragraph,
                    s: N.none,
                    span: N.span,
                    strong: N.none,
                    table: N.block,
                    tbody: N.block,
                    td: N.block,
                    tfoot: N.block,
                    th: N.block,
                    thead: N.block,
                    tr: N.block,
                    u: N.none,
                    ul: N.block,
                    hr: N.block
                }
            };
        var C = Object(r.memo)((function (t) {
            var e, n = t.className, r = t.html, c = E();
            return a.a.createElement("div", {
                className: Object(i.b)(c.slateHtml, n),
                dangerouslySetInnerHTML: {__html: (e = r || "", Object(k.filterXSS)(e, S))},
                "aria-label": "slate html"
            })
        }), (function (t, e) {
            return t.className === e.className && t.html === e.html
        })), A = Object(m.y)([["legalText", function (t) {
            return "\n\t\t:lang(ar){\n\t\t\ttransform: scaleX(-1);\n\t\t\tdirection: rtl;\n\t\t}\n\t\twidth: 100%;\n\t\tmargin-bottom: 60px;\n\t\tpadding: 0 40px;\n\t\tcolor: ".concat(t.survey.color.default, ";\n\t\tline-height: 1.4;\n\t\tfont-size: 14px;\n\t\tbox-sizing: border-box;\n\t")
        }]]);
        var I = function (t) {
                var e = t.children, n = A();
                return e ? a.a.createElement("div", {className: n.legalText}, a.a.createElement(C, {html: e})) : null
            }, D = n(152),
            _ = Object(i.a)("\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 800px;\n\tmargin: 0 auto;\n\tpadding: 30px 0 80px 0;\n\n\t@media all and (max-width: 960px) {\n\t\twidth: 100%;\n\t}\n"),
            T = Object(r.memo)((function (t) {
                var e = t.legalText, n = t.showLogo, r = void 0 === n || n;
                return a.a.createElement("footer", {
                    className: _,
                    "aria-label": "footer"
                }, e && a.a.createElement(I, null, e), r && a.a.createElement(D.a, null))
            })), L = Object(i.a)("\n\twidth: 100%;\n\tmargin-top: -40px;\n"), P = function (t) {
                var e = t.banner, n = t.intro, r = t.children;
                return a.a.createElement("header", {className: L, "aria-label": "header"}, e, n, r)
            },
            R = Object(m.y)([["infoContainer", "\n\t\t\t:lang(ar) {\n\t\t\t\ttransform: scaleX(-1);\n\t\t\t\tdirection: rtl;\n\t\t\t}\n\t\t\twidth: 100%;\n\t\t\tpadding: 50px 0;\n\t\t\ttext-align: center;\n\n\t\t\t@media (max-width: 720px) {\n\t\t\t\tpadding: 16px 0;\n\t\t\t}\n\t"], ["wrapper", "\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 600px;\n\t\t\tmax-width: 90%;\n\t\t\tmax-height: 100%;\n\t\t\tmargin: 0 auto;\n\t\t"], ["main", function (t) {
                return "\n\t\t\tbackground-color: ".concat(t.color.text.white, ";\n\t\t\tpadding: 40px 25px;\n\t\t\tborder-radius: 6px;\n\n\t\t\t@media (max-width: 720px) {\n\t\t\t\tpadding: 16px;\n\t\t\t}\n\t\t")
            }], ["header", "\n\t\t\tmargin-bottom: 40px;\n\t\t"], ["footer", "\n\t\t\tmargin-top: 20px;\n\t\t"]]),
            M = function (t) {
                var e = t.image, n = t.title, r = t.info, c = t.children, o = t.showImage, i = void 0 === o || o,
                    u = R();
                return a.a.createElement("div", {
                    className: u.infoContainer,
                    "aria-label": "info container"
                }, a.a.createElement("div", {className: u.wrapper}, a.a.createElement("div", {className: u.main}, i && a.a.createElement("header", {className: u.header}, a.a.createElement(p, {src: e})), a.a.createElement(m.h, {
                    variant: "h2",
                    color: "primary",
                    gutterBottom: !0
                }, n), r && a.a.createElement(m.h, {
                    variant: "p",
                    color: "text.B4",
                    gutterBottom: !0
                }, r), c && a.a.createElement("footer", {className: u.footer}, c))))
            }, F = Object(m.y)([["intro", function (t, e) {
                var n = Object(c.a)(e, 1)[0];
                return ["\n\t\t\t:lang(ar){\n\t\t\t\ttransform: scaleX(-1);\n\t\t\t\tdirection: rtl;\n\t\t\t}\n\t\t\tposition: relative;\n\t\t\tbottom: 0;\n\t\t\twidth: 100%;\n\t\t\tpadding: ".concat(n ? "0 30px 20px 30px" : "0 30px 30px 30px", ";\n\t\t\tline-height: 1.5;\n\t\t\toverflow: hidden;\n\t\t\tbox-sizing: border-box;\n\t\t\tmargin-top: 40px;\n\t\t"), n && "\n\t\t\tfont-size: 14px;\n\t\t\tcolor: ".concat(t.color.text.B4, ";\n\t\t"), !n && "\n\t\t\tfont-size: 14px;\n\t\t"]
            }]]), U = function (t) {
                var e = t.title, n = t.align, r = t.children, c = F([Boolean(e)]);
                return a.a.createElement("div", {
                    className: c.intro,
                    "aria-label": "intro"
                }, e && a.a.createElement(m.h, {variant: "h4", color: "primary", gutterBottom: !0, align: n}, e), r)
            }, z = Object(m.y)([["overlay", function (t) {
                return "\n\t\t:lang(ar) > div{\n\t\t\ttransform: scaleX(-1);\n\t\t\tdirection: rtl;\n\t\t}\n\n\t\t:lang(ar) footer {\n\t\t\ttransform: scaleX(-1);\n\t\t\tdirection: rtl;\n\t\t}\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tposition: ".concat(o.H.isIOSVersionBelow12 && o.w ? "absolute" : "fixed", ";\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 2000;\n\t\tbackground-color: ").concat(Object(m.x)(t.color.text.B6, .7), ";\n\t")
            }], ["modal", function (t) {
                return "\n\t\tbackground-color: ".concat(t.color.text.white, ";\n\t\tborder-radius: 4px;\n\t")
            }]]), G = function (t) {
                var e = t.children, n = t.className, c = t.onOpen, o = t.onClose, u = z();
                return Object(r.useEffect)((function () {
                    return c && c(), function () {
                        o && o()
                    }
                }), []), a.a.createElement(m.e, null, a.a.createElement("div", {className: u.overlay}, a.a.createElement("div", {className: Object(i.b)(u.modal, n)}, e)))
            },
            B = Object(m.y)([["progressContainer", "\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\twidth: 100%;\n\t"], ["progress", function (t) {
                return "\n\t\tposition: relative;\n\t\tflex: 1 1 ".concat(95, "%;\n\t\theight: 8px;\n\t\tborder-radius: 4px;\n\t\tbackground-color: ").concat(t.color.primary.background, ";\n\t\toverflow: hidden;\n\t")
            }], ["track", function (t) {
                return "\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbottom: 0;\n\t\twidth: 100%;\n\t\tborder-radius: 4px;\n\t\tbackground-color: ".concat(t.color.primary.default, ";\n\t\ttransition: transform 0.2s linear;\n\t\ttransform-origin: left;\n\t")
            }], ["percentage", "\n\t\t:lang(ar){\n\t\t\ttransform: scaleX(-1);\n\t\t}\n\t\tflex: 1 1 ".concat(5, "%;\n\t\tmargin-left: 10px;\n\t")]]);
        var Y = Object(r.memo)((function (t) {
                var e = t.percentage, n = B(), r = "scaleX(".concat(e / 100, ")"), c = {transform: r, msTransform: r};
                return a.a.createElement("div", {className: n.progressContainer}, a.a.createElement("div", {className: n.progress}, a.a.createElement("div", {
                    className: n.track,
                    style: c
                })), a.a.createElement(m.h, {className: n.percentage, variant: "span", color: "primary"}, e, "%"))
            }), (function (t, e) {
                return t.percentage === e.percentage
            })), H = n(529), V = n.n(H), W = n(530), J = n.n(W),
            Z = Object(i.a)("\n\tposition: relative;\n\tbackground-size: cover;\n\tbackground-position: 50% 50%;\n\tz-index: 1;\n"),
            q = Object(i.a)("\n\twidth: 100%;\n\theight: 100%;\n\tbackground-image: url(".concat(J.a, ");\n\tbackground-position: 50% 50%;\n\tbackground-repeat: no-repeat;\n\tbackground-color: rgba(0,0,0,.4);\n\ttext-align: center;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 2;\n")),
            X = Object(i.a)("\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 3;\n"),
            Q = Object(i.a)("\n\t:lang(ar) {\n\t\ttransform: scaleX(-1);\n\t\tdirection:rtl;\n\t}\n\tposition: relative;\n\tcursor: pointer;\n\twidth: 100%;\n\n\t&:hover .".concat(q, " {\n\t\tbackground-image: url(").concat(V.a, ");\n\t}\n")),
            K = new Set;

        function $(t) {
            var e;
            (t.data === window.YT.PlayerState.PLAYING || t.data === window.YT.PlayerState.BUFFERING && t.target.LastPlayerState === window.YT.PlayerState.UNSTARTED) && (e = t.target) && K.forEach((function (t) {
                t !== e && t.pauseVideo()
            })), t.data !== t.target.LastPlayerState && (t.target.LastPlayerState = t.data)
        }

        var tt = n(6), et = n.n(tt), nt = n(15), rt = n(155), at = n.n(rt), ct = function () {
            return new Promise((function (t) {
                if (window.YT && window.YT.Player && window.YT.Player instanceof Function) t(); else {
                    var e = "http:" === window.location.protocol ? "http:" : "https:";
                    at()("".concat(e, "//www.youtube.com/iframe_api"));
                    var n = window.onYouTubeIframeAPIReady;
                    window.onYouTubeIframeAPIReady = function () {
                        n && n(), t()
                    }
                }
            }))
        };
        var ot = Object(r.memo)((function (t) {
            var e = t.videoId, n = function (t, e, n, o) {
                var u = Object(r.useState)(), s = Object(c.a)(u, 2), l = s[0], d = s[1], p = Object(r.useState)(!1),
                    m = Object(c.a)(p, 2), f = m[0], b = m[1], v = Object(O.j)().width;
                return Object(r.useEffect)((function () {
                    if (!f) {
                        var r = {
                            backgroundImage: 'url("https://img.youtube.com/vi/'.concat(t, '/mqdefault.jpg")'),
                            width: "100%",
                            aspectRatio: "1.79775"
                        };
                        d(a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                            className: Object(i.b)(q, n),
                            onClick: function () {
                                b(!0), e && e()
                            }
                        }), a.a.createElement("div", {className: Object(i.b)(Z, o), style: r})))
                    }
                }), [v, f]), {thumbnail: l, played: f}
            }(e, t.onStart, t.playIconClassName, t.thumbnailClassName), o = n.thumbnail, u = function (t, e, n) {
                var c = Object(r.useRef)(null), o = Object(r.useMemo)((function () {
                    if (!e || !n) return null;
                    var r = "https://www.youtube.com/embed/".concat(t, "?autoplay=1&autohide=1&controls=1&loop=0&rel=0&fs=1&wmode=opaque&showinfo=0&modestbranding=0&iv_load_policy=1&start=0&theme=dark&color=red&html5=1&vq=hd720&enablejsapi=1&origin=").concat(window.origin);
                    return a.a.createElement("div", {className: X}, a.a.createElement("iframe", {
                        title: t,
                        ref: c,
                        src: r,
                        sandbox: "allow-scripts allow-same-origin allow-popups",
                        width: "100%",
                        height: "100%",
                        frameBorder: "0",
                        allowFullScreen: !0,
                        allow: "autoplay"
                    }))
                }), [e, n]);
                return Object(r.useEffect)((function () {
                    if (c.current && e && n) {
                        var t = new window.YT.Player(c.current, {events: {onStateChange: $}});
                        return K.add(t), function () {
                            K.delete(t)
                        }
                    }
                }), [c.current, e, n]), o
            }(e, n.played, function () {
                var t = Object(r.useState)(!1), e = Object(c.a)(t, 2), n = e[0], a = e[1];
                return Object(O.b)(Object(nt.a)(et.a.mark((function t() {
                    return et.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, ct();
                            case 3:
                                a(!0), t.next = 9;
                                break;
                            case 6:
                                t.prev = 6, t.t0 = t.catch(0), a(!1);
                            case 9:
                            case"end":
                                return t.stop()
                        }
                    }), t, null, [[0, 6]])
                })))), n
            }());
            return a.a.createElement("div", {className: Q, "aria-label": "youtube video"}, o, u)
        }), (function (t, e) {
            return t.videoId === e.videoId && t.onStart === e.onStart
        })), it = n(17), ut = n(69);

        function st() {
            var t = Object(it.a)(["\n\twidth: 800px;\n\tmargin: 40px auto 70px auto;\n\tposition: relative;\n\tborder: 0;\n\tbackground: ", ";\n\toverflow: hidden;\n\tborder-radius: 3.1px;\n\tbox-shadow: 0 0 12px 0 rgba(69, 69, 69, 0.4);\n\n\t@media all and (max-width: 960px) {\n\t\twidth: 100%;\n\t\tmargin: 0 0 20px 0;\n\t}\n"]);
            return st = function () {
                return t
            }, t
        }

        function lt() {
            var t = Object(it.a)(["\n\twidth: 100%;\n\theight: 100vh;\n\tposition: fixed;\n\t", "\n"]);
            return lt = function () {
                return t
            }, t
        }

        function dt() {
            var t = Object(it.a)(["\n\twidth: 100%;\n\toverflow: auto;\n"]);
            return dt = function () {
                return t
            }, t
        }

        var pt = Object(m.y)([["container", function (t) {
            return "\n\t\t\tbackground-color: ".concat(t.survey.color.light, ";\n\t\t")
        }]]), mt = ut.a.div(dt()), ft = ut.a.div(lt(), (function (t) {
            if (t && t.backgroundImage) return "background-image: url(".concat(t.backgroundImage, ");\n\t\t\tbackground-size: cover;\n\t\t\tbackground-position: center;\n\t\t\tbackground-repeat: no-repeat;")
        })), bt = ut.a.div(st(), m.r.color.text.white), vt = function (t) {
            var e = t.children, n = t.image, r = pt();
            return a.a.createElement(mt, {className: r.container}, a.a.createElement(ft, {backgroundImage: n}), a.a.createElement(bt, null, e))
        };
        n.d(e, "b", (function () {
            return b
        })), n.d(e, "c", (function () {
            return h
        })), n.d(e, "o", (function () {
            return g
        })), n.d(e, "d", (function () {
            return w
        })), n.d(e, "e", (function () {
            return T
        })), n.d(e, "f", (function () {
            return P
        })), n.d(e, "g", (function () {
            return p
        })), n.d(e, "h", (function () {
            return M
        })), n.d(e, "i", (function () {
            return U
        })), n.d(e, "j", (function () {
            return D.a
        })), n.d(e, "k", (function () {
            return G
        })), n.d(e, "l", (function () {
            return Y
        })), n.d(e, "m", (function () {
            return C
        })), n.d(e, "n", (function () {
            return ot
        })), n.d(e, "a", (function () {
            return vt
        }))
    }, 234: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return a
        })), n.d(e, "b", (function () {
            return c
        }));
        var r = n(55);

        function a(t, e) {
            return e instanceof Array && 0 !== e.length ? e.map((function (e) {
                return t.subject.fileupload.types[e]
            })).join(t.subject.fileupload.info.seperator) : t.subject.fileupload.types.none
        }

        function c(t, e) {
            if (!(e instanceof Array) || 0 === e.length) return t.subject.fileupload.types.none;
            var n = e.map((function (e) {
                return t.subject.fileupload.types[e]
            })).join(t.subject.fileupload.info.seperator);
            return Object(r.t)(t.subject.fileupload.error.filetype, {filetype: n})
        }
    }, 237: function (t, e, n) {
        "use strict";
        n(216);
        var r = n(426);
        n.d(e, "ActiveDirectoryAutoLogin", (function () {
            return r.a
        })), n.d(e, "ActiveDirectoryLogin", (function () {
            return r.b
        })), n.d(e, "AlreadySubmit", (function () {
            return r.c
        }));
        n(95), n(427)
    }, 26: function (t, e, n) {
        "use strict";
        var r;
        !function (t) {
            t[t.TOKEN_ERROR = 200] = "TOKEN_ERROR", t[t.UPLOAD_FOLDER_FULL = 201] = "UPLOAD_FOLDER_FULL", t[t.SAVING_FAILED = 202] = "SAVING_FAILED", t[t.NO_AUTHED = 203] = "NO_AUTHED", t[t.RECAPTCHA_FAILED = 204] = "RECAPTCHA_FAILED", t[t.MISSED_ANSWER = 205] = "MISSED_ANSWER", t[t.INVALID_PARAMS = 206] = "INVALID_PARAMS"
        }(r || (r = {}));
        var a, c = n(124);
        !function (t) {
            t[t.NOT_FOUND = 100] = "NOT_FOUND", t[t.NOT_PUBLIC = 101] = "NOT_PUBLIC", t[t.FULLED = 102] = "FULLED", t[t.INVALID_DURATION = 103] = "INVALID_DURATION", t[t.MISSING_DEFAULT_ANSWER = 104] = "MISSING_DEFAULT_ANSWER", t[t.INVALID_DEFAULT_ANSWER = 105] = "INVALID_DEFAULT_ANSWER", t[t.MASTER_SURVEY_IS_NOT_EXISTED = 106] = "MASTER_SURVEY_IS_NOT_EXISTED", t[t.MASTER_SURVEY_IS_OFF = 107] = "MASTER_SURVEY_IS_OFF", t[t.INVALID_SUBMIT_DURATION = 108] = "INVALID_SUBMIT_DURATION", t[t.INVALID_ANSWER_OBJECT = 109] = "INVALID_ANSWER_OBJECT", t[t.INVALID_PRO_SURVEY = 110] = "INVALID_PRO_SURVEY", t[t.INVALID_TEMPORARY_SURVEY = 111] = "INVALID_TEMPORARY_SURVEY", t[t.NOT_ALLOWED = 112] = "NOT_ALLOWED", t[t.NOT_AVAILABLE = 113] = "NOT_AVAILABLE"
        }(a || (a = {}));
        var o = function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a[e];
                Object(c.a)(this, t), this.message = e, this.statusCode = n
            }, i = n(10), u = n(0), s = n.n(u), l = n(59), d = Object(u.createContext)(void 0),
            p = Object(u.createContext)((function () {
            })), m = function (t) {
                var e = t.children, n = Object(u.useState)(void 0), r = Object(i.a)(n, 2), a = r[0], c = r[1];
                return l.a && a && console.log("--- exception ---", a), s.a.createElement(p.Provider, {value: c}, s.a.createElement(d.Provider, {value: a}, e))
            };
        m.useException = function () {
            return Object(u.useContext)(d)
        }, m.useSetException = function () {
            return Object(u.useContext)(p)
        }, n.d(e, "a", (function () {
            return o
        })), n.d(e, "b", (function () {
            return m
        })), n.d(e, "c", (function () {
            return a
        }))
    }, 28: function (t, e, n) {
        "use strict";
        var r = n(414);
        n.d(e, "createUseChoiceAnswer", (function () {
            return r.a
        }));
        var a = n(428);
        n.d(e, "createUseInputRefAndSetAnswer", (function () {
            return a.a
        }));
        var c = n(415);
        n.d(e, "useAutoFocusOnDidMount", (function () {
            return c.a
        }));
        var o = n(416);
        n.d(e, "useHandleAnswerFinish", (function () {
            return o.a
        }));
        var i = n(417);
        n.d(e, "createMessageResolver", (function () {
            return i.a
        }));
        var u = n(213);
        n.d(e, "errorMap", (function () {
            return u.a
        }));
        n(215);
        var s = n(422);
        n.o(s, "addOptionPrefix") && n.d(e, "addOptionPrefix", (function () {
            return s.addOptionPrefix
        })), n.o(s, "focusAnswer") && n.d(e, "focusAnswer", (function () {
            return s.focusAnswer
        })), n.o(s, "scrollToSubject") && n.d(e, "scrollToSubject", (function () {
            return s.scrollToSubject
        }));
        var l = n(423);
        n.d(e, "addOptionPrefix", (function () {
            return l.a
        }));
        var d = n(424);
        n.d(e, "focusAnswer", (function () {
            return d.a
        }));
        var p = n(217);
        n.d(e, "scrollToSubject", (function () {
            return p.a
        }))
    }, 295: function (t, e, n) {
        t.exports = n.p + "static/media/thankyou.20d9cdf6.png"
    }, 296: function (t, e, n) {
        t.exports = n.p + "static/media/notfound.654a743f.png"
    }, 34: function (t, e, n) {
        "use strict";
        var r = n(6), a = n.n(r), c = n(32), o = n(15), i = n(11), u = n(104), s = n(14), l = n(18), d = n(72);

        function p(t, e) {
            return m.apply(this, arguments)
        }

        function m() {
            return (m = Object(o.a)(a.a.mark((function t(e, n) {
                var r, c, o, p, m, f, b;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, r = new l.a(u.b, u.a, u.c), new d.a(r, i.t, i.c).trackCallLandingSurvey(), c = s.a.url.leadgen("/api/v1/leadgen/landing/".concat(e)), t.next = 7, s.a.post(c, {body: JSON.stringify({answers: n})});
                        case 7:
                            return o = t.sent, t.next = 10, s.a.handleResponse(o);
                        case 10:
                            return p = t.sent, m = p.status, f = p.message, b = p.data, t.abrupt("return", {
                                status: m,
                                message: f,
                                data: b
                            });
                        case 17:
                            throw t.prev = 17, t.t0 = t.catch(0), console.log(t.t0), t.t0;
                        case 21:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 17]])
            })))).apply(this, arguments)
        }

        function f(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function b(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? f(n, !0).forEach((function (e) {
                    Object(c.a)(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(n).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var v = function () {
            var t = Object(o.a)(a.a.mark((function t(e) {
                var n, r, o, i, u, l, d, p, m, f, b, v, g;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return n = e.surveyHash, r = e.masterhash, o = e.subjectId, i = e.type, u = e.value, t.prev = 1, l = s.a.query(Object(c.a)({
                                svid: n,
                                masterhash: r,
                                sbjid: o
                            }, i, "optid" === i || "vtext" === i ? u : "")), d = s.a.url.api("/s/ans/count?".concat(l), 1), t.next = 6, s.a.get(Object(s.b)(d));
                        case 6:
                            return p = t.sent, t.next = 9, s.a.handleResponse(p);
                        case 9:
                            if (m = t.sent, f = m.status, b = m.anscount, v = m.errmsg, g = void 0 === v ? "" : v, f) {
                                t.next = 16;
                                break
                            }
                            throw new Error(g);
                        case 16:
                            return t.abrupt("return", parseInt(b, 10) || 0);
                        case 19:
                            throw t.prev = 19, t.t0 = t.catch(1), t.t0;
                        case 22:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[1, 19]])
            })));
            return function (e) {
                return t.apply(this, arguments)
            }
        }();

        function g(t) {
            return h.apply(this, arguments)
        }

        function h() {
            return (h = Object(o.a)(a.a.mark((function t(e) {
                var n, r, c, o, i, u, l;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, n = s.a.url.api("/s/survey/report/token?".concat(s.a.query({svid: e})), 1), t.next = 4, s.a.get(Object(s.b)(n));
                        case 4:
                            return r = t.sent, t.next = 7, s.a.handleResponse(r);
                        case 7:
                            if (c = t.sent, o = c.status, i = c.data, u = c.errmsg, l = void 0 === u ? "" : u, o) {
                                t.next = 14;
                                break
                            }
                            throw new Error(l);
                        case 14:
                            return t.abrupt("return", i);
                        case 17:
                            throw t.prev = 17, t.t0 = t.catch(0), t.t0;
                        case 20:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 17]])
            })))).apply(this, arguments)
        }

        function O(t, e) {
            return y.apply(this, arguments)
        }

        function y() {
            return (y = Object(o.a)(a.a.mark((function t(e, n) {
                var r, c, o, l, d, m, f, v, g, h, O, y, j, x, w, E;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return r = n.getCsrftoken(), t.prev = 1, c = e.ansobj, o = e.re_captcha, l = e.previewObj, d = s.a.url.api("/s/submit", 2), m = new FormData, f = new Headers, r && f.append("X-CSRF-TOKEN", r), m.append("ansobj", JSON.stringify(c)), i.C && m.append("previewObj", JSON.stringify(l)), o && m.append("re_captcha", o), t.next = 12, s.a.post(d, {
                                body: m,
                                headers: f
                            });
                        case 12:
                            return v = t.sent, t.next = 15, s.a.handleResponse(v);
                        case 15:
                            if (g = t.sent, h = g.status, O = g.data, y = g.errmsg, j = void 0 === y ? "" : y, h) {
                                t.next = 22;
                                break
                            }
                            throw new Error(j);
                        case 22:
                            if (t.prev = 22, !("thankyou" === O.redirect && !1 === n.isPro())) {
                                t.next = 31;
                                break
                            }
                            return t.next = 27, p(u.b, c);
                        case 27:
                            x = t.sent, w = x.status, E = x.data.data, 200 === w && null !== E && n.setAdOptions({
                                ad: E,
                                needRecommendAd: !0
                            });
                        case 31:
                            t.next = 36;
                            break;
                        case 33:
                            t.prev = 33, t.t0 = t.catch(22), console.error("Failed to get ad:", t.t0);
                        case 36:
                            return t.abrupt("return", b({}, O, {redirect: "conditional_thank_you" === O.redirect ? "ctyp" : O.redirect}));
                        case 39:
                            throw t.prev = 39, t.t1 = t.catch(1), t.t1;
                        case 42:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[1, 39], [22, 33]])
            })))).apply(this, arguments)
        }

        var j = !1;

        function x(t) {
            return w.apply(this, arguments)
        }

        function w() {
            return (w = Object(o.a)(a.a.mark((function t(e) {
                var n, r, c, o, i, u;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (t.prev = 0, j) {
                                t.next = 15;
                                break
                            }
                            return n = s.a.url.api("/s/visit/create?".concat(s.a.query({svid: e})), 1), t.next = 5, s.a.get(Object(s.b)(n));
                        case 5:
                            return r = t.sent, t.next = 8, s.a.handleResponse(r);
                        case 8:
                            if (c = t.sent, o = c.status, i = c.errmsg, u = void 0 === i ? "" : i, o) {
                                t.next = 14;
                                break
                            }
                            throw new Error(u);
                        case 14:
                            j = !0;
                        case 15:
                            t.next = 20;
                            break;
                        case 17:
                            throw t.prev = 17, t.t0 = t.catch(0), t.t0;
                        case 20:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 17]])
            })))).apply(this, arguments)
        }

        function E(t) {
            return s.a.get(s.a.url.assets("/theme/".concat(t, "/theme.json")), {cache: "no-cache"}).then((function (t) {
                return s.a.handleResponse(t)
            }))
        }

        function k(t, e) {
            return s.a.get(s.a.url.file("/json/".concat(t, "-").concat(e, ".json")), {cache: "no-cache"}).then((function (t) {
                return s.a.handleResponse(t)
            }))
        }

        function N(t) {
            return s.a.get(s.a.url.assets("/wording/".concat(t, "/s.json")), {cache: "no-cache"}).then((function (t) {
                return s.a.handleResponse(t)
            }))
        }

        function S(t, e) {
            return C.apply(this, arguments)
        }

        function C() {
            return (C = Object(o.a)(a.a.mark((function t(e, n) {
                var r, c, o, i, u, l, d, p;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, r = s.a.url.api("/s/referral/encrypt", 1), (c = new FormData).append("svid", n), c.append("token", e), t.next = 7, s.a.post(r, {body: c});
                        case 7:
                            return o = t.sent, t.next = 10, s.a.handleResponse(o);
                        case 10:
                            if (i = t.sent, u = i.status, l = i.data, d = i.errmsg, p = void 0 === d ? "" : d, u) {
                                t.next = 17;
                                break
                            }
                            throw new Error(p);
                        case 17:
                            return t.abrupt("return", l);
                        case 20:
                            if (t.prev = 20, t.t0 = t.catch(0), !t.t0.errmsg) {
                                t.next = 24;
                                break
                            }
                            throw new Error(t.t0.errmsg);
                        case 24:
                            throw t.t0;
                        case 25:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 20]])
            })))).apply(this, arguments)
        }

        function A(t, e) {
            return I.apply(this, arguments)
        }

        function I() {
            return (I = Object(o.a)(a.a.mark((function t(e, n) {
                var r, c, o, i, u, l, d;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, r = s.a.url.api("/s/referral/encrypt-keys?".concat(s.a.query({
                                svid: e,
                                token: n
                            })), 1), t.next = 4, s.a.get(Object(s.b)(r));
                        case 4:
                            return c = t.sent, t.next = 7, s.a.handleResponse(c);
                        case 7:
                            if (o = t.sent, i = o.status, u = o.data, l = o.errmsg, d = void 0 === l ? "" : l, i) {
                                t.next = 14;
                                break
                            }
                            throw new Error(d);
                        case 14:
                            return t.abrupt("return", u);
                        case 17:
                            if (t.prev = 17, t.t0 = t.catch(0), !t.t0.errmsg) {
                                t.next = 21;
                                break
                            }
                            throw new Error(t.t0.errmsg);
                        case 21:
                            throw t.t0;
                        case 22:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 17]])
            })))).apply(this, arguments)
        }

        function D(t) {
            return s.a.get(s.a.url.shorten("/".concat(t))).then((function (t) {
                return s.a.handleResponse(t)
            }))
        }

        function _(t) {
            return s.a.head(s.a.url.shorten("/".concat(t)))
        }

        function T(t, e) {
            return L.apply(this, arguments)
        }

        function L() {
            return (L = Object(o.a)(a.a.mark((function t(e, n) {
                var r, c, o, i, u, l, d, p;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, r = s.a.url.api("/s/referral/encrypt", 1), (c = new FormData).append("svid", e), c.append("token", n), t.next = 7, s.a.post(r, {body: c});
                        case 7:
                            return o = t.sent, t.next = 10, s.a.handleResponse(o);
                        case 10:
                            if (i = t.sent, u = i.status, l = i.data, d = i.errmsg, p = void 0 === d ? "" : d, u) {
                                t.next = 17;
                                break
                            }
                            throw new Error(p);
                        case 17:
                            return t.abrupt("return", l);
                        case 20:
                            if (t.prev = 20, t.t0 = t.catch(0), !t.t0.errmsg) {
                                t.next = 24;
                                break
                            }
                            throw new Error(t.t0.errmsg);
                        case 24:
                            throw t.t0;
                        case 25:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 20]])
            })))).apply(this, arguments)
        }

        function P(t, e) {
            var n = s.a.url.api("/s/referral/logger", 1), r = new FormData;
            r.append("svid", t), r.append("filename", e), s.a.post(n, {body: r})
        }

        var R = n(73), M = n(158), F = n.n(M);

        function U(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function z(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? U(n, !0).forEach((function (e) {
                    Object(c.a)(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : U(n).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function G(t) {
            return B.apply(this, arguments)
        }

        function B() {
            return (B = Object(o.a)(a.a.mark((function t(e) {
                var n, r, c, o, i, u, l;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, n = s.a.url.api("/s/survey/init-meta?".concat(s.a.query({svid: e})), 1), t.next = 4, s.a.get(Object(s.b)(n));
                        case 4:
                            return r = t.sent, t.next = 7, s.a.handleResponse(r);
                        case 7:
                            if (c = t.sent, o = c.status, i = c.data, u = c.errmsg, l = void 0 === u ? "" : u, o) {
                                t.next = 14;
                                break
                            }
                            throw new Error(l);
                        case 14:
                            return t.abrupt("return", i);
                        case 17:
                            if (t.prev = 17, t.t0 = t.catch(0), !t.t0.errmsg) {
                                t.next = 21;
                                break
                            }
                            throw new Error(t.t0.errmsg);
                        case 21:
                            throw t.t0;
                        case 22:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 17]])
            })))).apply(this, arguments)
        }

        function Y(t, e) {
            return H.apply(this, arguments)
        }

        function H() {
            return (H = Object(o.a)(a.a.mark((function t(e, n) {
                var r, c, o, i, u;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, s.a.get(s.a.url.file("/json".concat(n ? "_p" : "", "/").concat(e, ".json")), {cache: "no-cache"});
                        case 3:
                            return r = t.sent, t.next = 6, s.a.handleResponse(r);
                        case 6:
                            return c = t.sent, o = c.subjects, i = void 0 === o ? [] : o, u = Object(R.a)(c, ["subjects"]), t.abrupt("return", {
                                subjects: i,
                                data: u
                            });
                        case 13:
                            throw t.prev = 13, t.t0 = t.catch(0), t.t0;
                        case 16:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 13]])
            })))).apply(this, arguments)
        }

        function V(t, e) {
            return W.apply(this, arguments)
        }

        function W() {
            return (W = Object(o.a)(a.a.mark((function t(e, n) {
                var r, c, o, i, u, l, d, p, m, f;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, r = s.a.url.api("/s/survey/private?".concat(s.a.query({
                                svid: e,
                                password: n
                            })), 1), t.next = 4, s.a.get(Object(s.b)(r));
                        case 4:
                            return c = t.sent, t.next = 7, s.a.handleResponse(c);
                        case 7:
                            if (o = t.sent, i = o.status, u = o.data, l = (u = void 0 === u ? {} : u).subjects, d = void 0 === l ? [] : l, p = Object(R.a)(u, ["subjects"]), m = o.errmsg, f = void 0 === m ? "" : m, i) {
                                t.next = 14;
                                break
                            }
                            throw new Error(f);
                        case 14:
                            return t.abrupt("return", {subjects: d, data: p});
                        case 17:
                            if (t.prev = 17, t.t0 = t.catch(0), !t.t0.errmsg) {
                                t.next = 21;
                                break
                            }
                            throw new Error(t.t0.errmsg);
                        case 21:
                            throw t.t0;
                        case 22:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 17]])
            })))).apply(this, arguments)
        }

        function J(t, e, n) {
            return Z.apply(this, arguments)
        }

        function Z() {
            return (Z = Object(o.a)(a.a.mark((function t(e, n, r) {
                var c, o, i, u, l, d, p;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, c = s.a.url.api("/s/survey/subjects?".concat(s.a.query({
                                svid: e,
                                masterid: n,
                                password: r
                            })), 1), t.next = 4, s.a.get(Object(s.b)(c));
                        case 4:
                            return o = t.sent, t.next = 7, s.a.handleResponse(o);
                        case 7:
                            if (i = t.sent, u = i.status, l = i.data, d = i.errmsg, p = void 0 === d ? "" : d, u) {
                                t.next = 14;
                                break
                            }
                            throw new Error(p);
                        case 14:
                            return t.abrupt("return", l);
                        case 17:
                            if (t.prev = 17, t.t0 = t.catch(0), !t.t0.errmsg) {
                                t.next = 21;
                                break
                            }
                            throw new Error(t.t0.errmsg);
                        case 21:
                            throw t.t0;
                        case 22:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 17]])
            })))).apply(this, arguments)
        }

        function q(t) {
            return X.apply(this, arguments)
        }

        function X() {
            return (X = Object(o.a)(a.a.mark((function t(e) {
                var n, r, c, o, i;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, n = s.a.url.api("/s/file/get-upload-urls", 2), r = JSON.stringify({files: e}), c = {"content-type": "application/json"}, t.next = 6, s.a.post(n, {
                                body: r,
                                headers: c
                            });
                        case 6:
                            return o = t.sent, t.next = 9, s.a.handleResponse(o);
                        case 9:
                            return i = t.sent, t.abrupt("return", i);
                        case 13:
                            throw t.prev = 13, t.t0 = t.catch(0), new Error(t.t0.errmsg);
                        case 16:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 13]])
            })))).apply(this, arguments)
        }

        function Q(t, e, n, r) {
            return K.apply(this, arguments)
        }

        function K() {
            return (K = Object(o.a)(a.a.mark((function t(e, n, r, c) {
                var o, i;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, o = {"content-type": n}, t.next = 4, F()(z({
                                method: "put",
                                url: r,
                                data: e,
                                headers: o
                            }, c && {
                                onUploadProgress: function (t) {
                                    var e = Math.round(100 * t.loaded / t.total);
                                    c(e)
                                }
                            }));
                        case 4:
                            if (!((i = t.sent).status >= 400 && i.status < 500)) {
                                t.next = 7;
                                break
                            }
                            throw new Error;
                        case 7:
                            t.next = 12;
                            break;
                        case 9:
                            throw t.prev = 9, t.t0 = t.catch(0), t.t0;
                        case 12:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 9]])
            })))).apply(this, arguments)
        }

        function $(t, e) {
            return tt.apply(this, arguments)
        }

        function tt() {
            return (tt = Object(o.a)(a.a.mark((function t(e, n) {
                var r, c;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, s.a.get(s.a.url.api("/admin/survey/conditional_thank_you?svid=".concat(e, "&is_preview=").concat(n ? 1 : 0), 3));
                        case 3:
                            return r = t.sent, t.next = 6, s.a.handleResponse(r);
                        case 6:
                            return c = t.sent, t.abrupt("return", c);
                        case 10:
                            throw t.prev = 10, t.t0 = t.catch(0), new Error("There is something wrong when fetching conditional thank you pages.");
                        case 13:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 10]])
            })))).apply(this, arguments)
        }

        function et(t, e) {
            return nt.apply(this, arguments)
        }

        function nt() {
            return (nt = Object(o.a)(a.a.mark((function t(e, n) {
                var r, c;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, s.a.get(s.a.url.file("/json".concat(n ? "_p" : "", "/nested_dropdown/").concat(e, ".json")), {cache: "no-cache"});
                        case 3:
                            return r = t.sent, t.next = 6, s.a.handleResponse(r);
                        case 6:
                            return c = t.sent, t.abrupt("return", c);
                        case 10:
                            throw t.prev = 10, t.t0 = t.catch(0), new Error("There is something wrong when fetching nested dropdown data.");
                        case 13:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 10]])
            })))).apply(this, arguments)
        }

        function rt(t) {
            return at.apply(this, arguments)
        }

        function at() {
            return (at = Object(o.a)(a.a.mark((function t(e) {
                var n, r, c, o, i, u, l, d, p;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, s.a.get(e, {cache: "no-cache"});
                        case 3:
                            return n = t.sent, t.next = 6, s.a.handleResponse(n);
                        case 6:
                            return r = t.sent, c = r.general, o = c.titles, i = void 0 === o ? [] : o, u = c.placeholders, l = void 0 === u ? [] : u, d = c.data, p = void 0 === d ? [] : d, t.abrupt("return", {
                                titles: i,
                                placeholders: l,
                                data: p
                            });
                        case 12:
                            return t.prev = 12, t.t0 = t.catch(0), console.error(t.t0), t.abrupt("return", {
                                titles: [],
                                placeholders: [],
                                data: []
                            });
                        case 16:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 12]])
            })))).apply(this, arguments)
        }

        var ct = n(53), ot = n.n(ct), it = n(222), ut = n.n(it);

        function st(t, e) {
            return lt.apply(this, arguments)
        }

        function lt() {
            return (lt = Object(o.a)(a.a.mark((function t(e, n) {
                var r, c, o, i, u, l, d, p;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, r = s.a.url.api("/s/fb-login", 1), (c = new FormData).append("svid", e), c.append("fb_token", n), t.next = 7, s.a.post(r, {body: c});
                        case 7:
                            return o = t.sent, t.next = 10, s.a.handleResponse(o);
                        case 10:
                            if (i = t.sent, u = i.status, l = i.fb_id, d = i.errmsg, p = void 0 === d ? "" : d, u) {
                                t.next = 17;
                                break
                            }
                            throw new Error(p);
                        case 17:
                            return t.abrupt("return", l);
                        case 20:
                            throw t.prev = 20, t.t0 = t.catch(0), t.t0;
                        case 23:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 20]])
            })))).apply(this, arguments)
        }

        function dt(t, e) {
            return pt.apply(this, arguments)
        }

        function pt() {
            return (pt = Object(o.a)(a.a.mark((function t(e, n) {
                var r, c, o, u, l, d;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (t.prev = 0, i.l && n) {
                                t.next = 4;
                                break
                            }
                            return t.abrupt("return");
                        case 4:
                            return r = "".concat(i.B).concat(i.d), t.next = 7, s.a.post(r);
                        case 7:
                            return c = t.sent, t.next = 10, s.a.handleResponse(c);
                        case 10:
                            if (o = t.sent, u = o.status, l = o.data, 400 !== u) {
                                t.next = 18;
                                break
                            }
                            return (d = new ut.a(ot()(l, "redirect_login_url"), !0)).set("query", {survey: e}), window.location.href = "".concat(d.href), t.abrupt("return");
                        case 18:
                            return 200 === u && sessionStorage.setItem("survey_third_party_unique_id", ot()(l, "unique_id", "")), t.abrupt("return", ot()(l, "unique_id", ""));
                        case 22:
                            t.prev = 22, t.t0 = t.catch(0);
                        case 24:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 22]])
            })))).apply(this, arguments)
        }

        var mt = n(434), ft = n.n(mt);

        function bt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function vt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? bt(n, !0).forEach((function (e) {
                    Object(c.a)(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : bt(n).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function gt(t, e) {
            return ht.apply(this, arguments)
        }

        function ht() {
            return (ht = Object(o.a)(a.a.mark((function t(e, n) {
                var r, c, o, i;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, r = s.a.url.api("/s/ans/temp/get?".concat(s.a.query({
                                svid: e,
                                temporary_answer_hash: n
                            })), 2), t.next = 4, s.a.get(Object(s.b)(r));
                        case 4:
                            return c = t.sent, t.next = 7, s.a.handleResponse(c);
                        case 7:
                            return o = t.sent, i = o.data, t.abrupt("return", i);
                        case 12:
                            throw t.prev = 12, t.t0 = t.catch(0), t.t0;
                        case 15:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 12]])
            })))).apply(this, arguments)
        }

        function Ot(t, e) {
            return yt.apply(this, arguments)
        }

        function yt() {
            return (yt = Object(o.a)(a.a.mark((function t(e, n) {
                var r, c, o, i, u, l, d, p, m;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, r = n.ansobj, c = JSON.stringify({ansobj: vt({}, ft()(r, ["svid"]), {tempAnswers: e})}), o = {
                                "content-type": "application/json",
                                accept: "application/json"
                            }, i = s.a.url.api("/s/ans/temp/store", 2), t.next = 7, s.a.post(i, {body: c, headers: o});
                        case 7:
                            return u = t.sent, t.next = 10, s.a.handleResponse(u);
                        case 10:
                            if (l = t.sent, d = l.status, p = l.data, m = p.temporary_answer_hash, d) {
                                t.next = 16;
                                break
                            }
                            throw d;
                        case 16:
                            return t.abrupt("return", m);
                        case 19:
                            throw t.prev = 19, t.t0 = t.catch(0), t.t0;
                        case 22:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 19]])
            })))).apply(this, arguments)
        }

        function jt(t, e, n) {
            return xt.apply(this, arguments)
        }

        function xt() {
            return (xt = Object(o.a)(a.a.mark((function t(e, n, r) {
                var c, o, i, u, l;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, c = {
                                svid: e,
                                temporary_answer_hash: n
                            }, o = JSON.stringify(c), i = {"content-type": "application/json"}, u = s.a.url.api("/s/ans/temp/del", 2), t.next = 7, s.a.delete(u, {
                                body: o,
                                headers: i
                            });
                        case 7:
                            return l = t.sent, t.next = 10, s.a.handleResponse(l);
                        case 10:
                            r(), t.next = 17;
                            break;
                        case 13:
                            throw t.prev = 13, t.t0 = t.catch(0), r(), t.t0;
                        case 17:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 13]])
            })))).apply(this, arguments)
        }

        var wt = n(124), Et = function t(e, n, r, a, c) {
            Object(wt.a)(this, t), this.status = void 0, this.mbr_id = void 0, this.accessToken = void 0, this.refreshToken = void 0, this.errmsg = void 0, this.status = e, this.mbr_id = r, this.errmsg = n, this.accessToken = a, this.refreshToken = c
        };

        function kt(t, e, n, r) {
            return Nt.apply(this, arguments)
        }

        function Nt() {
            return (Nt = Object(o.a)(a.a.mark((function t(e, n, r, c) {
                var o, i, u, l, d, p;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, o = s.a.url.api("/admin/adauth/login", 1), (i = new FormData).append("svid", e), i.append("account", n), i.append("password", r), c && i.append("recaptcha_token", c), t.next = 9, s.a.post(o, {body: i});
                        case 9:
                            return u = t.sent, t.next = 12, s.a.handleResponse(u);
                        case 12:
                            return l = t.sent, d = l.status, p = l.data, t.abrupt("return", new Et(d, "no error", p.mbr_id, p.access_token, p.refresh_token));
                        case 18:
                            return t.prev = 18, t.t0 = t.catch(0), t.abrupt("return", new Et(t.t0.status, t.t0.errmsg));
                        case 21:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 18]])
            })))).apply(this, arguments)
        }

        function St(t) {
            return Ct.apply(this, arguments)
        }

        function Ct() {
            return (Ct = Object(o.a)(a.a.mark((function t(e) {
                var n, r, c, o, i, u;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, n = s.a.url.api("/admin/adauth/auto-login", 1), (r = new FormData).append("svid", e), t.next = 6, s.a.post(n, {body: r});
                        case 6:
                            return c = t.sent, t.next = 9, s.a.handleResponse(c);
                        case 9:
                            return o = t.sent, i = o.status, u = o.data, t.abrupt("return", new Et(i, "no error", u.mbr_id, u.access_token, u.refresh_token));
                        case 15:
                            return t.prev = 15, t.t0 = t.catch(0), t.abrupt("return", new Et(t.t0.status, t.t0.errmsg));
                        case 18:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 15]])
            })))).apply(this, arguments)
        }

        function At(t, e) {
            return It.apply(this, arguments)
        }

        function It() {
            return (It = Object(o.a)(a.a.mark((function t(e, n) {
                var r, c, o, i, u;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, r = s.a.url.api("/admin/adauth/submit-available", 1), (c = new FormData).append("svid", e), c.append("mbr_id", n), t.next = 7, s.a.post(r, {body: c});
                        case 7:
                            return o = t.sent, t.next = 10, s.a.handleResponse(o);
                        case 10:
                            return i = t.sent, u = i.status, t.abrupt("return", new Et(u, "no error"));
                        case 15:
                            return t.prev = 15, t.t0 = t.catch(0), t.abrupt("return", new Et(t.t0.status, t.t0.errmsg));
                        case 18:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 15]])
            })))).apply(this, arguments)
        }

        function Dt(t, e) {
            return _t.apply(this, arguments)
        }

        function _t() {
            return (_t = Object(o.a)(a.a.mark((function t(e, n) {
                var r, c, o, i;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, s.a.get(s.a.url.api("/s/survey/verify?svid=".concat(e).concat(n.password ? "&password=".concat(n.password) : "").concat(n.masterid ? "&master_id=".concat(n.masterid) : ""), 2));
                        case 3:
                            return r = t.sent, t.next = 6, s.a.handleResponse(r);
                        case 6:
                            return c = t.sent, o = c.data, i = o.logic, t.abrupt("return", i);
                        case 12:
                            throw t.prev = 12, t.t0 = t.catch(0), new Error("There is something wrong when fetching logic JSON.");
                        case 15:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 12]])
            })))).apply(this, arguments)
        }

        function Tt(t, e) {
            return Lt.apply(this, arguments)
        }

        function Lt() {
            return (Lt = Object(o.a)(a.a.mark((function t(e, n) {
                var r, c;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, s.a.get(s.a.url.file("/json".concat(n.usePreviewData ? "_p" : "", "/verify/").concat(e, ".json")), {cache: "no-cache"});
                        case 3:
                            return r = t.sent, t.next = 6, s.a.handleResponse(r);
                        case 6:
                            return c = t.sent, t.abrupt("return", c);
                        case 10:
                            throw t.prev = 10, t.t0 = t.catch(0), new Error("There is something wrong when fetching logic JSON.");
                        case 13:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 10]])
            })))).apply(this, arguments)
        }

        function Pt(t, e, n) {
            return Rt.apply(this, arguments)
        }

        function Rt() {
            return (Rt = Object(o.a)(a.a.mark((function t(e, n, r) {
                var c, o, i;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, fetch(e, n);
                        case 2:
                            return c = t.sent, t.next = 5, s.a.handleResponse(c);
                        case 5:
                            if (!("errmsg" in (o = t.sent))) {
                                t.next = 10;
                                break
                            }
                            return i = o.errmsg.toUpperCase(), r(i), t.abrupt("return", null);
                        case 10:
                            return t.abrupt("return", {logic_hash: o.data.hash});
                        case 11:
                        case"end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        n.d(e, "j", (function () {
            return v
        })), n.d(e, "t", (function () {
            return g
        })), n.d(e, "C", (function () {
            return O
        })), n.d(e, "d", (function () {
            return x
        })), n.d(e, "w", (function () {
            return E
        })), n.d(e, "x", (function () {
            return k
        })), n.d(e, "z", (function () {
            return N
        })), n.d(e, "m", (function () {
            return S
        })), n.d(e, "l", (function () {
            return A
        })), n.d(e, "u", (function () {
            return D
        })), n.d(e, "c", (function () {
            return _
        })), n.d(e, "f", (function () {
            return T
        })), n.d(e, "A", (function () {
            return P
        })), n.d(e, "p", (function () {
            return G
        })), n.d(e, "k", (function () {
            return Y
        })), n.d(e, "s", (function () {
            return V
        })), n.d(e, "o", (function () {
            return J
        })), n.d(e, "y", (function () {
            return q
        })), n.d(e, "E", (function () {
            return Q
        })), n.d(e, "i", (function () {
            return $
        })), n.d(e, "q", (function () {
            return et
        })), n.d(e, "r", (function () {
            return rt
        })), n.d(e, "g", (function () {
            return st
        })), n.d(e, "F", (function () {
            return dt
        })), n.d(e, "v", (function () {
            return gt
        })), n.d(e, "B", (function () {
            return Ot
        })), n.d(e, "e", (function () {
            return jt
        })), n.d(e, "b", (function () {
            return kt
        })), n.d(e, "a", (function () {
            return St
        })), n.d(e, "D", (function () {
            return At
        })), n.d(e, "h", (function () {
            return Dt
        })), n.d(e, "n", (function () {
            return Tt
        })), n.d(e, "G", (function () {
            return Pt
        }))
    }, 392: function (t, e, n) {
        "use strict";
        var r = n(111), a = n(393);
        e.a = function (t) {
            var e = Object(r.parse)(window.location.search, {ignoreQueryPrefix: !0});
            e.lang = t, Object(a.a)(e)
        }
    }, 393: function (t, e, n) {
        "use strict";
        var r = n(111);
        e.a = function (t) {
            var e = Object(r.stringify)(t, {addQueryPrefix: !0});
            window.location.href = "".concat(window.location.protocol, "//").concat(window.location.host).concat(window.location.pathname).concat(e)
        }
    }, 405: function (t, e) {
    }, 406: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return s
        }));
        var r = n(10), a = n(0), c = n.n(a), o = n(11), i = Object(a.createContext)({page: "index", ctypSn: void 0}),
            u = Object(a.createContext)((function () {
            })), s = function (t) {
                var e = t.children, n = Object(a.useState)({page: "index", ctypSn: void 0}), s = Object(r.a)(n, 2),
                    l = s[0], d = s[1], p = Object(a.useCallback)((function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0, r = t;
                        "conditional_thank_you" === t && (r = "undefined" === typeof n ? "thankyou" : "ctyp"), d({
                            page: r,
                            ctypSn: n
                        }), o.w && window.parent.postMessage({
                            type: "CHANGE_PAGE",
                            payload: {ctypSn: n, page: r, origin: e}
                        }, "*")
                    }), []);
                return c.a.createElement(u.Provider, {value: p}, c.a.createElement(i.Provider, {value: l}, e))
            };
        s.usePage = function () {
            return Object(a.useContext)(i)
        }, s.useSetPage = function () {
            return Object(a.useContext)(u)
        }
    }, 414: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return l
        }));
        var r = n(6), a = n.n(r), c = n(15), o = n(8), i = n(56), u = n(28), s = n(0);

        function l(t, e, n, r) {
            var l = function (t) {
                var n = t.meta;
                return {value: e(t), elseValue: n && n.else && n.else.value || ""}
            }, d = function (t, e) {
                return t.value === e.value && t.elseValue === e.elseValue
            };
            return function () {
                var e = Object(o.c)(), p = Object(o.i)(), m = Object(s.useMemo)((function () {
                        var t = e.getSubjectData(p);
                        return "undefined" === typeof t ? {options: void 0, extras: void 0} : t
                    }), [e, p]), f = m.options, b = m.extras, v = Object(o.l)(p, i.f), g = Object(o.h)(p, l, d),
                    h = Object(s.useMemo)((function () {
                        var t = f ? f[f.length - 1] : void 0, e = f ? f[f.length - 2] : void 0;
                        return t && 1 === t.elses ? t : e && 1 === e.elses ? e : void 0
                    }), [f]), O = Object(s.useCallback)(function () {
                        var t = Object(c.a)(a.a.mark((function t(n) {
                            var r, c, o;
                            return a.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (h) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return r = e.getSubjectAnswers(p), c = {payload: []}, o = ("undefined" === typeof r ? c : r).payload, t.next = 7, e.setAnswer(p, {
                                            payload: o,
                                            meta: {else: {id: h.ID, value: n}}
                                        });
                                    case 7:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }(), [e, p, h]), y = Object(u.useHandleAnswerFinish)(e, p), j = "single" === t ? y : void 0,
                    x = Object(s.useMemo)((function () {
                        return Object(i.a)(500)(j)
                    }), [j]), w = j ? x : void 0, E = Object(s.useCallback)(function () {
                        var t = Object(c.a)(a.a.mark((function t(e) {
                            return a.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, O(e);
                                    case 2:
                                        w && w();
                                    case 3:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }(), [O, w]), k = "single" === t ? E : void 0, N = Object(s.useCallback)(function () {
                        var t = Object(c.a)(a.a.mark((function t(c, o) {
                            var i, s, l, d, m, f;
                            return a.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return i = e.getSubjectAnswers(p), s = {
                                            payload: [],
                                            meta: void 0
                                        }, d = (l = "undefined" === typeof i ? s : i).payload, m = l.meta, f = n(o, c), t.next = 6, e.setAnswer(p, {
                                            payload: r(c, f, d),
                                            meta: m
                                        });
                                    case 6:
                                        !w || h && Object(u.addOptionPrefix)(h.ID) === c || w(!f);
                                    case 7:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function (e, n) {
                            return t.apply(this, arguments)
                        }
                    }(), [e, p, h, w]), S = Object(s.useCallback)((function (t) {
                        var n = e.getState();
                        if (!(n.meta.calc_mode || n.settings.preview && n.settings.calc_mode)) return v;
                        if ("undefined" === typeof t || "undefined" === typeof t[p]) return v;
                        var r = t[p].options;
                        return "undefined" === typeof r || "{}" === JSON.stringify(r) ? v : r
                    }), [e, p, v]);
                return {
                    columnDesktop: b && b.column ? b.column : 2,
                    columnMobile: b && b.column_m ? b.column_m : 1,
                    options: f,
                    optionStates: v,
                    getMutatedOptionStates: S,
                    value: g.value,
                    elseValue: g.elseValue,
                    elseOption: h,
                    onChange: N,
                    onElseChange: O,
                    onElseFinished: k
                }
            }
        }
    }, 415: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return o
        }));
        var r = n(8), a = n(28), c = n(0);

        function o() {
            var t = Object(r.c)(), e = Object(r.i)();
            Object(c.useLayoutEffect)((function () {
                if (t.getSurveyData().multiplePages) {
                    var n = t.getPagination();
                    n.pages[n.current][0] === e && t.isFocusable(e) && Object(a.focusAnswer)(e)
                }
            }), [])
        }
    }, 416: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return o
        }));
        var r = n(28), a = n(51), c = n(0);

        function o(t, e) {
            var n = a.a.useGoPage();
            return Object(c.useCallback)((function () {
                var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!a) if (t.isSingleSubjectPerPage()) n(); else {
                    var c = t.isNextFocusable(e);
                    c && Object(r.focusAnswer)(c)
                }
            }), [t, e, n])
        }
    }, 417: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return o
        }));
        var r = n(213), a = n(215), c = {error: r.a, info: a.a};

        function o(t) {
            var e = c[t];
            return function (t, n) {
                var r = e[n.type];
                return r ? r(t, n) : void 0
            }
        }
    }, 418: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return a
        }));
        var r = n(214);

        function a(t) {
            return t.split("").filter(r.a).length
        }
    }, 419: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return a
        }));
        var r = n(10);

        function a(t, e) {
            return Object.entries(e).reduce((function (t, e) {
                var n = Object(r.a)(e, 2), a = n[0], c = n[1];
                return t.replace("{{".concat(a, "}}"), "".concat(c))
            }), t)
        }
    }, 420: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return l
        }));
        var r = n(73), a = n(58), c = n(32), o = n(10), i = n(0);

        function u(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function s(t, e) {
            var n = Object.keys(e);
            if (!n.length) return [t];
            var r = Object(o.a)(n, 1)[0], l = t.split("{{".concat(r, "}}")), d = function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(n, !0).forEach((function (e) {
                        Object(c.a)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(n).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }({}, e);
            return delete d[r], l.reduce((function (t, n) {
                if (!t.length) return s(n, d);
                var c = e[r], o = Object(i.isValidElement)(c) ? Object(i.cloneElement)(c, {key: r}) : c;
                return [].concat(Object(a.a)(t), [o], Object(a.a)(s(n, d)))
            }), [])
        }

        function l(t) {
            return s(t.children, Object(r.a)(t, ["children"]))
        }
    }, 421: function (t, e) {
    }, 422: function (t, e) {
    }, 423: function (t, e, n) {
        "use strict";

        function r(t) {
            return "opt_".concat(t)
        }

        n.d(e, "a", (function () {
            return r
        }))
    }, 424: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return a
        }));
        var r = n(217);

        function a(t) {
            var e = document.querySelector('[data-subject-answer="'.concat(t, '"]'));
            e && e.focus && e.focus(), Object(r.a)(t)
        }
    }, 426: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return m
        })), n.d(e, "b", (function () {
            return b
        })), n.d(e, "c", (function () {
            return g
        }));
        var r = n(6), a = n.n(r), c = n(15), o = n(10), i = n(34), u = n(68), s = n.n(u), l = n(95), d = n(11);

        function p(t, e) {
            var n = Object(o.a)(t, 6), r = n[0], a = n[1], c = n[2], i = n[3], u = n[4], l = n[5];
            e.accessToken && s.a.set("userToken", e.accessToken), e.refreshToken && s.a.set("refreshToken", e.refreshToken), e.mbr_id && (s.a.set("mbr_id", e.mbr_id), a.setThirdPartyLogin(e.mbr_id)), "ALREADY_DONE" === e.errmsg ? u(!0) : "NOT_ALLOWED" === e.errmsg ? l(!0) : r.handleStageFinished(c, i)
        }

        function m(t) {
            return f.apply(this, arguments)
        }

        function f() {
            return (f = Object(c.a)(a.a.mark((function t(e) {
                var n, r, c;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return n = Object(o.a)(e, 1), r = n[0], t.next = 3, Object(i.a)(r.surveyHash);
                        case 3:
                            ((c = t.sent).status || "ALREADY_DONE" === c.errmsg || "NOT_ALLOWED" === c.errmsg) && p(e, c);
                        case 5:
                        case"end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function b(t, e, n, r) {
            return v.apply(this, arguments)
        }

        function v() {
            return (v = Object(c.a)(a.a.mark((function t(e, n, r, u) {
                var s, m, f, b;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (s = Object(o.a)(e, 1), m = s[0], !d.k) {
                                t.next = 5;
                                break
                            }
                            window.grecaptcha.ready(Object(c.a)(a.a.mark((function t() {
                                var c, o, s;
                                return a.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, window.grecaptcha.execute(u, {action: "submit"});
                                        case 2:
                                            return c = t.sent, t.next = 5, Object(i.b)(m.surveyHash, n, r, c);
                                        case 5:
                                            o = t.sent, s = m.wording, o.status || "ALREADY_DONE" === o.errmsg || "NOT_ALLOWED" === o.errmsg ? p(e, o) : o.errmsg ? Object(l.a)(s, o.errmsg) : Object(l.a)(s);
                                        case 8:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t)
                            })))), t.next = 10;
                            break;
                        case 5:
                            return t.next = 7, Object(i.b)(m.surveyHash, n, r);
                        case 7:
                            f = t.sent, b = m.wording, f.status || "ALREADY_DONE" === f.errmsg || "NOT_ALLOWED" === f.errmsg ? p(e, f) : f.errmsg ? Object(l.a)(b, f.errmsg) : Object(l.a)(b);
                        case 10:
                        case"end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function g(t, e) {
            return h.apply(this, arguments)
        }

        function h() {
            return (h = Object(c.a)(a.a.mark((function t(e, n) {
                var r;
                return a.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(i.D)(e, n);
                        case 2:
                            if ("ALREADY_DONE" !== (r = t.sent).errmsg) {
                                t.next = 7;
                                break
                            }
                            return t.abrupt("return", "ALREADY_DONE");
                        case 7:
                            if ("NOT_ALLOWED" !== r.errmsg) {
                                t.next = 11;
                                break
                            }
                            return t.abrupt("return", "NOT_ALLOWED");
                        case 11:
                            return t.abrupt("return", "NOT_YET");
                        case 12:
                        case"end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }
    }, 427: function (t, e) {
    }, 428: function (t, e, n) {
        "use strict";
        var r = n(6), a = n.n(r), c = n(32), o = n(15), i = n(10), u = n(0), s = n.n(u), l = n(158), d = n.n(l),
            p = n(287), m = n.n(p), f = n(53), b = n.n(f), v = n(8), g = n(18), h = n(47);

        function O(t, e) {
            if (e.status) return {
                type: "success",
                value: "invoice" === Object(h.get)(e, "data.source", "") ? Object(h.get)(t, "subject.reissue_invoice.success", "\u767c\u7968\u865f\u78bc\u9a57\u8b49\u6210\u529f\u3002Valid.") : Object(h.get)(e, "data.company_name", "")
            };
            var n = Object(h.get)(e, "response.data.errmsg", "");
            if (n) {
                var r;
                switch (n) {
                    case"INVOICE_NOT_EXIST":
                        r = Object(h.get)(t, "subject.reissue_invoice.error.invoice_not_exist", "\u6b64\u767c\u7968\u865f\u78bc\u4e0d\u5b58\u5728\uff0c\u8acb\u78ba\u8a8d\u767c\u7968\u865f\u78bc\u662f\u5426\u586b\u5beb\u6b63\u78ba\u3002Invalid invoice number. Please check the number again.");
                        break;
                    case"INVOICE_MORE_THAN_HALF_YEAR":
                        r = Object(h.get)(t, "subject.reissue_invoice.error.invoice_more_than_half_year", "\u6b64\u767c\u7968\u5df2\u91cd\u65b0\u958b\u7acb\uff0c\u7121\u6cd5\u518d\u6b21\u91cd\u958b\u767c\u7968\u3002Invoice has been reissued.");
                        break;
                    case"INVOICE_ALREADY_REISSUED":
                        r = Object(h.get)(t, "subject.reissue_invoice.error.invoice_already_reissued", "\u767c\u7968\u5df2\u8d85\u904e\u534a\u5e74\u671f\u9650\uff0c\u6b64\u554f\u5377\u50c5\u80fd\u91cd\u958b\u534a\u5e74\u5167\u7684\u767c\u7968\u3002Invoice is overdue. Only invoice within six months can be re-issue.");
                        break;
                    case"TAX_ID_INVALID":
                        r = "Please enter a valid Tax ID number";
                        break;
                    default:
                        r = n
                }
                return {type: "error", value: r}
            }
            return {type: "error", value: Object(h.get)(t, "subject.text.status.api_failed", "")}
        }

        function y(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function j(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? y(n, !0).forEach((function (e) {
                    Object(c.a)(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(n).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        n.d(e, "a", (function () {
            return w
        }));
        var x = function (t) {
            return t
        };

        function w(t, e) {
            return function (n, r) {
                var c = Object(v.h)(r, x), l = c.payload[0], p = Object(u.useRef)(null), f = Object(u.useRef)(null),
                    h = Object(g.c)(), y = h.wording, w = h.surveyHash, E = h.query, k = h.data,
                    N = h.reissueInvoiceSurveyHash, S = s.a.useState(!1), C = Object(i.a)(S, 2), A = C[0], I = C[1],
                    D = s.a.useState({type: "", value: ""}), _ = Object(i.a)(D, 2), T = _[0], L = _[1],
                    P = s.a.useRef(!1), R = s.a.useRef(!1), M = s.a.useRef(!1), F = b()(E, "lang", null) || k.language,
                    U = Object(u.useCallback)((function (t) {
                        return Object(o.a)(a.a.mark((function c() {
                            var o, i, u, s;
                            return a.a.wrap((function (a) {
                                for (; ;) switch (a.prev = a.next) {
                                    case 0:
                                        return null !== f.current && f.current(), o = e(p.current), a.next = 4, n.setAnswer(r, {
                                            payload: o,
                                            meta: {
                                                textApi: P.current ? {
                                                    checkCount: !0,
                                                    hasError: R.current
                                                } : {checkCount: !1, isLoading: !0}
                                            }
                                        });
                                    case 4:
                                        if (!P.current) {
                                            a.next = 7;
                                            break
                                        }
                                        return P.current = !1, a.abrupt("return");
                                    case 7:
                                        return I(!0), M.current = !0, a.prev = 9, a.next = 12, d.a.post(b()(t, "extras.apiUrl"), {
                                            svHash: w,
                                            value: o[0],
                                            lang: F
                                        }, {
                                            cancelToken: new d.a.CancelToken((function (t) {
                                                f.current = t
                                            }))
                                        });
                                    case 12:
                                        return i = a.sent, u = i.data, o = e(p.current), a.next = 17, n.setAnswer(r, {
                                            payload: o,
                                            meta: {textApi: {isLoading: !1, hasError: !1, checkCount: P.current}}
                                        });
                                    case 17:
                                        I(!1), M.current = !1, L((function (t) {
                                            return w === N ? j({}, t, {}, O(y, u)) : j({}, t, {
                                                type: "success",
                                                value: b()(u, "msg", "")
                                            })
                                        })), R.current = !1, P.current = !1, a.next = 36;
                                        break;
                                    case 24:
                                        if (a.prev = 24, a.t0 = a.catch(9), !d.a.isCancel(a.t0)) {
                                            a.next = 28;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 28:
                                        return s = e(p.current), a.next = 31, n.setAnswer(r, {
                                            payload: s,
                                            meta: {textApi: {isLoading: !1, hasError: !0, checkCount: P.current}}
                                        });
                                    case 31:
                                        I(!1), M.current = !1, L((function (t) {
                                            return w === N ? j({}, t, {}, O(y, a.t0)) : j({}, t, {
                                                type: "error",
                                                value: b()(a.t0, "response.data.msg", b()(y, "subject.text.status.api_failed", ""))
                                            })
                                        })), R.current = !0, P.current = !1;
                                    case 36:
                                    case"end":
                                        return a.stop()
                                }
                            }), c, null, [[9, 24]])
                        })))
                    }), [n, r, F, N, w, y]), z = Object(u.useCallback)(function () {
                        var t = n.getSubjectData(r);
                        return t && "api" === t.attr ? m()(U(t), 500) : function () {
                        }
                    }(), []), G = Object(u.useCallback)(Object(o.a)(a.a.mark((function t() {
                        var c, o;
                        return a.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (c = n.getSubjectData(r), p.current) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    if (t.prev = 3, o = e(p.current), !c || "api" !== c.attr) {
                                        t.next = 12;
                                        break
                                    }
                                    if (P.current = !0, !M.current) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 9:
                                    return t.next = 11, U(c)();
                                case 11:
                                    return t.abrupt("return");
                                case 12:
                                    return t.next = 14, n.setAnswer(r, {
                                        payload: o,
                                        meta: {textApi: {checkCount: !0, hasError: !1}}
                                    });
                                case 14:
                                    t.next = 18;
                                    break;
                                case 16:
                                    t.prev = 16, t.t0 = t.catch(3);
                                case 18:
                                case"end":
                                    return t.stop()
                            }
                        }), t, null, [[3, 16]])
                    }))), [n, r, U]);
                return Object(u.useEffect)((function () {
                    p.current && t(p.current, l)
                }), [c]), {inputRef: p, onChange: z, setAnswer: G, isLoading: A, message: T}
            }
        }
    }, 429: function (t, e, n) {
        t.exports = n.p + "static/media/logo-loading.056bdfb3.png"
    }, 51: function (t, e, n) {
        "use strict";
        var r = n(8), a = n(11), c = n(0), o = n.n(c), i = function (t) {
            return t.dirty
        };

        function u(t) {
            var e = Object(r.f)(i);
            Object(c.useEffect)((function () {
                if (!t.isPreview() && !a.w && e) return a.H.isIOS ? window.onpagehide = function () {
                } : window.onbeforeunload = function () {
                    return t.wording.common.info.onbeforeunload
                }, ft;
                ft()
            }), [t, e])
        }

        var s = function (t) {
            return t.pending > 0
        };

        function l() {
            return Object(r.f)(s)
        }

        var d = n(29), p = n(56);

        function m(t) {
            var e = st.useDisabled(), n = Object(d.g)(e);
            return {
                disabled: e, onSubmit: Object(c.useMemo)((function () {
                    return Object(p.h)(2e3)((function () {
                        n.current || t()
                    }))
                }), [t])
            }
        }

        var f = n(6), b = n.n(f), v = n(10), g = n(15), h = n(32), O = n(523), y = n.n(O), j = n(222), x = n.n(j),
            w = n(53), E = n.n(w), k = n(524), N = n(58), S = n(293), C = n.n(S);

        function A(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function I(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? A(n, !0).forEach((function (e) {
                    Object(h.a)(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : A(n).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var D = function (t) {
                return E()(t, "id", null) ? "var_".concat(t.id) : "error"
            }, _ = function (t) {
                var e = function (t) {
                    return Object.keys(t).reduce((function (e, n) {
                        var r = t[n];
                        if (n !== String(r.sn)) return e;
                        var a = D(t[n]);
                        return "error" === a ? e : I({}, e, Object(h.a)({}, a, r.value))
                    }), {})
                }(t), n = function (t) {
                    return Object.keys(t).reduce((function (e, n) {
                        var r = t[n];
                        if (n !== String(r.sn)) return e;
                        var a = D(t[n]);
                        return "error" === a ? e : [].concat(Object(N.a)(e), [a])
                    }), [])
                }(t);
                return C()(e) || C()(n) ? {} : I({}, e, {logic: n})
            }, T = n(34), L = n(14), P = n(57), R = n(26), M = n(223), F = n(18), U = n(72), z = n(59), G = n(68),
            B = n.n(G), Y = {
                haveSameBrowserFlagFromCookie: function (t) {
                    return !!B.a.get("quarantineSameBrowser_".concat(t)) && (this.resetSameBrowserFlag(t), B.a.remove("quarantineSameBrowser_".concat(t)), !0)
                }, putSameBrowserFlagToCookie: function (t, e) {
                    if (B.a.get("quarantineSameBrowserBaseDate_".concat(t))) if (this.isExpire(e, t)) this.resetSameBrowserFlag(t); else {
                        var n = this.getSameBrowserFlagFromCookie(t);
                        this.setCookie("quarantineSameBrowserCount_".concat(t), +n + 1)
                    } else this.resetSameBrowserFlag(t)
                }, resetSameBrowserFlag: function (t) {
                    this.setCookie("quarantineSameBrowserBaseDate_".concat(t), Date.now()), this.setCookie("quarantineSameBrowserCount_".concat(t), 1)
                }, isExpire: function (t, e) {
                    var n = B.a.get("quarantineSameBrowserBaseDate_".concat(e));
                    return !!n && (-1 !== t && +n + 60 * t * 100 < Date.now())
                }, setCookie: function (t, e) {
                    B.a.set(t, e.toString(), {expires: 3e4, secure: !z.a, path: "/"})
                }, removeSameBrowserFlagFromCookie: function (t) {
                    B.a.remove("quarantineSameBrowserBaseDate_".concat(t)), B.a.remove("quarantineSameBrowserCount_".concat(t)), B.a.remove("quarantineSameBrowser_".concat(t))
                }, getSameBrowserFlagFromCookie: function (t) {
                    var e = "quarantineSameBrowserCount_".concat(t), n = B.a.get(e);
                    return n || ""
                }
            }, H = n(23), V = n(4), W = n(35);

        function J(t, e) {
            var n = document.createElement("div");
            document.body.appendChild(n);
            var r = e && e.confirmText ? e.confirmText : "", a = e && e.cancelText ? e.cancelText : "", c = {
                modal: Object(V.a)("\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\twidth: 450px;\n\t\t\tmax-width: 94vw;\n\t\t\tpadding: 20px;\n\t\t\tbox-sizing: border-box;\n\t\t"),
                content: Object(V.a)("\n\t\t\tfont-size: 20px;\n\t\t"),
                footer: Object(V.a)("\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: flex-end;\n\t\t\tmargin-top: 20px;\n\t\t"),
                action: Object(V.a)("\n\t\t\tmargin-left: 20px;\n\t\t\tmin-width: 100px;\n\t\t")
            };

            function i() {
                Object(W.unmountComponentAtNode)(n), document.body.removeChild(n)
            }

            Object(W.render)(o.a.createElement(H.k, {
                className: c.modal, onOpen: function () {
                    document.body.style.overflowY = "hidden"
                }, onClose: function () {
                    document.body.style.overflowY = ""
                }
            }, o.a.createElement("div", {className: c.content}, t), (a || r) && o.a.createElement("div", {className: c.footer}, a && o.a.createElement(H.c, {
                className: c.action,
                onClick: function () {
                    i(), e && e.onCancel && e.onCancel()
                }
            }, a), r && o.a.createElement(H.c, {
                className: c.action, color: "primary", onClick: function () {
                    i(), e && e.onConfirm && e.onConfirm()
                }
            }, r))), n)
        }

        function Z(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function q(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Z(n, !0).forEach((function (e) {
                    Object(h.a)(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Z(n).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function X(t, e, n, r, a) {
            var c = t.redirect, o = t.fileHash;
            if ("fulled" === c) n(new R.a("FULLED")); else if (e && o) {
                var i = new y.a(e), u = a.getQueryLanguage();
                i.addQuery("svid", a.surveyHash), i.addQuery("hash", o), u && i.addQuery("lang", u), ft(), window.location.href = i.toString()
            } else r(c)
        }

        function Q(t, e) {
            if (a.w) {
                if ("KP97Y" === t) return void window.parent.postMessage({type: "SEND_FILEHASH", fileHash: e}, "*");
                window.parent.postMessage({type: "SUBMIT_SUCCESS"}, "*")
            }
        }

        function K(t, e, n) {
            !function (t) {
                return t in R.c
            }(t) ? function (t, e) {
                var n = "";
                "MISSED_ANSWER" === t ? n = e.common.alert.missed_answer : "INVALID_PARAMS" === t ? n = e.common.alert.invalid_params : "TOKEN_ERROR" === t ? n = e.common.alert.token_error : "UPLOAD_FOLDER_FULL" === t ? n = e.common.alert.upload_folder_full : "SAVING_FAILED" === t ? n = e.common.alert.saving_failed : "NO_AUTHED" === t ? n = e.common.alert.no_authed : "RECAPTCHA_FAILED" === t && (n = e.common.alert.recaptcha_failed), n && J(n, {confirmText: "OK"})
            }(t, n) : e(new R.a(t))
        }

        function $() {
            return tt.apply(this, arguments)
        }

        function tt() {
            return (tt = Object(g.a)(b.a.mark((function t() {
                var e, n, r, a = arguments;
                return b.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return e = a.length > 0 && void 0 !== a[0] ? a[0] : 10, n = Object(k.a)("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", e), t.next = 4, n();
                        case 4:
                            return r = t.sent, t.abrupt("return", r);
                        case 6:
                        case"end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function et() {
            var t = Object(c.useState)(!1), e = Object(v.a)(t, 2), n = e[0], o = e[1], i = Object(c.useState)(!1),
                u = Object(v.a)(i, 2), s = u[0], l = u[1], d = Object(c.useState)(!0), p = Object(v.a)(d, 2), f = p[0],
                h = p[1], O = R.b.useSetException(), y = P.PageService.useSetPage(), j = Object(F.c)(), w = j.wording,
                k = j.surveyHash, N = j.tempAnswerHash, S = Object(U.c)(), C = Object(r.c)(),
                A = j.getQueryLandingToken(), I = function () {
                    var t = Object(g.a)(b.a.mark((function t(e, n) {
                        var r, c, i, u, s, d, p, m, f, v, g, x, D, P, R = arguments;
                        return b.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (r = R.length > 2 && void 0 !== R[2] ? R[2] : 1, o(!0), l(Boolean(n)), t.prev = 3, c = e, i = "", u = C.getState().meta.calc_mode, s = C.getSurveyData(), A && (c.ansobj.landing_token = A), !s.serial_number_enable) {
                                        t.next = 15;
                                        break
                                    }
                                    return t.next = 12, $();
                                case 12:
                                    i = t.sent, C.setSerialNumber(i), c.ansobj.serial_number = i;
                                case 15:
                                    if (!u) {
                                        t.next = 26;
                                        break
                                    }
                                    return d = j.subjects, p = j.logicJSON, m = a.g ? L.a.url.calc("") : L.a.url.api("/s/verify", 2), f = _(C.getState().logicGroup.context.variables), t.next = 21, Object(T.G)(m, {
                                        method: "POST",
                                        body: JSON.stringify({
                                            ansobj: q({}, e.ansobj, {}, f),
                                            subjects: d,
                                            logicGroup: p,
                                            config_name: a.f
                                        }),
                                        headers: {"content-type": "application/json"}
                                    }, (function (t) {
                                        J(E()(w.common.alert, t, w.common.alert.invalid_params), {confirmText: "OK"})
                                    }));
                                case 21:
                                    if (null !== (v = t.sent)) {
                                        t.next = 25;
                                        break
                                    }
                                    return o(!1), t.abrupt("return");
                                case 25:
                                    c.ansobj = q({}, e.ansobj, {}, f, {}, v);
                                case 26:
                                    return s.serial_number_enable && C.setSerialNumber(i), t.next = 29, Object(T.C)(c, j);
                                case 29:
                                    if (!(g = t.sent).full) {
                                        t.next = 34;
                                        break
                                    }
                                    return o(!1), C.setOptionFull(g.full), t.abrupt("return");
                                case 34:
                                    if (h(!1), x = function () {
                                        X(g, n, O, y, j), Q(j.surveyHash, g.fileHash), S.trackSubmitSuccess("index")
                                    }, !N || !a.F) {
                                        t.next = 41;
                                        break
                                    }
                                    return t.next = 39, Object(T.e)(k, N, x);
                                case 39:
                                    t.next = 42;
                                    break;
                                case 41:
                                    x();
                                case 42:
                                    t.next = 57;
                                    break;
                                case 44:
                                    if (t.prev = 44, t.t0 = t.catch(3), D = function () {
                                        K(t.t0.errmsg, O, w), o(!1)
                                    }, !("TOKEN_ERROR" === t.t0.errmsg && r < 3)) {
                                        t.next = 56;
                                        break
                                    }
                                    return t.next = 50, Object(M.a)(k, !1);
                                case 50:
                                    return (P = t.sent) && P.csrftoken && j.setCsrftoken(P.csrftoken), t.next = 54, I(e, n, r + 1);
                                case 54:
                                    t.next = 57;
                                    break;
                                case 56:
                                    D();
                                case 57:
                                case"end":
                                    return t.stop()
                            }
                        }), t, null, [[3, 44]])
                    })));
                    return function (e, n) {
                        return t.apply(this, arguments)
                    }
                }(), D = Object(c.useCallback)(I, [I]), z = m(Object(c.useCallback)((function () {
                    var t = C.getPostAnswer();
                    if (t) {
                        var e = t.post, n = t.validation, r = t.redirect_url;
                        vt(n, (function () {
                            j.isPreview() ? j.getQueryThemeName() ? J(w.common.preview.no_submit, {confirmText: "OK"}) : y(e.ansobj.svend, "postAnswer") : D(function (t, e) {
                                var n = e.surveyHash, r = !1;
                                1 === e.data.quarantine_same_browser_duplicated && e.data.quarantine_same_browser_duplicated_recovery_min ? (e.data.quarantine_same_browser_duplicated_count || (e.data.quarantine_same_browser_duplicated_count = 1), Y.haveSameBrowserFlagFromCookie(n) ? r = !0 : (Y.putSameBrowserFlagToCookie(n, e.data.quarantine_same_browser_duplicated_recovery_min), +Y.getSameBrowserFlagFromCookie(n) > e.data.quarantine_same_browser_duplicated_count && (r = !0))) : Y.removeSameBrowserFlagFromCookie(n);
                                var c = {};
                                if (a.l) {
                                    var o = sessionStorage.getItem("survey_third_party_unique_id");
                                    o && (c = {mbunq: o}, sessionStorage.removeItem("survey_third_party_unique_id"));
                                    var i = new x.a(window.location.href, !0).query;
                                    E()(i, "mbunq") && (c = {mbunq: E()(i, "mbunq", "")})
                                }
                                return q({}, t, {ansobj: q({}, t.ansobj, {}, r && {mbr_iso_type: "SAME_BROWSER"}, {}, c)})
                            }(e, j), r)
                        }))
                    }
                }), [C, j, w, y, D]));
            return {onSubmit: z.onSubmit, disabled: z.disabled, posting: n, redirection: s, showButton: f}
        }

        function nt(t) {
            var e = Object(c.useState)({}), n = Object(v.a)(e, 2), a = n[0], o = n[1], i = Object(r.c)(),
                u = m(Object(c.useCallback)((function () {
                    var e = i.getPreviewAnswer();
                    if (e) {
                        var n = e.validation, r = e.editable, a = e.preview;
                        vt(n, (function () {
                            t(!0), o({editable: r, preview: a})
                        }))
                    }
                }), [i, t]));
            return [u.onSubmit, u.disabled, a]
        }

        function rt() {
            var t = P.PageService.useSetPage();
            Object(d.b)((function () {
                if (a.w) {
                    var e = function (e) {
                        var n = e.data && e.data.type, r = e.data && e.data.payload;
                        if ("CHANGE_PAGE" === n) if ("object" === typeof r) {
                            var a = r.page, c = r.ctypSn;
                            t(a, void 0, c)
                        } else {
                            t(r)
                        }
                    };
                    return window.addEventListener("message", e), function () {
                        return window.removeEventListener("message", e)
                    }
                }
            }))
        }

        var at = function (t) {
            return t.error
        };

        function ct() {
            var t = R.b.useSetException(), e = Object(r.d)(at);
            Object(c.useEffect)((function () {
                e.type in R.c && "" !== e.type && t(new R.a(e.type))
            }), [e.type])
        }

        var ot = Object(c.createContext)(!1), it = Object(c.createContext)({}), ut = function (t) {
            return t.pending > 0 || t.timer
        }, st = function (t) {
            var e = t.children, n = Object(r.f)(ut), a = Object(c.useState)(0), i = Object(v.a)(a, 2), u = i[0],
                s = i[1], l = n || u > 0, d = Object(c.useMemo)((function () {
                    return {
                        lock: function () {
                            return s((function (t) {
                                return t + 1
                            }))
                        }, unlock: function () {
                            return s((function (t) {
                                return t - 1
                            }))
                        }
                    }
                }), []);
            return o.a.createElement(it.Provider, {value: d}, o.a.createElement(ot.Provider, {value: l}, e))
        };
        st.useDisabled = function () {
            return Object(c.useContext)(ot)
        }, st.useFileUploadLockMethods = function () {
            return Object(c.useContext)(it)
        };
        var lt = function (t, e) {
            return t.enable === e.enable && t.visible === e.visible
        };

        function dt(t, e) {
            var n = Object(c.createContext)((function () {
            })), a = Object(c.createContext)([!0, !1]);
            var i = function (i) {
                var u = i.children, s = function () {
                    var n = Object(r.e)(t, lt), a = n.enable, o = n.visible, i = st.useDisabled() || !a,
                        u = Object(d.g)(i), s = Object(r.c)();
                    return [Object(c.useMemo)((function () {
                        return Object(p.h)(400)((function () {
                            u.current || e(s)
                        }))
                    }), [s]), i, o]
                }(), l = Object(v.a)(s, 3), m = l[0], f = [l[1], l[2]], b = Object(c.useMemo)((function () {
                    return f
                }), f);
                return o.a.createElement(n.Provider, {value: m}, o.a.createElement(a.Provider, {value: b}, u))
            };
            return i.useGoPage = function () {
                return Object(c.useContext)(n)
            }, i.useGoPageStatus = function () {
                return Object(c.useContext)(a)
            }, i
        }

        var pt = dt((function (t) {
            return t.prev
        }), (function (t) {
            return t.goPrevPage()
        })), mt = dt((function (t) {
            return t.next
        }), (function (t) {
            var e = t.goNextPage();
            e && vt(e)
        }));

        function ft() {
            window.onpagehide = null, window.onbeforeunload = null
        }

        var bt = n(28);

        function vt(t, e, n) {
            if (t) {
                var r = t.status, a = t.subjects;
                r ? e && e() : (a && a.violator && Object(bt.scrollToSubject)(a.violator), n && n())
            }
        }

        n.d(e, "f", (function () {
            return u
        })), n.d(e, "g", (function () {
            return l
        })), n.d(e, "h", (function () {
            return et
        })), n.d(e, "i", (function () {
            return nt
        })), n.d(e, "j", (function () {
            return rt
        })), n.d(e, "k", (function () {
            return ct
        })), n.d(e, "b", (function () {
            return st
        })), n.d(e, "c", (function () {
            return pt
        })), n.d(e, "a", (function () {
            return mt
        })), n.d(e, "d", (function () {
            return ft
        })), n.d(e, "e", (function () {
            return vt
        }))
    }, 528: function (t, e, n) {
        t.exports = n.p + "static/media/logo.e0fb8c54.png"
    }, 529: function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAyCAYAAADhna1TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkY5MTBDMEUzRTc5MTFFNTg3MzlDMzY2OUVEODAzNzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkY5MTBDMEYzRTc5MTFFNTg3MzlDMzY2OUVEODAzNzEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3QzE3QjJFMTNFNEQxMUU1ODczOUMzNjY5RUQ4MDM3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3QzE3QjJFMjNFNEQxMUU1ODczOUMzNjY5RUQ4MDM3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr3bBnkAAAgtSURBVHja7FtbiF3VGf7+ffbZcz0zTuJMpoS0IpRITFo0JFChD71gH4RSkiiFqhQRfBEhiM8qpM8VfGhNSCJpLpVEq9angJKkoUlLtCWoCLUmJCYZMzMxc59zZs7+/deedc7sy9r7rH1mzhhJ1vDN2nvtdf33v/7bXoeYGXdSMrmXf3SfoZhAVL9pFwwKVuvrkqCPFvKSLisqCInbpLxTrjsEbap//ayWKziCggbp3JSqAtZ5DfOCuVCuUBbMCKYFFY15XTYuHUxI/rVgSjArGBYM6XrBCIwkc7gpk1IT/pXgN4IfC9ZoAtRTGp99B/hPEfCa4JzgTcFpIwEubVofL/uhFO+S/KcLyyTD0imDLBQiD9X/c+I5Rd4CN+wXkT7jb5FT50GxMRL9vCtPXpT8qyyO2SzYJxX7s3kgiy84cc3G52xoYcNvbDkbzphDpOTXgo2CJwVf1Aod1lUEawS7Bf2hstsF9wpeEz3UpXSRgst+nbOek//fu40V0f1CIcU1fwo4Rm81JVy31zmMDdwY3yFss7M4+Yyb2o2NdxfnaMcp7YEn5KJD3TiaW34h/3u4JpNI19XyiSkm82jxWYo8XHxAySIO5ck5cnKsRoShEAxzYlN9Q3tZ0z2CrWptrrbvfp7oRAt05vTJsY2iys0UlFvcoymRnTZv+pn8O+n6rFiHNloI9iZGbnYJ1MSzZuryIvsu1hfNzI7LoHWtEbpNsFH2vmxBP8a9J/SgHiVj+rSpvsyJ8N3oM5EUPVa58mIH77iMkaSYZFC20soSxp+eArkeyCveysQpKcu3W0kDP8Uq9EO5n/Is7T5cVi2X4W3YgNUvvQwaXIP58XH4c3OZbbKubRBv68fWk9a/5D2OqONeNthJzGalZKoTtwlVuR8vq0qJ52H175/CurffQWnnTnBvL/zxCfD8fOrikXLNGS/M2JbTlW3CpmUMKML0K7cgATaUxYC0OnrGif6qC/5H2939WPv8Cxh8629of/ppsTU74Y8Jgeaq9ZWyJazrs32fUvdupZV6W7JLLRRI7/d/gLWytfoOHYb3+O+A9jbw5KQs1F8hBZSauh2ZQqcf24PLAk6WcYoK6N+4EQO7/oDS3n3wtm8T84pQFQL5QqCWzK0xPKWu2+N7r1FoinMwSb2tdufT2nUXi/A2b8bE+vWY2bYNs4cPo/L+B+DpGTidnVCxVs7BkJwSxKKM9dDifVGp66KNdb8Ur8AkAE3JKxSwqlTC5JatKG64H3M7/isEOoTyiVOACGjq6EAtGG3rgeRx7kNlBUUYZyU2LVsuhhwHJeEQjxxMCAe5mzah/aMPMfOXgyj/80zAdgGBWphUTMBdqa8nzMjlaLZ1tMNr8zA5NobpzVvgPvAg2v91FtNCoMq/zwmfF0FFtyXRd0aT3MJLGDDXm1Pc09eHu3pKQXyk+JOH0LdnN+569RU4A/2i3ueXdQ7hZ5kcwxkCNa2eSbBRzGDMm9pk6yhMVSq4ee4cZk/+A/7kFFi2W6NObRVHeLsTNSBMI4FqG43kJrZSPJUvfIGbe/dj9OibYgyOi6bqEn53YCMK2GZNIfXFAcfUyimkTsM6rRZppEXNEq5Lupw4+VUpEdJswmirXL6M4X37ceONo5gbGYXb3QWnu3txDMOAFIo81rjVOCVdjyganlZrcetU4mRgizj6xikkSNO2CKdswbr5bkuQoWsYfv0ARg/9FXPXhlDo6kKh1JNU+2zgBs6OxYfXEV9PmGO4WRbknHVtdtL86AiGDxzEiKBy+QocRZDe3iXZLk2IB1YyZm4lgpiNhG917CaGDx2RbXNA5MnFwNp1enqT3LxCYSPFMbOU4RKklaW5DVlaKS1wNXzkDVzfsx+z//scjnjaikMi1jJF2dwgBs1jZrgEpvtQm4oizDRb+BkcG51zfFQIx2/qZZUyRo+9haHdezH98adw2trh6C3jGxwwjr0RthhzCeKgoj7qj1ntxRwapS7pI31xYKlytYrRt9/BV3/eg6n/nA9CnIWentR2aV5qo7oN+8rgfp8xrThmpBXORvzNkOehfPUqPnv0t5g4fUa5aSJDStEXQDlMnUZ1aQnCmjCiOObmcgnYrDYkvk350hXM/v9iYIc022cjmWZLBMquc11xzGQrfaS6XROcrSiI21oIZAhZqE7bmEuz88oYa0wR5noruAV2Qq4lzuoyOLiTyo65Clr5Sd7CZ/WUXTfkiv+iTjQq/93FnQQtc28o9/RLxA7m3ebp6oKMIVLnXz8RrLWJq9jGYRppAVu5ZSuEyVJTcYrFG0ofKQ/F1VbmScHDJmlPsA4g5zrdZSNnKIfzyUuYT8xFOKFyRxcex8LJ6URn/rfI07zktrl7uCLrPaPW7OjmVwTvNfr+GwUv85FSbsExVcrb5gi0XeeEiv8oU7vB9fPT0SknyxafhGsgtEhEnkWXzok+kKjHhvamcdPqIzKL+OzDJ8WDGhfkYm9tDU7twK/gkuywZ6VsHImuKcE5UUlAMYJEhwVMJwvIIPooeMvRA4rxD2xslEacmEuYCJQYnevtghrqRxfPyNVYjbDxzycnpNJjgrNs4Jn0LcBNbImFP9/AR+b+yGIbcqw+ZcypXveUYIcUfRwmhMmoOy/YIZV/KfkjggexcOqqq1VhPm6JKE6NvCjZOiy352U+x2RKfzdF1NOsXV9rquNS3SPQgNBWnexcJRjAwgE+FURRv0lS3749fV37rVKtzNW5eI/B75IcTZ5w7iB5fDnrbFBV3yvTvRJC7TdLM6GyWR1vCqxZrXmVpX+JMuJQKn0jwAAuXX5REaIokQAAAABJRU5ErkJggg=="
    }, 530: function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAyCAYAAADhna1TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDAyRDUwMEQzRTdBMTFFNTg3MzlDMzY2OUVEODAzNzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDAyRDUwMEUzRTdBMTFFNTg3MzlDMzY2OUVEODAzNzEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMDJENTAwQjNFN0ExMUU1ODczOUMzNjY5RUQ4MDM3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMDJENTAwQzNFN0ExMUU1ODczOUMzNjY5RUQ4MDM3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrDv1wkAAAjDSURBVHja7FtdiFVVFF7rzJ3/H8USxRTBl6CXUCtJUBocUISgSAgMhPDB16QI8t3IRMkfyFRyZCwtRA0D7SETslBG1B4kmqBSaCx/MplxHGecWa197rn3np+91l536rEz7Nn77LPvPnuvvX6/vQ8SEfx/FS+Moqh6Q0CVAj+pVnYh4gx+1uHKXNMJiB38oI3vm/lZMxO3meubODXy75q4vsR5I+cNnJfiHDiH+D7i+yjJMck9I4PJZECTcUKYSMqPuHYizpFT+X6c83EeyxjnYzwelz9M0n1uN8RthrhcToh3efxD1Xmm5xsgTBs3XM6l5VyezzkTIp4MZDorTqZWXyOs3A65kOZYLCxKdsDkeUf+fQC+xU23dUQd5vtf+f4bzs9xPmYhzNOcNnBxnjjg/IRDhMLkJi+2eeKhMCmV5wNtpH5qY/qZC3u4OKARxnHIG7FIqJOsc9CoEDLfBoVJkHHiqCxcIa8u1gjXvcf55epPEKszXcBpa6Ir5AH5CBOaaOVG4zI0cqG2WBToqyB6GS4eZlq8yfkgxHqj1mxdrDgrdyH59Sgs70pVKtN9pQeKycqln4GyIL42JOivNAG8hKNyu/LjDpaY1wjKf1HyogWcFhUmHloVn6JLT5xyfYFQlnQPCosS0ieFPknmeKI0gZeymXyiZiq5ovoTVJQnCBwkiZd0eYnjWRSrHkPP78CwkPnELgWb+medbxclSuYZcXXTbJfnKPKIFiorjxbPyqAzNGsjEYIC7Wvjf87lEcvTY1yYk5mEZdAorFpBFNEvUqCIi8SNEOAOUMQ71F9t/PNZlDqdKM3i1CLKuG9yISdLlHVFmYOik3zOmqTjpMUV9RXmOamTRWmmc9NnBdm7MjnJI9VYWPODrC6Axg2WS/OPYstUqJ3hCDPTL2seT5UMrBpy3bU6cfKpxihwkdfDdqaYZOdP9ntijplW+FFa2Vqti7ZKab2dDBqLLKwQkXQuyUyYspyOgbH7OXOGc/C6xImiYH1IcuRkU+4IsnjRInh382aYPWtWfE9E8m/QEC+FlDAq+ksX6a4ojpwRZZn3mU5UyiRzVWtbG7yzaRP09/fDWxs3wrTOzjKBJskeNIYUucQVaEQDEi/Yeb5tIK0cKYEjKpZE8F4nJybifO68ebB1+3a4cP48bFi/HtqZYI44GdCMDL6NFtWH2oA2D2yLYuwFAuJBBhbOxz8UZvUnn3oK9uzfD9+eOQPr1q6F1paWGgcpespbRwFOp1xcphGUqN2JUrPJ2cIAFEABQirXwiVL4ODBg/DVyZPw6po10NDQkNVBUsQc8oe8UkCWYLgjqsIMIdHIDAhtMRHU0aZUgmU9PdDLHHTqxAl4cfXq8nAmc0oaFQOAxndqBC0/b41ibBYDLnuhEx9IqoQOdSjU5q4u6F7RA30fH4BjR47Aiu4XigSqh+iSV46KNSRoikR2wpADR/KkaWpESZAzKLW2QOu0Lli1chV83vcJfNZ3CJayuMWwziTVsGk0YkSWcWZ1FUbqaofkVWpv+V3gamJF3NzVCU3tbbB61Ur44uhR6N27FxYvXFgmUAg/9sV1Pl8mD2QlxchEbUSb94tT0C3K5fDojunTobG9HaKGErzy0svw9anTcIAJNG/u3Jr1Ci0WhiwtFTirJJrnUITsM4UUdvKmcjW3tsaJxsfhEjuH/RcvwvDwcCx23oWRdh0yUAipOxKlQsNQeFBp6wvifL4H/jfEuXbtN9i1azfsZW4ZGhqq6qOgHiPfYlPQOSyJmCuBEM2ShLL7gZ9/SZDBwUHYvbtMkDt37tQIYhFZzQgEDESp7nhEgjunaIWk6/bt2zExHFFu3LiRJQgacGE04DHKs5K6KSbhI5a9HJoaoZyY7Nu3D3bu3Mnicy0rMj5rE3qPZSvZyzEUb4zLIJAXCqTU3g3puKxRx4yMjMDB3l74YMcOGBgY8BPEEo5YRViLwQDGnCiNF7BU0QdJIWJpOc90jsUdBeV6ODoKnx4+DNu2bYOrV6/qIoNg885RB8tEy1V7x6gjzEOV9SiHjyq2v6icZeJMTEzAYSbIdibI5StXanQHlM1s6OCABn0UxC/N+QVMetgRZsQ7kLwJp4CvYwC/GxvLZwWOHz8GW7a8DxcuXKhyGYaw5UydIMIhLDlvssGz80AVwiDc90+OBEwDs34ABhQa1WKg69evQ3d3N5w9ezYTG5nNGgrQwVQsq8RR5fIDxAjf5sKyoC+geccUUHAVrk1NiN+rHxGx7kZSQLdYELxqu6oOPe1EaUj0dEOmLxRF5waNWMfOgLay2vspt2UCIFu2TDnT+ZCDHe6JALdGLDTcg6EfX7QrHQvR3AgMyBYFQKrs+cO7Lrq+FRQdyzaGJcrNb7+ggSMl10GLmElZYMtJCoKbTpT+FH0Yy36NBedFZbvC2yfpYoaCKdfuUQsqC+P/K4oJw56eGdq0iBgEMVXdMybZ5BfO6oQUsU8U9UMBzkrfcoRxIevNrOca2KuxYqwY8E3Q4Ij5+ieSz/0h2PbFZVjid073HGFcrHQli1WgXzlqE68HlQdl4Aj1bf+i0UPWHNPss0tsPalyBu+77ItJfjkqmGroFJNFmRPWvxWDRiJggLsxxtnPx0fNkgn8yP8Hggd3COQ9bM16WHQQ5nYfQkqdwH/IwHomxxdlE/zA/3+pgeHuGDlBn2mFQrsIU8V8KSCqvkmjAYCXDm4XCelUyqFKTZRq7kLcXpOPQAb2BKPyk4hkjYGkQBGxTtMJH3L6KRXDFRqt4PQ6uANFlg8l6oEBLAGd5WCBxTNXUcTMCa2/+f9HfHsu0wL95vlxTj2cnuc0h1OLGKBZJ0cBMKleApBhreSFpcRF+Z7Tl9zuZgG+RmUzzT10JxihfE5vNncwGwG7uK7VbXy775WS75Ic0NIYf5vkvkmqfafkrF5DnIPi/ZJBWRaVauUbpkeJjnyUoJGV5D61GXVoHJcfxLgTIMeF5EKgPyD+ZgBHCz5Rcv0jwAA7ElV981ki5gAAAABJRU5ErkJggg=="
    }, 531: function (t, e, n) {
        t.exports = n.p + "static/media/ended.20d9cdf6.png"
    }, 532: function (t, e, n) {
        t.exports = n.p + "static/media/sorry.20d9cdf6.png"
    }, 533: function (t, e, n) {
        t.exports = n.p + "static/media/logo.441d548a.png"
    }, 534: function (t, e, n) {
        t.exports = n.p + "static/media/certificate-icon.318b2c16.svg"
    }, 535: function (t, e, n) {
        t.exports = n.p + "static/media/overloaded.47cbb7b4.png"
    }, 536: function (t, e, n) {
        t.exports = n.p + "static/media/private.81d0bac3.png"
    }, 55: function (t, e, n) {
        "use strict";
        var r = n(418);
        n.d(e, "countChinese", (function () {
            return r.a
        }));
        n(214);
        var a = n(419);
        n.d(e, "t", (function () {
            return a.a
        }));
        var c = n(420);
        n.d(e, "Trans", (function () {
            return c.a
        }));
        n(421)
    }, 563: function (t, e, n) {
        t.exports = n(944)
    }, 57: function (t, e, n) {
        "use strict";
        var r = n(405);
        n.o(r, "PageService") && n.d(e, "PageService", (function () {
            return r.PageService
        }));
        var a = n(406);
        n.d(e, "PageService", (function () {
            return a.a
        }))
    }, 59: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return r
        }));
        var r = !1
    }, 72: function (t, e, n) {
        "use strict";
        var r = n(124), a = n(221), c = n(179), o = n.n(c), i = n(34);

        function u(t, e, n) {
            var r = {
                utm_source: e && e.utm_source ? e.utm_source : "unknow",
                utm_medium: e && e.utm_medium ? e.utm_medium : "unknow",
                utm_term: e && e.utm_term ? e.utm_term : "unknow",
                utm_content: e && e.utm_content ? e.utm_content : "unknow",
                utm_campaign: e && e.utm_campaign ? e.utm_campaign : "unknow"
            };
            return n && (r.pageNavi = n), t && (r.svid = t), r
        }

        var s = function (t) {
            var e = document.createElement("script");
            e.setAttribute("async", "true"), e.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=".concat(t));
            var n = document.createElement("script");
            n.innerText = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '".concat(t, "');gtag('set', { 'cookie_flags': 'SameSite=None;Secure' });"), document.documentElement.firstChild && (document.documentElement.firstChild.appendChild(e), document.documentElement.firstChild.appendChild(n))
        }, l = function (t) {
            window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                "gtm.start": (new Date).getTime(),
                event: "gtm.js"
            });
            var e = document.getElementsByTagName("script")[0], n = document.createElement("script");
            n.async = !0, n.src = "https://www.googletagmanager.com/gtm.js?id=".concat(t), e.parentNode && e.parentNode.insertBefore(n, e)
        }, d = function () {
            function t(e, n, a) {
                Object(r.a)(this, t), this._surveyConfig = e, this._gaId = n, this._amplitudeKey = a, this._officialGaInitialed = !1, this._officialAmplitudeInitialed = !1, this._userGaInitialed = !1, this._userGa4Initialed = !1, this._userFbpixelInitialed = !1
            }

            return Object(a.a)(t, [{
                key: "_isDisabled", value: function () {
                    var t = this._surveyConfig.query;
                    return Boolean(t && ("preview" === t.status || 1 === t.untrack))
                }
            }, {
                key: "_createVisit", value: function () {
                    Object(i.d)(this._surveyConfig.surveyHash)
                }
            }, {
                key: "_initialOfficialGa", value: function () {
                    this._gaId && /^G-/.test(this._gaId) && (s(this._gaId), gtag("set", this._gaId, {cookie_flags: "SameSite=None;Secure"}), this._officialGaInitialed = !0)
                }
            }, {
                key: "_initialOfficialAmplitude", value: function () {
                    this._amplitudeKey && (o.a.getInstance().init(this._amplitudeKey), o.a.getInstance().setUserId(""), this._officialAmplitudeInitialed = !0)
                }
            }, {
                key: "_initialUserGa", value: function () {
                    var t = this._surveyConfig.data.analyticsid;
                    t && (ga("create", t, "auto", "clientTracker", {cookieFlags: "SameSite=None; Secure"}), this._userGaInitialed = !0)
                }
            }, {
                key: "_getLeadgenInfoFromQuery", value: function () {
                    var t = this._surveyConfig, e = t.query, n = t.surveyHash,
                        r = Boolean(e && (e.mbunq || e.landingToken)), a = e && (e.mbunq || e.landingToken);
                    return {leadgenHash: r ? n : null, leadgenToken: r ? a : null}
                }
            }, {
                key: "_initialUserGa4", value: function () {
                    var t = this._surveyConfig.data.ga4;
                    t && (s(t), gtag("set", t, {cookie_flags: "SameSite=None;Secure"}), this._userGa4Initialed = !0)
                }
            }, {
                key: "_initialUserFbpixel", value: function () {
                    var t = this._surveyConfig.data.fbpixelid;
                    t && (fbq("init", t), this._userFbpixelInitialed = !0)
                }
            }, {
                key: "_initialUserGTM", value: function () {
                    var t = this._surveyConfig.data.gtm;
                    t && l(t)
                }
            }, {
                key: "trackDentsu", value: function (t) {
                    this._initialOfficialGa(), this._officialGaInitialed && t && gtag("event", "DentsuInfo", {
                        eventCategory: "Dentsu",
                        svid: this._surveyConfig.surveyHash,
                        dentsuid: t
                    })
                }
            }, {
                key: "trackCallLandingSurvey", value: function () {
                    this._initialOfficialGa(), this._initialOfficialAmplitude(), this._officialGaInitialed && gtag("event", "TargetSurveyCheck", {
                        eventCategory: "LeadGen",
                        eventLabel: this._surveyConfig.surveyHash
                    })
                }
            }, {
                key: "trackRenderLandingSurvey", value: function (t, e, n, r) {
                    this._initialOfficialGa(), this._initialOfficialAmplitude(), this._officialGaInitialed && gtag("event", "ShowLandingSurvey", {
                        eventCategory: "LeadGen",
                        eventLabel: this._surveyConfig.surveyHash,
                        landingDomain: t,
                        landingHash: e,
                        landingId: n,
                        landingType: r
                    })
                }
            }, {
                key: "trackClickLandingSurvey", value: function (t, e, n, r, a) {
                    this._initialOfficialGa(), this._initialOfficialAmplitude(), this._officialGaInitialed && gtag("event", "GoLandingSurvey", {
                        eventCategory: "LeadGen",
                        eventLabel: this._surveyConfig.surveyHash,
                        landingDomain: t,
                        landingHash: e,
                        landingToken: n,
                        landingId: r,
                        landingType: a
                    })
                }
            }, {
                key: "trackEnterSurvey", value: function () {
                    this._initialOfficialGa(), this._initialOfficialAmplitude(), this._officialGaInitialed && gtag("event", "pageview", {
                        send_to: this._gaId,
                        event_category: "SurveyCake",
                        event_label: this._surveyConfig.surveyHash
                    })
                }
            }, {
                key: "trackSurveyRendered", value: function (t) {
                    if (!this._isDisabled()) {
                        if (this._createVisit(), this._initialUserGTM(), this._initialUserGa(), this._initialUserGa4(), this._initialUserFbpixel(), this._officialAmplitudeInitialed && o.a.getInstance().logEvent("Enter Survey", u(this._surveyConfig.surveyHash, this._surveyConfig.query, t)), this._userGaInitialed && (ga("clientTracker.send", "pageview"), ga("clientTracker.send", "event", "SurveyCake", "SurveyCakeVisit", this._surveyConfig.surveyHash)), this._userGa4Initialed) {
                            var e = this._surveyConfig.data.ga4;
                            gtag("event", "SurveyCakeVisit", {
                                send_to: e,
                                event_category: "SurveyCake",
                                event_label: this._surveyConfig.surveyHash
                            })
                        }
                        if (this._officialGaInitialed) {
                            var n = this._getLeadgenInfoFromQuery(), r = n.leadgenHash, a = n.leadgenToken;
                            gtag("event", "SurveyCakeVisit", {
                                send_to: this._gaId,
                                event_category: "SurveyCake",
                                event_label: this._surveyConfig.surveyHash,
                                eventCategory: "SurveyCake",
                                eventLabel: this._surveyConfig.surveyHash,
                                landingToken: a,
                                landingHash: r,
                                adminCapacity: this._surveyConfig.meta && this._surveyConfig.meta.capacity
                            })
                        }
                        this._userFbpixelInitialed && (fbq("trackCustom", "PageView"), fbq("trackCustom", "SurveyCakeVisit", {surveyID: this._surveyConfig.surveyHash}))
                    }
                }
            }, {
                key: "trackSubmitSuccess", value: function (t) {
                    if (!this._isDisabled()) {
                        if (this._officialGaInitialed) {
                            var e = this._getLeadgenInfoFromQuery(), n = e.leadgenHash, r = e.leadgenToken;
                            gtag("event", "SubmitSuccess", {
                                send_to: this._gaId,
                                event_category: "SurveyCake",
                                event_label: this._surveyConfig.surveyHash,
                                eventCategory: "SurveyCake",
                                eventLabel: this._surveyConfig.surveyHash,
                                landingToken: r,
                                landingHash: n,
                                adminCapacity: this._surveyConfig.meta && this._surveyConfig.meta.capacity
                            })
                        }
                        if (this._createVisit(), this._officialAmplitudeInitialed && o.a.getInstance().logEvent("Submit Survey", u(this._surveyConfig.surveyHash, this._surveyConfig.query, t)), this._userGaInitialed && ga("clientTracker.send", "event", "SurveyCake", "SurveyCakeSubmit", this._surveyConfig.surveyHash), this._userGa4Initialed) {
                            var a = this._surveyConfig.data.ga4;
                            gtag("event", "SurveyCakeSubmit", {
                                send_to: a,
                                event_category: "SurveyCake",
                                event_label: this._surveyConfig.surveyHash
                            })
                        }
                        this._userFbpixelInitialed && fbq("trackCustom", "SurveyCakeSubmit", {surveyID: this._surveyConfig.surveyHash})
                    }
                }
            }]), t
        }(), p = n(0), m = n.n(p), f = Object(p.createContext)({});

        function b() {
            return Object(p.useContext)(f)
        }

        var v = function (t) {
            var e = t.tracker, n = t.children;
            return m.a.createElement(f.Provider, {value: e}, n)
        };
        n.d(e, "a", (function () {
            return d
        })), n.d(e, "c", (function () {
            return b
        })), n.d(e, "b", (function () {
            return v
        }))
    }, 944: function (t, e, n) {
        "use strict";
        n.r(e);
        n(564), n(573), n(218);
        var r = n(103), a = n(289), c = n.n(a), o = n(11), i = n(18), u = n(72), s = n(104), l = n(59), d = n(10);
        var p = n(0), m = n.n(p), f = n(35), b = n.n(f), v = n(8), g = n(26), h = n(57), O = n(90), y = n(51),
            j = function (t) {
                var e = document.createElement("script");
                e.type = "text/javascript", t.nonceText && (e.nonce = t.nonceText), t.id && (e.id = t.id), e.innerHTML = t.innerHTML, document.body.appendChild(e)
            },
            x = "\n    var retUrlPrefix=\"//a.amnet.tw/tracking/\";\n    var retCert=\"fef9ee3213af82842c0edebc393b2d7e\";\n    var retSiteId=158;\n\n    (function(w, d, s, n) {\n        if(w.RET){\n            return;\n        }\n        var r = w.RET || (w.RET = {});\n        r[n] = r[n] || function () {\n            (r[n].q = r[n].q || []).push(arguments)\n        }, r[n].q = [], r[n].l = 1 * new Date();\n\n        var ret = d.createElement('script');\n        ret.type = 'text/javascript';\n        ret.async = true;\n        ret.src = retUrlPrefix + 'ret.js?' + ( Math.floor(new Date().getTime() / 100000) );\n        var currentJs = d.getElementById('ret-js-template');\n        currentJs.parentNode.insertBefore(ret, currentJs);\n    })(window, document, 'script', 'tracking');\n",
            w = n(1015), E = n(1014), k = n(17), N = n(4);

        function S() {
            var t = Object(k.a)(["\n    display: none;\n  "]);
            return S = function () {
                return t
            }, t
        }

        function C() {
            var t = Object(k.a)(["\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  "]);
            return C = function () {
                return t
            }, t
        }

        function A() {
            var t = Object(k.a)(["\n    opacity: 0;\n  "]);
            return A = function () {
                return t
            }, t
        }

        var I = {enter: Object(N.a)(A()), enterActive: Object(N.a)(C()), exit: Object(N.a)(S())}, D = n(23), _ = n(47),
            T = n(531), L = n.n(T), P = n(532), R = n.n(P), M = n(295), F = n.n(M), U = function (t) {
                var e = {ctyp: "", ended: "", sorry: "", thankyou: ""};
                return o.G && (e = {ctyp: F.a, ended: L.a, sorry: R.a, thankyou: F.a}), e[t]
            }, z = function (t) {
                return o.m ? t.wording.common.info.thankyou : ""
            }, G = {
                ctyp: function (t, e, n) {
                    var r;
                    if (Object(_.isNil)(n)) {
                        var a = Object(_.get)(e, "logicGroup.context.variables");
                        for (var c in a) if ("CONDITIONAL_THANK_YOU" === a[c].type) {
                            r = a[c].value;
                            break
                        }
                    } else r = n;
                    var o = Object(_.get)(t, "data.conditionalthankyoupages[".concat(r, "].banner")),
                        i = Object(_.get)(t, "data.conditionalthankyoupages[".concat(r, "].text")),
                        u = Object(_.get)(e, "settings.conditionalthankyoupages[".concat(r, "].replacementThankYouMessage"));
                    return r ? {
                        background: t.data.background_image,
                        banner: o || U("ctyp"),
                        text: "<br/>" !== u && u || "<br/>" !== i && i || z(t),
                        isFromCustom: !!o,
                        targetCTYPSn: r
                    } : {
                        background: t.data.background_image,
                        banner: t.data.thankyoubanner || U("thankyou"),
                        text: t.translation.thankyoutext || e && e.settings.replacementThankYouMessage || t.data.thankyoutext || z(t),
                        isFromCustom: !!t.data.thankyoubanner
                    }
                }, thankyou: function (t, e) {
                    return {
                        background: t.data.background_image,
                        banner: t.data.thankyoubanner || U("thankyou"),
                        text: t.translation.thankyoutext || e && e.settings.replacementThankYouMessage || t.data.thankyoutext || z(t),
                        isFromCustom: !!t.data.thankyoubanner
                    }
                }, ended: function (t) {
                    return {
                        background: t.data.background_image,
                        banner: U("ended"),
                        text: t.translation.endedtext || t.data.endedtext || z(t)
                    }
                }, sorry: function (t) {
                    return {
                        background: t.data.background_image,
                        banner: U("sorry"),
                        text: t.translation.sorrytext || t.data.sorrytext || z(t)
                    }
                }
            }, B = n(157), Y = function (t) {
                var e = t.type, n = t.ctypSn, r = Object(i.c)(), a = r.data, c = a.gotourl, o = a.conditionalthankyoupages,
                    u = "", s = "", l = !1;
                "ctyp" === e && !Object(_.isNil)(n) && o && (Object(_.get)(o, "[".concat(n, "].redirectEnabled")) ? (u = Object(_.get)(o, "[".concat(n, "].redirectUrl")), s = Object(_.get)(o, "[".concat(n, "].redirectText"))) : l = !0);
                var d = s || r.translation.gotourltxt || r.data.gotourltxt, m = Object(p.useCallback)((function () {
                    r.isPreview() ? window.open(u || c) : u ? window.location.href = u : c && (window.location.href = c)
                }), [r, c, u]);
                return c && d && !l ? {btnText: Object(B.decode)(d), onClick: m} : null
            };

        function H(t) {
            var e = t.className, n = t.type, r = t.ctypSn, a = Y({type: n, ctypSn: r});
            if (!a) return null;
            var c = a.btnText, o = a.onClick;
            return m.a.createElement(D.c, {className: e, color: "primary", onClick: o}, c)
        }

        var V = n(6), W = n.n(V), J = n(15), Z = n(29), q = n(2), X = n(34);

        function Q(t) {
            var e = t.className;
            window.scrollTo({top: 0, behavior: "smooth"});
            var n = Object(i.c)(), r = n.surveyHash, a = n.data, c = a.language, u = a.show_result, s = n.wording,
                l = Object(p.useState)(!1), f = Object(d.a)(l, 2), b = f[0], v = f[1], g = Object(p.useState)(""),
                h = Object(d.a)(g, 2), O = h[0], y = h[1], j = Object(p.useCallback)((function () {
                    if (n.isPreview()) q.d.info(s.common.preview.no_view_result, {duration: 2e3}); else if (O) {
                        var t = "".concat(o.j.server, "/admin/").concat(c, "/survey/").concat(r, "/report?v=").concat(O, "&layout=P");
                        window.location.href = t
                    }
                }), [n, s, O, c, r]);
            return Object(Z.b)(Object(J.a)(W.a.mark((function t() {
                var e;
                return W.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (u && !n.isPreview()) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            return t.prev = 2, v(!0), t.next = 6, Object(X.t)(r);
                        case 6:
                            e = t.sent, y(e), v(!1), t.next = 14;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(2), v(!1);
                        case 14:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[2, 11]])
            })))), u ? m.a.createElement(D.c, {
                className: e,
                color: "primary",
                onClick: j,
                loading: b
            }, s.common.action.view_result) : null
        }

        var K = Object(q.y)([["redirectContainer", "\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tmargin: 30px auto;\n\t"], ["trigger", "\n\t\twidth: 300px;\n\n\t\t&:nth-of-type(2) {\n\t\t\tmargin-top: 20px;\n\t\t}\n\t"]]);

        function $(t) {
            var e = t.type, n = t.ctypSn, r = K();
            return m.a.createElement("div", {className: r.redirectContainer}, m.a.createElement(H, {
                className: r.trigger,
                type: e,
                ctypSn: n
            }), ("thankyou" === e || "ctyp" === e) && m.a.createElement(Q, {className: r.trigger}))
        }

        var tt = Object(q.y)([["banner", function (t, e) {
            var n = Object(d.a)(e, 2), r = n[0], a = n[1];
            return ["\n\t\t\toverflow: hidden;\n      height: 0;\n      padding-top: calc(".concat(a, "%);\n      background: url(").concat(r, ");\n      background-size: cover;\n      margin-bottom: 40px;\n\t\t")]
        }]]), et = Object(p.memo)((function (t) {
            var e = t.src, n = t.aspectRatio, r = tt([e, n]);
            return m.a.createElement("div", {className: r.banner, "aria-label": "banner"})
        })), nt = n(152), rt = n(533), at = n.n(rt), ct = n(534), ot = n.n(ct);

        function it() {
            var t = Object(k.a)(["\n              ", "\n              opacity: 0;\n              width: 199px;\n              height: 40px;\n              margin: 40px 0;\n\n              @media (max-width: 720px) {\n                width: 100%;\n              }\n            "]);
            return it = function () {
                return t
            }, t
        }

        function ut() {
            var t = Object(k.a)(["\n              ", "\n              opacity: 0;\n              margin: 0 auto 24px;\n              color: #454545;\n              @media (max-width: 720px) {\n                font-size: 16px;\n                margin: 0 auto 16px;\n              }\n            "]);
            return ut = function () {
                return t
            }, t
        }

        function st() {
            var t = Object(k.a)(["\n              width: 100%;\n              margin: 24px 0;\n            "]);
            return st = function () {
                return t
            }, t
        }

        function lt() {
            var t = Object(k.a)(["\n              width: 184px;\n              height: 45px;\n              margin-bottom: 24px;\n              cursor: pointer;\n\n              @media (max-width: 720px) {\n                width: 84px;\n                height: 20px;\n              }\n            "]);
            return lt = function () {
                return t
            }, t
        }

        function dt() {
            var t = Object(k.a)(["\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            max-width: 540px;\n            margin: 0 auto;\n            padding: 40px 0;\n            background-color: #fff;\n\n            @media (max-width: 720px) {\n              padding: 24px;\n            }\n          "]);
            return dt = function () {
                return t
            }, t
        }

        function pt() {
            var t = Object(k.a)(["\n          background-color: #fff;\n          width: 100%;\n          min-height: 100vh;\n        "]);
            return pt = function () {
                return t
            }, t
        }

        function mt() {
            var t = Object(k.a)(["\n              cursor: pointer;\n              color: #43b8eb;\n            "]);
            return mt = function () {
                return t
            }, t
        }

        function ft() {
            var t = Object(k.a)(["\n          display: ", ";\n          background: linear-gradient(\n            180deg,\n            rgba(255, 255, 255, 0) 0%,\n            #fff 79.17%\n          );\n          position: absolute;\n          bottom: 0;\n          width: 100%;\n          height: 100px;\n          text-align: center;\n          flex-direction: column-reverse;\n        "]);
            return ft = function () {
                return t
            }, t
        }

        function bt() {
            var t = Object(k.a)(["\n          // 109px \u70ba logo + padding\uff0c\u624b\u6a5f\u7248\u70ba 68px\n          overflow: hidden;\n\n          ", "\n        "]);
            return bt = function () {
                return t
            }, t
        }

        function vt() {
            var t = Object(k.a)(["\n        position: relative;\n      "]);
            return vt = function () {
                return t
            }, t
        }

        function gt() {
            var t = Object(k.a)(["\n          font-size: 24px;\n          color: #454545;\n          @media (max-width: 720px) {\n            font-size: 20px;\n          }\n        "]);
            return gt = function () {
                return t
            }, t
        }

        function ht() {
            var t = Object(k.a)(["\n          margin-right: 8px;\n        "]);
            return ht = function () {
                return t
            }, t
        }

        function Ot() {
            var t = Object(k.a)(["\n        display: flex;\n        align-items: center;\n      "]);
            return Ot = function () {
                return t
            }, t
        }

        function yt() {
            var t = Object(k.a)(["\n              width: 100%;\n              height: auto;\n              min-height: 40px;\n              margin: 24px 0;\n\n              @media (max-width: 720px) {\n                margin: 16px 0;\n                padding: 8px 16px;\n              }\n            "]);
            return yt = function () {
                return t
            }, t
        }

        function jt() {
            var t = Object(k.a)(["\n              font-size: 16px;\n              color: #454545;\n              margin-bottom: 16px;\n            "]);
            return jt = function () {
                return t
            }, t
        }

        function xt() {
            var t = Object(k.a)(["\n            padding: 24px 40px;\n\n            @media (max-width: 720px) {\n              padding: 24px 16px;\n            }\n          "]);
            return xt = function () {
                return t
            }, t
        }

        function wt() {
            var t = Object(k.a)(["\n              display: block;\n              width: 100%;\n              height: auto;\n              max-height: 304px;\n              border-radius: 4px;\n              object-fit: cover;\n              object-position: center;\n\n              @media (max-width: 720px) {\n                max-height: 176px;\n              }\n            "]);
            return wt = function () {
                return t
            }, t
        }

        function Et() {
            var t = Object(k.a)(["\n            width: 100%;\n            height: 304px;\n\n            @media (max-width: 720px) {\n              width: 100%;\n              height: 176px;\n            }\n          "]);
            return Et = function () {
                return t
            }, t
        }

        function kt() {
            var t = Object(k.a)(["\n          position: relative;\n          width: 100%;\n          background-color: #fff;\n          border-radius: 4px;\n          box-shadow: 0px 5px 20px 0px rgba(69, 69, 69, 0.1);\n        "]);
            return kt = function () {
                return t
            }, t
        }

        function Nt() {
            var t = Object(k.a)(["\n        ", "\n        opacity: 0;\n        display: flex;\n        flex-direction: column;\n      "]);
            return Nt = function () {
                return t
            }, t
        }

        function St() {
            var t = Object(k.a)(["\n          margin-right: 4px;\n        "]);
            return St = function () {
                return t
            }, t
        }

        function Ct() {
            var t = Object(k.a)(["\n        display: flex;\n        justify-content: center;\n      "]);
            return Ct = function () {
                return t
            }, t
        }

        function At() {
            var t = Object(k.a)(["\n  animation: ", " 1s forwards 0.6s;\n"]);
            return At = function () {
                return t
            }, t
        }

        function It() {
            var t = Object(k.a)(["\n  animation: ", " 1s forwards 0.6s;\n"]);
            return It = function () {
                return t
            }, t
        }

        function Dt() {
            var t = Object(k.a)(["\n\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]);
            return Dt = function () {
                return t
            }, t
        }

        function _t() {
            var t = Object(k.a)(["\n  from {\n    transform: translateY(50px); \n    opacity: 0; \n  }\n  to {\n    transform: translateY(0); \n    opacity: 1; \n  }\n"]);
            return _t = function () {
                return t
            }, t
        }

        var Tt = q.i.Divider, Lt = q.i.Typography, Pt = q.i.Button, Rt = q.i.ThemeProvider, Mt = q.i.Icon,
            Ft = q.i.Link, Ut = Object(N.d)(_t()), zt = Object(N.d)(Dt()), Gt = Object(N.a)(It(), zt),
            Bt = Object(N.a)(At(), Ut);

        function Yt() {
            return m.a.createElement("div", {className: Object(N.a)(Ct())}, m.a.createElement("img", {
                className: Object(N.a)(St()),
                src: ot.a,
                alt: ""
            }), m.a.createElement(Lt, {variant: "overline"}, "Certified by SurveyCake"))
        }

        function Ht(t) {
            var e = t.desc, n = t.title, r = t.imgAlt, a = t.imgSrc, c = t.btnText, o = t.btnUrl,
                s = Object(i.c)().adOptions, l = Object(u.c)();
            return m.a.createElement("div", {className: Object(N.a)(Nt(), Bt)}, m.a.createElement("div", {className: Object(N.a)(kt())}, m.a.createElement("div", {className: Object(N.a)(Et())}, m.a.createElement("img", {
                className: Object(N.a)(wt()),
                src: a,
                alt: r
            })), m.a.createElement("div", {className: Object(N.a)(xt())}, m.a.createElement(Lt, {
                className: Object(N.a)(jt()),
                variant: "h6"
            }, n), m.a.createElement(Lt, {variant: "body2"}, e), m.a.createElement(Pt, {
                className: Object(N.a)(yt()),
                color: "primary",
                variant: "contained",
                onClick: function () {
                    null !== s.ad && l.trackClickLandingSurvey(s.ad.questionnaire.domain, s.ad.questionnaire.svid, s.ad.token, s.ad.questionnaire.id, s.ad.questionnaire.url_type), window.open(o)
                }
            }, c), m.a.createElement(Yt, null))))
        }

        function Vt(t) {
            var e = t.text;
            return m.a.createElement("div", {className: Object(N.a)(Ot())}, m.a.createElement(Mt, {
                fontSize: "large",
                className: Object(N.a)(ht()),
                color: "primary",
                name: "CheckCircle"
            }), m.a.createElement(Lt, {variant: "h4", className: Object(N.a)(gt())}, e))
        }

        function Wt(t) {
            var e = t.thankyouText, n = Object(i.c)().wording, r = m.a.useState(!1), a = Object(d.a)(r, 2), c = a[0],
                o = a[1], u = m.a.useRef(null);
            return m.a.useEffect((function () {
                var t = u.current;
                t && (t.getBoundingClientRect().bottom < window.innerHeight / 2 && o(!0))
            }), []), m.a.createElement("div", {className: Object(N.a)(vt())}, m.a.createElement("div", {
                ref: u,
                className: Object(N.a)(bt(), !1 === c && "\n              max-height: calc(50vh - 109px);\n              @media (max-width: 720px) {\n                max-height: calc(50vh - 68px);\n              }")
            }, m.a.createElement(D.m, {html: e})), m.a.createElement("div", {className: Object(N.a)(ft(), !1 === c ? "flex" : "none")}, !1 === c && m.a.createElement(Ft, {
                className: Object(N.a)(mt()),
                onClick: function () {
                    return o(!0)
                }
            }, n.common.info.show_all_thank_text)))
        }

        function Jt(t) {
            var e = t.data, n = t.type, r = t.ctypSn, a = Object(u.c)(), c = Object(v.c)(), s = Object(i.c)(),
                d = o.q.is ? o.J : Object(nt.b)(o.J, s.data.language);
            if (m.a.useEffect((function () {
                null !== e && a.trackRenderLandingSurvey(e.questionnaire.domain, e.questionnaire.svid, e.questionnaire.id, e.questionnaire.url_type)
            }), []), !(n in G) || "" === n) return null;
            if (!e) return null;
            var p = G[n](s, c.getState(), r).text, f = e.ad, b = e.questionnaire;
            return m.a.createElement(Rt, null, m.a.createElement("div", {className: Object(N.a)(pt())}, m.a.createElement("div", {className: Object(N.a)(dt())}, m.a.createElement("img", {
                className: Object(N.a)(lt()),
                onClick: function () {
                    window.open(d)
                },
                src: at.a,
                alt: "SurveyCake"
            }), "" === p ? m.a.createElement(Vt, {text: s.wording.common.info.thankyou_for_ad}) : m.a.createElement(Wt, {thankyouText: p}), m.a.createElement("div", {className: Object(N.a)(st())}, m.a.createElement(Tt, null)), m.a.createElement(Lt, {
                variant: "h4",
                className: Object(N.a)(ut(), Gt)
            }, f.title), m.a.createElement(Ht, {
                desc: b.description,
                title: b.title,
                btnText: b.button,
                imgSrc: b.image.src,
                imgAlt: b.image.alt,
                btnUrl: b.url
            }), m.a.createElement(Pt, {
                className: Object(N.a)(it(), Gt),
                color: "primary",
                variant: "outlined",
                onClick: function () {
                    var t = l.a ? "https://staging.svy.do/zh-tw/why-surveycake/basic?utm_source=survey&utm_medium=referral&utm_campaign=thankyoubtn_website" : "https://www.surveycake.com/zh-tw/why-surveycake/basic?utm_source=survey&utm_medium=referral&utm_campaign=thankyoubtn_website";
                    window.open(t, "_blank", "noopener")
                }
            }, s.wording.leadgen.referral_btn_text))))
        }

        var Zt = function (t) {
            var e = t.type, n = t.ctypSn, r = Object(i.c)(), a = Object(v.c)(), c = G[e](r, a.getState(), n),
                u = c.banner, s = c.text, l = c.isFromCustom, d = c.background, p = c.targetCTYPSn,
                f = d && "/" === d[0] ? "".concat(o.A).concat(d) : d;
            return m.a.createElement(D.a, {image: f}, m.a.createElement(D.d, null, m.a.createElement(D.f, {
                banner: l ? m.a.createElement(D.b, {banner: u}) : m.a.createElement(et, {
                    src: u,
                    aspectRatio: o.G ? 326 / 960 * 100 : 0
                }), intro: m.a.createElement(D.i, null, m.a.createElement(D.m, {html: s}))
            }, m.a.createElement($, {type: e, ctypSn: p}))), m.a.createElement(D.e, null))
        }, qt = function (t) {
            var e = t.type, n = t.ctypSn, r = Object(i.c)().getAdOptions();
            return Object(p.useEffect)((function () {
                window.scrollTo({top: 0})
            }), []), e in G && "" !== e ? r && r.needRecommendAd && r.ad ? m.a.createElement(Jt, {
                data: r.ad,
                type: e,
                ctypSn: n
            }) : m.a.createElement(Zt, {type: e, ctypSn: n}) : null
        }, Xt = {
            pageIf: function (t, e) {
                return !e && ["ctyp", "ended", "sorry", "thankyou"].includes(t)
            }, render: function (t, e, n, r) {
                return m.a.createElement(qt, {type: t, ctypSn: n, adOptions: r})
            }
        }, Qt = n(55);

        function Kt() {
            document.getElementById("loading") && (document.getElementById("loading").classList.add("removing"), setTimeout((function () {
                document.body.removeChild(document.getElementById("loading"))
            }), 400), document.body.classList.remove("freeze"))
        }

        function $t() {
            Object(Z.b)(Kt)
        }

        var te, ee = n(32), ne = n(56), re = n(140), ae = n.n(re), ce = n(296), oe = n.n(ce), ie = n(160), ue = n.n(ie),
            se = n(535), le = n.n(se), de = (te = {}, Object(ee.a)(te, g.c.NOT_FOUND, (function (t) {
                return {image: oe.a, title: t.wording.common.exception.not_found}
            })), Object(ee.a)(te, g.c.NOT_PUBLIC, (function (t) {
                return {
                    image: ue.a,
                    title: t.data && t.data.not_public_text ? t.data.not_public_text : t.wording.common.exception.not_public
                }
            })), Object(ee.a)(te, g.c.FULLED, (function (t) {
                return {
                    image: le.a,
                    title: t.data && t.data.fulled_text ? t.data.fulled_text : t.wording.common.exception.fulled
                }
            })), Object(ee.a)(te, g.c.INVALID_DURATION, (function (t) {
                var e = t.data, n = e.starttime, r = e.endtime;
                return n = n ? Object(ne.b)(new Date("".concat(n.replace(" ", "T"), "Z"))) : "", r = r ? Object(ne.b)(new Date("".concat(r.replace(" ", "T"), "Z"))) : "", {
                    image: ue.a,
                    title: t.data && t.data.invalid_duration_text ? t.data.invalid_duration_text : t.wording.common.exception.invalid_duration,
                    info: "".concat(n, " \uff5e ").concat(r)
                }
            })), Object(ee.a)(te, g.c.MISSING_DEFAULT_ANSWER, (function (t) {
                return {
                    image: ae.a,
                    title: t.wording.common.exception.missing_default_answer.title,
                    info: t.wording.common.exception.missing_default_answer.content
                }
            })), Object(ee.a)(te, g.c.INVALID_DEFAULT_ANSWER, (function (t) {
                return {
                    image: ae.a,
                    title: t.wording.common.exception.invalid_default_answer.title,
                    info: t.wording.common.exception.invalid_default_answer.content
                }
            })), Object(ee.a)(te, g.c.MASTER_SURVEY_IS_NOT_EXISTED, (function (t) {
                return {image: ue.a, title: t.wording.common.exception.master_survey_is_not_existed}
            })), Object(ee.a)(te, g.c.MASTER_SURVEY_IS_OFF, (function (t) {
                return {image: ue.a, title: t.wording.common.exception.master_survey_is_off}
            })), Object(ee.a)(te, g.c.INVALID_SUBMIT_DURATION, (function (t) {
                return {
                    image: ae.a,
                    title: t.wording.common.exception.invalid_submit_duration.title,
                    info: t.wording.common.exception.invalid_submit_duration.content
                }
            })), Object(ee.a)(te, g.c.INVALID_ANSWER_OBJECT, (function (t) {
                return {
                    image: ae.a,
                    title: t.wording.common.exception.invalid_answer_object.title,
                    info: t.wording.common.exception.invalid_answer_object.content
                }
            })), Object(ee.a)(te, g.c.INVALID_TEMPORARY_SURVEY, (function (t) {
                return {
                    image: ae.a,
                    title: t.wording.common.exception.invalid_temporary_survey.title,
                    info: t.wording.common.exception.invalid_temporary_survey.content
                }
            })), Object(ee.a)(te, g.c.NOT_AVAILABLE, (function (t) {
                return {image: oe.a, title: t.wording.common.exception.not_available}
            })), Object(ee.a)(te, g.c.INVALID_PRO_SURVEY, (function () {
                return {image: ue.a, title: "", info: ""}
            })), Object(ee.a)(te, g.c.NOT_ALLOWED, (function (t) {
                return {image: ae.a, title: t.wording.common.exception.not_allowed}
            })), te);
        var pe = function () {
                var t = Object(i.c)().wording;
                return m.a.createElement(D.c, {
                    color: "primary", onClick: function () {
                        return window.location.reload()
                    }, style: {width: "100%"}
                }, t.common.action.restart)
            }, me = function (t) {
                var e = t.exception, n = e.statusCode, r = e.message, a = Object(i.c)(), c = de[n] ? de[n](a) : {},
                    u = c.image, s = void 0 === u ? "" : u, l = c.title, d = void 0 === l ? "" : l, p = c.info,
                    f = void 0 === p ? "" : p;
                return $t(), m.a.createElement("div", null, m.a.createElement(D.h, {
                    showImage: o.G,
                    image: s,
                    title: d,
                    info: f && m.a.createElement(Qt.Trans, {linebreak: m.a.createElement("br", null)}, f)
                }, "INVALID_ANSWER_OBJECT" === r && m.a.createElement(pe, null)), m.a.createElement(D.e, {showLogo: o.G}))
            }, fe = {
                pageIf: function (t, e) {
                    return Boolean(e)
                }, render: function (t, e) {
                    return m.a.createElement(me, {exception: e})
                }
            }, be = n(536), ve = n.n(be),
            ge = Object(q.y)([["passwordForm", "\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\twidth: 300px;\n\t\tmax-width: 100%;\n\t\tmargin: 20px auto;\n\t"], ["passwordInput", function (t) {
                return "\n\t\tfont-size: 24px;\n\t\tcolor: ".concat(t.color.primary.default, ";\n\t\tborder-radius: 4px;\n\t\tborder: 2px solid ").concat(t.survey.option.default.border.color, ";\n\t\tmargin-bottom: 20px;\n\t\tpadding: 6px 12px;\n\t\toutline: none;\n\t\ttext-align: center;\n\t")
            }]]);

        function he() {
            var t = Object(i.c)(), e = t.wording, n = h.PageService.useSetPage(), r = g.b.useSetException(),
                a = Object(p.useState)(""), c = Object(d.a)(a, 2), o = c[0], u = c[1], s = Object(p.useState)(!1),
                l = Object(d.a)(s, 2), f = l[0], b = l[1], v = Object(p.useState)(!1), O = Object(d.a)(v, 2), y = O[0],
                j = O[1], x = Object(p.useRef)(null), w = Object(Z.f)(Object(J.a)(W.a.mark((function e() {
                    return W.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return j(!0), e.prev = 1, e.next = 4, t.initialPrivateData(o);
                            case 4:
                                t.handleStageFinished(n, r, {thirdPartyLogin: !0}), t.logSelf(), e.next = 11;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(1), e.t0 instanceof g.a ? r(e.t0) : (j(!1), b(!0), x.current && x.current.focus());
                            case 11:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[1, 8]])
                })))), E = Object(p.useCallback)((function (t) {
                    u(t.target.value), b(!1)
                }), [u, b]), k = Object(Z.i)(w), N = ge();
            return m.a.createElement(m.a.Fragment, null, f && m.a.createElement(q.g, {color: "error"}, e.common.exception.private.error), m.a.createElement("div", {className: N.passwordForm}, m.a.createElement("input", {
                ref: x,
                className: N.passwordInput,
                value: o,
                type: "password",
                autoComplete: "off",
                disabled: y,
                onChange: y ? void 0 : E,
                onKeyDown: y ? void 0 : k
            }), m.a.createElement(D.c, {
                color: "primary",
                loading: y,
                onClick: y ? void 0 : w
            }, e.common.exception.private.confirm)))
        }

        function Oe() {
            var t = Object(i.c)().wording;
            return $t(), m.a.createElement("div", null, m.a.createElement(D.h, {
                showImage: o.G,
                image: ve.a,
                title: t.common.exception.private.title,
                info: t.common.exception.private.content
            }, m.a.createElement(he, null)), m.a.createElement(D.e, {showLogo: o.G}))
        }

        var ye = {
                pageIf: function (t, e) {
                    return !e && "password" === t
                }, render: function () {
                    return m.a.createElement(Oe, null)
                }
            }, je = Object(q.y)([["breadcrumbContainer", function (t) {
                return "\n\t\tcolor: ".concat(t.survey.color.default, ";\n\t\tbackground-color: ").concat(t.survey.color.gray, ";\n    margin: -40px 0 40px 0;\n\t")
            }], ["breadcrumb", "\n\t\tmargin: 0 8px;\n\t\tpadding: 6px 0;\n\t\tfont-size: 13px;\n\t\tline-height: 1.4;\n\t"]]),
            xe = function (t) {
                return t.breadcrumb
            };
        var we = Object(p.memo)((function () {
                var t = Object(v.e)(xe), e = je();
                return m.a.createElement("div", {
                    className: e.breadcrumbContainer,
                    "aria-label": "breadcrumb"
                }, t.map((function (t, n) {
                    if (!t) return null;
                    var r = n > 0 ? {marginLeft: 20 * n} : void 0;
                    return m.a.createElement("div", {key: n, className: e.breadcrumb, style: r}, t)
                })))
            })), Ee = Object(N.a)("\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n"),
            ke = Object(N.a)("\n\twidth: 100%;\n"),
            Ne = Object(N.a)("\n\tposition: relative;\n\tmargin: 10px auto 0 auto;\n"), Se = function (t) {
                var e = t.children;
                return m.a.createElement("div", {className: Ne, "aria-label": "subject answer container"}, e)
            }, Ce = Object(q.y)([["contentContainer", function (t, e) {
                var n = Object(d.a)(e, 1)[0];
                return ["\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\tmargin-right: 0;\n\t\t\tfloat: right;\n\n\t\t\t@media (max-width: 720px) {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t", ("QUOTE" === n || "STATEMENT" === n) && "\n\t\t\t\tfloat: none;\n\t\t\t\twidth: auto;\n\t\t"]
            }]]), Ae = function (t) {
                var e = t.children, n = Object(v.c)(), r = Object(v.i)(), a = Object(p.useMemo)((function () {
                    var t = n.getSubjectData(r);
                    return "undefined" === typeof t ? void 0 : t.type
                }), [n, r]), c = Ce([a]);
                return m.a.createElement("div", {
                    "aria-label": "subject content container",
                    className: c.contentContainer
                }, e)
            }, Ie = Object(q.y)([["contentWrapper", function (t, e) {
                var n = Object(d.a)(e, 1)[0];
                return ["\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\tmargin-right: 0;\n\t\t\tfloat: right;\n\n\t\t\t@media (max-width: 720px) {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t", ("QUOTE" === n || "STATEMENT" === n) && "\n\t\t\t\tfloat: none;\n\t\t\t\twidth: 100%;\n\t\t"]
            }]]), De = function (t) {
                var e = t.children, n = Object(v.c)(), r = Object(v.i)(), a = Object(p.useMemo)((function () {
                    var t = n.getSubjectData(r);
                    return "undefined" === typeof t ? void 0 : t.type
                }), [n, r]), c = Ie([a]);
                return m.a.createElement("div", {"aria-label": "subject content container", className: c.contentWrapper}, e)
            }, _e = Object(N.a)("\n\tmax-width: 100%;\n"), Te = function (t) {
                return t.description
            };
        var Le = Object(p.memo)((function () {
                var t = Object(v.c)(), e = Object(v.i)(), n = Object(v.k)(e, Te),
                    r = "undefined" === typeof t.getSubjectData(e) ? void 0 : n;
                return r ? m.a.createElement(q.h, {
                    className: _e,
                    variant: "div",
                    color: "text.B4",
                    gutterBottom: !0
                }, m.a.createElement(D.m, {html: r})) : null
            })),
            Pe = Object(q.y)([["grid", "\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t"], ["item", function (t, e) {
                var n = Object(d.a)(e, 2), r = n[0], a = n[1];
                return ["\n\t\t\t\tposition: relative;\n\t\t\t\twidth: calc((100% - ".concat(a * (r - 1) + 1, "px) /").concat(r, ");\n\t\t\t\tmargin-right: ").concat(a, "px;\n\t\t\t\tline-height: 0;\n\t\t\t\tbox-sizing: border-box;\n\n\t\t\t\t&:nth-of-type(").concat(r, "n) {\n\t\t\t\t\tmargin-right: 0;\n\t\t\t\t}\n\t\t\t")]
            }]]), Re = function (t) {
                var e = t.column, n = t.gutter, r = t.children, a = t.onClick, c = Pe([e, n]);
                return m.a.createElement("div", {
                    className: c.grid,
                    onClick: a
                }, p.Children.toArray(r).map((function (t, e) {
                    return m.a.createElement("div", {key: e, className: c.item}, t)
                })))
            };
        Re.defaultProps = {gutter: 0};
        var Me = Re;
        var Fe = Object(p.memo)((function (t) {
            var e = t.className, n = Object(v.c)(), r = Object(v.i)(), a = n.getSubjectData(r),
                c = "undefined" === typeof a ? {imgs: void 0, youtubeid: void 0} : a, o = c.imgs, i = c.youtubeid;
            return o || i ? m.a.createElement("div", {
                className: e,
                "aria-label": "subject media"
            }, o && m.a.createElement(D.g, {src: o, lazyload: !0}), i && m.a.createElement(D.n, {
                videoId: i,
                onStart: function () {
                    return n.startMedia(r)
                }
            })) : null
        })), Ue = n(28), ze = n(156);

        function Ge(t) {
            var e = Object(Ue.createMessageResolver)(t), n = function (e) {
                return e[t]
            };
            return Object(p.memo)((function () {
                var r = Object(v.i)(), a = Object(v.j)(r, n), c = Object(i.c)().wording, o = e(c, a),
                    u = c.message.validate_message, s = u.api, l = u.api_loading;
                return !o || (o === s || o === l) ? null : "info" === t ? m.a.createElement(q.h, {
                    className: ze.a,
                    variant: "span",
                    color: "warning"
                }, o) : m.a.createElement(q.g, {color: "error", "data-qa": "tag"}, o)
            }))
        }

        var Be = Ge("error"), Ye = Ge("info");
        var He = function (t) {
            var e = t.children;
            return m.a.createElement("div", {className: ze.b}, e)
        }, Ve = n(73);

        function We() {
            var t = Object(k.a)(["\n            > * {\n              margin: 0 0 8px 0;\n            }\n            ", "\n          "]);
            return We = function () {
                return t
            }, t
        }

        var Je = Object(p.memo)((function (t) {
            var e = t.imageLink, n = void 0 === e ? "" : e, r = t.youtubeID, a = void 0 === r ? "" : r, c = t.className,
                o = t.imageClassName, i = t.playIconClassName, u = t.thumbnailClassName, s = "" !== n, l = "" !== a;
            return m.a.createElement(m.a.Fragment, null, (l || s) && m.a.createElement("span", {className: Object(N.a)(We(), c)}, s && m.a.createElement(D.g, {
                src: n,
                className: o
            }), l && m.a.createElement(D.n, {videoId: a, playIconClassName: i, thumbnailClassName: u})))
        })), Ze = Object(q.y)([["container", function (t, e) {
            var n = Object(d.a)(e, 3), r = n[0], a = n[1], c = n[2];
            return ["\n\t\t\tfont-size: 1rem;\n\t\t\tdisplay: inline-block;\n\t\t\tborder-width: 1px;\n\t\t\tborder-style: ".concat(t.survey.option[r ? "active" : "default"].border.style, ";\n\t\t\tbackground-color: ").concat(t.survey.option[r ? "active" : "default"].background, ";\n\t\t\twidth: 100%;\n\t\t\tpadding: 3px;\n\t\t\tborder-radius: 3px;\n\t\t\tbox-sizing: border-box;\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t\tcursor: ").concat(a ? "not-allowed" : "pointer", ";\n\t\t\tmargin: 0 0 10px 0;\n\t\t\t-webkit-tap-highlight-color: transparent;\n\t\t\ttransition: background-color 0.2s;\n\t\t"), (a || c) && "\n\t\t\tborder-color: ".concat(t.color.text.B2, ";\n\t\t"), !(a || c) && "\n\t\t\tborder-color: ".concat(t.survey.option[r ? "active" : "default"].border.color, ";\n\t\t"), !(a || c || r) && "\n\t\t\t&:hover {\n\t\t\t\t.Checkbox {\n\t\t\t\t\tcolor: ".concat(t.color.primary.default, ";\n\t\t\t\t}\n\n\t\t\t\t.Radio_border {\n\t\t\t\t\tborder-color: ").concat(t.color.primary.default, ";\n\t\t\t\t}\n\t\t\t}\n\t\t")]
        }], ["middle", "\n\t\tdisplay: flex;\n\t\tjustify-content: flex-start;\n\t\talign-items: flex-start;\n\t"], ["iconContainer", "\n\t\tposition: relative;\n\t\tdisplay: inline-flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tpadding: 8px;\n\t\ttext-align: center;\n\t"], ["text", function (t, e) {
            var n = Object(d.a)(e, 3), r = n[0], a = n[1], c = n[2];
            return ["\t\t\n\t\t\t:lang(ar){\n\t\t\t\ttransform: scaleX(-1);\n\t\t\t\tdirection: rtl;\n\t\t\t}\n\t\t\tcolor: ".concat(t.survey.option[r ? "active" : "default"].text, ";\n\t\t\tline-height: 1.5;\n\t\t\tfont-size: 1.15em;\n\t\t\tfont-weight: 400;\n\t\t\ttransition: color 0.2s;\n\t\t\tmargin: 0.15em 0 0 0;\n\t\t\twidth: calc(100% - 32px);\n\t\t\toverflow-wrap: break-word;\n\t\t\tword-break: break-word;\n\t\t"), (a || c && !r) && "\n\t\t\tcolor: ".concat(t.color.text.B2, ";\n\t\t")]
        }], ["disabledText", function (t) {
            return "\n\t\t:lang(ar){\n\t\t\ttransform: scaleX(-1);\n\t\t\tdirection: rtl;\n\t\t}\n\t\tcolor: ".concat(t.color.semantic.error, ";\n\t\tline-height: 1.5;\n\t\tfont-size: 0.9em;\n\t\tfont-weight: 400;\n\t")
        }], ["childrenContainer", function (t) {
            return "\n\t\tpadding: 8px;\n\t\tborder-radius: 3px;\n\t\tmargin: 8px;\n\t\tbackground-color: white;\n\t\tborder: 1px solid ".concat(t.color.primary.hover, ";\n\t")
        }], ["requiredText", function (t) {
            return "\n\t:lang(ar){\n\t\ttransform: scaleX(-1);\n\t\tdirection: rtl;\n\t}\n\tcolor: ".concat(t.survey.option.active.text, ";\n\tline-height: 1.5;\n\tfont-size: 14px;\n\tfont-weight: 500;\n\t")
        }], ["requiredTag", function (t) {
            return "\n\t:lang(ar){\n\t\ttransform: scaleX(-1);\n\t\tdirection: rtl;\n\t}\n\theight: 30px;\n\twidth: fit-content;\n\tpadding: 0 12px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: #FFFFFF;\n\tbackground-color: #E9A01C;\n\tline-height: 1.5;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tborder-radius: 15px;\n\t"
        }], ["infoContainer", "\n\tmargin: 8px;\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 8px;\n\t"]]);

        function qe(t) {
            return Object(p.memo)((function (e) {
                var n = e.Id, r = e.value, a = e.label, c = void 0 === a ? "" : a, o = e.checked, u = e.imageLink,
                    s = void 0 === u ? "" : u, l = e.youtubeID, d = void 0 === l ? "" : l, f = e.className,
                    b = void 0 === f ? "" : f, v = e.textClassName, g = void 0 === v ? "" : v, h = e.disabled,
                    O = void 0 !== h && h, y = e.disabledText, j = void 0 === y ? "" : y, x = e.excluded,
                    w = void 0 !== x && x, E = e.children, k = e.onChange, S = e.required, C = void 0 !== S && S,
                    A = e.isOptionFulledDisabled, I = void 0 === A || A,
                    D = Object(Ve.a)(e, ["Id", "value", "label", "checked", "imageLink", "youtubeID", "className", "textClassName", "disabled", "disabledText", "excluded", "children", "onChange", "required", "isOptionFulledDisabled"]),
                    _ = Object(i.c)().wording, T = Object(p.useCallback)((function () {
                        O || k(r, !o)
                    }), [r, o, O, k]), L = Ze([o, O, w]);
                return m.a.createElement("div", {
                    className: Object(N.b)(L.container, b),
                    onClick: T,
                    "data-subject-option-id": n,
                    "data-qa": "option-".concat(c)
                }, (s || d) && m.a.createElement(Je, {
                    imageLink: s,
                    youtubeID: d
                }), m.a.createElement("span", {className: L.middle}, m.a.createElement("span", {className: L.iconContainer}, m.a.createElement(t, Object.assign({checked: o}, D))), "" !== c && m.a.createElement("span", {className: Object(N.b)(L.text, g)}, c, O && I && m.a.createElement(m.a.Fragment, null, m.a.createElement("br", null), m.a.createElement("span", {className: L.disabledText}, "" === j ? _.message.error.option_fulled : j)))), E && m.a.createElement("div", {className: L.childrenContainer}, E), C && m.a.createElement("div", {className: L.infoContainer}, m.a.createElement("span", {className: L.requiredText}, "".concat(_.message.info.option_required, "*")), m.a.createElement("span", {className: L.requiredTag}, _.message.error.option_required)))
            }))
        }

        var Xe = Object(N.d)("\n\t0% {\n    transform: scale(1);\n    opacity: 1;\n\t}\n\t100% {\n    transform: scale(1.8);\n    opacity: 0;\n\t}\n"),
            Qe = Object(q.y)([["radio", function (t, e) {
                var n = Object(d.a)(e, 3), r = (n[0], n[1], n[2]);
                return "\n\t\tposition: relative;\n\t\tfont-size: ".concat(t.typography.fontSize["medium" === r ? "h5" : "h6"], "px;\n\t\twidth: 1em;\n\t\theight: 1em;\n\n\t\t&, & * {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t")
            }], ["dot", function (t, e) {
                var n = Object(d.a)(e, 4), r = n[0], a = n[1], c = (n[2], n[3]);
                return ["\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tleft: 50%;\n\t\t\twidth: calc(1rem - 8px);\n\t\t\theight: calc(1rem - 8px);\n\t\t\tborder-radius: 100%;\n\t\t\ttransform: translate(-50%, -50%) scale(".concat(r ? 1 : 0, ");\n\t\t\ttransition-property: transform;\n\t\t\ttransition-duration: ").concat(c, "ms;\n\t\t\ttransition-timing-function: cubic-bezier(.78, .14, .15, .86);\n\t\t"), !a && "\n\t\t\tbackground-color: ".concat(r ? t.survey.control.active : t.color.text.white, ";\n\t\t"), a && "\n\t\t\tbackground-color: ".concat(t.color.primary.default, ";\n\t\t")]
            }], ["border", function (t, e) {
                var n = Object(d.a)(e, 2), r = n[0], a = n[1];
                return ["\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tborder-width: 2px;\n\t\t\tborder-style: solid;\n\t\t\tborder-radius: 100%;\n\t\t\ttransition-property: border-color;\n\t\t\ttransition-duration: 0.3s;\n\t\t", !a && "\n\t\t\tborder-color: ".concat(r ? t.survey.control.active : t.survey.control.default, ";\n\t\t"), a && "\n\t\t\tbackground-color: white;\n\t\t\tborder-color: ".concat(r ? t.color.primary.default : t.survey.control.default, ";\n\t\t")]
            }], ["borderAnimation", function (t, e) {
                var n = Object(d.a)(e, 4), r = (n[0], n[1], n[2], n[3]);
                return "\n\t\tanimation-duration: ".concat(r, "ms;\n\t\tanimation-iteration-count: 1;\n\t\tanimation-name: ").concat(Xe, ";\n\t\tanimation-timing-function: cubic-bezier(.78, .14, .15, .86);\n\t\tanimation-fill-mode: forwards;\n\t")
            }]]), Ke = function (t) {
                var e = t.checked, n = t.inverse, r = t.size, a = t.rippleAnimationDuration, c = Qe([e, n, r, a]);
                return m.a.createElement("div", {className: c.radio}, m.a.createElement("div", {className: Object(N.b)("Radio_border", c.border)}), m.a.createElement("div", {className: c.dot}), e && m.a.createElement("div", {className: Object(N.b)(c.border, c.borderAnimation)}))
            };
        Ke.defaultProps = {inverse: !1, size: "medium", rippleAnimationDuration: 300};
        var $e = Ke, tn = Object(q.y)([["icon", function (t, e) {
                var n = Object(d.a)(e, 1)[0];
                return "\n    :lang(ar){\n      transform: scaleX(-1);\n    }\n\t\tcolor: ".concat(t.survey.control[n ? "active" : "default"], ";\n\t\ttransition: color 0.2s;\n\t")
            }]]), en = function (t) {
                var e = t.checked, n = tn([e]);
                return m.a.createElement(q.b, {className: Object(N.b)("Checkbox", n.icon), icon: e ? q.p : q.A})
            }, nn = qe($e), rn = qe(en),
            an = "\n\twidth: 100%;\n\tfont-size: 16px;\n\tline-height: 1.6;\n\tborder: none;\n\tborder-radius: 0;\n\tpadding: 5px 0;\n\toutline: none;\n\tbox-shadow: none;\n\tbox-sizing: border-box;\n\t-moz-appearance: textfield;\n\t::-webkit-inner-spin-button {\n\t\tdisplay: none\n\t}\n\n\t:hover {\n\t\t-moz-appearance: none;\n\t\t::-webkit-inner-spin-button {\n\t\t\tdisplay: block\n\t\t}\n\t}\n",
            cn = Object(q.y)([["textField", function (t) {
                return "\n\t\t".concat(an, "\n\t\tborder-bottom: 1px solid ").concat(t.survey.option.default.border.color, ";\n\n\t\t&:focus {\n\t\t\tborder-bottom: 1px solid ").concat(t.color.semantic.warning, ";\n\t\t}\n\t")
            }]]), on = Object(q.y)([["textField", function (t) {
                return "\n\t\t".concat(an, "\n\t\tborder: 1px solid ").concat(t.survey.option.default.border.color, ";\n\t\tborder-radius: 3px;\n\t\tresize: none;\n\t\tpadding: 5px;\n\n\t\t&:focus {\n\t\t\tborder: 1px solid ").concat(t.color.semantic.warning, ";\n\t\t}\n\t")
            }]]), un = Object(p.forwardRef)((function (t, e) {
                var n = t.className, r = Object(Ve.a)(t, ["className"]), a = cn();
                return m.a.createElement("input", Object.assign({
                    ref: e,
                    className: n ? Object(N.b)(n, a.textField) : a.textField,
                    "data-qa": "subject-type-TXTSHORT"
                }, r))
            })), sn = n(542), ln = function (t) {
                var e = t.className, n = Object(Ve.a)(t, ["className"]), r = on();
                return m.a.createElement(sn.a, Object.assign({
                    className: e ? Object(N.b)(e, r.textField) : r.textField,
                    "data-qa": "subject-type-TXTLONG"
                }, n))
            }, dn = Object(p.forwardRef)((function (t, e) {
                var n = t.className, r = t.onChange, a = t.defaultValue,
                    c = Object(Ve.a)(t, ["className", "onChange", "defaultValue"]), o = cn(), i = Object(p.useState)(""),
                    u = Object(d.a)(i, 2), s = u[0], l = u[1];
                Object(p.useEffect)((function () {
                    (a || 0 === a) && l(a.toString())
                }), [a]);
                return m.a.createElement("input", Object.assign({
                    type: "text",
                    ref: e,
                    className: n ? Object(N.b)(n, o.textField) : o.textField,
                    onChange: function (t) {
                        var e = t.target.value.replace(/[^+-.\d]/g, "");
                        /^[+-]?\d*\.?\d*$/.test(e) ? (l(e), r && r(t)) : l(s)
                    }
                }, c, {value: s.toString(), "data-qa": "subject-type-DIGITINPUT"}))
            })), pn = function (t) {
                var e = t.onChange, n = t.initialValue, r = t.onFinished, a = Object(p.useRef)(null),
                    c = Object(p.useCallback)((function () {
                        if (a.current) {
                            var t = a.current.value;
                            e(t)
                        }
                    }), [e]), o = Object(p.useCallback)((function (t) {
                        t.stopPropagation()
                    }), []), i = Object(Z.i)(Object(p.useCallback)((function (t) {
                        if (t.preventDefault(), r && a.current) {
                            var e = a.current.value;
                            r(e)
                        }
                    }), [r]));
                return Object(Z.b)((function () {
                    a.current && (a.current.focus(), a.current.value = n)
                })), m.a.createElement(un, {
                    ref: a,
                    type: "text",
                    onBlur: c,
                    onKeyDown: i,
                    onClick: o,
                    "data-qa": "else-textfield"
                })
            }, mn = Object(q.y)([["overlay", function (t) {
                return "\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tpadding: 16px 0;\n\t\ttext-align: center;\n\t\toverflow: hidden;\n\t\tz-index: 5;\n\t\tbackground-color: ".concat(t.color.text.white, ";\n\t\topacity: 0.9;\n\t\tbox-sizing: border-box;\n\t")
            }]]);
        var fn = Object(p.memo)((function () {
            var t = mn();
            return m.a.createElement("div", {className: t.overlay, "aria-label": "subject overlay"})
        })), bn = Object(q.y)([["requiredStar", function (t, e) {
            Object(d.a)(e, 1)[0];
            return "\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t\ttop: 3px;\n\t\tleft: 8px;\n\t\tfont-size: 16px;\n\t\tline-height: 16px;\n\t\tcolor: ".concat(t.color.semantic.warning, ";\n\t")
        }]]), vn = (Object(p.memo)((function (t) {
            var e = t.hasVn, n = bn([e]);
            return m.a.createElement("div", {className: n.requiredStar}, "*")
        })), Object(p.createContext)({})), gn = function (t) {
            return "undefined" === typeof t ? {} : t
        }, hn = function (t, e) {
            return "undefined" === typeof t || "undefined" === typeof e ? t === e : t.enable === e.enable && t.visible === e.visible
        };
        var On = n(58), yn = function (t, e) {
            return [!t && 1 === e && "\n\t\t\twidth: 96%;\n\t\t\tmargin-left: 4%;\n\t\t"]
        }, jn = function (t, e, n) {
            if (e) return ["\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\twidth: auto;\n\t\t\t\t"];
            return ["\n\t\t\t\twidth: auto;\n\t\t\t\tborder-radius: 10px;\n\t\t\t\tborder: 2px dashed ".concat(t.survey.color.gray, ";\n\t\t\t\tmargin: 0 ").concat(30, "px 30px;\n\t\t\t\tpadding-top: 30px;\n\t\t\t\tdisplay: block;\n\t\t\t"), 1 === n && "\n\t\t\t\twidth: calc(96% - ".concat(60, "px);\n\t\t\t\tmargin-left: calc(4% + ").concat(30, "px);\n\t\t\t")]
        }, xn = function (t, e, n) {
            return [e && "\n\t\t\talign-self: center;\n\t\t\ttext-align: center;\n\t\t\tdisplay: block;\n\n\t\t\t&::before {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tcontent: '';\n\t\t\t\twidth: 24px;\n\t\t\t\theight: 5px;\n\t\t\t\tbackground-color: ".concat(t.color.primary.default, ";\n\t\t\t\tmargin-bottom: 3px;\n\t\t\t}\n\n\t\t\th5 > div {\n\t\t\t\tjustify-content: center;\n\t\t\t}\n\t\t"), !e && "\n\t\t\tborder-left: 5px solid ".concat(t.color.primary.default, ";\n\t\t\tmargin-bottom: 30px;\n\t\t\tpadding-bottom: 0;\n\t\t\ttext-align: left;\n\t\t\tdisplay: block;\n\t\t\t& > div {\n\t\t\t\tmargin-left: -6px;\n\t\t\t}\n\t\t")]
        }, wn = Object(q.y)([["subject", function (t, e) {
            var n, r = Object(d.a)(e, 5), a = r[0], c = r[1], o = r[2], i = r[3], u = r[4];
            return n = "QUOTE" === c ? jn(t, o, a) : "STATEMENT" === c ? xn(t, o, u) : yn(o, a), ["\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: auto;\n\t\t\t\tmargin: 0 auto;\n\t\t\t\tpadding: 0 30px 50px;\n\t\t\t\tbackground-color: transparent;\n\t\t\t\toverflow: hidden;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tdisplay: flex;\n\t\t\t", i && "\n\t\t\t\tmin-height: 170px;\n\t\t\t"].concat(Object(On.a)(n))
        }]]);

        function En(t) {
            var e = t.children, n = function () {
                    var t = Object(v.c)(), e = Object(v.i)(), n = Object(p.useMemo)((function () {
                            var n = t.getSubjectData(e),
                                r = t.getState().meta.calc_mode || t.getState().settings.preview && t.getState().settings.calc_mode,
                                a = "undefined" === typeof n ? {
                                    sn: void 0,
                                    type: void 0,
                                    indent: void 0,
                                    timer: void 0,
                                    vn: void 0
                                } : n;
                            return {
                                sn: a.sn,
                                type: a.type,
                                indent: a.indent,
                                hasTimer: "number" === typeof a.timer,
                                singleSubjectPerPage: t.isSingleSubjectPerPage(),
                                hasVn: Boolean(a.vn),
                                isCalcMode: r
                            }
                        }), [t, e]), r = n.type, a = n.sn, c = n.indent, o = n.hasTimer, i = n.singleSubjectPerPage,
                        u = n.hasVn, s = n.isCalcMode, l = Object(v.k)(e, gn, hn), d = l.visible, m = l.enable,
                        f = Object(p.useContext)(vn), b = Object(_.get)(f, [e, "meta", "enable"], m),
                        g = Object(_.get)(f, [e, "meta", "visible"], d);
                    return {
                        id: e,
                        type: r,
                        sn: a,
                        indent: c,
                        hasTimer: o,
                        visible: s && "boolean" === typeof g ? g : d,
                        enable: s && "boolean" === typeof b ? b : m,
                        singleSubjectPerPage: i,
                        hasVn: u
                    }
                }(), r = n.id, a = n.type, c = n.sn, o = n.indent, i = n.hasTimer, u = n.visible, s = n.enable,
                l = n.singleSubjectPerPage, d = n.hasVn, f = wn([o, a, l, i, d]);
            return u && "NESTCHILD" !== a ? m.a.createElement("div", {
                className: f.subject,
                "aria-label": "subject",
                "data-subject-type": a,
                "data-subject-id": r,
                "data-subject-sn": c,
                "data-qa": "subject-".concat(c)
            }, !s && m.a.createElement(fn, null), a && e(a)) : null
        }

        var kn = function (t) {
            return t.timerStatus
        };
        var Nn = Object(q.y)([["trigger", function (t) {
            return "\n\t\t:lang(ar) {\n\t\t\ttransform: scaleX(-1);\n\t\t\tdirection: rtl;\n\t\t}\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tposition: absolute;\n\t\ttop: 16px;\n\t\tleft: 50%;\n\t\twidth: 220px;\n\t\theight: 140px;\n\t\tmax-height: 100%;\n\t\tbackground-color: ".concat(t.color.primary.default, ";\n\t\tborder-radius: 6px;\n\t\tpadding: 30px 20px;\n\t\ttransform: translate(-50%);\n    box-shadow: ").concat(t.color.text.B3, " 0 2px 5px 0;\n\t\tcursor: pointer;\n\t\tz-index: 5;\n\t\tbox-sizing: border-box;\n\t\tcolor: white;\n\t")
        }], ["timerTrigger", "\n\t\tmargin-bottom: auto;\n\t"]]);
        var Sn = Object(p.memo)((function () {
            var t = Object(i.c)().wording, e = function (t) {
                var e = Object(v.c)(), n = Object(v.i)();
                return Object(p.useCallback)((function () {
                    e.startTimer(n);
                    var r = e.getSubjectData(n);
                    r && r.youtubeid && q.d.info(t.module.timer.playcountdown, {duration: 2e3})
                }), [e, n])
            }(t), n = Nn();
            return m.a.createElement("div", {
                className: n.trigger,
                "aria-label": "subject timer trigger",
                onClick: e
            }, m.a.createElement("div", {className: n.timerTrigger}, m.a.createElement(q.b, {
                icon: q.u,
                size: 2
            })), m.a.createElement(q.h, {variant: "h5", color: "text.white"}, t.module.timer.click_to_answer))
        })), Cn = function (t) {
            return t.timer
        };
        var An = Object(p.memo)((function () {
            return function () {
                var t = Object(v.i)(), e = Object(v.k)(t, Cn), n = Object(p.useRef)(), r = Object(i.c)().wording;
                Object(p.useEffect)((function () {
                    if (0 === e && n.current) n.current.destroy(), n.current = void 0; else if (e > 0) {
                        var t = Object(Qt.t)(r.module.timer.countdown, {sec: e});
                        n.current ? n.current.update(t) : n.current = q.d.info(t)
                    }
                }), [e])
            }(), null
        }));
        var In = Object(p.memo)((function () {
                var t = function () {
                    var t = Object(v.i)();
                    return Object(v.k)(t, kn)
                }();
                return "OVERLAY" === t ? m.a.createElement(Sn, null) : "COUNTDOWN" === t ? m.a.createElement(An, null) : null
            })), Dn = Object(N.a)("\n\tmax-width: 100%;\n\toverflow-wrap: break-word;\n\tword-break: break-word;\n"),
            _n = Object(N.a)("\n\tdisplay: flex;\n"), Tn = Object(N.a)("\n\tmin-width: 0;\n"),
            Ln = "\n\tcontent: '*';\n\tdisplay: inline-block;\n\tposition: relative;\n\tvertical-align: top;\n\ttop: 3px;\n\tleft: 8px;\n\tfont-size: 16px;\n\tline-height: 16px;\t\n",
            Pn = Object(q.y)([["requiredStar", function (t, e) {
                var n = Object(d.a)(e, 2), r = (n[0], n[1]);
                return "\n\t\t".concat(!1 === r ? "\n\t\t\t&::after {\n\t\t\t\t".concat(Ln, "\n\t\t\t\tcolor: ").concat(t.color.semantic.warning, ";\n\t\t\t}\n\t\t") : "\n\t\t\t& > p::after {\n\t\t\t\t".concat(Ln, "\n\t\t\t\tcolor: ").concat(t.color.semantic.warning, ";\n\t\t\t}\n\t\t"), "\n\t")
            }]]), Rn = function (t) {
                return t.text
            }, Mn = function (t) {
                return t.survey.color.black
            }, Fn = Object(p.memo)((function (t) {
                var e = t.children, n = Object(v.c)(), r = Object(v.i)(), a = Object(v.k)(r, Rn), c = n.getSubjectData(r),
                    o = "undefined" === typeof c ? {vn: void 0, required: void 0} : c, i = o.vn, u = o.required,
                    s = Boolean(i), l = !!a.includes("</p>"), d = Pn([s, l]);
                return m.a.createElement(q.h, {
                    className: Dn,
                    variant: "h5",
                    color: Mn,
                    gutterBottom: !0
                }, m.a.createElement("div", {className: _n}, m.a.createElement(D.m, {
                    className: Object(N.b)(Tn, u && d.requiredStar),
                    html: a
                })), e)
            })), Un = Object(q.y)([["unit", function (t) {
                return "\n      :lang(ar){\n        transform: scaleX(-1) translateY(-50%);\n      }\n      position: absolute;\n      right: 0px;\n      top: 50%;\n      transform: translateY(-50%);\n      border-radius: 13px;\n      border: 1px solid ".concat(t.survey.option.default.border.color, ";\n      padding: 2px 8px;\n      color: ").concat(t.color.primary.default, ";\n      font-size: 14px;\n    ")
            }]]), zn = Object(p.memo)((function (t) {
                var e = t.unittxt, n = Un();
                return m.a.createElement("div", {className: n.unit}, e)
            })), Gn = Object(q.y)([["titleContainer", function (t, e) {
                var n = Object(d.a)(e, 1)[0];
                return ["\t\n\t\t\t:lang(ar) {\n\t\t\t\ttransform: scaleX(-1);\n\t\t\t\tdirection: rtl;\n\t\t\t}\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\tmargin-left: 0;\n\t\t\tfloat: left;\n\t\t", ("QUOTE" === n || "STATEMENT" === n) && "\n\t\t\tfloat: none;\n\t\t\twidth: 100%;\n\n\t\t\t@media (max-width: 720px) {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t", "QUOTE" === n && "\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: center;\n\t\t"]
            }]]), Bn = function (t) {
                var e = t.children, n = Object(v.c)(), r = Object(v.i)(), a = Object(p.useMemo)((function () {
                    var t = n.getSubjectData(r);
                    return "undefined" === typeof t ? void 0 : t.type
                }), [n, r]), c = Gn([a]);
                return m.a.createElement("div", {"aria-label": "subject title container", className: c.titleContainer}, e)
            }, Yn = Object(q.y)([["vn", function (t, e) {
                var n = Object(d.a)(e, 1)[0];
                return "\n\t\tmargin-right: ".concat(n ? "2%" : "0", ";\n\t\tfloat: left;\n\n\t\t@media (max-width: 720px) {\n\t\t\tmargin-right: ").concat(n ? "2%" : "0", ";\n\t\t}\n\t")
            }], ["vnInner", function (t, e) {
                var n = Object(d.a)(e, 1)[0];
                return "\n\t\t\tmin-height: 1px;\n\t\t\tline-height: 28px;\n\t\t\tfont-size: 16px;\n\t\t\ttext-align: left;\n\t\t\tposition: relative;\n\t\t\twidth: ".concat(n ? 8.5 : 0, "px;\n\t\t\tfloat: left;\n\n\t\t\t@media (max-width: 720px) {\n\t\t\t\tmin-width: 0px;\n\t\t\t}\n\t")
            }], ["transform", "\n\t\tposition: absolute;\n\t\tright: 0;\n\t\t:lang(ar){\n\t\t\ttransform: scaleX(-1);\n\t\t\tdirection: rtl;\n\t\t}\n\t  "]]),
            Hn = function (t) {
                return t.survey.color.black
            };
        var Vn = Object(p.memo)((function () {
            var t = Object(v.c)(), e = Object(v.i)(), n = t.getSubjectData(e),
                r = ("undefined" === typeof n ? {vn: void 0} : n).vn, a = Boolean(r), c = Yn([a]);
            return m.a.createElement("div", {
                className: c.vn,
                "aria-label": "subject visual number",
                "data-vn": r
            }, m.a.createElement("div", {className: c.vnInner}, a && m.a.createElement(q.h, {
                className: c.transform,
                variant: "div",
                color: Hn,
                weight: "bold"
            }, r)))
        })), Wn = n(53), Jn = n.n(Wn);

        function Zn() {
            var t = Object(k.a)(["\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n\n  & > p {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.6;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  & > svg {\n    margin-right: 8px;\n    flex-shrink: 0;\n  }\n"]);
            return Zn = function () {
                return t
            }, t
        }

        var qn = Object(N.a)(Zn());

        function Xn() {
            var t = Object(k.a)(["\n            color: #454545;\n          "]);
            return Xn = function () {
                return t
            }, t
        }

        function Qn() {
            var t = Object(k.a)(["\n            color: #eb1362;\n          "]);
            return Qn = function () {
                return t
            }, t
        }

        function Kn() {
            var t = Object(k.a)(["\n            color: #eb1362;\n          "]);
            return Kn = function () {
                return t
            }, t
        }

        function $n() {
            var t = Object(k.a)(["\n            color: #454545;\n          "]);
            return $n = function () {
                return t
            }, t
        }

        function tr() {
            var t = Object(k.a)(["\n            color: #3dba90;\n          "]);
            return tr = function () {
                return t
            }, t
        }

        var er = Object(p.memo)((function (t) {
            var e = t.isLoading, n = t.message, r = null, a = Object(i.c)().wording;
            return e ? m.a.createElement("div", {className: qn}, m.a.createElement(q.b, {
                icon: q.z,
                spin: !0,
                className: Object(N.a)(tr())
            }), m.a.createElement(q.h, {
                variant: "p",
                className: Object(N.a)($n())
            }, Jn()(a, "subject.text.status.api_loading", ""))) : ("error" === n.type && (r = m.a.createElement(m.a.Fragment, null, m.a.createElement(q.b, {
                icon: q.F,
                className: Object(N.a)(Kn())
            }), m.a.createElement(q.h, {
                variant: "p",
                className: Object(N.a)(Qn())
            }, n.value))), "success" === n.type && (r = m.a.createElement(m.a.Fragment, null, m.a.createElement(q.h, {
                variant: "p",
                className: Object(N.a)(Xn())
            }, n.value))), m.a.createElement("div", {className: qn}, r))
        }));

        function nr() {
            var t = Object(k.a)(["\n              display: none;\n            "]);
            return nr = function () {
                return t
            }, t
        }

        function rr() {
            var t = Object(k.a)(["\n            ", "\n          "]);
            return rr = function () {
                return t
            }, t
        }

        function ar() {
            var t = Object(k.a)(["\n                border: 1px solid #3dba90;\n                border-radius: 4px;\n                box-shadow: none;\n              "]);
            return ar = function () {
                return t
            }, t
        }

        function cr() {
            var t = Object(k.a)(["\n                li:hover:not(.Mui-selected) {\n                  color: #454545;\n                  background-color: #e6f7f1;\n                }\n              "]);
            return cr = function () {
                return t
            }, t
        }

        function or() {
            var t = Object(k.a)(["\n        color: #333333;\n        margin-bottom: 8px;\n      "]);
            return or = function () {
                return t
            }, t
        }

        var ir = q.i.Select, ur = q.i.Typography, sr = q.i.MenuItem, lr = q.i.ThemeProvider, dr = function (t) {
            var e = t.title, n = void 0 === e ? "" : e;
            return n ? m.a.createElement(ur, {variant: "subtitle1", className: Object(N.a)(or())}, n) : null
        }, pr = function (t) {
            var e = t.placeholder, n = void 0 === e ? "" : e, r = t.value, a = void 0 === r ? "" : r,
                c = t.handleChange, o = t.disabled, i = t.title, u = void 0 === i ? "" : i, s = t.options,
                l = void 0 === s ? [] : s, d = m.a.useRef(null);
            return m.a.createElement(lr, null, m.a.createElement("div", null, m.a.createElement(dr, {title: u}), m.a.createElement(ir, {
                ref: d,
                fullWidth: !0,
                displayEmpty: !0,
                onChange: function (t) {
                    c(t.target.value)
                },
                value: a,
                variant: "outlined",
                onTouchStart: function () {
                    d.current && d.current.click()
                },
                MenuProps: {
                    anchorOrigin: {horizontal: "left", vertical: "bottom"},
                    classes: {list: Object(N.a)(cr()), paper: Object(N.a)(ar())},
                    getContentAnchorEl: null,
                    transformOrigin: {horizontal: 0, vertical: -8}
                },
                disabled: o,
                className: Object(N.a)(rr(), !a && "\n            & .Mui-disabled {\n              color: #C5C5C5;\n              border-color: #E3E3E3;\n            }\n          ")
            }, m.a.createElement(sr, {
                className: Object(N.a)(nr()),
                value: ""
            }, n), 0 !== l.length && l.map((function (t) {
                return m.a.createElement(sr, {key: t, value: t}, t)
            })))))
        }, mr = Object(Ue.createUseInputRefAndSetAnswer)((function (t, e) {
            t.value = e || ""
        }), (function (t) {
            var e = t.value;
            return "url" === (t.getAttribute("type") || "text") && e && !/^(https|http|ftp):\/\/\w*/.test(e) && (e = "https://".concat(e)), e ? [e] : []
        }));
        var fr = Object(p.memo)((function () {
            var t = function () {
                    var t = Object(v.c)(), e = Object(v.i)(), n = Object(p.useMemo)((function () {
                            var n = t.getSubjectData(e);
                            return "undefined" === typeof n || "" === n.keyboardType || "file" === n.keyboardType || "api" === n.keyboardType ? "text" : n.keyboardType
                        }), [t, e]), r = Object(i.c)().wording.message.placeholder.input[n] || "", a = mr(t, e), c = a.inputRef,
                        o = a.onChange, u = a.setAnswer, s = a.isLoading, l = a.message,
                        d = Object(Ue.useHandleAnswerFinish)(t, e), m = Object(Z.i)(Object(p.useCallback)(function () {
                            var t = Object(J.a)(W.a.mark((function t(e) {
                                return W.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return e.preventDefault(), t.next = 3, u();
                                        case 3:
                                            d();
                                        case 4:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }(), []));
                    return {
                        ref: c,
                        placeholder: r,
                        type: n,
                        onChange: o,
                        onBlur: u,
                        onKeyDown: m,
                        "data-subject-answer": e,
                        isLoading: s,
                        message: l
                    }
                }(), e = t.ref, n = t.placeholder, r = t.type, a = t.onChange, c = t.onBlur, o = t.onKeyDown,
                u = t["data-subject-answer"], s = t.isLoading, l = t.message, d = {"data-subject-answer": u},
                f = Object(i.c)(), b = f.surveyHash === f.reissueInvoiceSurveyHash;
            return Object(p.useEffect)((function () {
                b && e && e.current && e.current.value.length > 0 && a()
            }), []), m.a.createElement(m.a.Fragment, null, m.a.createElement(un, Object.assign({
                ref: e,
                placeholder: n,
                type: r,
                onChange: a,
                onBlur: c,
                onKeyDown: o
            }, d)), m.a.createElement(er, {isLoading: s, message: l}))
        }));
        var br = Object(p.memo)((function () {
            return Object(Ue.useAutoFocusOnDidMount)(), m.a.createElement(m.a.Fragment, null, m.a.createElement(In, null), m.a.createElement(Vn, null), m.a.createElement(De, null, m.a.createElement(Bn, null, m.a.createElement(Fn, null)), m.a.createElement(Ae, null, m.a.createElement(Le, null), m.a.createElement(He, null, m.a.createElement(Be, null)), m.a.createElement(Fe, null), m.a.createElement(Se, null, m.a.createElement(fr, null)))))
        })), vr = Object(Ue.createUseInputRefAndSetAnswer)((function (t, e) {
            t.value = e || ""
        }), (function (t) {
            var e = t.value;
            return e ? [e] : []
        }));
        var gr = Object(p.memo)((function () {
            var t = function () {
                    var t = Object(v.c)(), e = Object(v.i)(), n = Object(i.c)().wording,
                        r = Object(p.useMemo)((function () {
                            var n = t.getSubjectData(e);
                            return "undefined" !== typeof n && n.attr || "text"
                        }), [t, e]), a = n.message.placeholder.input[r], c = vr(t, e), o = c.inputRef, u = c.onChange,
                        s = c.setAnswer, l = c.isLoading, d = c.message;
                    return {
                        inputRef: o,
                        placeholder: a,
                        onChange: u,
                        onBlur: s,
                        "data-subject-answer": e,
                        isLoading: l,
                        message: d
                    }
                }(), e = t.inputRef, n = t.placeholder, r = t.onChange, a = t.onBlur, c = t.isLoading, o = t.message,
                u = {"data-subject-answer": t["data-subject-answer"]};
            return m.a.createElement(m.a.Fragment, null, m.a.createElement(ln, Object.assign({
                minRows: 4,
                inputRef: e,
                placeholder: n,
                onChange: r,
                onBlur: a
            }, u)), m.a.createElement(er, {isLoading: c, message: o}))
        }));
        var hr = Object(p.memo)((function () {
            return Object(Ue.useAutoFocusOnDidMount)(), m.a.createElement(m.a.Fragment, null, m.a.createElement(In, null), m.a.createElement(Vn, null), m.a.createElement(De, null, m.a.createElement(Bn, null, m.a.createElement(Fn, null)), m.a.createElement(Ae, null, m.a.createElement(Le, null), m.a.createElement(He, null, m.a.createElement(Be, null)), m.a.createElement(Fe, null), m.a.createElement(Se, null, m.a.createElement(gr, null)))))
        })), Or = function () {
            return Object(i.c)().wording.message.placeholder.input.number
        }, yr = Object(Ue.createUseInputRefAndSetAnswer)((function (t, e) {
            void 0 === e ? t.value = "" : isNaN(e) || (t.value = "".concat(e))
        }), (function (t) {
            return "" === t.value || "+" === t.value || ".-" === t.value || "." === t.value ? [] : [parseFloat(t.value)]
        }));
        var jr = Object(p.memo)((function () {
            var t = function () {
                    var t = Object(v.c)(), e = Object(v.i)(), n = Object(p.useMemo)((function () {
                            var n = t.getSubjectData(e),
                                r = "undefined" === typeof n ? {lowerbounds: void 0, upperbounds: void 0} : n;
                            return {min: r.lowerbounds, max: r.upperbounds}
                        }), [t, e]), r = n.min, a = n.max, c = Object(p.useMemo)((function () {
                            var n = t.getSubjectAnswers(e);
                            return {defaultValue: ("undefined" === typeof n ? [void 0] : n.payload)[0]}
                        }), [t, e]).defaultValue, o = Or(), i = yr(t, e), u = i.inputRef, s = i.onChange, l = i.setAnswer,
                        d = Object(Ue.useHandleAnswerFinish)(t, e), m = Object(Z.i)(Object(p.useCallback)(function () {
                            var t = Object(J.a)(W.a.mark((function t(e) {
                                return W.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return e.preventDefault(), t.next = 3, l();
                                        case 3:
                                            d();
                                        case 4:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }(), []));
                    return {
                        ref: u, min: r, max: a, placeholder: o, onChange: s, onBlur: function () {
                            var t = Object(J.a)(W.a.mark((function t() {
                                return W.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, l();
                                        case 2:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function () {
                                return t.apply(this, arguments)
                            }
                        }(), onFocus: function () {
                        }, onMouseLeave: function (t) {
                        }, onMouseOver: function () {
                        }, onKeyDown: m, "data-subject-answer": e, defaultValue: c
                    }
                }(), e = Object(v.c)(), n = Object(v.i)(), r = e.getSubjectData(n),
                a = "undefined" === typeof r ? null : r.unittxt;
            return m.a.createElement(m.a.Fragment, null, m.a.createElement(dn, t), a && m.a.createElement(zn, {unittxt: a}))
        }));
        var xr = Object(p.memo)((function () {
            return Object(Ue.useAutoFocusOnDidMount)(), m.a.createElement(m.a.Fragment, null, m.a.createElement(In, null), m.a.createElement(Vn, null), m.a.createElement(De, null, m.a.createElement(Bn, null, m.a.createElement(Fn, null)), m.a.createElement(Ae, null, m.a.createElement(Le, null), m.a.createElement(Ye, null), m.a.createElement(He, null, m.a.createElement(Be, null)), m.a.createElement(Fe, null), m.a.createElement(Se, null, m.a.createElement(jr, null)))))
        }));

        function wr() {
            var t = Object(v.c)(), e = Object(v.i)(), n = function (t, e) {
                return Object(p.useMemo)((function () {
                    var n = t.getSubjectData(e), r = "undefined" === typeof n ? {
                        lowerbounds: void 0,
                        upperbounds: void 0,
                        increasebounds: void 0,
                        unittxt: void 0
                    } : n;
                    return {min: r.lowerbounds, max: r.upperbounds, step: r.increasebounds || 1, unit: r.unittxt || ""}
                }), [t, e])
            }(t, e), r = n.min, a = n.max, c = n.step, o = n.unit, i = function (t, e) {
                var n = Object(p.useCallback)((function (t) {
                    return t.payload[0] || 0 === t.payload[0] ? t.payload[0] : e
                }), [e]), r = Object(v.h)(t, n), a = Object(p.useState)(r), c = Object(d.a)(a, 2), o = c[0], i = c[1];
                return Object(p.useEffect)((function () {
                    o !== r && i(r)
                }), [r]), [o, i]
            }(e, r), u = Object(d.a)(i, 2), s = u[0], l = u[1], m = function (t) {
                var e = Object(v.h)(t, (function (t) {
                    return t.payload[0]
                }));
                return 0 === e || Boolean(e)
            }(e), f = Object(p.useCallback)((function (n) {
                l(n), t.setAnswer(e, {payload: [n]})
            }), [t, e]);
            return {min: r, max: a, step: c, unit: o, value: s, onChange: l, setAnswer: f, haveSetAnswerOnce: m}
        }

        var Er = "\n\tdisplay: inline-block;\n\tposition: absolute;\n\ttext-align: center;\n\tword-break: keep-all;\n\tcursor: pointer;\n\tuser-select: none;\n\ttransform: translateX(-50%);\n",
            kr = Object(q.y)([["info", "\n\t\t:lang(ar){\n\t\t\ttransform: scaleX(-1);\n\t\t\tdirection: rtl;\n\t\t}\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t"], ["unit", "\n\t\tmargin-left: auto;\n\t"], ["range", function (t) {
                return "\n\t\t:lang(ar){\n\t\t\ttransform: scaleX(-1);\n\t\t}\n\t\tposition: absolute;\n\t\ttop: 70px;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\tcolor: ".concat(t.survey.color.gray, "\n\t")
            }], ["min", "\n\t\t".concat(Er, "\n\t\tleft: ").concat(12, "px;\n\t")], ["max", "\n\t\t".concat(Er, "\n\t\tleft: calc(100% - ").concat(12, "px);\n\t")], ["transform", "\n\t\t:lang(ar){\n\t\t\ttransform: scaleX(-1);\n\t\t}\n\t  "]]);
        var Nr = Object(p.memo)((function () {
            var t = wr(), e = t.min, n = t.max, r = t.step, a = t.unit, c = t.value, o = t.onChange, i = t.setAnswer,
                u = t.haveSetAnswerOnce, s = c !== e, l = kr(), d = Object(p.useMemo)((function () {
                    return a && m.a.createElement(q.g, {
                        className: l.unit,
                        color: "primary",
                        variant: "outlined",
                        "data-qa": "unit"
                    }, a)
                }), [a]);
            return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {className: l.info}, m.a.createElement(q.h, {
                variant: "h6",
                color: "primary",
                "data-qa": "subject-type-DIGITSLIDE"
            }, u || s ? c : "?"), d), m.a.createElement(q.c, {
                className: l.transform,
                value: c,
                min: e,
                max: n,
                step: r,
                onChange: o,
                onAfterChange: i,
                onClickChange: i
            }), m.a.createElement("div", {className: l.range}, m.a.createElement("span", {
                className: l.min,
                "data-qa": "min"
            }, e), m.a.createElement("span", {className: l.max, "data-qa": "max"}, n)))
        }));
        var Sr = Object(p.memo)((function () {
                return m.a.createElement(m.a.Fragment, null, m.a.createElement(In, null), m.a.createElement(Vn, null), m.a.createElement(De, null, m.a.createElement(Bn, null, m.a.createElement(Fn, null)), m.a.createElement(Ae, null, m.a.createElement(Le, null), m.a.createElement(He, null, m.a.createElement(Be, null)), m.a.createElement(Fe, null), m.a.createElement(Se, null, m.a.createElement(Nr, null)))))
            })),
            Cr = Object(N.d)("\n\t0% {\n\t\t:not(lang(ar)){\n\t\t\ttransform: scale(1);\n\t\t}\n\t\t:lang(ar){\n\t\t\ttransform: scaleX(-1);\n\t\t}\n\t}\n\n\t15% {\n\t\t:not(lang(ar)){\n\t\t\ttransform: scale(1.2);\n\t\t}\n\t\t:lang(ar){\n\t\t\ttransform: scaleX(-1.2);\n\t\t}\n\t}\n\n\t80% {\n\t\t:not(lang(ar)){\n\t\t\ttransform: scale(0.9);\n\t\t}\n\t\t:lang(ar){\n\t\t\ttransform: scaleX(-0.9);\n\t\t}\n\t}\n\n\t100% {\n\t\t:not(lang(ar)){\n\t\t\ttransform: scale(1);\n\t\t}\t\t\n\t\t:lang(ar){\n\t\t\ttransform: scaleX(-1);\n\t}\n"),
            Ar = Object(q.y)([["ratingIcon", function (t, e) {
                var n = Object(d.a)(e, 2), r = n[0], a = n[1];
                return ["\n\t\t\t:lang(ar){\n\t\t\t\ttransform: scaleX(-1);\n\t\t\t}\n\t\t\tdisplay: inline-block;\n\t\t\tposition: relative;\n\t\t\tcolor: ".concat(r ? t.color.primary.default : t.survey.control.default, ";\n\t\t\theight: 100%;\n\t\t\tmax-width: 40px;\n\t\t\tmax-height: 40px;\n\t\t\tcursor: pointer;\n\t\t\ttext-align: center;\n\t\t\tline-height: 1;\n\t\t\ttransition: color 0.2s;\n\t\t"), r && "\n\t\t\t-webkit-text-fill-color: transparent;\n\t\t\t-webkit-background-clip: text;\n\t\t\tbackground-clip: text;\n\t\t", r && a && "\t\n\t\t\tanimation: ".concat(Cr, " 0.4s linear 1;\n\t\t")]
            }]]), Ir = {HEART: [q.v, q.w], STAR: [q.B, q.C], THUMB: [q.D, q.E], TICK: [q.n, q.o]}, Dr = function (t) {
                var e = t.level, n = t.shape, r = t.setValue, a = t.filled, c = t.active, o = t.last, i = t.style,
                    u = Ir[n], s = Object(p.useRef)(null), l = Object(Z.d)(s), d = Ar([c, o]);
                return m.a.createElement(q.b, {
                    ref: s,
                    className: d.ratingIcon,
                    icon: a || l ? u[0] : u[1],
                    onClick: function () {
                        return r(e)
                    },
                    style: i
                })
            };
        Dr.defaultProps = {filled: !1, active: !1, last: !1};
        var _r = Object(p.memo)(Dr);
        var Tr = function (t) {
            return t.payload[0] || 0
        };

        function Lr() {
            var t = Object(v.c)(), e = Object(v.i)(), n = function (t, e) {
                return Object(p.useMemo)((function () {
                    var n = t.getSubjectData(e),
                        r = "undefined" === typeof n ? {upperbounds: void 0, extras: void 0} : n;
                    return {count: r.upperbounds, shape: r.extras && r.extras.shape || ""}
                }), [t, e])
            }(t, e), r = n.count, a = n.shape, c = function (t) {
                return Object(p.useMemo)((function () {
                    if (1 === t) return {width: "100%"};
                    var e = Math.floor(100 / t), n = 3;
                    return 6 <= t && t <= 8 ? n = 2 : 9 !== t && 10 !== t || (n = 1), {
                        width: "".concat(e - n, "%"),
                        marginRight: "".concat(n, "%")
                    }
                }), [t])
            }(r), o = function (t, e) {
                var n = Object(v.h)(e, Tr), r = Object(Z.g)(n), a = Object(p.useCallback)((function (n) {
                    var a = r.current !== n && n ? [n] : [];
                    t.setAnswer(e, {payload: a})
                }), []);
                return {valueRef: r, setValue: a}
            }(t, e), i = o.valueRef, u = o.setValue, s = function (t) {
                var e = t.count, n = t.shape;
                return Object(p.useMemo)((function () {
                    return "number" === typeof e && n ? Array.from({length: e}).map((function (t, e) {
                        return e + 1
                    })) : []
                }), [e, n])
            }({count: r, shape: a}), l = function (t, e, n) {
                var r = Object(p.useState)(n.current), a = Object(d.a)(r, 2), c = a[0], o = a[1],
                    i = Object(p.useRef)(!1), u = Object(Ue.useHandleAnswerFinish)(t, e),
                    s = Object(p.useMemo)((function () {
                        return Object(ne.a)(500)(u)
                    }), [u]);
                return Object(p.useLayoutEffect)((function () {
                    n.current !== c ? setTimeout((function () {
                        return o(c + (n.current > c ? 1 : -1))
                    }), 20) : i.current && s(0 === n.current), i.current = !0
                })), c
            }(t, e, i);
            return s.map((function (t) {
                return {level: t, shape: a, setValue: u, filled: l >= t, active: l >= t, last: l === t, style: c}
            }))
        }

        var Pr = Object(p.memo)((function () {
            var t = Lr();
            return m.a.createElement("div", {"aria-label": "rating bar answer"}, t.map((function (t) {
                return m.a.createElement(_r, Object.assign({key: t.level}, t))
            })))
        }));
        var Rr = Object(p.memo)((function () {
            return m.a.createElement(m.a.Fragment, null, m.a.createElement(In, null), m.a.createElement(Vn, null), m.a.createElement(De, null, m.a.createElement(Bn, null, m.a.createElement(Fn, null)), m.a.createElement(Ae, null, m.a.createElement(Le, null), m.a.createElement(He, null, m.a.createElement(Be, null)), m.a.createElement(Fe, null), m.a.createElement(Se, null, m.a.createElement(Pr, null)))))
        })), Mr = n(537), Fr = n.n(Mr), Ur = function (t) {
            return new Promise((function (e, n) {
                var r = new FileReader;
                r.readAsArrayBuffer(t), r.onload = function () {
                    Fr()(r.result) ? e(r.result) : n()
                }, r.onerror = function () {
                    r.abort(), n()
                }
            }))
        }, zr = function (t) {
            return new Promise((function (e, n) {
                var r = new FileReader;
                r.readAsText(t), r.onload = function () {
                    "string" === typeof r.result ? e(r.result) : n()
                }, r.onerror = function () {
                    r.abort(), n()
                }
            }))
        }, Gr = n(538), Br = n.n(Gr), Yr = n(539), Hr = n.n(Yr), Vr = function () {
            var t = Object(J.a)(W.a.mark((function t(e) {
                var n, r, a;
                return W.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, zr(e);
                        case 3:
                            if (n = t.sent, !Hr()(n)) {
                                t.next = 6;
                                break
                            }
                            return t.abrupt("return", "image/svg+xml");
                        case 6:
                            return t.next = 8, Ur(e);
                        case 8:
                            if (r = t.sent, !(a = Br()(new Uint8Array(r)))) {
                                t.next = 12;
                                break
                            }
                            return t.abrupt("return", a.mime);
                        case 12:
                            return t.abrupt("return", e.type);
                        case 15:
                            throw t.prev = 15, t.t0 = t.catch(0), t.t0;
                        case 18:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 15]])
            })));
            return function (e) {
                return t.apply(this, arguments)
            }
        }(), Wr = {
            upload: function (t, e, n) {
                return new Promise(function () {
                    var r = Object(J.a)(W.a.mark((function r(a, c) {
                        var o, i, u, s, l;
                        return W.a.wrap((function (r) {
                            for (; ;) switch (r.prev = r.next) {
                                case 0:
                                    return r.prev = 0, r.next = 3, Promise.all([Vr(t), Object(X.y)([e])]);
                                case 3:
                                    return o = r.sent, i = Object(d.a)(o, 2), u = i[0], s = i[1], l = s.urls[0], r.next = 10, Object(X.E)(t, u, l, n);
                                case 10:
                                    a(), r.next = 16;
                                    break;
                                case 13:
                                    r.prev = 13, r.t0 = r.catch(0), c(r.t0);
                                case 16:
                                case"end":
                                    return r.stop()
                            }
                        }), r, null, [[0, 13]])
                    })));
                    return function (t, e) {
                        return r.apply(this, arguments)
                    }
                }())
            }
        };

        function Jr(t) {
            var e = t.lastIndexOf("."), n = (new Date).getTime();
            return e >= 0 ? "".concat(t.substring(0, e), "_").concat(n).concat(t.substring(e)) : "".concat(t, "_").concat(n)
        }

        var Zr = function (t) {
            return t.fileuploadDisable
        };
        var qr = function (t) {
            return t.payload[0]
        };

        function Xr() {
            var t = Object(v.c)(), e = Object(v.i)(), n = Object(p.useRef)(!1), a = Object(p.useState)(0),
                c = Object(d.a)(a, 2), o = c[0], u = c[1], s = function (t, e, n) {
                    var r = Object(d.a)(n, 2), a = r[0], c = r[1], o = Object(v.h)(t, qr);
                    return Object(p.useEffect)((function () {
                        o && 100 !== a && !e.current ? c(100) : o || 0 === a || c(0)
                    }), [o]), o
                }(e, n, [o, u]), l = function (t, e, n, a) {
                    var c = Object(i.c)().wording, o = y.b.useFileUploadLockMethods(), u = o.lock, s = o.unlock;
                    return Object(p.useCallback)(function () {
                        var o = Object(J.a)(W.a.mark((function o(i) {
                            var l, d, p, m, f, b;
                            return W.a.wrap((function (o) {
                                for (; ;) switch (o.prev = o.next) {
                                    case 0:
                                        if (l = i.target.files && i.target.files[0]) {
                                            o.next = 3;
                                            break
                                        }
                                        return o.abrupt("return");
                                    case 3:
                                        if (d = Jr(l.name)) {
                                            o.next = 6;
                                            break
                                        }
                                        return o.abrupt("return");
                                    case 6:
                                        if (p = {
                                            payload: [d],
                                            meta: {file: l}
                                        }, m = t.getSubjectData(e), !(f = Object(r.d)(p, "undefined" === typeof m ? void 0 : m))) {
                                            o.next = 13;
                                            break
                                        }
                                        return (b = Ue.errorMap[f.type]) && q.d.error(b(c, f), {duration: 2e3}), o.abrupt("return");
                                    case 13:
                                        return a(0), n.current = !0, o.prev = 15, u(), o.next = 19, Wr.upload(l, d, a);
                                    case 19:
                                        return o.next = 21, t.setAnswer(e, p);
                                    case 21:
                                        s(), o.next = 27;
                                        break;
                                    case 24:
                                        o.prev = 24, o.t0 = o.catch(15), q.d.error(c.subject.fileupload.status.upload_failed, {duration: 2e3});
                                    case 27:
                                        n.current = !1;
                                    case 28:
                                    case"end":
                                        return o.stop()
                                }
                            }), o, null, [[15, 24]])
                        })));
                        return function (t) {
                            return o.apply(this, arguments)
                        }
                    }(), [t, e])
                }(t, e, n, u);
            return {
                fileName: s, percentage: o, onChange: l, onRemove: function (t, e, n) {
                    return Object(p.useCallback)((function () {
                        n(0), t.setAnswer(e, {payload: []})
                    }), [t, e])
                }(t, e, u)
            }
        }

        var Qr = Object(q.y)([["trigger", "\n\t\tposition: relative;\n\t\tmin-width: 100px;\n\t"], ["uploader", "\n\t\tposition: absolute;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n    opacity: 0;\n    top: 0;\n    left: 0;\n\t"]]);

        function Kr(t) {
            var e = t.onChange, n = Object(v.c)(), r = Object(v.i)(), a = Object(p.useMemo)((function () {
                var t = n.getSubjectData(r),
                    e = "undefined" === typeof t || "undefined" === typeof t.acceptType ? [] : t.acceptType;
                return 0 !== e.length ? e.join(",") : void 0
            }), [n, r]), c = Object(i.c)().wording, o = Qr(), u = Object(D.o)(["primary", "medium"]);
            return m.a.createElement("div", {className: Object(N.b)(u.button, o.trigger)}, m.a.createElement("input", {
                className: o.uploader,
                type: "file",
                accept: a,
                onChange: e,
                onClick: function (t) {
                    t.currentTarget.value && (t.currentTarget.value = "")
                }
            }), m.a.createElement("span", null, c.subject.fileupload.uploader.button))
        }

        var $r = Object(q.y)([["file", function (t) {
            return "\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tposition: relative;\n\t\tmax-width: 200px;\n\t\twidth: auto;\n\t\theight: 36px;\n\t\tfont-size: 14px;\n    background: ".concat(t.color.text.F, ";\n\t\tborder: 1px solid ").concat(t.color.text.HB, ";\n\t\tborder-radius: 3px;\n\t\tpadding: 6px 8px;\n    box-shadow: ").concat(t.color.text.B, " 0 1px 3px;\n\t\tbox-sizing: border-box;\n\t")
        }], ["fileName", "\n\t\tmargin: 0 5px;\n\t"], ["remove", function (t) {
            return "\n\t\tcolor:\t".concat(t.color.text.B2, ";\n\t\tcursor: pointer;\n\n\t\t&:hover {\n\t\t\tcolor: inherit;\n\t\t}\n\t")
        }]]);

        function ta(t) {
            var e = t.fileName, n = t.onRemove, r = $r();
            return e ? m.a.createElement("div", {className: r.file}, m.a.createElement(q.b, {icon: q.t}), m.a.createElement(q.h, {
                className: r.fileName,
                variant: "span",
                noWrap: !0
            }, e), m.a.createElement("span", {
                className: r.remove,
                onClick: n
            }, m.a.createElement(q.b, {icon: q.G}))) : null
        }

        var ea = Object(q.y)([["fileUploadProgress", "\n\t\tmax-width: 320px;\n\t"]]);

        function na() {
            var t = Xr(), e = t.fileName, n = t.percentage, r = t.onChange, a = t.onRemove, c = ea();
            return 0 === n ? m.a.createElement(Kr, {onChange: r}) : 100 === n ? m.a.createElement(ta, {
                fileName: e,
                onRemove: a
            }) : m.a.createElement("div", {className: c.fileUploadProgress}, m.a.createElement(D.l, {percentage: n}))
        }

        var ra = Object(p.memo)((function () {
            return function () {
                var t = Object(v.i)();
                return !Object(v.k)(t, Zr)
            }() ? m.a.createElement(na, null) : null
        }));
        var aa = Object(p.memo)((function () {
            return m.a.createElement(m.a.Fragment, null, m.a.createElement(In, null), m.a.createElement(Vn, null), m.a.createElement(De, null, m.a.createElement(Bn, null, m.a.createElement(Fn, null)), m.a.createElement(Ae, null, m.a.createElement(Le, null), m.a.createElement(Ye, null), m.a.createElement(He, null, m.a.createElement(Be, null)), m.a.createElement(Fe, null), m.a.createElement(Se, null, m.a.createElement(ra, null)))))
        })), ca = Object(q.y)([["quoteIcon", function (t) {
            return "\n\t\tcolor: ".concat(t.survey.quote, ";\n\t\twidth: 50px;\n\t\theight: 50px;\n\t\tmargin-bottom: 5px;\n\t")
        }]]);
        var oa = Object(p.memo)((function () {
            var t = ca();
            return m.a.createElement("div", {className: t.quoteIcon}, m.a.createElement("svg", {
                viewBox: "0 0 40 40",
                fill: "currentColor"
            }, m.a.createElement("path", {d: "M16.156,10.448H8.922a1.808,1.808,0,0,0-1.809,1.808v7.613a1.806,1.806,0,0,0,1.809,1.807h6.844v1.448h0a4.232,4.232,0,0,1-4.227,4.228v2.2a6.435,6.435,0,0,0,6.428-6.428V12.256A1.808,1.808,0,0,0,16.156,10.448Z"}), m.a.createElement("path", {d: "M31.078,10.448H23.844a1.808,1.808,0,0,0-1.809,1.808v7.613a1.806,1.806,0,0,0,1.809,1.807h6.844v1.448h0a4.232,4.232,0,0,1-4.227,4.228v2.2a6.435,6.435,0,0,0,6.428-6.428V12.256A1.808,1.808,0,0,0,31.078,10.448Z"})))
        })), ia = Object(N.a)("\n\ttext-align: center;\n");
        var ua = Object(p.memo)((function () {
            return m.a.createElement(m.a.Fragment, null, m.a.createElement(Bn, null, m.a.createElement(oa, null), m.a.createElement(Fn, null), m.a.createElement(Le, null)), m.a.createElement(Ae, null, m.a.createElement(Fe, {className: ia})))
        }));
        var sa = Object(p.memo)((function () {
            return m.a.createElement(m.a.Fragment, null, m.a.createElement(Bn, null, m.a.createElement(Fn, null), m.a.createElement(Le, null)), m.a.createElement(Ae, null, m.a.createElement(Fe, null)))
        })), la = function (t) {
            return t.payload[0] || ""
        };
        var da = n(63), pa = n.n(da), ma = function (t, e) {
            return Array.from({length: e - t}, (function (e, n) {
                return n + t
            }))
        }, fa = function (t) {
            var e, n, r = t.clone().subtract(1, "month").endOf("month").date(), a = t.clone().date(1).day(),
                c = t.clone().endOf("month").date();
            return e = [].concat(Object(On.a)(ma(r - a + 1, r + 1)), Object(On.a)(ma(1, c + 1)), Object(On.a)(ma(1, 42 - c - a + 1))), n = 7, e.reduce((function (t, e) {
                var r = t.pop() || [];
                return r.length >= n ? t.push(r, [e]) : (r.push(e), t.push(r)), t
            }), [])
        }, ba = function (t, e, n) {
            return t.clone().year(e).month(n)
        }, va = function (t, e) {
            return 0 === t && e > 7
        }, ga = function (t, e) {
            return t >= 4 && e <= 14
        };

        function ha(t, e, n, r) {
            if (!e && !n) return 0;
            var a = 0;
            return e && (a = t.isSameOrAfter(e, r) ? 0 : -1), n && (a = t.isSameOrBefore(n, r) ? a : 1), a
        }

        var Oa = [1800, 2200];

        function ya(t) {
            return Math.min(Math.max(t, Oa[0]), Oa[1])
        }

        function ja(t) {
            var e = t.className, n = t.year, r = (t.moment, t.minMoment), a = t.maxMoment, c = t.onChange,
                o = Object(p.useMemo)((function () {
                    var t = r ? ya(r.year()) : Oa[0], e = a ? ya(a.year()) : Oa[1];
                    return Array.from({length: e - t + 1}).map((function (e, n) {
                        return n + t
                    }))
                }), [r, a]), i = Object(p.useCallback)((function (t) {
                    return c(+t.target.value)
                }), [c]);
            return m.a.createElement("select", {className: e, value: n, onChange: i}, o.map((function (t, e) {
                return m.a.createElement("option", {key: t, value: t}, t)
            })))
        }

        var xa = Object(p.memo)((function (t) {
                var e = t.className, n = t.month, r = t.moment, a = t.minMoment, c = t.maxMoment, o = t.onChange,
                    i = Object(p.useMemo)((function () {
                        return Array.from({length: 12}, (function (t, e) {
                            return e
                        })).map((function (t) {
                            return {value: t, label: "".concat(t < 9 ? "0" : "").concat(t + 1)}
                        }))
                    }), []), u = Object(p.useCallback)((function (t) {
                        return o(+t.target.value)
                    }), [o]);
                return m.a.createElement("select", {className: e, value: n, onChange: u}, i.map((function (t) {
                    var e = t.value, n = t.label;
                    return m.a.createElement("option", {
                        key: e,
                        value: e,
                        disabled: 0 !== ha(r.clone().month(e), a, c, "month")
                    }, n)
                })))
            })), wa = function (t) {
                return "\n\tcolor: ".concat(t.color.text.B4, ";\n\tpadding: 4px;\n\tline-height: 1.42857143;\n\ttext-align: center;\n")
            },
            Ea = Object(q.y)([["calendar", "\n\t\t:lang(ar) {\n\t\t\ttransform: scaleX(-1);\n\t\t\tdirection: rtl;\n\t\t}\n\t\twidth: 100%;\n\t\tborder-spacing: 0;\n\t\tborder-collapse: collapse;\n\t\tuser-select: none;\n\t"], ["week", function (t) {
                return "\n\t\t".concat(wa(t), "\n\t\tcolor: ").concat(t.color.text.B5, ";\n\t\tfont-size: 12px;\n\t\tfont-weight: 700;\n\t\ttext-transform: uppercase;\n\t")
            }], ["notThisMonth", function (t) {
                return "\n\t\tcolor: ".concat(t.color.text.B2, ";\n\t")
            }], ["active", function (t) {
                return "\n\t\tcolor: ".concat(t.color.text.white, ";\n\t\tbackground-color: ").concat(t.color.primary.default, ";\n\t")
            }], ["disabled", "\n\t\tcursor: not-allowed;\n\t"], ["day", function (t, e, n) {
                return "\n\t\t".concat(wa(t), "\n\t\twidth: ").concat(100 / 7, "%;\n\t\tcursor: pointer;\n\n\t\t&:not(.").concat(n.disabled, "):hover {\n\t\t\tcolor: ").concat(t.color.text.white, ";\n\t\t\tbackground-color: ").concat(t.color.primary.default, ";\n\t\t}\n\t")
            }]]);

        function ka(t) {
            var e = t.days, n = t.activeYear, r = t.activeMonth, a = t.activeDay, c = t.minMoment, o = t.maxMoment,
                i = t.getNewMoment, u = t.onChange, s = Ea(), l = Object(p.useMemo)((function () {
                    return m.a.createElement("thead", null, m.a.createElement("tr", null, ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((function (t) {
                        return m.a.createElement("td", {key: t, className: s.week}, t)
                    }))))
                }), []);
            return m.a.createElement("table", {className: s.calendar}, l, m.a.createElement("tbody", null, e.map((function (t, e) {
                return m.a.createElement("tr", {key: e}, t.map((function (t) {
                    var l, d = va(e, t), p = ga(e, t), f = i(t, d, p), b = d || p,
                        v = f.year() === n && f.month() === r && f.date() === a, g = 0 !== ha(f, c, o),
                        h = g ? void 0 : function () {
                            return u(f)
                        };
                    return m.a.createElement("td", {
                        key: t,
                        className: Object(N.b)(s.day, (l = {}, Object(ee.a)(l, s.notThisMonth, b || g), Object(ee.a)(l, s.active, v), Object(ee.a)(l, s.disabled, g), l)),
                        "data-qa": "day-".concat(t),
                        onClick: h
                    }, t)
                })))
            }))))
        }

        var Na = Object(q.y)([["clear", function (t) {
            return "\n\t\t:lang(ar) {\n\t\t\ttransform: scaleX(-1);\n\t\t}\n\t\twidth: 100%;\n\t\tmargin-top: 5px;\n\t\tpadding: 5px 0;\n\t\tborder: 0;\n\t\tbackground-color: ".concat(t.color.text.white, ";\n\t\tcolor: ").concat(t.color.primary.hover, ";\n\t\toutline: none;\n\t\tcursor: pointer;\n\n\t\t&:hover {\n\t\t\tcolor: ").concat(t.color.primary.default, ";\n\t\t\tbackground-color: ").concat(t.color.text.F, ";\n\t\t}\n\t")
        }]]);
        var Sa = Object(p.memo)((function (t) {
            var e = t.onClear, n = Na();
            return m.a.createElement("button", {className: n.clear, onClick: e}, "clear")
        })), Ca = Object(q.y)([["datePicker", function (t) {
            return "\n\t\tdisplay: inline-block;\n\t\tmax-width: 100%;\n\t\twidth: 300px;\n\t\tpadding: 12px 15px;\n\t\tborder: 1px solid ".concat(t.color.text.B, ";\n\t\tborder-radius: 3px;\n\t\tbackground-color: ").concat(t.color.text.white, ";\n\t\tbox-sizing: border-box;\n\t")
        }], ["header", "\n\t\tdisplay: flex;\n\t\tjustify-content: space-around;\n\t\tmargin: 10px 0;\n\t"], ["selector", function (t) {
            return "\n\t\t:lang(ar) {\n\t\t\ttransform: scaleX(-1);\n\t\t}\n\t\tcolor: ".concat(t.color.primary.default, ";\n\t\tborder-color: ").concat(t.color.primary.default, ";\n\t\tborder-radius: 4px;\n\t\tbackground-color: ").concat(t.color.text.white, ";\n\t\tmin-width: 60px;\n\t\toutline: none;\n\t")
        }]]);
        var Aa = Object(p.memo)((function (t) {
                var e = t.date, n = t.min, r = t.max, a = t.onChange, c = e || n || r, o = Object(p.useMemo)((function () {
                        return c ? pa()(c) : pa()()
                    }), [c]), i = o.year(), u = o.month(), s = o.date(), l = Object(p.useMemo)((function () {
                        return n ? pa()(n) : void 0
                    }), [n]), f = Object(p.useMemo)((function () {
                        return r ? pa()(r) : void 0
                    }), [r]), b = Object(p.useState)(i), v = Object(d.a)(b, 2), g = v[0], h = v[1], O = Object(p.useState)(u),
                    y = Object(d.a)(O, 2), j = y[0], x = y[1], w = Object(p.useMemo)((function () {
                        return o.clone().year(g).month(j)
                    }), [o, g, j]), E = Object(p.useMemo)((function () {
                        return fa(w)
                    }), [w]), k = Object(p.useCallback)((function (t) {
                        a && (a(t.format("YYYY-MM-DD")), h(t.year()), x(t.month()))
                    }), [a]), N = Object(p.useCallback)((function () {
                        return a()
                    }), [a]), S = Ca();
                return Object(p.useEffect)((function () {
                    i !== g && h(i), u !== j && x(u)
                }), ["".concat(i, "-").concat(u)]), m.a.createElement("div", {className: S.datePicker}, m.a.createElement("header", {className: S.header}, m.a.createElement(ja, {
                    className: S.selector,
                    year: g,
                    moment: w,
                    minMoment: l,
                    maxMoment: f,
                    onChange: h
                }), m.a.createElement(xa, {
                    className: S.selector,
                    month: j,
                    moment: w,
                    minMoment: l,
                    maxMoment: f,
                    onChange: x
                })), m.a.createElement(ka, {
                    days: E,
                    activeYear: i,
                    activeMonth: u,
                    activeDay: s,
                    minMoment: l,
                    maxMoment: f,
                    getNewMoment: function (t, e, n) {
                        var r = ba(w, g, j);
                        return e ? r.subtract(1, "month") : n && r.add(1, "month"), r.date(t)
                    },
                    onChange: k
                }), m.a.createElement(Sa, {onClear: N}))
            })),
            Ia = Object(q.y)([["display", "\n\t\tposition: relative;\n\t\twidth: 155px;\n\t\tmargin-bottom: 10px;\n\t"], ["calendarIcon", "\n\t\tposition: absolute;\n\t\ttop: 8px;\n\t\tright: 5px;\n\t"]]);

        function Da(t) {
            var e = t.date, n = t.onClick, r = "", a = Ia();
            if (e) {
                var c = e.split("-"), o = Object(d.a)(c, 3), i = o[0], u = o[1], s = o[2];
                r = "".concat(i, " / ").concat(u, " / ").concat(s)
            }
            return m.a.createElement("div", {className: a.display, onClick: n}, m.a.createElement(un, {
                value: r,
                placeholder: "YYYY / MM / DD",
                "data-qa": "subject-type-DATEPICKER",
                readOnly: !0
            }), m.a.createElement(q.b, {className: a.calendarIcon, icon: q.l}))
        }

        var _a = Object(p.memo)((function () {
            var t = function () {
                var t = Object(v.c)(), e = Object(v.i)(), n = Object(p.useMemo)((function () {
                        var n = t.getSubjectData(e), r = "undefined" === typeof n ? {minMoment: "", maxMoment: ""} : n;
                        return {min: r.minMoment, max: r.maxMoment}
                    }), [t, e]), r = n.min, a = n.max, c = Object(v.h)(e, la), o = Object(p.useState)(!1),
                    i = Object(d.a)(o, 2), u = i[0], s = i[1];
                return {
                    date: c, min: r, max: a, open: u, toggleOpen: Object(p.useCallback)((function () {
                        return s((function (t) {
                            return !t
                        }))
                    }), []), onChange: Object(p.useCallback)(function () {
                        var n = Object(J.a)(W.a.mark((function n(r) {
                            var a;
                            return W.a.wrap((function (n) {
                                for (; ;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, t.setAnswer(e, {payload: [r || ""]});
                                    case 3:
                                        (a = t.getSubjectMessage(e)) && a.error.type || !r || s(!1), n.next = 9;
                                        break;
                                    case 7:
                                        n.prev = 7, n.t0 = n.catch(0);
                                    case 9:
                                    case"end":
                                        return n.stop()
                                }
                            }), n, null, [[0, 7]])
                        })));
                        return function (t) {
                            return n.apply(this, arguments)
                        }
                    }(), [t, e])
                }
            }(), e = t.date, n = t.min, r = t.max, a = t.open, c = t.toggleOpen, o = t.onChange;
            return m.a.createElement("div", null, m.a.createElement(Da, {
                date: e,
                onClick: c
            }), m.a.createElement(q.a, {height: a ? "auto" : 0}, m.a.createElement(Aa, {
                date: e,
                min: n,
                max: r,
                onChange: o
            })))
        }));
        var Ta = Object(p.memo)((function () {
            return m.a.createElement(m.a.Fragment, null, m.a.createElement(In, null), m.a.createElement(Vn, null), m.a.createElement(De, null, m.a.createElement(Bn, null, m.a.createElement(Fn, null)), m.a.createElement(Ae, null, m.a.createElement(Le, null), m.a.createElement(He, null, m.a.createElement(Be, null)), m.a.createElement(Fe, null), m.a.createElement(Se, null, m.a.createElement(_a, null)))))
        })), La = Object(q.y)([["divider", function (t) {
            return "\n\t\twidth: 100%;\n\t\theight: 8px;\n\t\tmargin: 60px auto;\n\t\tbackground-color: ".concat(t.color.text.HB, ";\n\t")
        }]]);
        var Pa = Object(p.memo)((function () {
            var t = La();
            return m.a.createElement("div", {className: t.divider, "aria-label": "divider"})
        })), Ra = function (t) {
            return t.payload
        };

        function Ma() {
            var t = Object(v.c)(), e = Object(v.i)(), n = function (t, e) {
                    var n = Object(v.h)(e, Ra), r = Object(Z.g)(n), a = Object(p.useMemo)((function () {
                            var n = t.getSubjectData(e),
                                r = "undefined" === typeof n ? {options: void 0, lowerbounds: void 0, upperbounds: void 0} : n,
                                a = r.lowerbounds, c = null === r.upperbounds ? a : r.upperbounds;
                            return {options: r.options, minCount: a, maxCount: c}
                        }), [t, e]), c = a.options, o = a.minCount, i = a.maxCount, u = Object(v.l)(e, ne.f),
                        s = Object(p.useMemo)((function () {
                            return u ? c.filter((function (t) {
                                return u[t.ID].visible
                            })) : c
                        }), [c, u]), l = Object(p.useMemo)((function () {
                            var t = [], e = [];
                            return s.forEach((function (r) {
                                n.includes(Object(Ue.addOptionPrefix)(r.ID)) ? e.push(r) : t.push(r)
                            })), e.sort((function (t, e) {
                                return n.indexOf(Object(Ue.addOptionPrefix)(t.ID)) - n.indexOf(Object(Ue.addOptionPrefix)(e.ID))
                            })), {unselected: t, selected: e}
                        }), [s, n]);
                    return {valueRef: r, minCount: o, maxCount: i, unselected: l.unselected, selected: l.selected}
                }(t, e), r = n.valueRef, a = n.minCount, c = n.maxCount, o = n.unselected, i = n.selected,
                u = function (t, e, n) {
                    var r = Object(p.useCallback)((function (n) {
                        return t.setAnswer(e, {payload: n})
                    }), [t, e]);
                    return {
                        onSortEnd: Object(p.useCallback)((function (t) {
                            var e = t.oldIndex, a = t.newIndex, c = Object(On.a)(n.current);
                            c.splice(a < 0 ? c.length + a : a, 0, c.splice(e, 1)[0]), r(c)
                        }), [r]), onSelect: Object(p.useCallback)((function (t) {
                            var e = [].concat(Object(On.a)(n.current), [Object(Ue.addOptionPrefix)(t)]);
                            r(e)
                        }), []), onRemove: Object(p.useCallback)((function (t) {
                            var e = Object(Ue.addOptionPrefix)(t), a = n.current.filter((function (t) {
                                return t !== e
                            }));
                            r(a)
                        }), [r]), onClear: Object(p.useCallback)((function () {
                            return r([])
                        }), [r])
                    }
                }(t, e, r);
            return {
                minCount: a,
                maxCount: c,
                unselected: o,
                selected: i,
                onSortEnd: u.onSortEnd,
                onSelect: u.onSelect,
                onRemove: u.onRemove,
                onClear: u.onClear
            }
        }

        function Fa() {
            var t = Object(k.a)(["\n            margin-left: 5px;\n            color: #6b6b6b;\n          "]);
            return Fa = function () {
                return t
            }, t
        }

        function Ua() {
            var t = Object(k.a)(["\n          display: flex;\n          align-items: center;\n          font-size: 14px;\n          color: #6b6b6b;\n          transition: color 0.3s ease;\n          cursor: pointer;\n\n          :lang(ar) {\n            transform: scaleX(-1);\n            direction: rtl;\n          }\n\n          &:hover {\n            color: ", ";\n\n            & > svg path {\n              fill: ", ";\n              transition: fill 0.3s ease;\n            }\n          }\n        "]);
            return Ua = function () {
                return t
            }, t
        }

        function za() {
            var t = Object(k.a)(["\n        display: flex;\n        justify-content: flex-end;\n        margin-bottom: 10px;\n      "]);
            return za = function () {
                return t
            }, t
        }

        var Ga = q.i.Icon;
        var Ba = Object(p.memo)((function (t) {
            var e = t.label, n = t.onClear, r = Object(q.H)();
            return m.a.createElement("div", {className: Object(N.a)(za())}, m.a.createElement("div", {
                className: Object(N.a)(Ua(), r.color.primary.default, r.color.primary.default),
                onClick: n
            }, m.a.createElement("span", null, e), m.a.createElement(Ga, {
                fontSize: "medium",
                className: Object(N.a)(Fa()),
                name: "Refresh"
            })))
        }));

        function Ya() {
            var t = Object(k.a)(["\n              border-radius: 4px;\n              height: 360px;\n              overflow-y: auto;\n            "]);
            return Ya = function () {
                return t
            }, t
        }

        function Ha() {
            var t = Object(k.a)(["\n            overflow-x: auto;\n          "]);
            return Ha = function () {
                return t
            }, t
        }

        function Va() {
            var t = Object(k.a)(["\n          border-radius: 8px;\n          border: 1px solid #e3e3e3;\n          background: #eee;\n          padding: 12px;\n\n          @media (max-width: 720px) {\n            &:first-of-type {\n              margin-bottom: 15px;\n            }\n          }\n        "]);
            return Va = function () {
                return t
            }, t
        }

        function Wa() {
            var t = Object(k.a)(["\n          font-size: 14px;\n          line-height: 21px;\n          color: ", ";\n          margin: 0 0 8px;\n\n          :lang(ar) {\n            transform: scaleX(-1);\n            direction: rtl;\n          }\n        "]);
            return Wa = function () {
                return t
            }, t
        }

        function Ja() {
            var t = Object(k.a)([""]);
            return Ja = function () {
                return t
            }, t
        }

        var Za = function (t) {
            var e = t.children, n = t.label, r = t.contentRef, a = Object(q.H)();
            return m.a.createElement("div", {className: Object(N.a)(Ja())}, m.a.createElement("p", {
                className: Object(N.a)(Wa(), a.color.primary.default),
                "data-qa": n
            }, n), m.a.createElement("div", {className: Object(N.a)(Va())}, m.a.createElement("div", {className: Object(N.a)(Ha())}, m.a.createElement("div", {
                ref: r,
                className: Object(N.a)(Ya())
            }, e))))
        }, qa = Object(p.memo)((function (t) {
            var e = t.children, n = t.className, r = t.id, a = t.disabled, c = t.onSelect,
                o = Object(p.useCallback)((function () {
                    return c(r)
                }), [c, r]);
            return m.a.createElement("div", {className: n, onClick: a ? void 0 : o}, e)
        })), Xa = function (t) {
            return "\n\tdisplay: block;\n\tborder-radius: 4px;\n\tborder: 1px solid #E3E3E3;\n\tbackground-color: ".concat(t.color.text.white, ";\n\toutline: 0;\n\tuser-select: none;\n\tcursor: pointer;\n\tmargin-bottom: 8px;\n\n\t&:last-of-type {\n\t\tmargin-bottom: 0;\n\t}\n")
        }, Qa = Object(q.y)([["unselectedItem", function (t) {
            return "\n\t\t:lang(ar) {\n\t\t\ttransform: scaleX(-1);\n\t\t\tdirection: rtl;\n\t\t}\n\t\t".concat(Xa(t), "\n\t\tborder-color: ").concat(t.color.text.B, ";\n\t\tcolor: ").concat(t.color.text.B4, ";\n\t")
        }], ["unselectedItemDisabled", function (t) {
            return "\n\t\t:lang(ar) {\n\t\t\ttransform: scaleX(-1);\n\t\t\tdirection: rtl;\n\t\t}\n\t\t".concat(Xa(t), "\n\t\tborder-color: ").concat(t.color.text.HB, ";\n\t\tcolor: ").concat(t.color.text.B2, ";\n\t\tcursor: not-allowed;\n\t")
        }]]);

        function Ka() {
            var t = Object(k.a)(["\n                  > * {\n                    margin: 0;\n                  }\n                "]);
            return Ka = function () {
                return t
            }, t
        }

        function $a() {
            var t = Object(k.a)(["\n                  border-radius: 0 0 3px 3px;\n                "]);
            return $a = function () {
                return t
            }, t
        }

        function tc() {
            var t = Object(k.a)(["\n                  border-radius: 0 0 3px 3px;\n                "]);
            return tc = function () {
                return t
            }, t
        }

        function ec() {
            var t = Object(k.a)(["\n                  border-radius: 0 0 3px 3px;\n                "]);
            return ec = function () {
                return t
            }, t
        }

        function nc() {
            var t = Object(k.a)(["\n                font-size: 16px;\n                line-height: 24px;\n                padding: 8px 12px;\n                color: #6b6b6b;\n                font-weight: 500;\n                margin: 0;\n              "]);
            return nc = function () {
                return t
            }, t
        }

        function rc() {
            var t = Object(k.a)(["\n              font-size: 0;\n            "]);
            return rc = function () {
                return t
            }, t
        }

        function ac() {
            var t = Object(k.a)(["\n            ", "\n          "]);
            return ac = function () {
                return t
            }, t
        }

        function cc(t) {
            var e = t.label, n = t.disabled, r = t.options, a = t.onSelect, c = Qa(),
                o = n ? c.unselectedItemDisabled : c.unselectedItem;
            return m.a.createElement(Za, {label: e}, r.map((function (t) {
                var e = t.ID, r = t.text, c = t.imgs, i = t.youtubeid;
                return m.a.createElement(qa, {
                    key: e,
                    id: e,
                    className: Object(N.a)(ac(), o),
                    disabled: n,
                    onSelect: Boolean(i) ? function () {
                    } : a
                }, m.a.createElement("div", {className: Object(N.a)(rc())}, m.a.createElement("p", {
                    onClick: Boolean(i) && !n ? function () {
                        return a(e)
                    } : function () {
                    }, className: Object(N.a)(nc())
                }, r), (c || i) && m.a.createElement(Je, {
                    imageLink: c || "",
                    imageClassName: Object(N.a)(ec()),
                    playIconClassName: Object(N.a)(tc()),
                    thumbnailClassName: Object(N.a)($a()),
                    youtubeID: i || "",
                    className: Object(N.a)(Ka())
                })))
            })))
        }

        var oc = n(235);

        function ic() {
            var t = Object(k.a)(["\n            color: ", ";\n          "]);
            return ic = function () {
                return t
            }, t
        }

        var uc = q.i.Icon, sc = Object(oc.b)(Object(p.memo)((function (t) {
            var e = t.children, n = t.classes, r = t.id, a = t.onRemove, c = Object(q.H)(),
                o = Object(p.useCallback)((function () {
                    return a(r)
                }), [a, r]);
            return m.a.createElement("div", {className: n.selectedItem}, m.a.createElement("div", null, e), m.a.createElement("span", {
                className: n.selectedItemRemove,
                onClick: o
            }, m.a.createElement(uc, {
                fontSize: "medium",
                className: Object(N.a)(ic(), c.color.primary.default),
                name: "Clear"
            })))
        }))), lc = Object(q.y)([["selectedItem", function (t) {
            return "\n\t\t:lang(ar) div {\n\t\t\ttransform: scaleX(-1);\n\t\t\tdirection: rtl;\n\t\t}\n\t\t".concat(Xa(t), "\n\t\tdisplay: flex;\n\t\tposition: relative;\n\t\tborder-color ").concat(t.color.primary.default, ";\n\t\tcolor: ").concat(t.color.primary.default, ";\n\n\t\t& > div {\n\t\t\twidth: 100%;\n\t\t}\n\t")
        }], ["selectedItemRemove", function (t) {
            return "\n\t\tposition: absolute;\n\t\ttop: 8px;\n\t\tright: 12px;\n\t\tcolor: ".concat(t.color.primary.hover, ";\n\n\t\t&:hover {\n\t\t\tcolor: ").concat(t.color.primary.default, ";\n\t\t}\n\t")
        }], ["selectedItemDragging", function (t, e, n) {
            return "\n\t\tbackground-color: ".concat(t.color.primary.hover, ";\n\t\tborder-color: ").concat(t.color.primary.hover, ";\n\t\tcolor: ").concat(t.color.text.white, ";\n\t\tbox-shadow: 1px 1px 4px 0px ").concat(t.color.primary.hover, ";\n\t\t-webkit-tap-highlight-color: transparent;\n\n\t\t& .").concat(n.selectedItemRemove, ", & p {\n\t\t\tcolor: ").concat(t.color.text.white, "\n\t\t}\n\t")
        }]]);

        function dc() {
            var t = Object(k.a)(["\n                    > * {\n                      margin: 0;\n                    }\n                  "]);
            return dc = function () {
                return t
            }, t
        }

        function pc() {
            var t = Object(k.a)(["\n                    border-radius: 0 0 3px 3px;\n                  "]);
            return pc = function () {
                return t
            }, t
        }

        function mc() {
            var t = Object(k.a)(["\n                    border-radius: 0 0 3px 3px;\n                  "]);
            return mc = function () {
                return t
            }, t
        }

        function fc() {
            var t = Object(k.a)(["\n                    border-radius: 0 0 3px 3px;\n                  "]);
            return fc = function () {
                return t
            }, t
        }

        function bc() {
            var t = Object(k.a)(["\n                  font-size: 0;\n                "]);
            return bc = function () {
                return t
            }, t
        }

        function vc() {
            var t = Object(k.a)(["\n                font-size: 16px;\n                line-height: 24px;\n                color: ", ";\n                margin: 0;\n                padding: 8px 12px;\n                font-weight: 500;\n              "]);
            return vc = function () {
                return t
            }, t
        }

        var gc = Object(oc.a)((function (t) {
            var e = t.children;
            return m.a.createElement("div", null, e)
        }));

        function hc(t) {
            var e = t.label, n = t.options, r = t.onRemove, a = t.onSortEnd, c = Object(p.useRef)(null),
                o = Object(p.useRef)(n.length), i = lc(), u = Object(q.H)();
            return Object(p.useEffect)((function () {
                return o.current < n.length && c.current && (c.current.scrollTop = c.current.scrollHeight), function () {
                    o.current = n.length
                }
            }), [n.length]), m.a.createElement(Za, {contentRef: c, label: e}, m.a.createElement(gc, {
                lockAxis: "y",
                helperClass: i.selectedItemDragging,
                pressDelay: 150,
                onSortEnd: a
            }, n.map((function (t, e) {
                var n = t.ID, a = t.text, c = t.imgs, o = t.youtubeid;
                return m.a.createElement(sc, {
                    key: n,
                    id: n,
                    index: e,
                    classes: i,
                    onRemove: r
                }, m.a.createElement("p", {className: Object(N.a)(vc(), u.color.primary.default)}, e + 1, ". ", a), (c || o) && m.a.createElement("div", {className: Object(N.a)(bc())}, m.a.createElement(Je, {
                    imageLink: c || "",
                    imageClassName: Object(N.a)(fc()),
                    playIconClassName: Object(N.a)(mc()),
                    thumbnailClassName: Object(N.a)(pc()),
                    youtubeID: o || "",
                    className: Object(N.a)(dc())
                })))
            }))))
        }

        function Oc() {
            var t = Object(k.a)(["\n          display: grid;\n          grid-template-columns: 1fr 1fr;\n          grid-gap: 16px;\n          width: 100%;\n\n          @media (max-width: 720px) {\n            grid-template-columns: 1fr;\n            grid-gap: 0;\n          }\n        "]);
            return Oc = function () {
                return t
            }, t
        }

        function yc() {
            var t = Object(k.a)(["\n          display: flex;\n          justify-content: space-between;\n          margin-bottom: 8px;\n        "]);
            return yc = function () {
                return t
            }, t
        }

        var jc = Object(p.memo)((function () {
            var t = Ma(), e = t.maxCount, n = t.unselected, r = t.selected, a = t.onSortEnd, c = t.onSelect,
                o = t.onRemove, u = t.onClear, s = r.length >= e, l = Object(i.c)().wording;
            return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {className: Object(N.a)(yc())}, m.a.createElement(Ye, null), m.a.createElement(Ba, {
                label: l.subject.itemsort.resort,
                onClear: u
            })), m.a.createElement("div", {className: Object(N.a)(Oc())}, m.a.createElement(cc, {
                label: l.subject.itemsort.dargit,
                disabled: s,
                options: n,
                onSelect: c
            }), m.a.createElement(hc, {label: l.subject.itemsort.sortit, options: r, onRemove: o, onSortEnd: a})))
        }));
        var xc = Object(p.memo)((function () {
            return m.a.createElement(m.a.Fragment, null, m.a.createElement(In, null), m.a.createElement(Vn, null), m.a.createElement(De, null, m.a.createElement(Bn, null, m.a.createElement(Fn, null)), m.a.createElement(Ae, null, m.a.createElement(Le, null), m.a.createElement(He, null, m.a.createElement(Be, null)), m.a.createElement(Fe, null), m.a.createElement(Se, null, m.a.createElement(jc, null)))))
        }));

        function wc(t, e) {
            function n(e) {
                var n = e.childIds, r = e.options;
                return m.a.createElement(m.a.Fragment, null, n.map((function (e) {
                    return m.a.createElement(v.b.Provider, {key: e, value: e}, m.a.createElement(t, {options: r}))
                })))
            }

            return Object(p.memo)((function (t) {
                var r = t.childIds, a = t.options, c = m.a.createElement(n, {childIds: r, options: a});
                return e ? m.a.createElement(e, {options: a}, c) : c
            }))
        }

        var Ec = function (t) {
            return t.payload[0] || ""
        };
        var kc = function (t) {
            return t
        };

        function Nc() {
            var t = Object(v.c)(), e = Object(v.i)(), n = Object(p.useMemo)((function () {
                    var n = t.getSubjectData(e);
                    return "undefined" === typeof n ? void 0 : n.text
                }), [t, e]), r = t.getSubjectData(e), a = "undefined" === typeof r ? void 0 : r.sn, c = Object(v.h)(e, Ec),
                o = Object(_.get)(r, "imgs") || "", i = Object(_.get)(r, "youtubeid") || "",
                u = Object(p.useCallback)((function (n, r) {
                    var a = r ? [n] : [];
                    t.setAnswer(e, {payload: a})
                }), [t, e]), s = t.getState(), l = Object(p.useMemo)((function () {
                    return s.meta.calc_mode || s.settings.preview && s.settings.calc_mode
                }), [s]), d = function (t, e, n) {
                    return Object(v.m)((function (e) {
                        var n = e.getState().states[t].meta;
                        if ("undefined" !== typeof n) return n.visible
                    }), e, n)
                }(e, kc), m = Object(p.useContext)(vn), f = l ? Object(_.get)(m, [e, "meta", "visible"], d) : d;
            return {id: e, text: n, valueFromAnswer: c, onChange: u, sn: a, visible: f, imgs: o, youtubeid: i}
        }

        var Sc = Object(q.y)([["table", "\n\t\t\tborder-collapse: collapse;\n\t\t\tmin-width: 100%;\n\t\t"], ["tr", function (t) {
                return "\n\t\t\t&:nth-of-type(even) {\n\t\t\t\tbackground: ".concat(t.survey.color.light, ";\n\t\t\t}\n\t\t")
            }], ["th", "\n\t\t\tvertical-align: bottom;\n\t\t\tfont-weight: 300;\n\t\t"], ["thtd", "\n      :lang(ar){\n        transform: scaleX(-1);\n        direction: rtl;\n      }\n\t\t"], ["firstColumn", "\n\t\t\tmin-width: 6em;\n\t\t"], ["withPadding", "\n   \t padding: 16px 8px;\n\t\t"], ["center", "\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t"], ["radioClassName", "\n\t\t\tborder: none;\n\t\t\tbackground-color: transparent;\n\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tpadding: 0;\n\t\t\tmargin: 0;\n\n\t\t\t> span {\n\t\t\t\twidth: 36px;\n\t\t\t\tmargin: 0 auto;\n\t\t\t}\n\t\t"], ["textClassName", function (t) {
                return ["\n      font-size: 14px;\n      color: ".concat(t.survey.color.default, ";\n\t\t\t")]
            }], ["categoryText", function (t) {
                return ["\n        :lang(ar){\n          transform: scaleX(-1);\n          direction: rtl;\n        }\n        color: ".concat(t.survey.color.black, ";\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 24px;\n\t\t\t\tmargin: 0 0 10px 0;\n\t\t\t")]
            }], ["categoryTextContainer", "\n\t\t\tposition: relative;\n\t\t\tmargin: 0 0 0 10px;\n\t\t"], ["categoryMediaContainer", "\n\t\t\tpadding: 8px 0 0 10px;\n\t\t"]]),
            Cc = Object(p.createContext)({}), Ac = wc((function (t) {
                var e = t.options, n = t.nestOptionReversed, r = Nc(), a = r.id, c = r.text, o = r.valueFromAnswer,
                    i = r.onChange, u = r.sn, s = r.visible, l = r.imgs, d = r.youtubeid, f = Object(p.useContext)(Cc);
                if ("undefined" !== typeof s && !s) return null;
                var b = n ? e.reverse() : e;
                return m.a.createElement("tr", {
                    className: f.tr,
                    "data-subject-id": a,
                    "data-subject-sn": u
                }, m.a.createElement("td", {className: Object(N.b)(f.categoryText, f.thtd, f.withPadding, f.firstColumn)}, m.a.createElement("div", null, m.a.createElement("div", {className: f.categoryTextContainer}, c), (l || d) && m.a.createElement("div", {className: f.categoryMediaContainer}, m.a.createElement(Je, {
                    imageLink: l,
                    youtubeID: d
                })))), b.map((function (t) {
                    var e = t.Id, n = t.label, r = t.value, a = o === r, c = Object(Qt.countChinese)(n),
                        u = {minWidth: "".concat((c >= 5 ? 5 : c) + 1, "em")};
                    return m.a.createElement("td", {
                        key: r,
                        className: f.thtd,
                        style: u
                    }, m.a.createElement("div", {className: f.center}, m.a.createElement(nn, {
                        Id: e,
                        value: r,
                        className: f.radioClassName,
                        inverse: !0,
                        checked: a,
                        onChange: i
                    })))
                })))
            }), (function (t) {
                var e = t.children, n = t.options, r = t.nestOptionReversed, a = Sc([n.length]), c = r ? n.reverse() : n;
                return m.a.createElement("table", {className: a.table}, m.a.createElement("tbody", null, m.a.createElement("tr", {className: a.tr}, m.a.createElement("th", {className: Object(N.b)(a.thtd, a.th, a.firstColumn)}), c.map((function (t) {
                    var e = t.label, n = t.value;
                    return m.a.createElement("th", {
                        key: n,
                        className: Object(N.b)(a.thtd, a.textClassName, a.withPadding, a.th)
                    }, e)
                }))), m.a.createElement(Cc.Provider, {value: a}, e)))
            })), Ic = Object(q.y)([["radioClassNameMobile", function (t) {
                return "\n\t\t\tborder: none;\n\t\t\tbackground-color: ".concat(t.survey.color.light, ";\n\t\t\tmargin: 0 0 4px 0;\n    ")
            }], ["textClassName", function (t) {
                return ["\n        font-size: 1em;\n        color: ".concat(t.survey.color.default, ";\n\t\t\t")]
            }], ["categoryText", function (t) {
                return ["\n        :lang(ar){\n          transform: scaleX(-1);\n          direction: rtl;\n        }\n\t\t\t\tdisplay: flex;\n\t\t\t\tposition: relative;\n        color: ".concat(t.survey.color.black, ";\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 24px;\n\t\t\t\tmargin: 0 0 10px 0;\n\t\t\t")]
            }], ["rowContainer", "\n    \tmargin: 30px 0 60px 0;\n\t\t"]]), Dc = wc((function (t) {
                var e = t.options, n = t.nestOptionReversed, r = Nc(), a = r.id, c = r.text, o = r.valueFromAnswer,
                    i = r.onChange, u = r.sn, s = r.visible, l = r.imgs, d = r.youtubeid, p = Ic();
                if ("undefined" !== typeof s && !s) return null;
                var f = n ? e.reverse() : e;
                return m.a.createElement("div", {
                    className: p.rowContainer,
                    "data-subject-id": a,
                    "data-subject-sn": u
                }, m.a.createElement("div", null, m.a.createElement("p", {className: p.categoryText}, c), (l || d) && m.a.createElement(Je, {
                    imageLink: l,
                    youtubeID: d
                })), f.map((function (t) {
                    var e = t.Id, n = t.label, r = t.value, a = o === r;
                    return m.a.createElement(nn, {
                        key: r,
                        Id: e,
                        value: r,
                        className: p.radioClassNameMobile,
                        textClassName: p.textClassName,
                        inverse: !0,
                        size: "small",
                        label: n,
                        checked: a,
                        onChange: i
                    })
                })))
            }));

        function _c() {
            var t = Object(k.a)(["\n        position: relative;\n        font-size: 1rem;\n        width: 100%;\n\n        ", "\n      "]);
            return _c = function () {
                return t
            }, t
        }

        var Tc = Object(p.memo)((function () {
            var t = Object(v.c)(), e = Object(v.i)(), n = function (t, e) {
                    return Object(p.useMemo)((function () {
                        var n = t.getSubjectData(e),
                            r = "undefined" === typeof n ? {childs: void 0, options: void 0, extras: void 0} : n,
                            a = r.childs, c = r.options, o = r.extras;
                        return {
                            childIds: a ? a.map((function (t) {
                                return t.ID
                            })) : [], options: c ? c.map((function (t) {
                                var e = t.text, n = t.ID;
                                return {Id: n, label: e, value: Object(Ue.addOptionPrefix)(n)}
                            })) : [], nestOptionReversed: Object(_.get)(o, "nestOptionReversed", !1)
                        }
                    }), [t, e])
                }(t, e), r = n.childIds, a = n.options, c = n.nestOptionReversed, o = Object(Z.j)().width >= 720,
                i = o ? Ac : Dc;
            return m.a.createElement("div", {
                className: Object(N.a)(_c(), o && "\n        overflow-x: auto;\n        "),
                "data-subject-id": e
            }, m.a.createElement(i, {childIds: r, options: a, nestOptionReversed: c || !1}))
        }));
        var Lc = Object(p.memo)((function () {
            return m.a.createElement(m.a.Fragment, null, m.a.createElement(In, null), m.a.createElement(Vn, null), m.a.createElement(De, null, m.a.createElement(Bn, null, m.a.createElement(Fn, null)), m.a.createElement(Ae, null, m.a.createElement(Le, null), m.a.createElement(Ye, null), m.a.createElement(He, null, m.a.createElement(Be, null)), m.a.createElement(Fe, null), m.a.createElement(Se, null, m.a.createElement(Tc, null)))))
        })), Pc = Object(q.y)([["container", function (t) {
            return "\n\t\t\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\theight: 40px;\n\t\tborder: 1px solid ".concat(t.survey.option.default.border.color, ";\n\t\tfont-size: 18px;\n\t\tborder-radius: 4px;\n\t\tline-height: 1.5;\n\t\tcursor: pointer;\n\t\tbox-sizing: border-box;\n\t")
        }], ["select", "\n\t\t:lang(ar) {\n\t\t\tdirection: rtl;\n\t\t}\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tcursor: pointer;\n\t\topacity: 0;\n\n\t\t&::-ms-expand {\n\t\t\tdisplay: none;\n\t\t}\n\t"], ["ghost", "\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tpointer-events: none;\n\t"], ["placeholder", "\n\t\t:lang(ar) {\n\t\t\ttransform: scaleX(-1);\n\t\t\tdirection: rtl;\n\t\t}\n\t\twidth: calc(100% - 3em);\n\t\tfont-size: 1em;\n\t\tline-height: 1.5;\n\t\tpadding-left: 10px;\n\t\tbox-sizing: border-box;\n\t"], ["icon", function (t) {
            return "\n\t\twidth: 3em;\n\t\ttext-align: center;\n\t\tcolor: ".concat(t.color.primary.default, ";\n\t")
        }]]);
        var Rc = Object(p.memo)((function (t) {
            var e = t.value, n = t.options, r = t.onChange, a = t.optionStates, c = t.mutatedOptionStates,
                o = Object(i.c)().wording, u = Object(p.useCallback)((function (t) {
                    r(t.target.value, !0)
                }), [r]), s = Pc();
            return m.a.createElement("div", {className: s.container}, m.a.createElement("div", {className: s.ghost}, m.a.createElement(q.h, {
                className: s.placeholder,
                variant: "span",
                color: "primary",
                noWrap: !0
            }, function (t, e, n) {
                if (!t) return n.message.placeholder.select;
                var r = e.find((function (e) {
                    var n = e.ID;
                    return Object(Ue.addOptionPrefix)(n) === t
                }));
                return r ? r.text : ""
            }(e, n, o)), m.a.createElement(q.b, {
                className: s.icon,
                icon: q.q
            })), m.a.createElement("select", {
                className: s.select,
                value: e,
                onChange: u,
                "data-qa": "select"
            }, m.a.createElement("option", {value: ""}, o.message.placeholder.select), n.map((function (t) {
                var e = t.ID, n = t.text, r = a[e], i = r.visible, u = r.enable, s = c[e],
                    l = s && "boolean" === typeof s.visible ? s.visible : i,
                    d = s && "boolean" === typeof s.enable ? s.enable : i;
                if (!i || !l) return null;
                var p = Object(Ue.addOptionPrefix)(e), f = !u || !d, b = !u && !d;
                return m.a.createElement("option", {
                    key: p,
                    value: p,
                    disabled: f
                }, n, f && b && " - ".concat(o.message.error.option_fulled))
            }))))
        })), Mc = Object(Ue.createUseChoiceAnswer)("single", (function (t) {
            return t.payload[0]
        }), (function (t, e) {
            return !(!t || "" === e)
        }), (function (t, e) {
            return e ? [t] : []
        }));
        var Fc = function () {
            var t = Mc(), e = t.optionStates, n = t.getMutatedOptionStates, r = t.value, a = t.options, c = t.onChange,
                o = t.elseValue, i = t.elseOption, u = t.onElseChange, s = t.onElseFinished,
                l = n(Object(p.useContext)(vn));
            return m.a.createElement(m.a.Fragment, null, a && e && m.a.createElement(Rc, {
                value: r,
                onChange: c,
                options: a,
                optionStates: e,
                mutatedOptionStates: l
            }), i && Object(Ue.addOptionPrefix)(i.ID) === r && m.a.createElement(pn, {
                initialValue: o,
                onChange: u,
                onFinished: s
            }))
        };
        var Uc = Object(p.memo)((function () {
            var t = Mc(), e = t.columnDesktop, n = t.columnMobile, r = t.optionStates, a = t.getMutatedOptionStates,
                c = t.value, o = t.options, i = t.onChange, u = t.elseValue, s = t.onElseChange, l = t.onElseFinished,
                d = a(Object(p.useContext)(vn)), f = Object(Z.j)().width >= 720 ? e : n;
            return o && r ? m.a.createElement(Me, {column: f, gutter: 10}, o.map((function (t) {
                var e = t.ID, n = t.text, a = t.imgs, o = t.youtubeid, p = t.elses, f = t.required, b = r[e],
                    v = b.visible, g = b.enable, h = b.excluded, O = d[e],
                    y = O && "boolean" === typeof O.visible ? O.visible : v,
                    j = O && "boolean" === typeof O.enable ? O.enable : v;
                if (!v || !y) return null;
                var x = Object(Ue.addOptionPrefix)(e), w = x === c && g && j, E = !g || !j, k = !g && !j,
                    N = 1 === p && w && 1 === f && "" === u.trim();
                return m.a.createElement(nn, {
                    key: x,
                    Id: e,
                    size: "small",
                    rippleAnimationDuration: 700,
                    value: x,
                    label: n,
                    onChange: i,
                    checked: w,
                    excluded: h,
                    disabled: E,
                    isOptionFulledDisabled: k,
                    imageLink: a || void 0,
                    youtubeID: o || void 0,
                    required: N
                }, 1 === p && w && m.a.createElement(pn, {initialValue: u, onChange: s, onFinished: l}))
            }))) : null
        }));
        var zc = Object(p.memo)((function () {
            var t = Object(v.c)(), e = Object(v.i)(), n = t.getSubjectData(e),
                r = "undefined" !== typeof n && n.compress ? Fc : Uc;
            return m.a.createElement(r, null)
        }));
        var Gc = Object(p.memo)((function () {
            return m.a.createElement(m.a.Fragment, null, m.a.createElement(In, null), m.a.createElement(Vn, null), m.a.createElement(De, null, m.a.createElement(Bn, null, m.a.createElement(Fn, null)), m.a.createElement(Ae, null, m.a.createElement(Le, null), m.a.createElement(Ye, null), m.a.createElement(He, null, m.a.createElement(Be, null)), m.a.createElement(Fe, null), m.a.createElement(Se, null, m.a.createElement(zc, null)))))
        })), Bc = function (t) {
            return t.survey.color.default
        };
        var Yc = Object(p.memo)((function () {
            var t = Object(v.c)(), e = Object(v.i)(), n = t.getSubjectData(e),
                r = "undefined" === typeof n ? {lowerbounds: null, upperbounds: null} : n, a = r.lowerbounds,
                c = r.upperbounds, o = Object(i.c)().wording;
            return null === a && null === c || null !== c && c > 1 ? m.a.createElement(q.g, {color: Bc}, o.subject.choicemulti.label) : null
        })), Hc = Object(Ue.createUseChoiceAnswer)("multiple", (function (t) {
            return t.payload
        }), (function (t) {
            return t
        }), (function (t, e, n) {
            return e ? [].concat(Object(On.a)(n), [t]) : n.filter((function (e) {
                return e !== t
            }))
        }));
        var Vc = Object(p.memo)((function () {
            var t = Hc(), e = t.columnDesktop, n = t.columnMobile, r = t.options, a = t.optionStates,
                c = t.getMutatedOptionStates, o = t.onElseChange, i = t.value, u = t.elseValue, s = t.onChange,
                l = Object(Z.j)().width >= 720 ? e : n, d = c(Object(p.useContext)(vn));
            return r && a ? m.a.createElement(Me, {column: l, gutter: 10}, r.map((function (t) {
                var e = t.ID, n = t.text, r = t.imgs, c = t.youtubeid, l = t.elses, p = t.required, f = a[e],
                    b = f.excluded, v = f.visible, g = f.enable, h = d[e],
                    O = h && "boolean" === typeof h.visible ? h.visible : v,
                    y = h && "boolean" === typeof h.enable ? h.enable : v, j = Object(Ue.addOptionPrefix)(e),
                    x = i.includes(j) && g, w = !g || !y, E = !g && !y, k = r || "", N = c || "",
                    S = 1 === l && x && 1 === p && "" === u.trim();
                return v && O ? m.a.createElement(rn, {
                    key: j,
                    Id: e,
                    value: j,
                    label: n,
                    checked: x,
                    excluded: b,
                    disabled: w,
                    isOptionFulledDisabled: E,
                    imageLink: k,
                    youtubeID: N,
                    onChange: s,
                    required: S
                }, 1 === l && x && m.a.createElement(pn, {initialValue: u, onChange: o})) : null
            }))) : null
        }));
        var Wc = Object(p.memo)((function () {
            return m.a.createElement(m.a.Fragment, null, m.a.createElement(In, null), m.a.createElement(Vn, null), m.a.createElement(De, null, m.a.createElement(Bn, null, m.a.createElement(Fn, null)), m.a.createElement(Ae, null, m.a.createElement(Le, null), m.a.createElement(Ye, null), m.a.createElement(He, null, m.a.createElement(Yc, null), m.a.createElement(Be, null)), m.a.createElement(Fe, null), m.a.createElement(Se, null, m.a.createElement(Vc, null)))))
        }));
        var Jc = function (t) {
            return t
        };

        function Zc(t, e) {
            var n = Object(v.c)(), r = Object(v.h)(t, Jc), a = e.titles.length, c = Object(p.useState)((function () {
                return r.payload.length ? r.payload[0].split(",") : []
            })), o = Object(d.a)(c, 2), i = o[0], u = o[1], s = function () {
                var e = Object(J.a)(W.a.mark((function e(r, c) {
                    var o, s;
                    return W.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (o = 0 !== r ? [].concat(Object(On.a)(i.slice(0, r)), [c]) : [c], !(i.length === a && o.length < a)) {
                                    e.next = 4;
                                    break
                                }
                                return e.next = 4, n.setAnswer(t, {payload: []});
                            case 4:
                                if (u(o), o.length !== a) {
                                    e.next = 10;
                                    break
                                }
                                return s = o.join(","), e.next = 9, n.setAnswer(t, {payload: [s]});
                            case 9:
                                return e.abrupt("return");
                            case 10:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t, n) {
                    return e.apply(this, arguments)
                }
            }();
            return [{dropdownsValue: i}, {
                getFieldOptionsByOrderIndex: function (t, n) {
                    return function t(e, n) {
                        if (0 === e.length) return n.map((function (t) {
                            return t.name
                        }));
                        if (1 === e.length) {
                            var r = !0, a = !1, c = void 0;
                            try {
                                for (var o, i = n[Symbol.iterator](); !(r = (o = i.next()).done); r = !0) {
                                    var u = o.value;
                                    if (u.name === e[0] && u.children) return u.children.map((function (t) {
                                        return t.name
                                    }))
                                }
                            } catch (b) {
                                a = !0, c = b
                            } finally {
                                try {
                                    r || null == i.return || i.return()
                                } finally {
                                    if (a) throw c
                                }
                            }
                        }
                        var s = !0, l = !1, d = void 0;
                        try {
                            for (var p, m = n[Symbol.iterator](); !(s = (p = m.next()).done); s = !0) {
                                var f = p.value;
                                if (f.name === e[0] && f.children) return t(e.slice(1), f.children)
                            }
                        } catch (b) {
                            l = !0, d = b
                        } finally {
                            try {
                                s || null == m.return || m.return()
                            } finally {
                                if (l) throw d
                            }
                        }
                        return []
                    }(t.slice(0, n), e.data)
                }, updateFiledValue: s
            }]
        }

        function qc() {
            var t = Object(k.a)(["\n          width: 100%;\n          display: grid;\n          grid-template-columns: minmax(0, 230px) minmax(0, 230px) minmax(\n              0,\n              230px\n            );\n          gap: 10px;\n          align-items: end;\n\n          @media (max-width: 928px) {\n            grid-template-columns: minmax(0, 416px) minmax(0, 416px);\n          }\n\n          @media (max-width: 600px) {\n            grid-template-columns: minmax(0, 506px);\n          }\n        "]);
            return qc = function () {
                return t
            }, t
        }

        var Xc = {titles: [], placeholders: [], data: []}, Qc = Object(p.memo)((function () {
            var t = Object(i.c)(), e = t.data.nested_dropdowns, n = t.subjects, r = Object(v.i)(),
                a = n.find((function (t) {
                    return t.ID === r
                })), c = a ? a.sn : null, o = a && a.extras && a.extras.use_general_source, u = Xc;
            e && (c || 0 === c) && (u = o && "undefined" !== typeof e.general ? e.general : e[c]);
            var s = Zc(r, u), l = Object(d.a)(s, 2), p = l[0].dropdownsValue, f = void 0 === p ? [] : p, b = l[1],
                g = b.getFieldOptionsByOrderIndex, h = void 0 === g ? function () {
                } : g, O = b.updateFiledValue, y = void 0 === O ? function () {
                } : O;
            return u ? m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {className: Object(N.a)(qc())}, u && u.titles.map((function (t, e) {
                return m.a.createElement(pr, {
                    key: "".concat(t, "-").concat(e),
                    title: t,
                    value: f[e] || "",
                    handleChange: function (t) {
                        return y(e, t)
                    },
                    placeholder: u.placeholders[e],
                    options: h(f, e) || [],
                    disabled: 0 !== e && !f[e - 1]
                })
            })))) : null
        }));
        var Kc = {
            TXTSHORT: br,
            TXTLONG: hr,
            DIGITINPUT: xr,
            DIGITSLIDE: Sr,
            ITEMSORT: xc,
            RATINGBAR: Rr,
            FILEUPLOAD: aa,
            QUOTE: ua,
            STATEMENT: sa,
            DATEPICKER: Ta,
            DIVIDER: Pa,
            NEST: Lc,
            CHOICEONE: Gc,
            CHOICEMULTI: Wc,
            PICKFROM: Wc,
            NESTED_DROPDOWN: Object(p.memo)((function () {
                return Object(Ue.useAutoFocusOnDidMount)(), m.a.createElement(m.a.Fragment, null, m.a.createElement(In, null), m.a.createElement(Vn, null), m.a.createElement(De, null, m.a.createElement(Bn, null, m.a.createElement(Fn, null)), m.a.createElement(Ae, null, m.a.createElement(Le, null), m.a.createElement(He, null, m.a.createElement(Be, null)), m.a.createElement(Fe, null), m.a.createElement(Se, null, m.a.createElement(Qc, null)))))
            })),
            ADVANCED_SELECTION_BASED: Wc
        };
        var $c = Object(p.memo)((function (t) {
            var e = t.id;
            return m.a.createElement(v.b.Provider, {value: e}, m.a.createElement(En, null, (function (t) {
                var e = Kc[t];
                return e && m.a.createElement(e, null)
            })))
        }), (function (t, e) {
            return t.id === e.id
        })), to = Object(N.a)("\n\twidth: 100%;\n\ttext-align: center;\n\tmargin: 10px auto 30px auto;\n");

        function eo(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        var no = Object(p.memo)((function () {
            var t = Object(i.c)().wording, e = y.a.useGoPage(), n = y.a.useGoPageStatus(), r = Object(d.a)(n, 1)[0];
            return m.a.createElement("div", {className: to}, m.a.createElement(D.c, Object.assign({
                color: "primary",
                disabled: r
            }, function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? eo(n, !0).forEach((function (e) {
                        Object(ee.a)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : eo(n).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }({}, o.H.isIOS && {
                onTouchEnd: function () {
                    e()
                }
            }, {}, !o.H.isIOS && {
                onClick: function () {
                    e()
                }
            })), t.common.action.next_page))
        })), ro = Object(q.y)([["subjects", function (t, e) {
            var n = Object(d.a)(e, 2), r = n[0], a = n[1];
            return [!r && "\n\t\t\tmargin-top: ".concat(20, "px;\n\t\t"), r && "\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t\theight: calc(100% - ".concat(30 * a, "px);\n\t\t")]
        }]]);

        function ao(t) {
            var e = Object(d.a)(t, 2);
            return (e[0] ? 1 : 0) + (e[1] ? 1 : 0)
        }

        var co = function (t) {
            return {list: t.pages[t.current], breadcrumbCount: ao(t.breadcrumb)}
        }, oo = function (t, e) {
            return t.list === e.list && t.breadcrumbCount === e.breadcrumbCount
        };
        var io = Object(p.memo)((function () {
                var t = Object(v.c)(), e = Object(p.useMemo)((function () {
                        return {
                            multiplePages: t.getSurveyData().multiplePages,
                            singleSubjectPerPage: t.isSingleSubjectPerPage()
                        }
                    }), [t]), n = e.multiplePages, r = e.singleSubjectPerPage, a = Object(v.e)(co, oo), c = a.list,
                    o = a.breadcrumbCount, i = ro([r, o]);
                return c ? m.a.createElement("div", {className: i.subjects, "aria-label": "subjects"}, c.map((function (t) {
                    return m.a.createElement($c, {key: t, id: t})
                })), n && m.a.createElement(no, null)) : null
            })),
            uo = Object(q.y)([["error", "\n\t\tmargin-bottom: 20px;\n\t"], ["reCAPTCHA", "\n    margin-bottom: 30px;\n    min-height:90px;\n\n    & div, & iframe {\n      min-height:90px;\n    }\n\t"]]);
        var so = function (t) {
            return t.message.error.type
        };

        function lo() {
            var t = Object(v.c)(), e = Object(v.g)(so), n = Object(i.c)().wording, r = Object(p.useRef)(null),
                a = function (t, e) {
                    return "RE_CAPTCHA_REQUIRED" === t ? e.module.re_captcha.error.required : "RE_CAPTCHA_ERROR" === t ? e.module.re_captcha.error.exception : "RE_CAPTCHA_EXPIRED" === t ? e.module.re_captcha.error.expired : void 0
                }(e, n), c = uo();
            return Object(p.useEffect)((function () {
                var e = window.grecaptcha.render(r.current, {
                    sitekey: o.u, theme: "light", callback: function (e) {
                        return t.setReCaptcha({token: e})
                    }, "error-callback": function () {
                        return t.setReCaptcha({error: "ERROR"})
                    }, "expired-callback": function () {
                        return t.setReCaptcha({error: "EXPIRED"})
                    }
                });
                return function () {
                    window.grecaptcha.reset(e)
                }
            }), [t]), m.a.createElement(m.a.Fragment, null, a && m.a.createElement(q.g, {
                className: c.error,
                color: "error"
            }, a), m.a.createElement("div", {ref: r, className: c.reCAPTCHA}))
        }

        function po() {
            var t = Object(k.a)(["\n              margin-top: 38px;\n              color: ", ";\n            "]);
            return po = function () {
                return t
            }, t
        }

        function mo() {
            var t = Object(k.a)(["\n            z-index: 5;\n            background: white;\n            display: flex;\n            flex-direction: column;\n          "]);
            return mo = function () {
                return t
            }, t
        }

        function fo(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        var bo = q.i.Backdrop, vo = q.i.CircularProgress, go = q.i.Typography, ho = q.i.ThemeProvider;
        var Oo = function (t) {
            var e = t.className, n = t.label, r = Object(i.c)().wording, a = q.i.useMUITheme(), c = Object(y.h)(),
                u = c.onSubmit, s = c.disabled, l = c.posting, d = c.redirection;
            return c.showButton ? m.a.createElement(D.c, Object.assign({
                className: e,
                color: "primary",
                disabled: s,
                loading: l,
                "data-qa": "submit"
            }, function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? fo(n, !0).forEach((function (e) {
                        Object(ee.a)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : fo(n).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }({}, o.H.isIOS && {
                onTouchEnd: function () {
                    u()
                }
            }, {}, !o.H.isIOS && {
                onClick: function () {
                    u()
                }
            })), n) : d ? m.a.createElement(ho, null, m.a.createElement(bo, {
                open: !0,
                className: Object(N.a)(mo())
            }, m.a.createElement(vo, {color: "inherit", thickness: 5}), m.a.createElement(go, {
                variant: "h5",
                align: "center",
                className: Object(N.a)(po(), a.palette.grey[600])
            }, r.common.info.redirecting))) : null
        }, yo = Object(q.y)([["previewModal", function (t) {
            return "\n\t\twidth: 95vw;\n\t\theight: 95%;\n\t\tpadding: 20px;\n\t\tbox-sizing: border-box;\n\t\toverflow: auto;\n\n\t\t& > header {\n\t\t\tborder-bottom: 4px solid ".concat(t.color.text.HB, ";\n\t\t\tpadding-bottom: 20px;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t& > main {\n\t\t\tmargin-top: 20px;\n\t\t}\n\n\t\t& > footer {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\twidth: 100%;\n\t\t\tmax-width: 480px;\n\t\t\tmargin: 40px auto 20px auto;\n\t\t}\n\t")
        }], ["previewItem", function (t, e) {
            var n = Object(d.a)(e, 1)[0];
            return "\n    border-bottom: 1px solid ".concat(t.color.text.HB, ";\n\t\tpadding: 8px 6px;\n\t\ttransition: background-color 0.3s ease;\n\t\tcursor: ").concat(n ? "pointer" : "not-allowed", ";\n\n\t\t&:hover {\n\t\t\tbackground-color: ").concat(t.color.text.HB, ";\n\t\t}\n\t")
        }], ["previewItemAnswerContainer", "\n\t\tmargin-top: 8px;\n\t\tpadding-left: 10px;\n\t\tmin-height: 10px;\n\t"], ["action", "\n\t\twidth: 45%;\n\t"]]);
        var jo = Object(p.memo)((function (t) {
            var e = t.open, n = t.data, r = t.setOpen, a = Object(v.c)(), c = Object(i.c)().wording,
                u = yo([n.editable]);
            return Object(p.useEffect)((function () {
                e && o.w && window.parent.postMessage({type: "OPEN_PREVIEW_MODAL"}, "*")
            }), [e]), e ? m.a.createElement(D.k, {
                className: u.previewModal, onOpen: function () {
                    document.body.style.overflowY = "hidden"
                }, onClose: function () {
                    document.body.style.overflowY = ""
                }
            }, m.a.createElement("header", null, m.a.createElement(q.h, {
                variant: "h4",
                color: "text.B6",
                gutterBottom: !0
            }, c.common.preview_answer.title), m.a.createElement(q.h, {
                variant: "h6",
                color: "text.B4"
            }, c.common.preview_answer.subtitle)), m.a.createElement("div", null, n.preview.map((function (t) {
                return m.a.createElement("div", {
                    key: t.id, className: u.previewItem, onClick: function () {
                        if (n.editable) {
                            r(!1), a.goPage(t.page);
                            var e = a.getSubjectData(t.id);
                            setTimeout((function () {
                                return Object(Ue.scrollToSubject)(t.id, e)
                            }), 250)
                        }
                    }
                }, m.a.createElement(q.h, {
                    variant: "h6",
                    color: "text.B6"
                }, t.text), m.a.createElement("div", {className: u.previewItemAnswerContainer}, t.answer && m.a.createElement(q.h, {
                    variant: "div",
                    color: "text.B5"
                }, t.answer)))
            }))), m.a.createElement("footer", null, m.a.createElement(D.c, {
                className: u.action, onClick: function () {
                    return r(!1)
                }
            }, c.common.preview_answer.action.cancel), m.a.createElement(Oo, {
                className: u.action,
                label: c.common.preview_answer.action.confirm
            }))) : null
        }));

        function xo(t) {
            var e = t.className, n = Object(p.useState)(!1), r = Object(d.a)(n, 2), a = r[0], c = r[1],
                o = Object(y.i)(c), u = Object(d.a)(o, 3), s = u[0], l = u[1], f = u[2], b = Object(i.c)().wording;
            return m.a.createElement(m.a.Fragment, null, m.a.createElement(jo, {
                data: f,
                open: a,
                setOpen: c
            }), m.a.createElement(D.c, {
                className: e,
                color: "primary",
                disabled: l,
                onClick: s
            }, b.common.action.submit))
        }

        var wo = Object(N.a)("\n\twidth: 100%;\n");

        function Eo() {
            var t = Object(v.c)(), e = Object(p.useMemo)((function () {
                return t.getSurveyData().preview_answer
            }), [t]), n = Object(i.c)().wording;
            return e ? m.a.createElement(xo, {className: wo}) : m.a.createElement(Oo, {
                className: wo,
                label: n.common.action.submit
            })
        }

        var ko = Object(q.y)([["submitContainer", function (t, e) {
            return ["\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tmargin: 10px auto 30px auto;\n\t\t\twidth: 300px;\n\n\t\t\t&:first-of-type {\n\t\t\t\tmargin: 0 auto;\n\t\t\t}\n\t\t", Object(d.a)(e, 1)[0] && "\n\t\t\theight: 100%;\n\t\t"]
        }], ["info", "\n\t\tmargin-bottom: 60px;\n\t"]]);
        var No = Object(p.memo)((function () {
                var t = Object(v.c)(), e = Object(p.useMemo)((function () {
                    var e = t.getSurveyData();
                    return {multiplePages: e.multiplePages, reCaptcha: e.re_captcha}
                }), [t]), n = e.multiplePages, r = e.reCaptcha, a = Object(i.c)().wording, c = ko([n]);
                return m.a.createElement("div", {
                    className: c.submitContainer,
                    "aria-label": "submit"
                }, n && o.p && m.a.createElement("div", {className: c.info}, a.common.info.finished), r && m.a.createElement(lo, null), m.a.createElement(Eo, null))
            })),
            So = Object(q.y)([["startContainer", "\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tmargin: 40px auto 30px auto;\n\t"], ["start", "\n\t\twidth: 300px;\n\t"]]);

        function Co() {
            var t = Object(v.c)(), e = Object(p.useCallback)((function () {
                return t.goNextPage()
            }), [t]), n = Object(i.c)().wording, r = So();
            return m.a.createElement("div", {className: r.startContainer}, m.a.createElement(D.c, {
                className: r.start,
                color: "primary",
                onClick: e,
                "data-qa": "begin"
            }, n.common.action.begin))
        }

        var Ao = Object(p.memo)((function () {
            var t = Object(v.c)(), e = Object(p.useMemo)((function () {
                    var e = t.getSurveyData();
                    return {
                        title: e.title,
                        title_alignment: e.title_alignment,
                        welcomebanner: e.welcomebanner,
                        welcometext: e.welcometext,
                        multiplePages: e.multiplePages
                    }
                }), [t]), n = e.title, r = e.title_alignment, a = e.welcomebanner, c = e.welcometext, o = e.multiplePages,
                i = a ? m.a.createElement(D.b, {banner: a, limitType: "max", limitSize: 400}) : void 0,
                u = n ? m.a.createElement(D.i, {
                    title: Object(B.decode)(n),
                    align: r
                }, c ? m.a.createElement(D.m, {html: c}) : void 0) : void 0;
            return m.a.createElement(D.f, {banner: i, intro: u}, o && m.a.createElement(Co, null))
        }));

        function Io() {
            var t = Object(k.a)(["\n  100% {\n    transform: rotate(360deg);\n  }\n"]);
            return Io = function () {
                return t
            }, t
        }

        var Do = Object(N.d)(Io()), _o = Object(q.y)([["iconSpinnerWrapper", function (t) {
            return "\n          color:  ".concat(t.color.primary.default, ";\n          width: 24px;\n          height: 24px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          animation: ").concat(Do, " 1s linear infinite;\n      ")
        }]]), To = function (t) {
            var e = t.open, n = t.msg, r = t.title, a = t.minDelayTime, c = Object(p.useState)(!1),
                o = Object(d.a)(c, 2), i = o[0], u = o[1], s = Object(p.useCallback)((function () {
                    u(!1)
                }), []);
            Object(p.useEffect)((function () {
                e && a && (u(!0), setTimeout(s, a))
            }), [e, a, s]);
            var l = _o();
            return m.a.createElement(q.f, {
                anchorOrigin: {vertical: "top", horizontal: "center"},
                open: e || i,
                ClickAwayListenerProps: {mouseEvent: !1, touchEvent: !1},
                transitionDirection: "down",
                message: n,
                title: r,
                showSemanticIcon: !1,
                MessageIcon: m.a.createElement("div", {className: l.iconSpinnerWrapper}, m.a.createElement(q.b, {icon: q.z}))
            })
        }, Lo = function (t) {
            return t.current
        };
        var Po = Object(p.memo)((function () {
                var t = Object(v.c)(), e = Object(p.useMemo)((function () {
                        var e = t.getSurveyData();
                        return {
                            multiplePages: e.multiplePages,
                            manualPages: e.manualPages,
                            hidden_submit_enable: e.hidden_submit_enable
                        }
                    }), [t]), n = e.multiplePages, r = e.manualPages, a = e.hidden_submit_enable, c = Object(v.e)(Lo),
                    u = n && isNaN(c), s = n && c === 1 / 0, l = !(u || s) && n && !r, d = u || !n, f = !(u || s) || !n,
                    b = (s || !n) && !(o.v && a), g = Object(y.g)(), h = Object(i.c)().wording;
                return Object(p.useLayoutEffect)((function () {
                    o.H.isIOSVersionBelow12 && o.w ? document.querySelector("#iOS12IframeHackWrapper").scrollTo(0, 0) : window.scrollTo(0, 0)
                }), [c]), Object(p.useEffect)((function () {
                    o.w && n && window.parent.postMessage({type: "GO_PAGE", payload: {current: c}}, "*")
                }), [c]), m.a.createElement(w.a, {className: Ee}, m.a.createElement(E.a, {
                    key: c,
                    classNames: I,
                    timeout: 250
                }, m.a.createElement("div", {className: ke, "aria-label": "survey content"}, m.a.createElement(To, {
                    open: g,
                    msg: h.common.action.check_repeat,
                    title: "",
                    minDelayTime: 500
                }), l && m.a.createElement(we, null), d && m.a.createElement(Ao, null), f && m.a.createElement(io, null), b && m.a.createElement(No, null))))
            })),
            Ro = Object(q.y)([["pagination", "\t:lang(ar){\n\t\t\ttransform: scaleX(-1);\n\t\t}\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t"]]),
            Mo = Object(q.y)([["arrow", function (t, e) {
                var n = Object(d.a)(e, 1)[0];
                return ["\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 46px;\n\t\t\theight: 36px;\n\t\t\tfont-size: 36px;\n\t\t\tline-height: 36px;\n\t\t\tbackground-color: ".concat(t.color.text.F, ";\n\t\t\tborder-radius: 4px;\n\t\t\tcolor: ").concat(t.color.primary.default, ";\n\t\t\tmargin: 0 4px;\n\t\t\ttext-align: center;\n\t\t\tvertical-align: middle;\n\t\t\ttransition: background-color 0.3s ease, opacity 0.3s ease;\n\t\t\tcursor: pointer;\n\t\t"), !n && "\n\t\t\t&:hover,\n\t\t\t&:focus,\n\t\t\t&:active {\n\t\t\t\tbackground-color: ".concat(t.survey.color.light, ";\n\t\t\t}\n\t\t"), n && "\n\t\t\topacity: 0.4;\n\t\t\tcursor: not-allowed;\n\t\t"]
            }]]);

        function Fo(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Uo(t, e) {
            return function () {
                var n = e.useGoPage(), r = e.useGoPageStatus(), a = Object(d.a)(r, 2), c = a[0], i = a[1], u = Mo([c]);
                if (!i) return null;
                return m.a.createElement("div", Object.assign({
                    className: u.arrow,
                    "data-qa": t === q.j ? "prev" : "next"
                }, function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Fo(n, !0).forEach((function (e) {
                            Object(ee.a)(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Fo(n).forEach((function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({}, o.H.isIOS && !c && {
                    onTouchEnd: function () {
                        n()
                    }
                }, {}, !o.H.isIOS && !c && {
                    onClick: function () {
                        n()
                    }
                })), m.a.createElement(q.b, {icon: t}))
            }
        }

        var zo = Uo(q.j, y.c), Go = Uo(q.k, y.a);

        function Bo() {
            var t = Ro();
            return m.a.createElement("div", {className: t.pagination}, m.a.createElement(zo, null), m.a.createElement(Go, null))
        }

        var Yo = Object(q.y)([["footer", function (t) {
            return "\n\t\tposition: fixed;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 60px;\n\t\tfont-size: 12px;\n\t\tbackground-color: ".concat(t.color.text.white, ";\n\t\tpadding: 10px 15px;\n\t\tbox-shadow: ").concat(t.survey.color.gray, " 0 -1px 2px 0;\n\t\tbox-sizing: border-box;\n\t\tz-index: 10;\n\t")
        }], ["inner", function (t, e) {
            var n = Object(d.a)(e, 1)[0];
            return "\n\t\tdisplay: flex;\n\t\tjustify-content: ".concat(n ? "space-between" : "flex-end", ";\n\t\talign-items: center;\n\t\twidth: 100%;\n\t\tmax-width: ").concat(800, "px;\n\t\tmargin: 0 auto;\n\t\tpadding: 0;\n\t\theight: 100%;\n\t")
        }], ["footerRight", "\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t"]]);

        function Ho() {
            var t = Object(k.a)(["\n  width: 320px;\n\n  @media (max-width: 800px) {\n    width: 160px;\n  }\n"]);
            return Ho = function () {
                return t
            }, t
        }

        var Vo = Object(N.a)(Ho()), Wo = function (t) {
            return t.progress
        };
        var Jo = function () {
                var t = Object(v.e)(Wo);
                return m.a.createElement("div", {className: Vo}, m.a.createElement(D.l, {percentage: t}))
            }, Zo = n(540), qo = n.n(Zo), Xo = Object(q.y)([["tempSaveButton", function (t, e) {
                return ["\n      padding: 3px 8px;\n      color: #aaaaaa;\n      font-size: 14px;\n      position: relative;\n      display: flex;\n      align-items: center;\n\n      span {\n        margin-left: 3px;\n      }\n\n      & {\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -o-user-select: none;\n        user-select: none;\n      }\n\n      &:hover {\n        cursor: pointer;\n        background-color: #eeeeee;\n        border-radius: 16px;\n      }\n\n      &:active {\n        background-color: #d1f0e5;\n        color: #3dba90;\n      }\n\n      @media (max-width: 720px) {\n        max-height: calc(100% - 128px);\n\n        & > .save-label {\n          display: none;\n        }\n      }\n    ", Object(d.a)(e, 1)[0] && "\n      & > .save-icon {\n        opacity: 0.4;\n      }\n\n      & > .save-label {\n        opacity: 0.4;\n      }\n    "]
            }], ["modal", "\n      width: 320px;\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      border-radius: 4px;\n      overflow: hidden;\n\n      & > main {\n        margin-top: 20px;\n      }\n\n      @media (max-width: 720px) {\n        width: 100%;\n        height: 100%;\n      }\n    "], ["header", function (t) {
                return "\n      height: 32px;\n      padding: 8px 24px;\n      background-color: ".concat(t.color.primary.default, ";\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n\n      @media (max-width: 720px) {\n        height: 56px;\n      }\n    ")
            }], ["cross", "\n      position: relative;\n      width: 30px;\n      height: 30px;\n      border-radius: 15px;\n\n      &::before,\n      &::after {\n        position: absolute;\n        content: '';\n        width: 40%;\n        height: 2px;\n        background-color: #fff;\n        top: 50%;\n        left: 30%;\n      }\n\n      &::before {\n        transform: rotate(45deg);\n      }\n\n      &::after {\n        transform: rotate(-45deg);\n      }\n\n      &:hover {\n        cursor: pointer;\n      }\n\n      &:active {\n        background: linear-gradient(20deg,rgba(101,230,190,0.8),rgb(61,186,144,1))\n      }\n    "], ["content", "\n      padding: 8px 24px;\n      font-size: 14px;\n      color: #454545;\n      flex: 1 1 auto;\n      line-height: 1.5;\n    "], ["urlContainer", "\n      display: flex;\n\n      & > input {\n        border-radius: 4px;\n        border: 1px solid #eeeeee;\n        padding-left: 8px;\n        padding-right: 8px;\n        margin-right: 8px;\n        flex: 1;\n        cursor: text;\n        color: #3dba90;\n      }\n\n      & > input:focus {\n        outline: none;\n      }\n\n      & > .copy-btn {\n        font-size: 14px;\n        width: 60px;\n      }\n\n      @media (max-width: 720px) {\n        & > .copy-btn {\n          font-size: 16px;\n          width: 96px;\n        }\n      }\n    "], ["footer", "\n      height: 22px;\n      padding-top: 13px;\n      padding-bottom: 13px;\n      padding-right: 24px;\n      background-color: #fafafa;\n      border-top: 1px solid #eeeeee;\n      text-align: right;\n\n      & > a {\n        text-decoration: none;\n        color: #3dba90;\n        font-size: 14px;\n      }\n\n      @media (max-width: 720px) {\n        padding-bottom: 40px;\n      }\n    "], ["warning", "\n      display: flex;\n      align-items: center;\n      margin-top: 18px;\n      margin-bottom: 18px;\n      font-weight: 500;\n\n      & > svg {\n        margin-right: 5px;\n      }\n\n      & > svg, & > span {\n        color: #f8971d;\n      }\n    "], ["spinContainer", "\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n\n      svg {\n        color: #3DBA90;\n      }\n    "], ["hiddenIframe", "\n      visibility: hidden;\n      position: absolute;\n    "]]),
            Qo = function () {
                var t = Object(i.c)(), e = t.wording, n = t.surveyHash, r = o.j.server, a = Object(v.c)(),
                    c = Object(p.useState)(!1), u = Object(d.a)(c, 2), s = u[0], l = u[1], f = Object(p.useState)(""),
                    b = Object(d.a)(f, 2), g = b[0], h = b[1], O = Object(p.useState)(!1), y = Object(d.a)(O, 2),
                    j = y[0], x = y[1], w = Xo([j]), E = "".concat(r, "/s/").concat(n, "/a/").concat(g),
                    k = function () {
                        var t = Object(J.a)(W.a.mark((function t() {
                            var n, r, c, o;
                            return W.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!j) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        if (x(!0), n = a.getTemporaryAnswers(), r = a.getPostAnswer()) {
                                            t.next = 8;
                                            break
                                        }
                                        return x(!1), t.abrupt("return");
                                    case 8:
                                        return t.prev = 8, c = r.post, t.next = 12, Object(X.B)(n, c);
                                    case 12:
                                        o = t.sent, x(!1), h(o), l(!0), t.next = 22;
                                        break;
                                    case 18:
                                        t.prev = 18, t.t0 = t.catch(8), q.d.error(e.module.temp_answer.modal.try_again_later, {duration: 2e3}), x(!1);
                                    case 22:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, null, [[8, 18]])
                        })));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }(), N = a.getSurveyData().title, S = void 0 === N ? "" : N,
                    C = "subject=".concat(e.module.temp_answer.email.subject),
                    A = "".concat(e.module.temp_answer.email.body.replace("{{subjectTitle}}", S), "\n").concat(E),
                    I = encodeURIComponent(A).replace("%26", "%2526"), _ = "body=".concat(I),
                    T = "".concat("mailto:", "?").concat(C, "&").concat(_);
                return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                    className: w.tempSaveButton,
                    onClick: k
                }, m.a.createElement("svg", {
                    viewBox: "0 0 24 24",
                    width: "24",
                    height: "24",
                    fill: "currentColor",
                    className: "save-icon"
                }, m.a.createElement("path", {d: "M19.967 7.217l-3.184-3.184a1.821 1.821 0 0 0-1.287-.533H5.32A1.821 1.821 0 0 0 3.5 5.321V18.68c0 1.006.815 1.821 1.821 1.821H18.68a1.821 1.821 0 0 0 1.821-1.821V8.504c0-.483-.192-.946-.533-1.287zm-5.538-2.503v3.643H7.143V4.714h7.286zm4.857 13.965a.608.608 0 0 1-.607.607H5.32a.608.608 0 0 1-.607-.607V5.32c0-.334.273-.607.607-.607h.608v3.947c0 .503.407.91.91.91h7.893a.91.91 0 0 0 .91-.91V4.733a.603.603 0 0 1 .283.16l3.183 3.182a.603.603 0 0 1 .178.43v10.174zM12 11.089a3.343 3.343 0 0 0-3.34 3.34A3.343 3.343 0 0 0 12 17.768a3.343 3.343 0 0 0 3.34-3.34A3.343 3.343 0 0 0 12 11.09zm0 5.465a2.127 2.127 0 0 1-2.125-2.125c0-1.172.953-2.125 2.125-2.125 1.172 0 2.125.953 2.125 2.125A2.127 2.127 0 0 1 12 16.554z"})), m.a.createElement("span", {className: "save-label"}, e.common.action.save_temp_answer), j && m.a.createElement("span", {className: w.spinContainer}, m.a.createElement(q.b, {
                    icon: q.z,
                    spin: !0
                }))), s && m.a.createElement(D.k, {
                    className: w.modal, onOpen: function () {
                        document.body.style.overflowY = "hidden"
                    }, onClose: function () {
                        document.body.style.overflowY = ""
                    }
                }, m.a.createElement("header", {className: w.header}, m.a.createElement(q.h, {
                    variant: "h6",
                    color: "text.white"
                }, e.module.temp_answer.modal.title), m.a.createElement("div", {
                    className: w.cross,
                    onClick: function () {
                        return l(!1)
                    }
                })), m.a.createElement("div", {className: w.content}, m.a.createElement("p", null, e.module.temp_answer.modal.content), m.a.createElement("div", {className: w.urlContainer}, m.a.createElement("input", {
                    type: "text",
                    readOnly: !0,
                    value: E
                }), m.a.createElement(qo.a, {
                    text: E, onCopy: function () {
                        q.d.success(e.module.temp_answer.modal.copy_success, {duration: 2e3})
                    }
                }, m.a.createElement(D.c, {
                    className: "copy-btn",
                    color: "primary"
                }, e.module.temp_answer.modal.copy))), m.a.createElement("div", {className: w.warning}, m.a.createElement(q.b, {icon: q.s}), e.module.temp_answer.modal.warning)), m.a.createElement("footer", {className: w.footer}, m.a.createElement("a", {href: T}, e.module.temp_answer.modal.submit))))
            };

        function Ko() {
            var t = Object(k.a)(["\n  width: 1px;\n  background-color: #dfe2ec;\n  align-self: stretch;\n  margin: 0 12px;\n"]);
            return Ko = function () {
                return t
            }, t
        }

        var $o = Object(N.a)(Ko()), ti = Object(p.memo)((function () {
            return m.a.createElement("div", {className: $o})
        })), ei = !1, ni = m.a.lazy((function () {
            return Promise.all([n.e(3), n.e(4)]).then(n.bind(null, 1076))
        }));
        var ri = Object(p.memo)((function () {
            var t = Object(i.c)(), e = t.meta, n = t.data, r = n.temporary_answer_enable, a = n.progress_bar_enable,
                c = void 0 === a || a, u = Object(v.c)(), s = Object(p.useMemo)((function () {
                    return u.getSurveyData()
                }), [u]).multiplePages, l = e && e.language && e.language.language_list_enable,
                d = e && e.language && e.language.language_others, f = ei && l && d && d.length > 0, b = !!c,
                g = Yo([b]);
            return b || s || f ? m.a.createElement("div", {className: g.footer}, m.a.createElement("div", {className: g.inner}, b && m.a.createElement(Jo, null), m.a.createElement("div", {className: g.footerRight}, o.F && 1 === r && m.a.createElement(Qo, null), f && m.a.createElement(p.Suspense, {fallback: ""}, m.a.createElement(ni, null)), s && f && m.a.createElement(ti, null), s && m.a.createElement(Bo, null)))) : null
        })), ai = n(155), ci = n.n(ai), oi = {
            isEnabled: function (t) {
                return Boolean(t.getSurveyData().re_captcha)
            }, initial: function (t) {
                return new Promise((function (e) {
                    if (oi.isEnabled(t)) {
                        ci()("https://www.google.com/recaptcha/api.js?onload=".concat("onReCaptchaLoad", "&render=explicit")), window.onReCaptchaLoad = function () {
                            return e()
                        }
                    } else e()
                }))
            }
        };

        function ii(t) {
            var e = Object(B.decode)(t);
            document.title = o.q.is ? "".concat(e).concat(o.r) : "".concat(e, " \xbb SurveyCake")
        }

        function ui(t) {
            return si.apply(this, arguments)
        }

        function si() {
            return (si = Object(J.a)(W.a.mark((function t(e) {
                return W.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, Promise.all([oi.initial(e)]);
                        case 3:
                            t.next = 8;
                            break;
                        case 5:
                            throw t.prev = 5, t.t0 = t.catch(0), t.t0;
                        case 8:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[0, 5]])
            })))).apply(this, arguments)
        }

        var li = function (t) {
            return t
        };

        function di() {
            var t, e, n = Object(v.c)(), r = Object(p.useMemo)((function () {
                return n.getSurveyData().multiplePages
            }), [n]), a = Object(i.c)(), c = (t = li, Object(v.m)((function (t) {
                return t.getState().logicGroup.context.subjectStates
            }), t, e)), u = a.translation.legaltext || a.data.legaltext;
            Object(y.k)(), Object(y.f)(a);
            var s = a.data.background_image && "/" === a.data.background_image[0] ? "".concat(o.A).concat(a.data.background_image) : a.data.background_image,
                l = m.a.createElement(D.a, {image: s}, m.a.createElement(D.d, null, m.a.createElement(vn.Provider, {value: c}, m.a.createElement(Po, null)), m.a.createElement(D.e, {legalText: u}), m.a.createElement(ri, null)));
            return r ? m.a.createElement(y.c, null, m.a.createElement(y.a, null, l)) : l
        }

        function pi() {
            return function () {
                var t = Object(i.c)(), e = Object(v.c)(), n = Object(u.c)(), r = Object(p.useState)(!1),
                    a = Object(d.a)(r, 2), c = a[0], o = a[1];
                return Object(Z.b)(Object(J.a)(W.a.mark((function r() {
                    var a, c, i, u, s, l, d, p, m, f, b;
                    return W.a.wrap((function (r) {
                        for (; ;) switch (r.prev = r.next) {
                            case 0:
                                return a = t.surveyHash, c = t.tempAnswerHash, i = t.data, u = t.answers, s = t.meta, l = t.subjects, d = t.query, p = t.referral, m = t.serverTime, f = t.translation, b = t.logicJSON, ii(i.title), r.prev = 2, r.next = 5, e.init({
                                    surveyHash: a,
                                    answerHash: c,
                                    data: i,
                                    meta: s,
                                    subjects: l,
                                    query: d,
                                    referral: p,
                                    initime: m,
                                    resolver: {count: X.j},
                                    translation: f,
                                    answers: u,
                                    logicGroup: b
                                });
                            case 5:
                                return r.next = 7, ui(e);
                            case 7:
                                o(!0), Kt(), n.trackSurveyRendered("index"), r.next = 15;
                                break;
                            case 12:
                                throw r.prev = 12, r.t0 = r.catch(2), r.t0;
                            case 15:
                            case"end":
                                return r.stop()
                        }
                    }), r, null, [[2, 12]])
                })))), c
            }() ? m.a.createElement(y.b, null, m.a.createElement(di, null)) : null
        }

        var mi = {
                pageIf: function (t, e) {
                    return !e && "index" === t
                }, render: function () {
                    return m.a.createElement(pi, null)
                }
            },
            fi = Object(q.y)([["completed", "\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t"], ["completedIcon", function (t) {
                return "\n\t\tcolor: ".concat(t.color.primary.default, ";\n\t\tmargin-bottom: 20px;\n\t")
            }]]);
        var bi = function () {
            var t = Object(i.c)().wording, e = fi();
            return m.a.createElement("div", {className: e.completed}, m.a.createElement(q.b, {
                className: e.completedIcon,
                size: 2,
                icon: q.m
            }), m.a.createElement("div", null, t.module.third_party_login.completed))
        }, vi = n(216), gi = n(95);
        var hi = Object(q.y)([["facebook", "\n\t\twidth: 100%;\n\t\tbackground-color: ".concat("#3b5998", ";\n\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: ").concat("#3b5998", ";\n\t\t}\n\n\t\t&:disabled {\n\t\t\tbackground-color: ").concat("#3b5998", ";\n\t\t\topacity: 0.6;\n\t\t}\n\t")], ["facebookIcon", "\n\t\twidth: ".concat(14, "px;\n\t\theight: ").concat(14, "px;\n\t\tmargin-right: 5px;\n\t")]]);
        var Oi = function (t) {
                var e = t.setIsCompleted, n = Object(i.c)(), r = Object(v.c)(), a = n.wording, c = function () {
                        var t = Object(p.useState)(!1), e = Object(d.a)(t, 2), n = e[0], r = e[1];
                        return Object(Z.b)((function () {
                            ci()("//connect.facebook.net/zh_TW/sdk.js?SurveyCake", (function (t) {
                                t || (FB.init({appId: o.D, cookie: !0, xfbml: !0, version: o.s}), r(!0))
                            }))
                        })), n
                    }(), u = [n, r, h.PageService.useSetPage(), g.b.useSetException(), e],
                    s = Object(p.useCallback)((function () {
                        return function (t) {
                            var e = Object(d.a)(t, 1)[0];
                            FB.login((function (n) {
                                var r = n.status, a = n.authResponse, c = a && a.accessToken || "";
                                if ("connected" === r && c) Object(vi.a)(Object(J.a)(W.a.mark((function t() {
                                    return W.a.wrap((function (t) {
                                        for (; ;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, Object(X.g)(e.surveyHash, c);
                                            case 2:
                                                return t.abrupt("return", t.sent);
                                            case 3:
                                            case"end":
                                                return t.stop()
                                        }
                                    }), t)
                                }))), t); else {
                                    var o = e.wording;
                                    Object(gi.b)(o)
                                }
                            }))
                        }(u)
                    }), u), l = hi();
                return m.a.createElement(D.c, {
                    className: l.facebook,
                    loading: !c,
                    onClick: s
                }, m.a.createElement("span", null, m.a.createElement("svg", {
                    className: l.facebookIcon,
                    viewBox: "0 0 320 512",
                    fill: "currentColor"
                }, m.a.createElement("path", {d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})), a.module.third_party_login.facebook))
            }, yi = n(237),
            ji = Object(q.y)([["Contaniner", "\n\ttext-align: center;\n\tborder-radius: 4px;\n\t\tbackground-color: white;\n\t\tpadding: 30px;\n\tmin-width: 0;\n\tmax-width: 80%;\n\t\t"], ["Login_Button", function (t) {
                return "\n\t\tdisplay: inline-block;\n\t  \tmargin-top: 20px;\n\t  \twidth: 100%;\n\t  "
            }], ["label", "\t\n\t\twidth: 100%;\n\t\tposition: relative;\n\t\tdisplay: block;\n\t\tmargin: 1em 0;\n\t\ttext-align: left;"], ["labelText", "\n\t\tdisplay: inline-block;\n\t\tfont-size: 0.9em;\n\t\tcolor: var(--darkGray);\n\t\tmargin: 0 0 0.5em 0;\n\t"], ["inputContainer", function (t) {
                return "\n\t\twidth: 100%;\n\t\theight: 44px;\n\t"
            }], ["input", function (t) {
                return "\t\n\t  \tpadding-left: 10px;\n\t  \tpadding-right: 10px;\n\t\twidth: calc(100% - 20px);\n\t\theight: 100%;\n\t\tborder-radius: 4px;\n\t\tborder:2px solid ".concat(t.color.text.B, ";\n\t")
            }]]), xi = function (t, e) {
                if (!t.getElementById(e)) {
                    var n = t.getElementsByTagName("script")[0], r = t.createElement("script"),
                        a = t.getElementsByTagName("head")[0];
                    r.id = e, r.src = "https://www.recaptcha.net/recaptcha/api.js?render=".concat(e), n.parentNode ? n.parentNode.insertBefore(r, n) : a.appendChild(r)
                }
            }, wi = n(68), Ei = n.n(wi);
        var ki = function (t) {
                var e = t.setIsCompleted, n = t.setNotAllowed, r = Object(p.useState)(), a = Object(d.a)(r, 2), c = a[0],
                    u = a[1], s = Object(p.useState)(), l = Object(d.a)(s, 2), f = l[0], b = l[1], O = Object(i.c)(),
                    y = Object(v.c)(), j = O.wording, x = h.PageService.useSetPage(), w = g.b.useSetException(),
                    E = [O, y, x, w, e, n];
                o.k && xi(document, o.b);
                var k = function () {
                    var t = Object(J.a)(W.a.mark((function t() {
                        var r, a;
                        return W.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!(r = Ei.a.get("mbr_id"))) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 4, Object(yi.AlreadySubmit)(O.surveyHash, r);
                                case 4:
                                    "ALREADY_DONE" === (a = t.sent) ? e(!0) : "NOT_ALLOWED" === a ? n(!0) : (y.setThirdPartyLogin(r), O.handleStageFinished(x, w)), t.next = 9;
                                    break;
                                case 8:
                                    o.a && Object(yi.ActiveDirectoryAutoLogin)(E);
                                case 9:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function () {
                        return t.apply(this, arguments)
                    }
                }();
                Object(p.useEffect)((function () {
                    k()
                }), []);
                var N = Object(p.useCallback)((function () {
                    return Object(yi.ActiveDirectoryLogin)(E, c, f, o.b)
                }), [E, c, f]), S = ji();
                return m.a.createElement("div", {
                    className: S.Contaniner, onKeyPress: function (t) {
                        "Enter" === t.key && N()
                    }
                }, m.a.createElement("span", null, j.module.login_ad.title), m.a.createElement("label", {className: S.label}, m.a.createElement("span", {className: S.labelText}, j.module.login_ad.account), m.a.createElement("div", {className: S.inputContainer}, m.a.createElement("input", {
                    className: S.input,
                    onChange: function (t) {
                        u(t.target.value)
                    }
                }))), m.a.createElement("label", {className: S.label}, m.a.createElement("span", {className: S.labelText}, j.module.login_ad.password), m.a.createElement("div", {className: S.inputContainer}, m.a.createElement("input", {
                    className: S.input,
                    onChange: function (t) {
                        b(t.target.value)
                    },
                    type: "password",
                    autoComplete: "off"
                }))), m.a.createElement(D.c, {
                    color: "primary",
                    className: S.Login_Button,
                    onClick: N
                }, j.module.login_ad.button))
            },
            Ni = Object(q.y)([["thirdPartyLogin", "\n\t\tdisplay: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 90%;\n    max-width: 460px;\n    height: 100vh;\n    margin: 0 auto;\n\t"], ["thirdParties", "\n\t\twidth: 100%;\n\t\tmargin-top: 30px;\n\t"]]);
        var Si = function () {
            var t, e = Object(p.useState)(!1), n = Object(d.a)(e, 2), r = n[0], a = n[1], c = Object(p.useState)(!1),
                i = Object(d.a)(c, 2), u = i[0], s = i[1], l = Ni(), f = g.b.useSetException();
            return o.E && "facebook" === o.E ? t = r ? m.a.createElement(bi, null) : m.a.createElement(Oi, {setIsCompleted: a}) : r ? t = m.a.createElement(bi, null) : u ? f(new g.a("NOT_ALLOWED")) : t = m.a.createElement(ki, {
                setIsCompleted: a,
                setNotAllowed: s
            }), $t(), m.a.createElement("div", {className: l.thirdPartyLogin}, o.E && "facebook" === o.E && m.a.createElement(D.j, null), m.a.createElement("div", {className: l.thirdParties}, t))
        }, Ci = [fe, ye, {
            pageIf: function (t, e) {
                return !e && "thirdpartylogin" === t && o.I && ("facebook" === o.E || "ad" === o.E)
            }, render: function () {
                return m.a.createElement(Si, null)
            }
        }, mi, Xt];
        var Ai = function () {
            var t = h.PageService.usePage(), e = t.page, n = t.ctypSn, r = g.b.useException();
            return m.a.createElement(w.a, null, m.a.createElement(E.a, {
                key: r ? r.message : e,
                classNames: I,
                timeout: 250
            }, function (t, e, n, r) {
                var a, c = !0, o = !1, i = void 0;
                try {
                    for (var u, s = Ci[Symbol.iterator](); !(c = (u = s.next()).done); c = !0) {
                        var l = u.value, d = l.pageIf, p = l.render;
                        if (d(t, e)) {
                            a = p(t, e, n, r);
                            break
                        }
                    }
                } catch (m) {
                    o = !0, i = m
                } finally {
                    try {
                        c || null == s.return || s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return a
            }(e, r, n)))
        };

        function Ii() {
            var t = Object(k.a)(["\n      body {\n        color: ", ";\n        background-color: ", ";\n      }\n    "]);
            return Ii = function () {
                return t
            }, t
        }

        var Di = function () {
            var t = Object(i.c)(), e = t.theme, n = t.meta, r = Object(u.c)();
            return m.a.useEffect((function () {
                if (n && !1 === n.pro) {
                    j({id: "ret-js-template", innerHTML: x});
                    var t = 0, e = setInterval((function () {
                        if (window.RET && window.RET.cookieObj && window.RET.cookieObj.getLocalCookie("__retuid")) {
                            var n = window.RET.cookieObj.getLocalCookie("__retuid");
                            r.trackDentsu(n), console.log("--- Dentsu ID has found: ---", n), clearInterval(e)
                        }
                        (t += 1) >= 30 && (console.log("--- Dentsu ID not found --- "), clearInterval(e))
                    }), 1e3);
                    return function () {
                        clearInterval(e)
                    }
                }
            }), [n, r]), Object(y.j)(), function (t) {
                Object(Z.b)((function () {
                    Object(N.c)(Ii(), t.survey.color.default, t.survey.color.light)
                }))
            }(e), m.a.createElement(O.a.Provider, {value: e}, m.a.createElement(Ai, null))
        };

        function _i() {
            var t = Object(k.a)(["\n\t\t\thtml {\n\t\t\t\toverflow-y: scroll !important;\n\t\t\t\t-webkit-overflow-scrolling: touch !important;\n\t\t\t}\n\n\t\t\tbody, #iOS12IframeHackWrapper {\n\t\t\t\toverflow-y: auto !important;\n\t\t\t\t-webkit-overflow-scrolling: touch !important;\n\t\t\t\tposition: absolute !important;\n\t\t\t\ttop: 0 !important;\n\t\t\t\tleft: 0 !important;\n\t\t\t\tright: 0 !important;\n\t\t\t\tbottom: 0 !important;\n\t\t\t}\n\n\t\t\t#ios-12-iframe-hack-scroll-pos {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 0;\n\t\t\t\theight: 0;\n\t\t\t\tvisibility: hidden;\n\t\t\t}\n\t\t"]);
            return _i = function () {
                return t
            }, t
        }

        (function () {
            if (o.H.isIOSVersionBelow12 && o.w) {
                Object(N.c)(_i());
                var t = document.querySelector("#survey");
                t && t.parentNode && t.parentNode.removeChild(t);
                var e = document.createElement("div");
                e.id = "survey";
                var n = document.createElement("div");
                n.id = "iOS12IframeHackWrapper", n.appendChild(e), document.body.appendChild(n)
            }
        })(), l.a && "/" === window.location.pathname && (window.location.href = "/s/PrwZ2");
        var Ti = new r.b, Li = new i.a(s.b, s.a, s.c), Pi = new u.a(Li, o.t, o.c);
        Pi.trackEnterSurvey(), l.a || window.__REACT_DEVTOOLS_GLOBAL_HOOK__ && "object" === typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ && Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__).forEach((function (t) {
            var e = Object(d.a)(t, 2), n = e[0], r = e[1];
            window.__REACT_DEVTOOLS_GLOBAL_HOOK__[n] = "function" === typeof r ? function () {
            } : null
        })), o.H.isIOS && (c.a.attach(document.body), c.a.prototype.focus = function (t) {
            var e;
            t && (0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.focus(), t.setSelectionRange(e, e)) : t.focus())
        }), function (t) {
            var e = t.infos, n = t.providers, r = e.element, a = Object(d.a)(n, 3), c = a[0], s = a[1], l = a[2];
            if (!o.e || window.location.pathname.startsWith("".concat(o.e))) b.a.render(m.a.createElement(g.b, null, m.a.createElement(h.PageService, null, m.a.createElement(u.b, {tracker: l}, m.a.createElement(v.a.Provider, {value: c}, m.a.createElement(i.b, {surveyConfig: s}, (function (t) {
                return t && m.a.createElement(Di, null)
            })))))), r); else {
                var p = window.location.pathname, f = window.location.search,
                    O = "".concat(window.location.origin).concat(o.e).concat(p).concat(f);
                window.location.href = O
            }
        }({infos: {element: document.getElementById("survey")}, providers: [Ti, Li, Pi]})
    }, 95: function (t, e, n) {
        "use strict";
        n.d(e, "b", (function () {
            return a
        })), n.d(e, "a", (function () {
            return c
        }));
        var r = n(2);

        function a(t) {
            r.d.error(t.module.third_party_login.sign_in_failed, {duration: 2e3})
        }

        function c(t, e) {
            var n;
            n = e ? "AUTH_FAILED" === e ? t.module.login_ad.error.AUTH_FAILED : "NOT_INIT" === e ? t.module.login_ad.error.NOT_INIT : "RECAPTCHA_FAILED" === e ? t.module.login_ad.error.RECAPTCHA_FAILED : t.module.login_ad.error.DEFAULT : t.module.login_ad.error.DEFAULT, r.d.error(n, {duration: 2e3})
        }
    }
}, [[563, 1, 2]]]);
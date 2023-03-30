define(["require", "exports", "preact/jsx-runtime", "../proview"], function (require, exports, jsx_runtime_1, proview_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Content = void 0;
    function Content() {
        const proviewConfiguration = {
            proviewUrl: "https://cdn.proview.io/testing/v7-oracle-integration/init.js",
            proviewToken: "e376b1ec-4a5b-43d9-8821-72de13f7554a",
            profileId: "p-" + Math.random(),
            sessionId: "s-" + Math.random(),
            sessionTitle: "Sample Proview Application",
            sessionType: "ai_proctor",
        };
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ class: "oj-web-applayout-max-width oj-web-applayout-content" }, { children: [(0, jsx_runtime_1.jsx)(proview_1.Proview, { proviewUrl: proviewConfiguration.proviewUrl, proviewToken: proviewConfiguration.proviewToken, profileId: proviewConfiguration.profileId, sessionId: proviewConfiguration.sessionId, sessionTitle: proviewConfiguration.sessionTitle, sessionType: proviewConfiguration.sessionType }), "test"] })));
    }
    exports.Content = Content;
});
//# sourceMappingURL=index.js.map
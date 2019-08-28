function isPrivateMode() {
    return new Promise((resolve) => {
        const yes = () => resolve(true); // is in private mode
        const not = () => resolve(false); // not in private mode
        const testLocalStorage = () => {
            try {
                if (localStorage.length) not();
                else {
                    localStorage.x = 1;
                    localStorage.removeItem('x');
                    not();
                }
            } catch (e) {
                // Safari only enables cookie in private mode
                // if cookie is disabled, then all client side storage is disabled
                // if all client side storage is disabled, then there is no point
                // in using private mode
                navigator.cookieEnabled ? yes() : not();
            }
        };
         //Chrome
        if (window.chrome) {
            if ('storage' in navigator && 'estimate' in navigator.storage) {
                navigator.storage.estimate().then(function (ram) {
                    debugger;
                    if (ram.quota < 120000000) {
                        yes();
                    } else {
                        not();
                    }
                });
            }
        }


        // Chrome & Opera
        var fs = window.webkitRequestFileSystem || window.RequestFileSystem;
        if (fs) {
            return void fs(window.TEMPORARY, 100, not, yes);
        }

       

        // Firefox
        if ('MozAppearance' in document.documentElement.style) {
            if (indexedDB === null) return yes();
            const db = indexedDB.open('test');
            db.onerror = yes;
            db.onsuccess = not;
            return void 0;
        }
        // Safari
        const isSafari = navigator.userAgent.match(/Version\/([0-9\._]+).*Safari/);
        if (isSafari) {
            const version = parseInt(isSafari[1], 10);
            if (version < 11) return testLocalStorage();
            try {
                window.openDatabase(null, null, null, null);
                return not();
            } catch (_) {
                return yes();
            }
        }
        // IE10+ & Edge InPrivate
        if (!window.indexedDB && (window.PointerEvent || window.MSPointerEvent)) {
            return yes();
        }
        // default navigation mode
        return not();
    });
}
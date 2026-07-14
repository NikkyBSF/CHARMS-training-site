function goToStart() {
    if(document.getElementById('video1').currentTime <=6) {
      document.getElementById('video1').currentTime = 0;
    }
   }
function myFunction() {
    var response= document.getElementById("answer");
    var answerEntered= response.value;
        console.log("User Entered answer: ", answerEntered);
            var midName= "Stormborn";
                if(answerEntered == midName){
                console.log("correct!");
            var paraElem =
                document.getElementById("correctAnswer");
                paraElem.innerHTML="That's correct. Daenerys' middle name is Stormborn. Now click next page (below)."
            }
            else{
                console.log("incorrect!");
                var paraElem =
                document.getElementById("IncorrectAnswer");
                paraElem.innerHTML="That's not correct. Daenerys' middle name is Stormborn. Now click next page (below)." 
            }
        }
(function () {
    var SITE_PASSWORD = 'BlueSky2026';

    function isLandingPage() {
        return window.location.pathname.toLowerCase().endsWith('landing.html');
    }

    function getSiteRedirectTarget() {
        var currentPath = window.location.pathname;
        var targetPath = currentPath.substring(currentPath.lastIndexOf('/') + 1);

        if (targetPath && targetPath.toLowerCase() !== 'landing.html') {
            return targetPath;
        }

        return 'index.html';
    }

    function isSiteAuthorized() {
        return sessionStorage.getItem('charms-site-authorized') === 'true';
    }

    function checkSitePassword(enteredPassword) {
        return enteredPassword === SITE_PASSWORD;
    }

    function authorizeSite() {
        sessionStorage.setItem('charms-site-authorized', 'true');
    }

    function requireAuthorization() {
        if (isLandingPage()) {
            if (isSiteAuthorized()) {
                window.location.replace(getSiteRedirectTarget());
            }
            return;
        }

        if (!isSiteAuthorized()) {
            window.location.replace('landing.html');
        }
    }

    window.checkSitePassword = checkSitePassword;
    window.authorizeSite = authorizeSite;
    window.getSiteRedirectTarget = getSiteRedirectTarget;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', requireAuthorization);
    } else {
        requireAuthorization();
    }
})();
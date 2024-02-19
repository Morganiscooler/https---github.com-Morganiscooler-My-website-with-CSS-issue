let ruleIndex = null;

document.addEventListener("DOMContentLoaded", function() {

    console.log("highlight activated");
 
    let hue = 0;
    const loop = () => {
        console.log("loop activated");

        if (ruleIndex !== null) {
            const styleSheet = document.styleSheets[0];
            const rule = styleSheet.cssRules[ruleIndex].style;
            rule.backgroundColor = 'hsl('+hue+',100%,43%)';
        } else {
            ruleIndex = document.styleSheets[0].insertRule('::selection { background-color: hsl('+hue+',100%,43%); }', 0);
        }

        hue+=5;
        if (hue > 360) {
            hue = 0;
        }
        requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);


  
});
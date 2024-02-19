document.addEventListener("DOMContentLoaded", function(){
	var link = document.querySelector("link[rel~='icon']");
	
	let count = 0;
	const fps = 20;
	function animate(){
		switch(count){
			case 0:
				link.href = 'Icon/frame1.png';
				break;
			case 1:
				link.href = 'Icon/frame2.png';
				break;
			case 2:
				link.href = 'Icon/frame3.png';
				break;
			case 3:
				link.href = 'Icon/frame4.png';
				break;
			case 4:
				link.href = 'Icon/frame5.png';
				break;
			case 5:
				link.href = 'Icon/frame6.png';
				break;
            case 6:
				link.href = 'Icon/frame7.png';
				break;
            case 7:
                link.href = 'Icon/frame8.png';
                break;
            case 8:
                link.href = 'Icon/frame9.png';
                break;
            case 9:
                link.href = 'Icon/frame10.png';
                break;
            case 10:
                link.href = 'Icon/frame11.png';
                break;
            case 11:
                link.href = 'Icon/frame12.png';
                break;
            case 12:
                link.href = 'Icon/frame13.png';
                break;
            case 13:
                link.href = 'Icon/frame14.png';
                break;    
            case 14:
                link.href = 'Icon/frame15.png';
                break;  
            case 15:
                link.href = 'Icon/frame16.png';
                break;
            case 16:
                link.href = 'Icon/frame17.png';
                break;
            case 17:
                link.href = 'Icon/frame18.png';
                break;
            case 18:
                link.href = 'Icon/frame19.png';
                break;
            case 19:
                link.href = 'Icon/frame20.png';
                break;
            case 20:
                link.href = 'Icon/frame21.png';
                break;
            case 21:
                link.href = 'Icon/frame22.png';
                break;
            case 22:
                link.href = 'Icon/frame23.png';
                break;
            case 23:
                link.href = 'Icon/frame24.png';
                break;
            case 24:
                link.href = 'Icon/frame25.png';
                break;
            case 25:
                link.href = 'Icon/frame26.png';
                break;
            case 26:
                link.href = 'Icon/frame27.png';
                break;
            case 27:
                link.href = 'Icon/frame28.png';
                break;
            case 28:
                link.href = 'Icon/frame29.png';
                break;
            case 29:
                link.href = 'Icon/frame30.png';
                break;
            case 30:
                link.href = 'Icon/frame31.png';
                break;
            case 31:
                link.href = 'Icon/frame32.png';
                break;
            case 32:
                link.href = 'Icon/frame33.png';
                break;
		}
		
		if (count > 32){
			count = 0;
			link.href = 'Icon/frame1.png';
		}
		
		document.head.appendChild(link);
		count++;

		setTimeout(() => {
			requestAnimationFrame(animate);
		}, 1000 / fps);
	}
	window.onblur=function(){
		link.href = 'Icon/frame.png';
		document.head.appendChild(link);
	}
	
	window.onfocus=function(){
		//
	}
	animate();
});
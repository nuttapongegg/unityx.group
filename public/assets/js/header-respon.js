const mainNav = document.querySelector( '.main-navigation' ),
			navToggle = document.querySelector( '.button-burger' ),
			body = document.querySelector( 'body' ),
			menuScreen = document.querySelector( '.menu-screen' );

// Toggle classes.
var addOpenClass = function() {
	body.classList.toggle( 'is-open' );
};

// Remove class.
var removeOpenClass = function() {
	body.classList.remove( 'is-open' );
};

// Toggle submenu.
var toggleSubMenu = function() {
	
	this.parentNode.classList.toggle( 'is-toggled' );
};

// Create the sub-menu toggle
var addSubMenuToggle = function() {
	
	const menuParent = document.querySelectorAll( '.menu-item-has-children' ),
				toggle = document.createElement( 'button' ),
				toggleText = document.createTextNode( 'Toggle' );
	
	toggle.classList.add( 'sub-menu' );
	toggle.append( toggleText );
	
	for ( var i = 0, max = menuParent.length; i < max; i++) {
		menuParent[i].append( toggle );
	}
	
	toggle.addEventListener( 'click', toggleSubMenu );
};

// Fire events.
navToggle.addEventListener( 'click', addOpenClass );
//menuScreen.addEventListener( 'click', removeOpenClass );
window.addEventListener( 'load', addSubMenuToggle );
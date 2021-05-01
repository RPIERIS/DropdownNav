# Dropdown Nav

The weekly web Dev Chanllenge for the last week of April 2021 was to 

1. create a [Dropdown Nav](https://scrimba.com/learn/weeklychallenge/the-weekly-web-dev-challenge-drop-down-nav--coe5040abacae5cad6e1e68fc). The CSS and HTML had been provided. It was a matter of creating the Javascript to that the nav would open and close when the arrow button was hovered. 
2. The opacity of the main background was to be reduced. 
3. As a further challenge you could animate the nav. This means making the nav smoothly transition.

[You can find my solution on Scrimba.](https://scrimba.com/scrim/cqWPvVT4)

## Solution process

initially I thought I had to change the attributes in the nav class but then realised that the classlist could be added to or removed. To transition the background was easy as this was a matter of changing the opacity where it was dropped to 60%. The nav being transitioned was a bit harder. Display could not be transitioned so doing some research I came across a stackoverflow article on [how to create a smooth transition on a nav](https://stackoverflow.com/questions/53559828/how-to-create-smooth-transition-on-nav). This however meant that I had to set the width and the visibility of the nav to 0 on the nav. The transition would increase it to 25% and 1. 

## Usefule code

- [CSS Display](https://developer.mozilla.org/en-US/docs/Web/CSS/display): the display on the nav section was set to 'none'. When this was removed it would display the nav. I could either remove the display or set it to block. Both would show the nav.
- [setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute): I realised playing around with the code that this was actually for setting the HTML attributes. I also realised that I didnt know how to access the CSS attributes via the HTML element. I am not sure this is even possible.
- [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList): This was the way to acccess the classes for the nav. I used the add and remove methods to add the 
- [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions): I used this as a way to change the opacity of the main area which is the container section. [Display though is not an animatable property](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties).

## Possible updates

- Refactor the JS so that it can be carried out by one function.
- Transition the nav when it collapses.

## Supporting Scrimba

Since 2017, we have created over 20 free courses on Scrimba, and we're going to
continue launching free courses. But to pay our bills, we have to charge once
in a while. So if you've ever wanted to "give back" to Scrimba, you can do that by buying
	one of our paid courses

- [Become a professional React developer](https://scrimba.com/course/greact)
- [The Responsive Web Design Bootcamp](https://scrimba.com/course/gresponsive)
- [The Ultimate JavaScript Bootcamp](https://scrimba.com/course/gjavascript)

	It would also mean the world to us if you share the courses.  

Happy Coding!

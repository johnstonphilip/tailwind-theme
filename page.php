<?php

get_header();

if ( have_posts() ) {

	// Load posts loop.
	while ( have_posts() ) {
		the_post();

		// Your HTML for each post in the loop here.
		the_title();
	}


} else {
	// Your html for no posts found here.

}

get_footer();

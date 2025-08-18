<?php
function mikadesig_enqueue_assets() {
    wp_enqueue_style(
        'global_styles',
        get_template_directory_uri() . '/assets/styles.css',
        [],
        filemtime(get_template_directory() . '/assets/styles.css')
    );
}
add_action('wp_enqueue_scripts', 'mikadesig_enqueue_assets'); 
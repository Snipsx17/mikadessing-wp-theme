<?php
function mikadesig_enqueue_assets() {
    // load styles
    wp_enqueue_style(
        'global_styles',
        get_template_directory_uri() . '/dist/css/main.css',
        [],
        filemtime(get_template_directory() . '/dist/css/main.css')
    );

      // JavaScript con React
    wp_enqueue_script(
        'mikadesign-react',
        get_template_directory_uri() . '/dist/js/main.js',
        array(),
        filemtime(get_template_directory() . '/dist/js/main.js'),
        true
    );
}
add_action('wp_enqueue_scripts', 'mikadesig_enqueue_assets'); 

// Configuración del tema
function mikadesign_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    
}
add_action('after_setup_theme', 'mikadesign_setup');
<?php
/**
*
* @package phpbb3-Rokbb3
* phpBB style name: Quasar
* @version 1.0: quasar.php 2008-09 $
* @copyright (c) 2008 
* @license http://opensource.org/licenses/gpl-license.php GNU Public License
*
*/

// Don't allow direct access
die( 'Restricted access' );
?>
<!-- PHP -->
global $config, $template;
$template->assign_vars(array(
// RokBB3 variables
		'S_SHOW_QUASARUSER'		=> ($config['show_jquasaruser']) ? true : false,
		'QUASAR_MENUPOSITION'	=>  "{$config['quasar_menu_position']}",
                'QUASAR_LOGO_LINK'	=>  "{$config['quasar_logo_link']}",
		'ALLOW_QUASAR_COLORSWITCHER'=> ($config['show_quasar_colorswitcher']) ? true : false,
                'SHOW_QUASAR_DATE'		=> ($config['show_quasar_date']) ? true : false,
                'SHOW_QUASAR_TOTOP_SCROLLER' => ($config['show_quasar_totop_scroller']) ? true : false,
                'SHOW_QUASAR_RESET' => ($config['show_quasar_reset']) ? true : false,
                'SHOW_QUASAR_PATHWAY'		=> ($config['show_quasar_pathway']) ? true : false,
                'SHOW_QUASAR_FONT'		=> ($config['show_quasar_font']) ? true : false,
                'SHOW_QUASAR_COPYRIGHT'	=> ($config['show_quasar_copyright']) ? true : false,
                'ENABLE_QUASAR_FONTSPANS'   => ($config['enable_quasar_fontspans']) ? true : false,           
                'QUASAR_BODY_LEVEL'		=> "{$config['quasar_body_level']}",
                'QUASAR_SHOWCASE_COLOR'    => "{$config['quasar_showcase_color']}",
                'QUASAR_ARTICLE_COLOR'    => "{$config['quasar_article_color']}",
                'ENABLE_QUASAR_SIDE_MODULES' => ($config['enable_quasar_side_modules']) ? true : false,
                'ENABLE_QUASAR_BOTTOM_MODULES' => ($config['enable_quasar_bottom_modules']) ? true : false,
                'ENABLE_QUASAR_FOOTER_MODULES' => ($config['enable_quasar_footer_modules']) ? true : false,  
));

<!-- ENDPHP -->

<!-- IF not QUASAR_MENUPOSITION -->
<!-- PHP -->
//modules positions (left,right, full)

	global $template, $config;
	$template->assign_vars(array(
		'QUASAR_MENUPOSITION'		=> "right"
		)
	);	
<!-- ENDPHP -->
<!-- ENDIF -->

<!-- PHP -->
global $template, $config;

//enable side modules (true or false)

if (!isset($config['enable_quasar_side_modules'])) {
	$template->assign_vars(array(
		'ENABLE_QUASAR_SIDE_MODULES'		=> false
		)
	);
 }

//enable bottom modules (true or false)

if (!isset($config['enable_quasar_bottom_modules'])) {
	$template->assign_vars(array(
		'ENABLE_QUASAR_BOTTOM_MODULES'		=> true
		)
	);
 }
 
//enable footer modules (true or false)
 
if (!isset($config['enable_quasar_footer_modules'])) {
	$template->assign_vars(array(
		'ENABLE_QUASAR_FOOTER_MODULES'		=> false
		)
	);
 }

//enable search (true or false)

if (!isset($config['show_quasar_search'])) {
	$template->assign_vars(array(
		'SHOW_QUASAR_SEARCH'		=> true
		)
	);
 }

//enable user menu (true or false)

if (!isset($config['show_jquasaruser'])) {
	$template->assign_vars(array(
		'S_SHOW_QUASARUSER'		=> true
		)
	);
 }
 
//enable fontspans (true or false) 
 
if (!isset($config['enable_quasar_fontspans'])) {
	$template->assign_vars(array(
		'ENABLE_QUASAR_FONTSPANS'		=> true
		)
	);
 }

//enable font size switcher (true or false)

if (!isset($config['show_quasar_font'])) {
	$template->assign_vars(array(
		'SHOW_QUASAR_FONT'		=> true
		)
	);
 }

// show pathway (true or false)

global $template, $config;
 if (!isset($config['show_quasar_pathway'])) {
	$template->assign_vars(array(
		'SHOW_QUASAR_PATHWAY'		=> true
		)
	);
 }

//enable style switcher (true or false)

if (!isset($config['show_quasar_colorswitcher'])) {
	$template->assign_vars(array(
		'ALLOW_QUASAR_COLORSWITCHER'		=> true
		)
	);
 }
 

//show "designed by" (true or false)

if (!isset($config['show_quasar_copyright'])) {
	$template->assign_vars(array(
		'SHOW_QUASAR_COPYRIGHT'		=> true
		)
	);
 }
 
//enable Reset settings button (true or false)
 
 if (!isset($config['show_quasar_reset'])) {
	$template->assign_vars(array(
		'SHOW_QUASAR_RESET'		=> true
		)
	);
 }

//enable Scroll to Top button (true or false)
 
 if (!isset($config['show_quasar_totop_scroller'])) {
	$template->assign_vars(array(
		'SHOW_QUASAR_TOTOP_SCROLLER'		=> true
		)
	);
 }

//enable Date (true or false)

if (!isset($config['show_quasar_date'])) {
	$template->assign_vars(array(
		'SHOW_QUASAR_DATE'		=> true
		)
	);
 }
 
<!-- ENDPHP -->





       
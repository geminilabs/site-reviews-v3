<?php

namespace GeminiLabs\SiteReviews\Handlers;

use GeminiLabs\SiteReviews\Application;
// use GeminiLabs\SiteReviews\Modules\Html;

class EnqueueAdminAssets
{
	/**
	 * @return void
	 */
	public function handle()
	{
		$this->enqueueAssets();
		$this->localizeAssets();
	}

	/**
	 * @return void
	 */
	public function enqueueAssets()
	{
		wp_enqueue_style(
			Application::ID,
			glsr()->url( 'assets/styles/'.Application::ID.'-admin.css' ),
			[],
			glsr()->version
		);
		if( !$this->isCurrentScreen() )return;
		wp_enqueue_script(
			Application::ID,
			glsr()->url( 'assets/scripts/'.Application::ID.'-admin.js' ),
			$this->getDependencies(),
			glsr()->version,
			true
		);
	}

	/**
	 * @return void
	 */
	public function localizeAssets()
	{
		$variables = [
			'action' => Application::PREFIX.'action',
			'ajaxurl' => admin_url( 'admin-ajax.php' ),
			'are_you_sure' => __( 'Are you sure want to do this?', 'site-reviews' ),
			'mce_nonce' => wp_create_nonce( 'mce-shortcode' ),
			'pinned_nonce' => wp_create_nonce( 'toggle-pinned' ),
			'shortcodes' => [],
			'status_nonce' => wp_create_nonce( 'change-review-status' ),
		];
		if( user_can_richedit() ) {
			$variables['shortcodes'] = $this->localizeShortcodes();
		}
		$variables = apply_filters( 'site-reviews/enqueue/localize', $variables );
		wp_localize_script( Application::ID, 'site_reviews', $variables );
	}

	/**
	 * @return array
	 */
	protected function getDependencies()
	{
		$dependencies = []; //glsr( Html::class )->getDependencies();
		$dependencies = array_merge( $dependencies, [
			'jquery', 'jquery-ui-sortable', 'underscore', 'wp-util',
		]);
		return $dependencies;
	}

	/**
	 * @return bool
	 */
	protected function isCurrentScreen()
	{
		$screen = glsr_current_screen();
		return $screen && ( $screen->post_type == Application::POST_TYPE
			|| $screen->base == 'post'
			|| $screen->id == 'dashboard'
			|| $screen->id == 'widgets'
		);
	}

	/**
	 * @return array
	 */
	protected function localizeShortcodes()
	{
		$variables = [];
		foreach( glsr()->mceShortcodes as $tag => $args ) {
			if( empty( $args['required'] ))continue;
			$variables[$tag] = $args['required'];
		}
		return $variables;
	}
}

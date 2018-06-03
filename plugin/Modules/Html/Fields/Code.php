<?php

namespace GeminiLabs\SiteReviews\Modules\Html\Fields;

use GeminiLabs\SiteReviews\Modules\Html\Fields\Field;

class Code extends Field
{
	/**
	 * @return string|void
	 */
	public function build()
	{
		$this->builder->args = wp_parse_args( $this->builder->args, $this->defaults() );
		$this->builder->tag = 'textarea';
		return $this->builder->buildTag();
	}

	/**
	 * @return array
	 */
	public function defaults()
	{
		return [
			'class' => 'large-text code',
			'type' => 'textarea',
		];
	}
}
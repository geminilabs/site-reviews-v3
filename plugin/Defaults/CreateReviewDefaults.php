<?php

namespace GeminiLabs\SiteReviews\Defaults;

use GeminiLabs\SiteReviews\Defaults\DefaultsAbstract as Defaults;

class CreateReviewDefaults extends Defaults
{
    /**
     * @return array
     */
    public $mapped = [
        '_referer' => 'referer',
        'author' => 'name',
        'pinned' => 'is_pinned',
    ];

    /**
     * @return array
     */
    public $sanitize = [
        'ajax_request' => 'bool',
        'assigned_posts' => 'array-int',
        'assigned_terms' => 'array-int',
        'assigned_users' => 'array-int',
        'avatar' => 'url',
        'content' => 'text-multiline',
        'custom' => 'array',
        'date' => 'date',
        'email' => 'email',
        'form_id' => 'int',
        'ip_address' => 'text',
        'is_pinned' => 'bool',
        'name' => 'text',
        'post_id' => 'int',
        'rating' => 'int',
        'referer' => 'text',
        'response' => 'text',
        'title' => 'text',
        'type' => 'text',
        'url' => 'url',
    ];

    /**
     * @return array
     */
    protected function defaults()
    {
        return [
            'ajax_request' => false,
            'assigned_posts' => [],
            'assigned_terms' => [],
            'assigned_users' => [],
            'avatar' => '',
            'content' => '',
            'custom' => [],
            'date' => '',
            'email' => '',
            'form_id' => '',
            'ip_address' => '',
            'is_pinned' => '',
            'name' => '',
            'post_id' => '',
            'rating' => '',
            'referer' => '',
            'response' => '',
            'title' => '',
            'type' => '',
            'url' => '',
        ];
    }
}

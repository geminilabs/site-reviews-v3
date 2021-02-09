<div class="glsr-card postbox">
    <h3 class="glsr-card-heading">
        <button type="button" class="glsr-accordion-trigger" aria-expanded="false" aria-controls="faq-hide-form-after-submission">
            <span class="title">How do I hide the form after a review is submitted?</span>
            <span class="icon"></span>
        </button>
    </h3>
    <div id="faq-hide-form-after-submission" class="inside">
        <p>To hide the form after a review has been submitted, use the following code snippet:</p>
        <pre><code class="language-php">/**
 * Hides the review form after a review has been submitted
 * Paste this in your active theme's functions.php file
 *
 * @param string $script
 * @return string
 */
add_filter('site-reviews/enqueue/public/inline-script', function ($script) {
    return $script."
    document.addEventListener('site-reviews/after/submission', function (ev) {
        if (false !== ev.detail.errors) return;
        ev.detail.form.classList.add('glsr-hide-form');
        ev.detail.form.insertAdjacentHTML('afterend', '&lt;p&gt;' + ev.detail.message + '&lt;/p&gt;');
    });";
});</code></pre>
        <p>You can also hide the form from registered users who have already submitted a review.</p>
        <p>To do this, you will need to first make sure that the "Limit Reviews" setting on the <code><a href="<?= admin_url('edit.php?post_type='.glsr()->post_type.'&page=settings#tab-submissions'); ?>">Settings &rarr; Submissions</a></code> page is set to "By Username". Once that is done, you can use the following code snippet:</p>
        <pre><code class="language-php">/**
 * Hides the review form from registered users who have already submitted a review
 * Paste this in your active theme's functions.php file
 *
 * @param string $template
 * @return string
 */
add_filter('site-reviews/rendered/template/reviews-form', function ($template, $data) {
    $request = glsr()->request($data['args']);
    return glsr('Modules\Validator\ReviewLimitsValidator', ['request' => $request])->isValid()
        ? $template
        : sprintf('&lt;p&gt;%s&lt;/p&gt;', __('Thank you for your review!'));
}, 10, 2);</code></pre>
    </div>
</div>

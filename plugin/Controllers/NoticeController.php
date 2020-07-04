<?php

namespace GeminiLabs\SiteReviews\Controllers;

use GeminiLabs\SiteReviews\Database;
use GeminiLabs\SiteReviews\Database\OptionManager;
use GeminiLabs\SiteReviews\Helper;
use GeminiLabs\SiteReviews\Helpers\Arr;
use GeminiLabs\SiteReviews\Modules\Html\Builder;
use GeminiLabs\SiteReviews\Modules\Migrate;

class NoticeController extends Controller
{
    const USER_META_KEY = '_glsr_notices';

    /**
     * @var array
     */
    protected $dismissValuesMap;

    public function __construct()
    {
        $this->dismissValuesMap = [
            'trustalyze' => glsr()->version('major'),
            'welcome' => glsr()->version('minor'),
        ];
    }

    /**
     * @return void
     * @action admin_notices
     */
    public function filterAdminNotices()
    {
        $screen = glsr_current_screen();
        $this->renderMigrationNotice($screen->post_type);
        $this->renderWelcomeNotice($screen->post_type);
        $this->renderTrustalyzeNotice($screen->post_type);
    }

    /**
     * @return void
     */
    public function routerDismissNotice(array $request)
    {
        if ($key = Arr::get($request, 'notice')) {
            $this->dismissNotice($key);
        }
    }

    /**
     * @param string $key
     * @return void
     */
    protected function dismissNotice($key)
    {
        $this->setUserMeta($key, $this->getVersionFor($key));
    }

    /**
     * @param string $key
     * @param mixed $fallback
     * @return mixed
     */
    protected function getUserMeta($key, $fallback)
    {
        $meta = get_user_meta(get_current_user_id(), static::USER_META_KEY, true);
        return Arr::get($meta, $key, $fallback);
    }

    /**
     * @param string $noticeKey
     * @return string
     */
    protected function getVersionFor($noticeKey)
    {
        return Arr::get($this->dismissValuesMap, $noticeKey, glsr()->version('major'));
    }

    /**
     * @param string $screenPostType
     * @return void
     */
    protected function renderMigrationNotice($screenPostType)
    {
        if (glsr()->post_type == $screenPostType
            && glsr()->hasPermission('tools', 'general')
            && (glsr(Migrate::class)->isMigrationNeeded() || glsr(Database::class)->isMigrationNeeded())) {
            glsr()->render('partials/notices/migrate', [
                'action' => glsr(Builder::class)->a([
                    'href' => admin_url('edit.php?post_type='.glsr()->post_type.'&page=tools#tab-general'),
                    'text' => _x('Migrate Plugin', 'admin-text', 'site-reviews'),
                ]),
            ]);
        }
    }

    /**
     * @param string $screenPostType
     * @return void
     */
    protected function renderTrustalyzeNotice($screenPostType)
    {
        if (glsr()->post_type == $screenPostType
            && Helper::isGreaterThan($this->getVersionFor('trustalyze'), $this->getUserMeta('trustalyze', 0))
            && !glsr(OptionManager::class)->getBool('settings.general.trustalyze')
            && glsr()->can('manage_options')) {
            glsr()->render('partials/notices/trustalyze');
        }
    }

    /**
     * @param string $screenPostType
     * @return void
     */
    protected function renderWelcomeNotice($screenPostType)
    {
        if (glsr()->post_type == $screenPostType
            && Helper::isGreaterThan($this->getVersionFor('welcome'), $this->getUserMeta('welcome', 0))
            && glsr()->can('edit_others_posts')) {
            $welcomeText = '0.0.0' == glsr(OptionManager::class)->get('version_upgraded_from')
                ? _x('Thanks for installing Site Reviews v%s, we hope you love it!', 'admin-text', 'site-reviews')
                : _x('Thanks for updating to Site Reviews v%s, we hope you love the changes!', 'admin-text', 'site-reviews');
            glsr()->render('partials/notices/welcome', [
                'text' => sprintf($welcomeText, glsr()->version),
            ]);
        }
    }

    /**
     * @param string $key
     * @param mixed $fallback
     * @return mixed
     */
    protected function setUserMeta($key, $value)
    {
        $userId = get_current_user_id();
        $meta = (array) get_user_meta($userId, static::USER_META_KEY, true);
        $meta = array_filter(wp_parse_args($meta, []));
        $meta[$key] = $value;
        update_user_meta($userId, static::USER_META_KEY, $meta);
    }
}

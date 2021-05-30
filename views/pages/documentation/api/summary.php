<div class="glsr-card postbox">
    <h3 class="glsr-card-heading">
        <button type="button" class="glsr-accordion-trigger" aria-expanded="false" aria-controls="api-summary">
            <span class="title">Rating Summary</span>
            <span class="badge code">/site-reviews/v1/summary</span>
            <span class="icon"></span>
        </button>
    </h3>
    <div id="api-summary" class="inside">
        <h3>Schema</h3>
        <p>The schema defines all the fields that exist within the response. The response can be expected to contain the fields below unless the <code>_filter</code> query parameter is used.</p>
        <div class="glsr-responsive-table">
            <table class="wp-list-table widefat striped">
                <thead>
                    <tr>
                        <th scope="col"><strong>Field</strong></th>
                        <th scope="col"><strong>Type</strong></th>
                        <th scope="col"><strong>Context</strong></th>
                        <th scope="col"><strong>Description</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>average</strong></td>
                        <td>number</td>
                        <td>view</td>
                        <td>The average rating.</td>
                    </tr>
                    <tr>
                        <td><strong>maximum</strong></td>
                        <td>integer</td>
                        <td>view</td>
                        <td>The defined maximum rating.</td>
                    </tr>
                    <tr>
                        <td><strong>minimum</strong></td>
                        <td>integer</td>
                        <td>view</td>
                        <td>The defined minumum rating.</td>
                    </tr>
                    <tr>
                        <td><strong>ranking</strong></td>
                        <td>number</td>
                        <td>view</td>
                        <td>The bayesian ranking number.</td>
                    </tr>
                    <tr>
                        <td><strong>ratings</strong></td>
                        <td>array</td>
                        <td>view</td>
                        <td>The total number of reviews for each rating level from zero to maximum rating.</td>
                    </tr>
                    <tr>
                        <td><strong>reviews</strong></td>
                        <td>integer</td>
                        <td>view</td>
                        <td>The total number of reviews used to calculate the average.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>List The Summary</h3>
        <p>Query this endpoint to retrieve the rating summary. The response you receive can be controlled and filtered using the URL query parameters below.</p>
        <h4>Arguments</h4>
        <div class="glsr-responsive-table">
            <table class="wp-list-table widefat striped">
                <thead>
                    <tr>
                        <th scope="col"><strong>Parameter</strong></th>
                        <th scope="col"><strong>Default</strong></th>
                        <th scope="col"><strong>Description</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>after</td>
                        <td></td>
                        <td>Limit summary to reviews published after a given ISO8601 compliant date.</td>
                    </tr>
                    <tr>
                        <td>assigned_posts</td>
                        <td></td>
                        <td>Limit summary to reviews assigned to specific posts of any public post type.</td>
                    </tr>
                    <tr>
                        <td>assigned_terms</td>
                        <td></td>
                        <td>Limit summary to reviews assigned to specific terms in the <code>site-review-category</code> taxonomy.</td>
                    </tr>
                    <tr>
                        <td>assigned_users</td>
                        <td></td>
                        <td>Limit summary to reviews assigned to specific users.</td>
                    </tr>
                    <tr>
                        <td>before</td>
                        <td></td>
                        <td>Limit summary to reviews published before a given ISO8601 compliant date.</td>
                    </tr>
                    <tr>
                        <td>date</td>
                        <td></td>
                        <td>Limit summary to reviews published on a given ISO8601 compliant date.</td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td></td>
                        <td>Limit summary to reviews containing a given email address.</td>
                    </tr>
                    <tr>
                        <td>exclude</td>
                        <td></td>
                        <td>Ensure summary excludes specific review IDs.</td>
                    </tr>
                    <tr>
                        <td>include</td>
                        <td></td>
                        <td>Limit summary to specific review IDs.</td>
                    </tr>
                    <tr>
                        <td>ip_address</td>
                        <td></td>
                        <td>Limit summary to reviews submitted from a given IP address.</td>
                    </tr>
                    <tr>
                        <td>rating</td>
                        <td></td>
                        <td>Limit summary to reviews containing a given <em>minimum</em> rating.</td>
                    </tr>
                    <tr>
                        <td>status</td>
                        <td>approved</td>
                        <td>Limit summary to reviews containing a given status. One of: <code>all</code>, <code>approved</code>, <code>unapproved</code></td>
                    </tr>
                    <tr>
                        <td>terms</td>
                        <td></td>
                        <td>Limit summary to reviews submitted with terms accepted. One of: <code>0</code>, <code>1</code></td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td></td>
                        <td>Limit summary to reviews containing a given review type.</td>
                    </tr>
                    <tr>
                        <td>user__in</td>
                        <td></td>
                        <td>Limit summary to reviews authored by specific users.</td>
                    </tr>
                    <tr>
                        <td>user__not_in</td>
                        <td></td>
                        <td>Ensure summary excludes reviews authored by specific users.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4>Definition</h4>
        <pre><code class="language-bash">GET /site-reviews/v1/summary</code></pre>
        <h4>Example Request</h4>
        <pre><code class="language-bash">curl https://example.com/wp-json/site-reviews/v1/summary</code></pre>
    </div>
</div>
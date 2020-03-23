import { SummaryIcon } from './icons';
import { CheckboxControlList } from './checkbox-control-list';
import categories from './categories';
import types from './types';

const { _x } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorAdvancedControls, InspectorControls } = wp.blockEditor;
const { PanelBody, RangeControl, SelectControl, TextControl, ToggleControl } = wp.components;
const { serverSideRender: ServerSideRender } = wp;

const blockName = GLSR.nameprefix + '/summary';

const attributes = {
    assigned_to: { default: '', type: 'string' },
    category: { default: '', type: 'string' },
    className: { default: '', type: 'string' },
    hide: { default: '', type: 'string' },
    post_id: { default: '', type: 'string' },
    rating: { default: 0, type: 'number' },
    schema: { default: false, type: 'boolean' },
    type: { default: 'local', type: 'string' },
};

const edit = props => {
    props.attributes.post_id = jQuery('#post_ID').val();
    const { attributes: { assigned_to, category, display, hide, id, pagination, rating, schema, type }, className, setAttributes } = props;
    const inspectorControls = {
        assigned_to: <TextControl
            help={ _x('Limit reviews to those assigned to this post ID. You can also enter "post_id" to use the ID of the current page, or "parent_id" to use the ID of the parent page.', 'admin-text', 'site-reviews') }
            label={ _x('Assigned To', 'admin-text', 'site-reviews') }
            onChange={ assigned_to => setAttributes({ assigned_to }) }
            value={ assigned_to }
        />,
        category: <SelectControl
            help={ _x('Limit reviews to a category.', 'admin-text', 'site-reviews') }
            label={ _x('Category', 'admin-text', 'site-reviews') }
            onChange={ category => setAttributes({ category }) }
            options={ categories }
            value={ category }
        />,
        type: <SelectControl
            help={ _x('Limit type of reviews.', 'admin-text', 'site-reviews') }
            label={ _x('Type', 'admin-text', 'site-reviews') }
            onChange={ type => setAttributes({ type }) }
            options={ types }
            value={ type }
        />,
        rating: <RangeControl
            help={ _x('Limit reviews to a minimum rating.', 'admin-text', 'site-reviews') }
            label={ _x('Minimum Rating', 'admin-text', 'site-reviews') }
            min={ 0 }
            max={ 5 }
            onChange={ rating => setAttributes({ rating }) }
            value={ rating }
        />,
        schema: <ToggleControl
            checked={ schema }
            help={ _x('The schema should only be enabled once per page.', 'admin-text', 'site-reviews') }
            label={ _x('Enable the schema?', 'admin-text', 'site-reviews') }
            onChange={ schema => setAttributes({ schema }) }
        />,
        hide: CheckboxControlList(GLSR.hideoptions.site_reviews_summary, hide, setAttributes),
    };
    return [
        <InspectorControls>
            <PanelBody title={ _x('Settings', 'admin-text', 'site-reviews')}>
                { Object.values(wp.hooks.applyFilters(GLSR.nameprefix+'.summary.InspectorControls', inspectorControls, props)) }
            </PanelBody>
        </InspectorControls>,
        <InspectorAdvancedControls>
            { Object.values(wp.hooks.applyFilters(GLSR.nameprefix+'.summary.InspectorAdvancedControls', {}, props)) }
        </InspectorAdvancedControls>,
        <ServerSideRender block={ blockName } attributes={ props.attributes }>
        </ServerSideRender>
    ];
};

export default registerBlockType(
    blockName, {
        attributes: attributes,
        category: GLSR.nameprefix,
        description: _x('Display a summary of your reviews.', 'admin-text', 'site-reviews'),
        edit: edit,
        example: {},
        icon: {src: SummaryIcon},
        keywords: ['reviews', 'summary'],
        save: () => null,
        title: _x('Summary', 'admin-text', 'site-reviews'),
    }
);

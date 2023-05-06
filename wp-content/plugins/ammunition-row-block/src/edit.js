/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
  InspectorControls,
  InnerBlocks,
  useBlockProps
} from '@wordpress/block-editor';

import {
	TextControl,
	PanelBody,
	PanelRow,
	ToggleControl,
  SelectControl,
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
  const blockProps = useBlockProps();
  const {
    attributes: { paddingTop, paddingBottom, rowClass, isOnDarkBg }
  } = props;

  const onChangePaddingTop = ( newPaddingTop ) => {
		props.setAttributes( { paddingTop: newPaddingTop } )
	}

  const onChangePaddingBottom = ( newPaddingBottom ) => {
		props.setAttributes( { paddingBottom: newPaddingBottom } )
	}

  const onChangeRowClass = ( newRowClass ) => {
		props.setAttributes( { rowClass: newRowClass === undefined ? '' : newRowClass } )
	}

  const toggleIsOnDarkBg = () => {
		props.setAttributes( { isOnDarkBg: ! isOnDarkBg } )
	}

	return (
    <>
      <InspectorControls>
        <PanelBody
          title={__( 'Settings' )}
          initialOpen={true}
        >
          <PanelRow>
            <fieldset>
              <TextControl
                label={__( 'Class' )}
                value={ rowClass }
                onChange={ onChangeRowClass }
                help={ __( 'Add a custom class' )}
              />
            </fieldset>
          </PanelRow>
          <PanelRow>
            <fieldset>
              <SelectControl
                label={__( 'Padding Top' )}
                value={ paddingTop }
                options={[
                  {label: 'None', value: ''},
                  {label: __( 'XXS' ), value: 'pt-xxs'},
                  {label: __( 'XS' ), value: 'pt-xs'},
                  {label: __( 'SM' ), value: 'pt-sm'},
                  {label: __( 'MD' ), value: 'pt-md'},
                  {label: __( 'LG' ), value: 'pt-lg'},
                  {label: __( 'XL' ), value: 'pt-xl'},
                  {label: __( 'XXL' ), value: 'pt-xxl'},
                ]}
                onChange={ onChangePaddingTop }
              />
              <SelectControl
                label={__( 'Padding Bottom' )}
                value={ paddingBottom }
                options={[
                  {label: 'None', value: ''},
                  {label: __( 'XXS' ), value: 'pb-xxs'},
                  {label: __( 'XS' ), value: 'pb-xs'},
                  {label: __( 'SM' ), value: 'pb-sm'},
                  {label: __( 'MD' ), value: 'pb-md'},
                  {label: __( 'LG' ), value: 'pb-lg'},
                  {label: __( 'XL' ), value: 'pb-xl'},
                  {label: __( 'XXL' ), value: 'pb-xxl'},
                ]}
                onChange={ onChangePaddingBottom }
              />
            </fieldset>
          </PanelRow>
          <PanelRow>
            <fieldset>
              <ToggleControl
                label="Dark Background"
                help={
                  isOnDarkBg
                    ? 'Has a dark background (lighten text)'
                    : ''
                }
                checked={ isOnDarkBg }
                onChange={ toggleIsOnDarkBg }
              />
            </fieldset>
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      
      <div { ...blockProps }>
			  <InnerBlocks />
      </div>
    </>
	);
}

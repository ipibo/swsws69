// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice = InfoTextSlice | EventBlockSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = PageDocument;

/**
 * Primary content in *EventBlock → Items*
 */
export interface EventBlockSliceDefaultItem {
  /**
   * image field in *EventBlock → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: event_block.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *EventBlock → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event_block.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Maker field in *EventBlock → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event_block.items[].maker
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  maker: prismic.RichTextField;
}

/**
 * Default variation for EventBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EventBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<EventBlockSliceDefaultItem>
>;

/**
 * Slice variation for *EventBlock*
 */
type EventBlockSliceVariation = EventBlockSliceDefault;

/**
 * EventBlock Shared Slice
 *
 * - **API ID**: `event_block`
 * - **Description**: EventBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EventBlockSlice = prismic.SharedSlice<
  "event_block",
  EventBlockSliceVariation
>;

/**
 * Primary content in *InfoText → Primary*
 */
export interface InfoTextSliceDefaultPrimary {
  /**
   * Text field in *InfoText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: info_text.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for InfoText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InfoTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<InfoTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *InfoText*
 */
type InfoTextSliceVariation = InfoTextSliceDefault;

/**
 * InfoText Shared Slice
 *
 * - **API ID**: `info_text`
 * - **Description**: InfoText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InfoTextSlice = prismic.SharedSlice<
  "info_text",
  InfoTextSliceVariation
>;

/**
 * Default variation for TitleBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TitleBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *TitleBlock*
 */
type TitleBlockSliceVariation = TitleBlockSliceDefault;

/**
 * TitleBlock Shared Slice
 *
 * - **API ID**: `title_block`
 * - **Description**: TitleBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TitleBlockSlice = prismic.SharedSlice<
  "title_block",
  TitleBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      EventBlockSlice,
      EventBlockSliceDefaultItem,
      EventBlockSliceVariation,
      EventBlockSliceDefault,
      InfoTextSlice,
      InfoTextSliceDefaultPrimary,
      InfoTextSliceVariation,
      InfoTextSliceDefault,
      TitleBlockSlice,
      TitleBlockSliceVariation,
      TitleBlockSliceDefault,
    };
  }
}

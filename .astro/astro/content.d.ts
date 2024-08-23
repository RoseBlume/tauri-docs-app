declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"css/Advanced/backgrounds.mdx": {
	id: "css/Advanced/backgrounds.mdx";
  slug: "css/advanced/backgrounds";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/Advanced/border-images.mdx": {
	id: "css/Advanced/border-images.mdx";
  slug: "css/advanced/border-images";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/Advanced/buttons.mdx": {
	id: "css/Advanced/buttons.mdx";
  slug: "css/advanced/buttons";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/Advanced/color-keywords.mdx": {
	id: "css/Advanced/color-keywords.mdx";
  slug: "css/advanced/color-keywords";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/Advanced/columns.mdx": {
	id: "css/Advanced/columns.mdx";
  slug: "css/advanced/columns";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/Advanced/gradients.mdx": {
	id: "css/Advanced/gradients.mdx";
  slug: "css/advanced/gradients";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/Advanced/media-queries.mdx": {
	id: "css/Advanced/media-queries.mdx";
  slug: "css/advanced/media-queries";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/Advanced/rounded-corners.mdx": {
	id: "css/Advanced/rounded-corners.mdx";
  slug: "css/advanced/rounded-corners";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/Advanced/shadows.mdx": {
	id: "css/Advanced/shadows.mdx";
  slug: "css/advanced/shadows";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/Advanced/transitions.mdx": {
	id: "css/Advanced/transitions.mdx";
  slug: "css/advanced/transitions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/Advanced/ui.mdx": {
	id: "css/Advanced/ui.mdx";
  slug: "css/advanced/ui";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/align.mdx": {
	id: "css/align.mdx";
  slug: "css/align";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/aspects.mdx": {
	id: "css/aspects.mdx";
  slug: "css/aspects";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/backgrounds.mdx": {
	id: "css/backgrounds.mdx";
  slug: "css/backgrounds";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/borders.mdx": {
	id: "css/borders.mdx";
  slug: "css/borders";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/box-model.mdx": {
	id: "css/box-model.mdx";
  slug: "css/box-model";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/colors.mdx": {
	id: "css/colors.mdx";
  slug: "css/colors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/combinators.mdx": {
	id: "css/combinators.mdx";
  slug: "css/combinators";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/comments.mdx": {
	id: "css/comments.mdx";
  slug: "css/comments";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/display.mdx": {
	id: "css/display.mdx";
  slug: "css/display";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/dropdowns.mdx": {
	id: "css/dropdowns.mdx";
  slug: "css/dropdowns";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/float.mdx": {
	id: "css/float.mdx";
  slug: "css/float";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/forms.mdx": {
	id: "css/forms.mdx";
  slug: "css/forms";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/icons.mdx": {
	id: "css/icons.mdx";
  slug: "css/icons";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/inline-block.mdx": {
	id: "css/inline-block.mdx";
  slug: "css/inline-block";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/layouts.mdx": {
	id: "css/layouts.mdx";
  slug: "css/layouts";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/links.mdx": {
	id: "css/links.mdx";
  slug: "css/links";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/lists.mdx": {
	id: "css/lists.mdx";
  slug: "css/lists";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/margins.mdx": {
	id: "css/margins.mdx";
  slug: "css/margins";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/math.mdx": {
	id: "css/math.mdx";
  slug: "css/math";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/max-width.mdx": {
	id: "css/max-width.mdx";
  slug: "css/max-width";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/nav.mdx": {
	id: "css/nav.mdx";
  slug: "css/nav";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/opacity.mdx": {
	id: "css/opacity.mdx";
  slug: "css/opacity";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/outline.mdx": {
	id: "css/outline.mdx";
  slug: "css/outline";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/overflow.mdx": {
	id: "css/overflow.mdx";
  slug: "css/overflow";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/overview.mdx": {
	id: "css/overview.mdx";
  slug: "css/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/padding.mdx": {
	id: "css/padding.mdx";
  slug: "css/padding";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/position.mdx": {
	id: "css/position.mdx";
  slug: "css/position";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/pseudo-classes.mdx": {
	id: "css/pseudo-classes.mdx";
  slug: "css/pseudo-classes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/syntax.mdx": {
	id: "css/syntax.mdx";
  slug: "css/syntax";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/tables.mdx": {
	id: "css/tables.mdx";
  slug: "css/tables";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/text.mdx": {
	id: "css/text.mdx";
  slug: "css/text";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/types.mdx": {
	id: "css/types.mdx";
  slug: "css/types";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/visibility.mdx": {
	id: "css/visibility.mdx";
  slug: "css/visibility";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"css/z-index.mdx": {
	id: "css/z-index.mdx";
  slug: "css/z-index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"development/embed-bin.mdx": {
	id: "development/embed-bin.mdx";
  slug: "development/embed-bin";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"development/embed-files.mdx": {
	id: "development/embed-files.mdx";
  slug: "development/embed-files";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"development/front-call-rust.mdx": {
	id: "development/front-call-rust.mdx";
  slug: "development/front-call-rust";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"development/gstreamer.mdx": {
	id: "development/gstreamer.mdx";
  slug: "development/gstreamer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"development/overview.mdx": {
	id: "development/overview.mdx";
  slug: "development/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"development/reduce-size.mdx": {
	id: "development/reduce-size.mdx";
  slug: "development/reduce-size";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"development/rust-call-front.mdx": {
	id: "development/rust-call-front.mdx";
  slug: "development/rust-call-front";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"development/test-comp.mdx": {
	id: "development/test-comp.mdx";
  slug: "development/test-comp";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"development/updating-deps.mdx": {
	id: "development/updating-deps.mdx";
  slug: "development/updating-deps";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"distribution/github/arm.mdx": {
	id: "distribution/github/arm.mdx";
  slug: "distribution/github/arm";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"distribution/github/overview.mdx": {
	id: "distribution/github/overview.mdx";
  slug: "distribution/github/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"distribution/github/selfhosted.mdx": {
	id: "distribution/github/selfhosted.mdx";
  slug: "distribution/github/selfhosted";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"distribution/github/tauri-action.mdx": {
	id: "distribution/github/tauri-action.mdx";
  slug: "distribution/github/tauri-action";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"distribution/linux/aur.mdx": {
	id: "distribution/linux/aur.mdx";
  slug: "distribution/linux/aur";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"distribution/linux/flathub/flatpak.mdx": {
	id: "distribution/linux/flathub/flatpak.mdx";
  slug: "distribution/linux/flathub/flatpak";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"distribution/linux/flathub/metainfo.mdx": {
	id: "distribution/linux/flathub/metainfo.mdx";
  slug: "distribution/linux/flathub/metainfo";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"distribution/linux/flathub/requirements.mdx": {
	id: "distribution/linux/flathub/requirements.mdx";
  slug: "distribution/linux/flathub/requirements";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"distribution/linux/flathub/submit.mdx": {
	id: "distribution/linux/flathub/submit.mdx";
  slug: "distribution/linux/flathub/submit";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"distribution/linux/overview.mdx": {
	id: "distribution/linux/overview.mdx";
  slug: "distribution/linux/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"distribution/linux/pacstall.mdx": {
	id: "distribution/linux/pacstall.mdx";
  slug: "distribution/linux/pacstall";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"distribution/linux/snapcraft.mdx": {
	id: "distribution/linux/snapcraft.mdx";
  slug: "distribution/linux/snapcraft";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"distribution/microsoft.mdx": {
	id: "distribution/microsoft.mdx";
  slug: "distribution/microsoft";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"distribution/overview.mdx": {
	id: "distribution/overview.mdx";
  slug: "distribution/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/attributes.mdx": {
	id: "html/attributes.mdx";
  slug: "html/attributes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/display.mdx": {
	id: "html/display.mdx";
  slug: "html/display";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/div.mdx": {
	id: "html/div.mdx";
  slug: "html/div";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/elements.mdx": {
	id: "html/elements.mdx";
  slug: "html/elements";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/favicons.mdx": {
	id: "html/favicons.mdx";
  slug: "html/favicons";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/head.mdx": {
	id: "html/head.mdx";
  slug: "html/head";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/headings.mdx": {
	id: "html/headings.mdx";
  slug: "html/headings";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/identifiers.mdx": {
	id: "html/identifiers.mdx";
  slug: "html/identifiers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/iframes.mdx": {
	id: "html/iframes.mdx";
  slug: "html/iframes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/images.mdx": {
	id: "html/images.mdx";
  slug: "html/images";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/links.mdx": {
	id: "html/links.mdx";
  slug: "html/links";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/lists.mdx": {
	id: "html/lists.mdx";
  slug: "html/lists";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/media/audio.mdx": {
	id: "html/media/audio.mdx";
  slug: "html/media/audio";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/media/overview.mdx": {
	id: "html/media/overview.mdx";
  slug: "html/media/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/media/video.mdx": {
	id: "html/media/video.mdx";
  slug: "html/media/video";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/media/youtube.mdx": {
	id: "html/media/youtube.mdx";
  slug: "html/media/youtube";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/overview.mdx": {
	id: "html/overview.mdx";
  slug: "html/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/paragraphs.mdx": {
	id: "html/paragraphs.mdx";
  slug: "html/paragraphs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/quotes.mdx": {
	id: "html/quotes.mdx";
  slug: "html/quotes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/styles.mdx": {
	id: "html/styles.mdx";
  slug: "html/styles";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/symbols.mdx": {
	id: "html/symbols.mdx";
  slug: "html/symbols";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/tables.mdx": {
	id: "html/tables.mdx";
  slug: "html/tables";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/text-formating.mdx": {
	id: "html/text-formating.mdx";
  slug: "html/text-formating";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"html/title.mdx": {
	id: "html/title.mdx";
  slug: "html/title";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/getting-started/backend-conf.mdx": {
	id: "introduction/getting-started/backend-conf.mdx";
  slug: "introduction/getting-started/backend-conf";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/getting-started/frontend-conf.mdx": {
	id: "introduction/getting-started/frontend-conf.mdx";
  slug: "introduction/getting-started/frontend-conf";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/getting-started/overview.mdx": {
	id: "introduction/getting-started/overview.mdx";
  slug: "introduction/getting-started/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/getting-started/project.mdx": {
	id: "introduction/getting-started/project.mdx";
  slug: "introduction/getting-started/project";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/getting-started/tauri-conf.mdx": {
	id: "introduction/getting-started/tauri-conf.mdx";
  slug: "introduction/getting-started/tauri-conf";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/overview.md": {
	id: "introduction/overview.md";
  slug: "introduction/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"introduction/prerequisites/linux.mdx": {
	id: "introduction/prerequisites/linux.mdx";
  slug: "introduction/prerequisites/linux";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/prerequisites/linux/android.mdx": {
	id: "introduction/prerequisites/linux/android.mdx";
  slug: "introduction/prerequisites/linux/android";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/prerequisites/linux/nodejs.mdx": {
	id: "introduction/prerequisites/linux/nodejs.mdx";
  slug: "introduction/prerequisites/linux/nodejs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/prerequisites/linux/overview.mdx": {
	id: "introduction/prerequisites/linux/overview.mdx";
  slug: "introduction/prerequisites/linux/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/prerequisites/linux/rust.mdx": {
	id: "introduction/prerequisites/linux/rust.mdx";
  slug: "introduction/prerequisites/linux/rust";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/prerequisites/linux/snap.mdx": {
	id: "introduction/prerequisites/linux/snap.mdx";
  slug: "introduction/prerequisites/linux/snap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/prerequisites/windows/android.mdx": {
	id: "introduction/prerequisites/windows/android.mdx";
  slug: "introduction/prerequisites/windows/android";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/prerequisites/windows/build-tools.mdx": {
	id: "introduction/prerequisites/windows/build-tools.mdx";
  slug: "introduction/prerequisites/windows/build-tools";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/prerequisites/windows/git.mdx": {
	id: "introduction/prerequisites/windows/git.mdx";
  slug: "introduction/prerequisites/windows/git";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/prerequisites/windows/nodejs.mdx": {
	id: "introduction/prerequisites/windows/nodejs.mdx";
  slug: "introduction/prerequisites/windows/nodejs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/prerequisites/windows/overview.mdx": {
	id: "introduction/prerequisites/windows/overview.mdx";
  slug: "introduction/prerequisites/windows/overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"introduction/prerequisites/windows/rust.mdx": {
	id: "introduction/prerequisites/windows/rust.mdx";
  slug: "introduction/prerequisites/windows/rust";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/arrays.mdx": {
	id: "javascript/arrays.mdx";
  slug: "javascript/arrays";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/classes.mdx": {
	id: "javascript/classes.mdx";
  slug: "javascript/classes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/conditions.mdx": {
	id: "javascript/conditions.mdx";
  slug: "javascript/conditions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/dates.mdx": {
	id: "javascript/dates.mdx";
  slug: "javascript/dates";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/dom.mdx": {
	id: "javascript/dom.mdx";
  slug: "javascript/dom";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/error-handling.mdx": {
	id: "javascript/error-handling.mdx";
  slug: "javascript/error-handling";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/events.mdx": {
	id: "javascript/events.mdx";
  slug: "javascript/events";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/functions.mdx": {
	id: "javascript/functions.mdx";
  slug: "javascript/functions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/intro.mdx": {
	id: "javascript/intro.mdx";
  slug: "javascript/intro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/loops.mdx": {
	id: "javascript/loops.mdx";
  slug: "javascript/loops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/math.mdx": {
	id: "javascript/math.mdx";
  slug: "javascript/math";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/numbers.mdx": {
	id: "javascript/numbers.mdx";
  slug: "javascript/numbers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/objects.mdx": {
	id: "javascript/objects.mdx";
  slug: "javascript/objects";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/operators.mdx": {
	id: "javascript/operators.mdx";
  slug: "javascript/operators";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/strings.mdx": {
	id: "javascript/strings.mdx";
  slug: "javascript/strings";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/type-conversion.mdx": {
	id: "javascript/type-conversion.mdx";
  slug: "javascript/type-conversion";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"javascript/variables.mdx": {
	id: "javascript/variables.mdx";
  slug: "javascript/variables";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}

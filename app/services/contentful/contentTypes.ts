import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCyoaChoiceFields {
    title?: EntryFieldTypes.Symbol;
    destination?: EntryFieldTypes.EntryLink<TypeCyoaPageSkeleton>;
}

export type TypeCyoaChoiceSkeleton = EntrySkeletonType<TypeCyoaChoiceFields, "cyoaChoice">;
export type TypeCyoaChoice<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCyoaChoiceSkeleton, Modifiers, Locales>;

// The original, generated type-guard wasn't sufficient for nested entries, so I've updated it to be more flexible. This accepts `unknown`, which is basically anything, which is what we need because Contentful's API response could carry some unexpected data due to old, outdated linked entries.
export function isTypeCyoaChoice<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(entry: unknown): entry is TypeCyoaChoice<Modifiers, Locales> {
  if (typeof entry === "object" && entry !== null && "sys" in entry) {
    return (
      (entry as Entry<EntrySkeletonType, Modifiers, Locales>).sys?.contentType
        ?.sys?.id === "cyoaChoice"
    );
  }
  return false;
}

// export function isTypeCyoaChoice<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeCyoaChoice<Modifiers, Locales> {
//     return entry.sys.contentType.sys.id === 'cyoaChoice'
// }

export type TypeCyoaChoiceWithoutLinkResolutionResponse = TypeCyoaChoice<"WITHOUT_LINK_RESOLUTION">;
export type TypeCyoaChoiceWithoutUnresolvableLinksResponse = TypeCyoaChoice<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeCyoaChoiceWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeCyoaChoice<"WITH_ALL_LOCALES", Locales>;
export type TypeCyoaChoiceWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeCyoaChoice<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeCyoaChoiceWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeCyoaChoice<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

export interface TypeCyoaPageFields {
    title?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.RichText;
    choice?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCyoaChoiceSkeleton>>;
}

export type TypeCyoaPageSkeleton = EntrySkeletonType<TypeCyoaPageFields, "cyoaPage">;
export type TypeCyoaPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCyoaPageSkeleton, Modifiers, Locales>;

export function isTypeCyoaPage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeCyoaPage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'cyoaPage'
}

export type TypeCyoaPageWithoutLinkResolutionResponse = TypeCyoaPage<"WITHOUT_LINK_RESOLUTION">;
export type TypeCyoaPageWithoutUnresolvableLinksResponse = TypeCyoaPage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeCyoaPageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeCyoaPage<"WITH_ALL_LOCALES", Locales>;
export type TypeCyoaPageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeCyoaPage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeCyoaPageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeCyoaPage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

export interface TypeCyoaStoryFields {
    title?: EntryFieldTypes.Symbol;
    entryPage?: EntryFieldTypes.EntryLink<TypeCyoaPageSkeleton>;
    description?: EntryFieldTypes.RichText;
}

export type TypeCyoaStorySkeleton = EntrySkeletonType<TypeCyoaStoryFields, "cyoaStory">;
export type TypeCyoaStory<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCyoaStorySkeleton, Modifiers, Locales>;

export function isTypeCyoaStory<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeCyoaStory<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'cyoaStory'
}

export type TypeCyoaStoryWithoutLinkResolutionResponse = TypeCyoaStory<"WITHOUT_LINK_RESOLUTION">;
export type TypeCyoaStoryWithoutUnresolvableLinksResponse = TypeCyoaStory<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeCyoaStoryWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeCyoaStory<"WITH_ALL_LOCALES", Locales>;
export type TypeCyoaStoryWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeCyoaStory<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeCyoaStoryWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeCyoaStory<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

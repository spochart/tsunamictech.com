import type { MenuLink } from "@/types";
import type { CollectionEntry } from "astro:content";

/** Filters array of menu links where content exists */
export function compactMenuLinks(
	links: MenuLink[],
	collections: Record<string, CollectionEntry<"note" | "post">[]>,
) {
	return links.filter((l) => {
		const k = l.title.toLowerCase();

		if (collections[k]) {
			if (collections[k].length > 0) {
				return true;
			}

			return false;
		} else {
			return true;
		}
	});
}

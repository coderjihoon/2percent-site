import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Portfolio")
        .child(
          S.documentTypeList("portfolio")
            .title("Portfolio")
            .defaultOrdering([
              { field: "order", direction: "asc" },
              { field: "year", direction: "desc" },
            ]),
        ),
    ]);

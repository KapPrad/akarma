const singleton = (S, type) =>
  S.document().schemaType(type).documentId(type).title("Site Settings");

const deskStructure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(singleton(S, "siteSettings")),
      S.divider(),
      S.documentTypeListItem("program").title("Programs"),
      S.documentTypeListItem("event").title("Events"),
      S.documentTypeListItem("teacher").title("Teachers"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
    ]);

export default deskStructure;

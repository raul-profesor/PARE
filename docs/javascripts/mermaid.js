mermaid.initialize({ startOnLoad: false });

document$.subscribe(() => {
  mermaid.run({ querySelector: ".mermaid" });
});

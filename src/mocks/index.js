const items = Array(10)
  .fill("")
  .map((_, id) => {
    return {
      title: `This is Title ${id}`,
      content: `This is content for ${id}`
    };
  });

export { items };

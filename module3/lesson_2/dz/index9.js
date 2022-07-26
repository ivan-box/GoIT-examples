function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";

  return {
    completed,
    category,
    priority,
    ...data,
  };
}

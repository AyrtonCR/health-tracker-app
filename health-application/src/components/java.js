document.on("click", ".add_field", function () {
  '<input type="text" class="input" name="field[]" value="">'.insertAfter(
    ".input:last",
  );
});

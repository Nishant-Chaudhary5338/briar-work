test("renders DropDownButton component with default option", () => {
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    // Add more options if needed
  ];

  const defaultOption = "1";
  const onOptionChange = jest.fn(); // Mock the onOptionChange callback function

  render(
    <DropDownButton
      options={options}
      defaultOption={defaultOption}
      onOptionChange={onOptionChange}
    />,
  );

  // Check if the component renders correctly with the default option
  const dropdown = screen.getByLabelText("Select an option");
  expect(dropdown).toBeInTheDocument();
  expect(dropdown.value).toBe(defaultOption);
});

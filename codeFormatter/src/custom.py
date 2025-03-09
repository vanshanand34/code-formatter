def custom_print(str_soure: str) -> None:
    print("Printing the text")
    print(str_soure)
    print("Printing Completed")


custom_json = {"name": "Vansh", "branch": "IT-2", "year": 3, "University": "IP"}


def another_print(
    start_text: str, actual_text: str, end_text: str, helping_text: str, *args, **kwargs
) -> None:
    print(start_text, actual_text, end_text, helping_text, *args, **kwargs)


another_print(
    "Starting the execution of function",
    "inside function",
    "Function execution competed",
    "Function to print string in a format",
)

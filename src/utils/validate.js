const checkValidData = (fullName, email, password) => {
	const isPasswordValid =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

	const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

	if (fullName !== null && fullName !== undefined) {
		const isNameValid = /^[A-ZÀ-ÿ][a-zÀ-ÿ'.-]*( [A-ZÀ-ÿ][a-zÀ-ÿ'.-]*)*$/.test(
			fullName
		);
		if (!isNameValid)
			return "* Name must start with a capital letter and contain only letters and spaces";
	}

	if (!isEmailValid) return "* Invaild Email";
	if (!isPasswordValid)
		return "* Password must contain at least 8 characters, including uppercase, lowercase letters and numbers";

	return null;
};

export default checkValidData;

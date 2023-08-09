const handleError = (error: any, customMessage?: string) => {
	console.log(error);
	console.log(`------------------------------`);
	console.log(`ERROR NAME: ${error?.name}`);
	console.log(`ERROR MESSAGE: ${error?.message}`);
	console.log(customMessage && `CUSTOM MESSAGE: ${customMessage}`);
	console.log(`------------------------------`);
};

export default handleError;

declare interface SBECC {
	/**
	 * Returns 0 on success, 1 on failure.
	 */
	createContext: () => number;

	/**
	 * Make sure you called createContext() before calling this function.
	 */
	encrypt: (script: string) => Uint8Array;

	/**
	 * Returns 0 on success, 1 on failure. Frees memory, not necessary to be called though.
	 */
	destroyContext: () => number;
}

declare const m: Promise<SBECC>
export = m;
export const ADD_ROWS = 'ADD_ROWS';

export const addRows = (numRows: number) => ({
	type: ADD_ROWS,
	payload: {
		numRows
	}
});

export const REMOVE_ROW = 'REMOVE_ROW';
export const removeRow = (id: string) => ({ type: REMOVE_ROW, payload: { id } });

export const CHANGE_TITLE = 'CHANGE_TITLE';
export const onChangeTitle = (id: string, value: string) => ({
	type: CHANGE_TITLE,
	payload: {
		id, value
	}
});

export const SELECT_DATA_TYPE = 'SELECT_DATA_TYPE';
export const onSelectDataType = (id: string, value: string) => ({
	type: SELECT_DATA_TYPE,
	payload: {
		id, value
	}
});

export const CONFIGURE_DATA_TYPE = 'CONFIGURE_DATA_TYPE';
export const onConfigureDataType = (id: string, data: any) => ({
	type: CONFIGURE_DATA_TYPE,
	payload: {
		id, data
	}
});

export const REPOSITION_ROW = 'REPOSITION_ROW';
export const repositionRow = (id: string, newIndex: number) => ({
    type: REPOSITION_ROW,
    payload: {
        id, newIndex
    }
});

export const TOGGLE_GRID = 'TOGGLE_GRID';
export const toggleGrid = () => ({ type: TOGGLE_GRID });

export const TOGGLE_PREVIEW = 'TOGGLE_PREVIEW';
export const togglePreview = () => ({ type: TOGGLE_PREVIEW });

export const TOGGLE_LAYOUT = 'TOGGLE_LAYOUT';
export const toggleLayout = () => ({ type: TOGGLE_LAYOUT });

export const UPDATE_NUM_PREVIEW_ROWS = 'UPDATE_NUM_PREVIEW_ROWS';
export const updateNumPreviewRows = (numRows: number) => ({ type: UPDATE_NUM_PREVIEW_ROWS, payload: { numRows }})

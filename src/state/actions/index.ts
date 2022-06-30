import { ActionType } from '../action-types';

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOTIORIES;
};

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOTIORIES_SUCCESS;
    payload: string[];
};

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOTIORIES_ERROR;
    payload: string;
};

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;


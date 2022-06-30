import { ActionType } from '../action-types';
import { Action} from '../actions';

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
};

const reducer =
    (
        state: RepositoriesState, action: Action
    ): RepositoriesState => {

        // if(action.type === 'search_repositories_success') {
        //     // 100% certainty that 'action' satisfies the
        //     // SearchRepositoriesSuccessAction interface
        //     action.payload
        // }
        switch (action.type) {
            case ActionType.SEARCH_REPOTIORIES:
                return { loading: true, error: null, data: [] }
            case ActionType.SEARCH_REPOTIORIES_SUCCESS:
                return { loading: false, error: null, data: action.payload }
            case ActionType.SEARCH_REPOTIORIES_ERROR:
                return { loading: false, error: action.payload, data: [] }
            default:
                return state;
        }
    };

export default reducer;
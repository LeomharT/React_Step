const PersonInfo = (state: FormData = new FormData(), action: any) =>
{
    switch (action.type)
    {
        case "AddInfo": {
            state.append(action.data.name, action.data.value);
            return state;
        }
        default:
            return state;
    }
};

const CurrentStep = (state: number = 0, action: any) =>
{
    switch (action.type)
    {
        case "NextStep":
            state++;
            return state;
        case "PreviousStep":
            state--;
            return state;
        default:
            return state;
    }
};




export { PersonInfo, CurrentStep };

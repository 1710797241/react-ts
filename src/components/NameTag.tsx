import * as React from 'react';
import { ThemeConsumer } from '../theme/theme-context';
type Tag = {
    name: string;
    hobby?: string[];
};
type ButtonTypes = {
    type?: 'primary' | 'danger' | 'dashed' | 'ghost';
};
type Item = {
    id: number;
    name: string;
};
type dataType = {
    obj: {};
    obj2: object;
    item: Item;
    itemList: Item[];
};

//React.ReactNode
//React.ReactChild[]
//JSX.Element[]
// JSX.Element[] | JSX.Element
//React.ReactElement | React.ReactElement[]
//JSX.Element;: 💩 This doesn't account for arrays at all.
// JSX.Element | JSX.Element[]; 😕 This doesn't accept strings.
// React.ReactChildren;: 🤪 Not at even an appropriate type; it's a utility function.
// React.ReactChild[];: 😀 Accepts multiple children, but it doesn't accept a single child.
// React.ReactNode;: 🏆 Accepts everything.
type NameTagProps = {
    children: React.ReactNode;
} & Tag &
    ButtonTypes;

type TextTypeStyle = {
    style: React.CSSProperties;
};
const data: dataType = {
    obj: {},
    obj2: {},
    item: {
        id: 1,
        name: '1',
    },
    itemList: [
        {
            id: 1,
            name: '1',
        },
    ],
};
type ItemHash = {
    [key: number | string]: object;
};
const mapData: ItemHash = {
    1: {},
    2: {},
};
type IActionTypes = {
    type: 'add' | 'minus' | 'set';
    paylod: {
        [key: string | number]: number;
    };
};
type IState = {
    [key: string | number]: number;
};
const reducerForNum = (state: IState, action: IActionTypes) => {
    switch (action.type) {
        case 'add':
            return { ...state, num: state.num + action.paylod.num };
        case 'minus':
            return { ...state, num: state.num - action.paylod.num };
        case 'set':
            return { ...state, num: action.paylod.num };
        default:
            return state;
    }
};
type User = {
    name: string;
    sex: number;
    address?: string;
};

const UserComponent = ({
    user,
    dispatch,
}: {
    user: User;
    dispatch: React.Dispatch<IActionTypes>;
}) => {
    return (
        <div>
            {user.name}
            <button
                onClick={() => {
                    dispatch({
                        type: 'set',
                        paylod: {
                            num: 8520 + Math.random(),
                        },
                    });
                }}
            >
                子组件调用父组件的dispatch1
            </button>
        </div>
    );
};
interface FormComponent {
    props: { name: string };
    state: { num: number };
}
class FormComponent extends React.Component {
    state = {
        num: 0,
    };
    render(): React.ReactNode {
        return <div>{this.props.name}</div>;
    }
}
type FormComponentProps = {
    [key: string]: string | number | boolean | object;
};
type FormComponentState = {
    [key: string]: never;
    // count: number;
};
function useYiyi<T>(init: T): [T, Function] {
    let i = init;
    return [
        i,
        function (num: T) {
            console.log('执行');
            i = num;
        },
    ];
}
type Link<T> = {
    value: T;
    next: Link<T>;
};
// const createNode = <T>(value: T): Link<T> => ({ value });

// const addNext = <T>(node: Link<T>, value: T): Link<T> => {
//   node.next = createNode(value);
//   return node;
// };

class FormComponent2 extends React.Component<FormComponentProps, FormComponentState> {
    constructor(props: FormComponentProps) {
        super(props);
        this.state = {};
    }
    render() {
        return <div>{this.props.name}</div>;
    }
}
const NameTag = (props: any) => {
    const { name, type, children }: NameTagProps = props;
    const [count, setCount] = React.useState<number>(1);
    const [user, setUser] = React.useState<User | null>(null);
    const [numState, dispatch] = React.useReducer(reducerForNum, { num: 1, money: 100 });
    const [aj, setAj] = useYiyi(2);
    React.useEffect(() => {
        setCount(2);
        fetchData().then(res => {
            setUser(res);
        });
    }, []);

    const fetchData = (): Promise<User> => {
        const user: User = {
            name: 'qiyie',
            sex: 0,
        };
        return Promise.resolve(user);
    };
    const currentTime = (): string => {
        console.log(this, 'this');
        return new Date().toLocaleString();
    };

    function random(seed: number = 0, ...args: number[]): number {
        console.log(arguments, 'arguments');
        return Math.random() + seed;
    }
    console.log('render');
    const handleState = () => {
        setTimeout(() => {
            dispatch({
                type: 'add',
                paylod: {
                    num: 2,
                },
            });
        }, 16);
        console.log('numState', numState);
    };
    const handleVal = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        let { value } = e.target;
        dispatch({
            type: 'set',
            paylod: {
                num: parseInt(value),
            },
        });
    };
    return (
        <React.Fragment>
            <div>{name}</div>
            <div>{type}</div>
            <div>{data.item.name}</div>
            <div>{currentTime()}</div>
            <div>{random(100)}</div>
            <div>{count}</div>
            <div>
                <button
                    onClick={() => {
                        dispatch({
                            type: 'minus',
                            paylod: {
                                num: 2,
                            },
                        });
                    }}
                >
                    -
                </button>
                {numState.num}
                <button
                    onClick={() => {
                        handleState();
                    }}
                >
                    +
                </button>
            </div>
            <div>
                <input type="number" onChange={handleVal} />
            </div>
            {/* <UserComponent user={user} /> */}
            <div>
                {numState.num > 0
                    ? user && dispatch && <UserComponent dispatch={dispatch} user={user} />
                    : null}
            </div>
            <FormComponent name="formcomponent" />
            <FormComponent2 name="formComponent2" />
            <div>aj:{aj}</div>
            <div
                onClick={() => {
                    setAj(99);
                }}
            >
                setAj
            </div>
            <div>
                <ThemeConsumer>
                    {props => {
                        console.log('props', props);
                        return <div>ThemeConsumer:{props.r}</div>;
                    }}
                </ThemeConsumer>
            </div>
        </React.Fragment>
    );
};

export default NameTag;

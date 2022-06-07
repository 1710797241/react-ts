import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IRgbContext, ThemeContext } from './theme/theme-context';
import NameTag from './components/NameTag';
type commonTypes = {
    style: React.CSSProperties;
};
type buttonTypes = commonTypes & {
    type: 'primary' | 'danger' | 'link';
};

interface textTypes extends commonTypes {
    fontSize: Number;
    color: String;
}
const MyText = (props: textTypes) => {
    return <div></div>;
};
function of<T>(a: T | T[]): T[] {
    if (Array.isArray(a)) {
        return a;
    }
    return [a];
}

const a = of(1); // const a: number[]
const b = of([1]); // const b: number[]
type rowProps<T> = {
    children: T;
};
const Rows = <T,>(pros: rowProps<T>) => {
    return <div></div>;
};
function Rows1<T extends String | Number>({ children }: rowProps<T>) {
    return <div></div>;
}
const renderRow = () => {
    let status = 1;
    return status ? (
        <Rows>
            <button></button>
        </Rows>
    ) : (
        <Rows1>1</Rows1>
    );
};
const CharacterInformation = () => {
    return <div></div>;
};
const withComponent = () => {
    return (Component: any) => {
        return <Component addition={{ suffix: '12' }}></Component>;
    };
};
type TextProps = {
    children: string;
} & React.ComponentPropsWithoutRef<'div'>;

type NoTruncateTextProps = TextProps & { truncate?: false };
type TruncateTextProps = TextProps & { truncate: true; expanded?: boolean };

const truncateString = (string: string, length = 100) => string.slice(0, length) + '…';
function Text(props: NoTruncateTextProps): JSX.Element;
function Text(props: TruncateTextProps): JSX.Element;
function Text(props: TextProps & { truncate?: boolean; expanded?: boolean }) {
    const { children, truncate, expanded, ...otherProps } = props;
    const shouldTruncate = truncate && !expanded;
    return (
        <div aria-expanded={!!expanded} {...otherProps}>
            {shouldTruncate ? truncateString(children) : children}
        </div>
    );
}
const CharacterInformationWithCharacter = withComponent()(CharacterInformation);
const App = () => {
    const context = React.useContext(ThemeContext);
    console.log('context', context);
    // const { r, g, b, dispatch }: IRgbContext;
    type Link<T> = {
        value: T;
        next?: Link<T>;
    };
    const firstLink: Link<number> = {
        value: 2,
        next: {
            value: 4,
            next: {
                value: 2,
            },
        },
    };
    // function add <T>(arg:T){
    //   console.log(arg)
    // }
    // add(1)
    // const createNode = <T>(value: T): Link<T> => ({ value });

    // const addNext = <T>(node: Link<T>, value: T): Link<T> => {
    //   node.next = createNode(value);
    //   return node;
    // };

    // const createNodeAndNext = <T>(first: T, second: T) => {
    //   const firstNode = createNode(first);
    //   firstNode.next = createNode(second);
    //   return firstNode;
    // };

    // const createNodeAndNextTapped = <T>(first: T, second: T): Link<T> =>
    //   tap(createNode(first), (node) => addNext(node, second));

    // const node = createNode(4);
    // const nextNode = addNext(node, 5);
    // const twoNodes = createNodeAndNextTapped(1, 2);
    // const twoMoreNodes = createNodeAndNext(4, 5);
    type A = 'a' | 'b' | 'c';
    type B = 'b' | 'c' | 'd';

    // Inferred Type: "b" | "c"
    type Intersection = A & B;
    type Intersection1 = A | B;
    type Wrap<T> = T extends { length: number } ? [T] : T;
    type IsAssignableTo<A, B> = A extends B ? true : false;

    // Type `123` is assignable to type `number`
    // Inferred Type: true
    //type Result1 = IsAssignableTo<123, number>;

    // Type `number` is not assignable to type `123`
    // Inferred Type: false
    //type Result2 = IsAssignableTo<number, 123>;

    type Exclude<T, U> = T extends U ? never : T;

    // Inferred Type: 1 | 3
    //type Result0 = Exclude<1 | 2 | 3, 2>;

    // Inferred Type: "a" | "b"
    //type Result1 = Exclude<1 | "a" | 2 | "b", number>;

    // Inferred Type: "a" | 2
    //type Result2 = Exclude<1 | "a" | 2 | "b", 1 | "b" | "c">;
    type Extract<T, U> = T extends U ? T : never;

    // Inferred Type: 1 | 2
    type Result1 = Extract<1 | 'a' | 2 | 'b', number>;

    // Inferred Type: 1 | "b"
    type Result2 = Extract<1 | 'a' | 2 | 'b', 1 | 'b' | 'c'>;

    type ObjectWithStringKeys = { [key: string]: number };

    type Result = {
        [K in 'a' | 'b' | 'c']: number;
    };

    type ObjectLiteralType = {
        a: '';
        b: '';
    };
    type Mask = {
        [K in keyof ObjectLiteralType]: boolean;
    };
    type CharacterClass = 'warror' | 'paladin' | 'wizard' | 'cleric';

    type LawChaos = 'lawful' | 'neutral' | 'chaotic';
    type GoodEvil = 'good' | 'neutral' | 'evil';

    type Alignment = `${LawChaos}-${GoodEvil}`;

    const colors = ['red', 'green', 'blue'] as const;
    type ColorsType = Uppercase<typeof colors[number]>;
    type Colors = Uppercase<typeof colors[number]>;
    type ActionTypes = `ADJUST_${Colors}`;

    type AdjustmentAction = {
        type: `ADJUST_${Colors}`;
        payload: number;
    };

    type obj1 = {
        a: '1';
        b: '2';
        c: '3';
    };
    //Omit Pick
    type pickObj = Pick<obj1, 'a' | 'b'>;
    type OmitObj = Omit<obj1, 'c'>;
    type dataObj = {
        [key: string | number]: null | string | number | string[] | number[] | dataObj[];
    };
    const data: dataObj[] = [
        {
            a: 'A',
            b: 'B',
            list: [
                {
                    label: '1',
                    value: '1',
                },
                {
                    a: 'A',
                    b: 'B',
                    list: [
                        {
                            label: '1',
                            value: '1',
                        },
                    ],
                },
            ],
        },
    ];
    return (
        <div
            style={{
                backgroundColor: `rgb(${context?.r},${context?.g},${context?.b})`,
                color: '#fff',
            }}
            className="App"
        >
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <button
                onClick={() => {
                    context &&
                        context.dispatch &&
                        context.dispatch({
                            type: 'set',
                            paylod: {
                                r: Math.random(),
                                g: Math.random() + 10,
                                b: Math.random() + 100,
                            },
                        });
                }}
            >
                change context
            </button>
            <NameTag name="nametag" type={'primary'}>
                kdjfkdjfk
            </NameTag>
        </div>
    );
};

export default App;

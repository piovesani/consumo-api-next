import { ReactElement } from "react";

type Props = {
    body: ReactElement;
}

const Main = ({body}: Props) => {
    return(
        <div>
            <main>{body}</main>
        </div>
    );
}

export default Main;
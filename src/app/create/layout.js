import styles from "./create.module.css"

// 반드시 props를 인자로 받아야 한다.
export default function Layout(props) {
    return(
        <form>
            <h2 id={styles.fontColor}>Create-layout</h2>
            {/* creat안에 있는 page.js를 표현하자 */}
            {props.children}
        </form>
    );
}
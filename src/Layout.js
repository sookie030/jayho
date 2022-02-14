import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import styles from "./Layout.module.css";

export default function Layout() {
	return (
		<div className={styles.wrapper}>
			{/* 좌측 내비 */}
			<div className={styles.nav}>
				<button>Create Project</button>
				<ul>
					<li>Project Name1</li>
					<li>Project Name2</li>
					<li>Project Name3</li>
				</ul>
			</div>

			{/* 우측 */}
			<div className={styles.content}>

				{/* 우측 - 헤더 */}
				<div className={styles.header}>
					<span>Training Page</span>
				</div>

				{/* 우측 메인 */}
				<div className={styles.main}>
					<h1>Project Name 1</h1>
					<div>
						card는 부트스트랩에서 가져와서 쓰먼 될듯
					</div>
					<div>
						<p>Accuracy</p>
						차트도 라이브러리로 ㅇㅋ
					</div>
				</div>

			</div>
		</div>
	);
}
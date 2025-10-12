import styles from "@/styles/about.module.css";
import MyNetwork from "./myNetwork";

export default function AboutSection(){
    return(
        <div>
        <div id="about" className={styles.about}>
            <h2>About</h2>
            <div>
                
                <p>菊池 勇吾（きくち ゆうご）</p>
                東北大学<a href="https://www.icd.riec.tohoku.ac.jp/" target="_blank" rel="noopener noreferrer">
                            インタラクティブコンテンツ研究室
                        </a>
                        に所属
            </div>

            <div>
                <h3>部活動・サークル活動</h3>
                <ul>
                    <li>学部1年～現在
                        <a href="https://micomprocedure.com/" target="_blank" rel="noopener noreferrer">
                            東北大学マイコンプロシージャ（ゲーム制作サークル）
                        </a>
                        に所属
                        <ul>
                            <li>
                                副部長として、主に学祭の企画・運営を担当
                            </li>
                        </ul>
                    </li>
                    <p></p>
                    <li>学部1年～2年
                        <a href="https://tohokuaiki.jp/" target="_blank" rel="noopener noreferrer">
                            東北大学学友会合気道部
                        </a>
                        に所属
                        <ul>
                            <li>
                                部のホームページの更新を担当
                            </li>
                        </ul>
                    </li>
                    <p></p>
                    <li>学部3年～4年 東北大学学友会軽音楽部Feelin’ Freeに所属
                    </li>
                </ul>
            </div>
            {/*
            <div>
                <h3>資格</h3>
                <ul>
                <li>基本情報技術者</li>
                <li>Basic SecCap 10</li>
                <li>TOEIC 775点</li>
                <li>（フランス語検定４級）</li>
                </ul>
            </div>

            <div>
                <h3>使用言語と主な用途（上ほど使用に慣れています）</h3>
                <ul>
                <li>C#（Unity開発中心）</li>
                <li>JavaScript / TypeScript（本ポートフォリオサイト制作・ブラウザ上で動作するアプリケーション制作）</li>
                <li>Python（データ分析、Raspberry Piなど）</li>
                <li>C</li>
                <li>C++</li>
                <li>R</li>
                <li>F#</li>
                </ul>
            </div>*/}

            <div>
                <h3>自分の3つの強み</h3>
                <ol>
                    <li>
                        <strong>興味を持ったものをとりあえず試してみる行動力</strong>
                    </li>
                    →大学に入り、それまで全くの未経験だった合気道、エレキギターに挑戦しました。
                    <p></p>
                    <li>
                        <strong>ユーザー視点での体験やフィードバックが豊富</strong>
                    </li>
                    →作った作品のほとんどは学祭などで一般公開され、そのフィードバックを受けて修正する経験を積んできました。
                    <p></p>
                    <li>
                        <strong>体験のアイデアを生み出せるプログラマー</strong>
                    </li>
                    →開発に携わった作品は自らプロジェクトを立ち上げたものも多いです。自ら思いついたものをプログラミングで実現する、ということを繰り返してきました。
                </ol>
            </div>
        </div>
        <div>
                <h3>私を形成するモノ</h3>
                
                <div className={styles.networkBox}>
                    <MyNetwork />
                </div>
        </div>
        </div>

    )
}
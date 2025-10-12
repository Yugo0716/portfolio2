import styles from "@/styles/secret.module.css";

export default function AboutSection(){
    return(
        <div>
        <div id="about" className={styles.secret}>
            <h2>シークレットページ</h2>
            <div>
                
                <h3>見つけていただきありがとうございます！</h3>
                <p>ここでは、優先的に見せるほどのものでもない没ネタなどを掲載しています。</p>
            </div>
            <h3></h3>
            <div>
                <h3>「ねぇ！寿司取って～」プロトタイプ</h3>
                <a href="/works/neesushitotte" target="_self" rel="noopener noreferrer">「ねぇ！寿司取って～」</a>
                の制作初期段階でのプロトタイプ映像です。
                <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>

                <iframe
                    src={`https://www.youtube.com/embed/OAYIYHGBKcE`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                    }}
                />
                </div>
            </div>
            <h3></h3>
            <div>
                <h3>「おやつカルパスかおやつカルパスじゃないかクイズ!!!」撮影風景</h3>
                <a href="/works/karupasuquiz" target="_self" rel="noopener noreferrer">「おやつカルパスかおやつカルパスじゃないかクイズ!!!」</a>
                の答えを出す時の撮影の様子（音付き）です。1問だけ答えでちょっとした騙しを入れているのですがその時のものです。
                <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>

                <iframe
                    src={`https://www.youtube.com/embed/XZw_9syJykc`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                    }}
                />
                </div>
            </div>
            <h3></h3>
            <div>
                <h3>エレキギター練習風景</h3>
                趣味でやっているエレキギターで演奏してみた時の様子です。あまり上手くない上チューニングもずれています...
                <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>

                <iframe
                    src={`https://www.youtube.com/embed/MqkESrNSbSY`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                    }}
                />
                </div>
                <p></p>
                <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>

                <iframe
                    src={`https://www.youtube.com/embed/OiKw5EJPizM`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                    }}
                />
                </div>
                <p></p>
                <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>

                <iframe
                    src={`https://www.youtube.com/embed/2xqfcfEHU3s`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                    }}
                />
                </div>
            </div>
            
        </div>
        </div>

    )
}
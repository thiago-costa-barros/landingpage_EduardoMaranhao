import Img01 from "../../../assets/img_video/job02/img01.png";
import Img02 from "../../../assets/img_video/job02/gif04.gif";
import Img03 from "../../../assets/img_video/job02/img03.png";
import Img04 from "../../../assets/img_video/job02/gif01.gif";
import Img05 from "../../../assets/img_video/job02/gif02.gif";
import Img06 from "../../../assets/img_video/job02/gif03.gif";
import Img07 from "../../../assets/img_video/job02/img04.png";

import { Image } from 'antd';
import { useState } from 'react';
const List04 = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Image
                preview={{
                    visible: false,
                }}
                width={498}
                height={182}
                src={Img01}
                onClick={() => setVisible(true)}
            />
            <div
                style={{
                    display: 'none',
                }}
            >
                <Image.PreviewGroup
                    preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                    }}
                >
                    <Image src={Img01} />
                    <Image src={Img04} />
                    <Image src={Img05} />
                    <Image src={Img06} />
                    <Image src={Img02} />
                    <Image src={Img07} />
                    <Image src={Img03} />
                </Image.PreviewGroup>
            </div>
        </>
    );
};
export default List04;
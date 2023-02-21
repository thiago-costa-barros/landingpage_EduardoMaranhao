import Img01 from "../../../assets/img_video/job01/img01.jpg";
import Img02 from "../../../assets/img_video/job01/img02.jpg";
import Img03 from "../../../assets/img_video/job01/img03.jpg";
import Img04 from "../../../assets/img_video/job01/gif01.gif";

import { Image } from 'antd';
import { useState } from 'react';
const List03 = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Image
                preview={{
                    visible: false,
                }}
                width={312}
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
                    <Image src={Img02} />
                    <Image src={Img03} />
                    <Image src={Img04} />
                </Image.PreviewGroup>
            </div>
        </>
    );
};
export default List03;
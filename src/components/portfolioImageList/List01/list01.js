import Img01 from "../../../assets/img_video/job05/gif01.gif";
import Img02 from "../../../assets/img_video/job05/gif02.gif";
import Img03 from "../../../assets/img_video/job05/gif03.gif";
import Img04 from "../../../assets/img_video/job05/gif04.gif";

import { Image } from 'antd';
import { useState } from 'react';
const List01 = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Image
                preview={{
                    visible: false,
                }}
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
export default List01;
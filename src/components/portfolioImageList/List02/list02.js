import Img01 from "../../../assets/img_video/foto04.jpg";
import Img02 from "../../../assets/img_video/foto05.jpg";
import Img03 from "../../../assets/img_video/foto06.jpg";

import { Image } from 'antd';
import { useState } from 'react';
const List02 = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Image
                preview={{
                    visible: false,
                }}
                height={304}
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
                </Image.PreviewGroup>
            </div>
        </>
    );
};
export default List02;
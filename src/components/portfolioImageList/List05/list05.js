import Img01 from "../../../assets/img_video/job03/img01.jpg";
import Img02 from "../../../assets/img_video/job03/img02.jpg";
import Img03 from "../../../assets/img_video/job03/img03.jpg";
import Img04 from "../../../assets/img_video/job03/img04.jpg";
import Img05 from "../../../assets/img_video/job03/img05.jpg";
import Img06 from "../../../assets/img_video/job03/img06.jpg";
import Img07 from "../../../assets/img_video/job03/img07.jpg";
import Img08 from "../../../assets/img_video/job03/img08.jpg";

import { Image } from 'antd';
import { useState } from 'react';
const List05 = () => {
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
                    <Image src={Img06} />
                    <Image src={Img02} />
                    <Image src={Img03} />
                    <Image src={Img04} />
                    <Image src={Img08} />
                    <Image src={Img05} />
                    <Image src={Img07} />
                    <Image src={Img01} />
                </Image.PreviewGroup>
            </div>
        </>
    );
};
export default List05;
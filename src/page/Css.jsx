import React from 'react';
import s from '../test.module.scss';

function Css() {
  return (
    <dl>
        <dt>CSS, SCSS</dt>
        <dd>1.npm i sass (i는 설치하는 약자)</dd>
        <dd>2.해당 페이지App.js?에 (import "style.scss")</dd>
        <dd className='test'>3.태그에 속성을 className으로 작성</dd>

        <dt>MODULE</dt>
        <dd className={s.test}>1.파일명 규칙 = 파일명.module.scss (무조건 module이라는 문자가 들어와야함)</dd>
        <dd>2.파일가져오기(import 별칭 from'파일명.module.scss';)</dd>
        <dd>3.적용(className=별칭.클래스명(별칭.클래스명은 중괄호 안에 작성하는거))</dd>
    </dl>
  )
}

export default Css
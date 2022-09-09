import React from "react";
import Author from '../../img/author.jpeg';

const Profile = (props) => {

  return (
    <section id="profile" className="profile">
      <h2 className="title">Profile</h2>

      {/* profileテキスト */}
      <div>
        <article className="container">
          <h2>川北　翔</h2>
          <p>1997年 6月30日生まれ</p>
          <p>現在　千葉県でプロのエンジニアになるために就職活動中です。こちらのサイトでは私のことを詳しく知っていただくために作成してみましたのぜひご覧ください。</p>
          <p>【経歴】</p>
          <p>三重大学・数学教育コースとして数学と教育に関しての勉強を行ってきました。その後、飲食店で2年間働いたあと、フロントエンドエンジニアになるための学習を行ってきました。
          </p>
        </article>
        <img src={Author} alt="Author" />
      </div>

    </section>
  );
}

export default Profile;
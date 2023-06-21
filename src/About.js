import React from 'react';
import './About.css';
import profileImage from './profile-image.jpg';

function About() {
  const educationData = [
    { school: '國立高雄科技大學', department: '智慧商務系' },
    { school: '國立羅東高工', department: '資訊科' },
  ];

  const experienceData = [
    { position: '博相科技助理工程師', description: '協助公司開發影像辨識系統' },
    { position: 'Fuji公司後端工程師', description: '協助Fuji公司開發問卷系統後端與資料庫規劃及環境架架設' },
    { position: '高雄市時代科技協會行政助理', description: '行政工作：如記帳、協助會議進行，資訊工作：協會網站維護' },
    { position: '風清雅築前台房務人員', description: '行政工作：招待客人，房務工作：整理退房房間' },
  ];

  const competitionData = [
    { name: '第十四屆全國電子專題設計競賽', award: '第一名' },
    { name: '宏碁明日生活萬物智聯創作大賽-第三屆', award: '銀牌' },
    { name: '宏碁明日生活萬物智聯創作大賽-第二屆', award: '銅牌' },
    { name: '全國群科專題創意製作競賽-創意組', award: '第三名' },
    { name: '全國高中職智慧生活創意設計競賽', award: '第三名' },
    { name: 'Braino Go全國自走車競賽', award: '第六名' },
    { name: '工業類學生技藝競賽-電腦軟體設計', award: '優勝' },
    { name: '第十五屆全國電子專題設計競賽', award: '佳作' },
    { name: '大專院校資訊應用服務創新競賽', award: '佳作' },
  ];

  return (
    <div className="about">
      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="profile-container">
        <div className="profile-details">
          <h1>關於我</h1>
          <p>
            歡迎您願意點擊查看我的詳細個人介紹，我是目前就讀高科大智慧商務系（原資管系）的大三生<br/>
            目前專精於後端與深度學習開發，也具有基礎前端開發能力，如使用：React以及ReactNative<br/>
            資料庫上也有使用過Mysql＆Firebase&Mongose能夠精熟操作Linux環境如:Ubuntu跟Debian<br/>
            也使用過Azure以及AWS雲端機器，並撰寫腳本以及DockerImage的使用。
          </p>
          <h2>學歷</h2>
          <table>
            <thead>
              <tr>
                <th>校名</th>
                <th>科系</th>
              </tr>
            </thead>
            <tbody>
              {educationData.map((education, index) => (
                <tr key={index}>
                  <td>{education.school}</td>
                  <td>{education.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>工作經驗</h2>
          <table>
            <thead>
              <tr>
                <th>職位</th>
                <th>工作內容</th>
              </tr>
            </thead>
            <tbody>
              {experienceData.map((experience, index) => (
                <tr key={index}>
                  <td>{experience.position}</td>
                  <td>{experience.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>競賽經驗</h2>
          <table>
            <thead>
              <tr>
                <th>比賽名稱</th>
                <th>獲得名稱</th>
              </tr>
            </thead>
            <tbody>
              {competitionData.map((competition, index) => (
                <tr key={index}>
                  <td>{competition.name}</td>
                  <td>{competition.award}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>如有工程師相關職缺歡迎聯絡</p>
        </div>
      </div>
    </div>
  );
}

export default About;

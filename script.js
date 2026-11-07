// テスト用の生徒データ
const students = [
  { id: 1, name: "山田 太郎", status: "未" },
  { id: 2, name: "佐藤 花子", status: "未" },
  { id: 3, name: "鈴木 一郎", status: "未" }
];

function renderList() {
  const container = document.getElementById('student-list');
  container.innerHTML = '';

  students.forEach(student => {
    const card = document.createElement('div');
    card.className = 'student-card';
    card.innerHTML = `
      <span>${student.name}</span>
      <div>
        <span class="status">状態: ${student.status}</span>
        <button class="btn btn-present" onclick="setStatus(${student.id}, '出席')">出席</button>
        <button class="btn btn-absent" onclick="setStatus(${student.id}, '欠席')">欠席</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function setStatus(id, status) {
  const student = students.find(s => s.id === id);
  if (student) {
    student.status = status;
    renderList();
  }
}

// 初回表示
renderList();
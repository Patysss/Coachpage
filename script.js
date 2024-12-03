function showLogin(type) {
    document.getElementById('main-page').classList.add('hidden');
    if (type === 'student') {
      document.getElementById('login-student').classList.remove('hidden');
    } else if (type === 'teacher') {
      document.getElementById('login-teacher').classList.remove('hidden');
    }
  }
  
  function returnToMain() {
    document.querySelectorAll('.hidden').forEach(section => section.classList.add('hidden'));
    document.getElementById('main-page').classList.remove('hidden');
  }
  
  function login(type) {
    if (type === 'student') {
      const username = document.getElementById('student-username').value;
      const password = document.getElementById('student-password').value;
      if (username === 'Alunoteste' && password === 'Alunoteste') {
        document.getElementById('login-student').classList.add('hidden');
        document.getElementById('student-dashboard').classList.remove('hidden');
      } else {
        alert('Login ou senha incorretos!');
      }
    } else if (type === 'teacher') {
      const username = document.getElementById('teacher-username').value;
      const password = document.getElementById('teacher-password').value;
      if (username === 'Profteste' && password === 'Profteste') {
        document.getElementById('login-teacher').classList.add('hidden');
        document.getElementById('teacher-dashboard').classList.remove('hidden');
      } else {
        alert('Login ou senha incorretos!');
      }
    }
  }
  
  function showSection(section) {
    document.querySelectorAll('#teacher-dashboard > div').forEach(div => div.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
  }
  
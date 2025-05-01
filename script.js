// Update user progress (XP)
function updateXP(currentXP, maxXP) {
  const xpProgress = document.getElementById('xp-progress');
  const xpText = document.getElementById('xp-text');
  const xpPercentage = (currentXP / maxXP) * 100;

  xpProgress.style.width = `${xpPercentage}%`;
  xpText.textContent = `${currentXP} / ${maxXP} XP`;
}

// Update leaderboard dynamically
function updateLeaderboard(data) {
  const leaderboardTable = document.getElementById('leaderboard-table').getElementsByTagName('tbody')[0];

  data.forEach((player, index) => {
    const row = leaderboardTable.insertRow();
    row.insertCell(0).textContent = index + 1;
    row.insertCell(1).textContent = player.username;
    row.insertCell(2).textContent = player.xp;
  });
}

// Dummy leaderboard data
const leaderboardData = [
  { username: 'CryptoWizard', xp: 4850 },
  { username: 'BlockchainMaster', xp: 4210 },
  { username: 'CryptoKnight', xp: 3800 },
];

// Initialize the dashboard
function initDashboard() {
  // Set username dynamically
  document.getElementById('username').textContent = 'CryptoHunter';

  // Update XP and leaderboard
  updateXP(2450, 3000);
  updateLeaderboard(leaderboardData);

  // Button action to start mission
  document.getElementById('startMissionBtn').addEventListener('click', () => {
    alert('Mission started!');
    // Further actions like transitioning to a new mission can go here
  });
}

// Call the function to initialize the dashboard
initDashboard();

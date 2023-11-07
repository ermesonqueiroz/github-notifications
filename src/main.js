const { app, Tray, Menu, nativeImage } = require('electron');
const path = require('path');
const octokit = require('./services/octokit');
const config = require('./config')

let tray;

const assetsPath = path.join(__dirname, '../', 'assets');
const icon = nativeImage.createFromPath(path.join(assetsPath, 'icon.png'));
const notificationIcon = nativeImage.createFromPath(path.join(assetsPath, 'notification-icon.png'));

async function checkNotifications() {
	const { data} = await octokit.rest.activity.listNotificationsForAuthenticatedUser();
	return data;
}

async function refreshTrayIcon(hasNotifications = false) {
	if (hasNotifications) tray.setImage(notificationIcon);
	else tray.setImage(icon);
}

async function refreshTrayTooltip(hasNotifications = false) {
	if (hasNotifications) tray.setToolTip('You have no unread notifications');
	else tray.setToolTip('You have unread notifications')
}

async function refreshTray() {
	const notifications = await checkNotifications();

	const hasNotifications = notifications?.length > 0;

	await refreshTrayIcon(hasNotifications);
	await refreshTrayTooltip(hasNotifications);
}

app.whenReady().then(async () => {
	tray = new Tray(icon);

	await refreshTray();
	setInterval(refreshTray, config.refreshInterval * 1000);
});

app.on('before-quit', () => tray.destroy());

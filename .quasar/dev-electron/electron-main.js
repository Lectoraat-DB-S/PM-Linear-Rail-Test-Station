// src-electron/electron-main.ts
import { app, BrowserWindow } from "electron";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";
var platform = process.platform || os.platform();
var currentDir = fileURLToPath(new URL(".", import.meta.url));
var mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    icon: path.resolve(currentDir, "icons/icon.png"),
    // tray icon
    width: 1e3,
    height: 600,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(
        currentDir,
        path.join("C:\\Users\\lucas\\Projects\\PM-Linear-Rail-Test-Station\\RailTestingDashboard\\.quasar\\dev-electron\\preload", "electron-preload.cjs")
      )
    }
  });
  if (true) {
    mainWindow.loadURL("http://localhost:9300");
  } else {
    mainWindow.loadFile("index.html");
  }
  if (true) {
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.webContents.on("devtools-opened", () => {
      mainWindow?.webContents.closeDevTools();
    });
  }
  mainWindow.on("closed", () => {
    mainWindow = void 0;
  });
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (mainWindow === void 0) {
    createWindow();
  }
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjLWVsZWN0cm9uL2VsZWN0cm9uLW1haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGFwcCwgQnJvd3NlcldpbmRvdyB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IG9zIGZyb20gJ29zJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnXG5cbi8vIG5lZWRlZCBpbiBjYXNlIHByb2Nlc3MgaXMgdW5kZWZpbmVkIHVuZGVyIExpbnV4XG5jb25zdCBwbGF0Zm9ybSA9IHByb2Nlc3MucGxhdGZvcm0gfHwgb3MucGxhdGZvcm0oKTtcblxuY29uc3QgY3VycmVudERpciA9IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLicsIGltcG9ydC5tZXRhLnVybCkpXG5cbmxldCBtYWluV2luZG93OiBCcm93c2VyV2luZG93IHwgdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBjcmVhdGVXaW5kb3coKSB7XG4gIC8qKlxuICAgKiBJbml0aWFsIHdpbmRvdyBvcHRpb25zXG4gICAqL1xuICBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgIGljb246IHBhdGgucmVzb2x2ZShjdXJyZW50RGlyLCAnaWNvbnMvaWNvbi5wbmcnKSwgLy8gdHJheSBpY29uXG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA2MDAsXG4gICAgdXNlQ29udGVudFNpemU6IHRydWUsXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgIGNvbnRleHRJc29sYXRpb246IHRydWUsXG4gICAgICAvLyBNb3JlIGluZm86IGh0dHBzOi8vdjIucXVhc2FyLmRldi9xdWFzYXItY2xpLXZpdGUvZGV2ZWxvcGluZy1lbGVjdHJvbi1hcHBzL2VsZWN0cm9uLXByZWxvYWQtc2NyaXB0XG4gICAgICBwcmVsb2FkOiBwYXRoLnJlc29sdmUoXG4gICAgICAgIGN1cnJlbnREaXIsXG4gICAgICAgIHBhdGguam9pbihwcm9jZXNzLmVudi5RVUFTQVJfRUxFQ1RST05fUFJFTE9BRF9GT0xERVIsICdlbGVjdHJvbi1wcmVsb2FkJyArIHByb2Nlc3MuZW52LlFVQVNBUl9FTEVDVFJPTl9QUkVMT0FEX0VYVEVOU0lPTilcbiAgICAgICksXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52LkRFVikge1xuICAgIG1haW5XaW5kb3cubG9hZFVSTChwcm9jZXNzLmVudi5BUFBfVVJMKTtcbiAgfSBlbHNlIHtcbiAgICBtYWluV2luZG93LmxvYWRGaWxlKCdpbmRleC5odG1sJyk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuREVCVUdHSU5HKSB7XG4gICAgLy8gaWYgb24gREVWIG9yIFByb2R1Y3Rpb24gd2l0aCBkZWJ1ZyBlbmFibGVkXG4gICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyB3ZSdyZSBvbiBwcm9kdWN0aW9uOyBubyBhY2Nlc3MgdG8gZGV2dG9vbHMgcGxzXG4gICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vbignZGV2dG9vbHMtb3BlbmVkJywgKCkgPT4ge1xuICAgICAgbWFpbldpbmRvdz8ud2ViQ29udGVudHMuY2xvc2VEZXZUb29scygpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFpbldpbmRvdy5vbignY2xvc2VkJywgKCkgPT4ge1xuICAgIG1haW5XaW5kb3cgPSB1bmRlZmluZWQ7XG4gIH0pO1xufVxuXG5hcHAud2hlblJlYWR5KCkudGhlbihjcmVhdGVXaW5kb3cpO1xuXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4ge1xuICBpZiAocGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG4gICAgYXBwLnF1aXQoKTtcbiAgfVxufSk7XG5cbmFwcC5vbignYWN0aXZhdGUnLCAoKSA9PiB7XG4gIGlmIChtYWluV2luZG93ID09PSB1bmRlZmluZWQpIHtcbiAgICBjcmVhdGVXaW5kb3coKTtcbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBUyxLQUFLLHFCQUFxQjtBQUNuQyxPQUFPLFVBQVU7QUFDakIsT0FBTyxRQUFRO0FBQ2YsU0FBUyxxQkFBcUI7QUFHOUIsSUFBTSxXQUFXLFFBQVEsWUFBWSxHQUFHLFNBQVM7QUFFakQsSUFBTSxhQUFhLGNBQWMsSUFBSSxJQUFJLEtBQUssWUFBWSxHQUFHLENBQUM7QUFFOUQsSUFBSTtBQUVKLFNBQVMsZUFBZTtBQUl0QixlQUFhLElBQUksY0FBYztBQUFBLElBQzdCLE1BQU0sS0FBSyxRQUFRLFlBQVksZ0JBQWdCO0FBQUE7QUFBQSxJQUMvQyxPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixnQkFBZ0I7QUFBQSxJQUNoQixnQkFBZ0I7QUFBQSxNQUNkLGtCQUFrQjtBQUFBO0FBQUEsTUFFbEIsU0FBUyxLQUFLO0FBQUEsUUFDWjtBQUFBLFFBQ0EsS0FBSyxLQUFLLGlIQUE0QyxzQkFBa0U7QUFBQSxNQUMxSDtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFFRCxNQUFJLE1BQWlCO0FBQ25CLGVBQVcsUUFBUSx1QkFBbUI7QUFBQSxFQUN4QyxPQUFPO0FBQ0wsZUFBVyxTQUFTLFlBQVk7QUFBQSxFQUNsQztBQUVBLE1BQUksTUFBdUI7QUFFekIsZUFBVyxZQUFZLGFBQWE7QUFBQSxFQUN0QyxPQUFPO0FBRUwsZUFBVyxZQUFZLEdBQUcsbUJBQW1CLE1BQU07QUFDakQsa0JBQVksWUFBWSxjQUFjO0FBQUEsSUFDeEMsQ0FBQztBQUFBLEVBQ0g7QUFFQSxhQUFXLEdBQUcsVUFBVSxNQUFNO0FBQzVCLGlCQUFhO0FBQUEsRUFDZixDQUFDO0FBQ0g7QUFFQSxJQUFJLFVBQVUsRUFBRSxLQUFLLFlBQVk7QUFFakMsSUFBSSxHQUFHLHFCQUFxQixNQUFNO0FBQ2hDLE1BQUksYUFBYSxVQUFVO0FBQ3pCLFFBQUksS0FBSztBQUFBLEVBQ1g7QUFDRixDQUFDO0FBRUQsSUFBSSxHQUFHLFlBQVksTUFBTTtBQUN2QixNQUFJLGVBQWUsUUFBVztBQUM1QixpQkFBYTtBQUFBLEVBQ2Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

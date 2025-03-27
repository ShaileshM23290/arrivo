"use client";

import { useState } from "react";
import { Save, Upload, Download, Bell, Globe, Database, Server } from "lucide-react";

export default function Settings() {
    // State for form values
    const [generalSettings, setGeneralSettings] = useState({
        appName: "Arrivo",
        companyName: "Arrivo Technologies Inc.",
        supportEmail: "support@arrivo.com",
        contactPhone: "+1 (555) 123-4567",
        timeZone: "America/New_York",
        dateFormat: "MM/DD/YYYY",
        timeFormat: "12h",
    });

    const [notificationSettings, setNotificationSettings] = useState({
        emailNotifications: true,
        smsNotifications: true,
        pushNotifications: true,
        systemAlerts: true,
        dailyReports: true,
        weeklyReports: true,
        monthlyReports: true,
    });

    const [backupSettings, setBackupSettings] = useState({
        autoBackup: true,
        backupFrequency: "daily",
        retentionPeriod: "30",
        backupDatabase: true,
        backupUploads: true,
        backupLogs: true,
    });

    const [apiSettings, setApiSettings] = useState({
        enableApi: true,
        apiThrottling: "60",
        rateLimit: "1000",
        requireApiKey: true,
    });

    // Mock function for handling form submission
    const handleSaveSettings = (formName: string) => {
        // In a real application, this would save the settings to the database
        console.log(`Saving ${formName} settings`);
    };

    // Mock function for backup
    const handleBackupNow = () => {
        console.log("Backup started");
        // In a real application, this would trigger a backup
    };

    // Mock function for restore
    const handleRestore = () => {
        console.log("Restore started");
        // In a real application, this would trigger a restore
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-foreground">Settings</h1>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* General Settings */}
                <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                    <h2 className="mb-4 flex items-center text-lg font-semibold">
                        <Globe className="mr-2 h-5 w-5 text-primary" />
                        General Settings
                    </h2>

                    <form className="space-y-4">
                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Application Name
                            </label>
                            <input
                                type="text"
                                value={generalSettings.appName}
                                onChange={(e) =>
                                    setGeneralSettings({
                                        ...generalSettings,
                                        appName: e.target.value,
                                    })
                                }
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Company Name
                            </label>
                            <input
                                type="text"
                                value={generalSettings.companyName}
                                onChange={(e) =>
                                    setGeneralSettings({
                                        ...generalSettings,
                                        companyName: e.target.value,
                                    })
                                }
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Support Email
                            </label>
                            <input
                                type="email"
                                value={generalSettings.supportEmail}
                                onChange={(e) =>
                                    setGeneralSettings({
                                        ...generalSettings,
                                        supportEmail: e.target.value,
                                    })
                                }
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Contact Phone
                            </label>
                            <input
                                type="text"
                                value={generalSettings.contactPhone}
                                onChange={(e) =>
                                    setGeneralSettings({
                                        ...generalSettings,
                                        contactPhone: e.target.value,
                                    })
                                }
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Time Zone
                            </label>
                            <select
                                value={generalSettings.timeZone}
                                onChange={(e) =>
                                    setGeneralSettings({
                                        ...generalSettings,
                                        timeZone: e.target.value,
                                    })
                                }
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="America/New_York">Eastern Time (ET)</option>
                                <option value="America/Chicago">Central Time (CT)</option>
                                <option value="America/Denver">Mountain Time (MT)</option>
                                <option value="America/Los_Angeles">Pacific Time (PT)</option>
                                <option value="UTC">UTC</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Date Format
                                </label>
                                <select
                                    value={generalSettings.dateFormat}
                                    onChange={(e) =>
                                        setGeneralSettings({
                                            ...generalSettings,
                                            dateFormat: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Time Format
                                </label>
                                <select
                                    value={generalSettings.timeFormat}
                                    onChange={(e) =>
                                        setGeneralSettings({
                                            ...generalSettings,
                                            timeFormat: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="12h">12-hour (AM/PM)</option>
                                    <option value="24h">24-hour</option>
                                </select>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="button"
                                onClick={() => handleSaveSettings("general")}
                                className="flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                            >
                                <Save className="mr-2 h-4 w-4" />
                                Save Settings
                            </button>
                        </div>
                    </form>
                </div>

                {/* Notification Settings */}
                <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                    <h2 className="mb-4 flex items-center text-lg font-semibold">
                        <Bell className="mr-2 h-5 w-5 text-primary" />
                        Notification Settings
                    </h2>

                    <form className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Email Notifications</label>
                            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors">
                                <input
                                    type="checkbox"
                                    className="peer sr-only"
                                    checked={notificationSettings.emailNotifications}
                                    onChange={() =>
                                        setNotificationSettings({
                                            ...notificationSettings,
                                            emailNotifications: !notificationSettings.emailNotifications,
                                        })
                                    }
                                />
                                <span
                                    className={`absolute inset-y-1 left-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:left-6 peer-checked:bg-primary`}
                                ></span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">SMS Notifications</label>
                            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors">
                                <input
                                    type="checkbox"
                                    className="peer sr-only"
                                    checked={notificationSettings.smsNotifications}
                                    onChange={() =>
                                        setNotificationSettings({
                                            ...notificationSettings,
                                            smsNotifications: !notificationSettings.smsNotifications,
                                        })
                                    }
                                />
                                <span
                                    className={`absolute inset-y-1 left-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:left-6 peer-checked:bg-primary`}
                                ></span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Push Notifications</label>
                            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors">
                                <input
                                    type="checkbox"
                                    className="peer sr-only"
                                    checked={notificationSettings.pushNotifications}
                                    onChange={() =>
                                        setNotificationSettings({
                                            ...notificationSettings,
                                            pushNotifications: !notificationSettings.pushNotifications,
                                        })
                                    }
                                />
                                <span
                                    className={`absolute inset-y-1 left-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:left-6 peer-checked:bg-primary`}
                                ></span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">System Alerts</label>
                            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors">
                                <input
                                    type="checkbox"
                                    className="peer sr-only"
                                    checked={notificationSettings.systemAlerts}
                                    onChange={() =>
                                        setNotificationSettings({
                                            ...notificationSettings,
                                            systemAlerts: !notificationSettings.systemAlerts,
                                        })
                                    }
                                />
                                <span
                                    className={`absolute inset-y-1 left-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:left-6 peer-checked:bg-primary`}
                                ></span>
                            </div>
                        </div>

                        <div className="border-t border-border pt-4 mt-2">
                            <h3 className="mb-2 font-medium text-sm">Report Schedules</h3>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm">Daily Reports</label>
                                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={notificationSettings.dailyReports}
                                            onChange={() =>
                                                setNotificationSettings({
                                                    ...notificationSettings,
                                                    dailyReports: !notificationSettings.dailyReports,
                                                })
                                            }
                                        />
                                        <span
                                            className={`absolute inset-y-1 left-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:left-6 peer-checked:bg-primary`}
                                        ></span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="text-sm">Weekly Reports</label>
                                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={notificationSettings.weeklyReports}
                                            onChange={() =>
                                                setNotificationSettings({
                                                    ...notificationSettings,
                                                    weeklyReports: !notificationSettings.weeklyReports,
                                                })
                                            }
                                        />
                                        <span
                                            className={`absolute inset-y-1 left-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:left-6 peer-checked:bg-primary`}
                                        ></span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="text-sm">Monthly Reports</label>
                                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={notificationSettings.monthlyReports}
                                            onChange={() =>
                                                setNotificationSettings({
                                                    ...notificationSettings,
                                                    monthlyReports: !notificationSettings.monthlyReports,
                                                })
                                            }
                                        />
                                        <span
                                            className={`absolute inset-y-1 left-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:left-6 peer-checked:bg-primary`}
                                        ></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="button"
                                onClick={() => handleSaveSettings("notification")}
                                className="flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                            >
                                <Save className="mr-2 h-4 w-4" />
                                Save Settings
                            </button>
                        </div>
                    </form>
                </div>

                {/* Backup and Restore */}
                <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                    <h2 className="mb-4 flex items-center text-lg font-semibold">
                        <Database className="mr-2 h-5 w-5 text-primary" />
                        Backup & Restore
                    </h2>

                    <form className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Automatic Backups</label>
                            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors">
                                <input
                                    type="checkbox"
                                    className="peer sr-only"
                                    checked={backupSettings.autoBackup}
                                    onChange={() =>
                                        setBackupSettings({
                                            ...backupSettings,
                                            autoBackup: !backupSettings.autoBackup,
                                        })
                                    }
                                />
                                <span
                                    className={`absolute inset-y-1 left-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:left-6 peer-checked:bg-primary`}
                                ></span>
                            </div>
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Backup Frequency
                            </label>
                            <select
                                value={backupSettings.backupFrequency}
                                onChange={(e) =>
                                    setBackupSettings({
                                        ...backupSettings,
                                        backupFrequency: e.target.value,
                                    })
                                }
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                disabled={!backupSettings.autoBackup}
                            >
                                <option value="hourly">Hourly</option>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Retention Period (days)
                            </label>
                            <input
                                type="number"
                                value={backupSettings.retentionPeriod}
                                onChange={(e) =>
                                    setBackupSettings({
                                        ...backupSettings,
                                        retentionPeriod: e.target.value,
                                    })
                                }
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                disabled={!backupSettings.autoBackup}
                            />
                        </div>

                        <div className="border-t border-border pt-4 mt-2">
                            <h3 className="mb-2 font-medium text-sm">Backup Content</h3>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm">Database</label>
                                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={backupSettings.backupDatabase}
                                            onChange={() =>
                                                setBackupSettings({
                                                    ...backupSettings,
                                                    backupDatabase: !backupSettings.backupDatabase,
                                                })
                                            }
                                        />
                                        <span
                                            className={`absolute inset-y-1 left-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:left-6 peer-checked:bg-primary`}
                                        ></span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="text-sm">Uploaded Files</label>
                                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={backupSettings.backupUploads}
                                            onChange={() =>
                                                setBackupSettings({
                                                    ...backupSettings,
                                                    backupUploads: !backupSettings.backupUploads,
                                                })
                                            }
                                        />
                                        <span
                                            className={`absolute inset-y-1 left-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:left-6 peer-checked:bg-primary`}
                                        ></span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="text-sm">System Logs</label>
                                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={backupSettings.backupLogs}
                                            onChange={() =>
                                                setBackupSettings({
                                                    ...backupSettings,
                                                    backupLogs: !backupSettings.backupLogs,
                                                })
                                            }
                                        />
                                        <span
                                            className={`absolute inset-y-1 left-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:left-6 peer-checked:bg-primary`}
                                        ></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 pt-2">
                            <button
                                type="button"
                                onClick={handleBackupNow}
                                className="flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Backup Now
                            </button>
                            <button
                                type="button"
                                onClick={handleRestore}
                                className="flex items-center justify-center rounded-md border border-border bg-card px-3 py-2 text-sm font-medium hover:bg-accent"
                            >
                                <Upload className="mr-2 h-4 w-4" />
                                Restore Backup
                            </button>
                        </div>

                        <div className="pt-2">
                            <button
                                type="button"
                                onClick={() => handleSaveSettings("backup")}
                                className="flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                            >
                                <Save className="mr-2 h-4 w-4" />
                                Save Settings
                            </button>
                        </div>
                    </form>
                </div>

                {/* API Settings */}
                <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                    <h2 className="mb-4 flex items-center text-lg font-semibold">
                        <Server className="mr-2 h-5 w-5 text-primary" />
                        API Configuration
                    </h2>

                    <form className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Enable API Access</label>
                            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors">
                                <input
                                    type="checkbox"
                                    className="peer sr-only"
                                    checked={apiSettings.enableApi}
                                    onChange={() =>
                                        setApiSettings({
                                            ...apiSettings,
                                            enableApi: !apiSettings.enableApi,
                                        })
                                    }
                                />
                                <span
                                    className={`absolute inset-y-1 left-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:left-6 peer-checked:bg-primary`}
                                ></span>
                            </div>
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                API Rate Limit (requests per hour)
                            </label>
                            <input
                                type="number"
                                value={apiSettings.apiThrottling}
                                onChange={(e) =>
                                    setApiSettings({
                                        ...apiSettings,
                                        apiThrottling: e.target.value,
                                    })
                                }
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                disabled={!apiSettings.enableApi}
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Max Requests Per Day
                            </label>
                            <input
                                type="number"
                                value={apiSettings.rateLimit}
                                onChange={(e) =>
                                    setApiSettings({
                                        ...apiSettings,
                                        rateLimit: e.target.value,
                                    })
                                }
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                disabled={!apiSettings.enableApi}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium">Require API Key</label>
                            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors">
                                <input
                                    type="checkbox"
                                    className="peer sr-only"
                                    checked={apiSettings.requireApiKey}
                                    onChange={() =>
                                        setApiSettings({
                                            ...apiSettings,
                                            requireApiKey: !apiSettings.requireApiKey,
                                        })
                                    }
                                    disabled={!apiSettings.enableApi}
                                />
                                <span
                                    className={`absolute inset-y-1 left-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:left-6 peer-checked:bg-primary`}
                                ></span>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="button"
                                onClick={() => handleSaveSettings("api")}
                                className="flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                            >
                                <Save className="mr-2 h-4 w-4" />
                                Save Settings
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* System Information */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <h2 className="mb-4 flex items-center text-lg font-semibold">
                    <Server className="mr-2 h-5 w-5 text-primary" />
                    System Information
                </h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    <div>
                        <h3 className="mb-2 text-sm font-medium text-muted-foreground">Application Version</h3>
                        <p className="text-base font-semibold">1.0.0</p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-sm font-medium text-muted-foreground">Database</h3>
                        <p className="text-base font-semibold">MongoDB</p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-sm font-medium text-muted-foreground">Environment</h3>
                        <p className="text-base font-semibold">Production</p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-sm font-medium text-muted-foreground">Node.js Version</h3>
                        <p className="text-base font-semibold">18.18.2</p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-sm font-medium text-muted-foreground">Last Database Backup</h3>
                        <p className="text-base font-semibold">Yesterday at 3:00 AM</p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-sm font-medium text-muted-foreground">System Status</h3>
                        <div className="flex items-center">
                            <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                            <p className="text-base font-semibold">Healthy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 
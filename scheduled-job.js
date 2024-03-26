var announcement = new GlideRecord("sys_ux_banner_announcement");
announcement.get("368dc08f97850210343db6fce053af70");

var epoch = new GlideDateTime();

announcement.heading = "loop91 - Tinkering with ServiceNow - " + epoch.getDisplayValue();
announcement.update();

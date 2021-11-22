vuser_init()
{
	lr_start_transaction("UC_1_klamas_open_site");
	
		web_add_auto_header("Sec-Fetch-Dest", 
		"document");

		web_add_auto_header("Sec-Fetch-Mode", 
			"navigate");
	
		web_add_auto_header("Sec-Fetch-Site", 
			"none");
	
		web_add_header("DNT", 
			"1");
	
		web_add_header("Sec-Fetch-User", 
			"?1");
	
		web_add_header("Upgrade-Insecure-Requests", 
			"1");
	
		web_reg_save_param_ex(
		    "ParamName=PHPSESSID", 
		    "LB=PHPSESSID=",
		    "RB=;",
		    "Ordinal=1",
		    "Notfound=warning",
		    SEARCH_FILTERS,
		        "Scope=Headers",
			LAST);
		web_reg_save_param_ex(
		    "ParamName=BITRIX_SM_GUEST_ID", 
		    "LB=BITRIX_SM_GUEST_ID=",
		    "RB=;",
		    "Ordinal=1",
		    "Notfound=warning",
		    SEARCH_FILTERS,
		        "Scope=Headers",
			LAST);
	
		web_url("www.klamas.ru", 
			"URL=https://www.klamas.ru/", 
			"Resource=0", 
			"RecContentType=text/html", 
			"Referer=", 
			"Snapshot=t1.inf", 
			"Mode=HTML", 
			EXTRARES, 
			"Url=/bitrix/templates/klamas/bootstrap/fonts/glyphicons-halflings-regular.woff", "Referer=https://www.klamas.ru/bitrix/templates/klamas/bootstrap/css/bootstrap.min.css", ENDITEM, 
			"Url=/bitrix/templates/klamas/img/socialTop.jpg", "Referer=https://www.klamas.ru/bitrix/cache/css/s1/klamas/template_705904da74a7121bf882ecf68d2dcc84/template_705904da74a7121bf882ecf68d2dcc84_03880c1ba218834fb7d2374eca1a1cfb.css?158744977230230", ENDITEM, 
			"Url=/bitrix/templates/klamas/js/nivo/themes/default/loading.gif", "Referer=https://www.klamas.ru/bitrix/templates/klamas/js/nivo/themes/default/default.css", ENDITEM, 
			"Url=/bitrix/templates/klamas/js/nivo/themes/default/arrows.png", "Referer=https://www.klamas.ru/bitrix/templates/klamas/js/nivo/themes/default/default.css", ENDITEM, 
			"Url=/bitrix/templates/klamas/js/nivo/themes/default/bullets.png", "Referer=https://www.klamas.ru/bitrix/templates/klamas/js/nivo/themes/default/default.css", ENDITEM, 
			"Url=/bitrix/templates/klamas/img/loader.gif", "Referer=https://www.klamas.ru/bitrix/cache/css/s1/klamas/template_705904da74a7121bf882ecf68d2dcc84/template_705904da74a7121bf882ecf68d2dcc84_03880c1ba218834fb7d2374eca1a1cfb.css?158744977230230", ENDITEM, 
			LAST);
	
	lr_end_transaction("UC_1_klamas_open_site",LR_AUTO);
	
	lr_start_transaction("UC_2_klamas_open_auth_page");
	
		web_add_cookie("PHPSESSID={PHPSESSID}; DOMAIN=www.klamas.ru");

		web_add_cookie("BITRIX_SM_GUEST_ID={BITRIX_SM_GUEST_ID}; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_LAST_VISIT=22.11.2021+11%3A55%3A16; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_BANNERS=0_31_1_29112021; DOMAIN=www.klamas.ru");
	
		web_add_auto_header("Sec-Fetch-Dest", 
			"document");
	
		web_add_auto_header("Sec-Fetch-Mode", 
			"navigate");
	
		web_add_header("DNT", 
			"1");
	
		web_add_header("Sec-Fetch-Site", 
			"same-origin");
	
		web_add_header("Sec-Fetch-User", 
			"?1");
	
		web_add_header("Upgrade-Insecure-Requests", 
			"1");
	
		web_url("login", 
			"URL=https://www.klamas.ru/login/?backurl=%2F", 
			"Resource=0", 
			"RecContentType=text/html", 
			"Referer=https://www.klamas.ru/", 
			"Snapshot=t1.inf", 
			"Mode=HTML", 
			EXTRARES, 
			"Url=../bitrix/templates/klamas/components/bitrix/socserv.auth.form/.default/images/gui.png", "Referer=https://www.klamas.ru/bitrix/cache/css/s1/klamas/page_3519caae067a078d7f52d74662c407d6/page_3519caae067a078d7f52d74662c407d6_0832598b1222b4306481b11f6de3039f.css?148128601018372", ENDITEM, 
			LAST);
	
	lr_end_transaction("UC_2_klamas_open_auth_page",LR_AUTO);
	
	lr_start_transaction("UC_3_klamas_login");

		web_add_cookie("PHPSESSID={PHPSESSID}; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_BANNERS=0_31_1_29112021; DOMAIN=www.klamas.ru");
	
		web_add_auto_header("Sec-Fetch-Dest", 
			"document");
	
		web_add_auto_header("Sec-Fetch-Mode", 
			"navigate");
	
		web_add_header("DNT", 
			"1");
	
		web_add_header("Origin", 
			"https://www.klamas.ru");
	
		web_add_header("Sec-Fetch-Site", 
			"same-origin");
	
		web_add_header("Sec-Fetch-User", 
			"?1");
	
		web_add_header("Upgrade-Insecure-Requests", 
			"1");
	
		web_reg_find("Text={name}",
        			 "SaveCount=regCount",
        			 LAST );
			
		web_submit_data("auth", 
			"Action=https://www.klamas.ru/auth/", 
			"Method=POST", 
			"RecContentType=text/html", 
			"Referer=https://www.klamas.ru/login/?backurl=%2F", 
			"Snapshot=t1.inf", 
			"Mode=HTML", 
			ITEMDATA, 
			"Name=AUTH_FORM", "Value=Y", ENDITEM, 
			"Name=TYPE", "Value=AUTH", ENDITEM, 
			"Name=backurl", "Value=/login/?backurl=%2F", ENDITEM, 
			"Name=USER_LOGIN", "Value={name}", ENDITEM, 
			"Name=USER_PASSWORD", "Value={password}", ENDITEM, 
			"Name=USER_REMEMBER", "Value=Y", ENDITEM, 
			"Name=Login", "Value=Во�\xB9ти", ENDITEM, 
			LAST);
	
	lr_end_transaction("UC_3_klamas_login",LR_AUTO);

	return 0;
}

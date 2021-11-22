vuser_end()
{
	lr_start_transaction("UC_5_klamas_logout");
		
		web_add_cookie("BITRIX_SM_GUEST_ID={BITRIX_SM_GUEST_ID}; DOMAIN=www.klamas.ru");

		web_add_cookie("BITRIX_SM_LAST_VISIT=22.11.2021+11%3A56%3A33; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_BANNERS=0_31_2_29112021; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_LOGIN={name}; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_SOUND_LOGIN_PLAYED=Y; DOMAIN=www.klamas.ru");
	
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
	
		web_url("catalog-653140", 
			"URL=https://www.klamas.ru/catalog/catalog-653140/?logout=yes", 
			"Resource=0", 
			"RecContentType=text/html", 
			"Referer=https://www.klamas.ru/catalog/catalog-653140/", 
			"Snapshot=t1.inf", 
			"Mode=HTML", 
			LAST);

	lr_end_transaction("UC_5_klamas_logout",LR_AUTO);

	return 0;
}

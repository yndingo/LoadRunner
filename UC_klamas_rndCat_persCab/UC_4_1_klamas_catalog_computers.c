UC_4_1_klamas_catalog_computers()
{	
	if (atoi(lr_eval_string("{regCount}")) == 0) {
		lr_error_message("Log on failed");
		return 0;
	}	
	
	web_set_max_html_param_len("1024");
	
	lr_start_transaction("UC_4_1_klamas_catalog_computers");
		
		web_add_cookie("PHPSESSID={PHPSESSID}; DOMAIN=www.klamas.ru");

		web_add_cookie("BITRIX_SM_GUEST_ID={BITRIX_SM_GUEST_ID}; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_LAST_VISIT=22.11.2021+11%3A56%3A03; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_BANNERS=0_31_2_29112021; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_LOGIN={name}; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_UIDH=4b7e55436b2a569d09edd53ce50cc40f; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_SALE_UID=c07c2d4e2f741f480efc2d4f20b31339; DOMAIN=www.klamas.ru");
	
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
			"URL=https://www.klamas.ru/catalog/catalog-653140/", 
			"Resource=0", 
			"RecContentType=text/html", 
			"Referer=https://www.klamas.ru/", 
			"Snapshot=t1.inf", 
			"Mode=HTML", 
			EXTRARES, 
			"Url=/upload/resize_cache/iblock/e23/200_200_0/e23b7b98772bfada7778f03bd1f0f908.jpg", ENDITEM, 
			LAST);
	
	lr_end_transaction("UC_4_1_klamas_catalog_computers",LR_AUTO);
	
	return 0;
}

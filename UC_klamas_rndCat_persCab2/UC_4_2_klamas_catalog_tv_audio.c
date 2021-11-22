UC_4_2_klamas_catalog_tv_audio()
{
	if (atoi(lr_eval_string("{regCount}")) == 0) {
		lr_error_message("Log on failed");
		return 0;
	}	
	
	lr_start_transaction("UC_4_2_klamas_catalog_tv_audio");

		web_add_cookie("PHPSESSID={PHPSESSID}; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_GUEST_ID={BITRIX_SM_GUEST_ID}; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_LAST_VISIT=22.11.2021+11%3A53%3A39; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_BANNERS=0_31_2_29112021; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_LOGIN=load1; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_UIDH=fc1cee7df225498f3cf8036ebc510b77; DOMAIN=www.klamas.ru");
	
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
	
		web_url("catalog-653260", 
			"URL=https://www.klamas.ru/catalog/catalog-653260/", 
			"Resource=0", 
			"RecContentType=text/html", 
			"Referer=https://www.klamas.ru/", 
			"Snapshot=t1.inf", 
			"Mode=HTML", 
			EXTRARES, 
			"Url=/upload/resize_cache/iblock/578/200_200_0/578cf1d860711cf108303f2954e065b8.jpg", ENDITEM, 
			"Url=/upload/resize_cache/iblock/a1a/200_200_0/a1afdc821caaa1a46460191a8272c0ec.jpg", ENDITEM, 
			LAST);
		
	lr_end_transaction("UC_4_2_klamas_catalog_tv_audio",LR_AUTO);
	
	return 0;
}
UC_4_3_klamas_personal_cabinet()
{
	if (atoi(lr_eval_string("{regCount}")) == 0) {
		lr_error_message("Log on failed");
		return 0;
	}	
	
	lr_start_transaction("UC_4_3_klamas_personal_cabinet");

		web_add_cookie("PHPSESSID={PHPSESSID}; DOMAIN=www.klamas.ru");

		web_add_cookie("BITRIX_SM_GUEST_ID=4348168; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_LAST_VISIT=22.11.2021+16%3A23%3A42; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_BANNERS=0_31_2_29112021; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_LOGIN={name}; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_UIDH=15ef51badf9d129d7226bcef108326e5; DOMAIN=www.klamas.ru");
	
		web_add_cookie("BITRIX_SM_SALE_UID=7fe96834ba76ff91ff660bb1583ff741; DOMAIN=www.klamas.ru");
	
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
	
		web_url("personal", 
			"URL=https://www.klamas.ru/personal/?backurl=%2F", 
			"TargetFrame=", 
			"Resource=0", 
			"RecContentType=text/html", 
			"Referer=https://www.klamas.ru/", 
			"Snapshot=t1.inf", 
			"Mode=HTML", 
			LAST);
	
	lr_end_transaction("UC_4_3_klamas_personal_cabinet",LR_AUTO);

	return 0;
}

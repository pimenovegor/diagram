const dataArr = [
{date: "2022-05-20 14:05:00.0",broke_amount:260},
{date: "2022-05-20 13:05:00.0",broke_amount:269},
{date: "2022-05-20 12:05:00.0",broke_amount:264},
{date: "2022-05-20 11:05:00.0",broke_amount:261},
{date: "2022-05-20 10:05:00.0",broke_amount:274},
{date: "2022-05-20 09:05:00.0",broke_amount:278},
{date: "2022-05-20 08:05:00.0",broke_amount:474},
{date: "2022-05-20 07:05:00.0",broke_amount:280},
{date: "2022-05-20 06:05:00.0",broke_amount:273},
{date: "2022-05-20 05:05:00.0",broke_amount:270},
{date: "2022-05-20 04:05:00.0",broke_amount:282},
{date: "2022-05-20 03:05:00.0",broke_amount:279},
{date: "2022-05-20 02:05:00.0",broke_amount:269},
{date: "2022-05-20 01:05:00.0",broke_amount:276},
{date: "2022-05-20 00:05:00.0",broke_amount:289},
{date: "2022-05-19 23:05:00.0",broke_amount:286},
{date: "2022-05-19 22:05:00.0",broke_amount:276},
{date: "2022-05-19 21:05:00.0",broke_amount:274},
{date: "2022-05-19 20:05:00.0",broke_amount:270},
{date: "2022-05-19 19:05:00.0",broke_amount:280},
{date: "2022-05-19 18:05:00.0",broke_amount:278},
{date: "2022-05-19 17:05:00.0",broke_amount:292},
{date: "2022-05-19 16:05:00.0",broke_amount:292},
{date: "2022-05-19 15:05:00.0",broke_amount:252},
{date: "2022-05-19 14:05:00.0",broke_amount:245},
{date: "2022-05-19 13:05:00.0",broke_amount:260},
{date: "2022-05-19 12:05:00.0",broke_amount:264},
{date: "2022-05-19 11:05:00.0",broke_amount:273},
{date: "2022-05-19 10:05:00.0",broke_amount:271},
{date: "2022-05-19 09:05:00.0",broke_amount:265},
{date: "2022-05-19 08:05:00.0",broke_amount:262},
{date: "2022-05-19 07:05:00.0",broke_amount:289},
{date: "2022-05-19 06:05:00.0",broke_amount:288},
{date: "2022-05-19 05:05:00.0",broke_amount:280},
{date: "2022-05-19 04:05:00.0",broke_amount:284},
{date: "2022-05-19 03:05:00.0",broke_amount:286},
{date: "2022-05-19 02:05:00.0",broke_amount:282},
{date: "2022-05-19 01:05:00.0",broke_amount:289},
{date: "2022-05-19 00:05:00.0",broke_amount:283},
{date: "2022-05-18 23:05:00.0",broke_amount:300},
{date: "2022-05-18 22:05:00.0",broke_amount:289},
{date: "2022-05-18 21:05:00.0",broke_amount:284},
{date: "2022-05-18 20:05:00.0",broke_amount:280},
{date: "2022-05-18 19:05:00.0",broke_amount:277},
{date: "2022-05-18 18:05:00.0",broke_amount:265},
{date: "2022-05-18 17:05:00.0",broke_amount:243},
{date: "2022-05-18 16:05:00.0",broke_amount:240},
{date: "2022-05-18 15:05:00.0",broke_amount:250},
{date: "2022-05-18 14:05:00.0",broke_amount:268},
{date: "2022-05-18 13:05:00.0",broke_amount:279},
{date: "2022-05-18 12:05:00.0",broke_amount:281},
{date: "2022-05-18 11:05:00.0",broke_amount:273},
{date: "2022-05-18 10:05:00.0",broke_amount:279},
{date: "2022-05-18 09:05:00.0",broke_amount:293},
{date: "2022-05-18 08:05:00.0",broke_amount:298},
{date: "2022-05-18 07:05:00.0",broke_amount:281},
{date: "2022-05-18 06:05:00.0",broke_amount:290},
{date: "2022-05-18 05:05:00.0",broke_amount:285},
{date: "2022-05-18 04:05:00.0",broke_amount:293},
{date: "2022-05-18 03:05:00.0",broke_amount:300},
{date: "2022-05-18 02:05:00.0",broke_amount:303},
{date: "2022-05-18 01:05:00.0",broke_amount:298},
{date: "2022-05-18 00:05:00.0",broke_amount:291},
{date: "2022-05-17 23:05:00.0",broke_amount:288},
{date: "2022-05-17 22:05:00.0",broke_amount:275},
{date: "2022-05-17 21:05:00.0",broke_amount:270},
{date: "2022-05-17 20:05:00.0",broke_amount:274},
{date: "2022-05-17 19:05:00.0",broke_amount:276},
{date: "2022-05-17 18:05:00.0",broke_amount:265},
{date: "2022-05-17 17:05:00.0",broke_amount:265},
{date: "2022-05-17 16:05:00.0",broke_amount:264},
{date: "2022-05-17 15:05:00.0",broke_amount:268},
{date: "2022-05-17 14:05:00.0",broke_amount:282},
{date: "2022-05-17 13:05:00.0",broke_amount:288},
{date: "2022-05-17 12:05:00.0",broke_amount:307},
{date: "2022-05-17 11:05:00.0",broke_amount:314},
{date: "2022-05-17 10:05:00.0",broke_amount:313},
{date: "2022-05-17 09:05:00.0",broke_amount:308},
{date: "2022-05-17 08:05:00.0",broke_amount:305},
{date: "2022-05-17 07:05:00.0",broke_amount:305},
{date: "2022-05-17 06:05:00.0",broke_amount:299},
{date: "2022-05-17 05:05:00.0",broke_amount:313},
{date: "2022-05-17 04:05:00.0",broke_amount:321},
{date: "2022-05-17 03:05:00.0",broke_amount:325},
{date: "2022-05-17 02:05:00.0",broke_amount:316},
{date: "2022-05-17 01:05:00.0",broke_amount:322},
{date: "2022-05-17 00:05:00.0",broke_amount:318},
{date: "2022-05-16 23:05:00.0",broke_amount:307},
{date: "2022-05-16 22:05:00.0",broke_amount:302},
{date: "2022-05-16 21:05:00.0",broke_amount:295},
{date: "2022-05-16 20:05:00.0",broke_amount:294},
{date: "2022-05-16 19:05:00.0",broke_amount:298},
{date: "2022-05-16 18:05:00.0",broke_amount:302},
{date: "2022-05-16 17:05:00.0",broke_amount:297},
{date: "2022-05-16 16:05:00.0",broke_amount:310},
{date: "2022-05-16 15:05:00.0",broke_amount:297},
{date: "2022-05-16 14:05:00.0",broke_amount:306},
{date: "2022-05-16 13:05:00.0",broke_amount:303},
{date: "2022-05-16 12:05:00.0",broke_amount:319},
{date: "2022-05-16 11:05:00.0",broke_amount:309},
{date: "2022-05-16 10:05:00.0",broke_amount:317},
{date: "2022-05-16 09:05:00.0",broke_amount:302},
{date: "2022-05-16 08:05:00.0",broke_amount:307},
{date: "2022-05-16 07:05:00.0",broke_amount:304},
{date: "2022-05-16 06:05:00.0",broke_amount:322},
{date: "2022-05-16 05:05:00.0",broke_amount:333},
{date: "2022-05-16 04:05:00.0",broke_amount:328},
{date: "2022-05-16 03:05:00.0",broke_amount:328},
{date: "2022-05-16 02:05:00.0",broke_amount:325},
{date: "2022-05-16 01:05:00.0",broke_amount:321},
{date: "2022-05-16 00:05:00.0",broke_amount:320},
{date: "2022-05-15 23:05:00.0",broke_amount:318},
{date: "2022-05-15 22:05:00.0",broke_amount:316},
{date: "2022-05-15 21:05:00.0",broke_amount:307},
{date: "2022-05-15 20:05:00.0",broke_amount:307},
{date: "2022-05-15 19:05:00.0",broke_amount:314},
{date: "2022-05-15 18:05:00.0",broke_amount:303},
{date: "2022-05-15 17:05:00.0",broke_amount:312},
{date: "2022-05-15 16:05:00.0",broke_amount:308},
{date: "2022-05-15 15:05:00.0",broke_amount:309},
{date: "2022-05-15 14:05:00.0",broke_amount:306},
{date: "2022-05-15 13:05:00.0",broke_amount:312},
{date: "2022-05-15 12:05:00.0",broke_amount:313},
{date: "2022-05-15 11:05:00.0",broke_amount:314},
{date: "2022-05-15 10:05:00.0",broke_amount:298},
{date: "2022-05-15 09:05:00.0",broke_amount:285},
{date: "2022-05-15 08:05:00.0",broke_amount:274},
{date: "2022-05-15 07:05:00.0",broke_amount:282},
{date: "2022-05-15 06:05:00.0",broke_amount:282},
{date: "2022-05-15 05:05:00.0",broke_amount:278},
{date: "2022-05-15 04:05:00.0",broke_amount:287},
{date: "2022-05-15 03:05:00.0",broke_amount:295},
{date: "2022-05-15 02:05:00.0",broke_amount:289},
{date: "2022-05-15 01:05:00.0",broke_amount:291},
{date: "2022-05-15 00:05:00.0",broke_amount:295},
{date: "2022-05-14 23:05:00.0",broke_amount:283},
{date: "2022-05-14 22:05:00.0",broke_amount:282},
{date: "2022-05-14 21:05:00.0",broke_amount:281},
{date: "2022-05-14 20:05:00.0",broke_amount:267},
{date: "2022-05-14 19:05:00.0",broke_amount:273},
{date: "2022-05-14 18:05:00.0",broke_amount:280},
{date: "2022-05-14 17:05:00.0",broke_amount:278},
{date: "2022-05-14 16:05:00.0",broke_amount:286},
{date: "2022-05-14 15:05:00.0",broke_amount:270},
{date: "2022-05-14 14:05:00.0",broke_amount:266},
{date: "2022-05-14 13:05:00.0",broke_amount:280},
{date: "2022-05-14 12:05:00.0",broke_amount:277},
{date: "2022-05-14 11:05:00.0",broke_amount:297},
{date: "2022-05-14 10:05:00.0",broke_amount:287},
{date: "2022-05-14 09:05:00.0",broke_amount:277},
{date: "2022-05-14 08:05:00.0",broke_amount:276},
{date: "2022-05-14 07:05:00.0",broke_amount:278},
{date: "2022-05-14 06:05:00.0",broke_amount:264},
{date: "2022-05-14 05:05:00.0",broke_amount:278},
{date: "2022-05-14 04:05:00.0",broke_amount:287},
{date: "2022-05-14 03:05:00.0",broke_amount:290},
{date: "2022-05-14 02:05:00.0",broke_amount:287},
{date: "2022-05-14 01:05:00.0",broke_amount:284},
{date: "2022-05-14 00:05:00.0",broke_amount:297},
{date: "2022-05-13 23:05:00.0",broke_amount:290},
{date: "2022-05-13 22:05:00.0",broke_amount:282},
{date: "2022-05-13 21:05:00.0",broke_amount:265},
{date: "2022-05-13 20:05:00.0",broke_amount:267},
{date: "2022-05-13 19:05:00.0",broke_amount:272},
{date: "2022-05-13 18:05:00.0",broke_amount:261},
{date: "2022-05-13 17:05:00.0",broke_amount:278},
{date: "2022-05-13 16:05:00.0",broke_amount:264},
{date: "2022-05-13 15:05:00.0",broke_amount:271},
];

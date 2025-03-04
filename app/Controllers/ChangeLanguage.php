<?php

namespace App\Controllers;

use CodeIgniter\Controller;

class ChangeLanguage extends Controller
{
    public function Language($language = 'th')
    {
        // เรียกใช้งาน service('language') เพื่อโหลดไฟล์ภาษา
        $languageService = service('language');
        $languageService->setLocale($language); // ตั้งค่าภาษาที่ต้องการใช้งาน

        // สร้างข้อมูล JSON เพื่อส่งกลับ
        $data = [
            'serve' => $languageService->getLine('message.serve'),
            'header_contact' => $languageService->getLine('message.header_contact'),
            'News' => $languageService->getLine('message.News'),
            'serviceTitle' => $languageService->getLine('message.serviceTitle'),
            'serviceTitle_Text' => $languageService->getLine('message.serviceTitle_Text'),
            'evx' => $languageService->getLine('message.evx'),
            'farme_X' => $languageService->getLine('message.farme_X'),
            'AI_Chat' => $languageService->getLine('message.AI_Chat'),
            'Pos_X' => $languageService->getLine('message.Pos_X'),
            'businessLocation' => $languageService->getLine('message.businessLocation'),
            'Location' => $languageService->getLine('message.Location'),
            'Location_evx' => $languageService->getLine('message.Location_evx'),
            'Location_farme_X' => $languageService->getLine('message.Location_farme_X'),
            'Location_HomeX' => $languageService->getLine('message.Location_HomeX'),
            'Location_SolarX' => $languageService->getLine('message.Location_SolarX'),
            'Location_POS_X_1' => $languageService->getLine('message.Location_POS_X_1'),
            'Location_UNITY_X' => $languageService->getLine('message.Location_UNITY_X'),
            'Location_Smart_X' => $languageService->getLine('message.Location_Smart_X'),
            'Location_POS_X_2' => $languageService->getLine('message.Location_POS_X_2'),
            'Latest_news' => $languageService->getLine('message.Latest_news'),
            'AI_Automated_1' => $languageService->getLine('message.AI_Automated_1'),
            'AI_Automated_2' => $languageService->getLine('message.AI_Automated_2'),
            'AI_Automated_3' => $languageService->getLine('message.AI_Automated_3'),
            'AI_Automated_4' => $languageService->getLine('message.AI_Automated_4'),
            'Technology' => $languageService->getLine('message.Technology'),
            'Technology_Text' => $languageService->getLine('message.Technology_Text'),
            'About_us' => $languageService->getLine('message.About_us'),
            'Website_structure' => $languageService->getLine('message.Website_structure'),

            'banner1' => $languageService->getLine('message.banner1'),
            'banner2' => $languageService->getLine('message.banner2'),
            'banner3' => $languageService->getLine('message.banner3'),
            'banner4' => $languageService->getLine('message.banner4'),
            'banner5' => $languageService->getLine('message.banner5'),
            'banner6' => $languageService->getLine('message.banner6'),

            'mobile_banner1' => $languageService->getLine('message.mobile_banner1'),
            'mobile_banner2' => $languageService->getLine('message.mobile_banner2'),
            'mobile_banner3' => $languageService->getLine('message.mobile_banner3'),
            'mobile_banner4' => $languageService->getLine('message.mobile_banner4'),
            'mobile_banner5' => $languageService->getLine('message.mobile_banner5'),
            'mobile_banner6' => $languageService->getLine('message.mobile_banner6'),
            // เพิ่มข้อมูลอื่นๆ ตามต้องการ
        ];

        // ส่งกลับเป็น JSON
        return $this->response->setJSON($data);
    }
}

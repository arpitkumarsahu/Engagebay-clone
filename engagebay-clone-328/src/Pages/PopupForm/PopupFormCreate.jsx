import { Box } from "@chakra-ui/react"
import React from "react"
import { CreateForm } from "../../Components/CreateForm"

const form_content = {
    image_url:"https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-12.svg",
    form_name:"Popup Forms",
    description:"Unfortunately, a majority of website visitors who leave your website will never return. So are you doing enough to engage and capture their information while they're still on your website? EngageBay popups help you make the most out of every single visitor on your website. Capture emails, grow email lists and convert more visitors into leads, subscribers, and sales. Customize where they appear, when they appear, and how they look to create the perfect web popup the way you want.",
    btn_txt : "Create Popup Form"
}

export const PopupFormCreate = ()=>{
    return (
        <Box>
            {/* <CreateForm {...form_content} /> */}
        </Box>
    )
}
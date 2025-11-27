import { safeHTML } from "@/utils/decodeGmailBody";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { mailResponseType } from "@/utils/type";

export default function EmailViewer({subject,from,body}:mailResponseType) {
 const bodyHTML =  safeHTML(body);   
 return <Card className="p-6 max-w-3xl mx-auto">
    <CardHeader>
        <CardTitle>{subject}</CardTitle>
        <p className="text-sm text-gray-500">From: {from}</p>
    </CardHeader>

    <CardContent>
        <div
        className="prose prose-neutral dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: bodyHTML }}
        />
    </CardContent>
    </Card>
}
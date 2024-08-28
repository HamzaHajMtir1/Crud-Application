import { supabase } from './lib/supabase';
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

const middleware = async function (req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });

    const {
        data: {
            session
        }
    } = await supabase.auth.getSession();

    console.log(session);

    if (!session) {
        return NextResponse.rewrite(new URL('/login', req.url));
    }

    return res
};

export default middleware;

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ]
}
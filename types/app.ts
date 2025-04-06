import { Session } from "@supabase/supabase-js";

export type IconComponent = ({ color }: { color?: string }) => React.JSX.Element;

export type User = Session["user"];

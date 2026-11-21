export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string;
          display_name: string | null;
          bio: string | null;
          avatar_url: string | null;
          theme: string;
          tier: string;
          created_at: string;
        };
        Insert: {
          id: string;
          username: string;
          display_name?: string | null;
          bio?: string | null;
          avatar_url?: string | null;
          theme?: string;
          tier?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          username?: string;
          display_name?: string | null;
          bio?: string | null;
          avatar_url?: string | null;
          theme?: string;
          tier?: string;
          created_at?: string;
        };
      };
      widgets: {
        Row: {
          id: string;
          profile_id: string;
          widget_type: string;
          title: string | null;
          config: Json;
          desktop_layout: Json | null;
          mobile_layout: Json | null;
          order_index: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          profile_id: string;
          widget_type: string;
          title?: string | null;
          config?: Json;
          desktop_layout?: Json | null;
          mobile_layout?: Json | null;
          order_index?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          profile_id?: string;
          widget_type?: string;
          title?: string | null;
          config?: Json;
          desktop_layout?: Json | null;
          mobile_layout?: Json | null;
          order_index?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      user_integrations: {
        Row: {
          id: string;
          user_id: string;
          provider: string;
          access_token: string;
          refresh_token: string | null;
          expires_at: string | null;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          provider: string;
          access_token: string;
          refresh_token?: string | null;
          expires_at?: string | null;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          provider?: string;
          access_token?: string;
          refresh_token?: string | null;
          expires_at?: string | null;
          updated_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

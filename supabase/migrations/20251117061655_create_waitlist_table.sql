/*
  # Create Waitlist Table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `username` (text)
      - `email` (text, unique)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for public inserts
    - Add policy for public count reads
*/

CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join waitlist"
ON public.waitlist
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can view waitlist count"
ON public.waitlist
FOR SELECT
USING (true);

ALTER TABLE public.waitlist REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.waitlist;
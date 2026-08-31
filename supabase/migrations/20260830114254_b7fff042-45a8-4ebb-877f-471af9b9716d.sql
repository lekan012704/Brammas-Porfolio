GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT SELECT ON public.contact_messages TO authenticated;
GRANT ALL ON public.contact_messages TO service_role;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='contact_messages' AND policyname='Authenticated users can read messages') THEN
    CREATE POLICY "Authenticated users can read messages" ON public.contact_messages FOR SELECT TO authenticated USING (true);
  END IF;
END $$;
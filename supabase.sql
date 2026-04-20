create extension if not exists pgcrypto;

drop table if exists public.flat_lets cascade;
drop table if exists public.flat_hunts cascade;
drop table if exists public.interest_requests cascade;
drop table if exists public.pins cascade;
drop table if exists public.rent_listings cascade;

create table public.pins (
  id uuid primary key default gen_random_uuid(),
  area text not null,
  zip_code text not null,
  listing_type text not null check (listing_type in ('whole-flat', 'room')),
  bhk text not null,
  monthly_rent integer not null check (monthly_rent > 0),
  maintenance_included boolean not null default false,
  furnishing text not null check (furnishing in ('Furnished', 'Unfurnished', 'Semi-furnished')),
  gated text not null check (gated in ('Gated', 'Not gated')),
  deposit_text text,
  building_name text,
  available_from text,
  email text,
  phone text,
  note text,
  metro boolean not null default false,
  metro_line text,
  verified boolean not null default false,
  moderation_status text not null default 'pending' check (moderation_status in ('pending', 'approved', 'flagged')),
  pin_label text,
  area_key text,
  latitude_hint numeric,
  longitude_hint numeric,
  created_at timestamptz not null default now()
);

create table public.flat_hunts (
  id uuid primary key default gen_random_uuid(),
  preferred_area text not null,
  need_type text not null check (need_type in ('whole-flat', 'room')),
  budget integer not null check (budget > 0),
  bhk_preference text not null,
  timeline text,
  metro_need text,
  furnishing_need text not null,
  gated_need text not null,
  parking_need text,
  pet_need text,
  lift_need text,
  backup_need text,
  email text,
  phone text,
  note text,
  moderation_status text not null default 'pending' check (moderation_status in ('pending', 'approved', 'flagged')),
  area_key text,
  latitude_hint numeric,
  longitude_hint numeric,
  created_at timestamptz not null default now()
);

create table public.flat_lets (
  id uuid primary key default gen_random_uuid(),
  area text not null,
  zip_code text not null,
  listing_intent text not null check (listing_intent in ('whole-flat', 'room')),
  bhk text not null,
  monthly_rent integer not null check (monthly_rent > 0),
  available_from text,
  furnishing text not null check (furnishing in ('Furnished', 'Unfurnished', 'Semi-furnished')),
  gated text not null check (gated in ('Gated', 'Not gated')),
  metro_line text,
  building_name text,
  deposit_text text,
  email text,
  phone text,
  note text,
  moderation_status text not null default 'pending' check (moderation_status in ('pending', 'approved', 'flagged')),
  area_key text,
  latitude_hint numeric,
  longitude_hint numeric,
  created_at timestamptz not null default now()
);

create table public.interest_requests (
  id uuid primary key default gen_random_uuid(),
  requester_type text not null check (requester_type in ('flat_hunt', 'flat_let')),
  requester_email text not null,
  target_type text not null check (target_type in ('flat_hunt', 'flat_let')),
  target_id uuid not null,
  target_title text,
  target_area text,
  target_email text,
  target_phone text,
  target_price integer,
  status text not null default 'pending' check (status in ('pending', 'emailed', 'failed')),
  created_at timestamptz not null default now()
);

alter table public.pins enable row level security;
alter table public.flat_hunts enable row level security;
alter table public.flat_lets enable row level security;
alter table public.interest_requests enable row level security;

grant usage on schema public to anon, authenticated;
grant select, insert on public.pins to anon, authenticated;
grant select, insert on public.flat_hunts to anon, authenticated;
grant select, insert on public.flat_lets to anon, authenticated;
grant insert on public.interest_requests to anon, authenticated;

create policy "Public can read pins"
on public.pins
for select
to anon, authenticated
using (true);

create policy "Public can insert pins"
on public.pins
for insert
to anon, authenticated
with check (
  area is not null
  and zip_code is not null
  and monthly_rent > 0
  and coalesce(length(trim(area)), 0) > 1
);

create policy "Public can read flat hunts"
on public.flat_hunts
for select
to anon, authenticated
using (true);

create policy "Public can insert flat hunts"
on public.flat_hunts
for insert
to anon, authenticated
with check (
  preferred_area is not null
  and budget > 0
  and coalesce(length(trim(preferred_area)), 0) > 1
);

create policy "Public can read flat lets"
on public.flat_lets
for select
to anon, authenticated
using (true);

create policy "Public can insert flat lets"
on public.flat_lets
for insert
to anon, authenticated
with check (
  area is not null
  and zip_code is not null
  and monthly_rent > 0
  and coalesce(length(trim(area)), 0) > 1
);

create policy "Public can insert interest requests"
on public.interest_requests
for insert
to anon, authenticated
with check (
  requester_email is not null
  and coalesce(length(trim(requester_email)), 0) > 4
  and target_type is not null
);

create index pins_created_at_idx on public.pins (created_at desc);
create index pins_area_idx on public.pins (area_key);
create index pins_zip_idx on public.pins (zip_code);

create index flat_hunts_created_at_idx on public.flat_hunts (created_at desc);
create index flat_hunts_area_idx on public.flat_hunts (area_key);

create index flat_lets_created_at_idx on public.flat_lets (created_at desc);
create index flat_lets_area_idx on public.flat_lets (area_key);
create index flat_lets_zip_idx on public.flat_lets (zip_code);
create index interest_requests_created_at_idx on public.interest_requests (created_at desc);
create index interest_requests_target_idx on public.interest_requests (target_type, target_id);

insert into public.pins (
  area, zip_code, listing_type, bhk, monthly_rent, maintenance_included, furnishing, gated,
  building_name, note, metro, metro_line, verified, moderation_status, pin_label, latitude_hint, longitude_hint
) values
  (
    'New Delhi', '110017', 'whole-flat', '2', 22000, true, 'Unfurnished', 'Not gated',
    'Malviya Nagar', '2 BHK in a low-rise lane', true, 'Yellow Line', true, 'approved', '22K', 28.5355, 77.2100
  ),
  (
    'Noida', '201305', 'whole-flat', '3', 31000, false, 'Furnished', 'Gated',
    'Sector 137', '3 BHK in a high-rise society', true, 'Blue Line', true, 'approved', '31K', 28.5128, 77.4081
  ),
  (
    'Gurgaon', '122002', 'whole-flat', '2', 38000, false, 'Furnished', 'Gated',
    'DLF Phase 2', 'High-demand furnished listing', true, 'Yellow Line', true, 'approved', '38K', 28.4989, 77.0896
  );

insert into public.flat_lets (
  area, zip_code, listing_intent, bhk, monthly_rent, available_from, furnishing, gated,
  metro_line, building_name, deposit_text, email, phone, note, moderation_status, latitude_hint, longitude_hint
) values
  (
    'Greater Noida', '201310', 'whole-flat', '3', 41000, 'ASAP', 'Furnished', 'Gated',
    'Aqua Line', 'Lotus Zing', '2 months', 'host+lotuszing@delhirent.in', '+91 9876543210',
    'Available now in Lotus Zing', 'approved', 28.4652, 77.5091
  ),
  (
    'Gurgaon', '122002', 'room', '2', 18500, 'Next month', 'Furnished', 'Gated',
    'Yellow Line', 'DLF Phase 2', '1 month', 'host+dlfphase2@delhirent.in', '+91 9876501234',
    'Room in 2 BHK, next month move-in', 'approved', 28.4994, 77.0878
  ),
  (
    'Ghaziabad', '201014', 'whole-flat', '3', 29500, 'Flexible', 'Unfurnished', 'Gated',
    'No nearby metro', 'ATS Advantage', '2 months', 'host+indirapuram@delhirent.in', '+91 9811112233',
    '3 BHK family flat, flexible move-in', 'approved', 28.6407, 77.3727
  );

insert into public.flat_hunts (
  preferred_area, need_type, budget, bhk_preference, timeline, metro_need, furnishing_need, gated_need,
  parking_need, pet_need, lift_need, backup_need, email, phone, note, moderation_status, latitude_hint, longitude_hint
) values
  (
    'Greater Noida', 'whole-flat', 42000, '3', 'ASAP', 'Yes', 'Furnished', 'Must have',
    'Car', 'No preference', 'Yes', 'Needed', 'hunter+gn@delhirent.in', '+91 9898989898',
    'Looking for a 3 BHK near Aqua Line', 'approved', 28.4645, 77.5078
  ),
  (
    'New Delhi', 'room', 17000, '2', 'Within 30 days', 'Yes', 'Furnished', 'No preference',
    'Bike', 'No preference', 'No preference', 'No preference', 'hunter+delhi@delhirent.in', '+91 9765432100',
    'Need a furnished room near Blue Line', 'approved', 28.6481, 77.1604
  ),
  (
    'Faridabad', 'whole-flat', 22000, '2', 'Flexible', 'Yes', 'Unfurnished', 'No preference',
    'No', 'No preference', 'No preference', 'No preference', 'hunter+faridabad@delhirent.in', '+91 9780011223',
    '2 BHK hunt near Violet Line', 'approved', 28.3938, 77.3175
  );

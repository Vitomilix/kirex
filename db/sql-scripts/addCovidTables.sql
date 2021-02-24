USE kirex
ALTER TABLE Hiras
ADD COLUMN contactbetween VARCHAR(11) DEFAULT 'NO' AFTER monitorProcess;
ALTER TABLE Hiras
ADD COLUMN socialdistancing VARCHAR(11) DEFAULT 'NO' AFTER contactbetween;
ALTER TABLE Hiras
ADD COLUMN workspacecleaned VARCHAR(11) DEFAULT 'NO' AFTER socialdistancing;
ALTER TABLE Hiras
ADD COLUMN placewashhands VARCHAR(11) DEFAULT 'NO' AFTER workspacecleaned;
ALTER TABLE Hiras
ADD COLUMN papertissues VARCHAR(11) DEFAULT 'NO' AFTER placewashhands;
ALTER TABLE Hiras
ADD COLUMN accesstosanitizing VARCHAR(11) DEFAULT 'NO' AFTER papertissues;
ALTER TABLE Hiras
ADD COLUMN postersPromoting VARCHAR(11) DEFAULT 'NO' AFTER accesstosanitizing;
ALTER TABLE Hiras
ADD COLUMN flulikesymptoms VARCHAR(11) DEFAULT 'NO' AFTER postersPromoting;
ALTER TABLE Hiras
ADD COLUMN irritateairways VARCHAR(11) DEFAULT 'NO' AFTER flulikesymptoms;
ALTER TABLE Hiras
ADD COLUMN naturalventilation VARCHAR(11) DEFAULT 'NO' AFTER irritateairways;

CREATE TABLE consumers (
       id  uuid       PRIMARY KEY,
     name  text       NOT NULL,
     size  int        NULL,
  created  timestamp  NOT NULL,
  updated  timestamp  NULL,
  deleted  timestamp  NULL
);

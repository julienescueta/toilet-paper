CREATE TABLE purchases (
             id  uuid       PRIMARY KEY,
           name  text       NOT NULL,
         amount  int        NOT NULL,
           unit  text       NULL,
  datePurchased  timestamp  NOT NULL,
        created  timestamp  NOT NULL,
        updated  timestamp  NULL,
        deleted  timestamp  NULL
);

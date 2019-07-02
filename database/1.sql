drop table login;
create table login(username varchar(50),p varchar(50),chmod int,email varchar(100),primary key(username));
insert into login(username,p,chmod,email) values('wzy',"725678",1,"725678@qq.com");
insert into login(username,p,chmod,email) values('Mike','123456',0,'2596409301@qq.com');
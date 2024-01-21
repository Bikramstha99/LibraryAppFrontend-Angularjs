export interface AddBook{
    BookName:string
    Writer:string;
    Genre:string;
    releaseDate:Date;
    BookImage: File|null;
}
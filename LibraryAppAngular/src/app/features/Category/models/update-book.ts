export interface UpdateBook{
    bookId:Number;
    bookName:string;
    writer:string;
    genre:string;
    releaseDate:Date;
    bookImage: File|null;
}
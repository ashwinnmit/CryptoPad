
import List "mo:base/List";
import Debug "mo:base/Debug";

actor CryptoPad{
    // creating a new Type in motoko
    public type Note = {
      title : Text;
      content : Text;
    };

    stable var notes: List.List<Note> = List.nil<Note>();


    public func createNote(titleText: Text, contentText : Text){
        let newNote : Note = {
          title = titleText;
          content = contentText;
        };

        // returns a new List
        notes := List.push(newNote, notes);
        Debug.print(debug_show("Ashwin is a God"));
    };

    public query func readNotes() : async [Note] {
        return List.toArray(notes);
    };

    public func removeNote(id : Nat){
        var newNotes = List.take(notes, id);
        var remainingNotes = List.drop(notes, id+1);
        notes := List.append(newNotes, remainingNotes);
    }
};
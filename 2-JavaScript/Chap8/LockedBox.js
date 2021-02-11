function withBoxUnlocked (argument){
    try
    {
        box.unlock;

    }
    catch (e)
    {
        console.log("Error occured");
    }
    finally
    {
        box.lock;
    }
}

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
    }
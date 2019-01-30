const questionOperations = {
    questions:[],
    add(questionObject){
        this.questions.push(questionObject);
        console.log(this.questions);
    },
    delete(){
       return this.questions.filter(question => !question.isMarked);
    //    console.log(markedQuestion);
    //    markedQuestion=[];
    //     // return markedQuestion.length=0;
    },
    search(){
        
    },
    mark(id){
        var questionObject = this.questions.find(question=>question.id==id);
        questionObject.toggle();
    },
    countMark(){
        return this.questions.filter(question => question.isMarked).length;
    },
    countUnMark(){
        return this.questions.length - this.countMark();
    }
}
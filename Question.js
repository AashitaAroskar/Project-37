class Question{
    constructor(){
    this.input=createInput("Name")
    this.answer=createInput("Answer")
    this.button=createButton('Enter')
    this.question=createElement('h3')
    this.option1=createElement('h3')
    this.option2=createElement('h3')
    this.title=createElement('h2')
    }
        
    display(){
        this.title.html("My Quiz Game")
        this.title.position(350,0)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            
            contestant.name=this.input.value()
            contestantCount+=1
            contestant.index=contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })

        this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter?")
        this.question.position(150,80)
        this.option1.html("1: Everyone")
        this.option1.position(150,100)
        this.option2.html("2: Envelope")
        this.option3.position(150,120)
        this.input.html("Enter Your Name.")
        this.input.position(150,230)

        this.answer.html("Enter Correct Option")
        this.answer.position(240,230)

       
}
}
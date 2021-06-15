const { BadRequestError } = require("../utils/error");

class GiftGiver {
    static quiz() {
        return [
            {
                question: "question #1",
                answerChoices: [
                    "a. first answer choice",
                    "b. second answer choice",
                    "c. third answer choice",
                    "d. fourth answer choice",
                ],
            },
            {
                question: "question #2",
                answerChoices: [
                    "a. first answer choice",
                    "b. second answer choice",
                    "c. third answer choice",
                    "d. fourth answer choice",
                ],
            },
            {
                question: "question #3",
                answerChoices: [
                    "a. first answer choice",
                    "b. second answer choice",
                    "c. third answer choice",
                    "d. fourth answer choice",
                ],
            },
            {
                question: "question #4",
                answerChoices: [
                    "a. first answer choice",
                    "b. second answer choice",
                    "c. third answer choice",
                    "d. fourth answer choice",
                ],
            },
            {
                question: "question #5",
                answerChoices: [
                    "a. first answer choice",
                    "b. second answer choice",
                    "c. third answer choice",
                    "d. fourth answer choice",
                ],
            },
        ];
    }

    static quizResults(userAnswerObj) {
        console.log(userAnswerObj);
        if (!("userAnswers" in userAnswerObj)) {
            throw new BadRequestError(
                "Must have userAnswers arr in request.body"
            );
        }

        const user_answers = userAnswerObj.userAnswers;
        const answers = ["b", "d", "a", "a", "c"];
        let counter = 0;
        user_answers.forEach((ans, i) => {
            if (ans === answers[i]) {
                counter += 1;
            }
        });

        switch (counter) {
            case 1:
                return "personal care (1/5 correct)";
            case 2:
                return "clothing (2/5 correct)";
            case 3:
                return "accessories (3/5 correct)";
            case 4:
                return "home products (4/5 correct)";
            case 5:
                return "consumables (5/5 correct)";
            default:
                throw new BadRequestError("You get no prize");
        }
    }
}

module.exports = GiftGiver;

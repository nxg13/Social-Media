var database = firebase.database();
google.charts.load('current', {'packages':['corechart']});


$(".alert").hide();
$("#scoreReport").hide();

var questionArray = [
    "Which of the following is an example of checks and balances, as established by the Constitution?",
     "The graph above supports which of the following statements?",
    "A primary election in which voters are required to identify a party preference before the election and are not allowed to split their ticket is called",
    "When selecting a vice-presidential candidate, a presidential nominee is usually concerned primarily with choosing a running mate who",
    "The primary function of political action commitees (PAC's) is to",
    "Which of the following conclusions about income distribution during the Reagan administration is supported by the table above?",
    "Registered voters directly elect which of the following?",
    "The role of a conference committee in Congress is to",
    "Supreme Court justices were given tenure subject to good behavior by the framers of the Constitution in order to ensure that",
    "The committee system is more important in the House than in the Senate because",
    "The most important source of the Supreme Court's caseload is",
    "A President attempting to influence Congress to pass a legislative program might employ all of the following strategies EXCEPT",
    "Presidents have had the most success in changing the direction of decisions of the federal judiciary by",
    "Which of the following did the most to expand civil rights in the 1950's?",
    "Which of the following is true about the right of free speech, as currently interpreted by the Supreme Court?",
    "The importance of Shays' Rebellion to the development of the United States Constitution was that it",
    "In a federal system of government, political power is primarily",
    "Which of the following generalizations about group voting tendencies is true?",
    "A corporate lobbyist would be LEAST likely to have an informal discussion about a pending policy matter with which of the following?",
    "Which of the following is a significant trend in the presidential nominating process over the past three decades?",
    "Congressional standing committees are best described as",
    "All of the following powers are granted to the President by the Constitution EXCEPT",
    "In which of the following did Congress move to regain powers previously lost to the executive branch?",
    "The data displayed in the table above best supports which of the following statements?",
    "Which of the following actions can Congress take if the Supreme Court finds a federal law unconstitutional?",
    "Which of the following statements about Congress is true?",
    "Which of the following is articulated in the War Powers Resolution?",
    "In the 1992 election, the membership of Congress was altered significantly by an increase in the number of",
    "Discrimination in public accomodations was made illegal in the United States as a direct result of the",
    "Most of the individual protections of the Bill of Rights now apply to the states because of the Supreme Court's interpretation of the Constitution's",
    "In 'McCulloch v. Maryland', the Supreme Court established which of the following principles?",
    "Political socialization is the process by which",
    "Which of the following is the most important influence on the choice made by voters in presidential elections?",
    "The advantages of incumbency in congressional elections include which of the following?",
    "Which of the following statements about rules of procedure in the House and Senate is correct?",
    "Which of the following procedures results in the removal of the President from office?",
    "Interest groups and political parties both promote United States democracy by",
    "Which of the following statements accurately describes the selection of the caseload for the United States Supreme Court?",
    "The boundaries of United States congressional districts are usually determined by",
    "Public monies are used to help finance which of the following campaigns?",
    "Diversity of public policy throughout the United States is primarily a consequence of",
    "All of the following have contributed to an increase in presidential power in the post-1945 era EXCEPT",
    "One of the formal tools used by Congress for oversight of the bureaucracy is",
    "Decisions reached by the Supreme Court under the leadership of Chief Justice Earl Warren (1953-1969) did all of the following EXCEPT",
    "The 'Miranda warning' represents an attempt to protect criminal suspects against",
    "The reserved power of the state governments can best be described as those powers",
    "Critical elections in the United States typically have occurred",
    "When 18 to 21 year olds received the right to vote in 1971, in the 1972 national elections they did which of the following?",
    "The largest amount of political coverage in newspapers during presidential campaigns is devoted to",
    "A state has 11 electoral votes. In a presidential election, the Democratic candidate receives 48 perecnt of that state's popular vote, the Republican candidate receives 40 percent of the vote, and an independent candidate receives 12 percent of the vote. If the state is similar to most other states, how will the electoral votes most likely be allocated?",
    "Which of the following is the most accurate statement about political parties in the United States?",
    "The congressional power that has been contested most frequently in the federal courts is the power to",
    "Which of the following is an accurate statement about committees in Congress?",
    "The request of recent Presidents for the line-item veto is a challenge to which of the following principles?",
    "Which of the following form an 'iron triangle'?",
    "An election involving more than two candidates in which the person who receives the most votes is the winner is called",
    "Cabinet members often do not have a dominant influence on presidential decision-making because",
    "A fundamental source of power for the federal bureaucracy lies in its",
    "The establishment clause in the First Amendment does which of the following?",
    "'Griswold v. Connecticut' and 'Roe v. Wade' are similar Supreme Court cases in that both cases are based on the",
    
];
    
    
var answerArray = [
    ["A requirement that states lower their legal drinking age to eighteen as a condition of receiving funds through federal highway grant programs", "Media criticism of public officials during an election campaign period", "The Supreme Court's ability to overturn a lower court decision", "The requirement that presidential appointments to the Supreme Court be approved by the Senate", "The election of the President by the electoral college rather than by direct election",],
    ["People with higher incomes are more likely to think of themselves as conservative than those with lower incomes.", "Americans with incomes under $10,000 are twice as likely to think of themselves as liberal than as conservative.", "A majority of people whose incomes fall between $10,000 and $50,000 think of themselves as conservative.", "No income group contains more people who think of themselves as liberal than people who think of themselves as conservative.", "People with higher incomes are less likely to think of themselves as either liberal or conservative than are those with lower incomes.",],
    ["an open primary", "a blanket primary", "a closed primary", "a runoff primary", "a presidential preference primary",],
    ["has significant personal wealth", "adds balance and appeal to the national ticket", "comes from the same ideological wing of the party as the President", "can serve as the most important domestic policy advisor to the President", "can effectively preside over the Senate",],
    ["serve as fund-raising organizations for challengers", "provide members of Congress with unbiased information regarding proposed legislation", "consult with the President regarding domestic policy", "encourage broader participation in politics among the electorate", "raise campaign funds to support favored candidates",],
    ["The share of income received by the lowest fifth increased, whereas the share received by the fourth fifth decreased.", "The share of income received by the second fifth increased, whereas the share received by the fourth fifth decreased.", "The share of income received by the highest fifth increased, whereas the share received by the lowest fifth decreased.", "The number of people earning high incomes increased.", "The middle class disappeared.",],
    ["I only", "IV only", "I and II only", "III and IV only", "II, III, and IV only",],
    ["hold hearings on proposed legislation", "oversee the actions of the executive branch of the government", "decide which bills should be considered by the full Senate", "conduct hearings that make information available to the public", "reconcile differences in bills passed by the House and Senate",],
    ["justices are free from direct political pressures", "justices remain accountable to the public", "justices are encouraged to make politically popular decisions", "cooperation between the judicial and legislative branches is assured", "Presidents are encouraged to seek younger nominees for the Supreme Court",],
    ["the seniority system plays no role in the House and therefore committees must play a larger role", "the Constitution mandates the type of committee structure in the House", "committee members are appointed by the President", "the House is so large that more work can be accomplished in committees than on the floor", "the majority party in the House prefers to give priority to the work of the committees",],
    ["its original jurisdiction", "its appellate jurisdiction", "instruction from the solicitor general", "the special master's certification of cases for review", "Congress' certification of cases for review",],
    ["using the media to draw attention to the legislative program", "assigning legislative liasons in the Executive Office of the President to lobby legislators", "denying campaign reelection funds to legislators who oppose the President's policy stand", "exploiting a partisan majority for the President's party in both the House and Senate", "reminding legislators of high popularity ratings for the President in public opinion polls",],
    ["threatening to ask Congress to impeach specific judges", "using the media to build consensus for the President's position", "requesting that Congress reduce the term of office that judges may serve", "using the appointment process to select judges with judicial philosophies similar to those of the President", "pressuring Congress to pass the appropriate legislation to override judicial opinions",],
    ["State legislative decisions desegregating public accommodations", "State court decisions outlawing poll taxes", "The passage of voting-rights legislation by Congress", "Executive orders mandating affirmative action", "The Supreme Court decision declaring state-mandated school segregation to be unconstitutional",],
    ["It protects the right to express opinions even without the actual use of words.", "It protects the use of language deemed obscene by the courts.", "It allows citizens to disobey laws that they believe to be unjust.", "It is protected from infringement by the federal government but not from infringement by state governments.", "It cannot be limited in any manner.",],
    ["revealed the necessity of both adding the Bill of Rights to the Constitution and creating a new system of checks and balances", "demonstrated the intensity of antiratification sentiment within the thirteen states", "indicated that a strong, constitutionally designed national government was needed to protect property and maintain order", "convinced the delegates attending the Constitutional Convention to accept the Connecticut Plan", "reinforced the idea that slavery should be outlawed in the new Constitution",],
    ["vested in local governments", "vested in the regional governments", "vested in the central government", "divided between the central government and regional governments", "divided between regional governments and local governments",],
    ["Jewish voters tend to vote Republican.", "Protestant voters tend to be more liberal than Roman Catholics on economic issues.", "More women than men identify themselves as Republican.", "Rural voters are more likely to support Democratic candidates than are urban voters.", "African American Democrats tend to support the more liberal candidates within their party",],
    ["A member of the House in whose district the corporation has a plant", "A member of the White House staff concerned about the issue", "A member of the staff of the Senate committee handling a matter of concern to the corporation", "A federal judge in whose court a case important to the corporation is being heard", "A journalist for a major newspaper",],
    ["Replacement of national party conventions by national primaries for each party", "Increasing importance of presidential primaries rather than state conventions", "A sharply declining role for political action committees (PAC's)", "Decreasing cost of campaigns", "Increasing control by political party leaders over outcomes",],
    ["specially appointed investigative bodies", "joint committees of the two houses of Congress", "committees created for each session", "permanent subject-matter committees", "advisory staff agencies",],
    ["commissioning officers in the armed forces", "addressing the Congress on the state of the union", "receiving ambassadors", "granting pardons for federal offenses", "forming new cabinet-level departments",],
    ["Budget and Impoundment Control Act", "Gramm-Rudman-Hollings Act", "Presidential Diability Act", "Gulf of Tonkin Resolution", "Persian Gulf War Resolution",],
    ["The reelection rate is higher in the Senate than in the House.", "The average vote won by Senate members surpasses that won by House members.", "House seats are safer from election turnover than are Senate seats.", "House members serve more terms than do Senators.", "More members of the Senate win reelection by 60% or more of the vote than do members of the House.",],
    ["Appeal the Court's decision to the District of Columbia's Court of Appeals.", "Formally request the President to veto the Court's decision.", "Remove certain members of the Court and replace them with new members", "Try to amend the Constitution.", "Reenact the same law.",],
    ["Members of Congress only occasionally are interested in and pay attention to constituents.", "The legislative process is frequently lengthy, decentralized, and characterized by compromise and bargaining.", "Lobbyists and political action committees (PAC's) sucessfully induce most members of Congress to trade their votes for canmpaign contributions.", "The growth in the size of Congress as an organization is the principal cause of growth in the federal budget deficit.", "Debate in both houses is structured by elaborate rules enacted by leaders of the majority party.",],
    ["The President may declare war.", "The President must finance any war efforts from a special contingency fund.", "The President must bring troops home from hostilities within 60 to 90 days unless Congress extends the time.", "The President may not nationalize state militias without congressional consent.", "The President may not send troops into hostilities without a declaration of war from Congress or a resolution from the United Nations.",],
    ["conservative Democrats", "liberal Republicans", "third-party representatives", "political independents", "minorities and women",],
    ["Supreme Court decision in 'Brown v. Board of Education of Topeka'", "Supreme Court decision in 'Sweatt v. Painter'", "Civil Rights Act of 1964", "Montgomery bus boycott", "Voting Rights Act of 1965",],
    ["Preamble", "necessary and proper clause", "supremacy clause", "Tenth Amendment", "Fourteenth Amendment",],
    ["States cannot interfere with or tax the legitimate activities of the federal government.", "The judicial branch cannot intervene in political disputes between the President and Congress.", "The federal Bill of Rights places no limitations on the states.", "The federal government has the power to regulate commerce.", "It is within the judiciary's authority to interpret the constitution.",],
    ["the use of private property is regulated by the government", "governments communicate with each other", "public attitudes toward government are measured and reported", "political values are passed to the next generation", "children are trained for successful occupations",],
    ["Partisan identification", "Party platform adopted at the national convention", "Vice-presidential running mate", "Endorsement by political incumbents", "Appeal of the candidates' spouses",],
    ["I and II only", "III and IV only", "I, IV, and V only", "II, III, and V only", "III, IV, and V only",],
    ["Debate by a determined minority in either chamber cannot be halted.", "The rules in each chamber are determined by the majority whip.", "The rules are specified in Article I of the Constitution.", "The rules can be changed by the President during a national emergency.", "The House operates more by formal rules, while the Senate operates more on informal understandings.",],
    ["The House and Senate vote for impeachment, and the Supreme Court reaches a guilty verdict.", "The House votes for impeachment, and the Senate conducts a trial and reaches a guilty verdict.", "The House and Senate both vote for a bill of impeachment.", "Only the House votes for a bill of impeachment.", "A criminal court finds the President guilty of 'high crimes and misdemeanors'.",],
    ["expressing detailed, ideologically distinct programs", "centralizing political authority", "linking citizens to the political process", "increasing domination of the political process by elites", "lobbying members of Congress",],
    ["The United States Constitution spells out all of the categories of cases that the Supreme Court must hear.", "The Chief Justice of the Supreme Court has the authority to select the cases that the Court will hear.", "The Solicitor General in the Department of Justice determines the Supreme Court's agenda.", "The Supreme Court is free to choose the case it hears with only a few limitations.", "The Attorney General screens cases for consideration by the Court.",],
    ["the Federal Election Commission (FEC)", "the state legislatures", "the House Rules Committee", "a conference committee of the House and Senate", "the director of the United States Census Bureau",],
    ["I only", "II only", "I and II only", "II and III only", "I, II, and III",],
    ["federalism", "separation of powers", "innovation within bureaucratic agencies", "decentralization in the Senate", "lack of party discipline in the House",],
    ["tensions between the United States and the Soviet Union during the Cold War period", "an increase in public expectations for services from the federal government", "economic and domestic problems such as inflation, unemployment, and civil rights issues", "increasing United States involvement in international affairs", "legislation granting the President the power to impound funds appropriated by Congress",],
    ["the line-item veto", "authorization of spending", "impoundment bills", "private bills", "senatorial courtesy",],
    ["rule against malapportionment in state legislatures", "void state statures that permitted school segregation", "invalidate state abortion statutes", "expand the rights of criminal defendants", "increase protection for First Amendment freedoms",],
    ["unfair police interrogation", "biased jury selection", "imprisonment without trial", "illegal wiretapping", "unjustified police surveillance",],
    ["not specifically granted to the national government or denied to the states", "implied in the Fifth Amendment", "listed specifically in the Tenth Amendment", "exercised by both national and state governments", "granted to states as part of the implied powers doctrine",],
    ["as a result of a temporary shift in the popular coalition supporting one or both parties", "whenever a third party has secured more than fifteen percent of the presidential vote", "each time a Republican has been elected President", "when voter turnout has declined significantly from the previous election", "when groups of voters have changed their traditional patterns of party loyalties",],
    ["Voted overwhelmingly for Republican candidates.", "Voted overwhelmingly for Democratic candidates.", "Voted overwhelmingly for radical candidates.", "Turned out at a lower rate than the rest of the electorate.", "Turned out at the same rate as the rest of the electorate.",],
    ["day-to-day campaign activities", "the platforms of the major parties", "candidates' policy stands on domestic issues", "candidates' stands on foreign policy issues", "candidates' experience and qualifications",],
    ["The Democratic candidate will receive 5 electoral votes, the Republican will receive 4, and the independent will receive 2.", "The Democratic candidate will receive 6 electoral votes and the Republican will receive 5.", "The Democratic candidate will receive all 11 electoral votes.", "The votes will not be allocated until there has been a runoff election between the Democractic and Republican candidates.", "The House of Representatives will determine the allocation of the electoral votes.",],
    ["Parties increasingly identify themselves with coherent ideologies to attract large blocs of voters.", "The percentage of voters identifying themselves as either Democrats or Republicans has been declining since the 1970's.", "National party organizations are generally the strongest party organizations.", "It is increasingly difficult for third parties to gain more than two percent of the popular vote.", "Most candidates prefer to run as independents rather than as Democrats or Republicans.",],
    ["establish post offices", "coin money", "levy taxes", "regulate commerce with foreign nations", "regulate interstate commerce",],
    ["The work of a committee ends when it submits a bill to the full House or Senate for consideration.", "An individual representative or senator can serve on only one committee and one subcommittee.", "Membership on key committees such as House Rules and Senate Finance is limited to fixed terms.", "Standing committees oversee the bureaucracy's implementation of legislation.", "Committee recommendations tend to have little influence on floor voting.",],
    ["Separation of powers", "Senatorial courtesy", "Eminent domain", "Executive privilege", "Congressional oversight",],
    ["President, Congress, Supreme Court", "President, House majority leader, Senate majority leader", "Interest group, Senate majority leader, House majority leader", "Executive department, House majority leader, President", "Executive department, Congressional committee, interest group",],
    ["a majority election", "a proportional election", "a plurality election", "a simple election", "an indirect election",],
    ["cabinet members generally maintain close independent ties to Congress", "cabinet members generally view their position only as a stepping-stone to further their own political ambitions", "cabinet members are not permitted to disagree publicly with the President", "presidential goals often conflict with the institutional goals of individual cabinet-level agencies", "only half of all cabinet members can be members of the President's party",],
    ["role in moving legislation out of subcommittees", "role in mediating interstate conflicts", "ability to convince Congress to fund most projects it supports", "ability to mobilize public opinion in support of legislative initiatives", "ability to set specific guidelines after receiving a general mandate from Congress",],
    ["Guarantees freedom of speech to all citizens.", "Prevents prior restraint of the press.", "Prohibits the setting up of a state church.", "Defines the concept of dual citizenship.", "Allows citizens to enter freely into contracts with other citizens.",],
    ["rights of gay men and lesbian women", "right of privacy", "right to an abortion", "right to freedom from cruel and unusual punishment", "right of women to equal protection before the law",],

];


var correctAnswers = ["3", "0", "2", "1", "4",
                      "2", "3", "4", "0", "3",
                      "1", "2", "3", "4", "0",
                      "2", "3", "4", "3", "1",
                      "3", "4", "0", "2", "3",
                      "1", "2", "4", "2", "4",
                      "0", "3", "0", "0", "4",
                      "1", "2", "3", "1", "0",
                      "0", "4", "1", "2", "0",
                      "0", "4", "3", "0", "2",
                      "1", "4", "3", "0", "4",
                      "2", "3", "4", "2", "1",
                      ];
                      
var imagesArray = ['question2.png', 'question6.png', ' question7.png', 'question24.png', 'question34.png', 'question40.png',
];
                      
var selectedAnswers = [];
var questionCounter = 0;
var correctCounter = 0;

$( document ).ready(function() {
    
    displayQuestion();
    displayAnswers();
    displayQuestionNumber();
    
});


var displayQuestion = function() {
    document.getElementById("questionText").innerHTML = questionArray[questionCounter];
     
}

var displayAnswers = function() {
    $("input").removeAttr("checked");
    var answers = answerArray[questionCounter];
    for (var i = 0; i < answers.length; i++) {
        var answerText = answers[i];
        var choiceName = "choice" + (i+1);
        document.getElementById(choiceName).innerHTML = answerText;
    }
    
}

var displayQuestionNumber = function() {
    document.getElementById("questionIndicator").innerHTML = "Question " + (questionCounter +1) + " / 60";
}


var buttonClicked = function() {
    $(".alert").hide();
    var radioButtons = document.getElementsByClassName("radioButton");
    var checkedFlag = false;
    for (var i = 0; i < radioButtons.length; i++) {
        var currentButton = radioButtons[i];
        if (currentButton.checked == true) {
            checkedFlag = true;
            var choiceName = "choice" + (i+1);
            var selection = document.getElementById(choiceName).innerHTML;
            selectedAnswers.push(selection);
            if (answerArray[questionCounter].indexOf(selection) == correctAnswers[questionCounter]) {
                correctCounter++;
                //do other stuff if correct
            }
        }
    }
    
    if (checkedFlag == false) {
        //display an alert
        $(".alert").show();
        return;
    }
    
    console.log(correctCounter);
    
    //next question please
    questionCounter++;
    
    //MAKE TEST EASIER TO TRY OUT BY MAKING >= # SMALLER (full test is questionArray.length) !!!!!!!!!!!  
    if (questionCounter >= questionArray.length) {
        //end the test here
        //display the score report, send scores to data base, etc.
        collectData();
    }
    
    displayQuestion();
    displayAnswers();
    displayQuestionNumber();
    

    
        var pictureQuestions = [1,5,6,23,33,39];
    if (pictureQuestions.indexOf(questionCounter) >=0) {
        document.getElementById("questionPicture").src = "question" + (questionCounter) + ".png";
        //show img
        $("#questionPicture").show();

    } else {
        //hide img
        $("#questionPicture").hide();
    }
}


    var collectData = function() {
        //loop through selected answer
        //determine if each is correct
        //generate an output: 1=correct; 0 otherwise
        var outputObject = {};
        for (var i =0; i< selectedAnswers.length; i++) {
            var outputValue = 0;
            if (answerArray[i].indexOf(selectedAnswers[i]) == correctAnswers[i]) {
                //question is correct
                outputValue = 1;
            }
            console.log(outputValue);
            var outputKey = "question" + i;
            outputObject[outputKey] = outputValue;
        }
        sendData(outputObject);
    }

    var sendData = function(opobj) {
        // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('responses').push().key;
        // Write the new response's data simultaneously to the database.
        var updates = {};
        updates['/responses/' + newPostKey] = opobj;
        firebase.database().ref().update(updates);
        readData();
}
    var readData = function() {
        firebase.database().ref('/responses/').once('value').then(function(snapshot) {
            // ...
            console.log(snapshot.val());
            //first calculate student score
            var studentScore = 100 * correctCounter / questionArray.length;
            var s = studentScore.toFixed(2);
            var classAverage = 0;
            var classScore = 0;
            var keys = Object.keys(snapshot.val());
            var outputArray = [
                ['Grade', 'Number'],
                ['F', 0],
                ['D', 0],
                ['C', 0],
                ['B', 0],
                ['A', 0]
            ];
            for (var i = 0; i< keys.length; i++) {
                var key = keys[i];
                var response = snapshot.val()[key];
                var responseKeys = Object.keys(response);
                var responseScore = 0;
                for (var x = 0; x<responseKeys.length; x++) {
                    var responseKey = responseKeys[x];
                    responseScore+=response[responseKey];
                }
                var responsePercent = 100*responseScore / questionArray.length;
                if (responsePercent >= 90) {
                    outputArray[5][1] += 1;
                } else if (responsePercent >= 80) {
                    outputArray[4][1] += 1;
                } else if (responsePercent >= 70) {
                    outputArray[3][1] += 1;
                } else if (responsePercent >= 60) {
                    outputArray[2][1] += 1;
                } else {
                    outputArray[1][1] += 1;
                }
                classScore+=responseScore;
            }
            classAverage = 100 * classScore / (keys.length * questionArray.length);
            var c = classAverage.toFixed(2);
            $("#main").hide();
            $("#testWhole").hide();
            $("#scoreReport").show();
            $("#totalScoreDiv").html("Your score: " + s + "%" + "<br>Class Average: " + c + "%" );
            drawChart(outputArray);
        });
    }
    
    
    
var drawChart = function(withData) {
        var data = google.visualization.arrayToDataTable(withData);

        var options = {
          title: 'Test Performance',
          titleTextStyle: {
                fontSize: 20
            },
          hAxis: {title: 'Letter Grade',  titleTextStyle: {color: '#333'}},
          vAxis: {title: 'Number of Test-Takers', minValue: 0},
          animation: {"startup": true,
                      duration: 1000,
                      easing: 'linear',
                     },
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('ColumnChartDiv'));
        chart.draw(data, options);
    
  }    
    
    
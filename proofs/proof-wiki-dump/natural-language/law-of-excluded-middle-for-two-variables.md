# 

Source: https://proofwiki.org/wiki/Law_of_Excluded_Middle_for_Two_Variables

Theorem
$\vdash (p \land q) \lor (\lnot p \land q) \lor (p \land \lnot q) \lor (\lnot p \land \lnot q)$


Proof
By the tableau method of natural deduction:


$ \vdash ((p \land q) \lor (\lnot p \land q)) \lor ( (p \land \lnot q) \lor (\lnot p \land \lnot q)) $


Line


Pool

Formula

Rule

Depends upon

Notes


1




$p \lor \lnot p$

Law of Excluded Middle

(None)




2




$q \lor \lnot q$

Law of Excluded Middle

(None)




3




$(p \lor \lnot p) \land (q \lor \lnot q)$

Rule of Conjunction: $\land \II$

1, 2




4




$((p \lor \lnot p) \land q) \lor ((p \lor \lnot p) \land \lnot q)$

Sequent Introduction

3

Conjunction Distributes over Disjunction


5


5

$(p \lor \lnot p) \land q$

Assumption

(None)




6


5

$(p \land q) \lor (\lnot p \land q)$

Sequent Introduction

5

Conjunction Distributes over Disjunction


7




$(p \lor \lnot p) \land q \implies (p \land q) \lor (\lnot p \land q)$

Rule of Implication: $\implies \II$

5 – 6

Assumption 5 has been discharged


8


8

$(p \lor \lnot p) \land \lnot q$

Assumption

(None)




9


8

$(p \land \lnot q) \lor (\lnot p \land \lnot q)$

Sequent Introduction

8

Conjunction Distributes over Disjunction


10




$(p \lor \lnot p) \land \lnot q \implies (p \land \lnot q) \lor (\lnot p \land \lnot q)$

Rule of Implication: $\implies \II$

8 – 9

Assumption 8 has been discharged


11




$((p \lor \lnot p) \land q) \lor ((p \lor \lnot p) \land \lnot q) \implies ((p \land q) \lor (\lnot p \land q)) \lor ( (p \land \lnot q) \lor (\lnot p \land \lnot q))$

Sequent Introduction

7,10

Constructive Dilemma


12




$((p \land q) \lor (\lnot p \land q)) \lor ( (p \land \lnot q) \lor (\lnot p \land \lnot q))$

Modus Ponendo Ponens: $\implies \mathcal E$

11, 4



$\blacksquare$

Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.






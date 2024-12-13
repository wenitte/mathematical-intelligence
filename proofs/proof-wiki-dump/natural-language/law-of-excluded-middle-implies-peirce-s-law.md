# 

Source: https://proofwiki.org/wiki/Law_of_Excluded_Middle_implies_Peirce%27s_Law

Theorem
From the Law of Excluded Middle follows Peirce's Law:

$\paren {p \lor \neg p} \vdash \paren {\paren {p \implies q} \implies p} \implies p$


Proof
By the tableau method of natural deduction:


$\paren {p \lor \neg p} \vdash \paren {\paren {p \implies q} \implies p} \implies p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor \neg p$

Premise

(None)




2


2

$p$

Assumption

(None)




3


2

$\paren {\paren {p \implies q} \implies p} \implies p$

Sequent Introduction

2

True Statement is implied by Every Statement


4


4

$\neg p$

Assumption

(None)




5


4

$p \implies q$

Sequent Introduction

4

False Statement implies Every Statement


6


6

$\paren {p \implies q} \implies p$

Assumption

(None)




7


6, 5

$p$

Modus Ponendo Ponens: $\implies \mathcal E$

6, 5




8


5

$\paren {\paren {p \implies q} \implies p} \implies p$

Rule of Implication: $\implies \II$

6 – 7

Assumption 6 has been discharged


9


1

$\paren {\paren {p \implies q} \implies p} \implies p$

Proof by Cases: $\text{PBC}$

1, 2 – 3, 4 – 8

Assumptions 2 and 4 have been discharged

$\blacksquare$






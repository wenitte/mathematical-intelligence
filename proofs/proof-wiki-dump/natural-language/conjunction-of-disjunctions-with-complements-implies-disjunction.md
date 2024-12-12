# 

Source: https://proofwiki.org/wiki/Conjunction_of_Disjunctions_with_Complements_implies_Disjunction

Theorem
$\paren {p \lor r} \land \paren {q \lor \neg r} \vdash p \lor q$


Proof
By the tableau method of natural deduction:


$\paren {p \lor r} \land \paren {q \lor \neg r} \vdash p \lor q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \lor r} \land \paren {q \lor \neg r}$

Premise

(None)




2


1

$p \lor r$

Rule of Simplification: $\land \EE_1$

1

The aim is to use Proof by Cases on this ...


3


3

$p$

Assumption

(None)

Assume the first of the disjuncts ...


4


3

$p \lor q$

Rule of Addition: $\lor \II_1$

3

... and demonstrate the conclusion


5


1

$q \lor \neg r$

Rule of Simplification: $\land \EE_2$

1




6


1

$\neg r \lor q$

Sequent Introduction

5

Disjunction is Commutative


7


1

$r \implies q$

Sequent Introduction

6

Rule of Material Implication


8


8

$r$

Assumption

(None)

then assume the second of the disjuncts ...


9


1, 8

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

7, 8




10


1, 8

$p \lor q$

Rule of Addition: $\lor \II_2$

9

... and demonstrate the conclusion


11


1

$p \lor q$

Proof by Cases: $\text{PBC}$

2, 3 – 4, 8 – 10

Assumptions 3 and 8 have been discharged
$\blacksquare$





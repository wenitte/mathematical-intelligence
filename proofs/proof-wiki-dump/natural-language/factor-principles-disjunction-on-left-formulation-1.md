# 

Source: https://proofwiki.org/wiki/Factor_Principles/Disjunction_on_Left/Formulation_1

Theorem
$p \implies q \vdash \paren {r \lor p} \implies \paren {r \lor q}$


Proof 1
By the tableau method of natural deduction:


$p \implies q \vdash \paren {r \lor p} \implies \paren {r \lor q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies q$

Premise

(None)




2




$r \implies r$

Theorem Introduction

(None)

Law of Identity: Formulation 2


3


1

$\paren {r \lor p} \implies \paren {r \lor q}$

Sequent Introduction

2, 1

Constructive Dilemma

$\blacksquare$


Proof 2
By the tableau method of natural deduction:


$p \implies q \vdash \paren {r \lor p} \implies \paren {r \lor q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies q$

Premise

(None)




2


2

$r \lor p$

Assumption

(None)




3


3

$r$

Assumption

(None)




4


3

$r \lor q$

Rule of Addition: $\lor \II_1$

3




5


5

$p$

Assumption

(None)




6


1, 5

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 5




7


1, 5

$r \lor q$

Rule of Addition: $\lor \II_2$

6




8


1, 2

$r \lor q$

Proof by Cases: $\text{PBC}$

2, 3 – 4, 5 – 6

Assumptions 3 and 5 have been discharged


9


1

$\paren {r \lor p} \implies \paren {r \lor q}$

Rule of Implication: $\implies \II$

2 – 7

Assumption 2 has been discharged

$\blacksquare$






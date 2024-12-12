# 

Source: https://proofwiki.org/wiki/Factor_Principles/Disjunction_on_Right/Formulation_1/Proof_2

Theorem
$p \implies q \vdash \paren {p \lor r} \implies \paren {q \lor r}$


Proof
By the tableau method of natural deduction:


$p \implies q \vdash \paren {p \lor r} \implies \paren {q \lor r} $


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

$p \lor r$

Assumption

(None)




3


3

$r$

Assumption

(None)




4


3

$q \lor r$

Rule of Addition: $\lor \II_2$

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

$q \lor r$

Rule of Addition: $\lor \II_1$

6




8


1, 2

$q \lor r$

Proof by Cases: $\text{PBC}$

2, 5 – 7, 3 – 4

Assumptions 5 and 3 have been discharged


9


1

$\paren {p \lor r} \implies \paren {q \lor r}$

Rule of Implication: $\implies \II$

2 – 8

Assumption 2 has been discharged

$\blacksquare$






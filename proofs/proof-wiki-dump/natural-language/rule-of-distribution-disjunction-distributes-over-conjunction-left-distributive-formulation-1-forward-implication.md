# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Disjunction_Distributes_over_Conjunction/Left_Distributive/Formulation_1/Forward_Implication

Theorem
$p \lor \paren {q \land r} \vdash \paren {p \lor q} \land \paren {p \lor r}$


Proof
By the tableau method of natural deduction:


$p \lor \paren {q \land r} \vdash \paren {p \lor q} \land \paren {p \lor r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor \paren {q \land r}$

Premise

(None)




2


2

$p$

Assumption

(None)




3


2

$p \lor q$

Rule of Addition: $\lor \II_1$

2




4


2

$p \lor r$

Rule of Addition: $\lor \II_1$

2




5


2

$\paren {p \lor q} \land \paren {p \lor r}$

Rule of Conjunction: $\land \II$

3, 4




6


6

$q \land r$

Assumption

(None)




7


6

$q$

Rule of Simplification: $\land \EE_1$

6




8


6

$r$

Rule of Simplification: $\land \EE_2$

6




9


6

$p \lor q$

Rule of Addition: $\lor \II_2$

7




10


6

$p \lor r$

Rule of Addition: $\lor \II_2$

8




11


6

$\paren {p \lor q} \land \paren {p \lor r}$

Rule of Conjunction: $\land \II$

7, 8




12


1

$\paren {p \lor q} \land \paren {p \lor r}$

Proof by Cases: $\text{PBC}$

1, 2 – 5, 6 – 11

Assumptions 2 and 6 have been discharged

$\blacksquare$






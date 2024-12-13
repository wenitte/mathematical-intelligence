# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Disjunction_Distributes_over_Conjunction/Left_Distributive/Formulation_1/Reverse_Implication

Definition
$\paren {p \lor q} \land \paren {p \lor r} \vdash p \lor \paren {q \land r}$


Proof
By the tableau method of natural deduction:


$\paren {p \lor q} \land \paren {p \lor r} \vdash p \lor \paren {q \land r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \lor q} \land \paren {p \lor r}$

Premise

(None)




2


1

$p \lor r$

Rule of Simplification: $\land \EE_2$

1




3


3

$p$

Assumption

(None)




4


3

$p \lor \paren {q \land r}$

Rule of Addition: $\lor \II_1$

3




5


5

$r$

Assumption

(None)




6


1

$p \lor q$

Rule of Simplification: $\land \EE_1$

1




7


7

$p$

Assumption

(None)




8


7

$p \lor \paren {q \land r}$

Rule of Addition: $\lor \II_1$

7




9


9

$q$

Assumption

(None)




10


5, 9

$q \land r$

Rule of Conjunction: $\land \II$

9, 5




11


5, 9

$p \lor \paren {q \land r}$

Rule of Addition: $\lor \II_2$

10




12


1, 5

$p \lor \paren {q \land r}$

Proof by Cases: $\text{PBC}$

6, 7 – 8, 9 – 11

Assumptions 7 and 9 have been discharged


13


1

$p \lor \paren {q \land r}$

Proof by Cases: $\text{PBC}$

2, 3 – 4, 5 – 12

Assumptions 3 and 5 have been discharged
$\blacksquare$





# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Conjunction_Distributes_over_Disjunction/Left_Distributive/Formulation_1/Forward_Implication

Definition
$p \land \paren {q \lor r} \vdash \paren {p \land q} \lor \paren {p \land r}$


Proof
By the tableau method of natural deduction:


$p \land \paren {q \lor r} \vdash \paren {p \land q} \lor \paren {p \land r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land \paren {q \lor r}$

Premise

(None)




2


1

$p$

Rule of Simplification: $\land \EE_1$

1




3


1

$q \lor r$

Rule of Simplification: $\land \EE_2$

1




4


4

$q$

Assumption

(None)




5


1, 4

$p \land q$

Rule of Conjunction: $\land \II$

2, 4




6


1, 4

$\paren {p \land q} \lor \paren {p \land r}$

Rule of Addition: $\lor \II_1$

5




7


7

$r$

Assumption

(None)




8


1, 7

$p \land r$

Rule of Conjunction: $\land \II$

2, 7




9


1, 7

$\paren {p \land q} \lor \paren {p \land r}$

Rule of Addition: $\lor \II_2$

8




10


1

$\paren {p \land q} \lor \paren {p \land r}$

Proof by Cases: $\text{PBC}$

3, 4 – 6, 7 – 9

Assumptions 4 and 7 have been discharged

$\blacksquare$


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Example $1.18$





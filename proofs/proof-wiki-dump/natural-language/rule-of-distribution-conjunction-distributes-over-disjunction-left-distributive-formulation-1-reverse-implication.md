# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Conjunction_Distributes_over_Disjunction/Left_Distributive/Formulation_1/Reverse_Implication

Definition
$\paren {p \land q} \lor \paren {p \land r} \vdash p \land \paren {q \lor r}$


Proof
By the tableau method of natural deduction:


$\paren {p \land q} \lor \paren {p \land r} \vdash p \land \paren {q \lor r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \land q} \lor \paren {p \land r}$

Premise

(None)




2


2

$p \land q$

Assumption

(None)




3


2

$p$

Rule of Simplification: $\land \EE_1$

2




4


4

$p \land r$

Assumption

(None)




5


4

$p$

Rule of Simplification: $\land \EE_1$

2




6


1

$p$

Proof by Cases: $\text{PBC}$

1, 2 – 3, 4 – 5

Assumptions 2 and 4 have been discharged


7


7

$p \land q$

Assumption

(None)




8


7

$q$

Rule of Simplification: $\land \EE_2$

7




9


7

$q \lor r$

Rule of Addition: $\lor \II_1$

7




10


10

$p \land r$

Assumption

(None)




11


10

$r$

Rule of Simplification: $\land \EE_2$

10




12


10

$q \lor r$

Rule of Addition: $\lor \II_2$

11




13


1

$q \lor r$

Proof by Cases: $\text{PBC}$

1, 7 – 9, 10 – 12

Assumptions 7 and 10 have been discharged


14


1

$p \land \paren {q \lor r}$

Rule of Conjunction: $\land \II$

6, 13



$\blacksquare$


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercises $1.4: \ 2 \ \text{(q)}$





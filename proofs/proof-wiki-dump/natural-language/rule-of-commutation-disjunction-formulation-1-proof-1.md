# 

Source: https://proofwiki.org/wiki/Rule_of_Commutation/Disjunction/Formulation_1/Proof_1

Theorem
$p \lor q \dashv \vdash q \lor p$


Proof
By the tableau method of natural deduction:


$p \lor q \vdash q \lor p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor q$

Premise

(None)




2


2

$p$

Assumption

(None)




3


2

$q \lor p$

Rule of Addition: $\lor \II_2$

2




4


4

$p$

Assumption

(None)




5


4

$q \lor p$

Rule of Addition: $\lor \II_1$

4




6


1

$q \lor p$

Proof by Cases: $\text{PBC}$

1, 2 – 3, 4 – 5

Assumptions 2 and 4 have been discharged

$\blacksquare$

By the tableau method of natural deduction:


$q \lor p \vdash p \lor q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \lor p$

Premise

(None)




2


2

$q$

Assumption

(None)




3


2

$p \lor q$

Rule of Addition: $\lor \II_2$

2




4


4

$p$

Assumption

(None)




5


4

$p \lor q$

Rule of Addition: $\lor \II_1$

4




6


1

$p \lor q$

Proof by Cases: $\text{PBC}$

1, 2 – 3, 4 – 5

Assumptions 2 and 4 have been discharged

$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $3$ Conjunction and Disjunction: Theorem $19$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction





# 

Source: https://proofwiki.org/wiki/Disjunction_with_Contradiction/Proof_1

Theorem
$p \lor \bot \dashv \vdash p$


Proof
By the tableau method of natural deduction:


$p \lor \bot \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor \bot$

Premise

(None)




2


2

$p$

Assumption

(None)




3


3

$\bot$

Assumption

(None)




4


3

$p$

Rule of Explosion: $\bot \EE$

3




5


1

$p$

Proof by Cases: $\text{PBC}$

1, 2 – 2, 3 – 4

Assumptions 2 and 3 have been discharged
$\Box$

By the tableau method of natural deduction:


$p \vdash p \lor \bot$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Premise

(None)




2


1

$p \lor \bot$

Rule of Addition: $\lor \II_1$

1


$\blacksquare$





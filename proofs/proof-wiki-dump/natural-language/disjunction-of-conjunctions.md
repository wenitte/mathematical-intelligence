# 

Source: https://proofwiki.org/wiki/Disjunction_of_Conjunctions

Theorem
$\left({p \land q}\right) \lor \left({r \land s}\right) \vdash p \lor r$


Proof
By the tableau method of natural deduction:


$\left({p \land q}\right) \lor \left({r \land s}\right) \vdash p \lor r$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\left({p \land q}\right) \lor \left({r \land s}\right)$

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


2

$p \lor r$

Rule of Addition: $\lor \II_1$

3




5


5

$r \land s$

Assumption

(None)




6


5

$r$

Rule of Simplification: $\land \EE_1$

5




7


5

$p \lor r$

Rule of Addition: $\lor \II_2$

6




8


1

$p \lor r$

Proof by Cases: $\text{PBC}$

1, 2 – 4, 5 – 7

Assumptions 2 and 5 have been discharged

$\blacksquare$






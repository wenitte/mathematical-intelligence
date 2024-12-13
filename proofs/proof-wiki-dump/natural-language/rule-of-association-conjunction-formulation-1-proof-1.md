# 

Source: https://proofwiki.org/wiki/Rule_of_Association/Conjunction/Formulation_1/Proof_1

Theorem
$p \land \left({q \land r}\right) \dashv \vdash \left({p \land q}\right) \land r$


Proof
By the tableau method of natural deduction:


$p \land \left({q \land r}\right) \vdash \left({p \land q}\right) \land r$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land \left({q \land r}\right)$

Premise

(None)




2


1

$p$

Rule of Simplification: $\land \EE_1$

1




3


1

$q \land r$

Rule of Simplification: $\land \EE_2$

1




4


1

$q$

Rule of Simplification: $\land \EE_1$

3




5


1

$r$

Rule of Simplification: $\land \EE_2$

3




6


1

$p \land q$

Rule of Conjunction: $\land \II$

2, 4




7


1

$\left({p \land q}\right) \land r$

Rule of Conjunction: $\land \II$

6, 5




By the tableau method of natural deduction:


$\left({p \land q}\right) \land r \vdash p \land \left({q \land r}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\left({p \land q}\right) \land r$

Premise

(None)




2


1

$p \land q$

Rule of Simplification: $\land \EE_1$

1




3


1

$r$

Rule of Simplification: $\land \EE_2$

1




4


1

$p$

Rule of Simplification: $\land \EE_1$

2




5


1

$q$

Rule of Simplification: $\land \EE_2$

2




6


1

$q \land r$

Rule of Conjunction: $\land \II$

5, 3




7


1

$p \land \left({q \land r}\right)$

Rule of Conjunction: $\land \II$

4, 6



$\blacksquare$






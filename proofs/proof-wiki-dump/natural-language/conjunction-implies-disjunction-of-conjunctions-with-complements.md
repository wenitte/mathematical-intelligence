# 

Source: https://proofwiki.org/wiki/Conjunction_implies_Disjunction_of_Conjunctions_with_Complements

Theorem
$p \land q \vdash \left({p \land r}\right) \lor \left({q \land \neg r}\right)$


Proof
By the tableau method of natural deduction:


$p \land q \vdash \left({p \land r}\right) \lor \left({q \land \neg r}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land q$

Premise

(None)




2




$r \lor \neg r$

Law of Excluded Middle

(None)




3


1

$p$

Rule of Simplification: $\land \EE_1$

1




4


1

$q$

Rule of Simplification: $\land \EE_2$

1




5


5

$r$

Assumption

(None)




6


1, 5

$p \land r$

Rule of Conjunction: $\land \II$

1, 5




7


1, 5

$\left({p \land r}\right) \lor \left({q \land \neg r}\right)$

Rule of Addition: $\lor \II_1$

6




8


8

$\neg r$

Assumption

(None)




9


1, 8

$q \land \neg r$

Rule of Conjunction: $\land \II$

4, 8




10


1, 8

$\left({p \land r}\right) \lor \left({q \land \neg r}\right)$

Rule of Addition: $\lor \II_2$

9




11


1

$\left({p \land r}\right) \lor \left(q \land \neg r\right)$

Proof by Cases: $\text{PBC}$

2, 5 – 7, 8 – 10

Assumptions 5 and 8 have been discharged

$\blacksquare$






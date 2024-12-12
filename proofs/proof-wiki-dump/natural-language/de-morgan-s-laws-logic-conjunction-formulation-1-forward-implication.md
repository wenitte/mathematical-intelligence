# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Conjunction/Formulation_1/Forward_Implication

Theorem
$p \land q \vdash \neg \left({\neg p \lor \neg q}\right)$


Proof
By the tableau method of natural deduction:


$p \land q \vdash \neg \left({\neg p \lor \neg q}\right)$


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


1

$p$

Rule of Simplification: $\land \EE_1$

1




3


1

$q$

Rule of Simplification: $\land \EE_2$

1




4


4

$\neg p \lor \neg q$

Assumption

(None)




5


5

$\neg p$

Assumption

(None)




6


1, 5

$\bot$

Principle of Non-Contradiction: $\neg \EE$

2, 5




7


7

$\neg q$

Assumption

(None)




8


1, 7

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 7




9


1, 4

$\bot$

Proof by Cases: $\text{PBC}$

4, 5 – 6, 7 – 8

Assumptions 5 and 7 have been discharged


10


1

$\neg \left({\neg p \lor \neg q}\right)$

Proof by Contradiction: $\neg \II$

4 – 9

Assumption 4 has been discharged

$\blacksquare$


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.5$: An aside: proof by contradiction: Exercises $1.6: \ 2 \ \text{(a)}$





# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Disjunction_of_Negations/Formulation_1/Forward_Implication

Theorem
$\neg p \lor \neg q \vdash \neg \paren {p \land q}$


Proof
By the tableau method of natural deduction:


$\neg p \lor \neg q \vdash \neg \paren {p \land q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \lor \neg q$

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

$q$

Rule of Simplification: $\land \EE_2$

2




5


5

$\neg p$

Assumption

(None)




6


2, 5

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 5




7


7

$\neg q$

Assumption

(None)




8


2, 7

$\bot$

Principle of Non-Contradiction: $\neg \EE$

4, 7




9


1, 2

$\bot$

Proof by Cases: $\text{PBC}$

1, 5 – 6, 7 – 8

Assumptions 5 and 7 have been discharged


10


1

$\neg \paren {p \land q}$

Proof by Contradiction: $\neg \II$

2 – 9

Assumption 2 has been discharged

$\blacksquare$


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercises $1.5: \ 1 \ \text{(b)}$





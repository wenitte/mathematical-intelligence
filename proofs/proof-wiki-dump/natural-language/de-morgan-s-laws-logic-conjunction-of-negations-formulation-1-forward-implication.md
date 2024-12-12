# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Conjunction_of_Negations/Formulation_1/Forward_Implication

Theorem
$\neg p \land \neg q \vdash \neg \paren {p \lor q}$


Proof
By the tableau method of natural deduction:


$\neg p \land \neg q \vdash \neg \paren {p \lor q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \land \neg q$

Premise

(None)




2


1

$\neg p$

Rule of Simplification: $\land \EE_1$

1




3


1

$\neg q$

Rule of Simplification: $\land \EE_2$

1




4


4

$p \lor q$

Assumption

(None)




5


5

$p$

Assumption

(None)




6


1, 5

$\bot$

Principle of Non-Contradiction: $\neg \EE$

5, 2




7


7

$q$

Assumption

(None)




8


1, 7

$\bot$

Principle of Non-Contradiction: $\neg \EE$

7, 3




9


1, 4

$\bot$

Proof by Cases: $\text{PBC}$

4, 5 – 6, 7 – 8

Assumptions 5 and 7 have been discharged


10


1

$\neg \paren {p \lor q}$

Proof by Contradiction: $\neg \II$

4 – 9

Assumption 4 has been discharged
$\blacksquare$


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercises $1.5: \ 2 \ \text{(a)}$





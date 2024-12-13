# 

Source: https://proofwiki.org/wiki/Modus_Tollendo_Ponens/Sequent_Form/Case_1/Proof_1

Theorem













\(\ds p \lor q\)

\(\)







\(\ds \)




















\(\ds \neg p\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds q\)

\(\)







\(\ds \)











Proof
By the tableau method of natural deduction:


$p \lor q, \neg p \vdash q$


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

$\neg p$

Premise

(None)




3


3

$p$

Assumption

(None)




4


2

$p \implies q$

Sequent Introduction

2

False Statement implies Every Statement


5


2, 3

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

4, 3




6


6

$q$

Assumption

(None)




7


1, 2

$q$

Proof by Cases: $\text{PBC}$

1, 3 – 5, 6 – 6

Assumptions 3 and 6 have been discharged
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $2$: Theorems and Derived Rules: Theorem $52$





# 

Source: https://proofwiki.org/wiki/Modus_Tollendo_Ponens/Sequent_Form/Case_2

Theorem













\(\ds p \lor q\)

\(\)







\(\ds \)




















\(\ds \neg q\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p\)

\(\)







\(\ds \)











Proof
By the tableau method of natural deduction:


$p \lor q, \neg q \vdash p$


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

$\neg q$

Premise

(None)




3


3

$q$

Assumption

(None)




4


2

$q \implies p$

Sequent Introduction

2

False Statement implies Every Statement


5


2, 3

$p$

Modus Ponendo Ponens: $\implies \mathcal E$

4, 3




6


6

$p$

Assumption

(None)




7


1, 2

$p$

Proof by Cases: $\text{PBC}$

1, 3 – 5, 6 – 6

Assumptions 3 and 6 have been discharged
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $2$: Theorems and Derived Rules: Theorem $53$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercises $1.5: \ 2 \ \text{(c)}$





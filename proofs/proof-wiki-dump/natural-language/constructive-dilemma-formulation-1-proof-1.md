# 

Source: https://proofwiki.org/wiki/Constructive_Dilemma/Formulation_1/Proof_1

Theorem













\(\ds p \implies q\)

\(\)







\(\ds \)




















\(\ds r \implies s\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p \lor r \implies q \lor s\)

\(\)







\(\ds \)











Proof
By the tableau method of natural deduction:


$p \implies q, r \implies s \vdash p \lor r \implies q \lor s$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies q$

Premise

(None)




2


2

$r \implies s$

Premise

(None)




3


3

$p \lor r$

Assumption

(None)




4


4

$p$

Assumption

(None)




5


1, 4

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 4




6


1, 4

$q \lor s$

Rule of Addition: $\lor \II_1$

5




7


7

$r$

Assumption

(None)




8


2, 7

$s$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 7




9


2, 7

$q \lor s$

Rule of Addition: $\lor \II_2$

8




10


1, 2, 3

$q \lor s$

Proof by Cases: $\text{PBC}$

3, 4 – 6, 7 – 9

Assumptions 4 and 7 have been discharged


11


1, 2

$p \lor r \implies q \lor s$

Rule of Implication: $\implies \II$

3 – 10

Assumption 3 has been discharged

$\blacksquare$






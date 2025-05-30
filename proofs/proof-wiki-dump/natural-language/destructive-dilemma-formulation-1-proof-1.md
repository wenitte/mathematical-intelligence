# 

Source: https://proofwiki.org/wiki/Destructive_Dilemma/Formulation_1/Proof_1

Theorem













\(\ds p \implies q\)

\(\)







\(\ds \)




















\(\ds r \implies s\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds \neg q \lor \neg s \implies \neg p \lor \neg r\)

\(\)







\(\ds \)











Proof
By the tableau method of natural deduction:


$p \implies q, r \implies s \vdash \neg q \lor \neg s \implies \neg p \lor \neg r$


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

$\neg q \lor \neg s$

Assumption

(None)




4


4

$\neg q$

Assumption

(None)




5


1, 4

$\neg p$

Modus Tollendo Tollens (MTT)

1, 4




6


1, 4

$\neg p \lor \neg r$

Rule of Addition: $\lor \II_1$

5




7


7

$\neg s$

Assumption

(None)




8


2, 7

$\neg r$

Modus Tollendo Tollens (MTT)

2, 7




9


2, 7

$\neg p \lor \neg r$

Rule of Addition: $\lor \II_2$

8




10


1, 2, 3

$\neg p \lor \neg r$

Proof by Cases: $\text{PBC}$

3, 4 – 6, 7 – 9

Assumptions 4 and 7 have been discharged


11


1, 2

$\neg q \lor \neg s \implies \neg p \lor \neg r$

Rule of Implication: $\implies \II$

3 – 10

Assumption 3 has been discharged

$\blacksquare$






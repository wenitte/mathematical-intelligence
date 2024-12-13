# 

Source: https://proofwiki.org/wiki/Hypothetical_Syllogism/Formulation_2/Proof_1

Theorem













\(\ds p\)

\(\implies\)







\(\ds q\)




















\(\ds q\)

\(\implies\)







\(\ds r\)




















\(\ds p\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds r\)

\(\)







\(\ds \)











Proof
By the tableau method of natural deduction:


$p \implies q, q \implies r, p \vdash r$


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

$q \implies r$

Premise

(None)




3


3

$p$

Premise

(None)




4


1, 2

$p \implies r$

Sequent Introduction

1, 2

Hypothetical Syllogism: Formulation 1


5


1, 2, 3

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

4, 3



$\blacksquare$






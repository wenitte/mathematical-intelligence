# 

Source: https://proofwiki.org/wiki/Hypothetical_Syllogism/Formulation_1/Proof_1

Theorem













\(\ds p\)

\(\implies\)







\(\ds q\)




















\(\ds q\)

\(\implies\)







\(\ds r\)














\(\ds \vdash \ \ \)





\(\ds p\)

\(\implies\)







\(\ds r\)











Proof
By the tableau method of natural deduction:


$p \implies q, q \implies r \vdash p \implies r$


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

Assumption

(None)




4


1, 3

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


1, 2, 3

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 4




6


1, 2

$p \implies r$

Rule of Implication: $\implies \II$

3 – 5

Assumption 3 has been discharged

$\blacksquare$






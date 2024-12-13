# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Formulation_1/Forward_Implication/Proof

Theorem













\(\ds p\)

\(\implies\)







\(\ds q\)














\(\ds \vdash \ \ \)





\(\ds \neg q\)

\(\implies\)







\(\ds \neg p\)











Proof
By the tableau method of natural deduction:


$p \implies q \vdash \neg q \implies \neg p$


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

$\neg q$

Assumption

(None)




3


1, 2

$\neg p$

Modus Tollendo Tollens (MTT)

1, 2




4


1

$\neg q \implies \neg p$

Rule of Implication: $\implies \II$

2 – 3

Assumption 2 has been discharged

$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $2$ Conditionals and Negation: Theorem $9$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction





# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Variant_1/Formulation_1/Forward_Implication

Theorem
$p \implies \neg q \vdash q \implies \neg p$


Proof
By the tableau method of natural deduction:


$p \implies \neg q \vdash q \implies \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \neg q$

Premise

(None)




2


2

$q$

Assumption

(None)




3


2

$\neg \neg q$

Double Negation Introduction: $\neg \neg \II$

2




4


1, 2

$\neg p$

Modus Tollendo Tollens (MTT)

1, 3




5


1

$q \implies \neg p$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged

$\blacksquare$






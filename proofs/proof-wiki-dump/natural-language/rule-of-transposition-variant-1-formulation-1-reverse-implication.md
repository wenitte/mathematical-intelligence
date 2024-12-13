# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Variant_1/Formulation_1/Reverse_Implication

Theorem
$q \implies \neg p \vdash \neg p \implies q$


Proof
By the tableau method of natural deduction:


$q \implies \neg p \vdash p \implies \neg q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \implies \neg p$

Premise

(None)




2


2

$p$

Assumption

(None)




3


2

$\neg \neg p$

Double Negation Introduction: $\neg \neg \II$

2




4


1, 2

$\neg q$

Modus Tollendo Tollens (MTT)

1, 3




5


1

$p \implies \neg q$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged

$\blacksquare$






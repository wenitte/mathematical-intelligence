# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Variant_1/Formulation_2/Reverse_Implication

Theorem
$\vdash \left({q \implies \neg p}\right) \implies \left({p \implies \neg q}\right)$


Proof
By the tableau method of natural deduction:


$\vdash \paren {q \implies \neg p} \implies \paren {p \implies \neg q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \implies \neg p$

Assumption

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


6




$\paren {q \implies \neg p} \implies \paren {p \implies \neg q}$

Rule of Implication: $\implies \II$

1 – 5

Assumption 1 has been discharged

$\blacksquare$






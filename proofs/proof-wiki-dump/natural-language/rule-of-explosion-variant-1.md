# 

Source: https://proofwiki.org/wiki/Rule_of_Explosion/Variant_1

Theorem
$\vdash p \implies \paren {\neg p \implies q}$


Proof
By the tableau method of natural deduction:


$\vdash p \implies \paren {\neg p \implies q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Assumption

(None)




2


2

$\neg p$

Assumption

(None)




3


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

1, 2




4


1, 2

$q$

Rule of Explosion: $\bot \EE$

3




5


1

$\neg p \implies q$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged


6




$p \implies \paren {\neg p \implies q}$

Rule of Implication: $\implies \II$

1 – 5

Assumption 1 has been discharged

$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{I}$: 'NOT' and 'IF': $\S 5$: Theorem $\text{T17}$





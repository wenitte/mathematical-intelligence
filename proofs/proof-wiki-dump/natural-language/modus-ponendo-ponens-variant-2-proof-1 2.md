# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Ponens/Variant_2/Proof_1

Theorem
$\vdash p \implies \paren {\paren {p \implies q} \implies q}$


Proof
By the tableau method of natural deduction:


$\vdash p \implies \paren {\paren {p \implies q} \implies q} $


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

$p \implies q$

Assumption

(None)




3


1, 2

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 1




4


1

$\paren {p \implies q} \implies q$

Rule of Implication: $\implies \II$

2 – 3

Assumption 2 has been discharged


5




$p \implies \paren {\paren {p \implies q} \implies q}$

Rule of Implication: $\implies \II$

1 – 4

Assumption 1 has been discharged

$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{I}$: 'NOT' and 'IF': $\S 5$: Theorem $\text{T3}$





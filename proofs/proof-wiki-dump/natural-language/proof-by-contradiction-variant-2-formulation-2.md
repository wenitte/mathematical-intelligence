# 

Source: https://proofwiki.org/wiki/Proof_by_Contradiction/Variant_2/Formulation_2

Theorem
$\vdash \paren {\paren {p \implies q} \land \paren {p \implies \neg q} } \implies \neg p$


Proof
By the tableau method of natural deduction:


$\vdash \paren {\paren {p \implies q} \land \paren {p \implies \neg q} } \implies \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \land \paren {p \implies \neg q}$

Assumption

(None)




2


1

$p \implies q$

Rule of Simplification: $\land \EE_1$

1




3


1

$p \implies \neg q$

Rule of Simplification: $\land \EE_2$

1




4


1

$\neg p$

Sequent Introduction

2, 3

Proof by Contradiction: Formulation 1


5




$\paren {\paren {p \implies q} \land \paren {p \implies \neg q} } \implies \neg p$

Rule of Implication: $\implies \II$

1 – 4

Assumption 1 has been discharged

$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 3$: Theorem $\text{T34}$





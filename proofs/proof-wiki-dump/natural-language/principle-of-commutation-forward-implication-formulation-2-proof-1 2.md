# 

Source: https://proofwiki.org/wiki/Principle_of_Commutation/Forward_Implication/Formulation_2/Proof_1

Theorem
$\vdash \paren {p \implies \paren {q \implies r} } \implies \paren {q \implies \paren {p \implies r} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \implies \paren {q \implies r} } \implies \paren {q \implies \paren {p \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \paren {q \implies r}$

Assumption

(None)




2


1

$q \implies \paren {p \implies r}$

Sequent Introduction

1

Principle of Commutation: Forward Implication: Formulation 1


3




$\paren {p \implies \paren {q \implies r} } \implies \paren {q \implies \paren {p \implies r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{I}$: 'NOT' and 'IF': $\S 5$: Theorem $\text{T8}$





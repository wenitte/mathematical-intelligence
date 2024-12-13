# 

Source: https://proofwiki.org/wiki/Principle_of_Commutation/Reverse_Implication/Formulation_2

Theorem
$\vdash \paren {q \implies \paren {p \implies r} } \implies \paren {p \implies \paren {q \implies r} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {q \implies \paren {p \implies r} } \implies \paren {p \implies \paren {q \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \implies \paren {p \implies r}$

Assumption

(None)




2


1

$p \implies \paren {q \implies r}$

Sequent Introduction

1

Principle of Commutation: Reverse Implication: Formulation 1


3




$\paren {q \implies \paren {p \implies r} } \implies \paren {p \implies \paren {q \implies r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Self-Distributive_Law_for_Conditional/Reverse_Implication/Formulation_2/Proof

Theorem
$\vdash \paren {\paren {p \implies q} \implies \paren {p \implies r} } \implies \paren {p \implies \paren {q \implies r} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {\paren {p \implies q} \implies \paren {p \implies r} } \implies \paren {p \implies \paren {q \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \implies \paren {p \implies r}$

Assumption

(None)




2


1

$p \implies \paren {q \implies r}$

Sequent Introduction

1

Self-Distributive Law for Conditional: Formulation 1


3




$\paren {\paren {p \implies q} \implies \paren {p \implies r} } \implies \paren {p \implies \paren {q \implies r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$






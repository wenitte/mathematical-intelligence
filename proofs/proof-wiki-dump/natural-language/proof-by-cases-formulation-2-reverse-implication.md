# 

Source: https://proofwiki.org/wiki/Proof_by_Cases/Formulation_2/Reverse_Implication

Theorem
$\vdash \paren {\paren {p \lor q} \implies r} \implies \paren {\paren {p \implies r} \land \paren {q \implies r} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {\paren {p \lor q} \implies r} \implies \paren {\paren {p \implies r} \land \paren {q \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \lor q} \implies r$

Assumption

(None)




2


1

$\paren {p \implies r} \land \paren {q \implies r}$

Sequent Introduction

1

Proof by Cases: Formulation 1: Reverse Implication


3




$\paren {\paren {p \lor q} \implies r} \implies \paren {\paren {p \implies r} \land \paren {q \implies r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$






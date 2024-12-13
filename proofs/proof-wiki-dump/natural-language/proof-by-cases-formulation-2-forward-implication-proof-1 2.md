# 

Source: https://proofwiki.org/wiki/Proof_by_Cases/Formulation_2/Forward_Implication/Proof_1

Theorem
$\vdash \paren {\paren {p \implies r} \land \paren {q \implies r} } \implies \paren {\paren {p \lor q} \implies r}$


Proof
By the tableau method of natural deduction:


$\vdash \paren {\paren {p \implies r} \land \paren {q \implies r} } \implies \paren {\paren {p \lor q} \implies r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies r} \land \paren {q \implies r}$

Assumption

(None)




2


1

$\paren {p \lor q} \implies r$

Sequent Introduction

1

Proof by Cases: Formulation 1: Forward Implication


3




$\paren {\paren {p \implies r} \land \paren {q \implies r} } \implies \paren {\paren {p \lor q} \implies r}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Rule_of_Exportation/Reverse_Implication/Formulation_2/Proof_1

Theorem
$\vdash \paren {p \implies \paren {q \implies r} } \implies \paren {\paren {p \land q} \implies r}$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \implies \paren {q \implies r} } \implies \paren {\paren {p \land q} \implies r} $


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

$\paren {p \land q} \implies r$

Sequent Introduction

1

Rule of Exportation: Reverse Implication: Formulation 1


3




$\paren {p \implies \paren {q \implies r} } \implies \paren {\paren {p \land q} \implies r}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged
$\blacksquare$





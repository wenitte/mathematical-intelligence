# 

Source: https://proofwiki.org/wiki/Principle_of_Dilemma/Formulation_2/Reverse_Implication

Theorem
$\vdash q \implies \paren {\paren {p \implies q} \land \paren {\neg p \implies q} }$


Proof
By the tableau method of natural deduction:


$\vdash q \implies \paren {\paren {p \implies q} \land \paren {\neg p \implies q} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q$

Assumption

(None)




2


1

$\paren {p \implies q} \land \paren {\neg p \implies q}$

Sequent Introduction

1

Principle of Dilemma: Formulation 1: Reverse Implication


3




$q \implies \paren {\paren {p \implies q} \land \paren {\neg p \implies q} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$






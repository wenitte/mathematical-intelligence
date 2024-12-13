# 

Source: https://proofwiki.org/wiki/Rule_of_Exportation/Forward_Implication/Formulation_2/Proof_1

Theorem
$\vdash \left({\left ({p \land q}\right) \implies r}\right) \implies \left({p \implies \left ({q \implies r}\right)}\right)$


Proof
By the tableau method of natural deduction:


$\vdash \paren {\paren {p \land q} \implies r} \implies \paren {p \implies \paren {q \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \land q} \implies r$

Assumption

(None)




2


1

$p \implies \paren {q \implies r}$

Sequent Introduction

1

Rule of Exportation: Forward Implication: Formulation 1


3




$\paren {\paren {p \land q} \implies r} \implies \paren {p \implies \paren {q \implies r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$






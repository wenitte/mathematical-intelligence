# 

Source: https://proofwiki.org/wiki/Praeclarum_Theorema/Formulation_2

Theorem
$\vdash \paren {\paren {p \implies q} \land \paren {r \implies s} } \implies \paren {\paren {p \land r} \implies \paren {q \land s} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {\paren {p \implies q} \land \paren {r \implies s} } \implies \paren {\paren {p \land r} \implies \paren {q \land s} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {\paren {p \implies q} \land \paren {r \implies s} }$

Assumption

(None)




2


1

$\paren {p \land r} \implies \paren {q \land s}$

Sequent Introduction

1

Praeclarum Theorema: Formulation 1


3


1

$\paren {\paren {p \implies q} \land \paren {r \implies s} } \implies \paren {\paren {p \land r} \implies \paren {q \land s} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged
$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 3$: Theorem $\text{T32}$





# 

Source: https://proofwiki.org/wiki/Factor_Principles/Conjunction_on_Right/Formulation_2

Theorem
$\vdash \paren {p \implies q} \implies \paren {\paren {p \land r} \implies \paren {q \land r} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \implies q} \implies \paren {\paren {p \land r} \implies \paren {q \land r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies q$

Assumption

(None)




2


1

$\paren {p \land r} \implies \paren {q \land r}$

Sequent Introduction

1

Factor Principles: Conjunction on Right: Formulation 1


3


1

$\paren {p \implies q} \implies \paren {\paren {p \land r} \implies \paren {q \land r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 3$: Theorem $\text{T31}$





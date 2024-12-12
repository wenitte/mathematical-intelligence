# 

Source: https://proofwiki.org/wiki/Factor_Principles/Disjunction_on_Left/Formulation_2



Theorem
$\vdash \paren {p \implies q} \implies \paren {\paren {r \lor p} \implies \paren {r \lor q} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \implies q} \implies \paren {\paren {r \lor p} \implies \paren {r \lor q} } $


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

$\paren {\paren {r \lor p} \implies \paren {r \lor q} }$

Sequent Introduction

1

Factor Principles: Disjunction on Left: Formulation 1


3


1

$\paren {p \implies q} \implies \paren {\paren {r \lor p} \implies \paren {r \lor q} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$


Also see
This is an axiom of the following proof system:
Definition:Hilbert Proof System/Instance 2


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T56}$





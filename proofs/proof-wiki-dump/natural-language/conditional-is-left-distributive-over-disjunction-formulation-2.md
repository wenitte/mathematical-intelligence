# 

Source: https://proofwiki.org/wiki/Conditional_is_Left_Distributive_over_Disjunction/Formulation_2

Theorem
$\vdash \paren {p \implies \paren {q \lor r} } \iff \paren {\paren {p \implies q} \lor \paren{p \implies r} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \implies \paren {q \lor r} } \iff \paren {\paren {p \implies q} \lor \paren {p \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \paren {q \lor r}$

Assumption

(None)




2


1

$\paren {p \implies q} \lor \paren {p \implies r}$

Sequent Introduction

1

Conditional is Left Distributive over Disjunction: Formulation 1


3




$\paren {p \implies \paren {q \lor r} } \implies \paren {\paren {p \implies q} \lor \paren {p \implies r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\paren {p \implies q} \lor \paren {p \implies r}$

Assumption

(None)




5


4

$p \implies \paren {q \lor r}$

Sequent Introduction

4

Conditional is Left Distributive over Disjunction: Formulation 1


6




$\paren {\paren {p \implies q} \lor \paren {p \implies r} } \implies \paren {p \implies \paren {q \lor r} }$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7


3, 6

$\paren {p \implies q} \lor \paren {p \implies r}$

Biconditional Introduction: $\iff \II$

16, 17

19

$\blacksquare$

Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T55}$





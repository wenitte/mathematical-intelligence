# 

Source: https://proofwiki.org/wiki/Biconditional_is_Transitive/Formulation_2

Theorem
The biconditional operator is transitive:

$\vdash \paren {\paren {p \iff q} \land \paren {q \iff r} } \implies \paren {p \iff r}$


Proof
By the tableau method of natural deduction:


$\vdash \paren {\paren {p \iff q} \land \paren {q \iff r} } \implies \paren {p \iff r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \iff q} \land \paren {q \iff r}$

Assumption

(None)




2


1

$p \iff q$

Rule of Simplification: $\land \EE_1$

1




3


1

$q \iff r$

Rule of Simplification: $\land \EE_2$

1




4


1

$p \iff r$

Sequent Introduction

2, 3

Biconditional is Transitive: Formulation 1


5




$\paren {\paren {p \iff q} \land \paren {q \iff r} } \implies \paren {p \iff r}$

Rule of Implication: $\implies \II$

1 – 4

Assumption 1 has been discharged

$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T93}$





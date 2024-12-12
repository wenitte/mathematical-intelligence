# 

Source: https://proofwiki.org/wiki/Biconditional_is_Associative/Formulation_2

Theorem
$\vdash \paren {p \iff \paren {q \iff r} } \iff \paren {\paren {p \iff q} \iff r}$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \iff \paren {q \iff r} } \iff \paren {\paren {p \iff q} \iff r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff \paren {q \iff r}$

Assumption

(None)




2


1

$\paren {p \iff q} \iff r$

Sequent Introduction

1

Biconditional is Associative: Formulation 1


3




$\paren {p \iff \paren {q \iff r} } \implies \paren {\paren {p \iff q} \iff r}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\paren {p \iff q} \iff r$

Assumption

(None)




5


4

$p \iff \paren {q \iff r}$

Sequent Introduction

4

Biconditional is Associative: Formulation 1


6




$\paren {\paren {p \iff q} \iff r} \implies \paren {p \iff \paren {q \iff r} }$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \iff \paren {q \iff r} } \iff \paren {\paren {p \iff q} \iff r}$

Biconditional Introduction: $\iff \II$

3, 6


$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T94}$





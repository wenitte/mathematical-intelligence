# 

Source: https://proofwiki.org/wiki/Principle_of_Composition/Formulation_2

Theorem
$\paren {\paren {p \implies r} \lor \paren {q \implies r} } \iff \paren {\paren {p \land q} \implies r}$


Proof
By the tableau method of natural deduction:


$\paren {\paren {p \implies r} \lor \paren {q \implies r} } \iff \paren {\paren {p \land q} \implies r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies r} \lor \paren {q \implies r}$

Assumption

(None)




2


1

$\paren {p \land q} \implies r$

Sequent Introduction

1

Principle of Composition: Formulation 1


3




$\paren {\paren {p \implies r} \lor \paren {q \implies r} } \implies \paren {\paren {p \land q} \implies r}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\paren {p \implies r} \lor \paren {q \implies r}$

Assumption

(None)




5


4

$\paren {p \land q} \implies r$

Sequent Introduction

4

Principle of Composition: Formulation 1


6




$\paren {\paren {p \land q} \implies r} \implies \paren {\paren {p \implies r} \lor \paren {q \implies r} }$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {\paren {p \implies r} \lor \paren {q \implies r} } \iff \paren {\paren {p \land q} \implies r}$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T60}$





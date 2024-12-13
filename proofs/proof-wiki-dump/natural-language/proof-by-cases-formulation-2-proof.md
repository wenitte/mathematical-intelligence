# 

Source: https://proofwiki.org/wiki/Proof_by_Cases/Formulation_2/Proof

Theorem
$\vdash \paren {\paren {p \implies r} \land \paren {q \implies r} } \iff \paren {\paren {p \lor q} \implies r}$


Proof
By the tableau method of natural deduction:


$\vdash \paren {\paren {p \implies r} \land \paren {q \implies r} } \iff \paren {\paren {p \lor q} \implies r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {\paren {p \implies r} \land \paren {q \implies r} } \implies \paren {\paren {p \lor q} \implies r}$

Theorem Introduction

(None)

Proof by Cases: Forward Implication


2




$\paren {\paren {p \lor q} \implies r} \implies \paren {\paren {p \implies r} \land \paren {q \implies r} }$

Theorem Introduction

(None)

Proof by Cases: Reverse Implication


3




$\paren {\paren {p \implies r} \land \paren {q \implies r} } \iff \paren {\paren {p \lor q} \implies r}$

Biconditional Introduction: $\iff \II$

1, 2



$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T50}$





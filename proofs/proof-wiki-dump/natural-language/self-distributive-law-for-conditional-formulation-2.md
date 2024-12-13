# 

Source: https://proofwiki.org/wiki/Self-Distributive_Law_for_Conditional/Formulation_2



Theorem
The following is known as the Self-Distributive Law:

$\vdash \paren {p \implies \paren {q \implies r} } \iff \paren {\paren {p \implies q} \implies \paren {p \implies r} }$


Proof
Proof of Forward Implication
By the tableau method of natural deduction:


$\paren {p \implies \paren {q \implies r} } \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \paren {q \implies r}$

Assumption

(None)




2


1

$\paren {p \implies q} \implies \paren {p \implies r}$

Sequent Introduction

1

Self-Distributive Law for Conditional: Formulation 1


3




$\paren {p \implies \paren {q \implies r} } \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$


Proof of Reverse Implication
By the tableau method of natural deduction:


$\vdash \paren {\paren {p \implies q} \implies \paren {p \implies r} } \implies \paren {p \implies \paren {q \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \implies \paren {p \implies r}$

Assumption

(None)




2


1

$p \implies \paren {q \implies r}$

Sequent Introduction

1

Self-Distributive Law for Conditional: Formulation 1


3




$\paren {\paren {p \implies q} \implies \paren {p \implies r} } \implies \paren {p \implies \paren {q \implies r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$

By the tableau method of natural deduction:


$\vdash \paren {p \implies \paren {q \implies r} } \iff \paren {\paren {p \implies q} \implies \paren {p \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {p \implies \paren {q \implies r} } \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} }$

Theorem Introduction

(None)

Self-Distributive Law for Conditional: Forward Implication: Formulation 2


2




$\paren {\paren {p \implies q} \implies \paren {p \implies r} } \implies \paren {p \implies \paren {q \implies r} }$

Theorem Introduction

(None)

Self-Distributive Law for Conditional: Reverse Implication: Formulation 2


3




$\paren {p \implies \paren {q \implies r} } \iff \paren {\paren {p \implies q} \implies \paren {p \implies r} }$

Biconditional Introduction: $\iff \II$

1, 2



$\blacksquare$


Also see
Conditional is not Right Self-Distributive where it is shown that while:
$\paren {p \implies q} \implies r \vdash \paren {p \implies r} \implies \paren {q \implies r}$
it is not the case that:

$\paren {p \implies r} \implies \paren {q \implies r} \vdash \paren {p \implies q} \implies r$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T106}$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.14$: Exercise $12 \ (8)$





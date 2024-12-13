# 

Source: https://proofwiki.org/wiki/Principle_of_Commutation/Formulation_2



Theorem
$\vdash \paren {p \implies \paren {q \implies r} } \iff \paren {q \implies \paren {p \implies r} }$

This can of course be expressed as two separate theorems:

Forward Implication
$\vdash \paren {p \implies \paren {q \implies r} } \implies \paren {q \implies \paren {p \implies r} }$
Reverse Implication
$\vdash \paren {q \implies \paren {p \implies r} } \implies \paren {p \implies \paren {q \implies r} }$


Proof
Proof of Forward Implication
By the tableau method of natural deduction:


$\vdash \paren {p \implies \paren {q \implies r} } \implies \paren {q \implies \paren {p \implies r} } $


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

$q \implies \paren {p \implies r}$

Sequent Introduction

1

Principle of Commutation: Forward Implication: Formulation 1


3




$\paren {p \implies \paren {q \implies r} } \implies \paren {q \implies \paren {p \implies r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$


Proof of Reverse Implication
By the tableau method of natural deduction:


$\vdash \paren {q \implies \paren {p \implies r} } \implies \paren {p \implies \paren {q \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \implies \paren {p \implies r}$

Assumption

(None)




2


1

$p \implies \paren {q \implies r}$

Sequent Introduction

1

Principle of Commutation: Reverse Implication: Formulation 1


3




$\paren {q \implies \paren {p \implies r} } \implies \paren {p \implies \paren {q \implies r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$

By the tableau method of natural deduction:


$\vdash \paren {p \implies \paren {q \implies r} } \iff \paren {q \implies \paren {p \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {p \implies \paren {q \implies r} } \implies \paren {q \implies \paren {p \implies r} }$

Theorem Introduction

(None)

Principle of Commutation: Forward Implication: Formulation 2


2




$\paren {q \implies \paren {p \implies r} } \implies \paren {p \implies \paren {q \implies r} }$

Theorem Introduction

(None)

Principle of Commutation: Reverse Implication: Formulation 2


3




$\paren {p \implies \paren {q \implies r} } \iff \paren {q \implies \paren {p \implies r} }$

Biconditional Introduction: $\iff \II$

1, 2



$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text T 107$





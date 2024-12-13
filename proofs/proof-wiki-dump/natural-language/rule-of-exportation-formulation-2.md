# 

Source: https://proofwiki.org/wiki/Rule_of_Exportation/Formulation_2



Theorem
$\vdash \paren {\paren {p \land q} \implies r} \iff \paren {p \implies \paren {q \implies r} }$

This can be expressed as two separate theorems:

Forward Implication
$\vdash \left({\left ({p \land q}\right) \implies r}\right) \implies \left({p \implies \left ({q \implies r}\right)}\right)$
Reverse Implication
$\vdash \paren {p \implies \paren {q \implies r} } \implies \paren {\paren {p \land q} \implies r}$


Proof
Proof of Forward Implication
By the tableau method of natural deduction:


$\vdash \paren {\paren {p \land q} \implies r} \implies \paren {p \implies \paren {q \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \land q} \implies r$

Assumption

(None)




2


1

$p \implies \paren {q \implies r}$

Sequent Introduction

1

Rule of Exportation: Forward Implication: Formulation 1


3




$\paren {\paren {p \land q} \implies r} \implies \paren {p \implies \paren {q \implies r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$


Proof of Reverse Implication
By the tableau method of natural deduction:


$\vdash \paren {p \implies \paren {q \implies r} } \implies \paren {\paren {p \land q} \implies r} $


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

$\paren {p \land q} \implies r$

Sequent Introduction

1

Rule of Exportation: Reverse Implication: Formulation 1


3




$\paren {p \implies \paren {q \implies r} } \implies \paren {\paren {p \land q} \implies r}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged
$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 3$: Theorem $\text{T27}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.4$: Statement Forms: Exercise $\text{II}. \ 3$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.2$: The Rule of Replacement: $18.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2)$: The remaining rules of inference: $19$





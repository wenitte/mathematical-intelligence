# 

Source: https://proofwiki.org/wiki/Biconditional_is_Commutative/Formulation_2

Theorems
The biconditional operator is commutative:

$\vdash \paren {p \iff q} \iff \paren {q \iff p}$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \iff q} \iff \paren {q \iff p} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \iff q}$

Assumption

(None)




2


1

$\paren {q \iff p}$

Sequent Introduction

1

Biconditional is Commutative: Formulation 1


3


1

$\paren {p \iff q} \implies \paren {q \iff p}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\paren {p \iff q}$

Assumption

(None)




5


4

$\paren {q \iff p}$

Sequent Introduction

4

Biconditional is Commutative: Formulation 1


6


4

$\paren {p \iff q} \implies \paren {q \iff p}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \iff q} \iff \paren {q \iff p}$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T92}$





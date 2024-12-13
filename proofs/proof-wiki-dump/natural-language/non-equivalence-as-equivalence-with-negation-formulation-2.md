# 

Source: https://proofwiki.org/wiki/Non-Equivalence_as_Equivalence_with_Negation/Formulation_2

Theorem
$\vdash \neg \paren {p \iff q} \iff \paren {p \iff \neg q}$


Proof
By the tableau method of natural deduction:


$\vdash \neg \paren {p \iff q} \iff \paren {p \iff \neg q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \iff q}$

Assumption

(None)




2


1

$p \iff \neg q$

Sequent Introduction

1

Non-Equivalence as Equivalence with Negation: Formulation 1


3




$\paren {\neg \paren {p \iff q} } \implies \paren {p \iff \neg q}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$p \iff \neg q$

Assumption

(None)




5


4

$\neg \paren {p \iff q}$

Sequent Introduction

4

Non-Equivalence as Equivalence with Negation: Formulation 1


6




$\paren {p \iff \neg q} \implies \paren {\neg \paren {p \iff q} }$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {\neg \paren {p \iff q} } \iff \paren {p \iff \neg q}$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T90}$





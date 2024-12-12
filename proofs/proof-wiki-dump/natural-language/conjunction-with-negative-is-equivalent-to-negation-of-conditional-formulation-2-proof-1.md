# 

Source: https://proofwiki.org/wiki/Conjunction_with_Negative_is_Equivalent_to_Negation_of_Conditional/Formulation_2/Proof_1

Theorem
$\vdash \paren {p \land \neg q} \iff \paren {\neg \paren {p \implies q} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \land \neg q} \iff \paren {\neg \paren {p \implies q} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land \neg q$

Assumption

(None)




2


1

$\neg \paren {p \implies q}$

Sequent Introduction

1

Conjunction with Negative is Equivalent to Negation of Conditional: Formulation 1: Forward Implication


3




$\paren {p \land \neg q} \implies \paren {\neg \paren {p \implies q} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\neg \paren {p \implies q}$

Assumption

(None)




5


4

$p \land \neg q$

Sequent Introduction

4

Conjunction with Negative is Equivalent to Negation of Conditional: Formulation 1:Reverse Implication


6




$\paren {\neg \paren {p \implies q} } \implies \paren {p \land \neg q}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \land \neg q} \iff \paren {\neg \paren {p \implies q} }$

Biconditional Introduction: $\iff \II$

3, 6


$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 3$: Theorem $\text{T40}$





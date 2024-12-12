# 

Source: https://proofwiki.org/wiki/Conjunction_with_Negative_is_Equivalent_to_Negation_of_Conditional/Formulation_2/Forward_Implication

Theorem
$\vdash \paren {p \land \neg q} \implies \paren {\neg \paren {p \implies q} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \land \neg q} \implies \paren {\neg \paren {p \implies q} } $


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

$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 3$: Theorem $\text{T42}$





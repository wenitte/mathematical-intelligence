# 

Source: https://proofwiki.org/wiki/Biconditional_Equivalent_to_Biconditional_of_Negations/Formulation_2

Theorem
$\vdash \left({p \iff q}\right) \iff \left({\neg p \iff \neg q}\right)$

By the tableau method of natural deduction:


$\vdash \left({p \iff q}\right) \iff \left({\neg p \iff \neg q}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff q$

Assumption

(None)




2


1

$\neg p \iff \neg q$

Sequent Introduction

1

Biconditional Equivalent to Biconditional of Negations: Formulation 1


3




$\left({p \iff q}\right) \implies \left({\neg p \iff \neg q}\right)$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\neg p \iff \neg q$

Assumption

(None)




5


4

$p \iff q$

Sequent Introduction

4

Biconditional Equivalent to Biconditional of Negations: Formulation 1


6




$\left({\neg p \iff \neg q}\right) \implies \left({p \iff q}\right)$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\left({p \iff q}\right) \iff \left({\neg p \iff \neg q}\right)$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T96}$





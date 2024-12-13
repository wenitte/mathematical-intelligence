# 

Source: https://proofwiki.org/wiki/Negation_of_Conditional_implies_Antecedent

Theorem
$\vdash \neg \paren {p \implies q} \implies p$


Proof
By the tableau method of natural deduction:


$\vdash \neg \paren {p \implies q} \implies p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \implies q}$

Assumption

(None)




2


1

$p \land \neg q$

Sequent Introduction

1

Conjunction with Negative is Equivalent to Negation of Conditional


3


1

$p$

Rule of Simplification: $\land \EE_1$

2




4




$\neg \paren {p \implies q} \implies p$

Rule of Implication: $\implies \II$

1 – 3

Assumption 1 has been discharged
$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{I}$: 'NOT' and 'IF': $\S 5$: Theorem $\text{T21}$





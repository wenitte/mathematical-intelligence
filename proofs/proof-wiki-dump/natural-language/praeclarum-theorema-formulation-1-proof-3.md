# 

Source: https://proofwiki.org/wiki/Praeclarum_Theorema/Formulation_1/Proof_3

Theorem
$\paren {p \implies q} \land \paren {r \implies s} \vdash \paren {p \land r} \implies \paren {q \land s}$


Proof
By the tableau method of natural deduction:


$\paren {p \implies q} \land \paren {r \implies s} \vdash \paren {p \land r} \implies \paren {q \land s} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \land \paren {r \implies s}$

Premise

(None)




2


1

$p \implies q$

Rule of Simplification: $\land \EE_1$

1




3


1

$r \implies s$

Rule of Simplification: $\land \EE_2$

1




4


1

$p \land r \implies q \land r$

Sequent Introduction

2

Factor Principles/Conjunction on Right/Formulation 1/Proof 2


5


1

$q \land r \implies q \land s$

Sequent Introduction

3

Factor Principles/Conjunction on Left/Formulation 1/Proof 2


6


1

$p \land r \implies q \land s$

Sequent Introduction

4, 5

Hypothetical Syllogism
$\blacksquare$





# 

Source: https://proofwiki.org/wiki/Proof_by_Contradiction/Variant_1

Theorem
$\paren {p \vdash \paren {q \land \neg q} } \vdash \neg p$


Proof
By the tableau method of natural deduction:


$\paren {p \vdash \paren {q \land \neg q} } \vdash \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \vdash \paren {q \land \neg q}$

Premise

(None)




2


2

$p$

Assumption

(None)




3


1, 2

$q \land \neg q$

Sequent Introduction

1, 2

by hypothesis


4


1, 2

$q$

Rule of Simplification: $\land \EE_1$

3




5


1, 2

$\neg q$

Rule of Simplification: $\land \EE_2$

3




6


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

4, 5




7


1

$\neg p$

Proof by Contradiction: $\neg \II$

2 – 6

Assumption 2 has been discharged
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $3$ Conjunction and Disjunction





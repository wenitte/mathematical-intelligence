# 

Source: https://proofwiki.org/wiki/Biconditional_is_Transitive/Formulation_1/Proof_1

Theorem
$p \iff q, q \iff r \vdash p \iff r$


Proof
By the tableau method of natural deduction:


$p \iff q, q \iff r \vdash p \iff r$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff q$

Premise

(None)




2


2

$q \iff r$

Premise

(None)




3


1

$p \implies q$

Biconditional Elimination: $\iff \EE_1$

1




4


2

$q \implies r$

Biconditional Elimination: $\iff \EE_1$

2




5


1, 2

$p \implies r$

Sequent Introduction

1, 2

Hypothetical Syllogism: Formulation 1


6


1

$q \implies p$

Biconditional Elimination: $\iff \EE_2$

1




7


2

$r \implies q$

Biconditional Elimination: $\iff \EE_2$

2




8


1, 2

$r \implies p$

Sequent Introduction

7, 6

Hypothetical Syllogism: Formulation 1


9


1, 2

$p \iff r$

Biconditional Introduction: $\iff \II$

5, 8


$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $4$ The Biconditional: Theorem $26$





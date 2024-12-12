# 

Source: https://proofwiki.org/wiki/Constructive_Dilemma/Formulation_1/Proof_3

Theorem
$p \implies q, r \implies s \vdash p \lor r \implies q \lor s$


Proof
By the tableau method of natural deduction:


$p \implies q, r \implies s \vdash p \lor r \implies q \lor s$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies q$

Premise

(None)




2


2

$r \implies s$

Premise

(None)




3


1

$p \lor r \implies q \lor r$

Sequent Introduction

1

Factor Principles/Disjunction on Right/Formulation 1/Proof 2


4


1

$q \lor r \implies q \lor s$

Sequent Introduction

2

Factor Principles/Disjunction on Left/Formulation 1/Proof 2


5


1

$p \lor r \implies q \lor s$

Sequent Introduction

3,4

Hypothetical Syllogism

$\blacksquare$






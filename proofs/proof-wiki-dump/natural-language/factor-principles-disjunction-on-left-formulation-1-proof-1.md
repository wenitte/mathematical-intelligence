# 

Source: https://proofwiki.org/wiki/Factor_Principles/Disjunction_on_Left/Formulation_1/Proof_1

Theorem
$p \implies q \vdash \paren {r \lor p} \implies \paren {r \lor q}$


Proof
By the tableau method of natural deduction:


$p \implies q \vdash \paren {r \lor p} \implies \paren {r \lor q} $


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




$r \implies r$

Theorem Introduction

(None)

Law of Identity: Formulation 2


3


1

$\paren {r \lor p} \implies \paren {r \lor q}$

Sequent Introduction

2, 1

Constructive Dilemma

$\blacksquare$






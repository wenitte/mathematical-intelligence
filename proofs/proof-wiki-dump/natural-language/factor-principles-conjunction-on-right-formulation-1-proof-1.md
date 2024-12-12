# 

Source: https://proofwiki.org/wiki/Factor_Principles/Conjunction_on_Right/Formulation_1/Proof_1

Theorem
$p \implies q \vdash \paren {p \land r} \implies \paren {q \land r}$


Proof
By the tableau method of natural deduction:


$p \implies q \vdash \paren {p \land r} \implies \paren {q \land r} $


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

Law of Identity

(None)

This is a theorem so depends on nothing


3


1

$\paren {p \implies q} \land \paren {r \implies r}$

Rule of Conjunction: $\land \II$

1, 2




4


1

$\paren {p \land r} \implies \paren {q \land r}$

Sequent Introduction

3

Praeclarum Theorema
$\blacksquare$





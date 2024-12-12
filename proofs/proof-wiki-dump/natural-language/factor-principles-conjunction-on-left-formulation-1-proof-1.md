# 

Source: https://proofwiki.org/wiki/Factor_Principles/Conjunction_on_Left/Formulation_1/Proof_1

Theorem
$p \implies q \vdash \paren {r \land p} \implies \paren {r \land q}$


Proof
By the tableau method of natural deduction:


$p \implies q \vdash \paren {r \land p} \implies \paren {r \land q} $


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

$\paren {r \implies r} \land \paren {p \implies q}$

Rule of Conjunction: $\land \II$

2, 1




4


1

$\paren {r \land p} \implies \paren {r \land q}$

Sequent Introduction

3

Praeclarum Theorema

$\blacksquare$






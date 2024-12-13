# 

Source: https://proofwiki.org/wiki/NOR_with_Equal_Arguments/Proof_1

Theorem
$p \downarrow p \dashv \vdash \neg p$
That is, the NOR of a proposition with itself corresponds to the negation operator.


Proof
By the tableau method of natural deduction:


$p \downarrow p \vdash \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \downarrow p$

Premise

(None)




2


1

$\neg \paren {p \lor p}$

Sequent Introduction

1

Definition of Logical NOR


3


1

$\neg p$

Sequent Introduction

2

Rule of Idempotence: Disjunction
$\Box$

By the tableau method of natural deduction:


$\neg p \vdash p \downarrow p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p$

Premise

(None)




2


1

$\neg \paren {p \lor p}$

Sequent Introduction

1

Rule of Idempotence: Disjunction


3


1

$p \downarrow p$

Sequent Introduction

2

Definition of Logical NOR

$\blacksquare$






# 

Source: https://proofwiki.org/wiki/NAND_with_Equal_Arguments/Proof_1

Theorem
$p \uparrow p \dashv \vdash \neg p$
That is, the NAND of a proposition with itself corresponds to the negation operation.


Proof
By the tableau method of natural deduction:


$p \uparrow p \vdash \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \uparrow p$

Premise

(None)




2


1

$\neg \paren {p \land p}$

Sequent Introduction

1

Definition of Logical NAND


3


1

$\neg p$

Sequent Introduction

2

Rule of Idempotence: Conjunction
$\Box$

By the tableau method of natural deduction:


$\neg p \vdash p \uparrow p$


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

$\neg \paren {p \land p}$

Sequent Introduction

1

Rule of Idempotence: Conjunction


3


1

$p \uparrow p$

Sequent Introduction

2

Definition of Logical NAND
$\blacksquare$





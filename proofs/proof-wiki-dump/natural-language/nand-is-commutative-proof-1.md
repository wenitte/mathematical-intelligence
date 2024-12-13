# 

Source: https://proofwiki.org/wiki/NAND_is_Commutative/Proof_1

Theorem
$p \uparrow q \dashv \vdash q \uparrow p$


Proof
By the tableau method of natural deduction:


$p \uparrow q \vdash q \uparrow p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \uparrow q$

Premise

(None)




2


1

$\neg \paren {p \land q}$

Sequent Introduction

1

Definition of Logical NAND


3


1

$\neg \paren {q \land p}$

Sequent Introduction

2

Conjunction is Commutative


4


1

$q \uparrow p$

Sequent Introduction

3

Definition of Logical NAND
$\Box$

By the tableau method of natural deduction:


$q \uparrow p \vdash p \uparrow q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \uparrow p$

Premise

(None)




2


1

$\neg \paren {q \land p}$

Sequent Introduction

1

Definition of Logical NAND


3


1

$\neg \paren {p \land q}$

Sequent Introduction

2

Conjunction is Commutative


4


1

$p \uparrow q$

Sequent Introduction

3

Definition of Logical NAND
$\blacksquare$





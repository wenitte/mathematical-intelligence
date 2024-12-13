# 

Source: https://proofwiki.org/wiki/NOR_is_Commutative/Proof_1

Theorem
$p \downarrow q \dashv \vdash q \downarrow p$


Proof
By the tableau method of natural deduction:


$p \downarrow q \vdash q \downarrow p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \downarrow q$

Premise

(None)




2


1

$\neg \paren {p \lor q}$

Sequent Introduction

1

Definition of Logical NOR


3


1

$\neg \paren {q \lor p}$

Sequent Introduction

2

Disjunction is Commutative


4


1

$q \uparrow p$

Sequent Introduction

3

Definition of Logical NOR
$\Box$

By the tableau method of natural deduction:


$q \downarrow p \vdash p \uparrow q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \downarrow p$

Premise

(None)




2


1

$\neg \paren {q \lor p}$

Sequent Introduction

1

Definition of Logical NOR


3


1

$\neg \paren {p \lor q}$

Sequent Introduction

2

Disjunction is Commutative


4


1

$p \downarrow q$

Sequent Introduction

3

Definition of Logical NOR
$\blacksquare$





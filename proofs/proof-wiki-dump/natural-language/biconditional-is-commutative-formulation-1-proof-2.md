# 

Source: https://proofwiki.org/wiki/Biconditional_is_Commutative/Formulation_1/Proof_2

Theorem
$p \iff q \dashv \vdash q \iff p$


Proof
By the tableau method of natural deduction:


$p \iff q \vdash q \iff p$


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


1

$\paren {p \implies q} \land \paren {q \implies p}$

Sequent Introduction

1

Rule of Material Equivalence


3


1

$\paren {q \implies p} \land \paren {p \implies q}$

Sequent Introduction

2

Conjunction is Commutative


4


1

$q \iff p$

Sequent Introduction

3

Rule of Material Equivalence
$\Box$

By the tableau method of natural deduction:


$q \iff p \vdash p \iff q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \iff p$

Premise

(None)




2


1

$\paren {q \implies p} \land \paren {p \implies q}$

Sequent Introduction

1

Rule of Material Equivalence


3


1

$\paren {p \implies q} \land \paren {q \implies p}$

Sequent Introduction

2

Conjunction is Commutative


4


1

$p \iff q$

Sequent Introduction

3

Rule of Material Equivalence
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $4$ The Biconditional: Theorem $24$





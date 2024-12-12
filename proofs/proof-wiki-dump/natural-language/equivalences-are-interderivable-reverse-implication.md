# 

Source: https://proofwiki.org/wiki/Equivalences_are_Interderivable/Reverse_Implication

Theorem
If two propositional formulas are interderivable, they are equivalent:

$\left ({p \iff q}\right) \vdash \left ({p \dashv \vdash q}\right)$


Proof
By the tableau method of natural deduction:


$p \iff q \vdash \left({p \vdash q}\right)$


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




3


1

$p \implies q$

Biconditional Elimination: $\iff \EE_1$

1




3


3

$p$

Assumption

(None)




4


1, 3

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 3



$\Box$

By the tableau method of natural deduction:


$p \iff q \vdash \left({q \vdash p}\right)$


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




3


1

$p \implies q$

Biconditional Elimination: $\iff \EE_2$

1




3


3

$q$

Assumption

(None)




4


1, 3

$p$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 3



$\blacksquare$






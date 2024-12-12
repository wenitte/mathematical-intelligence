# 

Source: https://proofwiki.org/wiki/Equivalences_are_Interderivable/Forward_Implication

Theorem
If two propositional formulas are interderivable, then they are equivalent:

$\left ({p \dashv \vdash q}\right) \vdash \left ({p \iff q}\right)$


Proof
By the tableau method of natural deduction:


$\left({p \dashv \vdash q}\right) \vdash p \iff q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \dashv \vdash q$

Premise

(None)




2


1

$\left ({p \vdash q}\right) \land \left ({q \vdash p}\right)$

Sequent Introduction

1

Definition of Interderivable


3


3

$p$

Assumption

(None)




4


1, 3

$p \vdash q$

Rule of Simplification: $\land \EE_1$

2




5


1

$p \implies q$

Rule of Implication: $\implies \II$

3 – 4

Assumption 3 has been discharged


6


6

$q$

Assumption

(None)




7


1, 6

$q \vdash p$

Rule of Simplification: $\land \EE_2$

2




8


1

$q \implies p$

Rule of Implication: $\implies \II$

6 – 7

Assumption 6 has been discharged


9


1

$p \iff q$

Biconditional Introduction: $\iff \II$

5, 8



$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Double_Negation/Formulation_1/Proof_1



Theorem
$p \dashv \vdash \neg \neg p$


Proof
Double Negation Introduction
By the tableau method of natural deduction:


$p \vdash \neg \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Premise

(None)




2


2

$\neg p$

Assumption

(None)




3


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

1, 2




4


1

$\neg \neg p$

Proof by Contradiction: $\neg \II$

2 – 3

Assumption 2 has been discharged
$\blacksquare$


Double Negation Elimination
By the tableau method of natural deduction:


$\neg \neg p \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \neg p$

Premise

(None)




2




$p \lor \neg p$

Law of Excluded Middle

(None)




3


3

$p$

Assumption

(None)




4


4

$\neg p$

Assumption

(None)




5


1, 4

$\bot$

Principle of Non-Contradiction: $\neg \EE$

4, 1




6


1, 4

$p$

Rule of Explosion: $\bot \EE$

5




7


1

$p$

Proof by Cases: $\text{PBC}$

2, 3 – 3, 4 – 6

Assumptions 3 and 4 have been discharged

$\blacksquare$


Intuitionist Perspective
The intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates the Law of Double Negation Elimination from the system of intuitionistic propositional logic.
Hence a difference is perceived between Double Negation Elimination and Double Negation Introduction, whereby it can be seen from the Principle of Non-Contradiction that if a statement is true, then it is not the case that it is false.
However, if all we know is that a statement is not false, we can not be certain that it is actually true without accepting that there are only two possible truth values.
Such distinctions may be important when considering, for example, multi-value logic.

However, when analysing logic from a purely classical standpoint, it is common and acceptable to make the simplification of taking just one Double Negation rule:

$p \dashv \vdash \neg \neg p$





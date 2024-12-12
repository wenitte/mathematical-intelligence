# 

Source: https://proofwiki.org/wiki/Double_Negation_Elimination_implies_Law_of_Excluded_Middle/Proof_2

Theorem
Let the Law of Double Negation Elimination be supposed to hold:

$\neg \neg p \vdash p$

Then the Law of Excluded Middle likewise holds:

$\vdash p \lor \neg p$


Proof
By the tableau method of natural deduction:


$\vdash p \lor \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\neg\neg (p \lor \neg p)$

Theorem Introduction

(None)

Negation of Excluded Middle is False/Form 2


2




$p \lor \neg p$

Double Negation Elimination: $\neg \neg \EE$

1


$\blacksquare$


Intuitionist Perspective
The intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates the Law of Double Negation Elimination from the system of intuitionistic propositional logic.
Hence a difference is perceived between Double Negation Elimination and Double Negation Introduction, whereby it can be seen from the Principle of Non-Contradiction that if a statement is true, then it is not the case that it is false.
However, if all we know is that a statement is not false, we can not be certain that it is actually true without accepting that there are only two possible truth values.
Such distinctions may be important when considering, for example, multi-value logic.

However, when analysing logic from a purely classical standpoint, it is common and acceptable to make the simplification of taking just one Double Negation rule:

$p \dashv \vdash \neg \neg p$





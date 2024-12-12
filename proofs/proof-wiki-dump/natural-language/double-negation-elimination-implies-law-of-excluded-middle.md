# 

Source: https://proofwiki.org/wiki/Double_Negation_Elimination_implies_Law_of_Excluded_Middle



Theorem
Let the Law of Double Negation Elimination be supposed to hold:

$\neg \neg p \vdash p$

Then the Law of Excluded Middle likewise holds:

$\vdash p \lor \neg p$


Proof 1
By the tableau method of natural deduction:


$p \lor \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \lor \neg p}$

Assumption

(None)

Assume the contrary


2


2

$p$

Assumption

(None)

Assume one disjunct


3


2

$p \lor \neg p$

Rule of Addition: $\lor \II_1$

2




4


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 1




5


1

$\neg p$

Proof by Contradiction: $\neg \II$

2 – 4

Assumption 2 has been discharged


6


1

$p \lor \neg p$

Rule of Addition: $\lor \II_2$

5




7


1

$\bot$

Principle of Non-Contradiction: $\neg \EE$

6, 1

also demonstrating a contradiction


8




$\neg \neg \paren {p \lor \neg p}$

Proof by Contradiction: $\neg \II$

1 – 7

Assumption 1 has been discharged


9




$p \lor \neg p$

Double Negation Elimination: $\neg \neg \EE$

8


$\blacksquare$


Proof 2
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





# 

Source: https://proofwiki.org/wiki/Reductio_ad_Absurdum/Sequent_Form



Proof Rule
The Reductio ad Absurdum can be symbolised by the sequent:

$\paren {\neg p \vdash \bot} \vdash p$


Proof
By the tableau method of natural deduction:


$\paren {\neg p \vdash \bot} \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \vdash \bot$

Premise

(None)




2


2

$\neg p$

Assumption

(None)




3


1

$\bot$

Sequent Introduction

1

the premise itself


4


1

$\neg \neg p$

Proof by Contradiction: $\neg \II$

2 – 3

Assumption 2 has been discharged


5


1

$p$

Double Negation Elimination: $\neg \neg \EE$

4



$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Double Negation Elimination.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.2$: Derived rules





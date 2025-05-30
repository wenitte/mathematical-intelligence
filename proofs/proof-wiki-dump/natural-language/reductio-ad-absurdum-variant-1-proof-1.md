# 

Source: https://proofwiki.org/wiki/Reductio_ad_Absurdum/Variant_1/Proof_1

Theorem
$\neg p \implies \bot \vdash p$


Proof
By the tableau method of natural deduction:


$\neg p \implies \bot \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \implies \bot$

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

Modus Ponendo Ponens: $\implies \mathcal E$

1, 2




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






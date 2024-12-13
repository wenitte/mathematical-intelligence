# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Formulation_1/Proof_1



Theorem
$p \implies q \dashv \vdash \neg q \implies \neg p$


Proof
Proof of Forward Implication
By the tableau method of natural deduction:


$p \implies q \vdash \neg q \implies \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies q$

Premise

(None)




2


2

$\neg q$

Assumption

(None)




3


1, 2

$\neg p$

Modus Tollendo Tollens (MTT)

1, 2




4


1

$\neg q \implies \neg p$

Rule of Implication: $\implies \II$

2 – 3

Assumption 2 has been discharged

$\blacksquare$


Proof of Reverse Implication
By the tableau method of natural deduction:


$\neg q \implies \neg p \vdash p \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg q \implies \neg p$

Premise

(None)




2


2

$p$

Assumption

(None)




3


2

$\neg \neg p$

Double Negation Introduction: $\neg \neg \II$

2




4


1, 2

$\neg \neg q$

Modus Tollendo Tollens (MTT)

1, 3




5


1, 2

$q$

Double Negation Elimination: $\neg \neg \EE$

4




6


1

$p \implies q$

Rule of Implication: $\implies \II$

2 – 5

Assumption 2 has been discharged



Law of the Excluded Middle
The proof of the reverse implication depends on the Law of the Excluded Middle, by way of Double Negation Elimination.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates the proof of the reverse implication from an intuitionistic perspective.






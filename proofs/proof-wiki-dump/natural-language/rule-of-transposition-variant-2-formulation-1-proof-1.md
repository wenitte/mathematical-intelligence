# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Variant_2/Formulation_1/Proof_1



Theorem
$p \implies \neg q \dashv \vdash q \implies \neg p$


Proof
Proof of Forward Implication
By the tableau method of natural deduction:


$\neg p \implies q \vdash \neg q \implies p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \implies q$

Premise

(None)




2


2

$\neg q$

Assumption

(None)




3


1, 2

$\neg \neg p$

Modus Tollendo Tollens (MTT)

1, 2




4


1, 2

$p$

Double Negation Elimination: $\neg \neg \EE$

3




5


1

$\neg q \implies p$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged

$\blacksquare$

Law of the Excluded Middle
This proof depends on the Law of the Excluded Middle, by way of Double Negation Elimination.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this proof from an intuitionistic perspective.


Proof of Reverse Implication
By the tableau method of natural deduction:


$\neg q \implies p \vdash \neg p \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg q \implies p$

Premise

(None)




2


2

$\neg p$

Assumption

(None)




3


1, 2

$\neg \neg q$

Modus Tollendo Tollens (MTT)

1, 2




4


1, 2

$q$

Double Negation Elimination: $\neg \neg \EE$

3




5


1

$\neg p \implies q$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged

$\blacksquare$

Law of the Excluded Middle
This proof depends on the Law of the Excluded Middle, by way of Double Negation Elimination.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this proof from an intuitionistic perspective.






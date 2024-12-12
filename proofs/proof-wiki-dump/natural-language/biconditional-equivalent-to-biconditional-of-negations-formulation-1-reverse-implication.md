# 

Source: https://proofwiki.org/wiki/Biconditional_Equivalent_to_Biconditional_of_Negations/Formulation_1/Reverse_Implication



Theorem
$\neg p \iff \neg q \vdash p \iff q$


Proof
By the tableau method of natural deduction:


$\neg p \iff \neg q \vdash p \iff q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \iff \neg q$

Premise

(None)




2


1

$\neg p \implies \neg q$

Biconditional Elimination: $\iff \EE_1$

1




3


1

$\neg \neg q \implies \neg \neg p$

Sequent Introduction

2

Rule of Transposition


4


1

$q \implies p$

Double Negation Elimination: $\neg \neg \EE$

3

(twice)


5


1

$\neg q \implies \neg p$

Biconditional Elimination: $\iff \EE_2$

1




6


1

$\neg \neg p \implies \neg \neg q$

Sequent Introduction

5

Rule of Transposition


7


1

$p \implies q$

Double Negation Elimination: $\neg \neg \EE$

3

(twice)


8


1

$p \iff q$

Biconditional Introduction: $\iff \II$

7, 4


$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Double Negation Elimination.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $4$ The Biconditional: Exercise $1 \ \text{(d)}$





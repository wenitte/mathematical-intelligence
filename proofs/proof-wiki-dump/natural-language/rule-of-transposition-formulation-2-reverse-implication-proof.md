# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Formulation_2/Reverse_Implication/Proof



Theorem
$\vdash \left({\neg q \implies \neg p}\right) \implies \left({p \implies q}\right)$


Proof
By the tableau method of natural deduction:


$\vdash \left({\neg q \implies \neg p}\right) \implies \left({p \implies q}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg q \implies \neg p$

Assumption

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


7




$\left({\neg q \implies \neg p}\right) \implies \left({p \implies q}\right)$

Rule of Implication: $\implies \II$

1 – 6

Assumption 1 has been discharged

$\blacksquare$

Law of the Excluded Middle
This proof depends on the Law of the Excluded Middle, by way of Double Negation Elimination.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this proof from an intuitionistic perspective.


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{I}$: 'NOT' and 'IF': $\S 5$: Theorem $\text{T16}$
1967: Angelo Margaris: First Order Mathematical Logic: Axiom $A3$





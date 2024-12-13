# 

Source: https://proofwiki.org/wiki/Non-Equivalence_as_Disjunction_of_Conjunctions/Formulation_1/Forward_Implication

Theorem
$\neg \left ({p \iff q}\right) \vdash \left({\neg p \land q}\right) \lor \left({p \land \neg q}\right)$


Proof
By the tableau method of natural deduction:


$\neg \paren {p \iff q} \vdash \paren {\neg p \land q} \lor \paren {p \land \neg q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \iff q}$

Premise

(None)




2


1

$\neg \paren {\paren {p \implies q} \land \paren {q \implies p} }$

Sequent Introduction

1

Rule of Material Equivalence


3


1

$\neg \paren {\paren {\neg p \lor q} \land \paren {\neg q \lor p} }$

Sequent Introduction

2

Rule of Material Implication (twice)


4


1

$\neg \paren {\neg p \lor q} \lor \neg \paren {\neg q \lor p}$

Sequent Introduction

3

De Morgan's Laws: Disjunction of Negations


5


1

$\paren {\neg \neg  p \land \neg q} \lor \paren {\neg \neg q \land \neg p}$

Sequent Introduction

4

De Morgan's Laws: Conjunction of Negations


6


1

$\paren {p \land \neg q} \lor \paren {q \land \neg p}$

Double Negation Elimination: $\neg \neg \EE$

5




7


1

$\paren {p \land \neg q} \lor \paren {\neg p \land q}$

Sequent Introduction

6

Conjunction is Commutative


8


1

$\paren {\neg p \land q} \lor \paren {p \land \neg q}$

Sequent Introduction

7

Disjunction is Commutative
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Double Negation Elimination.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.






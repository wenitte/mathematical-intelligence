# 

Source: https://proofwiki.org/wiki/Biconditional_iff_Disjunction_implies_Conjunction/Formulation_1/Reverse_Implication

Theorem
$\paren {p \lor q} \implies \paren {p \land q} \vdash p \iff q$


Proof
By the tableau method of natural deduction:


$\paren {p \lor q} \implies \paren {p \land q} \vdash p \iff q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \lor q} \implies \paren {p \land q}$

Premise

(None)




2


1

$\neg \paren {p \lor q} \lor \paren {p \land q}$

Sequent Introduction

1

Rule of Material Implication


3


1

$\paren {p \land q} \lor \neg \paren {p \lor q}$

Sequent Introduction

2

Disjunction is Commutative


4


1

$\paren {p \land q} \lor \paren {\neg p \land \neg q}$

Sequent Introduction

3

De Morgan's Laws: Conjunction of Negations


5


1

$\paren {p \implies q} \land \paren {q \implies p}$

Sequent Introduction

4

Biconditional as Disjunction of Conjunctions


6


1

$p \iff q$

Sequent Introduction

5

Rule of Material Equivalence

$\blacksquare$

Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Rule of Material Implication.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.






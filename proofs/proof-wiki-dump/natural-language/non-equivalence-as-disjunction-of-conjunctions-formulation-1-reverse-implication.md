# 

Source: https://proofwiki.org/wiki/Non-Equivalence_as_Disjunction_of_Conjunctions/Formulation_1/Reverse_Implication

Theorem
$\left({\neg p \land q}\right) \lor \left({p \land \neg q}\right) \vdash \neg \left ({p \iff q}\right)$


Proof
By the tableau method of natural deduction:


$\paren {\neg p \land q} \lor \paren {p \land \neg q} \vdash \neg \paren {p \iff q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {\neg p \land q} \lor \paren {p \land \neg q}$

Premise

(None)




2


1

$\paren {p \land \neg q} \lor \paren {\neg p \land q}$

Sequent Introduction

1

Disjunction is Commutative


3


1

$\paren {p \land \neg q} \lor \paren {q \land \neg p}$

Sequent Introduction

2

Conjunction is Commutative


4


1

$\paren {\neg \neg  p \land \neg q} \lor \paren {\neg \neg q \land \neg p}$

Double Negation Introduction: $\neg \neg \II$

3




5


1

$\neg \paren {\neg p \lor q} \lor \neg \paren {\neg q \lor p}$

Sequent Introduction

4

De Morgan's Laws: Conjunction of Negations


6


1

$\neg \paren {\paren {\neg p \lor q} \land \paren {\neg q \lor p} }$

Sequent Introduction

5

De Morgan's Laws: Disjunction of Negations


7


1

$\neg \paren {\paren {p \implies q} \land \paren {q \implies p} }$

Sequent Introduction

6

Rule of Material Implication (twice)


8


1

$\neg \paren {p \iff q}$

Sequent Introduction

7

Rule of Material Equivalence

$\blacksquare$






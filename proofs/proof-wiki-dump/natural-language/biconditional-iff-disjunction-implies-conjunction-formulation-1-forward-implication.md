# 

Source: https://proofwiki.org/wiki/Biconditional_iff_Disjunction_implies_Conjunction/Formulation_1/Forward_Implication

Theorem
$p \iff q \vdash \paren {p \lor q} \implies \paren {p \land q}$


Proof
By the tableau method of natural deduction:


$p \iff q \vdash \paren {p \lor q} \implies \paren {p \land q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff q$

Premise

(None)




2


1

$\paren {p \land q} \lor \paren {\neg p \land \neg q}$

Sequent Introduction

1

Biconditional as Disjunction of Conjunctions


3


1

$\paren {p \land q} \lor \neg \paren {p \lor q}$

Sequent Introduction

2

De Morgan's Laws: Conjunction of Negations


4


1

$\neg \paren {p \lor q} \lor \paren {p \land q}$

Sequent Introduction

3

Disjunction is Commutative


5


1

$\paren {p \lor q} \implies \paren {p \land q}$

Sequent Introduction

4

Rule of Material Implication

$\blacksquare$






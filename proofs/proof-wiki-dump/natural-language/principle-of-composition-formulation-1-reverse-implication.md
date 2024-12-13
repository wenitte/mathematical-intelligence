# 

Source: https://proofwiki.org/wiki/Principle_of_Composition/Formulation_1/Reverse_Implication

Theorem
$\paren {p \land q} \implies r \vdash \paren {p \implies r} \lor \paren {q \implies r}$


Proof
By the tableau method of natural deduction:


$\paren {p \land q} \implies r \vdash \paren {p \implies r} \lor \paren {q \implies r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \land q} \implies r$

Premise

(None)




2


1

$\neg \paren {p \lor q} \lor r$

Sequent Introduction

1

Rule of Material Implication


3


1

$\neg p \lor \neg q \lor r$

Sequent Introduction

2

De Morgan's Laws: Disjunction of Negations


4


1

$r \lor \neg p \lor \neg q \lor r$

Rule of Addition: $\lor \II_ 2$

3




5


1

$\neg p \lor r \lor \neg q \lor r$

Sequent Introduction

4

Disjunction is Commutative


6


1

$\paren {p \implies r} \lor \neg q \lor r$

Sequent Introduction

5

Rule of Material Implication


7


1

$\paren {p \implies r} \lor \paren {q \implies r}$

Sequent Introduction

6

Rule of Material Implication

$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Disjunction_Distributes_over_Conjunction/Right_Distributive/Formulation_1/Forward_Implication

Definition
$\paren {q \land r} \lor p \vdash \paren {q \lor p} \land \paren {r \lor p}$


Proof
By the tableau method of natural deduction:


$\paren {q \land r} \lor p \vdash \paren {q \lor p} \land \paren {r \lor p} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {q \land r} \lor p$

Premise

(None)




2


1

$p \lor \paren {q \land r}$

Sequent Introduction

1

Disjunction is Commutative


3


1

$\paren {p \lor q} \land \paren {p \lor r}$

Sequent Introduction

2

Disjunction is Left Distributive over Conjunction


4


1

$\paren {q \lor p} \land \paren {r \lor p}$

Sequent Introduction

3

Disjunction is Commutative

$\blacksquare$






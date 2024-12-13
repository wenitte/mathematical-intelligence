# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Conjunction_Distributes_over_Disjunction/Right_Distributive/Formulation_1/Reverse_Implication

Definition
$\paren {q \land p} \lor \paren {r \land p} \vdash \paren {q \lor r} \land p$


Proof
By the tableau method of natural deduction:


$\paren {q \land p} \lor \paren {r \land p} \vdash \paren {q \lor r} \land p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {q \land p} \lor \paren {r \land p}$

Premise

(None)




2


1

$\paren {p \land q} \lor \paren {p \land r}$

Sequent Introduction

1

Conjunction is Commutative


3


1

$p \land \paren {q \lor r}$

Sequent Introduction

2

Conjunction is Left Distributive over Disjunction


4


1

$\paren {q \lor r} \land p$

Sequent Introduction

3

Conjunction is Commutative

$\blacksquare$






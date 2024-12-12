# 

Source: https://proofwiki.org/wiki/Factor_Principles/Disjunction_on_Right/Formulation_1/Proof_3

Theorem
$p \implies q \vdash \paren {p \lor r} \implies \paren {q \lor r}$


Proof
By the tableau method of natural deduction:


$p \implies q \vdash \paren {p \lor r} \implies \paren {q \lor r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies q$

Premise

(None)




2


2

$p \lor r$

Assumption

(None)




3


2

$r \lor p$

Sequent Introduction

2

Disjunction is Commutative


4


1

$\paren {r \lor p} \implies \paren {r \lor q}$

Sequent Introduction

1

Factor Principles/Disjunction on Left/Formulation 1


5


1,2

$r \lor q$

Modus Ponendo Ponens: $\implies \mathcal E$

4, 3




6


1,2

$q \lor r$

Sequent Introduction

5

Disjunction is Commutative


7


1

$\paren {p \lor r} \implies \paren {q \lor r}$

Rule of Implication: $\implies \II$

2 – 6

Assumption 2 has been discharged

$\blacksquare$






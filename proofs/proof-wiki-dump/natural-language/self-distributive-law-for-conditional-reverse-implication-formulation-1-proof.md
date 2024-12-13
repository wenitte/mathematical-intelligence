# 

Source: https://proofwiki.org/wiki/Self-Distributive_Law_for_Conditional/Reverse_Implication/Formulation_1/Proof

Theorem
$\paren {p \implies q} \implies \paren {p \implies r} \vdash p \implies \paren {q \implies r}$


Proof
By the tableau method of natural deduction:


$\paren {p \implies q} \implies \paren {p \implies r} \vdash p \implies \paren {q \implies r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \implies \paren {p \implies r}$

Premise

(None)




2


2

$p$

Assumption

(None)




3


3

$q$

Assumption

(None)




4


3

$p \implies q$

Sequent Introduction

3

True Statement is implied by Every Statement


5


1, 3

$p \implies r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 4




6


1, 2, 3

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

5, 2




7


1, 2

$q \implies r$

Rule of Implication: $\implies \II$

3 – 6

Assumption 3 has been discharged


8


1

$p \implies \paren {q \implies r}$

Rule of Implication: $\implies \II$

2 – 7

Assumption 2 has been discharged

$\blacksquare$






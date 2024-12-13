# 

Source: https://proofwiki.org/wiki/Self-Distributive_Law_for_Conditional/Forward_Implication/Formulation_1/Proof

Theorem
$p \implies \paren {q \implies r} \vdash \paren {p \implies q} \implies \paren {p \implies r}$


Proof
By the tableau method of natural deduction:


$p \implies \paren {q \implies r} \vdash \paren {p \implies q} \implies \paren {p \implies r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \paren {q \implies r}$

Premise

(None)




2


2

$p \implies q$

Assumption

(None)




3


3

$p$

Assumption

(None)




4


1, 3

$q \implies r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


2, 3

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 3




6


1, 2, 3

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

4, 5




7


1, 2

$p \implies r$

Rule of Implication: $\implies \II$

3 – 6

Assumption 3 has been discharged


8


1

$\paren {p \implies q} \implies \paren {p \implies r}$

Rule of Implication: $\implies \II$

2 – 7

Assumption 2 has been discharged
$\blacksquare$





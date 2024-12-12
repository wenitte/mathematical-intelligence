# 

Source: https://proofwiki.org/wiki/Conditional_is_Left_Distributive_over_Conjunction/Forward_Implication/Formulation_1/Proof

Theorem
$p \implies \paren {q \land r} \vdash \paren {p \implies q} \land \paren {p \implies r}$


Proof
By the tableau method of natural deduction:


$p \implies \paren {q \land r} \vdash \paren {p \implies q} \land \paren {p \implies r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \paren {q \land r}$

Premise

(None)




2


2

$p$

Assumption

(None)




3


1, 2

$q \land r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 2




4


1, 2

$q$

Rule of Simplification: $\land \EE_1$

3




5


1, 2

$r$

Rule of Simplification: $\land \EE_2$

3




6


1

$p \implies q$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged


7


1

$p \implies r$

Rule of Implication: $\implies \II$

2 – 5

Assumption 2 has been discharged


8


1

$\paren {p \implies q} \land \paren {p \implies r}$

Rule of Conjunction: $\land \II$

6, 7


$\blacksquare$





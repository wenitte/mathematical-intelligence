# 

Source: https://proofwiki.org/wiki/Praeclarum_Theorema/Formulation_1/Proof_1

Theorem
$\paren {p \implies q} \land \paren {r \implies s} \vdash \paren {p \land r} \implies \paren {q \land s}$


Proof
By the tableau method of natural deduction:


$\paren {p \implies q} \land \paren {r \implies s} \vdash \paren {p \land r} \implies \paren {q \land s} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \land \paren {r \implies s}$

Premise

(None)




2


1

$p \implies q$

Rule of Simplification: $\land \EE_1$

1




3


1

$r \implies s$

Rule of Simplification: $\land \EE_2$

1




4


4

$p \land r$

Assumption

(None)




5


4

$p$

Rule of Simplification: $\land \EE_1$

4




6


4

$r$

Rule of Simplification: $\land \EE_2$

4




7


1, 4

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 5




8


1, 4

$s$

Modus Ponendo Ponens: $\implies \mathcal E$

3, 6




9


1, 4

$q \land s$

Rule of Conjunction: $\land \II$

7, 8




10


1

$\paren {p \land r} \implies \paren {q \land s}$

Rule of Implication: $\implies \II$

4 – 9

Assumption 4 has been discharged

$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Conditional_is_Equivalent_to_Negation_of_Conjunction_with_Negative/Formulation_1/Forward_Implication

Theorem
$p \implies q \vdash \neg \paren {p \land \neg q}$


Proofs
By the tableau method of natural deduction:


$p \implies q \vdash \neg \paren {p \land \neg q} $


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

$p \land \neg q$

Assumption

(None)

Assume the opposite of what we want to prove...


3


2

$p$

Rule of Simplification: $\land \EE_1$

2




4


2

$\neg q$

Rule of Simplification: $\land \EE_2$

2




5


1, 2

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




6


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

5, 4

... and demonstrate a contradiction


7


1

$\neg \paren {p \land \neg q}$

Proof by Contradiction: $\neg \II$

2 – 6

Assumption 2 has been discharged
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Theorem $35 \ \text{(a)}$





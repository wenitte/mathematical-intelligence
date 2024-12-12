# 

Source: https://proofwiki.org/wiki/Conjunction_with_Negative_is_Equivalent_to_Negation_of_Conditional/Formulation_1/Forward_Implication

Theorem
$p \land \neg q \vdash \neg \paren {p \implies q}$


Proof
By the tableau method of natural deduction:


$p \land \neg q \vdash \neg \paren {p \implies q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land \neg q$

Premise

(None)




2


2

$p \implies q$

Assumption

(None)

Assume the opposite of what is to be proved ...


3


1

$p$

Rule of Simplification: $\land \EE_1$

1




4


1

$\neg q$

Rule of Simplification: $\land \EE_2$

1




5


1, 2

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 3




6


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

5, 4

... and demonstrate a contradiction


7


1

$\neg \paren {p \implies q}$

Proof by Contradiction: $\neg \II$

2 – 6

Assumption 2 has been discharged

$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Conjunction_is_Equivalent_to_Negation_of_Conditional_of_Negative/Formulation_1/Forward_Implication

Theorem
$p \land q \vdash \neg \paren {p \implies \neg q}$


Proof
By the tableau method of natural deduction:


$p \land q \vdash \neg \paren {p \implies \neg q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land q$

Premise

(None)




2


2

$p \implies \neg q$

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

$q$

Rule of Simplification: $\land \EE_2$

1




5


1, 2

$\neg q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 3




6


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

4, 5

... and demonstrate a contradiction


7


1

$\neg \paren {p \implies \neg q}$

Proof by Contradiction: $\neg \II$

2 – 6

Assumption 2 has been discharged
$\blacksquare$





# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Tollens/Variant/Formulation_1/Reverse_Implication

Theorem
$p \implies \neg q \vdash \neg \paren {p \land q}$


Proof
By the tableau method of natural deduction:


$p \implies \neg q \vdash \neg \paren {p \land q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \neg q$

Premise

(None)




2


2

$p \land q$

Assumption

(None)

Assume the opposite of what is to be proved ...


3


2

$p$

Rule of Simplification: $\land \EE_1$

2




4


2

$q$

Rule of Simplification: $\land \EE_2$

2




5


1, 2

$\neg q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




6


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

4, 5

... and demonstrate a contradiction


7


1

$\neg \paren {p \land q}$

Proof by Contradiction: $\neg \II$

2 – 6

Assumption 2 has been discharged
$\blacksquare$





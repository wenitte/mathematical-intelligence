# 

Source: https://proofwiki.org/wiki/Factor_Principles/Conjunction_on_Right/Formulation_1/Proof_2

Theorem
$p \implies q \vdash \paren {p \land r} \implies \paren {q \land r}$


Proof
By the tableau method of natural deduction:


$p \implies q \vdash \paren {p \land r} \implies \paren {q \land r} $


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

$p \land r$

Assumption

(None)




3


2

$p$

Rule of Simplification: $\land \EE_1$

2




4


1, 2

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


2

$r$

Rule of Simplification: $\land \EE_2$

2




6


1, 2

$q \land r$

Rule of Conjunction: $\land \II$

4, 5




7


1

$\paren {p \land r} \implies \paren {q \land r}$

Rule of Implication: $\implies \II$

2 – 6

Assumption 2 has been discharged
$\blacksquare$


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Example $1.15$





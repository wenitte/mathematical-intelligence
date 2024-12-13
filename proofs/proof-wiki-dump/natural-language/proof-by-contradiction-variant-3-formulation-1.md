# 

Source: https://proofwiki.org/wiki/Proof_by_Contradiction/Variant_3/Formulation_1

Theorem
$p \implies \neg p \vdash \neg p$


Proof
By the tableau method of natural deduction:


$p \implies \neg p \vdash \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \neg p$

Premise

(None)




2


2

$p$

Assumption

(None)




3


1, 2

$\neg p$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 2




4


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

2, 3




5


1, 2

$\neg p$

Proof by Contradiction: $\neg \II$

2 – 4

Assumption 2 has been discharged
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $3$ Conjunction and Disjunction: Theorem $23$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Example $1.21$





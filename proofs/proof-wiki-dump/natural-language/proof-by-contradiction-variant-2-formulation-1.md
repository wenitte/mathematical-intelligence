# 

Source: https://proofwiki.org/wiki/Proof_by_Contradiction/Variant_2/Formulation_1

Theorem
$p \implies q, p \implies \neg q \vdash \neg p$


Proof
By the tableau method of natural deduction:


$p \implies q, p \implies \neg q \vdash \neg p$


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

$p \implies \neg q$

Premise

(None)




3


3

$p$

Assumption

(None)




4


1, 3

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


2, 3

$\neg q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 3




6


1, 2, 3

$\bot$

Principle of Non-Contradiction: $\neg \EE$

4, 5




7


1, 2

$\neg p$

Proof by Contradiction: $\neg \II$

3 – 6

Assumption 3 has been discharged
$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{I}$: 'NOT' and 'IF': $\S 3$: Exercises, Group $\text{I}: \ 18$
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $3$ Conjunction and Disjunction: Theorem $22$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Example $1.21$





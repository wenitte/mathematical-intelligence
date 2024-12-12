# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Disjunction/Formulation_1/Forward_Implication

Theorem
$p \lor q \vdash \neg \paren {\neg p \land \neg q}$


Proof
By the tableau method of natural deduction:


$p \lor q \vdash \neg \paren {\neg p \land \neg q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor q$

Premise

(None)




2


2

$\neg p \land \neg q$

Assumption

(None)




3


2

$\neg p$

Rule of Simplification: $\land \EE_1$

2




4


2

$\neg q$

Rule of Simplification: $\land \EE_2$

2




5


5

$p$

Assumption

(None)




6


2, 5

$\bot$

Principle of Non-Contradiction: $\neg \EE$

5, 3




7


7

$q$

Assumption

(None)




8


2, 7

$\bot$

Principle of Non-Contradiction: $\neg \EE$

7, 4




9


1, 2

$\bot$

Proof by Cases: $\text{PBC}$

1, 5 – 6, 7 – 8

Assumptions 5 and 7 have been discharged


10


1

$\neg \paren {\neg p \land \neg q}$

Proof by Contradiction: $\neg \II$

2 – 9

Assumption 2 has been discharged
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Theorem $36 \ \text{(a)}$





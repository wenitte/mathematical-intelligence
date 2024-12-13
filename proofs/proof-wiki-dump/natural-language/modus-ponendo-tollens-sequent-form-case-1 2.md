# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Tollens/Sequent_Form/Case_1

Theorem
$\neg \paren {p \land q}, p \vdash \neg q$


Proof
By the tableau method of natural deduction:


$\neg \paren {p \land q}, p \vdash \neg q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \land q}$

Premise

(None)




2


2

$p$

Premise

(None)




3


3

$q$

Assumption

(None)




4


2, 3

$p \land q$

Rule of Conjunction: $\land \II$

2, 3




5


1, 2, 3

$\bot$

Principle of Non-Contradiction: $\neg \EE$

4, 1




6


1, 2

$\neg q$

Proof by Contradiction: $\neg \II$

3 – 5

Assumption 3 has been discharged
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Ruless: Theorem $34$





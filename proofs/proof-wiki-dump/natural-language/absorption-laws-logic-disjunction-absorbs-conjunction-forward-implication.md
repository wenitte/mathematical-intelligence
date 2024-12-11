# 

Source: https://proofwiki.org/wiki/Absorption_Laws_(Logic)/Disjunction_Absorbs_Conjunction/Forward_Implication

Theorem
$p \lor \paren {p \land q} \vdash p$


Proof
By the tableau method of natural deduction:


$p \lor \paren {p \land q} \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor \paren {p \land q}$

Premise

(None)




2


2

$p$

Assumption

(None)




3


3

$p \land q$

Assumption

(None)




4


3

$p$

Rule of Simplification: $\land \EE_1$

3




5


1

$p$

Proof by Cases: $\text{PBC}$

1, 2 – 2, 3 – 4

Assumptions 2 and 3 have been discharged
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Theorem $32 \ \text{(a)}$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercises $1.4: \ 2 \ \text{(n)}$





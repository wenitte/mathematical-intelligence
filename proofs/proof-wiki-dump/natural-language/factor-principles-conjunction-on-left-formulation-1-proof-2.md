# 

Source: https://proofwiki.org/wiki/Factor_Principles/Conjunction_on_Left/Formulation_1/Proof_2

Theorem
$p \implies q \vdash \paren {r \land p} \implies \paren {r \land q}$


Proof
By the tableau method of natural deduction:


$p \implies q \vdash \paren {r \land p} \implies \paren {r \land q} $


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

$r \land p$

Assumption

(None)




3


1, 2

$p$

Rule of Simplification: $\land \EE_2$

2




4


1, 2

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


1, 2

$r$

Rule of Simplification: $\land \EE_1$

2




6


1, 2

$r \land q$

Rule of Conjunction: $\land \II$

5, 4




7


1

$\paren {r \land p} \implies \paren {r \land q}$

Rule of Implication: $\implies \II$

2 – 6

Assumption 2 has been discharged

$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $3$ Conjunction and Disjunction: Theorem $18$





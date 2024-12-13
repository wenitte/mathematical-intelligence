# 

Source: https://proofwiki.org/wiki/Rule_of_Commutation/Conjunction/Formulation_1/Proof_1

Theorem
$p \land q \dashv \vdash q \land p$


Proof
By the tableau method of natural deduction:


$p \land q \vdash q \land p$


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


1

$p$

Rule of Simplification: $\land \EE_1$

1




3


1

$q$

Rule of Simplification: $\land \EE_2$

1




4


1

$q \land p$

Rule of Conjunction: $\land \II$

3, 2



$\Box$

By the tableau method of natural deduction:


$q \land p \vdash p \land q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \land p$

Premise

(None)




2


1

$q$

Rule of Simplification: $\land \EE_1$

1




2


1

$p$

Rule of Simplification: $\land \EE_2$

1




4


1

$p \land q$

Rule of Conjunction: $\land \II$

3, 2



$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $3$ Conjunction and Disjunction: Theorem $17$





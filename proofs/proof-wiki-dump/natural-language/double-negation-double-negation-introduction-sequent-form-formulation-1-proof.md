# 

Source: https://proofwiki.org/wiki/Double_Negation/Double_Negation_Introduction/Sequent_Form/Formulation_1/Proof

Theorem
$p \vdash \neg \neg p$


Proof
By the tableau method of natural deduction:


$p \vdash \neg \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Premise

(None)




2


2

$\neg p$

Assumption

(None)




3


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

1, 2




4


1

$\neg \neg p$

Proof by Contradiction: $\neg \II$

2 – 3

Assumption 2 has been discharged
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $2$ Conditionals and Negation
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.2$: Derived rules





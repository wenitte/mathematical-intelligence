# 

Source: https://proofwiki.org/wiki/Non-Equivalence_of_Proposition_and_Negation/Formulation_1

Theorem
$p \implies \neg p, \neg p \implies p \vdash \bot$


Proof
By the tableau method of natural deduction:


$p \implies \neg p, \neg p \implies p \vdash \bot$


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

$\neg p \implies p$

Premise

(None)




3


1

$\neg p$

Sequent Introduction

1

Proof by Contradiction: Variant 3


4


1, 2

$p$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 3




5


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

4, 3



$\blacksquare$






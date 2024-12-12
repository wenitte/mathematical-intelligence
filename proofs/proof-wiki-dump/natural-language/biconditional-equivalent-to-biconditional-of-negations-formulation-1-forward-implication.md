# 

Source: https://proofwiki.org/wiki/Biconditional_Equivalent_to_Biconditional_of_Negations/Formulation_1/Forward_Implication

Theorem
$p \iff q \vdash \neg p \iff \neg q$


Proof
By the tableau method of natural deduction:


$p \iff q \vdash \neg p \iff \neg q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff q$

Premise

(None)




2


1

$p \implies q$

Biconditional Elimination: $\iff \EE_1$

1




3


1

$\neg q \implies \neg p$

Sequent Introduction

2

Rule of Transposition


4


1

$q \implies p$

Biconditional Elimination: $\iff \EE_2$

1




5


1

$\neg p \implies \neg q$

Sequent Introduction

4

Rule of Transposition


6


1

$\neg p \iff \neg q$

Biconditional Introduction: $\iff \II$

5, 3


$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $4$ The Biconditional: Exercise $1 \ \text{(c)}$





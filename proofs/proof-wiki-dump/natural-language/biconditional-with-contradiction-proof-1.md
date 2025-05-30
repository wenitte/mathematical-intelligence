# 

Source: https://proofwiki.org/wiki/Biconditional_with_Contradiction/Proof_1

Theorem
$p \iff \bot \dashv \vdash \neg p$


Proof
By the tableau method of natural deduction:


$p \iff \bot \vdash \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff \bot$

Premise

(None)




2


1

$p \implies \bot$

Biconditional Elimination: $\iff \EE_1$

1




3


1

$\neg p$

Sequent Introduction

2

Contradictory Consequent

$\Box$

By the tableau method of natural deduction:


$\neg p \vdash p \iff \bot$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p$

Assumption

(None)




2


1

$p \implies \bot$

Sequent Introduction

1

Contradictory Consequent


3




$\top$

Rule of Top-Introduction: $\top \II$

(None)




4




$\bot \implies p$

Sequent Introduction

3

Contradictory Antecedent


5


1

$p \iff \bot$

Biconditional Introduction: $\iff \II$

2, 4



$\blacksquare$






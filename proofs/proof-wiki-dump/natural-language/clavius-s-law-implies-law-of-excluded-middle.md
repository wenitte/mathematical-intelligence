# 

Source: https://proofwiki.org/wiki/Clavius%27s_Law_implies_Law_of_Excluded_Middle

Theorem
From Clavius's Law:

$\neg p \implies p \vdash p$
follows the Law of Excluded Middle:

$\vdash p \lor \neg p$


Proof
By the tableau method of natural deduction:


$\vdash p \lor \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg (p \lor \neg p)$

Assumption

(None)




2


1

$\bot$

Sequent Introduction

1

Negation of Excluded Middle is False


3


1

$p \lor \neg p$

Rule of Explosion: $\bot \EE$

2




4




$\neg(p \lor \neg p) \implies p \lor \neg p$

Rule of Implication: $\implies \II$

1 – 3

Assumption 1 has been discharged


5




$p \lor \neg p$

Sequent Introduction

4

Clavius's Law

$\blacksquare$






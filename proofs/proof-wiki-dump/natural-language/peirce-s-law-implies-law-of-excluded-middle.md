# 

Source: https://proofwiki.org/wiki/Peirce%27s_Law_implies_Law_of_Excluded_Middle

Theorem
From Peirce's Law:

$\left({p \implies q}\right) \implies p \vdash p$
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

$(p \lor \neg p) \implies \bot$

Assumption

(None)




2


1

$\neg(p \lor \neg p)$

Sequent Introduction

1

Negation as Implication of Bottom


3


1

$\bot$

Sequent Introduction

2

Negation of Excluded Middle is False


4


1

$p \lor \neg p$

Rule of Explosion: $\bot \EE$

3




5




$((p \lor \neg p) \implies \bot) \implies p \lor \neg p$

Rule of Implication: $\implies \II$

1 – 4

Assumption 1 has been discharged


6




$p \lor \neg p$

Sequent Introduction

5

Peirce's Law

$\blacksquare$






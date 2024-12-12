# 

Source: https://proofwiki.org/wiki/Clavius%27s_Law/Formulation_1/Proof_2

Theorem
From Peirce's Law:

$\left({p \implies q}\right) \implies p \vdash p$
follows Clavius's Law:

$\neg p \implies p \vdash p$


Proof
By the tableau method of natural deduction:


$\neg p \implies p \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \implies p$

Premise

(None)




2


2

$p \implies \bot$

Assumption

(None)




3


2

$\neg p$

Sequent Introduction

2

Negation as Implication of Bottom


4


1,2

$p$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


1

$(p \implies \bot) \implies p$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged


6


1

$p$

Sequent Introduction

5

Peirce's Law

$\blacksquare$






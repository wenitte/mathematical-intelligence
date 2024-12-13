# 

Source: https://proofwiki.org/wiki/Negation_of_Excluded_Middle_is_False/Form_2

Theorem
$\vdash \neg \neg (p \lor \neg p)$


Proof
By the tableau method of natural deduction:


$\neg\neg (p \lor \neg p)$


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

Negation of Excluded Middle is False: Form 1


3




$\neg (p \lor \neg p) \implies \bot$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4




$\neg \neg (p \lor \neg p)$

Sequent Introduction

3

Negation as Implication of Bottom

$\blacksquare$






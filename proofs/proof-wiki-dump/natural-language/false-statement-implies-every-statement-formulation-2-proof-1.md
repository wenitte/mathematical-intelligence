# 

Source: https://proofwiki.org/wiki/False_Statement_implies_Every_Statement/Formulation_2/Proof_1

Theorem
$\vdash \neg p \implies \paren {p \implies q}$


Proof
By the tableau method of natural deduction:


$\vdash \neg p \implies \left({p \implies q}\right)$


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


2

$p$

Assumption

(None)




3


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

2, 1




4


1, 2

$q$

Rule of Explosion: $\bot \EE$

3




5


1

$p \implies q$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged


6




$\neg p \implies \left({p \implies q}\right)$

Rule of Implication: $\implies \II$

1 – 5

Assumption 1 has been discharged

$\blacksquare$






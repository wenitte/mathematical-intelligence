# 

Source: https://proofwiki.org/wiki/Contradictory_Antecedent/Proof_1

Theorem
$\bot \implies p \dashv \vdash \top$


Proof
By the tableau method of natural deduction:


$\bot \implies p \vdash \top$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\bot \implies p$

Premise

(None)




2




$\top$

Rule of Top-Introduction: $\top \II$

(None)



$\Box$

By the tableau method of natural deduction:


$\top \vdash \bot \implies p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\bot$

Assumption

(None)




2


2

$\top$

Premise

(None)




3


1

$p$

Rule of Explosion: $\bot \EE$

1




4




$\bot \implies p$

Rule of Implication: $\implies \II$

1 – 3

Assumption 1 has been discharged

$\blacksquare$






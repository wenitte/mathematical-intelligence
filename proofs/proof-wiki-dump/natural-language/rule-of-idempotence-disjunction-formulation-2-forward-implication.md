# 

Source: https://proofwiki.org/wiki/Rule_of_Idempotence/Disjunction/Formulation_2/Forward_Implication

Theorem
$\vdash p \implies \left({p \lor p}\right)$


Proof
By the tableau method of natural deduction:


$p \implies \left({p \lor p}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Assumption

(None)




2


1

$p \lor p$

Rule of Addition: $\lor \II_1$

1




3




$p \implies \left({p \lor p}\right)$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$






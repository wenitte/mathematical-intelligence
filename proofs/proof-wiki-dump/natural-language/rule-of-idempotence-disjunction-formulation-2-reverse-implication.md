# 

Source: https://proofwiki.org/wiki/Rule_of_Idempotence/Disjunction/Formulation_2/Reverse_Implication

Theorem
$\vdash \left({p \lor p}\right) \implies p$


Proof
By the tableau method of natural deduction:


$\left({p \lor p}\right) \implies p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor p$

Premise

(None)




2


2

$p$

Assumption

(None)




3


1

$p$

Proof by Cases: $\text{PBC}$

1, 2 – 2, 2 – 2

Assumptions 2 and 2 have been discharged


4




$\left({p \lor p}\right) \implies p$

Rule of Implication: $\implies \II$

1 – 3

Assumption 1 has been discharged

$\blacksquare$


Also see
This is an axiom of the following proof system:
Definition:Hilbert Proof System/Instance 2





# 

Source: https://proofwiki.org/wiki/Biconditional_is_Commutative/Formulation_1/Proof_1

Theorem
$p \iff q \dashv \vdash q \iff p$


Proof
By the tableau method of natural deduction:


$p \iff q \vdash q \iff p$


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

$q \implies p$

Biconditional Elimination: $\iff \EE_2$

1




4


1

$q \iff p$

Biconditional Introduction: $\iff \II$

3, 2



$\Box$

By the tableau method of natural deduction:


$q \iff p \vdash p \iff q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \iff p$

Premise

(None)




2


1

$q \implies p$

Biconditional Elimination: $\iff \EE_1$

1




3


1

$p \implies q$

Biconditional Elimination: $\iff \EE_2$

1




4


1

$p \iff q$

Biconditional Introduction: $\iff \II$

3, 2



$\blacksquare$






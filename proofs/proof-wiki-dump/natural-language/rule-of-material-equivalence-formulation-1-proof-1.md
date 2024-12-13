# 

Source: https://proofwiki.org/wiki/Rule_of_Material_Equivalence/Formulation_1/Proof_1

Theorem
$p \iff q \dashv \vdash \paren {p \implies q} \land \paren {q \implies p}$


Proof
By the tableau method of natural deduction:


$p \iff q \vdash \paren {p \implies q} \land \paren {q \implies p} $


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

$\paren {p \implies q} \land \paren {q \implies p}$

Rule of Conjunction: $\land \II$

2, 3




By the tableau method of natural deduction:


$\paren {p \implies q} \land \paren {q \implies p} \vdash p \iff q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \land \paren {q \implies p}$

Premise

(None)




2


1

$p \implies q$

Rule of Simplification: $\land \EE_1$

1




3


1

$q \implies p$

Rule of Simplification: $\land \EE_2$

1




4


1

$p \iff q$

Biconditional Introduction: $\iff \II$

2, 3



$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Ponens/Variant_1/Proof_1

Theorem
$p \vdash \paren {p \implies q} \implies q$


Proof
By the tableau method of natural deduction:


$p \vdash \paren {p \implies q} \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Premise

(None)




2


2

$p \implies q$

Assumption

(None)




3


1, 2

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 1




4


1

$\paren {p \implies q} \implies q$

Rule of Implication: $\implies \II$

2 – 3

Assumption 2 has been discharged

$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Ponens/Variant_3/Proof_1

Theorem
$\vdash \paren {\paren {p \implies q} \land p} \implies q$


Proof
By the tableau method of natural deduction:


$\vdash \paren {\paren {p \implies q} \land p} \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \land p$

Assumption

(None)




2


1

$p \implies q$

Rule of Simplification: $\land \EE_1$

1




3


1

$p$

Rule of Simplification: $\land \EE_2$

1




4


1

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 3




5




$\paren {\paren {p \implies q} \land p} \implies q$

Rule of Implication: $\implies \II$

1 – 4

Assumption 1 has been discharged

$\blacksquare$






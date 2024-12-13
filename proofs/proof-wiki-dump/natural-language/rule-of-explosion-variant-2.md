# 

Source: https://proofwiki.org/wiki/Rule_of_Explosion/Variant_2

Theorem
$\vdash \paren {p \land \neg p} \implies q$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \land \neg p} \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land \neg p$

Assumption

(None)




2


1

$p$

Rule of Simplification: $\land \EE_1$

1




3


1

$\neg p$

Rule of Simplification: $\land \EE_2$

1




4


1

$p \lor q$

Rule of Addition: $\lor \II_1$

2




5


1

$q$

Modus Tollendo Ponens $\mathrm {MTP}_{{{6}}}$

4, 3


$\blacksquare$





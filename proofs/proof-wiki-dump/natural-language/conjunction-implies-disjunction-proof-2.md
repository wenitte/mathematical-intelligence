# 

Source: https://proofwiki.org/wiki/Conjunction_implies_Disjunction/Proof_2

Theorem
$\vdash \paren {p \land q} \implies \paren {p \lor q}$


Proof
By the tableau method of natural deduction:


$\paren {p \land q} \implies \paren {p \lor q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land q$

Assumption

(None)




2


1

$p$

Rule of Simplification: $\land \EE_1$

1




3


1

$p \lor q$

Rule of Addition: $\lor \II_1$

2




4




$\paren {p \land q} \implies \paren {p \lor q}$

Rule of Implication: $\implies \II$

1 – 3

Assumption 1 has been discharged

$\blacksquare$






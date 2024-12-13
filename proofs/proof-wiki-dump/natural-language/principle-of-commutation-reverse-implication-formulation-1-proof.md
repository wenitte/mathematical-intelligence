# 

Source: https://proofwiki.org/wiki/Principle_of_Commutation/Reverse_Implication/Formulation_1/Proof

Theorem
$q \implies \left({p \implies r}\right) \vdash p \implies \left({q \implies r}\right)$


Proof
By the tableau method of natural deduction:


$q \implies \left({p \implies r}\right) \vdash p \implies \left({q \implies r}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \implies \left({p \implies r}\right)$

Premise

(None)




2


2

$p$

Assumption

(None)




3


3

$q$

Assumption

(None)




4


1, 3

$p \implies r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


1, 2, 3

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 4




6


1, 2

$q \implies r$

Rule of Implication: $\implies \II$

3 – 5

Assumption 3 has been discharged


7


1

$p \implies \left({q \implies r}\right)$

Rule of Implication: $\implies \II$

2 – 6

Assumption 2 has been discharged

$\blacksquare$






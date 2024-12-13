# 

Source: https://proofwiki.org/wiki/Principle_of_Commutation/Forward_Implication/Formulation_2

Theorem
$\vdash \paren {p \implies \paren {q \implies r} } \implies \paren {q \implies \paren {p \implies r} }$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {p \implies \paren {q \implies r} } \implies \paren {q \implies \paren {p \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \paren {q \implies r}$

Assumption

(None)




2


1

$q \implies \paren {p \implies r}$

Sequent Introduction

1

Principle of Commutation: Forward Implication: Formulation 1


3




$\paren {p \implies \paren {q \implies r} } \implies \paren {q \implies \paren {p \implies r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$


Proof 2
Using a tableau proof for instance 1 of a Hilbert proof system:



$\vdash \paren {p \implies \paren {q \implies r} } \implies \paren {q \implies \paren {p \implies r} } $


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


2

$p \implies \paren {q \implies r}$

Assumption

(None)




3


1, 2

$q \implies r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 2




4


4

$q$

Assumption

(None)




5


1, 2, 4

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

3, 4




6


2, 4

$p \implies r$

Deduction Rule

5




7


2

$q \implies \paren {p \implies r}$

Deduction Rule

6




8




$\paren {p \implies \paren {q \implies r} } \implies \paren {q \implies \paren {p \implies r} }$

Deduction Rule

7



$\blacksquare$






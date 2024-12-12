# 

Source: https://proofwiki.org/wiki/Conditional_is_Left_Distributive_over_Disjunction/Formulation_1/Forward_Implication

Theorem
$p \implies \paren {q \lor r} \vdash \paren {p \implies q} \lor  \paren {p \implies r}$


Proof
By the tableau method of natural deduction:


$p \implies \paren {q \lor r} \vdash \paren {p \implies q} \lor  \paren {p \implies r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \paren {q \lor r}$

Assumption

(None)




2


2

$p$

Assumption

(None)




3


1, 2

$q \lor r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 2




4


2

$p$

Law of Identity

2




5


5

$q$

Assumption

(None)




6


5

$p \implies q$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7


5

$\paren {p \implies q} \lor \paren {p \implies r}$

Rule of Addition: $\lor \II_1$

6




8


8

$r$

Assumption

(None)




9


8

$p \implies r$

Sequent Introduction

8

True Statement is implied by Every Statement


10


8

$\paren {p \implies q} \lor \paren {p \implies r}$

Rule of Addition: $\lor \II_2$

9




11


1

$\paren {p \implies q} \lor \paren {p \implies r}$

Proof by Cases: $\text{PBC}$

3, 2 – 7, 8 – 10

Assumptions 2 and 8 have been discharged

$\blacksquare$






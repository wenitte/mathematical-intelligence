# 

Source: https://proofwiki.org/wiki/Conditional_is_Left_Distributive_over_Disjunction/Formulation_1/Reverse_Implication

Theorem
$\paren {p \implies q} \lor \paren{p \implies r} \vdash p \implies \paren {q \lor r}$


Proof
By the tableau method of natural deduction:


$\paren {p \implies q} \lor \paren {p \implies r} \vdash p \implies \paren {q \lor r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \lor \paren {p \implies r}$

Assumption

(None)




2


2

$p \implies q$

Assumption

(None)




3


3

$p$

Assumption

(None)




4


2, 3

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 3




5


2, 3

$q \lor r$

Rule of Addition: $\lor \II_1$

4




6


2

$p \implies \paren {q \lor r}$

Rule of Implication: $\implies \II$

3 – 5

Assumption 3 has been discharged


7


7

$p \implies r$

Assumption

(None)




8


8

$p$

Assumption

(None)




9


7, 8

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

7, 8




10


7, 8

$q \lor r$

Rule of Addition: $\lor \II_2$

9




11


7

$p \implies \paren {q \lor r}$

Rule of Implication: $\implies \II$

8 – 10

Assumption 8 has been discharged


12


1

$p \implies \paren{q \lor r}$

Proof by Cases: $\text{PBC}$

1, 2 – 6, 7 – 11

Assumptions 2 and 7 have been discharged

$\blacksquare$






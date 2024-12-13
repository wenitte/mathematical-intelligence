# 

Source: https://proofwiki.org/wiki/Principle_of_Composition/Formulation_1/Forward_Implication

Theorem
$\paren {p \implies r} \lor \paren {q \implies r} \vdash \paren {p \land q} \implies r$


Proof
By the tableau method of natural deduction:


$\paren {p \implies r} \lor \paren {q \implies r} \vdash \paren {p \land q} \implies r$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies r} \lor \paren {q \implies r}$

Premise

(None)




2


2

$p \implies r$

Assumption

(None)




3


3

$p \land q$

Assumption

(None)




4


3

$p$

Rule of Simplification: $\land \EE_ 1$

3




5


2, 3

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

2 ,  4




6


2

$\paren {p \land q} \implies r$

Rule of Implication: $\implies \II$

3  –  5

Assumption  3  has been discharged


7


7

$q \implies r$

Assumption

(None)




8


8

$p \land q$

Assumption

(None)




9


8

$q$

Rule of Simplification: $\land \EE_ 2$

8




10


7, 8

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

7 ,  9




11


7

$\paren {p \land q} \implies r$

Rule of Implication: $\implies \II$

8  –  10

Assumption  8  has been discharged


12


1

$\paren {p \land q} \implies r$

Proof by Cases: $\text{PBC}$

1 ,  2  –  6 ,  7  –  11

Assumptions  2  and  7 have been discharged

$\blacksquare$






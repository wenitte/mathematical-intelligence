# 

Source: https://proofwiki.org/wiki/Proof_by_Cases/Formulation_1/Reverse_Implication

Theorem
$\paren {p \lor q} \implies r \vdash \paren {p \implies r} \land \paren {q \implies r}$


Proof
By the tableau method of natural deduction:


$\paren {p \lor q} \implies r \vdash \paren {p \implies r} \land \paren {q \implies r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \lor q} \implies r$

Premise

(None)




2


2

$p$

Assumption

(None)




3


2

$p \lor q$

Rule of Addition: $\lor \II_1$

2




4


1, 2

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


1

$p \implies r$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged


6


6

$q$

Assumption

(None)




7


6

$p \lor q$

Rule of Addition: $\lor \II_2$

6




8


1, 6

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 7




9


1

$q \implies r$

Rule of Implication: $\implies \II$

6 – 8

Assumption 6 has been discharged


10


1

$\paren {p \implies r} \land \paren {q \implies r}$

Rule of Conjunction: $\land \II$

5, 9


$\blacksquare$





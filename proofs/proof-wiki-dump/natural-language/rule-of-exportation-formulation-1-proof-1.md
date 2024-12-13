# 

Source: https://proofwiki.org/wiki/Rule_of_Exportation/Formulation_1/Proof_1



Theorem
$\paren {p \land q} \implies r \dashv \vdash p \implies \paren {q \implies r}$


Proof
Proof of Forward Implication
By the tableau method of natural deduction:


$\paren {p \land q} \implies r \vdash p \implies \paren {q \implies r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \land q} \implies r$

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


2, 3

$p \land q$

Rule of Conjunction: $\land \II$

2, 3




5


1, 2, 3

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 4




6


1, 2

$q \implies r$

Rule of Implication: $\implies \II$

3 – 5

Assumption 3 has been discharged


7


1

$p \implies \paren {q \implies r}$

Rule of Implication: $\implies \II$

2 – 6

Assumption 2 has been discharged

$\blacksquare$


Proof of Reverse Implication
By the tableau method of natural deduction:


$p \implies \paren {q \implies r} \vdash \paren {p \land q} \implies r$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \paren {q \implies r}$

Premise

(None)




2


2

$p \land q$

Assumption

(None)




3


2

$p$

Rule of Simplification: $\land \EE_1$

2




4


2

$q$

Rule of Simplification: $\land \EE_2$

2




5


1, 2

$q \implies r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




6


1, 2

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

5, 4




7


1

$\paren {p \land q} \implies r$

Rule of Implication: $\implies \II$

2 – 6

Assumption 2 has been discharged

$\blacksquare$






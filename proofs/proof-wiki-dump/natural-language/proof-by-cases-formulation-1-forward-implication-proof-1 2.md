# 

Source: https://proofwiki.org/wiki/Proof_by_Cases/Formulation_1/Forward_Implication/Proof_1

Theorem
$\paren {p \implies r} \land \paren {q \implies r} \vdash \paren {p \lor q} \implies r$


Proof
By the tableau method of natural deduction:


$\paren {p \implies r} \land \paren {q \implies r} \vdash \paren {p \lor q} \implies r$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies r} \land \paren {q \implies r}$

Premise

(None)




2


1

$p \implies r$

Rule of Simplification: $\land \EE_1$

1




3


1

$q \implies r$

Rule of Simplification: $\land \EE_2$

1




4


1

$p \lor q \implies r \lor r$

Sequent Introduction

2, 3

Constructive Dilemma


5


5

$p \lor q$

Assumption

(None)




6


1, 5

$r \lor r$

Modus Ponendo Ponens: $\implies \mathcal E$

4, 5




7


1, 5

$r$

Sequent Introduction

6

Rule of Idempotence: Disjunction


8


1

$p \lor q \implies r$

Rule of Implication: $\implies \II$

5 – 7

Assumption 5 has been discharged

$\blacksquare$






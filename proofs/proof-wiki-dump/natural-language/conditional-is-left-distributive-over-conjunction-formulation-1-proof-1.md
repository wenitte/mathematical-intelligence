# 

Source: https://proofwiki.org/wiki/Conditional_is_Left_Distributive_over_Conjunction/Formulation_1/Proof_1



Theorem
$p \implies \paren {q \land r} \dashv \vdash \paren {p \implies q} \land \paren {p \implies r}$


Proof
Proof of Forward Implication
By the tableau method of natural deduction:


$p \implies \paren {q \land r} \vdash \paren {p \implies q} \land \paren {p \implies r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \paren {q \land r}$

Premise

(None)




2


2

$p$

Assumption

(None)




3


1, 2

$q \land r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 2




4


1, 2

$q$

Rule of Simplification: $\land \EE_1$

3




5


1, 2

$r$

Rule of Simplification: $\land \EE_2$

3




6


1

$p \implies q$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged


7


1

$p \implies r$

Rule of Implication: $\implies \II$

2 – 5

Assumption 2 has been discharged


8


1

$\paren {p \implies q} \land \paren {p \implies r}$

Rule of Conjunction: $\land \II$

6, 7


$\blacksquare$


Proof of Reverse Implication
By the tableau method of natural deduction:


$\paren {p \implies q} \land \paren {p \implies r} \vdash p \implies \paren {q \land r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \land \paren {p \implies r}$

Premise

(None)




2


1

$\paren {p \land p} \implies \paren {q \land r}$

Sequent Introduction

1

Praeclarum Theorema


3


3

$p$

Assumption

(None)




4


3

$p \land p$

Sequent Introduction

3

Rule of Idempotence: Conjunction


5


1, 3

$q \land r$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 4




6


1

$p \implies \paren {q \land r}$

Rule of Implication: $\implies \II$

3 – 5

Assumption 3 has been discharged

$\blacksquare$






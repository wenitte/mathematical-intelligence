# 

Source: https://proofwiki.org/wiki/Conditional_is_Left_Distributive_over_Conjunction/Reverse_Implication/Formulation_1

Theorem
$\paren {p \implies q} \land \paren {p \implies r} \vdash p \implies \paren {q \land r}$


Proof
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


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $3$ Conjunction and Disjunction: Exercise $1 \ \text{(c)}$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercises $1.4: \ 2 \ \text{(k)}$





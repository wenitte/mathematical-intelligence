# 

Source: https://proofwiki.org/wiki/Factor_Principles/Conjunction_on_Right/Formulation_1



Theorem
$p \implies q \vdash \paren {p \land r} \implies \paren {q \land r}$


Proof 1
By the tableau method of natural deduction:


$p \implies q \vdash \paren {p \land r} \implies \paren {q \land r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies q$

Premise

(None)




2




$r \implies r$

Law of Identity

(None)

This is a theorem so depends on nothing


3


1

$\paren {p \implies q} \land \paren {r \implies r}$

Rule of Conjunction: $\land \II$

1, 2




4


1

$\paren {p \land r} \implies \paren {q \land r}$

Sequent Introduction

3

Praeclarum Theorema
$\blacksquare$


Proof 2
By the tableau method of natural deduction:


$p \implies q \vdash \paren {p \land r} \implies \paren {q \land r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies q$

Premise

(None)




2


2

$p \land r$

Assumption

(None)




3


2

$p$

Rule of Simplification: $\land \EE_1$

2




4


1, 2

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


2

$r$

Rule of Simplification: $\land \EE_2$

2




6


1, 2

$q \land r$

Rule of Conjunction: $\land \II$

4, 5




7


1

$\paren {p \land r} \implies \paren {q \land r}$

Rule of Implication: $\implies \II$

2 – 6

Assumption 2 has been discharged
$\blacksquare$


Proof by Truth Table
Proof by Truth Table:
$\begin{array}{|ccc||ccccccccccc|}
\hline
p & q & r & (p & \implies & q) & \implies & ((p & \land & r) & \implies & (q & \land & r)) \\
\hline
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\T & \T & \F & \T & \T & \T & \T & \T & \F & \F & \T & \T & \F & \F \\
\T & \F & \T & \T & \F & \F & \T & \T & \T & \T & \F & \F & \F & \T \\
\T & \F & \F & \T & \F & \F & \T & \T & \F & \F & \T & \F & \F & \F \\
\F & \T & \T & \F & \T & \T & \T & \F & \F & \T & \T & \T & \T & \T \\
\F & \T & \F & \F & \T & \T & \T & \F & \F & \F & \T & \T & \F & \F \\
\F & \F & \T & \F & \T & \F & \T & \F & \F & \T & \T & \F & \F & \T \\
\F & \F & \F & \F & \T & \F & \T & \F & \F & \F & \T & \F & \F & \F \\
\hline
\end{array}$
$\blacksquare$






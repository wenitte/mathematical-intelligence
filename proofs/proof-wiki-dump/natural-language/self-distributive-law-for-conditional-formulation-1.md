# 

Source: https://proofwiki.org/wiki/Self-Distributive_Law_for_Conditional/Formulation_1



Theorem
The following is known as the Self-Distributive Law:

$p \implies \paren {q \implies r} \dashv \vdash \paren {p \implies q} \implies \paren {p \implies r}$

This can of course be expressed as two separate theorems:

Forward Implication
$p \implies \paren {q \implies r} \vdash \paren {p \implies q} \implies \paren {p \implies r}$
Reverse Implication
$\paren {p \implies q} \implies \paren {p \implies r} \vdash p \implies \paren {q \implies r}$


Proof 1
Proof of Forward Implication
By the tableau method of natural deduction:


$p \implies \paren {q \implies r} \vdash \paren {p \implies q} \implies \paren {p \implies r} $


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

$p \implies q$

Assumption

(None)




3


3

$p$

Assumption

(None)




4


1, 3

$q \implies r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


2, 3

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 3




6


1, 2, 3

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

4, 5




7


1, 2

$p \implies r$

Rule of Implication: $\implies \II$

3 – 6

Assumption 3 has been discharged


8


1

$\paren {p \implies q} \implies \paren {p \implies r}$

Rule of Implication: $\implies \II$

2 – 7

Assumption 2 has been discharged
$\blacksquare$


Proof of Reverse Implication
By the tableau method of natural deduction:


$\paren {p \implies q} \implies \paren {p \implies r} \vdash p \implies \paren {q \implies r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \implies \paren {p \implies r}$

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


3

$p \implies q$

Sequent Introduction

3

True Statement is implied by Every Statement


5


1, 3

$p \implies r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 4




6


1, 2, 3

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

5, 2




7


1, 2

$q \implies r$

Rule of Implication: $\implies \II$

3 – 6

Assumption 3 has been discharged


8


1

$p \implies \paren {q \implies r}$

Rule of Implication: $\implies \II$

2 – 7

Assumption 2 has been discharged

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition:
$p \implies \paren {q \implies r} \dashv \vdash \paren {p \implies q} \implies \paren {p \implies r}$
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccccc||ccccccc|} \hline
p & \implies & (q & \implies & r) & (p & \implies & q) & \implies & (p & \implies & r) \\
\hline
\F & \T & \F & \T & \F & \F & \T & \F & \T & \F & \T & \F \\
\F & \T & \F & \T & \T & \F & \T & \F & \T & \F & \T & \T \\
\F & \T & \T & \F & \F & \F & \T & \T & \T & \F & \T & \F \\
\F & \T & \T & \T & \T & \F & \T & \T & \T & \F & \T & \T \\
\T & \T & \F & \T & \F & \T & \F & \F & \T & \T & \F & \F \\
\T & \T & \F & \T & \T & \T & \F & \F & \T & \T & \T & \T \\
\T & \F & \T & \F & \F & \T & \T & \T & \F & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Also see
Conditional is not Right Self-Distributive where it is shown that while:
$\paren {p \implies q} \implies r \vdash \paren {p \implies r} \implies \paren {q \implies r}$
it is not the case that:

$\paren {p \implies r} \implies \paren {q \implies r} \not \vdash \paren {p \implies q} \implies r$





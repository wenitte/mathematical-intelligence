# 

Source: https://proofwiki.org/wiki/Praeclarum_Theorema/Formulation_1



Theorem
$\paren {p \implies q} \land \paren {r \implies s} \vdash \paren {p \land r} \implies \paren {q \land s}$


Proof 1
By the tableau method of natural deduction:


$\paren {p \implies q} \land \paren {r \implies s} \vdash \paren {p \land r} \implies \paren {q \land s} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \land \paren {r \implies s}$

Premise

(None)




2


1

$p \implies q$

Rule of Simplification: $\land \EE_1$

1




3


1

$r \implies s$

Rule of Simplification: $\land \EE_2$

1




4


4

$p \land r$

Assumption

(None)




5


4

$p$

Rule of Simplification: $\land \EE_1$

4




6


4

$r$

Rule of Simplification: $\land \EE_2$

4




7


1, 4

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 5




8


1, 4

$s$

Modus Ponendo Ponens: $\implies \mathcal E$

3, 6




9


1, 4

$q \land s$

Rule of Conjunction: $\land \II$

7, 8




10


1

$\paren {p \land r} \implies \paren {q \land s}$

Rule of Implication: $\implies \II$

4 – 9

Assumption 4 has been discharged

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen for all boolean interpretations by inspection, where the truth value under the main connective on the left hand side is $T$, that under the one on the right hand side is also $T$:

$\begin{array}{|ccccccc||ccccccc|} \hline
(p & \implies & q) & \land & (r & \implies & s) & (p & \land & r) & \implies & (q & \land & s) \\
\hline
\F & \T & \F & \T & \F & \T & \F & \F & \F & \F & \T & \F & \F & \F \\
\F & \T & \F & \T & \F & \T & \T & \F & \F & \F & \T & \F & \F & \T \\
\F & \T & \F & \F & \T & \F & \F & \F & \F & \T & \T & \F & \F & \F \\
\F & \T & \F & \T & \T & \T & \T & \F & \F & \T & \T & \F & \F & \T \\
\F & \T & \T & \T & \F & \T & \F & \F & \F & \F & \T & \T & \F & \F \\
\F & \T & \T & \T & \F & \T & \T & \F & \F & \F & \T & \T & \T & \T \\
\F & \T & \T & \F & \T & \F & \F & \F & \F & \T & \T & \T & \F & \F \\
\F & \T & \T & \T & \T & \T & \T & \F & \F & \T & \T & \T & \T & \T \\
\T & \F & \F & \F & \F & \T & \F & \T & \F & \F & \T & \F & \F & \F \\
\T & \F & \F & \F & \F & \T & \T & \T & \F & \F & \T & \F & \F & \T \\
\T & \F & \F & \F & \T & \F & \F & \T & \T & \T & \F & \F & \F & \F \\
\T & \F & \F & \F & \T & \T & \T & \T & \T & \T & \F & \F & \F & \T \\
\T & \T & \T & \T & \F & \T & \F & \T & \F & \F & \T & \T & \F & \F \\
\T & \T & \T & \T & \F & \T & \T & \T & \F & \F & \T & \T & \T & \T \\
\T & \T & \T & \F & \T & \F & \F & \T & \T & \T & \F & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
Hence the result.

Note that the two formulas are not equivalent, as the relevant columns do not match exactly.
$\blacksquare$


Proof 3
By the tableau method of natural deduction:


$\paren {p \implies q} \land \paren {r \implies s} \vdash \paren {p \land r} \implies \paren {q \land s} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \land \paren {r \implies s}$

Premise

(None)




2


1

$p \implies q$

Rule of Simplification: $\land \EE_1$

1




3


1

$r \implies s$

Rule of Simplification: $\land \EE_2$

1




4


1

$p \land r \implies q \land r$

Sequent Introduction

2

Factor Principles/Conjunction on Right/Formulation 1/Proof 2


5


1

$q \land r \implies q \land s$

Sequent Introduction

3

Factor Principles/Conjunction on Left/Formulation 1/Proof 2


6


1

$p \land r \implies q \land s$

Sequent Introduction

4, 5

Hypothetical Syllogism
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $3$ Conjunction and Disjunction: Exercise $1 \ \text{(g)}$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercises $1.4: \ 2 \ \text{(g)}$





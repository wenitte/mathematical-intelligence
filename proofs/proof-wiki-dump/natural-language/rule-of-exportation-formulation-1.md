# 

Source: https://proofwiki.org/wiki/Rule_of_Exportation/Formulation_1



Theorem
$\paren {p \land q} \implies r \dashv \vdash p \implies \paren {q \implies r}$

This can be expressed as two separate theorems:

Forward Implication
$\paren {p \land q} \implies r \vdash p \implies \paren {q \implies r}$
Reverse Implication
$p \implies \paren {q \implies r} \vdash \paren {p \land q} \implies r$


Proof 1
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


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccccc||ccccc|} \hline
(p & \land & q) & \implies & r & p & \implies & (q & \implies & r) \\
\hline
\F & \F & \F & \T & \F & \F & \T & \F & \T & \F \\
\F & \F & \F & \T & \T & \F & \T & \F & \T & \T \\
\F & \F & \T & \T & \F & \F & \T & \T & \F & \F \\
\F & \F & \T & \T & \T & \F & \T & \T & \T & \T \\
\T & \F & \F & \T & \F & \T & \T & \F & \T & \F \\
\T & \F & \F & \T & \T & \T & \T & \F & \T & \T \\
\T & \T & \T & \F & \F & \T & \F & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Theorem $30$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction





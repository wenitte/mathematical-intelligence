# 

Source: https://proofwiki.org/wiki/Constructive_Dilemma/Formulation_1



Theorem













\(\ds p \implies q\)

\(\)







\(\ds \)




















\(\ds r \implies s\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p \lor r \implies q \lor s\)

\(\)







\(\ds \)











Proof 1
By the tableau method of natural deduction:


$p \implies q, r \implies s \vdash p \lor r \implies q \lor s$


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

$r \implies s$

Premise

(None)




3


3

$p \lor r$

Assumption

(None)




4


4

$p$

Assumption

(None)




5


1, 4

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 4




6


1, 4

$q \lor s$

Rule of Addition: $\lor \II_1$

5




7


7

$r$

Assumption

(None)




8


2, 7

$s$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 7




9


2, 7

$q \lor s$

Rule of Addition: $\lor \II_2$

8




10


1, 2, 3

$q \lor s$

Proof by Cases: $\text{PBC}$

3, 4 – 6, 7 – 9

Assumptions 4 and 7 have been discharged


11


1, 2

$p \lor r \implies q \lor s$

Rule of Implication: $\implies \II$

3 – 10

Assumption 3 has been discharged

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen for all boolean interpretations by inspection, where the truth value under the main connective on the left hand side is $\T$, that under the one on the right hand side is also $\T$:

$\begin{array}{|ccccccc||ccccccc|} \hline
(p & \implies & q) & \land & (r & \implies & s) & (p & \lor & r) & \implies & (q & \lor & s) \\
\hline
\F & \T & \F & \T & \F & \T & \F & \F & \F & \F & \T & \F & \F & \F \\
\F & \T & \F & \T & \F & \T & \T & \F & \F & \F & \T & \F & \T & \T \\
\F & \T & \F & \F & \T & \F & \F & \F & \T & \T & \F & \F & \F & \F \\
\F & \T & \F & \T & \T & \T & \T & \F & \T & \T & \T & \F & \T & \T \\
\F & \T & \T & \T & \F & \T & \F & \F & \F & \F & \T & \T & \T & \F \\
\F & \T & \T & \T & \F & \T & \T & \F & \F & \F & \T & \T & \T & \T \\
\F & \T & \T & \F & \T & \F & \F & \F & \T & \T & \T & \T & \T & \F \\
\F & \T & \T & \T & \T & \T & \T & \F & \T & \T & \T & \T & \T & \T \\
\T & \F & \F & \F & \F & \T & \F & \T & \T & \F & \F & \F & \F & \F \\
\T & \F & \F & \F & \F & \T & \T & \T & \T & \F & \T & \F & \T & \T \\
\T & \F & \F & \F & \T & \F & \F & \T & \T & \T & \F & \F & \F & \F \\
\T & \F & \F & \F & \T & \T & \T & \T & \T & \T & \T & \F & \T & \T \\
\T & \T & \T & \T & \F & \T & \F & \T & \T & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \F & \T & \T & \T & \T & \F & \T & \T & \T & \T \\
\T & \T & \T & \F & \T & \F & \F & \T & \T & \T & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
Hence the result.

Note that the two formulas are not equivalent, as the relevant columns do not match exactly.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $3$ Conjunction and Disjunction: Exercise $1 \ \text{(h)}$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercises $1.4: \ 2 \ \text{(d)}$





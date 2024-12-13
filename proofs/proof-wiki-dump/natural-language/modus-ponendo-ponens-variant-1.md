# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Ponens/Variant_1



Theorem
$p \vdash \paren {p \implies q} \implies q$


Proof 1
By the tableau method of natural deduction:


$p \vdash \paren {p \implies q} \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Premise

(None)




2


2

$p \implies q$

Assumption

(None)




3


1, 2

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 1




4


1

$\paren {p \implies q} \implies q$

Rule of Implication: $\implies \II$

2 – 3

Assumption 2 has been discharged

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
$\begin{array}{|c|ccccc|} \hline
p & (p & \implies & q) & \implies & q\\
\hline
\F & \F & \T & \F & \F & \F \\
\F & \F & \T & \T & \T & \T \\
\T & \T & \F & \F & \T & \F \\
\T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
As can be seen by inspection, when $p$ is true, the value of the main connective is also true.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $2$ Conditionals and Negation: Exercise $1 \ \text{(m)}$





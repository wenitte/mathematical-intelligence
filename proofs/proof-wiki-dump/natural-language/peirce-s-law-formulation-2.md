# 

Source: https://proofwiki.org/wiki/Peirce%27s_Law/Formulation_2



Theorem
$\vdash \paren {\paren {p \implies q} \implies p} \implies p$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {\paren {p \implies q} \implies p} \implies p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \implies p$

Assumption

(None)




2


1

$p$

Sequent Introduction

1

Peirce's Law: Formulation 1: $\paren {p \implies q} \implies p \vdash p$


3




$\paren {\paren {p \implies q} \implies p} \implies p$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connective are $\T$ for all boolean interpretations.
$\begin{array}{|ccccc|c|c|}\hline
((p & \implies & q) & \implies & p) & \implies & p \\
\hline
\F & \T & \F & \F & \F & \T & \F \\
\F & \T & \T & \F & \F & \T & \F \\
\T & \F & \F & \T & \T & \T & \T \\
\T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Source of Name
This entry was named for Charles Sanders Peirce.


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $2$: Theorems and Derived Rules: Exercise $5 \ \text{(c)}$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{I}$: 'NOT' and 'IF': $\S 3$: Exercises, Group $\text{I}: \ 14$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{I}$: 'NOT' and 'IF': $\S 5$: Theorem $\text{T23}$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.14$: Exercise $12 \ (11)$





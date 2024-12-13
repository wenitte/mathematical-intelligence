# 

Source: https://proofwiki.org/wiki/Self-Distributive_Law_for_Conditional/Forward_Implication/Formulation_2



Theorem
$\paren {p \implies \paren {q \implies r} } \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} }$


Proof 1
By the tableau method of natural deduction:


$\paren {p \implies \paren {q \implies r} } \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \paren {q \implies r}$

Assumption

(None)




2


1

$\paren {p \implies q} \implies \paren {p \implies r}$

Sequent Introduction

1

Self-Distributive Law for Conditional: Formulation 1


3




$\paren {p \implies \paren {q \implies r} } \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth value under the main connective is true for all boolean interpretations.
$\begin{array}{|ccccc|c|ccccccc|}
\hline
(p & \implies & (q & \implies & r)) & \implies & ((p & \implies & q) & \implies & (p & \implies & r)) \\
\hline
\F & \T & \F & \T & \F & \T & \F & \T & \F & \T & \F & \T & \F \\
\F & \T & \F & \T & \T & \T & \F & \T & \F & \T & \F & \T & \T \\
\F & \T & \T & \F & \F & \T & \F & \T & \T & \T & \F & \T & \F \\
\F & \T & \T & \T & \T & \T & \F & \T & \T & \T & \F & \T & \T \\
\T & \T & \F & \T & \F & \T & \T & \F & \F & \T & \T & \F & \F \\
\T & \T & \F & \T & \T & \T & \T & \F & \F & \T & \T & \T & \T \\
\T & \F & \T & \F & \F & \T & \T & \T & \T & \F & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $2$: Theorems and Derived Rules: Theorem $43$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic: Exercise $(2) \ \text{(ii)}$





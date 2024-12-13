# 

Source: https://proofwiki.org/wiki/Proof_by_Cases/Formulation_2/Forward_Implication



Theorem
$\vdash \paren {\paren {p \implies r} \land \paren {q \implies r} } \implies \paren {\paren {p \lor q} \implies r}$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {\paren {p \implies r} \land \paren {q \implies r} } \implies \paren {\paren {p \lor q} \implies r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies r} \land \paren {q \implies r}$

Assumption

(None)




2


1

$\paren {p \lor q} \implies r$

Sequent Introduction

1

Proof by Cases: Formulation 1: Forward Implication


3




$\paren {\paren {p \implies r} \land \paren {q \implies r} } \implies \paren {\paren {p \lor q} \implies r}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.
$\begin{array}{|ccccccc|c|ccccc|} \hline
((p & \implies & r) & \land & (q & \implies & r)) & \implies & ((p & \lor & q) & \implies & r) \\
\hline
\F & \T & \F & \T & \F & \T & \F & \T & \F & \F & \F & \T & \F \\
\F & \T & \T & \T & \F & \T & \T & \T & \F & \F & \F & \T & \T \\
\F & \T & \F & \F & \T & \F & \F & \T & \F & \T & \T & \F & \F \\
\F & \T & \T & \T & \T & \T & \T & \T & \F & \T & \T & \T & \T \\
\T & \F & \F & \F & \F & \T & \F & \T & \T & \T & \F & \F & \F \\
\T & \T & \T & \T & \F & \T & \T & \T & \T & \T & \F & \T & \T \\
\T & \F & \F & \F & \T & \F & \F & \T & \T & \T & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}$: Exercise $12 \ \text{(c)}$





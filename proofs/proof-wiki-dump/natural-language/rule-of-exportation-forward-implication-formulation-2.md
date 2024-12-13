# 

Source: https://proofwiki.org/wiki/Rule_of_Exportation/Forward_Implication/Formulation_2

Theorem
$\vdash \left({\left ({p \land q}\right) \implies r}\right) \implies \left({p \implies \left ({q \implies r}\right)}\right)$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {\paren {p \land q} \implies r} \implies \paren {p \implies \paren {q \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \land q} \implies r$

Assumption

(None)




2


1

$p \implies \paren {q \implies r}$

Sequent Introduction

1

Rule of Exportation: Forward Implication: Formulation 1


3




$\paren {\paren {p \land q} \implies r} \implies \paren {p \implies \paren {q \implies r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$


Proof 2
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.
$\begin{array}{|ccccc|c|ccccc|} \hline
((p & \land & q) & \implies & r) & \implies & (p & \implies & (q & \implies & r)) \\
\hline
F & F & F & T & F & T & F & T & F & T & F \\
F & F & F & T & T & T & F & T & F & T & T \\
F & F & T & T & F & T & F & T & T & F & F \\
F & F & T & T & T & T & F & T & T & T & T \\
T & F & F & T & F & T & T & T & F & T & F \\
T & F & F & T & T & T & T & T & F & T & T \\
T & T & T & F & F & T & T & F & T & F & F \\
T & T & T & T & T & T & T & T & T & T & T \\
\hline
\end{array}$
$\blacksquare$






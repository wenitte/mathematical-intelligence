# 

Source: https://proofwiki.org/wiki/Conjunction_implies_Disjunction

Theorem
$\vdash \paren {p \land q} \implies \paren {p \lor q}$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective is true for all boolean interpretations.

$\begin{array}{|ccc|c|ccc|} \hline
(p & \land & q) & \implies & (p & \lor & q) \\
\hline
\F & \F & \F & \T & \F & \F & \F \\
\F & \F & \T & \T & \F & \T & \T \\
\T & \F & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Proof 2
By the tableau method of natural deduction:


$\paren {p \land q} \implies \paren {p \lor q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land q$

Assumption

(None)




2


1

$p$

Rule of Simplification: $\land \EE_1$

1




3


1

$p \lor q$

Rule of Addition: $\lor \II_1$

2




4




$\paren {p \land q} \implies \paren {p \lor q}$

Rule of Implication: $\implies \II$

1 – 3

Assumption 1 has been discharged

$\blacksquare$






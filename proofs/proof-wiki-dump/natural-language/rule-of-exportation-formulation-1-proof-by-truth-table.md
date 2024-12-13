# 

Source: https://proofwiki.org/wiki/Rule_of_Exportation/Formulation_1/Proof_by_Truth_Table

Theorem
$\paren {p \land q} \implies r \dashv \vdash p \implies \paren {q \implies r}$


Proof
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






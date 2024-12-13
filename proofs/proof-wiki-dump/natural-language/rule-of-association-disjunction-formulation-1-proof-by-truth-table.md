# 

Source: https://proofwiki.org/wiki/Rule_of_Association/Disjunction/Formulation_1/Proof_by_Truth_Table

Theorem
$p \lor \paren {q \lor r} \dashv \vdash \paren {p \lor q} \lor r$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccccc||ccccc|} \hline
p & \lor & (q & \lor & r) & (p & \lor & q) & \lor & r \\
\hline
\F & \F & \F & \F & \F & \F & \F & \F & \F & \F \\
\F & \T & \F & \T & \T & \F & \F & \F & \T & \T \\
\F & \T & \T & \T & \F & \F & \T & \T & \T & \F \\
\F & \T & \T & \T & \T & \F & \T & \T & \T & \T \\
\T & \T & \F & \F & \F & \T & \T & \F & \T & \F \\
\T & \T & \F & \T & \T & \T & \T & \F & \T & \T \\
\T & \T & \T & \T & \F & \T & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$






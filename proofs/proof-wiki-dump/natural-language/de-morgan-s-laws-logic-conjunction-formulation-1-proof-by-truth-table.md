# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Conjunction/Formulation_1/Proof_by_Truth_Table

Theorem
$p \land q \dashv \vdash \neg \paren {\neg p \lor \neg q}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc||cccccc|} \hline
p & \land & q & \neg & (\neg & p & \lor & \neg & q)  \\
\hline
\F & \F & \F & \F & \T & \F & \T & \T & \F \\
\F & \F & \T & \F & \T & \F & \T & \F & \T \\
\T & \F & \F & \F & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \F & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$






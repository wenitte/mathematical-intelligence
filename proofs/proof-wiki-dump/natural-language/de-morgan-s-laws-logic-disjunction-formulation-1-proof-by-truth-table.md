# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Disjunction/Formulation_1/Proof_by_Truth_Table

Theorem
$p \lor q \dashv \vdash \neg \paren {\neg p \land \neg q}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc||cccccc|} \hline
p & \lor & q & \neg & (\neg & p & \land & \neg & q) \\
\hline
\F & \F & \F & \F & \T & \F & \T & \T & \F \\
\F & \T & \T & \T & \T & \F & \F & \F & \T \\
\T & \T & \F & \T & \F & \T & \F & \T & \F \\
\T & \T & \T & \T & \F & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$






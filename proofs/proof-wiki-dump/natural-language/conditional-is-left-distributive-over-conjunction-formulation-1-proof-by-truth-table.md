# 

Source: https://proofwiki.org/wiki/Conditional_is_Left_Distributive_over_Conjunction/Formulation_1/Proof_by_Truth_Table

Theorem
$p \implies \paren {q \land r} \dashv \vdash \paren {p \implies q} \land \paren {p \implies r}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccccc||ccccccc|} \hline
p & \implies & (q & \land & r) & (p & \implies & q) & \land & (p & \implies & r) \\
\hline
\F & \T & \F & \F & \F & \F & \T & \F & \T & \F & \T & \F \\
\F & \T & \F & \F & \T & \F & \T & \F & \T & \F & \T & \T \\
\F & \T & \T & \F & \F & \F & \T & \T & \T & \F & \T & \F \\
\F & \T & \T & \T & \T & \F & \T & \T & \T & \F & \T & \T \\
\T & \F & \F & \F & \F & \T & \F & \F & \F & \T & \F & \F \\
\T & \F & \F & \F & \T & \T & \F & \F & \F & \T & \T & \T \\
\T & \F & \T & \F & \F & \T & \T & \T & \F & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$






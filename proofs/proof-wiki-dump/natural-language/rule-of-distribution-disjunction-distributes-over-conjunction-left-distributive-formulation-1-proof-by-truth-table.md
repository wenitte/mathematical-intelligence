# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Disjunction_Distributes_over_Conjunction/Left_Distributive/Formulation_1/Proof_by_Truth_Table

Theorem
$p \lor \paren {q \land r} \dashv \vdash \paren {p \lor q} \land \paren {p \lor r}$


Proof
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccccc||ccccccc|} \hline
p & \lor & (q & \land & r) & (p & \lor & q) & \land & (p & \lor & r) \\
\hline
\F & \F & \F & \F & \F & \F & \F & \F & \F & \F & \F & \F \\
\F & \F & \F & \F & \T & \F & \F & \F & \F & \F & \T & \T \\
\F & \F & \T & \F & \F & \F & \T & \T & \F & \F & \F & \F \\
\F & \T & \T & \T & \T & \F & \T & \T & \T & \F & \T & \T \\
\T & \T & \F & \F & \F & \T & \T & \F & \T & \T & \T & \F \\
\T & \T & \F & \F & \T & \T & \T & \F & \T & \T & \T & \T \\
\T & \T & \T & \F & \F & \T & \T & \T & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$






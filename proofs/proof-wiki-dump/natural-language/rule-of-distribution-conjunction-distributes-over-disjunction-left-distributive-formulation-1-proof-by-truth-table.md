# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Conjunction_Distributes_over_Disjunction/Left_Distributive/Formulation_1/Proof_by_Truth_Table

Theorem
$p \land \paren {q \lor r} \dashv \vdash \paren {p \land q} \lor \paren {p \land r}$


Proof
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccccc||ccccccc|} \hline
p & \land & (q & \lor & r) & (p & \land & q) & \lor & (p & \land & r) \\
\hline
\F & \F & \F & \F & \F & \F & \F & \F & \F & \F & \F & \F \\
\F & \F & \F & \T & \T & \F & \F & \F & \F & \F & \F & \T \\
\F & \F & \T & \T & \F & \F & \F & \T & \F & \F & \F & \F \\
\F & \F & \T & \T & \T & \F & \F & \T & \F & \F & \F & \T \\
\T & \F & \F & \F & \F & \T & \F & \F & \F & \T & \F & \F \\
\T & \T & \F & \T & \T & \T & \F & \F & \T & \T & \T & \T \\
\T & \T & \T & \T & \F & \T & \T & \T & \T & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$






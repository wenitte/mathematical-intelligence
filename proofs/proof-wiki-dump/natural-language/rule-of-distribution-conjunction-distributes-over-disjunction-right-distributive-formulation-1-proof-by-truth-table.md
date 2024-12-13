# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Conjunction_Distributes_over_Disjunction/Right_Distributive/Formulation_1/Proof_by_Truth_Table

Theorem
$\paren {q \lor r} \land p \dashv \vdash \paren {q \land p} \lor \paren {r \land p}$


Proof
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccccc||ccccccc|} \hline
(q & \lor & r) & \land & p & (q & \land & p) & \lor & (r & \land & p) \\
\hline
\F & \F & \F & \F & \F & \F & \F & \F & \F & \F & \F & \F \\
\F & \F & \F & \F & \T & \F & \F & \T & \F & \F & \F & \T \\
\F & \T & \T & \F & \F & \F & \F & \F & \F & \T & \F & \F \\
\F & \T & \T & \T & \T & \F & \F & \T & \T & \T & \T & \T \\
\T & \T & \F & \F & \F & \T & \F & \F & \F & \F & \F & \F \\
\T & \T & \F & \T & \T & \T & \T & \T & \T & \F & \F & \T \\
\T & \T & \T & \F & \F & \T & \F & \F & \F & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$






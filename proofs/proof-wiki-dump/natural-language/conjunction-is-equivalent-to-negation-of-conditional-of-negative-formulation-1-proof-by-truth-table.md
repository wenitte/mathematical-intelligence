# 

Source: https://proofwiki.org/wiki/Conjunction_is_Equivalent_to_Negation_of_Conditional_of_Negative/Formulation_1/Proof_by_Truth_Table

Theorem
$p \land q \dashv \vdash \neg \paren {p \implies \neg q}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc||ccccc|} \hline
p & \land & q & \neg & (p & \implies & \neg & q) \\
\hline
\F & \F & \F & \F & \F & \T & \T & \F \\
\F & \F & \T & \F & \F & \T & \F & \T \\
\T & \F & \F & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$






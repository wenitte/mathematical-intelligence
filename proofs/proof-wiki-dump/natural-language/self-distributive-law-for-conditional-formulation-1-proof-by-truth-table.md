# 

Source: https://proofwiki.org/wiki/Self-Distributive_Law_for_Conditional/Formulation_1/Proof_by_Truth_Table

Theorem
$p \implies \paren {q \implies r} \dashv \vdash \paren {p \implies q} \implies \paren {p \implies r}$


Proof
We apply the Method of Truth Tables to the proposition:
$p \implies \paren {q \implies r} \dashv \vdash \paren {p \implies q} \implies \paren {p \implies r}$
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccccc||ccccccc|} \hline
p & \implies & (q & \implies & r) & (p & \implies & q) & \implies & (p & \implies & r) \\
\hline
\F & \T & \F & \T & \F & \F & \T & \F & \T & \F & \T & \F \\
\F & \T & \F & \T & \T & \F & \T & \F & \T & \F & \T & \T \\
\F & \T & \T & \F & \F & \F & \T & \T & \T & \F & \T & \F \\
\F & \T & \T & \T & \T & \F & \T & \T & \T & \F & \T & \T \\
\T & \T & \F & \T & \F & \T & \F & \F & \T & \T & \F & \F \\
\T & \T & \F & \T & \T & \T & \F & \F & \T & \T & \T & \T \\
\T & \F & \T & \F & \F & \T & \T & \T & \F & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Factor_Principles/Conjunction_on_Right/Formulation_1/Proof_by_Truth_Table

Theorem
$p \implies q \vdash \paren {p \land r} \implies \paren {q \land r}$


Proof
Proof by Truth Table:
$\begin{array}{|ccc||ccccccccccc|}
\hline
p & q & r & (p & \implies & q) & \implies & ((p & \land & r) & \implies & (q & \land & r)) \\
\hline
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\T & \T & \F & \T & \T & \T & \T & \T & \F & \F & \T & \T & \F & \F \\
\T & \F & \T & \T & \F & \F & \T & \T & \T & \T & \F & \F & \F & \T \\
\T & \F & \F & \T & \F & \F & \T & \T & \F & \F & \T & \F & \F & \F \\
\F & \T & \T & \F & \T & \T & \T & \F & \F & \T & \T & \T & \T & \T \\
\F & \T & \F & \F & \T & \T & \T & \F & \F & \F & \T & \T & \F & \F \\
\F & \F & \T & \F & \T & \F & \T & \F & \F & \T & \T & \F & \F & \T \\
\F & \F & \F & \F & \T & \F & \T & \F & \F & \F & \T & \F & \F & \F \\
\hline
\end{array}$
$\blacksquare$






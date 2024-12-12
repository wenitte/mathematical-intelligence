# 

Source: https://proofwiki.org/wiki/Conditional_iff_Biconditional_of_Consequent_with_Disjunction

Theorem
$p \implies q \dashv \vdash q \iff \paren {p \lor q}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the appropriate truth values match for all boolean interpretations.
$\begin{array}{|ccc||ccccc|} \hline
p & \implies & q & q & \iff & (p & \lor & q) \\
\hline
\F & \T & \F & \F & \T & \F & \F & \F \\
\F & \T & \T & \T & \T & \F & \T & \T \\
\T & \F & \F & \F & \F & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.10$: Exercise $2.6$





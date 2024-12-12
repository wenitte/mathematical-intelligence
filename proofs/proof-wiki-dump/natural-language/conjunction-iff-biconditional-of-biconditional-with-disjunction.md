# 

Source: https://proofwiki.org/wiki/Conjunction_iff_Biconditional_of_Biconditional_with_Disjunction

Theorem
$p \land q \dashv \vdash \paren {p \iff q} \iff \paren {p \lor q}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the appropriate truth values match for all boolean interpretations.
$\begin{array}{|ccc||ccccccc|} \hline
p & \land & q & (p & \iff & q) & \iff & (p & \lor & q) \\
\hline
\F & \F & \F & \F & \T & \F & \F & \F & \F & \F \\
\F & \F & \T & \F & \F & \T & \F & \F & \T & \T \\
\T & \F & \F & \T & \F & \F & \F & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.10$: Exercise $2.6$





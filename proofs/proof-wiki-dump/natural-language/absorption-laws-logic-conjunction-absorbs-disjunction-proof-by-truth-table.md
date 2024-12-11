# 

Source: https://proofwiki.org/wiki/Absorption_Laws_(Logic)/Conjunction_Absorbs_Disjunction/Proof_by_Truth_Table

Theorem
$p \land \paren {p \lor q} \dashv \vdash p$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the appropriate truth values match for all boolean interpretations.
$\begin{array}{|ccccc||c|} \hline
p & \land & (p & \lor & q) & p \\
\hline
\F & \F & \F & \F & \F & \F \\
\F & \F & \F & \T & \T & \F \\
\T & \T & \T & \T & \F & \T \\
\T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$






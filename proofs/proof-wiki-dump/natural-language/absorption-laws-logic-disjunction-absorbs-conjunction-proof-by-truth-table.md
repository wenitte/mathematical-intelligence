# 

Source: https://proofwiki.org/wiki/Absorption_Laws_(Logic)/Disjunction_Absorbs_Conjunction/Proof_by_Truth_Table

Theorem
$p \lor \paren {p \land q} \dashv \vdash p$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the appropriate truth values match for all boolean interpretations.
$\begin{array}{|ccccc||c|} \hline
p & \lor & (p & \land & q) & p \\
\hline
\F & \F & \F & \F & \F & \F \\
\F & \F & \F & \F & \T & \F \\
\T & \T & \T & \F & \F & \T \\
\T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Conjunction_implies_Disjunction/Proof_by_Truth_Table

Theorem
$\vdash \paren {p \land q} \implies \paren {p \lor q}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective is true for all boolean interpretations.

$\begin{array}{|ccc|c|ccc|} \hline
(p & \land & q) & \implies & (p & \lor & q) \\
\hline
\F & \F & \F & \T & \F & \F & \F \\
\F & \F & \T & \T & \F & \T & \T \\
\T & \F & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S1.2$: Some Remarks on the Use of the Connectives and, or, implies: Exercise $3$





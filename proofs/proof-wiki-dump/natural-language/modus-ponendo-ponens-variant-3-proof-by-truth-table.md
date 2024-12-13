# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Ponens/Variant_3/Proof_by_Truth_Table

Theorem
$\vdash \paren {\paren {p \implies q} \land p} \implies q$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.
$\begin{array}{|ccccc|c|c|} \hline
((p & \implies & q) & \land & p) & \implies & q \\
\hline
\F & \T & \F & \F & \F & \T & \F \\
\F & \T & \T & \F & \F & \T & \T \\
\T & \F & \F & \F & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{I}: 10$: Testing the Validity of Arguments
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic





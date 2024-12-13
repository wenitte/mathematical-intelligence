# 

Source: https://proofwiki.org/wiki/Modus_Tollendo_Ponens/Variant/Formulation_2/Proof_by_Truth_Table

Theorem
$\vdash \paren {p \lor q} \iff \paren {\neg p \implies q}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.
$\begin{array}{|ccc|c|cccc|} \hline
p & \lor & q & \iff & \neg & p & \implies & q \\
\hline
\F & \F & \F & \T & \T & \F & \F & \F \\
\F & \T & \T & \T & \T & \F & \T & \T \\
\T & \T & \F & \T & \F & \T & \T & \F \\
\T & \T & \T & \T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{I}: 13$: Logical Equivalences: Exercise $\text{(A)} \ 5$





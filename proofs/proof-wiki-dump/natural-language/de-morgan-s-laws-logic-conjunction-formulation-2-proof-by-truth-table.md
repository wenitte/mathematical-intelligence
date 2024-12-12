# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Conjunction/Formulation_2/Proof_by_Truth_Table

Theorem
$\vdash \paren {p \land q} \iff \paren {\neg \paren {\neg p \lor \neg q} }$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.
$\begin{array}{|ccc|c|cccccc|} \hline
(p & \land & q) & \iff & (\neg & (\neg & p & \lor & \neg & q))  \\
\hline
\F & \F & \F & \T & \F & \T & \F & \T & \T & \F \\
\F & \F & \T & \T & \F & \T & \F & \T & \F & \T \\
\T & \F & \F & \T & \F & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \F & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{I}: 13$: Logical Equivalences: Exercise $\text{(A)} \ 3$





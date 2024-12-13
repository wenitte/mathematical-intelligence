# 

Source: https://proofwiki.org/wiki/Rule_of_Material_Equivalence/Formulation_2/Proof_by_Truth_Table

Theorem
$\vdash \paren {p \iff q} \iff \paren {\paren {p \implies q} \land \paren {q \implies p} }$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.
$\begin{array}{|ccc|c|ccccccc|} \hline
(p & \iff & q) & \iff & (p & \implies & q) & \land & (q & \implies & p) \\
\hline
\F & \T & \F & \T & \F & \T & \F & \T & \F & \T & \F \\
\F & \F & \T & \T & \F & \T & \T & \F & \T & \F & \F \\
\T & \F & \F & \T & \T & \F & \F & \F & \F & \T & \T \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{I}: 13$: Logical Equivalences





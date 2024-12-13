# 

Source: https://proofwiki.org/wiki/Rule_of_Material_Implication/Formulation_2/Proof_by_Truth_Table

Theorem
$\vdash \paren {p \implies q} \iff \paren {\neg p \lor q}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.
$\begin{array}{|ccc|c|cccc|} \hline
(p & \implies & q) & \iff & (\neg & p & \lor & q) \\
\hline
\F & \T & \F & \T & \T & \F & \T & \F \\
\F & \T & \T & \T & \T & \F & \T & \T \\
\T & \F & \F & \F & \T & \T & \F & \F \\
\T & \T & \T & \F & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}$: Exercise $13$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{I}: 13$: Logical Equivalences





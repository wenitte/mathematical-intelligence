# 

Source: https://proofwiki.org/wiki/Rule_of_Material_Equivalence/Formulation_1/Proof_by_Truth_Table

Theorem
$p \iff q \dashv \vdash \paren {p \implies q} \land \paren {q \implies p}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc|ccccccc|} \hline
p & \iff & q & (p & \implies & q) & \land & (q & \implies & p) \\
\hline
\F & \T & \F & \F & \T & \F & \T & \F & \T & \F \\
\F & \F & \T & \F & \T & \T & \F & \T & \F & \F \\
\T & \F & \F & \T & \F & \F & \F & \F & \T & \T \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 2.5$: Further Logical Constants
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S1.2$: Some Remarks on the Use of the Connectives and, or, implies
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{I}: 12$: Material Equivalence and Alternation





# 

Source: https://proofwiki.org/wiki/Conditional_is_Equivalent_to_Negation_of_Conjunction_with_Negative/Formulation_2/Proof_by_Truth_Table

Theorem
$\vdash \paren {p \implies q} \iff \paren {\neg \paren {p \land \neg q} }$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective is true for all boolean interpretations.
$\begin{array}{|ccc|c|ccccc|} \hline
(p & \implies & q) & \iff & (\neg & (p & \land & \neg & q)) \\
\hline
\F & \T & \F & \T & \T & \F & \F & \T & \F \\
\F & \T & \T & \T & \T & \F & \F & \F & \T \\
\T & \F & \F & \T & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 6$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{I}: 13$: Logical Equivalences: Exercise $\text{(A)} \ 1$





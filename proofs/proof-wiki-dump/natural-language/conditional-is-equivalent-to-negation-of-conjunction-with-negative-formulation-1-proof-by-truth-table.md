# 

Source: https://proofwiki.org/wiki/Conditional_is_Equivalent_to_Negation_of_Conjunction_with_Negative/Formulation_1/Proof_by_Truth_Table

Theorem
$p \implies q \dashv \vdash \neg \paren {p \land \neg q}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc||ccccc|} \hline
p & \implies & q & \neg & (p & \land & \neg & q) \\
\hline
\F & \T & \F & \T & \F & \F & \T & \F \\
\F & \T & \T & \T & \F & \F & \F & \T \\
\T & \F & \F & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 2.4$: Relations between Truth-Functions
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $3$ Truth-Tables
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.2$: Conditional Statements





# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Disjunction_Distributes_over_Conjunction/Left_Distributive/Formulation_2/Proof_by_Truth_Table

Theorem
$\vdash \paren {p \lor \paren {q \land r} } \iff \paren {\paren {p \lor q} \land \paren {p \lor r} }$


Proof
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connective is true for all boolean interpretations.
$\begin{array}{|ccccc|c|ccccccc|} \hline
p & \lor & (q & \land & r) & \iff & (p & \lor & q) & \land & (p & \lor & r) \\
\hline
\F & \F & \F & \F & \F & \T & \F & \F & \F & \F & \F & \F & \F \\
\F & \F & \F & \F & \T & \T & \F & \F & \F & \F & \F & \T & \T \\
\F & \F & \T & \F & \F & \T & \F & \T & \T & \F & \F & \F & \F \\
\F & \T & \T & \T & \T & \T & \F & \T & \T & \T & \F & \T & \T \\
\T & \T & \F & \F & \F & \T & \T & \T & \F & \T & \T & \T & \F \\
\T & \T & \F & \F & \T & \T & \T & \T & \F & \T & \T & \T & \T \\
\T & \T & \T & \F & \F & \T & \T & \T & \T & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}$: Exercise $14 \ \text{(c)}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.4$: Statement Forms: Exercise $\text{II}. \ 7$





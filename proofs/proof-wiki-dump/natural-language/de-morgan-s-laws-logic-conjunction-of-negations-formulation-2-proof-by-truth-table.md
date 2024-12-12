# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Conjunction_of_Negations/Formulation_2/Proof_by_Truth_Table

Theorem
$\vdash \paren {\neg p \land \neg q} \iff \paren {\neg \paren {p \lor q} }$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective is true for all boolean interpretations.
$\begin{array}{|ccccc|c|cccc|} \hline
\neg & p & \land & \neg & q & \iff & \neg & (p & \lor & q) \\
\hline
\T & \F & \T & \T & \F & \T & \T & \F & \F & \F \\
\T & \F & \F & \F & \T & \T & \F & \F & \T & \T \\
\F & \T & \F & \T & \F & \T & \F & \T & \T & \F \\
\F & \T & \F & \F & \T & \T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}$: Exercise $14 \ \text{(b)}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.4$: Statement Forms





# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Disjunction_of_Negations/Formulation_2/Proof_by_Truth_Table

Theorem
$\vdash \paren {\neg p \lor \neg q} \iff \paren {\neg \paren {p \land q} }$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective is true for all boolean interpretations.
$\begin{array}{|ccccc|c|cccc|} \hline
\neg & p & \lor & \neg & q & \iff & \neg & (p & \land & q) \\
\hline
\T & \F & \T & \T & \F & \T & \T & \F & \F & \F \\
\T & \F & \T & \F & \T & \T & \T & \F & \F & \T \\
\F & \T & \T & \T & \F & \T & \T & \T & \F & \F \\
\F & \T & \F & \F & \T & \T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}$: Exercise $14 \ \text{(b)}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.4$: Statement Forms
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{I}: 13$: Logical Equivalences: Exercise $\text{(A)} \ 9$





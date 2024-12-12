# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Disjunction/Formulation_1



Theorem
$p \lor q \dashv \vdash \neg \paren {\neg p \land \neg q}$

This can be expressed as two separate theorems:

Forward Implication
$p \lor q \vdash \neg \paren {\neg p \land \neg q}$
Reverse Implication
$\neg \paren {\neg p \land \neg q} \vdash p \lor q$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc||cccccc|} \hline
p & \lor & q & \neg & (\neg & p & \land & \neg & q) \\
\hline
\F & \F & \F & \F & \T & \F & \T & \T & \F \\
\F & \T & \T & \T & \T & \F & \F & \F & \T \\
\T & \T & \F & \T & \F & \T & \F & \T & \F \\
\T & \T & \T & \T & \F & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 2.4$: Relations between Truth-Functions
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Theorem $36$
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.1$: What is a Set?
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.10$: Exercise $2.3$





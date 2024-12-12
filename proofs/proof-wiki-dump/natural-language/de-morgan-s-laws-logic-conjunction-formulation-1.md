# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Conjunction/Formulation_1



Theorem
$p \land q \dashv \vdash \neg \paren {\neg p \lor \neg q}$

This can be expressed as two separate theorems:

Forward Implication
$p \land q \vdash \neg \left({\neg p \lor \neg q}\right)$
Reverse Implication
$\neg \left({\neg p \lor \neg q}\right) \vdash p \land q$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc||cccccc|} \hline
p & \land & q & \neg & (\neg & p & \lor & \neg & q)  \\
\hline
\F & \F & \F & \F & \T & \F & \T & \T & \F \\
\F & \F & \T & \F & \T & \F & \T & \F & \T \\
\T & \F & \F & \F & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \F & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 2.4$: Relations between Truth-Functions
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Exercise $1 \ \text {(h)}$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.10$: Exercise $2.3$





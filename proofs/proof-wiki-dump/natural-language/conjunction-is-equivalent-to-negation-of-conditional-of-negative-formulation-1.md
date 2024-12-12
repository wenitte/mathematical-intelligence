# 

Source: https://proofwiki.org/wiki/Conjunction_is_Equivalent_to_Negation_of_Conditional_of_Negative/Formulation_1



Theorem
$p \land q \dashv \vdash \neg \paren {p \implies \neg q}$

This can be expressed as two separate theorems:

Forward Implication
$p \land q \vdash \neg \paren {p \implies \neg q}$
Reverse Implication
$\neg \paren {p \implies \neg q} \vdash p \land q$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc||ccccc|} \hline
p & \land & q & \neg & (p & \implies & \neg & q) \\
\hline
\F & \F & \F & \F & \F & \T & \T & \F \\
\F & \F & \T & \F & \F & \T & \F & \T \\
\T & \F & \F & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 2.4$: Relations between Truth-Functions
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Exercise $1 \ \text{(e)}$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$





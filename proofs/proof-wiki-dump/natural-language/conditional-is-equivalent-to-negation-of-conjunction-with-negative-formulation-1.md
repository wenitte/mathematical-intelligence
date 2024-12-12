# 

Source: https://proofwiki.org/wiki/Conditional_is_Equivalent_to_Negation_of_Conjunction_with_Negative/Formulation_1



Theorem
$p \implies q \dashv \vdash \neg \paren {p \land \neg q}$

This can be expressed as two separate theorems:

Forward Implication
$p \implies q \vdash \neg \paren {p \land \neg q}$
Reverse Implication
$\neg \paren {p \land \neg q} \vdash p \implies q$


Proof by Truth Table
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
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Theorems $35$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.4$: Statement Forms
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.10$: Exercise $2.3$





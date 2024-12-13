# 

Source: https://proofwiki.org/wiki/Modus_Tollendo_Ponens/Variant/Formulation_1



Theorem
$p \lor q \dashv \vdash \neg p \implies q$

This can be expressed as two separate theorems:

Forward Implication
$p \lor q \vdash \neg p \implies q$
Reverse Implication
$\neg p \implies q \vdash p \lor q$

Note that the latter proof requires Law of Excluded Middle.
Therefore it is not valid in intuitionistic logic.


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc||cccc|} \hline
p & \lor & q & \neg & p & \implies & q \\
\hline
\F & \F & \F & \T & \F & \F & \F \\
\F & \T & \T & \T & \F & \T & \T \\
\T & \T & \F & \F & \T & \T & \F \\
\T & \T & \T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 2.4$: Relations between Truth-Functions
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $2$: Theorems and Derived Rules: Exercise $5 \ \text{(f)}$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$





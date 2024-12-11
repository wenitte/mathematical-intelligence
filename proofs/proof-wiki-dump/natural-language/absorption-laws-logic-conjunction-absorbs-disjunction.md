# 

Source: https://proofwiki.org/wiki/Absorption_Laws_(Logic)/Conjunction_Absorbs_Disjunction



Theorem
$p \land \paren {p \lor q} \dashv \vdash p$

This can be expressed as two separate theorems:

Forward Implication
$p \land \paren {p \lor q} \vdash p$
Reverse Implication
$p \vdash p \land \paren {p \lor q}$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the appropriate truth values match for all boolean interpretations.
$\begin{array}{|ccccc||c|} \hline
p & \land & (p & \lor & q) & p \\
\hline
\F & \F & \F & \F & \F & \F \\
\F & \F & \F & \T & \T & \F \\
\T & \T & \T & \T & \F & \T \\
\T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Proof 2
By calculation:














\(\ds p \land \paren {p \lor q}\)

\(=\)







\(\ds \paren {p \lor \bot} \land \paren {p \lor q}\)





Disjunction with Contradiction














\(\ds \)

\(=\)







\(\ds p \lor \paren {\bot \land q}\)





Disjunction is Left Distributive over Conjunction














\(\ds \)

\(=\)







\(\ds p \lor \bot\)





Conjunction with Contradiction














\(\ds \)

\(=\)







\(\ds p\)





Disjunction with Contradiction



$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Theorem $31$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.10$: Exercise $2.5$





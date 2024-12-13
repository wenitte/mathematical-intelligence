# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Conjunction_Distributes_over_Disjunction/Left_Distributive/Formulation_1



Definition
The conjunction operator is left distributive over the disjunction operator:

$p \land \paren {q \lor r} \dashv \vdash \paren {p \land q} \lor \paren {p \land r}$

This can be expressed as two separate theorems:

Forward Implication
$p \land \paren {q \lor r} \vdash \paren {p \land q} \lor \paren {p \land r}$
Reverse Implication
$\paren {p \land q} \lor \paren {p \land r} \vdash p \land \paren {q \lor r}$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccccc||ccccccc|} \hline
p & \land & (q & \lor & r) & (p & \land & q) & \lor & (p & \land & r) \\
\hline
\F & \F & \F & \F & \F & \F & \F & \F & \F & \F & \F & \F \\
\F & \F & \F & \T & \T & \F & \F & \F & \F & \F & \F & \T \\
\F & \F & \T & \T & \F & \F & \F & \T & \F & \F & \F & \F \\
\F & \F & \T & \T & \T & \F & \F & \T & \F & \F & \F & \T \\
\T & \F & \F & \F & \F & \T & \F & \F & \F & \T & \F & \F \\
\T & \T & \F & \T & \T & \T & \F & \F & \T & \T & \T & \T \\
\T & \T & \T & \T & \F & \T & \T & \T & \T & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Exercise $1 \ \text{(c)}$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.10$: Exercise $2.3$





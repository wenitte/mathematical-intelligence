# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Disjunction_Distributes_over_Conjunction/Left_Distributive/Formulation_1



Definition
The disjunction operator is left distributive over the conjunction operator:

$p \lor \paren {q \land r} \dashv \vdash \paren {p \lor q} \land \paren {p \lor r}$

This can be expressed as two separate theorems:

Forward Implication
$p \lor \paren {q \land r} \vdash \paren {p \lor q} \land \paren {p \lor r}$
Reverse Implication
$\paren {p \lor q} \land \paren {p \lor r} \vdash p \lor \paren {q \land r}$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccccc||ccccccc|} \hline
p & \lor & (q & \land & r) & (p & \lor & q) & \land & (p & \lor & r) \\
\hline
\F & \F & \F & \F & \F & \F & \F & \F & \F & \F & \F & \F \\
\F & \F & \F & \F & \T & \F & \F & \F & \F & \F & \T & \T \\
\F & \F & \T & \F & \F & \F & \T & \T & \F & \F & \F & \F \\
\F & \T & \T & \T & \T & \F & \T & \T & \T & \F & \T & \T \\
\T & \T & \F & \F & \F & \T & \T & \F & \T & \T & \T & \F \\
\T & \T & \F & \F & \T & \T & \T & \F & \T & \T & \T & \T \\
\T & \T & \T & \F & \F & \T & \T & \T & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Exercise $1 \ \text{(d)}$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$





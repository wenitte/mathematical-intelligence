# 

Source: https://proofwiki.org/wiki/Conjunction_with_Negative_is_Equivalent_to_Negation_of_Conditional/Formulation_1



Theorem
$p \land \neg q \dashv \vdash \neg \paren {p \implies q}$

This can be expressed as two separate theorems:

Forward Implication
$p \land \neg q \vdash \neg \paren {p \implies q}$
Reverse Implication
$\neg \paren {p \implies q} \vdash p \land \neg q$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|cccc||cccc|} \hline
p & \land & \neg & q & \neg & (p & \implies & q) \\
\hline
\F & \F & \T & \F & \F & \F & \T & \F \\
\F & \F & \F & \T & \F & \F & \T & \T \\
\T & \T & \T & \F & \T & \T & \F & \F \\
\T & \F & \F & \T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $2$: Theorems and Derived Rules: Exercise $5 \ \text{(g)}$





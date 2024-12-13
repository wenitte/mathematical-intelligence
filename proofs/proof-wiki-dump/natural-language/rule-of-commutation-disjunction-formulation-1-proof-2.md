# 

Source: https://proofwiki.org/wiki/Rule_of_Commutation/Disjunction/Formulation_1/Proof_2

Theorem
$p \lor q \dashv \vdash q \lor p$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, in both cases, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccc||ccc|} \hline
p & \lor & q & q & \lor & p \\
\hline
\F & \F & \F & \F & \F & \F \\
\F & \T & \T & \T & \T & \F \\
\T & \T & \F & \F & \T & \T \\
\T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1993: M. Ben-Ari: Mathematical Logic for Computer Science ... (previous) ... (next): Chapter $2$: Propositional Calculus: $\S 2.4$: Logical equivalence and substitution: Theorem $2.4.2$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3$: Theorem $2.28$





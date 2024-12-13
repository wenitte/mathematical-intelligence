# 

Source: https://proofwiki.org/wiki/Hypothetical_Syllogism/Formulation_3/Proof_by_Truth_Table

Theorem
$\vdash \paren {\paren {p \implies q} \land \paren {q \implies r} } \implies \paren {p \implies r}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective is true for all boolean interpretations.

$\begin{array}{|ccccccc|c|ccc|} \hline
((p & \implies & q) & \land & (q & \implies & r)) & \implies & (p & \implies & r) \\
\hline
\F & \T & \F & \T & \F & \T & \F & \T & \F & \T & \F \\
\F & \T & \F & \T & \F & \T & \T & \T & \F & \T & \T \\
\F & \T & \T & \T & \T & \F & \F & \T & \F & \T & \F \\
\F & \T & \T & \T & \T & \T & \T & \T & \F & \T & \T \\
\T & \F & \F & \F & \F & \T & \F & \T & \T & \F & \F \\
\T & \F & \F & \T & \F & \T & \T & \T & \T & \T & \T \\
\T & \T & \T & \F & \T & \F & \F & \T & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S1.2$: Some Remarks on the Use of the Connectives and, or, implies: Exercise $2$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{I}: 7$: Determining the Truth Values of Complex Propositions
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $1$: Elementary, my dear Watson: $\S 1.1$: You have a logical mind if...: Ponderable $1.1.4$





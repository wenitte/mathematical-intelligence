# 

Source: https://proofwiki.org/wiki/Biconditional_as_Disjunction_of_Conjunctions/Formulation_2/Proof_by_Truth_Table

Theorem
$\vdash \paren {p \iff q} \iff \paren {\paren {p \land q} \lor \paren {\neg p \land \neg q} }$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, in all cases the truth values under the main connective is true for all boolean interpretations.
$\begin{array}{|ccc|c|ccccccccc|} \hline
(p & \iff & q) & \iff & ((p & \land & q) & \lor & (\neg & p & \land & \neg & q)) \\
\hline
\F & \T & \F & \T & \F & \F & \F & \T & \T & \F & \T & \T & \F \\
\F & \F & \T & \T & \F & \F & \T & \F & \T & \F & \F & \F & \T \\
\T & \F & \F & \T & \T & \F & \F & \F & \F & \T & \F & \T & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \F & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{I}: 13$: Logical Equivalences: Exercise $\text{(A)} \ 12$





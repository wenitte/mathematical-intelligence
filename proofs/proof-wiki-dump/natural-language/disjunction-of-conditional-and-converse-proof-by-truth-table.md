# 

Source: https://proofwiki.org/wiki/Disjunction_of_Conditional_and_Converse/Proof_by_Truth_Table

Theorem
$\vdash \paren {p \implies q} \lor \paren {q \implies p}$


Proof
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connective is true for all boolean interpretations, proving a tautology.

$\begin{array}{|ccccccc|} \hline
(p & \implies & q) & \lor & (q & \implies & p) \\
\hline
\F & \T & \F & \T & \F & \T & \F \\
\F & \T & \T & \T & \T & \F & \F \\
\T & \F & \F & \T & \F & \T & \T \\
\T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Rule_of_Commutation/Disjunction/Formulation_2/Proof_by_Truth_Table

Theorem
$\vdash \paren {p \lor q} \iff \paren {q \lor p}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective match for all boolean interpretations.
$\begin{array}{|ccc|c|ccc|} \hline
(p & \lor & q) & \iff & (q & \lor & p) \\
\hline
\F & \F & \F & \T & \F & \F & \F \\
\F & \T & \T & \T & \T & \T & \F \\
\T & \T & \F & \T & \F & \T & \T \\
\T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$






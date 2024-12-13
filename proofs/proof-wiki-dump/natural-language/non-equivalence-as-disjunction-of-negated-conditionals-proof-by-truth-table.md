# 

Source: https://proofwiki.org/wiki/Non-Equivalence_as_Disjunction_of_Negated_Conditionals/Proof_by_Truth_Table

Theorem
$\neg \paren {p \iff q} \dashv \vdash \neg \paren {p \implies q} \lor \neg \paren {q \implies p}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|cccc||ccccccccc|} \hline
\neg & (p & \iff & q) & \neg & (p & \implies & q) & \lor & \neg & (q & \implies & p) \\
\hline
\F & \F & \T & \F & \F & \F & \T & \F & \F & \F & \F & \T & \F \\
\T & \F & \F & \T & \F & \F & \T & \T & \T & \T & \T & \F & \F  \\
\T & \T & \F & \F & \T & \T & \F & \F & \T & \F & \F & \T & \T  \\
\F & \T & \T & \T & \F & \T & \T & \T & \F & \F & \T & \T & \T  \\
\hline
\end{array}$
$\blacksquare$






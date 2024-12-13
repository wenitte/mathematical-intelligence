# 

Source: https://proofwiki.org/wiki/Non-Equivalence_as_Conjunction_of_Disjunction_with_Disjunction_of_Negations/Proof_by_Truth_Table

Theorem
$\neg \paren {p \iff q} \dashv \vdash \paren {p \lor q} \land \paren {\neg p \lor \neg q}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|cccc||ccccccccc|} \hline
\neg & (p & \iff & q) & (p & \lor & q) & \land & (\neg & p & \lor & \neg & q) \\
\hline
\F & \F & \T & \F & \F & \F & \F & \F & \T & \F & \T & \T & \F \\
\T & \F & \F & \T & \F & \T & \T & \T & \T & \F & \T & \F & \T \\
\T & \T & \F & \F & \T & \T & \F & \T & \F & \T & \T & \T & \F \\
\F & \T & \T & \T & \T & \T & \T & \F & \F & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$






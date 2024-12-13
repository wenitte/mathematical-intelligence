# 

Source: https://proofwiki.org/wiki/Non-Equivalence_as_Conjunction_of_Disjunction_with_Negation_of_Conjunction/Proof_by_Truth_Table

Theorem
$\neg \paren {p \iff q} \dashv \vdash \paren {p \lor q} \land \neg \paren {p \land q}$
That is, negation of the biconditional means the same thing as either-or but not both, that is, exclusive or.


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|cccc||cccccccc|} \hline
\neg & (p & \iff & q) & (p & \lor & q) & \land & \neg & (p & \land & q) \\
\hline
\F & \F & \T & \F & \F & \F & \F & \F & \T & \F & \F & \F \\
\T & \F & \F & \T & \F & \T & \T & \T & \T & \F & \F & \T  \\
\T & \T & \F & \F & \T & \T & \F & \T & \T & \T & \F & \F  \\
\F & \T & \T & \T & \T & \T & \T & \F & \F & \T & \T & \T  \\
\hline
\end{array}$
$\blacksquare$






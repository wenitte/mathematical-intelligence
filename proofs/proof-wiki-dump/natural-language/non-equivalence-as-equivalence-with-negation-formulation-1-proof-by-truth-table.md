# 

Source: https://proofwiki.org/wiki/Non-Equivalence_as_Equivalence_with_Negation/Formulation_1/Proof_by_Truth_Table

Theorem
$\neg \paren {p \iff q} \dashv \vdash \paren {p \iff \neg q}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|cccc||cccc|} \hline
\neg & (p & \iff & q) & (p & \iff & \neg & q) \\
\hline
\F & \F & \T & \F & \T & \F & \T & \F \\
\T & \F & \F & \T & \T & \T & \F & \T  \\
\T & \T & \F & \F & \F & \T & \T & \F  \\
\F & \T & \T & \T & \F & \F & \F & \T  \\
\hline
\end{array}$
$\blacksquare$






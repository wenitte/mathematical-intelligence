# 

Source: https://proofwiki.org/wiki/Biconditional_is_Associative/Formulation_1

Theorem
The biconditional operator is associative:

$p \iff \paren {q \iff r} \dashv \vdash \paren {p \iff q} \iff r$


Proof
Proof of associativity by natural deduction is just too tedious to be considered.
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective match for all boolean interpretations.

$\begin{array}{|ccccc||ccccc|} \hline
p & \iff & (q & \iff & r) & (p & \iff & q) & \iff & r \\
\hline
\F & \F & \F & \T & \F & \F & \T & \F & \F & \F \\
\F & \T & \F & \F & \T & \F & \T & \F & \T & \T \\
\F & \T & \T & \F & \F & \F & \F & \T & \T & \F \\
\F & \F & \T & \T & \T & \F & \F & \T & \F & \T \\
\T & \T & \F & \T & \F & \T & \F & \F & \T & \F \\
\T & \F & \F & \F & \T & \T & \F & \F & \F & \T \\
\T & \F & \T & \F & \F & \T & \T & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$





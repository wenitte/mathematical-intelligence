# 

Source: https://proofwiki.org/wiki/NOR_is_not_Associative/Proof_by_Truth_Table

Theorem
$p \downarrow \paren {q \downarrow r} \not \vdash \paren {p \downarrow q} \downarrow r$


Proof
Apply the Method of Truth Tables:

$\begin{array}{|ccccc||ccccc|} \hline
p & \downarrow & (q & \downarrow & r) & (p & \downarrow & q) & \downarrow & r \\
\hline
\F & \F & \F & \T & \F & \F & \T & \F & \F & \F \\
\F & \T & \F & \F & \T & \F & \T & \F & \F & \T \\
\F & \T & \T & \F & \F & \F & \F & \T & \T & \F \\
\F & \T & \T & \F & \T & \F & \F & \T & \F & \T \\
\T & \F & \F & \T & \F & \T & \F & \F & \T & \F \\
\T & \F & \F & \F & \T & \T & \F & \F & \F & \T \\
\T & \F & \T & \F & \F & \T & \F & \T & \T & \F \\
\T & \F & \T & \F & \T & \T & \F & \T & \F & \T \\
\hline
\end{array}$
As can be seen by inspection, the truth values under the main connectives do not match for all boolean interpretations.
$\blacksquare$






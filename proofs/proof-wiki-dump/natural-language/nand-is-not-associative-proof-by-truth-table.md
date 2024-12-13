# 

Source: https://proofwiki.org/wiki/NAND_is_not_Associative/Proof_by_Truth_Table

Theorem
$p \uparrow \paren {q \uparrow r} \not \vdash \paren {p \uparrow q} \uparrow r$


Proof
We apply the Method of Truth Tables:

$\begin{array}{|ccccc||ccccc|} \hline
p & \uparrow & (q & \uparrow & r) & (p & \uparrow & q) & \uparrow & r \\
\hline
\F & \T & \F & \T & \F & \F & \T & \F & \T & \F \\
\F & \T & \F & \T & \T & \F & \T & \F & \F & \T \\
\F & \T & \T & \T & \F & \F & \T & \T & \T & \F \\
\F & \T & \T & \F & \T & \F & \T & \T & \F & \T \\
\T & \F & \F & \T & \F & \T & \T & \F & \T & \F \\
\T & \F & \F & \T & \T & \T & \T & \F & \F & \T \\
\T & \F & \T & \T & \F & \T & \F & \T & \T & \F \\
\T & \T & \T & \F & \T & \T & \F & \T & \T & \T \\
\hline
\end{array}$
As can be seen by inspection, the truth values under the main connectives do not match for all boolean interpretations.
$\blacksquare$






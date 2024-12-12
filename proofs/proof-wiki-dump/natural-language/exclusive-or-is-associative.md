# 

Source: https://proofwiki.org/wiki/Exclusive_Or_is_Associative

Theorem
Exclusive or is associative:

$p \oplus \paren {q \oplus r} \dashv \vdash \paren {p \oplus q} \oplus r$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccccc||ccccc|} \hline
p & \oplus & (q & \oplus & r) & (p & \oplus & q) & \oplus & r \\
\hline
\F & \F & \F & \F & \F & \F & \F & \F & \F & \F \\
\F & \T & \F & \T & \T & \F & \F & \F & \T & \T \\
\F & \T & \T & \T & \F & \F & \T & \T & \T & \F \\
\F & \F & \T & \F & \T & \F & \T & \T & \F & \T \\
\T & \T & \F & \F & \F & \T & \T & \F & \T & \F \\
\T & \F & \F & \T & \T & \T & \T & \F & \F & \T \\
\T & \F & \T & \T & \F & \T & \F & \T & \F & \F \\
\T & \T & \T & \F & \T & \T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$





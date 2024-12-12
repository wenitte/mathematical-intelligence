# 

Source: https://proofwiki.org/wiki/Exclusive_Or_is_Commutative/Proof_2

Theorem
$p \oplus q \dashv \vdash q \oplus p$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccc||ccc|} \hline
p & \oplus & q & q & \oplus & p \\
\hline
F & F & F & F & F & F \\
F & T & T & T & T & F \\
T & T & F & F & T & T \\
T & F & T & T & F & T \\
\hline
\end{array}$
$\blacksquare$






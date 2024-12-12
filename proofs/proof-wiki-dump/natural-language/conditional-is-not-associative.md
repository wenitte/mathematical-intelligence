# 

Source: https://proofwiki.org/wiki/Conditional_is_not_Associative

Theorem
There exist propositions $p, q, r$ such that:

$p \implies \paren {q \implies r} \not \vdash \paren {p \implies q} \implies r$
That is, the conditional is not associative.


Proof
We apply the Method of Truth Tables:

$\begin{array}{|ccccc||ccccc|} \hline
p & \implies & (q & \implies & r) & (p & \implies & q) & \implies & r \\
\hline
\F & \T & \F & \T & \F & \F & \T & \F & \F & \F \\
\F & \T & \F & \T & \T & \F & \T & \F & \T & \T \\
\F & \T & \T & \F & \F & \F & \T & \T & \F & \F \\
\F & \T & \T & \T & \T & \F & \T & \T & \T & \T \\
\T & \T & \F & \T & \F & \T & \F & \F & \T & \F \\
\T & \T & \F & \T & \T & \T & \F & \F & \T & \T \\
\T & \F & \T & \F & \F & \T & \T & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
As can be seen by inspection, the truth values under the main connectives do not match for all boolean interpretations.
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Biconditional_is_Self-Inverse

Theorem
$\paren {p \iff q} \iff q \dashv \vdash p$
where $\iff$ denotes the biconditional operator.


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective on the left hand side match those for $p$ on the right hand side for all boolean interpretations:
$\begin{array}{|ccccc||c|} \hline
(p & \iff & q) & \iff & q & p \\
\hline
F & T & F & F & F & F \\
F & F & T & F & T & F \\
T & F & F & T & F & T \\
T & T & T & T & T & T \\
\hline
\end{array}$
$\blacksquare$






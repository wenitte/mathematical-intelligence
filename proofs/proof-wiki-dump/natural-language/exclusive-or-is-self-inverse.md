# 

Source: https://proofwiki.org/wiki/Exclusive_Or_is_Self-Inverse

Theorem
$\paren {p \oplus q} \oplus q \dashv \vdash p$
where $\oplus$ denotes the exclusive or operator.


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective on the left hand side match those for $p$ on the right hand side for all boolean interpretations:
$\begin{array}{|ccccc||c|} \hline
(p & \oplus & q) & \oplus & q & p \\
\hline
\F & \F & \F & \F & \F & \F \\
\F & \T & \T & \F & \T & \F \\
\T & \T & \F & \T & \F & \T \\
\T & \F & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1993: M. Ben-Ari: Mathematical Logic for Computer Science ... (previous) ... (next): Chapter $2$: Propositional Calculus: $\S 2.1$: Boolean operators





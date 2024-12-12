# 

Source: https://proofwiki.org/wiki/Biconditional_Introduction/Sequent_Form/Proof_2

Theorem
$p \implies q, q \implies p \vdash p \iff q$


Proof
We apply the Method of Truth Tables.
$\begin{array}{|ccccccc||ccc|} \hline
(p & \implies & q) & \land & (q & \implies & p) & p & \iff & q\\
\hline
F & T & F & T & F & T & F & F & T & F \\
F & T & T & F & T & F & F & F & F & T \\
T & F & F & F & F & T & T & T & F & F \\
T & T & T & T & T & T & T & T & T & T \\
\hline
\end{array}$
As can be seen, only when both $p \implies q$ and $q \implies p$ are true, then so is $p \iff q$.
$\blacksquare$






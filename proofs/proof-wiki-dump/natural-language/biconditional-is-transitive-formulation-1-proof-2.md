# 

Source: https://proofwiki.org/wiki/Biconditional_is_Transitive/Formulation_1/Proof_2

Theorem
$p \iff q, q \iff r \vdash p \iff r$


Proof
We apply the Method of Truth Tables.
As can be seen for all boolean interpretations by inspection, where the truth values under the main connective on the left hand side is $T$, that under the one on the right hand side is also $T$:
$\begin{array}{|ccccccc||ccc|} \hline
(p & \iff & q) & \land & (q & \iff & r) & p & \iff & r \\
\hline
F & T & F & T & F & T & F & F & T & F \\
F & T & F & F & F & F & T & F & F & T \\
F & F & T & F & T & F & F & F & T & F \\
F & F & T & F & T & T & T & F & F & T \\
T & F & F & F & F & T & F & T & F & F \\
T & F & F & F & F & F & T & T & T & T \\
T & T & T & F & T & F & F & T & F & F \\
T & T & T & T & T & T & T & T & T & T \\
\hline
\end{array}$
Hence the result.
$\blacksquare$






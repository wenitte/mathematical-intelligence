# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Ponens/Variant_2/Proof_2

Theorem
$\vdash p \implies \paren {\paren {p \implies q} \implies q}$


Proof
We apply the Method of Truth Tables.
$\begin{array}{|c|c|ccccc|} \hline
p & \implies & ((p & \implies & q) & \implies & q)\\
\hline
\F & \T & \F & \T & \F & \F & \F \\
\F & \T & \F & \T & \T & \T & \T \\
\T & \T & \T & \F & \F & \T & \F \\
\T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
As can be seen by inspection, the main connective is true throughout.
$\blacksquare$






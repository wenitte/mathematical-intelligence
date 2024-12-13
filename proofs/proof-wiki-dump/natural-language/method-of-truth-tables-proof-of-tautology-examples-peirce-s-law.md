# 

Source: https://proofwiki.org/wiki/Method_of_Truth_Tables/Proof_of_Tautology/Examples/Peirce%27s_Law

Examples of Proof of Tautology
Consider the truth table for Peirce's Law:

$P = \paren {\paren {p \implies q} \implies p} \implies p$
which is:
$\begin{array}{cc||ccccccc}
p & q & ((p & \implies & q) & \implies & p) & \implies & p \\
\hline
\F & \F & \F & \T & \F & \F & \F & \T & \F \\
\F & \T & \F & \T & \T & \F & \F & \T & \F \\
\T & \F & \T & \F & \F & \T & \T & \T & \T \\
\T & \T & \T & \T & \T & \T & \T & \T & \T \\
\end{array}$
The main connective of $P$ is the rightmost instance of $\implies$.
The column beneath that connective is all $\T$, so $\paren {\paren {p \implies q} \implies p} \implies p$ is a tautology.
$\blacksquare$






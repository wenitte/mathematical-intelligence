# 

Source: https://proofwiki.org/wiki/Proof_by_Cases/Sequent_Form/Proof_2

Theorem
Proof by Cases can be symbolised by the sequent:

$p \lor q, \paren {p \vdash r}, \paren {q \vdash r} \vdash r$


Proof
We apply the Method of Truth Tables.
$\begin{array}{|ccc|ccc|ccc||c|} \hline
p & \lor & q & p & \implies & r & q & \implies & r & r \\
\hline
F & F & F & F & T & F & F & T & F & F \\
F & F & F & F & T & T & F & T & T & T \\
F & T & T & F & T & F & T & F & F & F \\
F & T & T & F & T & T & T & T & T & T \\
T & T & F & T & F & F & F & T & F & F \\
T & T & F & T & T & T & F & T & T & T \\
T & T & T & T & F & F & T & F & F & F \\
T & T & T & T & T & T & T & T & T & T \\
\hline
\end{array}$
As can be seen, when $p \lor q$, $p \implies r$ and $q \implies r$ are all true, then so is $r$.
$\blacksquare$






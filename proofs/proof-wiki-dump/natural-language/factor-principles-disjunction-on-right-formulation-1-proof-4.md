# 

Source: https://proofwiki.org/wiki/Factor_Principles/Disjunction_on_Right/Formulation_1/Proof_4

Theorem
$p \implies q \vdash \paren {p \lor r} \implies \paren {q \lor r}$


Proof
As can be seen for all boolean interpretations by inspection, where the truth value under the main connective on the left hand side is $T$, that under the one on the right hand side is also $T$:


$\begin{array}{|ccc||ccc||ccccccc|} \hline
p & q & r & (p & \implies & q) & (p & \lor & r) & \implies & (q & \lor & r) \\
\hline
F & F & F & F & T & F & F & F & F & T & F & F & F \\
F & F & T & F & T & F & F & T & T & T & F & T & T \\ 
F & T & F & F & T & T & F & F & F & T & T & T & F \\
F & T & T & F & T & T & F & T & T & T & T & T & T \\
T & F & F & T & F & F & T & T & F & F & F & F & F \\
T & F & T & T & F & F & T & T & T & T & F & T & T \\
T & T & F & T & T & T & T & T & F & T & T & T & F \\
T & T & T & T & T & T & T & T & T & T & T & T & T \\
\hline
\end{array}$
$\blacksquare$






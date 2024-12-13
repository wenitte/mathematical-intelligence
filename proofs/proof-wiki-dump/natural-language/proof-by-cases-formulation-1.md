# 

Source: https://proofwiki.org/wiki/Proof_by_Cases/Formulation_1



Theorem
$\left({p \implies r}\right) \land \left({q \implies r}\right) \dashv \vdash \left({p \lor q}\right) \implies r$

This can be expressed as two separate theorems:

Forward Implication
$\paren {p \implies r} \land \paren {q \implies r} \vdash \paren {p \lor q} \implies r$
Reverse Implication
$\paren {p \lor q} \implies r \vdash \paren {p \implies r} \land \paren {q \implies r}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccccccc||ccccc|} \hline
(p & \implies & r) & \land & (q & \implies & r) & (p & \lor & q) & \implies & r \\
\hline
\F & \T & \F & \T & \F & \T & \F & \F & \F & \F & \T & \F \\
\F & \T & \T & \T & \F & \T & \T & \F & \F & \F & \T & \T \\
\F & \T & \F & \F & \T & \F & \F & \F & \T & \T & \F & \F \\
\F & \T & \T & \T & \T & \T & \T & \F & \T & \T & \T & \T \\
\T & \F & \F & \F & \F & \T & \F & \T & \T & \F & \F & \F \\
\T & \T & \T & \T & \F & \T & \T & \T & \T & \F & \T & \T \\
\T & \F & \F & \F & \T & \F & \F & \T & \T & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$






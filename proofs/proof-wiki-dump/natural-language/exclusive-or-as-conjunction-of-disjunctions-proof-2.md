# 

Source: https://proofwiki.org/wiki/Exclusive_Or_as_Conjunction_of_Disjunctions/Proof_2

Theorem
$p \oplus q \dashv \vdash \left({p \lor q}\right) \land \left({\neg p \lor \neg q}\right)$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccc||ccccccccc|} \hline
p & \oplus & q & (p & \lor & q) & \land & (\neg & p & \lor & \neg & q) \\
\hline
F & F & F & F & F & F & F & T & F & T & T & F \\
F & T & T & F & T & T & T & T & F & T & F & T  \\
T & T & F & T & T & F & T & F & T & T & T & F  \\
T & F & T & T & T & T & F & F & T & F & F & T  \\
\hline
\end{array}$
$\blacksquare$






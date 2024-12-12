# 

Source: https://proofwiki.org/wiki/Biconditional_as_Disjunction_of_Conjunctions/Formulation_1/Proof

Theorem
$p \iff q \dashv \vdash \paren {p \land q} \lor \paren {\neg p \land \neg q}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, in all cases the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc||ccccccccc|} \hline
p & \iff & q & (p & \land & q) & \lor & (\neg & p & \land & \neg & q) \\
\hline
F & T & F & F & F & F & T & T & F & T & T & F \\
F & F & T & F & F & T & F & T & F & F & F & T \\
T & F & F & T & F & F & F & F & T & F & T & F \\
T & T & T & T & T & T & T & F & T & F & F & T \\
\hline
\end{array}$
$\blacksquare$






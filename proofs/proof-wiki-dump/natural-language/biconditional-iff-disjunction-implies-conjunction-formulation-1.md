# 

Source: https://proofwiki.org/wiki/Biconditional_iff_Disjunction_implies_Conjunction/Formulation_1



Theorem
$p \iff q \dashv \vdash \paren {p \lor q} \implies \paren {p \land q}$

This can be expressed as two separate theorems:

Forward Implication
$p \iff q \vdash \paren {p \lor q} \implies \paren {p \land q}$
Reverse Implication
$\paren {p \lor q} \implies \paren {p \land q} \vdash p \iff q$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, in all cases the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc||ccccccc|} \hline
p & \iff & q & (p & \lor & q) & \implies & (p & \land & q) \\
\hline
F & T & F & F & F & F & T & F & F & F \\
F & F & T & F & T & T & F & F & F & T \\
T & F & F & T & T & F & F & T & F & F \\
T & T & T & T & T & T & T & T & T & T \\
\hline
\end{array}$
$\blacksquare$






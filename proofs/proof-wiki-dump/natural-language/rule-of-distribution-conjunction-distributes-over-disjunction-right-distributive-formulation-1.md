# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Conjunction_Distributes_over_Disjunction/Right_Distributive/Formulation_1



Theorem
The conjunction operator is right distributive over the disjunction operator:

$\paren {q \lor r} \land p \dashv \vdash \paren {q \land p} \lor \paren {r \land p}$

This can be expressed as two separate theorems:

Forward Implication
$\paren {q \lor r} \land p \vdash \paren {q \land p} \lor \paren {r \land p}$


Reverse Implication
$\paren {q \land p} \lor \paren {r \land p} \vdash \paren {q \lor r} \land p$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccccc||ccccccc|} \hline
(q & \lor & r) & \land & p & (q & \land & p) & \lor & (r & \land & p) \\
\hline
\F & \F & \F & \F & \F & \F & \F & \F & \F & \F & \F & \F \\
\F & \F & \F & \F & \T & \F & \F & \T & \F & \F & \F & \T \\
\F & \T & \T & \F & \F & \F & \F & \F & \F & \T & \F & \F \\
\F & \T & \T & \T & \T & \F & \F & \T & \T & \T & \T & \T \\
\T & \T & \F & \F & \F & \T & \F & \F & \F & \F & \F & \F \\
\T & \T & \F & \T & \T & \T & \T & \T & \T & \F & \F & \T \\
\T & \T & \T & \F & \F & \T & \F & \F & \F & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1988: Alan G. Hamilton: Logic for Mathematicians (2nd ed.) ... (previous) ... (next): $\S 1$: Informal statement calculus: $\S 1.2$: Truth functions and truth tables: Exercise $6 \ \text{(b)}$





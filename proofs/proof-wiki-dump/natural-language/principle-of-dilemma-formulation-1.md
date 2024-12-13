# 

Source: https://proofwiki.org/wiki/Principle_of_Dilemma/Formulation_1



Theorem
If both a premise and its negation imply the conclusion, then the conclusion must be true independently of any premises.

$\paren {p \implies q} \land \paren {\neg p \implies q} \dashv \vdash q$

This can be expressed as two separate theorems:

Forward Implication
$\paren {p \implies q} \land \paren {\neg p \implies q} \vdash q$
Reverse Implication
$q \vdash \left({p \implies q}\right) \land \left({\neg p \implies q}\right)$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|cccccccc||c|} \hline
(p & \implies & q) & \land & (\neg & p & \implies & q) & q \\
\hline
F & T & F & F & T & F & F & F & F \\
F & T & T & T & T & F & T & T & T \\
T & F & F & F & F & T & T & F & F \\
T & T & T & T & F & T & T & T & T \\
\hline
\end{array}$
$\blacksquare$


Also see
Proof by Cases





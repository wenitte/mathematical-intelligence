# 

Source: https://proofwiki.org/wiki/Conditional_is_not_Right_Self-Distributive/Formulation_1

Theorem
While this holds:

$\paren {p \implies q} \implies r \vdash \paren {p \implies r} \implies \paren {q \implies r}$
its converse does not:

$\paren {p \implies r} \implies \paren {q \implies r} \not \vdash \paren {p \implies q} \implies r$


Proof
We apply the Method of Truth Tables to the proposition:

$\paren {p \implies q} \implies r \vdash \paren {p \implies r} \implies \paren {q \implies r}$
As can be seen for all boolean interpretations by inspection, where the truth value under the main connective on the left hand side is $\T$, that under the one on the right hand side is also $\T$:
$\begin{array}{|ccccc||ccccccc|} \hline
(p & \implies & q) & \implies & r & (p & \implies & r) & \implies & (q & \implies & r) \\
\hline
\F & \T & \F & \F & \F & \F & \T & \F & \T & \F & \T & \F \\
\F & \T & \F & \T & \T & \F & \T & \T & \T & \F & \T & \T \\
\F & \T & \T & \F & \F & \F & \T & \F & \F & \T & \F & \F \\
\F & \T & \T & \T & \T & \F & \T & \T & \T & \T & \T & \T \\
\T & \F & \F & \T & \F & \T & \F & \F & \T & \F & \F & \F \\
\T & \F & \F & \T & \T & \T & \T & \T & \T & \F & \T & \T \\
\T & \T & \T & \F & \F & \T & \F & \F & \T & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\Box$

The two formulas are not equivalent, as the relevant columns do not match exactly.
For example, when $p =  q = r = \F$ we have that:

$\paren {p \implies q} \implies r = \F$
but:

$\paren {p \implies r} \implies \paren {q \implies r} = \T$

Hence the result:

$\paren {p \implies q} \implies r \vdash \paren {p \implies r} \implies \paren {q \implies r}$
but:

$\paren {p \implies r} \implies \paren {q \implies r} \not \vdash \paren {p \implies q} \implies r$
$\blacksquare$






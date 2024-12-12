# 

Source: https://proofwiki.org/wiki/Equivalences_are_Interderivable/Proof_1

Theorem
If two propositional formulas are interderivable, they are equivalent:

$\paren {p \dashv \vdash q} \dashv \vdash \paren {p \iff q}$


Proof
The result follows directly from the truth table for the biconditional:
$\begin{array}{|cc||ccc|} \hline
p & q & p & \iff & q \\
\hline
\F & \F & \F & \T & \F \\
\F & \T & \F & \F & \T \\
\T & \F & \T & \F & \F \\
\T & \T & \T & \T & \T \\
\hline
\end{array}$

By inspection, it is seen that $\map \MM {p \iff q} = \T$ if and only if $\map \MM p = \map \MM q$.
$\blacksquare$


Sources
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2): \ 6$: Using logical equivalences





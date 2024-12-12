# 

Source: https://proofwiki.org/wiki/Conditional_and_Inverse_are_not_Equivalent



Theorem
A conditional statement:

$p \implies q$
is not logically equivalent to its inverse:

$\lnot p \implies \lnot q$


Proof
We apply the Method of Truth Tables to the proposition:

$\paren {p \implies q} \iff \paren {\lnot p \implies \lnot q}$
$\begin{array}{|ccc|c|ccc|} \hline
p & \implies & q) & \iff & (\lnot & p & \implies & \lnot & q) \\
\hline
\F & \T & \F & \T & \T & \F & \T & \T & \F \\
\F & \T & \T & \F & \T & \F & \F & \F & \T \\
\T & \F & \F & \F & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \F & \T & \T & \F & \T \\
\hline
\end{array}$
As can be seen by inspection, the truth values under the main connectives do not match for all boolean interpretations.
$\blacksquare$


Also see
Denying the Antecedent


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}.14$: Application of laws of sentential calculus in inference





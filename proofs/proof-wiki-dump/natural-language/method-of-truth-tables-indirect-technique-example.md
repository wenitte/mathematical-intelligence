# 

Source: https://proofwiki.org/wiki/Method_of_Truth_Tables/Indirect_Technique/Example

Example of Indirect Truth Table Technique
Consider the proposition:

$\paren {\paren {p \implies q} \land \neg q} \implies \neg p$

First the truth table is set up, with $F$ under the main connective:
$\begin{array}{cccccc|c|cc}
((p & \implies & q) & \land & \neg & q) & \implies & \neg & p \\
\hline

 &   &   &   &   &   & \F &   &   \\

\end{array}$

The first step is to assign truth values to the connectives in the scope of the main connective which are consistent with that $\F$.
In this case, the main connective is a conditional, so to make it false we need $\T$ under the antecedent and $\F$ under the consequent:
$\begin{array}{cccccc|c|cc}
((p & \implies & q) & \land & \neg & q) & \implies & \neg & p \\
\hline

 &   &   & \T &   &   & \F & \F &   \\
 &   &   &  1 &   &   &    &  1 &   \\

\end{array}$
Note that the numbers in the second row are for illustrative purposes only, and are not actually required as part of the proof.

The second step does the same thing with the $\land$:
$\begin{array}{cccccc|c|cc}
((p & \implies & q) & \land & \neg & q) & \implies & \neg & p \\
\hline

 & \T &   & \T & \T &   & \F & \F &   \\
 &  2 &   &  1 &  2 &   &    &  1 &   \\

\end{array}$

The third step does the same thing with the $\neg p$ and $\neg q$:
$\begin{array}{cccccc|c|cc}
((p & \implies & q) & \land & \neg & q) & \implies & \neg & p \\
\hline

 & \T &   & \T & \T & \F & \F & \F & \T \\
 &  2 &   &  1 &  2 &  3 &    &  1 &  3 \\

\end{array}$

In the fourth step, we carry across the truth values of $p$ and $q$ which resulted after step $3$:
$\begin{array}{cccccc|c|cc}
((p & \implies & q) & \land & \neg & q) & \implies & \neg & p \\
\hline
\T & \T & \F & \T & \T & \F & \F & \F & \T \\

4 &  2 &  4 &  1 &  2 &  3 &    &  1 &  3 \\

\end{array}$

At this point it can be seen that the truth table contains an inconsistency:
$\begin{array}{ccc}
p & \implies & q \\
\hline
\T & \T & \F \\
\end{array}$

Thus the assumption that the main connective can be assigned the value $\F$ must have been false.
Hence the proposition:

$\paren {\paren {p \implies q} \land \neg q} \implies \neg p$
is a tautology.
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.4$: An Indirect Method of Truth-Table Decision





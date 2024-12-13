# 

Source: https://proofwiki.org/wiki/Method_of_Truth_Tables/Indirect_Technique

Proof Technique
The conventional technique of proving a tautology by means of a truth table can be unwieldy when there are many variables.
There is an indirect method of proving a tautology which is shorter.
It is recognised that the truth table for a tautology contains all $\T$ down the column containing the main connective.
Hence it follows that if there exist any instances of $\F$ in that column, the proposition under investigation is not a tautology.

Suppose we make the hypothesis that the proposition under investigation is not a tautology.
Then there exists an instance of $\F$ under the main connective.
We construct the heading of the truth table in the same way as for the conventional technique: one column for each variable and one for each connective.
Under the main connective we place $\F$.
Examining the conditions under which the consequence is $\F$ for that connective, we place truth values under the elements of the proposition which are in the scope of the main connective so as to allow $\F$.
Similarly we work backwards through each of the components of the proposition.
If it is impossible to complete the truth table row consistent with the behaviour of the connectives, then no $\F$ can appear under the main connective.
Therefore the proposition under investigation is a tautology.
If it is possible to complete the truth table row consistently, then the proposition under investigation is not a tautology.
$\blacksquare$


Example
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





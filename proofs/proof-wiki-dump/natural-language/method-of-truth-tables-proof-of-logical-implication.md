# 

Source: https://proofwiki.org/wiki/Method_of_Truth_Tables/Proof_of_Logical_Implication

Proof Technique
Suppose we wish to prove that $P \vdash Q$ for two propositional formulas $P$ and $Q$.

Example: Let $P$ be $\neg p$ and $Q$ be $p \implies q$.


Express two statements as a single WFF
We express $P \vdash Q$ as a single WFF $\paren {P \implies Q}$ and perform the method of truth tables on that expression.
Demonstrating this with the example given:
$\begin{array}{cc||cccccc}
p & q & (\neg & p ) & \implies & (p & \implies & q) \\
\hline
\F & \F & \T & \F & \T & \F & \T & \F \\
\F & \T & \T & \F & \T & \F & \T & \T \\
\T & \F & \F & \T & \T & \T & \F & \F \\
\T & \T & \F & \T & \T & \T & \T & \T \\
\end{array}$

As can be seen, the column under the main connective $\implies$ of $\paren {P \implies Q}$ is all $\T$.
Hence $\paren {\paren {\neg p} \implies \paren {p \implies q} }$ is a tautology.
Hence from Equivalence of Logical Implication and Conditional, $\neg p \vdash p \implies q$.
$\blacksquare$


Compare two WFFs in the same table
Alternatively, we can place the two WFFs side by side in the same truth table:
$\begin{array}{cc||cc||ccc}
p & q & \neg & p & p & \implies & q \\
\hline
\F & \F & \T & \F & \F & \T & \F \\
\F & \T & \T & \F & \F & \T & \T \\
\T & \F & \F & \T & \T & \F & \F \\
\T & \T & \F & \T & \T & \T & \T \\
\end{array}$
This time, we need to make sure that when the truth values in the columns under the first main connectives is $\T$, then it is also $\T$ under the second.
Note that this is exactly the same as putting a $\implies$ between the two and making a WFF out of the pair of them.
$\blacksquare$






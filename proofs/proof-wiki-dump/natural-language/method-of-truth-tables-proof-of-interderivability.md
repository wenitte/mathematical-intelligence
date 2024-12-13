# 

Source: https://proofwiki.org/wiki/Method_of_Truth_Tables/Proof_of_Interderivability

Proof Technique
Suppose we have two propositional formulas $P$ and $Q$ and we wish to see whether $P \dashv \vdash Q$ or not.


Example: Let $P$ be $p \uparrow q$ and let $Q$ be $\neg \paren {p \land q}$.

There are two things we can do.


Express two statements as a single WFF
We express $P \dashv \vdash Q$ as a single WFF $\paren {P \iff Q}$ and perform the method of truth tables on that.
Demonstrating this with the example given:
$\begin{array}{cc||cccccccc}
p & q & (p & \uparrow & q) & \iff & \neg & (p & \land & q) \\
\hline
\F & \F & \F & \T & \F & \T & \T & \F & \F & \F \\
\F & \T & \F & \T & \T & \T & \T & \F & \F & \T \\
\T & \F & \T & \T & \F & \T & \T & \T & \F & \F \\
\T & \T & \T & \F & \T & \T & \F & \T & \T & \T \\
\end{array}$

As can be seen, the column under the main connective $\iff$ of $\paren {P \iff Q}$ is all $\T$, so $\paren {\paren {p \uparrow q} \iff \neg \paren {p \land q} }$ is a tautology.
Hence from Equivalences are Interderivable, $\paren {\paren {p \uparrow q} \dashv \vdash \neg \paren {p \land q} }$ and the two formulas are interderivable.
$\blacksquare$


Compare two WFFs in the same table
Alternatively, we can place the two WFFs side by side in the same truth table:
$\begin{array}{cc||ccc||cccc}
p & q & (p & \uparrow & q) & \neg & (p & \land & q) \\
\hline
\F & \F & \F & \T & \F & \T & \F & \F & \F \\
\F & \T & \F & \T & \T & \T & \F & \F & \T \\
\T & \F & \T & \T & \F & \T & \T & \F & \F \\
\T & \T & \T & \F & \T & \F & \T & \T & \T \\
\end{array}$
This time, we need to make sure that the truth values in the columns under the main connectives of both formulae are the same.
Note that this is exactly the same as putting an instance of $\iff$ between the two and making a WFF out of the pair of them.
$\blacksquare$






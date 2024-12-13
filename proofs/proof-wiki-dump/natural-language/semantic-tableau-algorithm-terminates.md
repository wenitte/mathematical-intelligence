# 

Source: https://proofwiki.org/wiki/Semantic_Tableau_Algorithm_Terminates



Theorem
Let $\mathbf A$ be a WFF of propositional logic.

Then the Semantic Tableau Algorithm for $\mathbf A$ terminates.
Each leaf node of the resulting semantic tableau is marked.


Proof
Let $t$ be an unmarked leaf of the semantic tableau $T$ being constructed.
Let $\map b t$ be the number of binary logical connectives occurring in its label $\map U t$.
Let $\map n t$ be the number of negations occurring in $\map U t$.
Let $\map i t$ be the number of biconditionals and exclusive ors occurring in $\map U t$.
Define $\map W t$ as:

$\map W t = 3 \, \map b t + \map n t + 4 \, \map i t$[1]

Next, we aim to prove that:

$\map W {t'} < \map W t$
for every leaf $t'$ that could be added to $t$ in following the Semantic Tableau Algorithm.

First, presume an $\alpha$-formula $\mathbf A$ from $\map U t$ is picked.
Looking at the mutations from $\map U t$ to $\map U {t'}$, it follows that the claim is reduced to:

$\map W {\mathbf A_1} + \map W {\mathbf A_2} < \map W {\mathbf A}$
This claim can be verified by looking up the appropriate row in the following extension of the table of $\alpha$-formulas:

$\begin{array}{ccc||ccc}
\hline
\mathbf A & \mathbf A_1 & \mathbf A_2 & \map W {\mathbf A} & \map W {\mathbf A_1} & \map W {\mathbf A_2} \\
\hline
\neg \neg \mathbf A_1 & \mathbf A_1 & & \map W {\mathbf A_1} + 2 & \map W {\mathbf A_1} & 0\\
\mathbf A_1 \land \mathbf A_2 & \mathbf A_1 & \mathbf A_2 & \map W {\mathbf A_1} + \map W {\mathbf A_2} + 3 & \map W {\mathbf A_1} & \map W {\mathbf A_2} \\
\neg \paren {\mathbf A_1 \lor \mathbf A_2} & \neg \mathbf A_1 & \neg \mathbf A_2 & \map W {\mathbf A_1} + \map W {\mathbf A_2} + 4 & \map W {\mathbf A_1} + 1 & \map W {\mathbf A_2} + 1 \\
\neg \paren {\mathbf A_1 \implies \mathbf A_2} & \mathbf A_1 & \neg \mathbf A_2 & \map W {\mathbf A_1} + \map W {\mathbf A_2} + 4 & \map W {\mathbf A_1} & \map W {\mathbf A_2} + 1 \\
\neg \paren {\mathbf A_1 \mathbin \uparrow \mathbf A_2} & \mathbf A_1 & \mathbf A_2 & \map W {\mathbf A_1} + \map W {\mathbf A_2} + 4 & \map W {\mathbf A_1} & \map W {\mathbf A_2} \\
\mathbf A_1 \mathbin \downarrow \mathbf A_2 & \neg \mathbf A_1 & \neg \mathbf A_2 & \map W {\mathbf A_1} + \map W {\mathbf A_2} + 3 & \map W {\mathbf A_1} + 1 & \map W {\mathbf A_2} + 1 \\
\mathbf A_1 \iff \mathbf A_2 & \mathbf A_1 \implies \mathbf A_2 & \mathbf A_2 \implies \mathbf A_1 & \map W {\mathbf A_1} + \map W {\mathbf A_2} + 7 & \map W {\mathbf A_1} + 3 & \map W {\mathbf A_2} + 3 \\
\neg \paren {\mathbf A_1 \oplus \mathbf A_2} & \mathbf A_1 \implies \mathbf A_2 & \mathbf A_2 \implies \mathbf A_1 & \map W {\mathbf A_1} + \map W {\mathbf A_2} + 8 & \map W {\mathbf A_1} + 3 & \map W {\mathbf A_2} + 3 \\
\hline
\end{array}$

Now presume a $\beta$-formula $\mathbf B$ from $\map U t$ is picked.
Looking at the mutations from $\map U t$ to $\map U {t'}$, it follows that the claim is reduced to:

$\map W {\mathbf B_1}, \map W {\mathbf B_2} < \map W {\mathbf B}$
This claim can be verified by looking up the appropriate row in the following extension of the table of $\beta$-formulas:

$\begin{array}{ccc||ccc}
\hline
\mathbf B & \mathbf B_1 & \mathbf B_2 & \map W {\mathbf B} & \map W {\mathbf B_1} & \map W {\mathbf B_2} \\
\hline
\neg \paren {\mathbf B_1 \land \mathbf B_2} & \neg \mathbf B_1 & \neg \mathbf B_2 & \map W {\mathbf B_1} + \map W {\mathbf B_2} + 4 & \map W {\mathbf B_1} + 1 & \map W {\mathbf B_2} + 1 \\
\mathbf B_1 \lor \mathbf B_2 & \mathbf B_1 & \mathbf B_2 & \map W {\mathbf B_1} + \map W {\mathbf B_2} + 3 & \map W {\mathbf B_1} & \map W {\mathbf B_2} \\
\mathbf B_1 \implies \mathbf B_2 & \neg \mathbf B_1 & \mathbf B_2 & \map W {\mathbf B_1} + \map W {\mathbf B_2} + 3 & \map W {\mathbf B_1} + 1 & \map W {\mathbf B_2} \\
\mathbf B_1 \mathbin \uparrow \mathbf B_2 & \neg \mathbf B_1 & \neg \mathbf B_2 & \map W {\mathbf B_1} + \map W {\mathbf B_2} + 3 & \map W {\mathbf B_1} + 1 & \map W {\mathbf B_2} + 1 \\
\neg \paren {\mathbf B_1 \mathbin \downarrow \mathbf B_2} & \mathbf B_1 & \mathbf B_2 & \map W {\mathbf B_1} + \map W {\mathbf B_2} + 4 & \map W {\mathbf B_1} & \map W {\mathbf B_2} \\
\neg \paren {\mathbf B_1 \iff \mathbf B_2} & \neg \paren {\mathbf B_1 \implies \mathbf B_2} & \neg \paren {\mathbf B_2 \implies \mathbf B_1} & \map W {\mathbf B_1} + \map W {\mathbf B_2} + 8 & \map W {\mathbf B_1} + 4 & \map W {\mathbf B_2} + 4 \\
\mathbf B_1 \oplus \mathbf B_2 & \neg \paren {\mathbf B_1 \implies \mathbf B_2} & \neg \paren {\mathbf B_2 \implies \mathbf B_1} & \map W {\mathbf B_1} + \map W {\mathbf B_2} + 7 & \map W {\mathbf B_1} + 4 & \map W {\mathbf B_2} + 4 \\
\hline
\end{array}$

Because of the strictly decreasing nature of $\map W t$, it must be that eventually, all leaves of $T$ cannot be extended further.
A leaf $t$ cannot be extended if and only if $\map U t$ comprises only literals.
These finitely many leaves will be marked by Step $3$ of the Semantic Tableau Algorithm.

In conclusion, the Semantic Tableau Algorithm terminates, yielding a semantic tableau with only marked leaves.
$\blacksquare$


References

↑ In Mathematical Logic for Computer Science, 3rd ed. of $2012$, M. Ben-Ari omits the $4 \, \map i t$ term. However, as one can verify, this compromises the $\iff$ and $\neg \oplus$ cases for $\alpha$-formulas.




Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.6.3$: Theorem $2.66$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.10$: Exercise $2.18$





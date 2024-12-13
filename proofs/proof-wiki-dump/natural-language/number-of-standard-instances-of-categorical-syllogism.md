# 

Source: https://proofwiki.org/wiki/Number_of_Standard_Instances_of_Categorical_Syllogism

Theorem
There are $256$ distinct standard instances of the categorical syllogism.


Proof
Recall the four figures of the categorical syllogism:

$\begin{array}{r|rl}
\text I & & \\
\hline \\
\text{Major Premise}: & \mathbf \Phi_1 & \tuple {M, P} \\
\text{Minor Premise}: & \mathbf \Phi_2 & \tuple {S, M} \\
\hline \\
\text{Conclusion}: & \mathbf \Phi_3 & \tuple {S, P} \\
\end{array}
\qquad
\begin{array}{r|rl}
\text {II} & & \\
\hline \\
\text{Major Premise}: & \mathbf \Phi_1 & \tuple {P, M} \\
\text{Minor Premise}: & \mathbf \Phi_2 & \tuple {S, M} \\
\hline \\
\text{Conclusion}: & \mathbf \Phi_3 & \tuple {S, P} \\
\end{array}$


$\begin{array}{r|rl}
\text {III} & & \\
\hline \\
\text{Major Premise}: & \mathbf \Phi_1 & \tuple {M, P} \\
\text{Minor Premise}: & \mathbf \Phi_2 & \tuple {M, S} \\
\hline \\
\text{Conclusion}: & \mathbf \Phi_3 & \tuple {S, P} \\
\end{array}
\qquad
\begin{array}{r|rl}
\text {IV} & & \\
\hline \\
\text{Major Premise}: & \mathbf \Phi_1 & \tuple {P, M} \\
\text{Minor Premise}: & \mathbf \Phi_2 & \tuple {M, S} \\
\hline \\
\text{Conclusion}: & \mathbf \Phi_3 & \tuple {S, P} \\
\end{array}$

By the definition of a categorical syllogism, the following are fixed:

$(1): \quad$ The order of the categorical statements: major premise, then minor premise, then conclusion.
$(2): \quad$ The structure of the conclusion: the secondary term then the primary term.
$(3): \quad$ The content of the two premises: the major premise contains the primary term and the middle term, while the minor premise contains the middle term and the secondary term.

The things that can be varied are:

$(A): \quad$ The specific nature of each of the categorical statements: each can be any of four types: $\mathbf A$, $\mathbf E$, $\mathbf I$ or $\mathbf O$.
$(B): \quad$ Within the major and minor premises, the order of the two terms: the middle term can come either first or second.

The order of the terms within the premises determines the figure of the categorical syllogism.
For each of the two premises there are two options for the position of the middle term.
By the Product Rule for Counting it follows that there are $2 \times 2 = 4$ figures.

In each figure, there are $3$ categorical statements.
Each can be of any of $4$ types.
Hence by the Product Rule for Counting, there are $4 \times 4 \times 4 = 64$ possible standard instances for each figure.

For all $4$ figures, by the Product Rule for Counting, it follows that there are $4 \times 64 = 256$ standard instances in total.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $4$ The Syllogism
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): syllogism
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): syllogism





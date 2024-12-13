# 

Source: https://proofwiki.org/wiki/Inequality_Rule_for_Real_Sequences/Proof_2

Theorem
Let $\sequence {x_n}$ and $\sequence {y_n}$ be sequences in $\R$.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be convergent to the following limits:














\(\ds \lim_{n \mathop \to \infty} x_n\)

\(=\)







\(\ds l\)




















\(\ds \lim_{n \mathop \to \infty} y_n\)

\(=\)







\(\ds m\)










Let there exist $N \in \N$ such that:

$\forall n \ge N: x_n \le y_n$
Then:

$l \le m$


Proof
Consider the sequence $\sequence {z_n}$ defined by:

$z_n := y_n - x_n$
From Sum Rule for Real Sequences:

$z_n \to m - l$ as $n \to \infty$
Furthermore, the assumption that $x_n \le y_n$ for all $n \in \N$ means that:

$\forall n \in \N: z_n \ge 0$

Applying the Lower and Upper Bounds for Sequences to the sequence $\sequence {z_n}$ leads to the conclusion that $m - l \ge 0$.
That is:

$l \le m$
$\blacksquare$


Also known as
The Inequality Rule for Real Sequences is also presented on $\mathsf{Pr} \infty \mathsf{fWiki}$ as:

Limits Preserve Inequalities
Inequality of Sequences Preserved in Limit





# 

Source: https://proofwiki.org/wiki/Cantor_Set_has_Zero_Lebesgue_Measure

Theorem
Let $\CC$ be the Cantor set.
Let $\lambda$ denote the Lebesgue measure on the Borel $\sigma$-algebra $\map \BB \R$ on $\R$.

Then $\CC$ is $\map \BB \R$-measurable, and $\map \lambda \CC = 0$.
That is, $\CC$ is a $\lambda$-null set.


Proof
Consider the definition of $\CC$ as a limit of a decreasing sequence.
In the notation as introduced there, we see that each $S_n$ is a collection of disjoint closed intervals.
From Closed Set Measurable in Borel Sigma-Algebra, these are measurable sets.

Furthermore, each $S_n$ is finite.
Hence by Sigma-Algebra Closed under Union, it follows that $C_n := \ds \bigcup S_n$ is measurable as well.

Then, as we have:

$\CC = \ds \bigcap_{n \mathop \in \N} C_n$
it follows from Sigma-Algebra Closed under Countable Intersection that $\CC$ is measurable.

The $C_n$ also form a decreasing sequence of sets with limit $\CC$.
Thus, from Characterization of Measures: $(3')$, it follows that:

$\map \lambda \CC = \ds \lim_{n \mathop \to \infty} \map \lambda {C_n}$

It is not too hard to show that, for all $n \in \N$:

$\map \lambda {C_n} = \paren {\dfrac 2 3}^n$

This needs considerable tedious hard slog to complete it.In particular: yes, I knowTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

Now we have by Sequence of Powers of Number less than One that:

$\ds \lim_{n \mathop \to \infty} \paren {\frac 2 3}^n = 0$
and the result follows.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 7$: Problem $10 \ \text{(iv)}$





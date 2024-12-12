# 

Source: https://proofwiki.org/wiki/Dirichlet%27s_Test_for_Uniform_Convergence



Theorem
Let $D$ be a set.
Let $\struct {V, \norm {\,\cdot\,} }$ be a normed vector space.
Let $a_i, b_i$ be mappings from $D \to M$.


This article, or a section of it, needs explaining.In particular: What is $M$? Should be $V$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Let the following conditions be satisfied:

$(1): \quad$ The sequence of partial sums of $\ds \sum_{n \mathop = 1}^\infty \map {a_n} x$ be bounded on $D$
$(2): \quad \sequence {\map {b_n} x}$ be monotonic for each $x \in D$

This article, or a section of it, needs explaining.In particular: But $V$ is not ordered. Need to assume $V=\R$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$(3): \quad \map {b_n} x \to 0$ converge uniformly on $D$.

Then:

$\ds \sum_{n \mathop = 1}^\infty \map {a_n} x \map {b_n} x$ converges uniformly on $D$.


Proof
Suppose $\map {b_n} x \ge \map {b_{n + 1} } x$ for each $x \in D$.
All we need to show is that:

$\ds \sum_{n \mathop = 1}^\infty \size {\map {b_n} x - \map {b_{n + 1} } x}$
converges uniformly on $D$.


This article, or a section of it, needs explaining.In particular: Why is the above sufficient? On the surface of it, no reference has been made to $\map {a_n} x$. Its connection to the above statement needs to be clarified.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
To do this we show that the Cauchy criterion holds.
Assign $\epsilon < 0$.
Then by definition of uniform convergence:

$\exists N \in \N: \forall x \in D: \forall n \ge N: \size {\map {b_n} x} < \dfrac \epsilon 2$
Let $x \in D$ and $n > m \ge N$.
Then:














\(\ds \sum_{k \mathop = m + 1}^n \size {\map {b_k} x - \map {b_{k + 1} } x}\)

\(=\)







\(\ds \sum_{k \mathop = m + 1}^n \paren {\map {b_k} x - \map {b_{k + 1} } x}\)




















\(\ds \)

\(=\)







\(\ds \map {b_{m + 1} } x - \map {b_{n + 1} } x\)




















\(\ds \)

\(=\)







\(\ds \size {\map {b_{m + 1} } x - \map {b_{n + 1} } x}\)




















\(\ds \)

\(\le\)







\(\ds \size {\map {b_{m + 1} } x + \map {b_{n + 1} } x}\)




















\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









$\blacksquare$


Also known as
Dirichlet's Test for Uniform Convergence is also known just as Dirichlet's Test.


Source of Name
This entry was named for Johann Peter Gustav Lejeune Dirichlet.


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.28$: Dirichlet ($\text {1805}$ – $\text {1859}$)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Dirichlet's test
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Dirichlet's test
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Dirichlet's test





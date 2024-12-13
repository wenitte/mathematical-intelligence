# 

Source: https://proofwiki.org/wiki/Hilbert_Cube_is_Arc-Connected

Theorem
Let $M = \struct {I^\omega, d_2}$ be the Hilbert cube.

Then $M$ is an arc-connected space.


Proof
Let $x = \sequence {x_i}$ and $y = \sequence {y_i}$.
Consider the mapping $f: \closedint 0 1 \to I^\omega$ defined as:

$\forall t \in \closedint 0 1: \map f t = t x + \paren {1 - t} y = \sequence {t x_i + \paren {1 - t} y_i}$















\(\ds \sum_{i \mathop \ge 0} \paren {t x_i + \paren {1 - t} y_i}^2\)

\(=\)







\(\ds \sum_{i \mathop \ge 0} \paren {t^2 x_i^2 + \paren {1 - t}^2 y_i^2 + 2 t \paren {1 - t} x_i y_i}\)




















\(\ds \)

\(=\)







\(\ds t^2 \sum_{i \mathop \ge 0} x_i^2 + \paren {1 - t}^2 \sum_{i \mathop \ge 0} y_i^2 + 2 t \paren {1 - t} \sum_{i \mathop \ge 0} x_i y_i\)









which is convergent.


This article, or a section of it, needs explaining.In particular: Find the appropriate rules to prove the above statement.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then $f$ is an injective path joining $x$ to $y$.
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $38$. Hilbert Cube: $5$




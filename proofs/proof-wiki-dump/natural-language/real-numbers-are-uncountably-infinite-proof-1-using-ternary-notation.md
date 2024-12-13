# 

Source: https://proofwiki.org/wiki/Real_Numbers_are_Uncountably_Infinite/Proof_1_using_Ternary_Notation

Theorem
The set of real numbers $\R$ is uncountably infinite.


Proof
It is sufficient to show that the real interval $I = \set {x \in \R: 0 < x \le 1}$ is uncountable.
Let $x \in I$.
From Existence of Base-N Representation, $x$ has a unique representation of the form:

$x = \dfrac {\epsilon_1} 3 + \dfrac {\epsilon_2} {3^2} + \dfrac {\epsilon_3} {3^3} + \cdots$
where $\epsilon_k = 0, 1$ or $2$ and an infinite number of $\epsilon_k$ are different from $0$.
Let $S \subseteq I$ be countably infinite.
Let $S = \set {x_1, x_2, \ldots}$.
Let $\epsilon_{k 1}, \epsilon_{k 2}, \epsilon_{k 3}, \ldots$ be the ternary digits of $x_k$.
Let $\epsilon_k = 1 + 2 \epsilon_{k k} - \epsilon_{k k}^2$ so that:

$\epsilon_k = 1$ if $\epsilon_{k k} = 0$ or $\epsilon_{k k} = 2$
$\epsilon_k = 2$ if $\epsilon_{k k} = 1$
Then:

$(1): \quad \forall k: \epsilon_k \ne 0$
$(2): \quad \forall k: \epsilon_k \ne \epsilon_{k k}$
We have that $0 < x \le 1$ so $x \in I$.
But the real number $\displaystyle x = \sum \epsilon_k 3^{-k}$ is different from every $x_k \in I$.
Thus we have found an element of $I$ which is not an element of $S$.
Therefore $S$ is a proper subset of $I$.
It follows by definition that $I$ is uncountable.
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Introduction to Set Theory: $2$. Set Theoretical Equivalence and Denumerability





# 

Source: https://proofwiki.org/wiki/Remainder_is_Arithmetically_Definable


This article needs to be linked to other articles.In particular: CategoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\operatorname{rem}: \N^2 \to \N$ be defined as:

$\map \rem {n, m} = \begin{cases}
\text{the remainder when } n \text{ is divided by } m & : m \ne 0 \\
0 & : m = 0
\end{cases}$
where the $\text{remainder}$ is as defined in the Division Theorem:

If $n = m q + r$, where $0 \le r < m$, then $r$ is the remainder.
Then there exists a $\Sigma_1$ WFF of $3$ free variables:

$\map \phi {r, n, m}$
such that:

$r = \map \rem {n, m} \iff \N \models \map \phi {\sqbrk r, \sqbrk n, \sqbrk m}$
where $\sqbrk a$ denotes the unary representation of $a \in \N$.


Proof
Define:

$\map \phi {r, n, m} := \paren {m = 0 \land r = 0} \lor \paren {m \ne 0 \land r < m \land \exists q: n = \paren {m \times q} + r}$

Suppose $m = 0$.
Then, only the first case:

$m = 0 \land r = 0$
can possibly hold.
Therefore, the formula holds if and only if $r = 0$, which matches the definition.

Suppose $m \ne 0$.
Then, only the second case:

$m \ne 0 \land r < m \land \exists q: n = \paren {m \times q} + r$
can possibly hold.
But:

$r < m \land \exists q: n = \paren {m \times q} + r$
is the definition of $r$.
Therefore, in all cases:

$r = \map \rem {n, m} \iff \N \models \map \rem {\sqbrk r, \sqbrk n, \sqbrk m}$
$\Box$

Finally, that $\phi$ is $\Sigma_1$ follows from:

Conjunction of Existential Quantifier
Existential Quantifier Distributes over Disjunction
$\blacksquare$






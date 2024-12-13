# 

Source: https://proofwiki.org/wiki/Principle_of_Recursive_Definition/Proof_3

Theorem
Let $\N$ be the natural numbers.
Let $T$ be a class (which may be a set).
Let $a \in T$.
Let $g: T \to T$ be a mapping.

Then there exists exactly one mapping $f: \N \to T$ such that:

$\forall x \in \N: \map f x = \begin{cases}
a & : x = 0 \\
\map g {\map f n} & : x = n + 1
\end{cases}$


Proof
Recall the general result:
Let $p \in \N$.
Let $p^\ge$ be the upper closure of $p$ in $\N$:

$p^\ge := \set {x \in \N: x \ge p} = \set {p, p + 1, p + 2, \ldots}$

Then there exists exactly one mapping $f: p^\ge \to T$ such that:

$\forall x \in p^\ge: \map f x = \begin{cases}
a & : x = p \\
\map g {\map f n} & : x = n + 1
\end{cases}$

The result follows from setting $p = 0$.
$\blacksquare$






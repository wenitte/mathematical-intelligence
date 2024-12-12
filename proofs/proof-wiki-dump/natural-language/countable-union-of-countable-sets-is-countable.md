# 

Source: https://proofwiki.org/wiki/Countable_Union_of_Countable_Sets_is_Countable



Theorem
Let the Axiom of Countable Choice be accepted.
Then it can be proved that a countable union of countable sets is countable.


Informal Proof
Consider the countable sets $S_0, S_1, S_2, \ldots$ where $\ds S = \bigcup_{i \mathop \in \N} {S_i}$.
Assume that none of these sets have any elements in common.
Otherwise, we can consider the sets $S_0' = S_0, S_1' = S_1 \setminus S_0, S_2' = S_2 \setminus \paren {S_0 \cup S_1}, \ldots$
All of these are countable by Subset of Countable Set‎ is Countable, and they have the same union $\ds S = \bigcup_{i \mathop \in \N} {S_i'}$.
Now we write the elements of $S_0', S_1', S_2', \ldots$ in the form of a (possibly infinite) table:

$\begin{array} {*{4}c}
{a_{00}} & {a_{01}} & {a_{02}} & \cdots \\
{a_{10}} & {a_{11}} & {a_{12}} & \cdots \\
{a_{20}} & {a_{21}} & {a_{22}} & \cdots \\
\vdots  & \vdots  & \vdots & \ddots \\

\end{array}$

where $a_{ij}$ is the $j$th element of set $S_i$.
This table clearly contains all the elements of $\ds S = \bigcup_{i \mathop \in \N} {S_i}$.
Furthermore, we have that $\phi: S \to \N \times \N, a_{ij} \mapsto \tuple {i, j}$ is an injection.
By Cartesian Product of Countable Sets is Countable, there exists an injection $\psi: \N \times \N \to \N$.
Then $\psi \circ \phi: S \to \N$ is also an injection by Composite of Injections is Injection.
That is to say, $S$ is countable.
$\blacksquare$


Proof 1
Let $\sequence {S_n}_{n \mathop \in \N}$ be a sequence of countable sets.
Define:

$\ds S = \bigcup_{n \mathop \in \N} S_n$

For all $n \in \N$, let $\FF_n$ denote the set of all injections from $S_n$ to $\N$.
Since $S_n$ is countable, $\FF_n$ is non-empty.

Using the Axiom of Countable Choice, there exists a sequence $\sequence {f_n}_{n \mathop \in \N}$ such that $f_n \in \FF_n$ for all $n \in \N$.
Let $\phi: S \to \N \times \N$, where $\times$ denotes the cartesian product, be the mapping defined by:

$\map \phi x = \tuple {n, \map {f_n} x}$
where $n$ is the (unique) smallest natural number such that $x \in S_n$.
From the Well-Ordering Principle, such an $n$ exists; hence, the mapping $\phi$ exists.
Since each $f_n$ is an injection, it (trivially) follows that $\phi$ is an injection.

Since $\N \times \N$ is countable, there exists an injection $\alpha: \N \times \N \to \N$.
From Composite of Injections is Injection, the mapping $\alpha \circ \phi: S \to \N$ is an injection.
Hence, $S$ is countable.
$\blacksquare$


Proof 2
Let $\sequence {S_n}_{n \mathop \in \N}$ be a sequence of countable sets.
Define:

$\ds S = \bigcup_{n \mathop \in \N} S_n$.

For all $n \in \N$, let $\FF_n$ be the set of all surjections from $\N$ to $S_n$.
Since $S_n$ is countable, it follows by Surjection from Natural Numbers iff Countable that $\FF_n$ is non-empty.

Using the Axiom of Countable Choice, there exists a sequence $\sequence {f_n}_{n \mathop \in \N}$ such that $f_n \in \FF_n$ for all $n \in \N$.
Let $\phi: \N \times \N \to S$, where $\times$ denotes the cartesian product, be the surjection defined by:

$\map \phi {m, n} = \map {f_m} n$

Since $\N \times \N$ is countable, it follows by Surjection from Natural Numbers iff Countable that there exists a surjection $\alpha: \N \to \N \times \N$.
Since the composition of surjections is a surjection, the mapping $\phi \circ \alpha: \N \to S$ is a surjection.
By Surjection from Natural Numbers iff Countable, it follows that $S$ is countable.
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Introduction to Set Theory: $2$. Set Theoretical Equivalence and Denumerability
1973: Thomas J. Jech: The Axiom of Choice ... (previous) ... (next): $1.$ Introduction: $1.4$ Problems: $6$
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: Exercises: $1.12$





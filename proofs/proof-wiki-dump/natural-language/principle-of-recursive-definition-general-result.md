# 

Source: https://proofwiki.org/wiki/Principle_of_Recursive_Definition/General_Result



Theorem
Let $\N$ be the natural numbers.
Let $T$ be a class (which may be a set).
Let $a \in T$.
Let $g: T \to T$ be a mapping.
Let $p \in \N$.
Let $p^\ge$ be the upper closure of $p$ in $\N$:

$p^\ge := \set {x \in \N: x \ge p} = \set {p, p + 1, p + 2, \ldots}$

Then there exists exactly one mapping $f: p^\ge \to T$ such that:

$\forall x \in p^\ge: \map f x = \begin{cases}
a & : x = p \\
\map g {\map f n} & : x = n + 1
\end{cases}$


Proof
Consider $\N$, defined as a naturally ordered semigroup $\struct {S, \circ, \preceq}$.
For simplicity, let $S' = p^\ge$.

First an admissible mapping is defined.
Let $n \in S'$.
The mapping $h: \closedint p n \to T$ is defined as an admissible mapping for $n$ if and only if:

$\forall r \in \closedint p n: \map h r = \begin{cases}
a & : r = p \\
\map g {\map h y} & : r = y \circ 1
\end{cases}$
where $\closedint p n$ denotes an integer interval of $S$:

$\closedint p n = \set {r \in S: p \le r \le n}$

Define:

$A = \set {x \in S': x \text { has exactly one admissible mapping} }$
We now use the Principle of Mathematical Induction for a Naturally Ordered Semigroup to prove that $A = S'$.


Basis for the Induction
Consider the integer interval $\closedint p p = \set p$.
Let the mapping $h_p: \set p \to T$ be defined as:

$\map {h_p} p = a$
By definition, $h_p$ is the unique admissible mapping for $p$.
Thus $p \in A$.
This is the basis for the induction.


Induction Hypothesis
Let $n \in A$ such that $p \le n$.
That is, there exists a unique admissible mapping for $n$.
This is the induction hypothesis.


Induction Step
From the induction hypothesis:

Let $h$ be the unique admissible mapping for $n$.

By Sum with One is Immediate Successor in Naturally Ordered Semigroup:

$n \circ 1 \notin \closedint p n$
So by Closed Interval of Naturally Ordered Semigroup with Successor equals Union with Successor:

$\closedint p {n \circ 1} = \closedint p n \cup \set {n \circ 1}$

So we can define a mapping $\phi: \closedint p {n \circ 1} \to T$ by:

$\forall r \in \closedint p {n \circ 1}: \map \phi r = \begin{cases}
\map h r & : r \in \closedint p n \\
\map g {\map h n} & : r = n \circ 1
\end{cases}$
By definition, $\phi$ is an admissible mapping for $n \circ 1$.

Let $\phi'$ be an admissible mapping for $n \circ 1$.
Uniqueness of $\phi$ is then proved by showing that $\phi' = \phi$, as follows.

The restriction of $\phi'$ to $\closedint p n $ is an admissible mapping for $n$
Thus by the induction hypothesis:

$\phi' {\restriction_{\closedint p n} } = \phi {\restriction_{\closedint p n} }$

It follows that:














\(\ds \map {\phi'} {n \circ 1}\)

\(=\)







\(\ds \map g {\map {\phi'} n}\)




















\(\ds \)

\(=\)







\(\ds \map g {\map h n}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {n \circ 1}\)









Thus as:

$\phi' {\restriction_{\closedint p n} } = \phi {\restriction_{\closedint p n} }$
and:

$\map {\phi'} {n \circ 1} = \map \phi {n \circ 1}$
it follows by Equality of Mappings that:

$\phi' = \phi$
Thus:

$n \circ 1 \in A$
Thus by the Principle of Mathematical Induction for a Naturally Ordered Semigroup it follows that:

$A = S'$

For all $n \in S'$, let $h_n$ be the unique admissible mapping for $n$.
Let $n \ge p$.
The restriction of $h_{n \circ 1}$ to $\closedint p n$ is an admissible mapping for $n$.
Therefore:

$h_{n \circ 1} {\restriction_{\closedint p n} } = h_n$
So:

$\forall r \in \closedint p n: \map {h_{n \circ 1} } r = \map {h_n} r$
and in particular:

$\map {h_{n \circ 1} } n = \map {h_n} n$

Let $f: S' \to T$ be the mapping defined as:

$\forall n \in S': \map f n = \map {h_n} n$
Then:

$\map f p = \map {h_p} p = a$
and, for all $n \in S'$:














\(\ds \map f {n \circ 1}\)

\(=\)







\(\ds \map {h_{n \circ 1} } {n \circ 1}\)




















\(\ds \)

\(=\)







\(\ds \map g {\map {h_{n \circ 1} } n}\)




















\(\ds \)

\(=\)







\(\ds \map g {\map {h_n} n}\)




















\(\ds \)

\(=\)







\(\ds \map g {\map f n}\)









Thus $f: S' \to T$ is a mapping with the desired properties.

Let $f'$ be any mapping satisfying the desired properties. 
It remains to be proved that:

$f' = f$
that is, that $f$ is the only mapping with the desired properties.

By the foregoing, for all $n \in S'$, the restriction of $f'$ to $\closedint p n$ is an admissible mapping for $n$.
Therefore:

$f' = h_n$
So:

$\forall n \in S': \map {f'} n = \map {h_n} n = \map f n$
and the proof is complete.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.6$
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 8$ Definition by finite recursion: Exercise $8.2$





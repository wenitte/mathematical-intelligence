# 

Source: https://proofwiki.org/wiki/Index_Laws_for_Monoids/Product_of_Indices


It has been suggested that this page be renamed.In particular: Should have invertible elements referenced in its nameTo discuss this page in more detail, feel free to use the talk page.

It has been suggested that this page or section be merged into Index Laws/Product of Indices/Monoid.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let $\struct {S, \circ}$ be a monoid whose identity is $e_S$.
Let $a \in S$ be invertible for $\circ$.
Let $n \in \N$.
Let $a^n = \map {\circ^n} a$ be defined as the power of an element of a monoid:

$a^n = \begin{cases}
e_S : & n = 0 \\
a^x \circ a : & n = x + 1
\end{cases}$
that is:

$a^n = \underbrace {a \circ a \circ \cdots \circ a}_{n \text { instances} } = \map {\circ^n} a$

For each $n \in \N$ we define:

$a^{-n} = \paren {a^{-1} }^n$
Then:

$\forall m, n \in \Z: a^{n m} = \paren {a^m}^n = \paren {a^n}^m$


Proof
Let $m \in \N, c = a^m, d = \paren {a^{-1}}^m$.
We define the mapping $g_c: \Z \to S$ as:

$\forall n \in \Z: \map {g_c} n = \map {\circ^n} c$
as defined in the proof of the Index Law for Sum of Indices.
Let $h: \Z \to \Z$ be the mapping defined as:

$\forall z \in \Z: \map h z = z m$
Then:














\(\ds a^{n m}\)

\(=\)







\(\ds \map {\paren {g_a \circ h} } n\)




















\(\ds \paren {a^m}^n\)

\(=\)







\(\ds \map {g_c} n\)










By Index Law for Sum of Indices and Index Laws for Semigroup: Product of Indices, $g_a \circ h$ and $g_c$ are homomorphisms from $\Z$ to $S$ which coincide on $\N$.
So by the Extension Theorem for Homomorphisms:

$g_a \circ h = g_c$
Therefore:

$\forall n \in \Z, m \in \N: a^{n m} = \paren {a^m}^n$

Also:














\(\ds a^{n \paren {-m} }\)

\(=\)







\(\ds a^{-\paren {n m} }\)




















\(\ds \)

\(=\)







\(\ds \paren {a^{-1} }^{n m}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {g_{a^{-1} } \circ h} } n\)









and:














\(\ds \paren {a^{-m} }^n\)

\(=\)







\(\ds \paren {\paren {a^{-1} }^m}^n\)




















\(\ds \)

\(=\)







\(\ds \map {g_d} n\)










So, by the same reasoning as before:

$g_{a^{-1} } \circ h = g_d$
Therefore:

$\forall n \in \Z, m \in \N: a^{n \paren {-m}} = \paren {a^{-m}}^n$

Thus:

$\forall n, m \in \Z: a^{n m} = \paren {a^m}^n$

As $n m = m n$, the result follows.
$\blacksquare$


Source of Name
The name index laws originates from the name index to describe the exponent $y$ in the power $x^y$.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.11 \ (3)$
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$: Semigroups, Monoids and Groups: Theorem $1.9 \text{(ii)}$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.1$: Monoids





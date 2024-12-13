# 

Source: https://proofwiki.org/wiki/Index_Laws_for_Monoids/Sum_of_Indices


It has been suggested that this page be renamed.In particular: Should have invertible elements referenced in its nameTo discuss this page in more detail, feel free to use the talk page.

It has been suggested that this page or section be merged into Index Laws/Sum of Indices/Monoid.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let $\struct {S, \circ}$ be a monoid whose identity is $e_S$.
Let $a \in S$ be invertible for $\circ$.
Let $n \in \N$.
Let $a^n = \map {\circ^n} a$ be defined as the power of an element of a monoid:

$a^n = \begin{cases}
e_S : & n = 0 \\
a^x \circ a : & n = x + 1
\end{cases}$
That is:

$a^n = \underbrace {a \circ a \circ \cdots \circ a}_{\text {$n$ instances} } = \map {\circ^n} a$

For each $n \in \N$ we define:

$a^{-n} = \paren {a^{-1} }^n$
Then:

$\forall m, n \in \Z: a^{n + m} = a^n \circ a^m$


Proof
For each $c \in S$ which is invertible for $\circ$, we define the mapping $g_c: \Z \to S$ as:

$\forall n \in \Z: \map {g_c} n = \map {\circ^n} c$
By the Index Law for Monoids: Negative Index, $\map {g_a} n$ is invertible for all $n \in \Z$.
By definition of Power of Element of Monoid, the restriction of $g_a$ to $\N$ is a homomorphism from $\struct {\N, +}$ to $\struct {S, \circ}$.
From the definition of Power of Element of Monoid, $\map {g_a} 0$ is the identity for $\circ$.
Hence, by the Extension Theorem for Homomorphisms, there is a unique homomorphism $h_a: \paren {\N, +} \to \paren {S, \circ}$ which coincides in $\N$ with $g_c$.
But by Homomorphism with Identity Preserves Inverses:










\(\ds \forall n \in \Z_{>0}: \, \)



\(\ds \map {h_a} {-n}\)

\(=\)







\(\ds \paren {\map {h_a} n}^{-1}\)




















\(\ds \)

\(=\)







\(\ds \paren {a^n}^{-1}\)




















\(\ds \)

\(=\)







\(\ds a^{-n}\)




















\(\ds \)

\(=\)







\(\ds \map {g_a} {-n}\)










Hence $h_a = g_a$ and so $g_a$ is a homomorphism and so the result follows.
$\blacksquare$


Source of Name
The name index laws originates from the name index to describe the exponent $y$ in the power $x^y$.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.11 \ (2)$
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$: Semigroups, Monoids and Groups: Theorem $1.9 \text{(i)}$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.1$: Monoids





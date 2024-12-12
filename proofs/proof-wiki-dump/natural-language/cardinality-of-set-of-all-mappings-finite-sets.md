# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_of_All_Mappings/Finite_Sets

Theorem
Let $S$ and $T$ be finite sets.
The cardinality of the set of all mappings from $S$ to $T$ (that is, the total number of mappings from $S$ to $T$) is:

$\card {T^S} = \card T^{\card S}$


Proof
Let $\card S = n$ and $\card T = m$.

First suppose that $n = 0$, that is, that $S = \O$.
From Cardinality of Set of All Mappings from Empty Set:

$\card {T^\O} = 1 = m^0$
and the result is seen to hold for $n = 0$.

Next, suppose that $m = 0$, that is, that $T = \O$.
From Cardinality of Set of All Mappings to Empty Set:

$\card {\O^S} = \begin {cases}
1 & : S = \O \\ 
0 & : S \ne \O
\end {cases}$
So if $n > 0$:

$\card {\O^S} = 0 = 0^n$
and if $n = 0$:

$\card {T^S} = 1 = 0^0 = m^n$
and the result holds.

This fits in with the preferred definition of the value of $0^0$.

Finally, suppose $m > 0$ and $n > 0$.
Let $\sigma: \N_n \to S$ and $\tau: T \to \N_n$ be bijections.
Then the mapping $\Phi: T^S \to \paren {\N_m}^{\paren {\N_n} }$ defined as:

$\forall f \in T^S: \map \Phi f = \tau \circ f \circ \sigma$
(where $\paren {\N_m}^{\paren {\N_n} }$ is the set of all mappings from $\N_n$ to $\N_m$) is also a bijection.
So we need only consider the case where $S = \N_n$ and $T = \N_m$.

Let $m \in \N_{>0}$.
For each $n \in \N$, let $\Bbb T \paren {n, m}$ be the set of all mappings from $\N_n$ to $\N_m$.
Let:

$\Bbb S = \set {n \in \N: \card {\Bbb T \tuple {n, m} } = m^n}$
We have seen that $0 \in \Bbb S$.
Let $n \in \Bbb S$.
Let $\rho: \Bbb T \tuple {n + 1, m} \to \Bbb T \paren {n, m}$ defined by:

$\forall f \in \Bbb T \tuple {n + 1, m}: \rho \paren f =$ the restriction of $f$ to $\N_n$
Given that $g \in \Bbb T \tuple {n, m}$, and $k \in \N_m$, let $g_k: \N_{n + 1} \to \N_m$ be defined by:

$\forall x \in \N_{n + 1}: \map {g_k} x = \begin {cases}
\map g x & : x \in \N_n \\
k & : x = n
\end {cases}$
Then:

$\rho^{-1} \sqbrk {\set g} = \set {g_0, \ldots, g_{m - 1} }$
Thus $\rho^{-1} \sqbrk {\set g}$ has $m$ elements.
So clearly:

$\set {\rho^{-1} \sqbrk {\set g}: g \in \Bbb T \tuple {n, m} }$
is a partition of $\Bbb T \tuple {n + 1, m}$.
Hence, as $n \in \Bbb S$, the set $\Bbb T \tuple {n + 1, m}$ has $m \cdot m^n = m^{n + 1}$ elements by Number of Elements in Partition.
Thus $n + 1 \in \Bbb S$.
By the Principle of Mathematical Induction:

$\Bbb S = \N$
and the proof is complete.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.2$. Equality of mappings
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 1$: The Language of Set Theory: Exercise $1.9 \ \text{(a)}$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 19$: Combinatorial Analysis: Theorem $19.4$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 9$: Inverse Functions, Extensions, and Restrictions: Exercise $4$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $4 \ \text{(i)}$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: Further exercises: $2$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.10$: Finite Sequences





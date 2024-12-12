# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_of_All_Mappings



Theorem
Let $S$ and $T$ be sets.
The cardinality of the set of all mappings from $S$ to $T$ (that is, the total number of mappings from $S$ to $T$) is:

$\card {T^S} = \card T^{\card S}$


Proof for Finite Sets
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


Proof for Infinite Sets

This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Examples
$2$ Elements to $2$ Elements
Let $X = \set {a, b}$.
Let $Y = \set {u, v}$.

Then the mappings from $X$ to $Y$ are:




\(\text {(1)}: \quad\)









\(\ds \map {f_1} a\)

\(=\)







\(\ds u\)




















\(\ds \map {f_1} b\)

\(=\)







\(\ds v\)














\(\text {(2)}: \quad\)









\(\ds \map {f_2} a\)

\(=\)







\(\ds u\)




















\(\ds \map {f_2} b\)

\(=\)







\(\ds u\)














\(\text {(3)}: \quad\)









\(\ds \map {f_3} a\)

\(=\)







\(\ds v\)




















\(\ds \map {f_3} b\)

\(=\)







\(\ds v\)














\(\text {(4)}: \quad\)









\(\ds \map {f_4} a\)

\(=\)







\(\ds v\)




















\(\ds \map {f_4} b\)

\(=\)







\(\ds u\)










$f_1$ and $f_4$ are bijections.
$f_2$ and $f_3$ are neither surjections nor injections.


$2$ Elements to $3$ Elements
Let $S = \set {1, 2}$.
Let $T = \set {a, b, c}$.
Then the mappings from $S$ to $T$ in two-row notation are:

$\dbinom {1 \ 2} {a \ a}, \dbinom {1 \ 2} {a \ b}, \dbinom {1 \ 2} {a \ c}, \dbinom {1 \ 2} {b \ a}, \dbinom {1 \ 2} {b \ b}, \dbinom {1 \ 2} {b \ c}, \dbinom {1 \ 2} {c \ a}, \dbinom {1 \ 2} {c \ b}, \dbinom {1 \ 2} {c \ c}$
a total of $3^2 = 9$.

All but the first, fifth and last are injections.
None are surjections.


$3$ Elements to $2$ Elements
Let $S = \set {1, 2, 3}$.
Let $T = \set {a, b}$.
Then the mappings from $S$ to $T$ in two-row notation are:

$\dbinom {1 \ 2 \ 3} {a \ a \ a}, \dbinom {1 \ 2 \ 3} {a \ a \ b}, \dbinom {1 \ 2 \ 3} {a \ b \ a}, \dbinom {1 \ 2 \ 3} {a \ b \ b}, \dbinom {1 \ 2 \ 3} {b \ a \ a}, \dbinom {1 \ 2 \ 3} {b \ a \ b}, \dbinom {1 \ 2 \ 3} {b \ b \ a}, \dbinom {1 \ 2 \ 3} {b \ b \ b}$
a total of $2^3 = 8$.

All but the first and last are surjections.
None are injections.


Comment
The question of whether to define $0^0 = 0$ or $0^0 = 1$ keeps students awake arguing for hours.
Here's another argument, in case you're not convinced, for defining $0^0 = 1$ as opposed to $0^0 = 0$ - another result kept nice and neat.






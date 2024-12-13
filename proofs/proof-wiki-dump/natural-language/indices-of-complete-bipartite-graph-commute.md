# 

Source: https://proofwiki.org/wiki/Indices_of_Complete_Bipartite_Graph_Commute

Theorem
Let $G = \struct {A \mid B, E} =: K_{m, n}$ be the complete bipartite graph with $m$ vertices in $A$ and $n$ vertices in $B$.
Then:

$K_{m, n}$ is isomorphic to $K_{n, m}$
for all $m, n \in \N$.


Proof
Let $K_{m, n}$ be represented by the graph $G = \struct {A \mid B, E}$, where $\card A = m$ and $\card B = n$.
Let $K_{n, m}$ be represented by the graph $G' = \struct {A' \mid B', E'}$, where $\card {A'} = n$ and $\card {B'} = m$
Let:














\(\ds A\)

\(=\)







\(\ds \set {a_1, a_2, \ldots, a_m}\)




















\(\ds B\)

\(=\)







\(\ds \set {b_1, b_2, \ldots, b_n}\)




















\(\ds A'\)

\(=\)







\(\ds \set {a_1', a_2', \ldots, a_n'}\)




















\(\ds B'\)

\(=\)







\(\ds \set {b_1', b_2', \ldots, b_n'}\)










First we note that:

$\card {\set {A \mid B} } = \card {\set {A' \mid B'} }$

Let us define the isomorphism $\phi: \set {A \mid B} \to \set {A' \mid B'}$ as follows:

$\forall v \in G: \map \phi v = \begin {cases} b_k' & : v = a_k \\ a_k' & : v = b_k \end {cases}$

It remains to be confirmed that $\phi$ is indeed an isomorphism.

Let $e = \set {u, v} \in E$.
Then:

$\set {\map \phi u, \map \phi v} = \begin {cases} \set {b_i', a_j'} & : \set {u, v} = \set {a_i, b_j} \\ \set {a_i', b_j'} & : \set {u, v} = \set {b_i, a_j} \end {cases}$
We have that:










\(\ds \forall v' \in A': \exists b_i \in B: \, \)



\(\ds \map \phi {a_i}\)

\(=\)







\(\ds b_i\)
















\(\ds \forall v' \in B': \exists a_j \in A: \, \)



\(\ds \map \phi {b_j}\)

\(=\)







\(\ds a_j\)









demonstrating that $\phi$ is a surjection.
It follows from Cardinality of Codomain of Surjection that $\phi$ is a bijection.

Finally we note that:

$\forall v' \in G': \map {\phi^{-1} } {v'} = \begin {cases} b_k & : v' = a_k' \\ a_k & : v' = b_k' \end {cases}$
Hence the result, by definition of isomorphism.
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Four_Color_Theorem_for_Finite_Maps_implies_Four_Color_Theorem_for_Infinite_Maps

Theorem
Suppose that any finite planar graph can be assigned a proper vertex $k$-coloring such that $k \le 4$.

Then the same is true of any infinite planar graph.


Proof
Let $G$ be an infinite planar graph.
Let $C$ be a set of vertices of $G$.
For each $c \in C$ let $p_c^1, p_c^2, p_c^3, p_c^4$ be propositional symbols, where

$p_c^i$ is true if and only if the color of vertex $c$ is $i$.
Let $\PP_0$ be the vocabulary defined as:

$\PP_0 = \set {p_c^1, p_c^2, p_c^3, p_c^4: c \in C}$
Let $\mathbf H$ be the set of all statements with the following forms:

$(1): \quad$ $p_c^1 \lor p_c^2 \lor p_c^3 \lor p_c^4$ for each $c \in C$
$(2): \quad$ $p_c^i \implies \neg p_c^j$ for each $c \in C$ and for each $i \ne j$
$(3): \quad$ $\neg \paren {p_c^i \land \neg p_{c'}^i}$ for each $i$ where $c$ and $c'$ are adjacent.
Let $\MM$ be a model for $\mathbf H$ which corresponds to a proper vertex $4$-coloring of $G$.
By hypothesis, any finite planar graph can be assigned a proper vertex $4$-coloring.
Thus every finite subgraph of $G$ has a proper vertex $4$-coloring.
That is, every finite subset of $\mathbf H$ has a model.
By the Compactness Theorem for Boolean Interpretations, $\mathbf H$ has a model.
Hence the entirety of $G$ can be assigned a proper vertex $k$-coloring.
$\blacksquare$


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.11$: Compactness
2009: Kenneth Kunen: The Foundations of Mathematics ... (previous) ... (next): $\text{II}.7$ First-Order Logic Semantics: Exercise $\text{II}.7.19$





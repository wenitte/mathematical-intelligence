# 

Source: https://proofwiki.org/wiki/Pullback_of_Quotient_Group_Isomorphism/Examples/Subgroups_of_Index_2

Example of Pullback of Quotient Group Isomorphism
Let $G$ and $H$ be groups.
Let $N$ and $K$ be normal subgroups of $G$ and $H$ respectively such that:

their quotient groups $G / N$ and $H / K$ are isomorphic
their indices are $2$:
$\index G N = \index H K = 2$
Let $\theta: G / N \to H / K$ be an isomorphism.

The pullback of $G$ and $H$ by $\theta$ is a subset of $G \times H$ of the form:

$G \times^\theta H = \set {\tuple {g, h}: \paren {g \in N, h \in K} \text { or } \paren {g \notin N, h \notin K} }$


Proof
As $\index G N = \index H K = 2$, it follows that:

$\order {G / N} = \order {H / K} = 2$
and they are the cyclic group of order $2$.
Let:

$x \in G: x \notin N$
$y \in H: y \notin K$
Then:

$G / N = \gen {x N}$
$H / K = \gen {y K}$
and we have:














\(\ds \map \theta N\)

\(=\)







\(\ds K\)




















\(\ds \map \theta {x N}\)

\(=\)







\(\ds y K\)










Let $\tuple {g, h} \in G \times^\theta H$.
By definition:

$G \times^\theta H = \set {\tuple {g, h}: \map \theta {g N} = h K}$
Let $g \in N$.
Then $g N = N$ and so:

$\map \theta {g N} = h K = K$
So $g \in N \implies h \in K$.

Let $g \notin N$.
Then $g N = x N$ and so:

$\map \theta {g N} = h K = x K$
So $g \notin N \implies h \notin K$.
Hence the result.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $13$: Direct products: Example $13.12$





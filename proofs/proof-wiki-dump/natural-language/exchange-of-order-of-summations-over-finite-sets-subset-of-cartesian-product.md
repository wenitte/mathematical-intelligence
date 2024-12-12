# 

Source: https://proofwiki.org/wiki/Exchange_of_Order_of_Summations_over_Finite_Sets/Subset_of_Cartesian_Product

Theorem
Let $\mathbb A$ be one of the standard number systems $\N, \Z, \Q, \R, \C$.
Let $S, T$ be finite sets.
Let $S \times T$ be their cartesian product.
Let $D\subset S \times T$ be a subset.
Let $\pi_1 : D \to S$ and $\pi_2 : D \to T$ be the restrictions of the projections of $S\times T$.

Then we have an equality of summations over finite sets:

$\ds \sum_{s \mathop \in S} \sum_{t \mathop \in \map {\pi_2} {\map {\pi_1^{-1} } s} } \map f {s, t} = \sum_{t \mathop \in T} \sum_{s \mathop \in \map {\pi_1} {\map {\pi_2^{-1} } t} } \map f {s, t}$

where $\map {\pi_1^{-1} } s$ denotes the inverse image of $s$ under $\pi_1$.


Proof
Define an extension $\overline f$ of $f$ to $S \times T$ by:

$\map {\overline f} {s, t} = \begin{cases}
\map f {s, t} & : \tuple {s, t} \in D \\
0 & : \tuple {s, t} \notin D
\end{cases}$

Then for all $s \in S$, by:

Preimage of Disjoint Union is Disjoint Union
Sum over Disjoint Union of Finite Sets
Summation over Finite Set of Zero:
$\ds \sum_{t \mathop \in \map {\pi_2} {\map {\pi_1^{-1} } s} } \map f {s, t} = \sum_{t \mathop \in T} \map {\overline f} {s, t}$

Thus:

$\ds \sum_{s \mathop \in S} \sum_{t \mathop \in \map {\pi_2} {\map {\pi_1^{-1} } s} } \map f {s, t} = \sum_{s \mathop \in S} \sum_{t \mathop \in T} \map {\overline f} {s, t}$
Similarly:

$\ds \sum_{t \mathop \in T} \sum_{s \mathop \in \map {\pi_1} {\map {\pi_2^{-1} } t} } \map f {s, t} = \sum_{t \mathop \in T} \sum_{s \mathop \in S} \map {\overline f} {s, t}$

By Exchange of Order of Summation over Cartesian Product of Finite Sets, the result follows.
$\blacksquare$






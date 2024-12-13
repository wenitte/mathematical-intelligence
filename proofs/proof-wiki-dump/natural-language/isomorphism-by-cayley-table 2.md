# 

Source: https://proofwiki.org/wiki/Isomorphism_by_Cayley_Table



Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be algebraic structures whose underlying sets are both finite.

Then $\struct {S, \circ}$ and $\struct {T, *}$ are isomorphic if and only if:

a bijection $f: S \to T$ can be found such that:
the Cayley table of $\struct {T, *}$ can be generated from the Cayley table of $\struct {S, \circ}$ by replacing each entry of $S$ with its image under $f$.


Proof
Necessary Condition
Let $S$ and $T$ be isomorphic.
Then by definition there exists an isomorphism $f: S \to T$.
An isomorphism is a bijection by definition.
Thus the existence of the posited bijection has been demonstrated.

By the definition of set equivalence, $S$ and $T$ have the same cardinality.
Let $\card S = \card T = n$.
Let:

$S = \set {s_1, s_2, \ldots, s_n}$
and:

$T = \set {t_1, t_2, \ldots, t_n}$
be such that:

$\forall i \in \set {1, 2, \ldots, n}: \map f {s_i} = t_i$

Let $S \sqbrk {j, k}$ denote the entry of $S$ in row $j$ and column $k$.
Thus:

$S \sqbrk {j, k} = s_j \circ s_k$
for some $s_j, s_k \in S$.

We have that $f$ is an isomorphism.
Thus:

$\map f {S \sqbrk {j, k} } = \map f {s_j} * \map f {s_k}$
But:

$\map f {S \sqbrk {j, k} } = T \sqbrk {j, k}$
$\map f {s_j} = t_j$
$\map f {s_k} = t_k$
Thus the Cayley table of $\struct {T, *}$ has been generated from the Cayley table of $\struct {S, \circ}$ by replacing each entry of $S$ with its image under $f$.
$\Box$


Sufficient Condition
Let there exist a bijection $f: S \to T$ such that the Cayley table of $\struct {T, *}$ can be generated from the Cayley table of $\struct {S, \circ}$ by replacing each entry of $S$ with its image under $f$.
By the definition of set equivalence, $S$ and $T$ have the same cardinality.
Let $\card S = \card T = n$.

Let the rows and columns of the Cayley table of $\left({S, \circ}\right)$ both be numbered from $1$ to $n$.
Let the entries heading the rows and columns be denoted $s_1, s_2, \ldots, s_n$.

Let $S \sqbrk {j, k}$ denote the entry of $S$ in row $j$ and column $k$.
By the method of construction:

$S \sqbrk {j, k} = s_j \circ s_k$
for some $s_j, s_k \in S$.
Let $f$ be used to generate the Cayley table of $\struct {T, *}$ from the Cayley table of $\struct {S, \circ}$.
Then for all $i, j \in \set {1, 2, \ldots, n}$:

$\map f {S \sqbrk {j, k} } = T \sqbrk {j, k}$
$\map f {s_j} = t_j$
$\map f {s_k} = t_k$
But by definition of the Cayley table of $\struct {T, *}$:

$T \sqbrk {j, k} = t_j * t_k$
Thus:

$\forall j, k \in \set {1, 2, \ldots, n}: \map f {s_j \circ s_k} = \map f {s_j} * \map f {s_k}$
demonstrating that $f$ is an isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures





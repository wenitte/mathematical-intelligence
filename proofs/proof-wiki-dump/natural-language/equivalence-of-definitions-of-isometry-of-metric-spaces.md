# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Isometry_of_Metric_Spaces



Theorem
The following definitions of the concept of Isometry in the context of Metric Spaces are equivalent:

Definition 1
Let $M_1 = \tuple {A_1, d_1}$ and $M_2 = \tuple {A_2, d_2}$ be metric spaces or pseudometric spaces.

Let $\phi: A_1 \to A_2$ be a bijection such that:

$\forall a, b \in A_1: \map {d_1} {a, b} = \map {d_2} {\map \phi a, \map \phi b}$

Then $\phi$ is called an isometry.
That is, an isometry is a distance-preserving bijection.

Definition 2
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces or pseudometric spaces.


$M_1$ and $M_2$ are isometric if and only if there exist inverse mappings $\phi: A_1 \to A_2$ and $\phi^{-1}: A_2 \to A_1$ such that:
$\forall a, b \in A_1: \map {d_1} {a, b} = \map {d_2} {\map \phi a, \map \phi b}$
and:
$\forall u, v \in A_2: \map {d_2} {u, v} = \map {d_1} {\map {\phi^{-1} } u, \map {\phi^{-1} } v}$

Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces or pseudometric spaces.
Let $\phi: M_1 \to M_2$ be an isometry.

Then its inverse $\phi^{-1}: M_2 \to M_1$ is likewise an isometry.


Proof
$(1)$ implies $(2)$
Let $\phi: M_1 \to M_2$ be an isometry by definition 1.
Then by definition:

$\phi$ is a bijection such that:
$\forall a, b \in A_1: \map {d_1} {a, b} = \map {d_2} {\map \phi a, \map \phi b}$

By Inverse of Bijection is Bijection, $\phi^{-1}$ is also a bijection.
Thus $\forall a, b \in A_2$ there exists $\map {\phi^{-1} } a$ and $\map {\phi^{-1} } b$ in $A_1$.
From Inverse of Inverse of Bijection:

$\forall a, b \in A_2: \map {d_2} {\map \phi {\map {\phi^{-1} } a}, \map \phi {\map {\phi^{-1} } b} } = \map {d_1} {\map {\phi^{-1} } a, \map {\phi^{-1} } b}$
and so:

$\forall a, b \in A_2: \map {d_2} {a, b} = \map {d_1} {\map {\phi^{-1} } a, \map {\phi^{-1} } b}$

Thus $M_1$ and $M_2$ are isometric by definition 2.
$\Box$


$(2)$ implies $(1)$
Let $M_1$ and $M_2$ be isometric by definition 2.
Then by definition:

there exist inverse mappings $\phi: A_1 \to A_2$ and $\phi^{-1}: A_2 \to A_1$ such that:
$\forall a, b \in A_1: \map {d_1} {a, b} = \map {d_2} {\map \phi a, \map \phi b}$
and:
$\forall u, v \in A_2: \map {d_2} {u, v} = \map {d_1} {\map {\phi^{-1} } u, \map {\phi^{-1} } v}$
By Inverse of Bijection is Bijection, $\phi$ and $\phi^{-1}$ are both bijections.

Thus $\phi: M_1 \to M_2$ is a isometry by definition 1.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S $: Subspaces and Equivalence of Metric Spaces: Theorem $7.4$





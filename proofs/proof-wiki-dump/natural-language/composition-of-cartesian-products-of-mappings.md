# 

Source: https://proofwiki.org/wiki/Composition_of_Cartesian_Products_of_Mappings

Theorem
Let $I$ be an indexing set.
Let $\family {S_\alpha}_{\alpha \mathop \in I}$, $\family {T_\alpha}_{\alpha \mathop \in I}$ and $\family {U_\alpha}_{\alpha \mathop \in I}$ be families of sets all indexed by $I$.

For each $\alpha \in I$, let:

$f_\alpha: S_\alpha \to T_\alpha$ be a mapping
$g_\alpha: T_\alpha \to U_\alpha$ be a mapping.

Let:

$\ds S = \prod_{\alpha \mathop \in I} S_\alpha$
$\ds T = \prod_{\alpha \mathop \in I} T_\alpha$
$\ds U = \prod_{\alpha \mathop \in I} U_\alpha$

Let $f: S \to T$ and $\ds g: T \to U$ be defined as:

$\ds f = \prod_{\alpha \mathop \in I} f_\alpha$
$\ds g = \prod_{\alpha \mathop \in I} g_\alpha$

Then their composition $g \circ f: S \to U$ is: 

$\ds g \circ f: \prod_{\alpha \mathop \in I} g_\alpha \circ f_\alpha$


Proof
First note that for all $\alpha \in I$:

$\Dom {g_\alpha} = \Cdm {f_\alpha} = T_\alpha$
where $\Dom {g_\alpha}$ denotes the domain of $g_\alpha$ and $\Cdm {f_\alpha}$ denotes the codomain of $f_\alpha$.
So $g_\alpha \circ f_\alpha$ is defined for all $\alpha \in I$.

Similarly:

$\Cdm f = \Dom g = T$
and so $g \circ f$ is defined.

Let $\mathbf x \in S$ be arbitrary:

$\mathbf x = \family {x_\alpha \in S_\alpha}_{\alpha \mathop \in I}$
We have that:














\(\ds \map {\paren {g \circ f} } {\mathbf x}\)

\(=\)







\(\ds \map {\prod_{\alpha \mathop \in I} g_\alpha} {\map {\prod_{\alpha \mathop \in I} f_\alpha} {\mathbf x} }\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \map {\prod_{\alpha \mathop \in I} g_\alpha} {\family {\map {f_\alpha} {x_\alpha} }_{\alpha \mathop \in I} }\)





Definition of $\ds \prod_{\alpha \mathop \in I} f_\alpha$














\(\ds \)

\(=\)







\(\ds \family {\map {\paren {g_\alpha \circ f_\alpha} } {x_\alpha} }_{\alpha \mathop \in I}\)




















\(\ds \)

\(=\)







\(\ds \map {\prod_{\alpha \mathop \in I} g_\alpha \circ f_\alpha} {\mathbf x}\)









$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 10$: Arbitrary Products: Exercise $2$





# 

Source: https://proofwiki.org/wiki/Mappings_in_Product_of_Sets_are_Surjections



Theorem
Let $S$ and $T$ be sets.
Let $\struct {P, \phi_1, \phi_2}$ be a product of $S$ and $T$.

Then $\phi_1$ and $\phi_1$ are surjections.


Family of Sets
Let $\family {S_i}_{i \mathop \in I}$ be an indexed family of sets.
Let $\struct {P, \family {\phi_i} _{i \mathop \in I} }$ be a product of $S$ and $T$.

Then for all $i \in I$, $\phi_i$ is a surjection.


Proof
From the definition:

For all sets $X$ and all mappings $f_1: X \to S$ and $f_2: X \to T$ there exists a unique mapping $h: X \to P$ such that:
$\phi_1 \circ h = f_1$
$\phi_2 \circ h = f_2$

Let $X = S$ and let $f_1 = I_S$ where $I_S$ is the identity mapping on $S$.
Then we have:

$\phi_1 \circ h = I_S$
We have from Identity Mapping is Surjection that $I_S$ is a surjection.
From Surjection if Composite is Surjection it follows that $\phi_1$ is a surjection.

Similarly, let $X = T$ and let $f_2 = I_T$ where $I_T$ is the identity mapping on $T$.
Then we have:

$\phi_2 \circ h = I_T$
We have from Identity Mapping is Surjection that $I_T$ is a surjection.
From Surjection if Composite is Surjection it follows that $\phi_2$ is a surjection.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.11$





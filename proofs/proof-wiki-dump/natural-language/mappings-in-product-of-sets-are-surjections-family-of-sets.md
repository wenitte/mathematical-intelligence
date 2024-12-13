# 

Source: https://proofwiki.org/wiki/Mappings_in_Product_of_Sets_are_Surjections/Family_of_Sets

Theorem
Let $\family {S_i}_{i \mathop \in I}$ be an indexed family of sets.
Let $\struct {P, \family {\phi_i} _{i \mathop \in I} }$ be a product of $S$ and $T$.

Then for all $i \in I$, $\phi_i$ is a surjection.


Proof
From the definition:

For all sets $X$ and all indexed families $\family {f_i}_{i \mathop \in I}$ of mappings $f_i: X \to S_i$ there exists a unique mapping $h: X \to P$ such that:
$\forall i \in I: \phi_i \circ h = f_i$
Let:

$i \in I$
$X = S_i$
$f_i = I_{S_i}$
where $I_{S_i}$ is the identity mapping on $S_i$.
Then we have:

$\phi_i \circ h = I_{S_i}$
From Identity Mapping is Surjection:

$I_{S_i}$ is a surjection.
From Surjection if Composite is Surjection:

$\phi_i$ is a surjection.
$i \in I$ is arbitrary so the argument applies whatever its value.
Hence the result.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations





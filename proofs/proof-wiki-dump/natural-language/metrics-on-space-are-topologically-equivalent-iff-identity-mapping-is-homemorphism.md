# 

Source: https://proofwiki.org/wiki/Metrics_on_Space_are_Topologically_Equivalent_iff_Identity_Mapping_is_Homemorphism



Theorem
Let $M_1 = \struct {A, d_1}$ and $M_2 = \struct {A, d_2}$ be metric spaces on the same underlying set $A$.
Let $I_A$ denote the identity mapping on $A$.
Then:

$d_1$ and $d_2$ are topologically equivalent
if and only if:

$I_A: M_1 \to M_2$ is a homeomorphism.


Proof
First we establish the following:
From Identity Mapping is Bijection, we have that $I_A$ is a bijection.
From Inverse of Identity Mapping, $\paren {I_A}^{-1} = I_A$.
By Identity Mapping on Metric Space is Continuous:

$(1): \quad I_A$ is a $\tuple {d_1, d_1}$-continuous mapping.
$(2): \quad I_A^{-1} = I_A$ is a $\tuple {d_2, d_2}$-continuous mapping.


Sufficient Condition
Let $d_1$ and $d_2$ be topologically equivalent.
Hence, by definition:

For all metric spaces $\struct {B, d}$ and $\struct {C, d'}$:
For all mappings $f: B \to A$ and $g: A \to C$:
$(1): \quad f$ is $\tuple {d, d_1}$-continuous if and only if $f$ is $\tuple {d, d_2}$-continuous
$(2): \quad g$ is $\tuple {d_1, d'}$-continuous if and only if $g$ is $\tuple {d_2, d'}$-continuous.
In particular, for all mappings $f: A \to A$ and $g: A \to A$:

$(1): \quad f$ is $\tuple {d_2, d_1}$-continuous if and only if $f$ is $\tuple {d_2, d_2}$-continuous
$(2): \quad g$ is $\tuple {d_1, d_1}$-continuous if and only if $g$ is $\tuple {d_2, d_1}$-continuous.

By definition of topological equivalence:

$I_A$ is a $\tuple {d_1, d_2}$-continuous mapping from $(1)$
$I_A$ is a $\tuple {d_2, d_1}$-continuous mapping from $(2)$.

Hence, $I_A$ is a bijection such that:

$I_A$ is continuous from $M_1$ to $M_2$
$I_A^{-1}$ is continuous from $M_2$ to $M_1$.
That is, $I_A$ is a homeomorphism.
$\Box$


Necessary Condition
Let $I_A$ be a homeomorphism.
That is:

$I_A$ is continuous from $M_1$ to $M_2$
$I_A^{-1}$ is continuous from $M_2$ to $M_1$.
it having been established that $I_A$ is a bijection such that $I_A^{-1} = I_A$.

Let $U \subseteq A$ be open in $M_2$.
Because $I_A$ is a homeomorphism:

$I_A^{-1} \sqbrk U$ is open in $M_1$.
Let $U \subseteq A$ be open in $M_1$.
Because $I_A^{-1} = I_A$ is a homeomorphism:

$I_A \sqbrk U$ is open in $M_2$.
That is:

$U \subseteq A$ is $d_1$-open $\iff$ $U \subseteq A$ is $d_2$-open.
That is:

$d_1$ and $d_2$ are topologically equivalent.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.4$: Equivalent metrics





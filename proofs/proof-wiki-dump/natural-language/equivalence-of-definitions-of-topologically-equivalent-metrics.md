# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Topologically_Equivalent_Metrics



Theorem
The following definitions of the concept of Topologically Equivalent Metrics are equivalent:
Let $M_1 = \struct {A, d_1}$ and $M_2 = \struct {A, d_2}$ be metric spaces on the same underlying set $A$.

Definition 1
$d_1$ and $d_2$ are topologically equivalent if and only if:

For all metric spaces $\struct {B, d}$ and $\struct {C, d'}$:
For all mappings $f: B \to A$ and $g: A \to C$:
$(1): \quad f$ is $\tuple {d, d_1}$-continuous if and only if $f$ is $\tuple {d, d_2}$-continuous
$(2): \quad g$ is $\tuple {d_1, d'}$-continuous if and only if $g$ is $\tuple {d_2, d'}$-continuous.
Such mappings $f$ and $g$ can be referred to as homeomorphisms.

Definition 2
$d_1$ and $d_2$ are topologically equivalent if and only if:

$U \subseteq A$ is $d_1$-open if and only if $U \subseteq A$ is $d_2$-open.


Proof
Definition 1 implies Definition 2
Let $d_1$ and $d_2$ be topologically equivalent by definition 1.

Let $\struct {B, d}$ and $\struct {C, d'}$ be metric spaces:
Let $f: B \to A$ and $g: A \to C$ be mappings.
Then by definition:

$f$ is $\tuple {d, d_1}$-continuous if and only if $f$ is $\tuple {d, d_2}$-continuous
$g$ is $\tuple {d_1, d'}$-continuous if and only if $g$ is $\tuple {d_2, d'}$-continuous.

Suppose $U \subseteq A$ is $d_2$-open.
Let $h: A \to A$ be the identity mapping.
That is:

$\forall a \in A: \map h a = a$
From Identity Mapping is Continuous, $h$ is $\tuple {d_2, d_2}$-continuous.
Hence because $h$ is $\tuple {d_1, d'}$-continuous if and only if $h$ is $\tuple {d_2, d'}$-continuous, $h$ is $\tuple {d_1, d_2}$-continuous.
From Metric Space Continuity by Open Set, it follows that $h^{-1} \sqbrk U$ is $d_1$-open.
But $h^{-1} \sqbrk U = U$, so $U$ is $d_1$-open.

A similar argument, still starting with the same proposition that $g$ is $\tuple {d_1, d'}$-continuous if and only if $g$ is $\tuple {d_2, d'}$-continuous, shows that if $U$ is $d_1$-open then it is $d_2$-open.

Thus $d_1$ and $d_2$ are topologically equivalent by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $d_1$ and $d_2$ be topologically equivalent by definition 2.
Then by definition:

$U \subseteq A$ is $d_1$-open if and only if $U \subseteq A$ is $d_2$-open.

From Metric Space Continuity by Open Set, we have that:

$f$ is $\tuple {d, d_1}$-continuous if and only if for every set $U \subseteq A$ which is open in $\struct {A, d_1}$, $f^{-1} \sqbrk U$ is open in $\struct {B, d}$
$f$ is $\tuple {d, d_2}$-continuous if and only if for every set $U \subseteq A$ which is open in $\struct {A, d_2}$, $f^{-1} \sqbrk U$ is open in $\struct {B, d}$.
Hence $f$ is $\tuple {d, d_1}$-continuous if and only if $f$ is $\tuple {d, d_2}$-continuous.

Similarly:

$g$ is $\tuple {d_1, d'}$-continuous if and only if for every set $U \subseteq C$ which is open in $\struct {C, d'}$, $g^{-1} \sqbrk U$ is open in $\struct {A, d_1}$
$g$ is $\tuple {d_2, d'}$-continuous if and only if for every set $U \subseteq C$ which is open in $\struct {C, d'}$, $g^{-1} \sqbrk U$ is open in $\struct {A, d_2}$.
Hence $g$ is $\tuple {d_1, d'}$-continuous if and only if $g$ is $\tuple {d_2, d'}$-continuous.

Thus $d_1$ and $d_2$ are topologically equivalent by definition 1.
$\blacksquare$


Note
Note that from the proposition that $g$ is $\tuple {d_1, d'}$-continuous if and only if $g$ is $\tuple {d_2, d'}$-continuous, we show that $U \subseteq A$ is $d_1$-open if and only if $U \subseteq A$ is $d_2$-open.
From that, we show that both:

$f$ is $\tuple {d, d_1}$-continuous if and only if $f$ is $\tuple {d, d_2}$-continuous
$g$ is $\tuple {d_1, d'}$-continuous if and only if $g$ is $\tuple {d_2, d'}$-continuous.
Hence the proposition that $f$ is $\tuple {d, d_1}$-continuous if and only if $f$ is $\tuple {d, d_2}$-continuous is superfluous, as it follows directly from the proposition concerning $g$.


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.4$: Equivalent metrics: Proposition $2.4.2$





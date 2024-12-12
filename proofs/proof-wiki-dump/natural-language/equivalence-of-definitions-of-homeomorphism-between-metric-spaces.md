# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Homeomorphism_between_Metric_Spaces



Theorem
The following definitions of the concept of Homeomorphism (Metric Spaces) are equivalent:

Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a bijection.

Definition 1
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a bijection such that:

$f$ is continuous from $M_1$ to $M_2$
$f^{-1}$ is continuous from $M_2$ to $M_1$.

Then:

$f$ is a homeomorphism
$M_1$ and $M_2$ are homeomorphic.
Definition 2
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a bijection such that:

for all $U \subseteq A_1$, $U$ is an open set of $M_1$ if and only if $f \sqbrk U$ is an open set of $M_2$.

Then:

$f$ is a homeomorphism
$M_1$ and $M_2$ are homeomorphic.
Definition 3
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a bijection such that:

for all $V \subseteq A_1$, $V$ is a closed set of $M_1$ if and only if $f \sqbrk V$ is a closed set of $M_2$.

Then:

$f$ is a homeomorphism
$M_1$ and $M_2$ are homeomorphic.
Definition 4
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a bijection such that:

for all $a \in A_1$ and $N \subseteq A_1$, $N$ is a neighborhood of $a$ if and only if $f \sqbrk N$ is a neighborhood of $\map f a$.

Then:

$f$ is a homeomorphism
$M_1$ and $M_2$ are homeomorphic.


Proof
In order to prove the assertion it is sufficient to prove that the conditions for homeomorphism in definitions $2$ to $4$ are necessary and sufficient conditions for $f$ and $f^{-1}$ to be continuous on $M_1$ and $M_2$ respectively.

Definition 1 implies Definition 2
Let $f$ and $f^{-1}$ both be continuous by definition $2$.
Let $U \subseteq A_1$ be open in $M_1$.
As $f^{-1}$ is continuous, $\paren {f^{-1} }^{-1} \sqbrk U = f \sqbrk U$ is open in $M_2$.
That is, $f \sqbrk U = f \sqbrk U$ is open in $M_2$.

Let $f \sqbrk U \subseteq A_2$ be open in $M_2$.
Then as $f$ is continuous, $f^{-1} \sqbrk {f \sqbrk U} = U$ is open in $M_1$.

Thus:

for all $U \subseteq A_1$, $U$ is an open set of $M_1$ if and only if $f \sqbrk U$ is an open set of $M_2$.
$\Box$


Definition 2 implies Definition 4
Let definition $2$ hold.
Let $a \in A_1$.
Let $N \subseteq A_1$.
Then:

$N$ is a neighborhood of $a$
if and only if:

$N$ contains an open set $U$ containing $a$
if and only if:

$f \sqbrk N$ contains an open set $U' = f \sqbrk U$ containing $\map f a$
if and only if:

$f \sqbrk N$ is a neighborhood $\map f a$.
$\Box$


Definition 4 implies Definition 1
Let definition $4$ hold.
Let $a \in A_1$.
Let $U \subseteq A_2$ be a neighborhood of $\map f a$.
Then $f \sqbrk {f^{-1} \sqbrk U}$ is a neighborhood $\map f a$.
Hence $f^{-1} \sqbrk U$ is a neighborhood of $a$.
Thus $f$ is continuous.

Similarly, let $b \in A_2$.
Let $V \subseteq A_1$ be a neighborhood of $\map {f^{-1} } b$.
Then $f^{-1} \sqbrk {f \sqbrk V}$ is a neighborhood $\map {f^{-1} } b$.
Hence $f \sqbrk V$ is a neighborhood of $\map f {\map {f^{-1} } b} = b$.
Thus $f^{-1}$ is continuous.
$\Box$


Definition 2 iff Definition 3
This is demonstrated in Continuity of Mapping between Metric Spaces by Closed Sets.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 7$: Subspaces and Equivalence of Metric Spaces: Theorem $7.10$





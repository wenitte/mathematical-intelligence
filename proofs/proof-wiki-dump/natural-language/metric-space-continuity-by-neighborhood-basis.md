# 

Source: https://proofwiki.org/wiki/Metric_Space_Continuity_by_Neighborhood_Basis



Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a mapping from $A_1$ to $A_2$.
Let $a \in A_1$ be a point in $A_1$.
Let $\BB_{\map f a}$ be a basis for the neighborhood system at $\map f a$.

$f$ is continuous at $a$ with respect to the metrics $d_1$ and $d_2$ if and only if:

for each neighborhood $N$ in $\BB_{\map f a}$, $f^{-1} \sqbrk N$ is a neighborhood of $a$.


Proof
By definition, $\BB_{\map f a}$ be a basis for the neighborhood system at $\map f a$ if and only if:

$\forall N_a \subseteq M_2: \exists N \in \BB_{\map f a}: N \subseteq N_a$
where $N_a$ denotes a neighborhood of $\map f a$ in $M_2$.


Necessary Condition
Let $f$ be continuous at $a$ with respect to the metrics $d_1$ and $d_2$.
Then by Metric Space Continuity by Inverse of Mapping between Neighborhoods:

for each neighborhood $N$ of $\map f a$ in $M_2$, $f^{-1} \sqbrk N$ is a neighborhood of $a$.
In particular, let $N \in \BB_{\map f a}$.
Then $f^{-1} \sqbrk N$ is a neighborhood of $a$.
$\Box$


Sufficient Condition
Let $f$ be such that:

for each neighborhood $N$ in $\BB_{\map f a}$, $f^{-1} \sqbrk N$ is a neighborhood of $a$.
Let $N'$ be any neighborhood of $\map f a$.
Then by definition:

$\exists B \in \BB_{\map f a}: B \subseteq N'$
From Preimage of Subset is Subset of Preimage:

$f^{-1} \sqbrk B \subseteq f^{-1} \sqbrk {N'}$
By hypothesis $f^{-1} \sqbrk B$ is a neighborhood of $a$.
From Superset of Neighborhood in Metric Space is Neighborhood it follows that $f^{-1} \sqbrk {N'}$ is a neighborhood of $a$.
As $N'$ is arbitrary, the result follows.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 4$: Open Balls and Neighborhoods: Exercise $3$





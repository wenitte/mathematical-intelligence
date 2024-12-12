# 

Source: https://proofwiki.org/wiki/Factorization_of_Continuous_Linear_Transformation_between_Topological_Vector_Spaces



Theorem
Let $K$ be a topological field.
Let $\struct {X, \tau_X}$ and $\struct {Y, \tau_X}$ be topological vector spaces over $K$.
Let $T : X \to Y$ be a linear transformation.
Let $N$ be a vector subspace of $X$ with $N \subseteq \ker T$. 
Let $\struct {X/N, \tau_N}$ be the quotient topological vector space of $X$ modulo $N$.
Let $\pi : X \to X/N$ be the quotient mapping.

Then $T$ is continuous if and only if:

there exists a continuous linear transformation $\Lambda : X/N \to Y$ such that:
$T x = \map \Lambda {\map \pi x}$
for each $x \in X$.


Proof
Necessary Condition
Suppose that $T$ is continuous.
From Condition for Mapping from Quotient Vector Space to be Well-Defined, there exists a linear transformation $\Lambda : X/N \to Y$ such that $T x = \map \Lambda {\map \pi x}$ for each $x \in X$.
It remains to show that $\Lambda$ is continuous.
Let $V \subseteq Y$.
We want to show that:

$\Lambda^{-1} \sqbrk V = \pi \sqbrk {T^{-1} \sqbrk V}$
Let $\map \pi x \in \Lambda^{-1} \sqbrk V$.
Then, we have $\map \Lambda {\map \pi x} \in V$.
That is, $T x \in V$.
So, we have $x \in T^{-1} \sqbrk V$. 
Then, we have $\map \pi x \in \pi \sqbrk {T^{-1} \sqbrk V}$. 
So we have that $\Lambda^{-1} \sqbrk V \subseteq \pi \sqbrk {T^{-1} \sqbrk V}$.
Now let $\map \pi x \in \pi \sqbrk {T^{-1} \sqbrk V}$.
Then there exists $z \in T^{-1} \sqbrk V$ such that $\map \pi x = \map \pi z$. 
Then we have, from Quotient Mapping is Linear Transformation, we have $\map \pi {x - z} = {\mathbf 0}_{X/N}$.
So from Kernel of Quotient Mapping, we have $x - z \in N$.
So, we have $x - z \in \ker T$, and so $T x = T z$.
We have $T z \in V$ and $T x = \map \Lambda {\map \pi x}$, so:

$\map \Lambda {\map \pi x} \in V$
So, we have $\map \pi x \in \Lambda^{-1} \sqbrk V$.
So we obtain that $\pi \sqbrk {T^{-1} \sqbrk V} \subseteq \Lambda^{-1} \sqbrk V$.
Hence we have shown:

$\Lambda^{-1} \sqbrk V = \pi \sqbrk {T^{-1} \sqbrk V}$
for all $V \subseteq Y$.
Now let $V$ be open in $\struct {Y, \tau_Y}$. 
Since $T$ is continuous, $T^{-1} \sqbrk V$ is open in $\struct {X, \tau_X}$. 
From Quotient Mapping on Quotient Topological Vector Space is Open Mapping, $\pi$ is an open mapping.
Hence, $\pi \sqbrk {T^{-1} \sqbrk V}$ is open in $\struct {X/N, \tau_N}$.
We have shown that $\Lambda^{-1} \sqbrk V = \pi \sqbrk {T^{-1} \sqbrk V}$, so:

$\Lambda^{-1} \sqbrk V$ is open in $\struct {X/N, \tau_N}$.
Since $V$ was an arbitrary open set in $\struct {Y, \tau_Y}$, we have that:

$\Lambda : X/N \to Y$ is continuous.
$\Box$


Sufficient Condition
Suppose that there exists a continuous linear transformation $\Lambda : X/N \to Y$ such that:

$T x = \map \Lambda {\map \pi x}$
for each $x \in X$. 
From the definition of the quotient topology, $\pi$ is continuous.
Since $\Lambda$ is continuous, we have that $\Lambda \circ \pi = T$ is continuous from Composite of Continuous Mappings is Continuous.
$\blacksquare$






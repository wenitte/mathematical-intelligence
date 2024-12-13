# 

Source: https://proofwiki.org/wiki/Quotient_Topological_Vector_Space_is_Topological_Vector_Space



Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {X, \tau}$ be a topological vector space over $\GF$.
Let $N$ be a linear subspace of $X$.
Let $X/N$ be the quotient vector space of $X$ modulo $N$.
Let $\tau_N$ be the quotient topology on $X/N$.

Then $\struct {X/N, \tau_N}$ is a topological vector space.


Proof
Let $\pi : X \to X/N$ be the quotient mapping.

Vector Addition is Continuous
Let $+_X : X \times X \to X$ be vector addition on $X$.
Let $+_{X/N} : X/N \times X/N \to X/N$ be vector addition on $X/N$.
It is enough to show that $+_{X/N}$ is continuous at $\tuple {\map \pi x, \map \pi y}$ for each $\tuple {\map \pi x, \map \pi y} \in X/N \times X/N$. 
Let $\tuple {\map \pi x, \map \pi y} \in X/N \times X/N$.
Let $U$ be an open neighborhood of $\map \pi x +_{X/N} \map \pi y$ in $\struct {X/N, \tau_N}$. 
From Quotient Mapping is Linear Transformation, we have $\map \pi x +_{X/N} \map \pi y = \map \pi {x +_X y}$.
Hence from the definition of the quotient topology, $\pi^{-1} \sqbrk U$ is an open neighborhood of $x + y$ in $\struct {X, \tau}$.
From Open Neighborhood of Point in Topological Vector Space contains Sum of Open Neighborhoods, there exists an open neighborhood $W_1$ of $x$ and an open neighborhood $W_2$ of $y$ such that:

$W_1 +_X W_2 \subseteq \pi^{-1} \sqbrk U$
So, we have:

$\map \pi {W_1 +_X W_2} \subseteq \pi \sqbrk {\pi^{-1} \sqbrk U}$
Since $\pi$ is surjective by definition, we have $\pi \sqbrk {\pi^{-1} \sqbrk U} = U$ and hence:

$\map \pi {W_1 +_X W_2} \subseteq U$
From Image of Linear Combination of Subsets of Vector Space under Linear Transformation, we have:

$\map \pi {W_1} +_{X/N} \map \pi {W_2} \subseteq U$
That is:

$+_{X/N} \sqbrk {\map \pi {W_1} \times \map \pi {W_2} } \subseteq U$
From Quotient Mapping on Quotient Topological Vector Space is Open Mapping, we have that $\map \pi {W_1}$ and $\map \pi {W_2}$ are open neighborhoods of $\map \pi x$ and $\map \pi y$ respectively.
From the definition of the product topology, $\map \pi {W_1} \times \map \pi {W_2}$ is an open neighborhood of $\tuple {\map \pi x, \map \pi y}$ in $X/N \times X/N$.
Since $U$ was an arbitrary open neighborhood of $+_{X/N} \sqbrk {\tuple {\map \pi x, \map \pi y} }$ in $\struct {X/N, \tau_N}$, we have shown that $+_{X/N}$ is continuous at $\tuple {\map \pi x, \map \pi y}$. 
Since $\tuple {\map \pi x, \map \pi y} \in X/N \times X/N$ was arbitrary, we have that $+_{X/N} : X/N \times X/N \to X/N$ is continuous.
$\Box$

Scalar Multiplication is Continuous
Let $\circ_X : \GF \times X \to X$ be scalar multiplication on $X$.
Let $\circ_{X/N} : \GF \times X/N \to X/N$ scalar multiplication on $X/N$.
It is enough to show that $+_{X/N}$ is continuous at $\tuple {\lambda, \map \pi x}$ for each $\tuple {\lambda, \map \pi x} \in \GF \times X/N$.
Let $\tuple {\lambda, \map \pi x} \in \GF \times X/N$.
Let $U$ be an open neighborhood of $\lambda \circ_{X/N} \map \pi x$ in $\struct {X/N, \tau_N}$. 
From Quotient Mapping is Linear Transformation, we have $\lambda \circ_{X/N} \map \pi x = \map \pi {\lambda \circ_X x}$.
Hence from the definition of the quotient topology, $\pi^{-1} \sqbrk U$ is an open neighborhood of $\lambda \circ_X \map \pi x$ in $\struct {X, \tau}$.
From Open Neighborhood of Dilation of Point in Topological Vector Space contains Pointwise Scalar Multiplication of Open Neighborhood of Scalar with Open Neighborhood of Vector, there exists an open neighborhood $S$ of $\lambda$ in $\GF$ and an open neighborhood $W$ of $x$ in $\struct {X, \tau}$ such that:

$S \circ_X W \subseteq \pi^{-1} \sqbrk U$
So that:

$\pi \sqbrk {S \circ_X W} \subseteq U$
From Image of Pointwise Scalar Multiplication of Subset of Scalars with Subset of Vectors under Linear Transformation, we have:

$S \circ_{X/N} \pi \sqbrk W \subseteq U$
That is:

$\circ_{X/N} \sqbrk {S \times \pi \sqbrk W} \subseteq U$
From Quotient Mapping on Quotient Topological Vector Space is Open Mapping, $\pi \sqbrk W$ is an open neighborhood of $\map \pi x$ in $\struct {X/N, \tau_N}$. 
From the definition of the product topology, $S \times \pi \sqbrk W$ is an open neighborhood of $\tuple {\lambda, \map \pi x}$ in $\GF \times X/N$.
Since $U$ was an arbitrary open neighborhood of $\circ_{X/N} \sqbrk {\tuple {\lambda, \map \pi x} }$ in $\struct {X/N, \tau_N}$, we have shown that $\circ_{X/N}$ is continuous at $\tuple {\lambda, \map \pi x}$. 
Since $\tuple {\lambda, \map \pi x} \in \GF \times X/N$ was arbitrary, we have that $+_{X/N} : \GF \times X/N \to X/N$ is continuous.
$\blacksquare$






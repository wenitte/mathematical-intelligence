# 

Source: https://proofwiki.org/wiki/Characterization_of_Continuous_Linear_Transformation_from_Metrizable_Topological_Vector_Space_to_Topological_Vector_Space



Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {X, \tau_X}$ be a metrizable topological vector space over $\GF$.
Let $\struct {Y, \tau_Y}$ be a topological vector space over $\GF$.
Let $T : X \to Y$ be a linear transformation.

The following statements are equivalent:

$(1): \quad$ $T$ is continuous
$(2): \quad$ $T$ is bounded
$(3): \quad$ for every sequence $\sequence {x_n}_{n \mathop \in \N}$ in $X$ with $x_n \to {\mathbf 0}_X$ as $n \to \infty$, the sequence $\sequence {T x_n}_{n \mathop \in \N}$ is von Neumann-bounded in $Y$
$(4): \quad$ for every sequence $\sequence {x_n}_{n \mathop \in \N}$ in $X$ with $x_n \to {\mathbf 0}_X$ as $n \to \infty$, we have $T x_n \to {\mathbf 0}_Y$ as $n \to \infty$.


Proof
$(1)$ implies $(2)$
This is precisely the result Continuous Linear Transformation between Topological Vector Spaces is Bounded.
$\Box$


$(2)$ implies $(3)$
This is precisely the result Image of Convergent Sequence in Topological Vector Space under Bounded Linear Transformation is von Neumann-Bounded.
$\Box$


$(3)$ implies $(4)$
Suppose that:

for every sequence $\sequence {x_n}_{n \mathop \in \N}$ in $X$ with $x_n \to {\mathbf 0}_X$ as $n \to \infty$, the sequence $\sequence {T x_n}_{n \mathop \in \N}$ is von Neumann-bounded in $Y$.
From Null Sequence in Metrizable Topological Vector Space Dominates some Sequence of Scalars Tending to Infinity, there exists a sequence of positive real numbers $\sequence {\gamma_n}_{n \mathop \in \N}$ such that $\gamma_n \to \infty$ and $\gamma_n x_n \to {\mathbf 0}_X$. 
From the assumption, $\sequence {\map T {\gamma_n x_n} }_{n \mathop \in \N}$ is von Neumann-bounded in $Y$.
Now note that $\gamma_n^{-1} \to 0$ as $n \to \infty$.
From Sequential Characterization of von Neumann-Boundedness in Topological Vector Space, we have that $\gamma_n^{-1} \map T {\gamma_n x_n} \to {\mathbf 0}_Y$. 
Since $T$ is linear, we have:

$\gamma_n^{-1} \map T {\gamma_n x_n} = T x_n$
and so:

$T x_n \to {\mathbf 0}_Y$ as $n \to \infty$.
$\Box$


$(4)$ implies $(1)$
We prove the contrapositive.
Suppose that $(1)$ does not hold.
Then $T$ is not continuous.
From Linear Transformation between Topological Vector Spaces Continuous iff Continuous at Origin, we have that $T$ is not continuous at ${\mathbf 0}_X$.
Then there exists an open neighborhood $W$ of ${\mathbf 0}_Y$ such that:

$T \sqbrk U \not \subseteq W$ for each open neighborhood $U$ of ${\mathbf 0}_X$.
Since $\struct {X, \tau_X}$ is metrizable, there exists an metric $d$ on $X$ that induces $\tau_X$.
Then for each $n \in \N$, the set:

$U_n = \set {x \in X : \map d {x, {\mathbf 0}_X} < n^{-1} }$
is open in $\struct {X, \tau_X}$.
Since:

$T \sqbrk {U_n} \not \subseteq W$
we can pick, for each $n \in \N$, $x_n \in U_n$ such that $T x_n \not \in W$.
Since $\map d {x_n, {\mathbf 0}_X} < n^{-1}$ for each $n \in \N$, we have that $x_n \to {\mathbf 0}_X$ as $n \to \infty$ from the definition of a convergent sequence in a metric space.
Since $T x_n \not \in W$ for each $n \in \N$, there cannot exist $N \in \N$ such that $T x_n \in W$ for $n \ge N$.
Since $W$ is an open neighborhood $W$ of ${\mathbf 0}_Y$, the sequence $\sequence {T x_n}_{n \mathop \in \N}$ cannot converge to ${\mathbf 0}_Y$ in $\struct {Y, \tau_Y}$. 
So there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to {\mathbf 0}_X$ as $n \to \infty$, but $T x_n \not \to {\mathbf 0}_Y$ as $n \to \infty$.
So $(4)$ does not hold. 
By Proof by Contraposition, we have proved that $(4)$ implies $(1)$. 
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.32$: Theorem





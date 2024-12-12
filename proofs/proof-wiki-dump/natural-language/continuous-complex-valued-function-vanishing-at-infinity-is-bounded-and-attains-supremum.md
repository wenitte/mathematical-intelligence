# 

Source: https://proofwiki.org/wiki/Continuous_Complex-Valued_Function_Vanishing_at_Infinity_is_Bounded_and_Attains_Supremum

Theorem
Let $X$ be a locally compact Hausdorff space. 
Let $f : X \to \C$ be a continuous function that vanishes at infinity.

Then $f$ is bounded and there exists $x_\ast \in X$ such that:

$\ds \map f {x_\ast} = \sup_{x \mathop \in X} \cmod {\map f x}$


Proof
From the definition of a function vanishing at infinity:

there exists a compact set $F \subseteq X$ such that:
$\cmod {\map f x} < 1$ for all $x \in X \setminus F$.
From Continuous Function on Compact Space is Bounded:

$f$ is bounded on $F$.
That is, there exists a real number $M > 0$ such that:

$\cmod {\map f x} \le M$ for all $x \in F$.
Hence, we have:

$\cmod {\map f x} \le \max \set {1, M}$ for each $x \in X$.
So $f$ is bounded.

Now suppose that $\map f x = 0$ for each $x \in X$. 
Then $f$ clearly attains its bounds.
Now take $f$ such that:

$\map f x \ne 0$ for some $x \in X$.
Let:

$\ds M = \sup_{x \mathop \in X} \cmod {\map f x} > 0$
which is finite from the above. 
Since $f$ vanishes at infinity, there exists a compact set $K \subseteq X$ such that:

$\ds \cmod {\map f x} < \frac M 2$ for each $x \in X \setminus K$.
By the definition of supremum:

for each $M/2 > \epsilon > 0$ there exists $x_0 \in X$ such that $M - \epsilon < \cmod {\map f {x_0} } \le M$
Since:

$\ds \cmod {\map f x} < \frac M 2$ for each $x \in X \setminus K$
the points $x_0$ described above must fall in $K$. 
Hence we have:

$\ds \sup_{x \mathop \in X} \cmod {\map f x} = \sup_{x \mathop \in K} \cmod {\map f x}$
From Complex Modulus Function is Continuous and Composite of Continuous Mappings is Continuous, $\cmod f$ is continuous.
Consider the restriction $\cmod f \restriction K : K \to \R$. 
From Restriction of Continuous Mapping is Continuous: Topological Spaces, $\cmod f \restriction K$ is continuous.
Hence from Continuous Image of Compact Space is Compact: Corollary 3, $\cmod f \restriction K$ attains its bounds. 
Hence there exists $x_0 \in K$ such that $\cmod {\map f {x_0} } = M$, hence the result.
$\blacksquare$






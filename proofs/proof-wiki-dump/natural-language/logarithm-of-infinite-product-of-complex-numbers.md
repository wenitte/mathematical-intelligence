# 

Source: https://proofwiki.org/wiki/Logarithm_of_Infinite_Product_of_Complex_Numbers



Theorem
Let $\sequence {z_n}$ be a sequence of nonzero complex numbers.

The following statements are equivalent:

$(1): \quad$ The infinite product $\ds \prod_{n \mathop = 1}^\infty z_n$ converges to $z \in \C_{\ne 0}$.
$(2): \quad$ The series $\ds \sum_{n \mathop = 1}^\infty \log z_n$ converges to $\log z + 2 k \pi i$ for some integer $k \in \Z$.


Proof
$(1)$ implies $(2)$
Suppose $\ds \prod_{n \mathop = 1}^\infty z_n$ converges to $z$.
By Convergence of Series of Complex Numbers by Real and Imaginary Part, it suffices to show that:

$\ds \sum_{n \mathop = 1}^\infty \Re \log z_n = \Re \log z$
$\ds \sum_{n \mathop = 1}^\infty \Im \log z_n = \Im \log z + 2 k \pi$


Real Part
Let $P_n$ denote the $n$th partial product.
Then $P_n \to z$.
By Modulus of Limit:

$\cmod {P_n} \to \cmod z$
By Real Natural Logarithm Function is Continuous;

$\log \cmod {P_n} \to \log \cmod z$
By definition of complex natural logarithm and Real Part of Sum of Complex Numbers:

$\ds \log \cmod {P_n} = \sum_{j \mathop = 1}^n \Re \log z_j$


Imaginary Part
It remains to show that:

$\ds \sum_{j \mathop = 1}^n \Im \log z_j \to \arg z + 2 k \pi$
for some $k \in \Z$.
Let $\theta = \arg z$ be the argument of $z$.
Let $\theta_n = \arg P_n$ be the argument of $P_n$ in the half-open interval $\hointl {\theta - \pi} {\theta + \pi}$.
By the corollary to Convergence of Complex Sequence in Polar Form:

$\theta_n \to \theta$
Let $k_n \in \Z$ be such that:

$\ds \sum_{j \mathop = 1}^n \Im \log z_j = \theta_n + 2 k_n \pi$
We show that $k_n$ is eventually constant.
By the Triangle Inequality:

$2 \pi \cmod {k_{n + 1} - k_n} \le \cmod {\theta_{n + 1} - \theta_n} + \cmod {\Im \log z_{n + 1} }$
By Factors in Convergent Product Converge to One, $z_n \to 1$.
By Complex Logarithm is Continuous Outside Branch, $\log z_n \to 0$.
Thus $2 \pi \cmod {k_{n + 1} - k_n} \to 0$.
So $k_n$ is eventually constant, say equal to $k$.
Then:

$\ds \sum_{j \mathop = 1}^n \Im \log z_j \to \theta + 2 k \pi$
$\Box$


$(2)$ implies $(1)$
Suppose $\ds \sum_{n \mathop = 1}^\infty \log z_n = \log z + 2 k \pi i$.
By Exponential of Series Equals Infinite Product:

$\ds \prod_{n \mathop = 1}^\infty z_n = z$
Hence the result.
$\blacksquare$


Also see
Logarithm of Infinite Product of Real Numbers
Logarithm of Infinite Product of Complex Functions


Sources
1973: John B. Conway: Functions of One Complex Variable ... (previous) $\text {VII}$: Compact and Convergence in the Space of Analytic Functions: $\S 5$: Weierstrass Factorization Theorem: Proposition $5.2$





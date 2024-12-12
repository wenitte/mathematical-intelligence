# 

Source: https://proofwiki.org/wiki/Characterization_of_Derivative_of_Test_Function



Theorem
Let $\Phi, \phi \in \map \DD \R$ be test functions.
Let:

$\ds X = \set {\Phi' : \Phi \in \map \DD \R} $
$\ds Y = \set {\phi \in \map \DD \R : \int_{- \infty}^\infty \map \phi x \rd x = 0}$

Then $X = Y$.
Furthermore, for every $\phi \in Y$ there exists only one $\Phi \in \map \DD \R$ such that $\Phi' = \phi$.


Proof
$X$ is a subset of $Y$
By definition of test functions:

$\paren {\Phi \in \map \DD \R} \implies \paren {\Phi' \in \map \DD \R}$
Moreover, a test function has compact support:

$\ds \int_{-\infty}^\infty \map {\Phi'} x \rd x = \map \Phi \infty - \map \Phi {-\infty} = 0$
Hence:

$X \subseteq Y$
$\Box$


$Y$ is a subset of $X$
Suppose $\phi \in \map \DD \R$ is such that:

$\ds \int_{-\infty}^\infty \map \phi x \rd x = 0$
Let $\Phi$ be such that:

$\ds \map \Phi x = \int_{-\infty}^x \map \phi \xi \rd \xi$
Then there exists $\Phi'$ such that:

$\map {\Phi'} x = \map \phi x$
Since $\phi$ is a test function:

$\Phi' \in \map {C^\infty} \R$.
Let $\phi$ be supported on $\closedint {-a} a$ with $a \in \R_{> 0}$.
Then:

$\forall x \in \R : x < -a \implies \map \Phi x = 0$
On the other hand:

$\ds \forall x \in \R : x > a \implies \map \Phi x = \int_{-\infty}^x \map \phi \xi \rd \xi = \int_{-\infty}^\infty \map \phi \xi \rd \xi = 0$
Hence, $\Phi$ is also supported on $\closedint {-a} a$, and:

$Y \subseteq X$
$\Box$


Uniqueness
Let $\phi \in Y$.
Suppose, for $\Phi'_1, \Phi'_2 \in \map \DD \R$ we have that $\Phi'_1 = \phi = \Phi'_2$.
Then $\paren {\Phi_1 - \Phi_2}' = 0$ and $\Phi_1 - \Phi_2 = C$ with $C \in \R$ being a constant.
However, both $\Phi_1$ and $\Phi_2$ have compact supports inherited from $\phi$, say $K \subset \R$.
Then:

$\forall x \notin K : \map {\Phi_1} x - \map {\Phi_2} x = 0 - 0 = 0$
$\Phi_1$ and $\Phi_2$ are test functions and thus smooth.
Therefore, $C = 0$ holds for all $x \in \R$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.1$: A glimpse of distribution theory. Test functions, distributions, and examples





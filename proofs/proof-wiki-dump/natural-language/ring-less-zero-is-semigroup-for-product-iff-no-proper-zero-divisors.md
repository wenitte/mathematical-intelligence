# 

Source: https://proofwiki.org/wiki/Ring_Less_Zero_is_Semigroup_for_Product_iff_No_Proper_Zero_Divisors



Theorem
Let $\struct {R, +, \circ}$ be a non-null ring.

Then $R$ has no zero divisors if and only if $\struct {R^*, \circ}$ is a semigroup.


Proof
Necessary Condition
Let $\struct {R, +, \circ}$ be a non-null ring with no zero divisors.
The set $R^* = R \setminus \set {0_R} \ne \O$ as $\struct {R, +, \circ}$ is non-null.
All elements of $R$ are not zero divisors, and therefore are cancellable.
$\struct {R, +, \circ}$ is closed under $\circ$, from the fact that there are no zero divisors, and also that $\struct {R, \circ}$ is also closed.
From Restriction of Associative Operation is Associative, ring product is associative on $\struct {R^*, +, \circ}$, as it is associative on $\struct {R, +, \circ}$.
Thus $\struct {R^*, \circ}$ is a semigroup.
$\Box$


Sufficient Condition
Let $\struct {R^*, \circ}$ be a semigroup.
Then:

$\neg \exists x, y \in R^*: x \circ y \notin R^*$
Thus:

$\neg \exists x, y \in R^*: x \circ y = 0_R$
and the result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $21$. Rings and Integral Domains: Theorem $21.2$: Corollary
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 55.2$ Special types of ring and ring elements





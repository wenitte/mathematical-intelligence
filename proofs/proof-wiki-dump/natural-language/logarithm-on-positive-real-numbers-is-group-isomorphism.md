# 

Source: https://proofwiki.org/wiki/Logarithm_on_Positive_Real_Numbers_is_Group_Isomorphism

Theorem
Let $\struct {\R_{>0}, \times}$ be the multiplicative group of positive real numbers.
Let $\struct {\R, +}$ be the additive group of real numbers.
Let $b$ be any real number such that $b > 1$.

Let $\log_b: \struct {\R_{>0}, \times} \to \struct {\R, +}$ be the mapping:

$x \mapsto \map {\log_b} x$
where $\log_b$ is the logarithm to base $b$.

Then $\log_b$ is a group isomorphism.


Proof
From Sum of Logarithms we have:

$\forall x, y \in \R_{>0}: \map {\log_b} {x y} = \map {\log_b} x + \map {\log_b} y$
That is $\log_b$ is a group homomorphism.
From Change of Base of Logarithm, $\log_b$ is a constant multiplied by the natural logarithm function.
Then we have that Logarithm is Strictly Increasing.
From Strictly Monotone Real Function is Bijective, it follows that $\log_b$ is a bijection.
So $\log_b$ is a bijective group homomorphism, and so a group isomorphism.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 47$. Homomorphisms and their elementary properties: Illustration





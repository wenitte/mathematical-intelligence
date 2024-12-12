# 

Source: https://proofwiki.org/wiki/Exponential_on_Real_Numbers_is_Group_Isomorphism/Proof_1

Theorem
Let $\struct {\R, +}$ be the additive group of real numbers.
Let $\struct {\R_{> 0}, \times}$ be the multiplicative group of positive real numbers.

Let $\exp: \struct {\R, +} \to \struct {\R_{> 0}, \times}$ be the mapping:

$x \mapsto \map \exp x$
where $\exp$ is the exponential function.

Then $\exp$ is a group isomorphism.


Proof
From Exponential of Sum we have:

$\forall x, y \in \R: \map \exp {x + y} = \exp x \cdot \exp y$
That is, $\exp$ is a group homomorphism.
Then we have that Exponential is Strictly Increasing.
From Strictly Monotone Real Function is Bijective, it follows that $\exp$ is a bijection.
So $\exp$ is a bijective group homomorphism, and so a group isomorphism.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.1$. Homomorphisms: Example $128$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.5$: Example $12$





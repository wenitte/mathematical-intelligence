# 

Source: https://proofwiki.org/wiki/Exponential_on_Real_Numbers_is_Group_Isomorphism/Proof_2

Theorem
Let $\struct {\R, +}$ be the additive group of real numbers.
Let $\struct {\R_{> 0}, \times}$ be the multiplicative group of positive real numbers.

Let $\exp: \struct {\R, +} \to \struct {\R_{> 0}, \times}$ be the mapping:

$x \mapsto \map \exp x$
where $\exp$ is the exponential function.

Then $\exp$ is a group isomorphism.


Proof
From Real Numbers under Addition form Group, $\struct {\R, +}$ is a group.
From Strictly Positive Real Numbers under Multiplication form Uncountable Abelian Group, $\struct {\R_{> 0}, \times}$ is a group.
We have that for all $y \in R_{> 0}$ there exists $x = \map \ln y \in R$ which satisfies $\map \exp x = y$.


This article, or a section of it, needs explaining.In particular: Link to a result backing up the above claim.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus $\exp$ is a surjection.
Then from Exponential on Real Numbers is Injection:

$\exp$ is an injection.
Therefore, $\exp$ is a bijection.
Let $x, y \in R$.
From Exponential of Sum:

$\map \exp {x + y} = \map \exp x \, \map \exp y$

So $\exp$ is a homomorphism and a bijection.
It follows by definition that $\exp: \struct {\R, +} \to \struct {\R_{> 0}, \times}$ is an isomorphism.
$\blacksquare$






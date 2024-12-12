# 

Source: https://proofwiki.org/wiki/Exponential_on_Real_Numbers_is_Group_Isomorphism



Theorem
Let $\struct {\R, +}$ be the additive group of real numbers.
Let $\struct {\R_{> 0}, \times}$ be the multiplicative group of positive real numbers.

Let $\exp: \struct {\R, +} \to \struct {\R_{> 0}, \times}$ be the mapping:

$x \mapsto \map \exp x$
where $\exp$ is the exponential function.

Then $\exp$ is a group isomorphism.


Proof 1
From Exponential of Sum we have:

$\forall x, y \in \R: \map \exp {x + y} = \exp x \cdot \exp y$
That is, $\exp$ is a group homomorphism.
Then we have that Exponential is Strictly Increasing.
From Strictly Monotone Real Function is Bijective, it follows that $\exp$ is a bijection.
So $\exp$ is a bijective group homomorphism, and so a group isomorphism.
$\blacksquare$


Proof 2
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


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.3$. Isomorphism: Example $135$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Example $6.5$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 62 \alpha$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms: Exercise $(8)$





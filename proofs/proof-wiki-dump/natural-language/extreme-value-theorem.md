# 

Source: https://proofwiki.org/wiki/Extreme_Value_Theorem


This article needs proofreading.In particular: Review the uses of Definition:Infimum of Mapping and Definition:Supremum of MappingIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $X$ be a compact metric space and $Y$ a normed vector space.
Let $f: X \to Y$ be a continuous mapping.

Then $f$ is bounded, and there exist $x, y \in X$ such that:

$\forall z \in X: \norm {\map f x} \le \norm {\map f z} \le \norm {\map f y}$
where $\norm {\map f x}$ denotes the norm of $\map f x$.

Moreover, $\norm f$ attains its minimum and maximum.


Extreme Value Theorem for a Real Function
Let $f$ be a real function which is continuous in a closed real interval $\closedint a b$.
Then:

$\exists x_M: \forall x \in \closedint a b: \map f {x_M} \ge \map f x$
$\exists x_m: \forall x \in \closedint a b: \map f {x_m} \le \map f x$


Extreme Value Theorem for Normed Vector Spaces
Let $X$ be a normed vector space.
Let $K \subseteq X$ be a compact subset.
Suppose $f : X \to \R$ is a continuous mapping at each $x \in K$.

Then:

$\ds \exists c \in K : \map f c = \sup_{x \mathop \in K} \map f x = \max_{x \mathop \in K} \map f x$
$\ds \exists d \in K : \map f d = \inf_{x \mathop \in K} \map f x = \min_{x \mathop \in K} \map f x$


Proof

The dependence on a certain axiom has to be clarified.In particular: ZF version of this proof (use Continuous Image of Compact Space is Compact/Corollary 3)To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{AxiomReview}} from the code.

This article, or a section of it, needs explaining.In particular: What should be reviewed??You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By Continuous Image of Compact Space is Compact, $f \sqbrk X \subseteq Y$ is compact.
Therefore, by Compact Subspace of Metric Space is Bounded, $f$ is bounded.

Let $\ds A = \inf_{x \mathop \in X} \norm {\map f x}$.
It follows from the definition of infimum that there exists a sequence $\sequence {y_n}$ in $X$ such that:

$\ds \lim_{n \mathop \to \infty} \norm {\map f {y_n} } = A$
By Sequence of Implications of Metric Space Compactness Properties, $X$ is sequentially compact.
So there exists a convergent subsequence $\sequence {x_n}$ of $\sequence {y_n}$.
Let $\ds x = \lim_{n \mathop \to \infty} x_n$.
Since $f$ is continuous and a norm is continuous, it follows by Composite of Continuous Mappings at Point is Continuous that:

$\ds \norm {\map f x} = \norm {\map f {\lim_{n \mathop \to \infty} x_n} } = \norm {\lim_{n \mathop \to \infty} \map f {x_n} } = \lim_{n \mathop \to \infty} \norm {\map f {x_n} } = A$
So $\norm f$ attains its minimum at $x$.
By replacing the infimum with the supremum in the definition of $A$, we also see that $\norm f$ attains its maximum by the same reasoning.
$\blacksquare$


Historical Note
The Extreme Value Theorem in its application to real functions is usually attributed to Karl Weierstrass, as an example of what has been referred to as Weierstrassian rigor.
Hence this result's soubriquet the Weierstrass Extreme Value Theorem.


Sources
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Weierstrass' theorem





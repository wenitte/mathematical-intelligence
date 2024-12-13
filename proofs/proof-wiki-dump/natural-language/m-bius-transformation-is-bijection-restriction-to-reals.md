# 

Source: https://proofwiki.org/wiki/M%C3%B6bius_Transformation_is_Bijection/Restriction_to_Reals

Theorem
Let $a, b, c, d \in \R$ be real numbers.
Let $f: \R^* \to \R^*$ be the Möbius transformation restricted to the real numbers:

$\map f x = \begin {cases} \dfrac {a x + b} {c x + d} & : x \ne -\dfrac d c \\
\infty & : x = -\dfrac d c \\
\dfrac a c & : x = \infty \\
\infty & : x = \infty \text { and } c = 0 \end {cases}$

Then:

$f: \R^* \to \R^*$ is a bijection
if and only if:

$a c - b d \ne 0$



This article, or a section of it, needs explaining.In particular: $\R^*$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
First we note that as Real Addition is Closed and Real Multiplication is Closed:

$\Dom {\R^*} \subseteq \R^*$

This article, or a section of it, needs explaining.In particular: What is $\Dom {\R^*}$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Recall from Möbius Transformation is Bijection that the Möbius transformation on the extended complex plane is a bijection if and only if $a c - b d \ne 0$.
From Restriction of Injection is Injection, if $a c - b d \ne 0$ if and only if $f$ is an injection.
As the inverse $f^{-1}$ of $f$ is also the restriction of a Möbius transformation, it follows that $f^{-1}$ is also an injection.
Hence the result from Injection is Bijection iff Inverse is Injection.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 9$: Inverse Functions, Extensions, and Restrictions: Exercise $2$





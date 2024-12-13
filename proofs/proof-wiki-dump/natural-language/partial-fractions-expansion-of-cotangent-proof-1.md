# 

Source: https://proofwiki.org/wiki/Partial_Fractions_Expansion_of_Cotangent/Proof_1



Theorem
Let $x \in \R \setminus \Z$, that is such that $x$ is a real number that is not an integer.
Then:

$\ds \pi \cot \pi x = \dfrac 1 x + 2 x \sum_{n \mathop = 1}^\infty \frac 1 {x^2 - n^2}$


Proof
We have that:

$\cot \pi x = \dfrac {\cos \pi x} {\sin \pi x}$
has a denominator which is $0$ at $x = 0, \pm 1, \pm 2, \ldots$.
Hence the limitation on the domain of $x \cot \pi x$ to exclude integer $x$.
Having established that, we should be able to express $\cot \pi x$ in the form:

$\cot \pi x = \dfrac a x + \ds \sum_{n \mathop = 1}^\infty \paren {\frac {b_n} {x - n} + \frac {c_n} {x + n} }$

This article, or a section of it, needs explaining.In particular: why should we be able to express the cotangent in this form?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
using a partial fractions expansion.
By evaluating the coefficients $b_n$ and $c_n$ in the usual manner, they are found to be:


This article, or a section of it, needs explaining.In particular: Link to what this usual manner isYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This needs considerable tedious hard slog to complete it.In particular: Do the workTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\forall n \in \N: b_n = c_n = \dfrac 1 \pi$
The result follows.
$\blacksquare$


Historical Note
The original demonstration of the partial fractions expansion of the cotangent function was presented by Leonhard Paul Euler.
It is non-rigorous, in the sense that it has not at this stage been established that it is in fact possible to perform that expansion of $\cot \pi x$ into such an expansion in the first place.


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.20$: The Bernoulli Numbers and some Wonderful Discoveries of Euler





# 

Source: https://proofwiki.org/wiki/Exponential_Tends_to_Zero_and_Infinity


This page has been identified as a candidate for refactoring of medium complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be tidied.In particular: The structure of this page is truly inconsistent with house style. I am also a little concerned that arguments in this area may be circular. One needs to tread very carefully in this area.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $x \in \R$ be a real number.
Let $\exp x$ be the exponential of $x$.

Then:

$\exp x \to +\infty$ as $x \to +\infty$
$\exp x \to 0$ as $x \to -\infty$
Thus the exponential function has domain $\R$ and image $\openint 0 \infty$.


Proof
The exponential function approaches positive infinity as x approaches positive infinity
Let $M$ be a strictly positive real number.
Let $N$ be $\ln M$.
$N$ is real because $M > 0$.
From Exponential is Strictly Increasing:

$\forall x: x > N \implies \exp x > \exp N = M$

Therefore:

$\forall M \in \R_{>0} : \exists N \in \R : \forall x > N : \exp x > M$
The result follows from the definition of infinite limit at infinity.
$\blacksquare$


The exponential function approaches 0 as x approaches negative infinity
Let $\epsilon$ be a strictly positive real number.
Let $c$ be $\ln \epsilon$.
Let $x$ be any real number that smaller than $c$.
From Exponential of Real Number is Strictly Positive:

$\exp x > 0 \implies \size {\exp x} = \exp x$
From Exponential is Strictly Increasing:

$\size {\exp x - 0} = \exp x < \exp c = \epsilon$

Therefore:

$\forall \epsilon \in \R_{>0} : \exists c \in \R : \forall x < c : \size {\exp x - 0} < \epsilon$
From the definition of limit at minus infinity, the result follows.
$\blacksquare$


The exponential function has domain $\R$ and image $\openint 0 \infty$

The validity of the material on this page is questionable.In particular: the above uses this resultYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
We have that the Exponential is Strictly Increasing.
From above, $\ds \lim_{x \mathop \to \infty} \exp x = \infty$
From above, $\ds \lim_{x \mathop \to -\infty} \exp x = 0$
Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 14.4$





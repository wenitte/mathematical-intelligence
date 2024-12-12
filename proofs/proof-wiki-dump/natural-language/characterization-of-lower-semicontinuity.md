# 

Source: https://proofwiki.org/wiki/Characterization_of_Lower_Semicontinuity



Theorem
Let $f: S \to \overline \R$ be an extended real valued function.
Let $S$ be endowed with a topology $\tau$.

The following are equivalent:

$(1): \quad$ $f$ is lower semicontinuous (LSC) on $S$.
$(2): \quad$ The epigraph $\map {\operatorname{epi}} f$ of $f$ is a closed set in $S \times \R$ with the product topology.
$(3): \quad$ All lower level sets of $f$ are closed in $S$.


Proof
The proof is carried out in the following three steps:


LSC implies Closed Epigraph
Let $f: S \to \overline \R$ be LSC on $S$.
Let $\map {\operatorname {epi} } f$ denote the epigraph of $f$.
Take a sequence $\sequence {\tuple {x_n, a_n} }_{n \mathop \in \N} \in \map {\operatorname {epi} } f$ such that:

$\tuple {x_n, a_n} \to \tuple {\bar x, \bar a} \in S \times \R$
as $n \to \infty$.
This implies that $x_n \to \bar x$ and $a_n \to \bar a$ by definition of the product topology on $S \times \R$ and because a Continuous Mapping is Sequentially Continuous.
Consequently:














\(\ds \map f {\bar x}\)

\(=\)







\(\ds \liminf_{x \mathop \to \bar x} \map f x\)





Definition of Lower Semicontinuous














\(\ds \)

\(\le\)







\(\ds \liminf_{n \mathop \to \infty} \map f {x_n}\)





Relationship between Limit Inferior and Lower Limit














\(\ds \)

\(\le\)







\(\ds \liminf_{n \mathop \to \infty} a_n\)





because $\tuple {x_n, a_n} \in \map {\operatorname {epi} } f$














\(\ds \)

\(=\)







\(\ds \bar a\)





because $a_n \to \bar a$



Thus:

$\tuple{\bar x, \bar a} \in \map {\operatorname {epi} } f$

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

The validity of the material on this page is questionable.In particular: This only proves sequential closedness.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\Box$


Closed Epigraph implies Closed Level Sets
Let $\map {\operatorname{epi} } f$ be a closed set in $S \times \R$.
Let $\alpha \in \R$.
Let $\operatorname {lev} \limits_{\mathop \le \alpha} f$ denote the $\alpha$-lower level set of $f$.
Then:

$\ds \operatorname {lev} \limits_{\mathop \le \alpha} f = \map {\operatorname {epi} } f \cap S \times \set \alpha$

The validity of the material on this page is questionable.In particular: The identity claimed here is not trueYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
is closed in $S$ because:

closedness is preserved under Intersection|intersection
and:

$S \times \set \alpha$ is a closed set with respect with the product topology of $S \times \R$.
$\Box$


Closed Level Sets implies LSC
Let all lower level sets of $f$ be closed.
Let $x \in S$.
Let $\ds a: = \liminf_{t \mathop \to x} \map f t$.
In order to prove that $f$ is LSC it suffices to show that $a = \map f x$. 
We know already that $a \le \map f x$.
Thus it suffices to show that $\map f x \le a$.

Let $a = \infty$.
As $\infty \le \infty$ the proof is complete.

Let $a < \infty$.
Then we can find a sequence $\sequence {x_n}_{n \mathop \in \N}$ such that:

$x_n \to x$ and $\map f {x_n} \to a$
as $n \to \infty$.
For any $b > a$:

$\map f {x_n} \le b$
or equivalently:

$x_n \in \ds \operatorname {lev} \limits_{\mathop \le b} f$
which by hypothesis is closed.
Therefore $\ds \operatorname {lev} \limits_{\mathop \le b} f$ contains the limit $x$.
We have that for all $b > a$:

$\map f x \le b$
Therefore:

$\map f x \le a$
Hence the result.
$\Box$

So:

$(1) \implies (2) \implies (3)$
and the proof is complete.
$\blacksquare$


Sources
1986: Viorel Barbu and Th. Precupanu: Convexity and Optimization in Banach spaces: $\S 2$: Proposition $1.3$
1990: Ioana Cioranescu: Geometry of Banach Spaces, Duality Mappings and Nonlinear Problems: Proposition $1.7$





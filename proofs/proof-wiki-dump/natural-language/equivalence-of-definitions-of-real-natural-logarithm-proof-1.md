# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Natural_Logarithm/Proof_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
The following definitions of the concept of Real Natural Logarithm are equivalent:

Definition 1
The (natural) logarithm of $x$ is the real-valued function defined on $\R_{>0}$ as:

$\ds \forall x \in \R_{>0}: \ln x := \int_1^x \frac {\d t} t$
Definition 2
Let $x \in \R$ be a real number such that $x > 0$.
The (natural) logarithm of $x$ is defined as:

$\ln x := y \in \R: e^y = x$
where $e$ is Euler's number.

Definition 3
Let $x \in \R$ be a real number such that $x > 0$.
The (natural) logarithm of $x$ is defined as:

$\ds \ln x := \lim_{n \mathop \to \infty} n \paren {\sqrt [n] x - 1}$


Proof
Definition 1 implies Definition 2
Let $\map F x$ be $\ds \int_1^x \frac {\d t} t$.
Let $\map f t$ be $\ds \int \frac {\d t} t$.


This article, or a section of it, needs explaining.In particular: How is $\map f t$ defined? Not understandableYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:

$\dfrac {\d t} t = \dfrac 1 t$

This article, or a section of it, needs explaining.In particular: What does $\dfrac {\d t} t$ mean?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Or:

$\dfrac {\d x} x = \dfrac 1 x$
Also:

$\map F x = \map f x - \map f 1$
Therefore:














\(\ds \frac {\d \map F x} {\d x}\)

\(=\)







\(\ds \frac {\d \map f x} {\d x} - \frac {\d \map F 1} {\d x}\)




















\(\ds \)

\(=\)







\(\ds \frac {\d \map f x} {\d x}\)





Derivative of Constant














\(\ds \)

\(=\)







\(\ds \frac 1 x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d \map F x}\)

\(=\)







\(\ds x\)





Derivative of Inverse Function




This article, or a section of it, needs explaining.In particular: What does $\frac {\d x} {\d \map F x}$ mean?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Furthermore:

$\map F 1 = \map f 1 - \map f 1 = 0$
The result follows from the fifth definition of the exponential function:

$\map F x \equiv e^x$

There is believed to be a mistake here, possibly a typo.In particular: But it was supposed to be $\map F x = \ln x$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\Box$


Definition 2 implies Definition 1













\(\ds e^{\map F x}\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d \map F x}\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d \map F x} {\d x}\)

\(=\)







\(\ds \frac 1 x\)





Derivative of Inverse Function



Let $\map f t$ be $\ds \int \frac 1 t \rd t$.
Then:

$\map F x = \map f x + C$
When $\map F x = 0$:

$x = e^{\map F x} = 1$
$\map F 1 = \map f 1 + C = 0 \implies \map f 1 = - C$
Therefore:

$\map F x = \map f x - \map f 1$
Therefore:

$\ds \map F x = \int_1^x \frac {\d t} t$
$\Box$

Therefore:














\(\ds y = \int_1^x \frac {\d t} t\)

\(\leadsto\)







\(\ds e^y = x\)





Definition 1 implies Definition 2














\(\ds e^y = x\)

\(\leadsto\)







\(\ds y = \int_1^x \frac {\d t} t\)





Definition 2 implies Definition 1








\(\ds \leadsto \ \ \)





\(\ds y = \int_1^x \frac {\d t} t\)

\(\iff\)







\(\ds e^y = x\)









$\Box$


This theorem requires a proof.In particular: Add definition 3You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$






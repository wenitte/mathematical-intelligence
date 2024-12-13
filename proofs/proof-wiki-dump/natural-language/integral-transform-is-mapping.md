# 

Source: https://proofwiki.org/wiki/Integral_Transform_is_Mapping

Theorem
Let $\map F p$ be an integral transform:

$\map F p = \ds \int_a^b \map f x \map K {p, x} \rd x$
Let $T$ be the integral operator associated with $\map F p$.

Then $T$ is a mapping from the domain of $T$ to its image.
That is, for every $\map f x$ there exists a unique $\map F p$.


Proof
Let $p$ be fixed.
In this context, $\map f x \map K {p, x}$ is the pointwise product of the functions $\map f x$ and $\map K {p, x}$.
From Pointwise Operation is Well-Defined, it follows that $\map f x \map K {p, x}$ is a real function on $x$.
We have that both $\map f x$ and $\map K {p, x}$ are integrable.
It follows from Pointwise Product of Integrable Real Functions is Integrable that $\map f x \map K {p, x}$ is an integrable function.
From Definite Integral is Unique, for a given $p$ there is exactly one real number $\map F p$ for which:

$\map F p = \ds \int_a^b \map f x \map K {p, x} \rd x$
$\blacksquare$


This article, or a section of it, needs explaining.In particular: A lot of stuff in analysis and calculus has been glossed over, as can be seen from the redlinks above. This will need to be tightened up.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Sources
1968: Peter D. Robinson: Fourier and Laplace Transforms ... (previous) ... (next): $\S 1.1$. The Idea of an Integral Transform





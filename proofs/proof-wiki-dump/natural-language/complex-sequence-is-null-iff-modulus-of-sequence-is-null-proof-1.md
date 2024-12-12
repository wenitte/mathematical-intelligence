# 

Source: https://proofwiki.org/wiki/Complex_Sequence_is_Null_iff_Modulus_of_Sequence_is_Null/Proof_1

Theorem
Let $\sequence {z_n}_{n \mathop \in \N}$ be a complex sequence.

Then: 

$z_n \to 0$
if and only if:

$\cmod {z_n} \to 0$
That is: 

$\sequence {z_n}_{n \mathop \in \N}$ is a null sequence if and only if $\sequence {\cmod {z_n} }_{n \mathop \in \N}$ is a null sequence.


Proof
By the definition of convergent sequence, we have: 

$z_n \to 0$ if and only if for each $\epsilon > 0$ there exists $N \in \N$ such that $\cmod {z_n} < \epsilon$ for each $n \ge N$.
Similarly: 

$\cmod {z_n} \to 0$ if and only if for each $\epsilon > 0$ there exists $N \in \N$ such that $\cmod {\paren {\cmod {z_n} } } < \epsilon$ for each $n \ge N$.

This article, or a section of it, needs explaining.In particular: What does $\cmod {\paren {\cmod {z_n} } }$ mean?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
From Complex Modulus of Real Number equals Absolute Value, we have: 

$\cmod {\paren {\cmod {z_n} } } = \cmod {z_n}$

This article, or a section of it, needs explaining.In particular: How does the above equation follow from Complex Modulus of Real Number equals Absolute Value?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
So:

$\cmod {z_n} \to 0$ if and only if for each $\epsilon > 0$ there exists $N \in \N$ such that $\cmod {z_n} < \epsilon$ for each $n \ge N$.
We can therefore see that: 

$z_n \to 0$
if and only if:

$\cmod {z_n} \to 0$
$\blacksquare$






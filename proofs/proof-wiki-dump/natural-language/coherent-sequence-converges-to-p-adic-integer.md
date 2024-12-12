# 

Source: https://proofwiki.org/wiki/Coherent_Sequence_Converges_to_P-adic_Integer

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\sequence {\alpha_n}$ be a coherent sequence. 
Let $\Z_p$ be the $p$-adic integers.

Then the sequence $\sequence {\alpha_n}$ converges to some $x \in \Z_p$.

That is, there exists $x \in \Z_p$ such that:

$\ds \lim_{n \mathop \to \infty} \alpha_n = x$


Proof
From Coherent Sequence is Partial Sum of P-adic Expansion there exists a unique $p$-adic expansion of the form:

$\ds \sum_{n \mathop = 0}^\infty d_n p^n$
such that:

$\forall n \in \N: \alpha_n = \ds \sum_{i \mathop = 0}^n d_i p^i$
From P-adic Expansion Converges to P-adic Number:

$\exists x \in \Q_p : \ds \lim_{n \mathop \to \infty} \alpha_n = x$
By definition of a coherent sequence:

$\forall n \in \N: \alpha_n \in \Z \subseteq \Z_p$
By definition, the $p$-adic integers $\Z_p$ is the closed ball $\map {B^-_1} 0$.
From Closed Ball of Non-Archimedean Division Ring is Clopen, $\Z_p$ is closed in $\norm{\,\cdot\,}_p$.
From Subset of Metric Space contains Limits of Sequences iff Closed:

$x \in \Z_p$
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.3$ Exploring $\Q_p$





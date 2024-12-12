# 

Source: https://proofwiki.org/wiki/Completion_Theorem_(Metric_Space)/Lemma_4

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\tilde M = \struct {\tilde A, \tilde d}$ be a completion of $\struct {A, d}$.
Then:

$\tilde M = \struct {\tilde A, \tilde d}$ is unique up to isometry.

That is, if $\struct {\hat A, \hat d}$ is another completion of $\struct {A, d}$, then there is a bijection $\tau: \tilde A \leftrightarrow \hat A$ such that:

$(1): \quad \tau$ restricts to the identity on $x$:
$\forall x \in A : \map \tau x = x$
$(2): \quad \tau$ preserves metrics:
$\forall x_1, x_2 \in A : \map {\hat d} {\map \tau {x_1}, \map \tau {x_2} } = \map {\tilde d} {x_1, x_2}$


Proof
Let $M_1 = \struct {\tilde{A_1}, \tilde{d_1}, \phi_1}$ and $M_2 = \struct {\tilde{A_2}, \tilde{d_2}, \phi_2}$ be two completions of $\struct {A, d}$.
Here, $\phi_1: A \to A_1$ and $\phi_2: A \to A_2$ are isometries

By Composite of Isometries is Isometry, $\psi = \phi_1^{-1} \circ \phi_2$ gives an isometry from $\phi_1 \sqbrk A$ to $\phi_2 \sqbrk A$.


There is believed to be a mistake here, possibly a typo.In particular: I think this should be $\phi_2 \circ \phi_1^{-1}$, since $\phi_2$ maps into $A_2$ which has nothing to do with $A_1$. Can someone sanity check?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
The sets $\phi_1 \sqbrk A$ and $\phi_2 \sqbrk A$ are dense in $A_1$ and $A_2$ respectively.
Thus we can extend $\psi$ continuously to a map $\psi: A_1 \to A_2$.


This article, or a section of it, needs explaining.In particular: That needs a result to be linked toYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
That is, for $x \in A_1$, we can find a Cauchy sequence $\sequence {w_n}$ in $A_1$ with limit $x$.
Then we define:

$\ds \map \psi x := \lim_{n \mathop \to \infty} \map \psi {w_n}$
which converges as $A_2$ is complete.
By Metric Space is Hausdorff, $A$ is a Hausdorff space.
By Hausdorff Condition is Preserved under Homeomorphism, $A_1$ and $A_2$ are also Hausdorff.
Therefore, by Convergent Sequence in Hausdorff Space has Unique Limit, $\psi$ is well-defined.
$\Box$

It is to be shown that $\psi$ is surjective:
For $y \in \tilde {A_2}$, let $\sequence {w_n'}$ be a Cauchy sequence in $\phi_2 \sqbrk A$ with limit $y$ in $\tilde {A_2}$.
Let $z_n$ be the preimage of the $w_n'$ under $\psi$.
Then, as $A_2$ is Hausdorff:

$\ds \lim_{n \mathop \to \infty} \map \psi {z_n} = y$
as required.
$\Box$

injectivity of $\psi$ holds because $A_1$ is Hausdorff, as follows:
Suppose that:

$\ds \lim_{n \mathop \to \infty} \map \psi {w_n} = \lim_{n \mathop \to \infty} \map \psi {w_n'}$
$\ds \lim_{n \mathop \to \infty} w_n = w$
and:

$\ds \lim_{n \mathop \to \infty} w_n' = w'$
For $\epsilon > 0$, pick $M \in \N$ such that $\map \psi {w_n}$, $\map \psi {w_n'}$ lie in the open $\epsilon$-ball $\map {B_{\epsilon / 2} } {\map \psi w}$ for all $n \ge M$.
Then we have:

$\map {\tilde {d_1} } {w_n, w_n'} = \map {\tilde {d_2} } {\map \psi {w_n}, \map \psi {w_n'} } \le \epsilon$
As $A_1$ is Hausdorff, we conclude $w = w'$, and the task is complete.
$\Box$

Finally, from Distance Function of Metric Space is Continuous, it follows that $\psi$ is an isometry on all of $A_1$, and the proof is complete.
$\blacksquare$






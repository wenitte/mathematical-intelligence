# 

Source: https://proofwiki.org/wiki/Implicit_Function_Theorem_for_Lipschitz_Contraction_at_Point

Theorem
Let $M$ and $N$ be metric spaces.
Let $M$ be complete.
Let $f: M \times N \to M$ be a uniform contraction.

Then for all $t \in N$ there exists a unique $\map g t \in M$ such that $\map f {\map g t, t} = \map g t$, and if $f$ is Lipschitz continuous at a point $\tuple {\map g t, t}$, then $g$ is Lipschitz continuous at $t$.


Proof
For every $t \in N$, the mapping:

$f_t : M \to M : x \mapsto \map f {x, t}$ is a contraction mapping.

This article, or a section of it, needs explaining.In particular: Source for above statement? What exactly does $f_t$ mean here?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By the Banach Fixed-Point Theorem, there exists a unique $\map g t \in M$ such that $\map {f_t} {\map g t} = \map g t$.
Let $f$ be Lipschitz continuous at $\tuple {\map g t, t}$.
We show that $g$ is Lipschitz continuous at $t$.
Let $K < 1$ be a uniform Lipschitz constant for $f$.
Let $L$ be a Lipschitz constant for $f$ at $a$.
Let $s\in N$.
Then














\(\ds \map d {\map g s, \map g t}\)

\(=\)







\(\ds \map d {\map f {\map g s, s}, \map f {\map g t, t} }\)





Definition of $g$














\(\ds \)

\(\le\)







\(\ds \map d {\map f {\map g s, s}, \map f {\map g t, s} } + \map d {\map f {\map g t, s}, \map f {\map g t, t} }\)





Definition of Metric














\(\ds \)

\(\le\)







\(\ds K \cdot \map d {\map g s, \map g t} + \map d {\map f {\map g t, s}, \map f {\map g t, t} }\)





$f$ is a uniform contraction



and thus:














\(\ds \map d {\map g s, \map g t}\)

\(\le\)







\(\ds \dfrac 1 {1 - K} \map d {\map f {\map g t, s}, \map f {\map g t, t} }\)




















\(\ds \)

\(\le\)







\(\ds \dfrac L {1 - K} \map d {s, t}\)





$f$ is Lipschitz continuous at $\tuple {\map g t, t}$



Thus $g$ is Lipschitz continuous at $t$.
$\blacksquare$


Also see
Implicit Function Theorem for Lipschitz Contractions





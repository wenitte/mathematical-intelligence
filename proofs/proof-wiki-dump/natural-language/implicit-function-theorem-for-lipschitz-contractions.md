# 

Source: https://proofwiki.org/wiki/Implicit_Function_Theorem_for_Lipschitz_Contractions

Theorem
Let $M$ and $N$ be metric spaces.
Let $M$ be complete.
Let $f : M \times N \to M$ be a Lipschitz continuous uniform contraction.

Then for all $t\in N$ there exists a unique $\map g t \in M$ such that $\map f {\map g t, t} = \map g t$, and the mapping $g : N \to M$ is Lipschitz continuous.


Proof
For every $t\in N$, the mapping:

$f_t : M \to M : x \mapsto \map f {x, t}$ is a contraction mapping.
By the Banach Fixed-Point Theorem, there exists a unique $\map g t \in M$ such that $\map {f_t} {\map g t} = \map g t$.
We show that $g$ is Lipschitz continuous.
Let $K<1$ be a uniform Lipschitz constant for $f$.
Let $L$ be a Lipschitz constant for $f$.
Let $s,t\in N$.
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





$f$ is Lipschitz continuous



Thus $g$ is Lipschitz continuous.
$\blacksquare$






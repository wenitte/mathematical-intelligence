# 

Source: https://proofwiki.org/wiki/Dirichlet_Function_is_Discontinuous

Theorem
Let $D: \R \to \R$ denote the Dirichlet function:

$\forall x \in \R: \map D x = \begin {cases} c & : x \in \Q \\ d & : x \notin \Q \end {cases}$
where $\Q$ denotes the set of rational numbers.

Then $D$ is discontinuous at every $x \in \R$.


Proof
Let $\epsilon = \dfrac {\size {c - d} } 2$.

Let $x \in \Q$.
Let $\delta \in \R_{>0}$ be arbitrary.

Let $y \in \Q$ such that $\size {x - y} < \delta$.
Without loss of generality, let $y > x$.
From Between two Rational Numbers exists Irrational Number:

$\exists z \in \R \setminus \Q: x < z < y$
and so:

$\size {\map D x - \map D z} = \size {c - d} > \epsilon$
Similarly if $y < x$:

$\exists z \in \R \setminus \Q: y < z < x: \size {\map D x - \map D z} > \epsilon$
and by definition of continuity $D$ is discontinuous at $x$.
$\Box$

Let $x \in \R \setminus \Q$.
Let $\delta \in \R_{>0}$ be arbitrary.

Let $y \in \R \setminus \Q$ such that $\size {x - y} < \delta$.
Without loss of generality, let $y > x$.
From Between two Real Numbers exists Rational Number:

$\exists z \in \Q: x < z < y$
and so:

$\size {\map D x - \map D z} = \size {c - d} > \epsilon$
Similarly if $y < x$:

$\exists z \in \Q: y < z < x: \size {\map D x - \map D z} > \epsilon$
and by definition of continuity $D$ is discontinuous at $x$.
$\Box$

$D$ has been shown to be discontinuous at all $x \in \R$ whether $x$ is rational or irrational.
Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: Exercise $1.5: 20$





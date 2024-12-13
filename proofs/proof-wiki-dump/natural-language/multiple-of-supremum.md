# 

Source: https://proofwiki.org/wiki/Multiple_of_Supremum

Theorem
Let $S \subseteq \R: S \ne \O$ be a non-empty subset of the set of real numbers $\R$.
Let $S$ be bounded above.
Let $z \in \R: z > 0$ be a positive real number.

Then:

$\ds \map {\sup_{x \mathop \in S} } {z x} = z \map {\sup_{x \mathop \in S} } x$


Proof
Let $B = \map \sup S$.
Then by definition, $B$ is the smallest number such that $x \in S \implies x \le B$.
Let $T = \set {z x: x \in S}$.
Because $z > 0$, it follows that:

$\forall x \in S: z x \le z B$
So $T$ is bounded above by $z B$.

By the Continuum Property, $T$ has a supremum which we will call $C$.
We need to show that $C = z B$.
Since $z B$ is an upper bound for $T$, and $C$ is the smallest upper bound for $T$, it follows that $C \le z B$.
Now as $z > 0$ and is a real number:

$\exists z^{-1} \in \R: z^{-1} > 0$
So we can reverse the roles of $S$ and $T$:

$S = \set {z^{-1} y: y \in T}$
We know that $C$ is the smallest number such that:

$\forall y \in T: y \le C$
So it follows that:

$\forall y \in T: z^{-1} y \le z^{-1} C$
So $z^{-1} C$ is an upper bound for $S$.
But $B$ is the smallest upper bound for $S$.
So:

$B \le z^{-1} C \implies z B \le C$
So we have shown that:

$z B \le C$ and $C \le z B$
Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: $2.11$: Manipulations with $\sup$ and $\inf$: Theorem $\S 2.12$





# 

Source: https://proofwiki.org/wiki/Multiple_of_Infimum

Theorem
Let $T \subseteq \R: T \ne \O$ be a non-empty subset of the set of real numbers $\R$.
Let $T$ be bounded below.
Let $z \in \R: z > 0$ be a (strictly) positive real number.

Then:

$\ds \map {\inf_{x \mathop \in T} } {z x} = z \map {\inf_{x \mathop \in T} } x$
where $\inf$ denotes infimum.


Proof
From Negative of Infimum is Supremum of Negatives:

$\ds -\inf_{x \mathop \in T} x = \map {\sup_{x \mathop \in T} } {-x} \implies \inf_{x \mathop \in T} x = -\map {\sup_{x \mathop \in T} } {-x}$
Let $S = \set {x \in \R: -x \in T}$.
From Negative of Infimum is Supremum of Negatives, $S$ is bounded above.
From Multiple of Supremum:

$\ds \map {\sup_{x \mathop \in S} } {z x} = z \map {\sup_{x \mathop \in S} } x$
Hence:

$\ds \map {\inf_{x \mathop \in T} } {z x} = -\map {\sup_{x \mathop \in T} } {-z x} = -z \map {\sup_{x \mathop \in T} } {-x} = z \map {\inf_{x \mathop \in T} } x$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: Exercise $\S 2.13 \ (3)$





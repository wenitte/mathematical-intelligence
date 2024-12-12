# 

Source: https://proofwiki.org/wiki/Cartesian_Product_Preserves_Cardinality

Theorem
Let $R$, $S$, and $T$ be sets.
Suppose that $S$ is equivalent to $T$.

Then:

$R \times S \sim R \times T$
$S \times R \sim T \times R$


Proof
Since $S$ and $T$ are equivalent, there exists a bijection $f: S \to T$.
Let $g: T \to S$ be the inverse of $f$; its existence is assured by Bijection iff Left and Right Inverse.
Define $\hat f: R \times S \to R \times T$ by:

$\map {\hat f} {r, s} := \tuple {r, \map f s}$
Next, define $\hat g: R \times T \to R \times S$ by:

$\map {\hat g} {r, t} := \tuple {r, \map g t}$

Then, for all $\tuple {r, s} \in R \times S$:














\(\ds \hat g \circ \map {\hat f} {r, s}\)

\(=\)







\(\ds \map {\hat g} {r, \map f s}\)




















\(\ds \)

\(=\)







\(\ds \tuple {r, \map g {\map f s} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {r, s}\)





$g$ is the inverse of $f$



Similarly, for all $\tuple {r, t} \in R \times T$:














\(\ds \hat f \circ \map {\hat g} {r, s}\)

\(=\)







\(\ds \map {\hat f} {r, \map g s}\)




















\(\ds \)

\(=\)







\(\ds \tuple {r, \map f {\map g s} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {r, s}\)





$g$ is the inverse of $f$



Thus, it follows that $\hat g$ is a inverse for $\hat f$.
From Bijection iff Left and Right Inverse, we conclude $\hat f$ is a bijection.

Hence $R \times S \sim R \times T$, by definition of set equivalence.
Mutatis mutandis, the other relation also follows.
$\blacksquare$






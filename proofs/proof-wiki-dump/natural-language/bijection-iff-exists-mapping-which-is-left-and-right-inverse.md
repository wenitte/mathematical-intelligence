# 

Source: https://proofwiki.org/wiki/Bijection_iff_exists_Mapping_which_is_Left_and_Right_Inverse



Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.

Then $f$ is a bijection if and only if:

there exists a mapping $g: T \to S$ such that:
$g \circ f = I_S$
$f \circ g = I_T$
where $I_S$ and $I_T$ are the identity mappings on $S$ and $T$ respectively.


Proof
Necessary Condition
Let $f$ be a bijection.
Then for each $y \in T$ there exists one and only one $x \in S$ such that $\map f x = y$.
That is, that there exists a mapping $g: T \to S$ with the property that:

$\forall y \in T: \exists x \in S: \map g y = x$
Let $y \in T$.
Let $x = g \map g y$.
Then:














\(\ds y\)

\(=\)







\(\ds \map f {\map g y}\)




















\(\ds \)

\(=\)







\(\ds \map {f \circ g} y\)









and:














\(\ds x\)

\(=\)







\(\ds \map g {\map f x}\)




















\(\ds \)

\(=\)







\(\ds \map {f \circ g} x\)









demonstrating that $g$ has the property that:

$g \circ f = I_S$
$f \circ g = I_T$
$\Box$


Sufficient Condition
Suppose there exists a $g$ which satisfies the conditions on $f$.
By Condition for Composite Mapping to be Identity:

$(1): \quad$ from $g \circ f = I_S$ it follows that $f$ is an injection.
$(2): \quad$ from $f \circ g = I_T$ it follows that $f$ is a surjection.
Thus, by definition, $f$ is a bijection.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.3$: Mappings: Theorem $2$





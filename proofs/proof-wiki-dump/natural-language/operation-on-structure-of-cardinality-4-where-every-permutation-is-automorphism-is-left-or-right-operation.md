# 

Source: https://proofwiki.org/wiki/Operation_on_Structure_of_Cardinality_4%2B_where_Every_Permutation_is_Automorphism_is_Left_or_Right_Operation

Theorem
Let $S$ be a set whose cardinality is at least $4$.
Let $\struct {S, \circ}$ be an algebraic structure on $S$ such that every permutation on $S$ is an automorphism on $\struct {S, \circ}$.

Then $\circ$ is either the left operation or the right operation.


Proof
From Structure of Cardinality 3+ where Every Permutation is Automorphism is Idempotent, we have that $\circ$ is idempotent:

$\forall a \in S: a \circ a = a$

Aiming for a contradiction, suppose $\circ$ is such that:

$x \circ y = z$
for some distinct $x, y, z \in S$.
As $S$ has cardinality of at least $4$, there exists $w \in S$ such that $w \ne x$, $w \ne y$ and $w \ne z$.
Let $f$ be a permutation on $S$ such that:

$\map f x = x$
$\map f y = y$
$\map f z = w$
Then:














\(\ds w\)

\(=\)







\(\ds \map f z\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \map f {x \circ y}\)





by hypothesis: $x \circ y = z$














\(\ds \)

\(=\)







\(\ds \map f x \circ \map f y\)





by hypothesis: $f$ is an automorphism














\(\ds \)

\(=\)







\(\ds x \circ y\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds z\)





by hypothesis: $x \circ y = z$



This contradicts our assertion that $w$ and $z$ are distinct.

Hence we have shown that:

$\forall x, y \in S: x \circ y = x \lor x \circ y  = y$
$\Box$

Aiming for a contradiction, suppose $\circ$ is neither the left operation nor the right operation.
From the above, that means there exist $w, x, y, z \in S$ such that:














\(\ds x \circ y\)

\(=\)







\(\ds x\)




















\(\ds w \circ z\)

\(=\)







\(\ds z\)










Let $f$ be a permutation on $S$ such that:














\(\ds \map f x\)

\(=\)







\(\ds w\)




















\(\ds \map f y\)

\(=\)







\(\ds z\)




















\(\ds \map f z\)

\(=\)







\(\ds x\)




















\(\ds \map f w\)

\(=\)







\(\ds y\)










Then we have:














\(\ds w\)

\(=\)







\(\ds \map f x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \map f {x \circ y}\)





by hypothesis: $x \circ y = x$














\(\ds \)

\(=\)







\(\ds \map f x \circ \map f y\)





by hypothesis: $f$ is an automorphism














\(\ds \)

\(=\)







\(\ds w \circ z\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds z\)





by hypothesis: $w \circ z = z$



This contradicts our assertion that $w$ and $z$ are distinct.
Hence $\circ$ is either the left operation or the right operation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Exercise $6.11 \ \text {(d)}$





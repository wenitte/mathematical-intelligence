# 

Source: https://proofwiki.org/wiki/Constant_Mapping_is_Non-Commutative

Theorem
Let $S$ be a set whose cardinality is greater than one.
Let $f: S \to S$ and $g: S \to S$ be constant mappings on $S$.

Then:

$f \circ g \ne g \circ f$
where $\circ$ denotes composition of mappings.


Proof
First note that if $S$ is a singleton, then there exists only one constant mapping on $S$.
In such a circumstance, $f = g$ and so $f \circ g \ne g \circ f$.
$\Box$

So, let $\card S > 1$.
Then there exist at least $2$ distinct elements $a$ and $b$ of $S$.
Thus, let $f$ and $g$ be defined as:

$\forall x \in S: \map f x = a$
$\forall x \in S: \map g x = b$
for some $a, b \in S$ such that $a \ne b$.

We have that:














\(\ds \map {\paren {f \circ g} } x\)

\(=\)







\(\ds \map f {\map g x}\)




















\(\ds \)

\(=\)







\(\ds \map f b\)





Definition of $\map g x$














\(\ds \)

\(=\)







\(\ds a\)





Definition of $\map f x$














\(\ds \map {\paren {g \circ f} } x\)

\(=\)







\(\ds \map g {\map f x}\)




















\(\ds \)

\(=\)







\(\ds \map g a\)





Definition of $\map f x$














\(\ds \)

\(=\)







\(\ds b\)





Definition of $\map g x$




So $f \circ g \ne g \circ f$ as required.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.3$: Mappings: Exercise $8$





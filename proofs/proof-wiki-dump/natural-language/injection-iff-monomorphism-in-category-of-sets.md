# 

Source: https://proofwiki.org/wiki/Injection_iff_Monomorphism_in_Category_of_Sets



Theorem
Let $\mathbf{Set}$ be the category of sets.
Let $f: X \to Y$ be a morphism in $\mathbf{Set}$, i.e. a mapping.

Then $f$ is an injection if and only if it is a monomorphism.


Proof
Necessary Condition
Suppose that $f$ is injective.
Suppose further that we have mappings $g, h: Z \to X$ such that $g \ne h$.
Then necessarily there exists some $z \in Z$ such that $g \left({z}\right) \ne h \left({z}\right)$ by Equality of Mappings.

As $f$ is injective, it follows that:

$\map f {\map g z} \ne \map f {\map h z}$
which, again by Equality of Mappings, means that $f \circ g \ne f \circ h$.
Hence $f$ is monic, by the Rule of Transposition.
$\Box$


Sufficient Condition
Suppose that $f: X \rightarrowtail Y$ is a monomorphism.
By definition of injection, it will suffice to show that:

$x \ne x' \implies \map f x \ne \map f {x'}$

To this end, consider a singleton $\set a$, and define:

$\bar x: \set a \to X, \map {\bar x} a := x$
$\bar x': \set a \to X, \map {\bar x'} a := x'$
In particular, $\bar x \ne \bar x'$, and so, $f$ being monic, we deduce:

$f \circ \bar x \ne f \circ \bar x'$
It follows that it must be that:














\(\ds \map f x\)

\(=\)







\(\ds \map f {\map {\bar x} a}\)




















\(\ds \)

\(\ne\)







\(\ds \map f {\map {\bar x'} a}\)





Equality of Mappings














\(\ds \)

\(=\)







\(\ds \map f {x'}\)









Hence $f$ is injective.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 2.1$: Proposition $2.2$





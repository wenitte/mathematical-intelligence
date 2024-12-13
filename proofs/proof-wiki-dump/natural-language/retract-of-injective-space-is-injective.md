# 

Source: https://proofwiki.org/wiki/Retract_of_Injective_Space_is_Injective

Theorem
Let $T = \struct {S, \tau}$ be an injective topological space.
Let $R = \struct {Z, \tau'}$ be a retract of $T$.

Then $R$ is injective.


Proof
By definition of retract:

there exists a continuous retraction $r: S \to Z$ of $T$.
Let $\YY = \struct {Y, \sigma}$ be a topological space.
Let $f: Y \to Z$ be a continuous mapping.
Let $\XX = \struct {X, \sigma'}$ such that

$\YY$ is topological subspace of $\XX$.
By Inclusion Mapping is Continuous:

$i_Z$ is continuous $\paren {R \to T}$
where $i_Z$ denotes the inclusion mapping from $Z$ in $S$.
By Composite of Continuous Mappings is Continuous:

$i_Z \circ f: Y \to S$ is continuous.
By definition of injective space:

there exists a continuous mapping $g: X \to S: g \restriction Y = i_Z \circ f$
Define $h := r \circ g$
By Composite of Continuous Mappings is Continuous:

$h$ is continuous.
We will prove that

$h \restriction Y = f$
By definition of topological subspace:

$Y \subseteq X$ and $Z \subseteq S$
Thus by definitions of composition of mappings and restriction of mapping:

$h \restriction Y: Y \to Z$ and $f: Y \to Z$
Let $y \in Y$.
By Restriction of Composition is Composition of Restriction:

$h \restriction Y = r \circ \paren {g \restriction Y}$
By definition of mapping:

$\map f y \in Z$
Thus














\(\ds \map {\paren {h \restriction Y} } y\)

\(=\)







\(\ds \map r {\map {\paren {i_Z \circ f} } y}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map r {\map {i_Z} {\map f y} }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map r {\map f y}\)





Definition of Inclusion Mapping














\(\ds \)

\(=\)







\(\ds \map f y\)





Definition of Retraction (Topology)



$\blacksquare$


Sources
Mizar article WAYBEL18:8





# 

Source: https://proofwiki.org/wiki/Composition_of_Inflationary_and_Idempotent_Mappings



Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $f$ and $g$ be inflationary and idempotent mappings on $S$.

Then the following are equivalent:

$(1): \quad f \circ g$ and $g \circ f$ are both idempotent
$(2): \quad f$ and $g$ commute (that is, $f \circ g = g \circ f$)
$(3): \quad \Img {f \circ g} = \Img {g \circ f}$
where:

$\circ$ represents composition
$\Img f$ represents the image of a mapping $f$.


Proof
$(2)$ implies $(1)$
Follows from Composition of Commuting Idempotent Mappings is Idempotent.
$\Box$


$(1)$ implies $(2)$
Suppose that $f \circ g$ and $g \circ f$ are idempotent.
Then $\paren {f \circ g} \circ \paren {f \circ g} = f \circ g$.

By Composition of Mappings is Associative and the definition of composition, we have for each $x \in S$:

$\map f {\map g {\map f {\map g x} } } = \map f {\map g x}$
Because $\preceq$ is an ordering and hence reflexive:

$\map f {\map g {\map f {\map g x} } } \preceq \map f {\map g x}$
Since $f$ is inflationary:

$\map g {\map f {\map g x} } \preceq \map f {\map g {\map f {\map g x} } }$
Thus since $\preceq$ is an ordering and hence transitive:

$\map g {\map f {\map g x} } \preceq \map f {\map g x}$

Since $g$ is inflationary:

$\map f {\map g x} \preceq \map g {\map f {\map g x} }$

Thus since $\preceq$ is an ordering and hence antisymmetric:

$\map g {\map f {\map g x} } = \map f {\map g x}$
Since this holds for all $x \in S$, Equality of Mappings shows that:

$g \circ f \circ g = f \circ g$
The same argument, with the roles of $f$ and $g$ reversed, shows that:

$f \circ g \circ f = g \circ f$

Combining everything, we obtain:

$f \circ g = f \circ \paren {g \circ f \circ g} = f \circ \paren {g \circ f} = g \circ f$
Thus $f \circ g = g \circ f$, so $f$ and $g$ commute.
$\Box$


$(2)$ implies $(3)$
Equals substitute for equals.
$\Box$


$(3)$ implies $(1)$
Follows from Composition of Idempotent Mappings.
$\blacksquare$






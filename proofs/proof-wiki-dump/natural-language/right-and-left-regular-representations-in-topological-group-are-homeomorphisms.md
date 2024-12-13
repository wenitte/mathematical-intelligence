# 

Source: https://proofwiki.org/wiki/Right_and_Left_Regular_Representations_in_Topological_Group_are_Homeomorphisms

Theorem
Let $\struct {G, \cdot, \tau}$ be a topological group.
Let $g \in G$ be an element of $G$.

Then the left and right regular representations with respect to $g$:

$L_g: \struct {G, \tau} \to \struct {G, \tau}$
and:

$R_g: \struct {G, \tau} \to \struct {G, \tau}$
are homeomorphisms.


Proof
Let:

$m: \struct {G, \tau} \times \struct {G, \tau} \to \struct {G, \tau}$
be the mapping defined as:

$\forall \tuple {x, y} \in G \times G: \map m {x, y} = x \cdot y$
From the definition of topological group, $m$ is a continuous mapping.

Let $\phi_1: \struct {G, \tau} \to \struct {G, \tau} \times \struct {G, \tau}$ be the mapping defined as:

$\map {\phi_1} x = \tuple {g, x}$
Let $\phi_2: \struct {G, \tau} \to \struct {G, \tau} \times \struct {G, \tau}$ be the mapping defined as:

$\map {\phi_2} x = \tuple {x, g}$

Let $\pr_1: \struct {G, \tau} \times \struct {G, \tau} \to \struct {G, \tau}$ be the first projection on $\struct {G, \tau} \times \struct {G, \tau}$:

$\forall \tuple {x, g} \in G \times G: \map {\pr_1} {x, g} = x$
Let $\pr_2: \struct {G, \tau} \times \struct {G, \tau} \to \struct {G, \tau}$ be the second projection on $\struct {G, \tau} \times \struct {G, \tau}$:

$\forall \tuple {g, x} \in G \times G: \map {\pr_2} {g, x} = x$

By inspection, it is seen that:

$\phi_1$ is the injective restriction to $g \times G$ of the inverse of $\pr_2$.
$\phi_2$ is the injective restriction to $G \times g$ of the inverse of $\pr_1$.

Let $\map {\phi_1} x = \map {\phi_1} y$ for some $x, y \in G$.
Then by definition of $\phi_1$:

$\tuple {g, x} = \tuple {g, y}$
By Equality of Ordered Pairs:

$x = y$
and so $\phi_1$ is injective.
Similarly let $\map {\phi_2} x = \map {\phi_2} y$ for some $x, y \in G$.
Then by definition of $\phi_2$:

$\tuple {x, g} = \tuple {y, g}$
By Equality of Ordered Pairs:

$x = y$
and so $\phi_2$ is injective.

Let $\tuple {g, y} \in G \times G$.
Then:

$\exists y \in G: \map {\phi_1} y = \tuple {g, y}$
and so $\phi_1$ is surjective.

Similarly let $\tuple {y, g} \in G \times G$.
Then:

$\exists y \in G: \map {\phi_2} y = \tuple {y, g}$
and so $\phi_2$ is surjective.
Thus as $\phi_1$ and $\phi_2$ are both injective and surjective, they are by definition both bijections.

From Projection from Product Topology is Open, both $\pr_1$ and $\pr_2$ are open.

From Bijection is Open iff Inverse is Continuous:

$\phi_1$ and $\phi_2$ are continuous.

From Composite of Continuous Mappings is Continuous:

$m \circ \phi_1: \struct {G, \tau} \to \struct {G, \tau}$
and:

$m \circ \phi_2: \struct {G, \tau} \to \struct {G, \tau}$
are continuous mappings.

By definition of left regular representation:

$\forall x \in G: \map {L_g} x = g \cdot x = \map m {g, x} = m \circ \map {\phi_1} x$
Similarly, by definition of right regular representation:

$\forall x \in G: \map {R_g} x = x \cdot g = \map m {x, g} = m \circ \map {\phi_2} x$
Thus $L_g$ and $R_g$ are continuous.

By definition of inverse element of the group $G$:

$\map {L_{g^{-1} } } x = g^{-1} \cdot x$
$\map {R_{g^{-1} } } x = x \cdot g^{-1}$
Thus for all $x \in G$:

$\map {L_g \circ L_{g^{-1} } } x = g \cdot \paren {g^{-1} \cdot x} = x$
$\map {L_{g^{-1} } \circ L_g} x = g^{-1} \cdot \paren {g \cdot x} = x$
and similarly:

$\map {R_g \circ R_{g^{-1} } } x = \paren {x \cdot g^{-1} } \cdot g = x$
$\map {R_{g^{-1} } \circ R_g} x = \paren {x \cdot g} \cdot g^{-1} = x$
So:

$L_g \circ L_{g^{-1} } = L_{g^{-1} } \circ L_g = I_G$
$R_g \circ R_{g^{-1} } = R_{g^{-1} } \circ R_g = I_G$
where $I_G$ is the identity mapping on $G$.
Thus by definition, $L_{g^{-1} }$ and $R_{g^{-1} }$ are the inverses of $L_g$ and $R_g$ respectively.
As $L_{g^{-1} }$ and $R_{g^{-1} }$ are themselves regular representations with respect to elements of $G$, they are themselves continuous bijections.

So $L_g$ and $R_g$ are continuous bijections whose inverses are likewise continuous bijections.
Hence, by definition, $L_g$ and $R_g$ are homeomorphisms.
$\blacksquare$






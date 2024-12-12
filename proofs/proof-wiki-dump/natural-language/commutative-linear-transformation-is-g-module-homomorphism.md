# 

Source: https://proofwiki.org/wiki/Commutative_Linear_Transformation_is_G-Module_Homomorphism


It has been suggested that this page or section be merged into Definition:G-Module Homomorphism.In particular: This is the definition of a $G$-module homomorphism. We might need to amend that definition to better present the perspective of this composition, i.e. to include the perspective of representationsTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

It has been suggested that this page be renamed.In particular: nothing commutative about itTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $\rho: G \to \GL V$ be a representation.
Let $f: V \to V$ be a linear transformation.
Let:

$\forall g \in G: \map \rho g \circ f = f \circ \map \rho g$

Then $f: V \to V$ is a $G$-module homomorphism.


Proof
Let:

$\forall g \in G: \map \rho g \circ f = f \circ \map \rho g$
Let $v$ be a vector $v \in V$.
Then:

$\map {\map \rho g} {\map f v} = \map f {\map {\map \rho g} v}$
Using the properties from Correspondence between Linear Group Actions and Linear Representations:

there exists a $G$-module $\struct {V, \phi}$  associated with $\rho$ such that:
$\map \phi {g, v} = \map {\map \rho g} v$
Applying the last formula:

$\map {\map \rho g} {\map f v} = \map \phi {g, \map f v}$
and:

$\map f {\map \phi {g, v} } = \map f {\map {\map \rho g} v}$
Thus our assumption is equivalent to:

$\map f {\map \phi {g, v} } = \map \phi {g, \map f v}$
Hence, by definition of $G$-module homomorphism, $f: V \to V$ is a $G$-module homomorphism.
$\blacksquare$






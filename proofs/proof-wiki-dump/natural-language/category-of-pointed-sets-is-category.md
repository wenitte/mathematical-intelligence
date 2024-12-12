# 

Source: https://proofwiki.org/wiki/Category_of_Pointed_Sets_is_Category

Theorem
Let $\mathbf{Set}_*$ be the category of pointed sets.
Then $\mathbf{Set}_*$ is a metacategory. 


Proof
The axioms $(\text C 1)$ to $(\text C 3)$ are checked for a metacategory.

Pick any two morphisms $f : \struct {A, a} \to \struct {B, b}$ and $g : \struct {B, b} \to \struct {C, c}$ from $\mathbf{Set}_*$.
By the definition of composition in the category of pointed sets:

$\map {\paren {g \circ f} } a = \map g {\map f a} = \map g b = c$
whence $g \circ f$ is a pointed mapping from $\struct {A, a}$ to $\struct {C, c}$.

That composition of pointed mappings is associative follows from Composition of Mappings is Associative.

For any object $\struct {A, a}$, the identity mapping $\operatorname{id}_A$ induces a pointed map $\operatorname{id}_{\struct {A, a} }: \struct {A, a} \to \struct {A, a}$, as $\map {\operatorname{id}_A} a = a$.
By Identity Mapping is Left Identity and Identity Mapping is Right Identity, this is the identity morphism for $\struct {A, a}$.
$\blacksquare$






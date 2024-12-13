# 

Source: https://proofwiki.org/wiki/Metacategory_Induces_Morphisms-Only_Metacategory

Theorem
Let $\mathbf C$ be a metacategory.

Then the collection of morphisms $\mathbf C_1$ of $\mathbf C$ is a morphisms-only metacategory.


Proof
In order to check that $\mathbf C_1$ is a morphisms-only metacategory, we need to interpret the symbols $\operatorname{dom}$, $\operatorname{cod}$ and $R_\circ$.
Set $\operatorname{dom} x := \operatorname{id}_{\operatorname{dom} x}$, and $\operatorname{cod} x := \operatorname{id}_{\operatorname{cod} x}$ with the symbols on the right as defined in $\mathbf C$.
Further, put $\map {R_\circ} {x, y, z} \iff x \circ y = z$.

Now we can proceed to verify the axioms for a morphisms-only metacategory.
For $(MOCT0)$, that is (omitting universal quantifiers):

$\paren {\map {R_\circ} {x, y, z} \land \map {R_\circ} {x, y, z'} } \implies z = z'$
we conclude that the antecedent holds iff $z = x \circ y = z'$, hence $(MOCT0)$ holds.
$\Box$

The content of $(MOCT1)$ is:

$\operatorname{dom} x = \operatorname{cod} y \iff \exists z: \map {R_\circ} {x, y, z}$
This says that a composite morphism $x \circ y$ is defined if and only if $x$ and $y$ are composable morphisms.
$\Box$

Axiom $(MOCT2)$ is the statement:

$\map {R_\circ} {x, y, z} \implies \paren {\operatorname{dom} z = \operatorname{dom} y \land \operatorname{cod} z = \operatorname{cod} x}$
which prescribes the domain and codomain of $x \circ y$.
It follows directly from axiom $(C1)$ for metacategories that this is satisfied by $\mathbf C_1$.
$\Box$

Axiom $(MOCT3)$ is:

$\map {R_\circ} {x, y, a} \land \map {R_\circ} {y, z, b} \implies \paren {\exists w: \map {R_\circ} {x, b, w} \land \map{R_\circ} {a, z, w} }$
which expresses that $\circ$ is an associative operation, exactly as axiom $(C3)$ for metacategories specifies.
$\Box$

Finally, axiom $(MOCT4)$ is the statement:

$\map {R_\circ} {x, \operatorname{dom} x, x} \land \map {R_\circ} {\operatorname{cod} x, x, x}$
which will hold if and only if:

$x \circ \operatorname{id}_{\operatorname{dom} x} = x$
and:

$\operatorname{id}_{\operatorname{cod} x} \circ x = x$
This is the content of axiom $(C2)$ for metacategories.
$\Box$

Having verified the axioms, we conclude $\mathbf C_1$ to be a morphisms-only metacategory.
$\blacksquare$


Also see
Morphisms-Only Metacategory Induces Metacategory
Morphisms-Only Metacategory
Characterization of Metacategory via Equations





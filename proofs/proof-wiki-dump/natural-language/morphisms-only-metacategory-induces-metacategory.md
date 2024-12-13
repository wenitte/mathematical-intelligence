# 

Source: https://proofwiki.org/wiki/Morphisms-Only_Metacategory_Induces_Metacategory

Theorem
Let $\mathbf C$ be a morphisms-only metacategory.

Then $\mathbf C$ induces a metacategory $\mathbf C'$, as follows (phrased to fit with Characterization of Metacategory via Equations):

Define $\mathbf C'_1$ to be the collection $\mathbf C_1$ of morphisms of $\mathbf C$.
Define $\mathbf C'_0$ to be the image of the operation $\operatorname{dom}$ on $\mathbf C_1$.
Define $\operatorname{id}$ to be the identity on $\mathbf C'_0$, and take $\operatorname{dom}$ and $\operatorname{cod}$ as in $\mathbf C$.
Define $\circ$ to be as in $\mathbf C$; that is, $g \circ f$ is the unique element of $\mathbf C_1$ with $\map {R_\circ} {g, f, g \circ f}$.


Proof
It remains to verify that these definitions satisfy the premises for applying Characterization of Metacategory via Equations.

The first of these is the assertion:

$\operatorname{dom} \operatorname{id}_A = A$
Here, $A \in \mathbf C'_0$, so by above definition, there is some $x \in \mathbf C_1$ with $A = \operatorname{dom} x$.
Then also $\operatorname{id}_A = \operatorname{dom} x$; hence it suffices to verify:

$\operatorname{dom} \operatorname{dom} x = \operatorname{dom} x$
From axiom $(MOCT4)$, we have:

$\map {R_\circ} {x, \operatorname{dom} x, x}$
From axiom $(MOCT2)$, this implies:

$\operatorname{dom} x = \operatorname{dom} \operatorname{dom} x$
$\Box$

Now, to verify:

$\operatorname{cod} \operatorname{id}_A = A$
Reasoning as above, this comes down to proving:

$\operatorname{cod} \operatorname{dom} x = \operatorname{dom} x$
Axiom $(MOCT4)$ gives again that $\map {R_\circ} {x, \operatorname{dom} x, x}$ holds.
Axiom $(MOCT1)$ thus yields that:

$\operatorname{cod} \operatorname{dom} x = \operatorname{dom} x$
as required.
$\Box$

For the next two conditions, we have to verify:

$f \circ \operatorname{id}_{\operatorname{dom} f} = f$
and:

$\operatorname{id}_{\operatorname{cod} f} \circ f = f$
Thus, rephrasing in the language of the morphisms-only metacategory $\mathbf C$, this means:

$\map {R_\circ} {f, \operatorname{id}_{\operatorname{dom} f}, f}$
and:

$\map {R_\circ} {\operatorname{id}_{\operatorname{cod} f}, f, f}$
By definition of $\operatorname{id}$, the first of these is contained in axiom $(MOCT4)$.
For the second one, it is first to be shown that $\operatorname{cod} f$ is a legitimate object of $\mathbf C'_0$.
Axiom $(MOCT4)$ again yields us that:

$\map {R_\circ} {\operatorname{cod} f, f, f}$
from which by axiom $(MOCT2)$ it follows that:

$\operatorname{cod} f = \operatorname{dom} \operatorname{cod} f$
Now by definition of $\operatorname{id}$ the second statement can be reduced to:

$\map {R_\circ} {\operatorname{cod} f, f, f}$
which we have already seen to be an axiom.
$\Box$

The conditions:

$\map {\operatorname{dom} } {g \circ f} = \operatorname{dom} f$ and $\map {\operatorname{cod} } {g \circ f} = \operatorname{cod} g$
follow literally from axiom $(MOCT2)$ and the definition of $g \circ f$.
$\Box$

The final associativity axiom:

$h \circ \paren {g \circ f} = \paren {h \circ g} \circ f$
is phrased by $(MOCT3)$.
$\Box$

Having verified all seven conditions, we conclude that $\mathbf C'$ with the defined operations constitutes a metacategory.
$\blacksquare$


Also see
Metacategory Induces Morphisms-Only Metacategory
Definition:Morphisms-Only Metacategory
Characterization of Metacategory via Equations





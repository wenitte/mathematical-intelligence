# 

Source: https://proofwiki.org/wiki/Operating_on_Transitive_Relationships_Compatible_with_Operation


It has been suggested that this page be renamed.In particular: This name is pretty bad but I couldn't come up with anything better.To discuss this page in more detail, feel free to use the talk page.
Theorem
Let $\struct {S, \circ}$ be a magma.
Let $\RR$ be a transitive relation on $S$ which is compatible with $\circ$.
Let $\RR^=$ be the reflexive closure of $\RR$.
Let $x, y, z, w \in S$.

Then the following implications hold:
$(1): \quad$ If $x \mathrel \RR y$ and $z \mathrel \RR w$, then $x \circ z \mathrel \RR y \circ w$.
$(2): \quad$ If $x \mathrel \RR y$ and $z \mathrel {\RR^=} w$, then $x \circ z \mathrel \RR y \circ w$.
$(3): \quad$ If $x \mathrel {\RR^=} y$ and $z \mathrel \RR w$, then $x \circ z \mathrel \RR y \circ w$.
$(4): \quad$ If $x \mathrel {\RR^=} y$ and $z \mathrel {\RR^=} w$, then $x \circ z \mathrel {\RR^=} y \circ w$.


Proof
We will prove $(1)$ and $(2)$. $(3)$ can be proven using precisely the same argument as $(2)$ and $(4)$ follows from $(1)$.
Suppose that $x \mathrel \RR y$ and $z \mathrel \RR w$.
By the definition of compatibility:

$x \mathrel \RR y \implies x \circ z \mathrel \RR y \circ z$
$z \mathrel \RR w \implies y \circ z \mathrel \RR y \circ w$
By transitivity:

$(1): \quad \paren {x \mathrel \RR y} \land \paren {z \mathrel \RR w} \implies x \circ z \mathrel \RR y \circ w$
$\Box$

Suppose $x \mathrel \RR y$ and $z \mathrel {\RR^=} w$.
By Reflexive Closure of Relation Compatible with Operation is Compatible, $\RR^=$ is compatible with $\circ$.
By the definition of compatibility:

$x \mathrel \RR y \implies x \circ z \mathrel \RR y \circ z$
$z \mathrel {\RR^=} w \implies y \circ z \mathrel {\RR^=} y \circ w$
By Extended Transitivity:

$(2): \quad \paren {x \mathrel \RR y} \land \paren {z \mathrel {\RR^=} w} \implies x \circ z \mathrel \RR y \circ w$
$\Box$

$(3)$ can be proven using precisely the same argument as $(2)$.
By Reflexive Closure of Relation Compatible with Operation is Compatible, $\RR^=$ is compatible with $\circ$.
By Reflexive Closure of Transitive Relation is Transitive, $\RR^=$ is transitive.
Thus $(4)$ follows from $(1)$.
$\blacksquare$






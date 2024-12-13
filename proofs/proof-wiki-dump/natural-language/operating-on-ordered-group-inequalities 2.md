# 

Source: https://proofwiki.org/wiki/Operating_on_Ordered_Group_Inequalities

Theorem
Let $\struct {G, \circ, \preccurlyeq}$ be an ordered group.
Let $\prec$ be the reflexive reduction of $\preceq$.
Let $x, y, z, w \in \struct {G, \circ, \preceq}$.

Then the following implications hold:
If $x \prec y$ and $z \prec w$, then $x \circ z \prec y \circ w$.
If $x \prec y$ and $z \preccurlyeq w$, then $x \circ z \prec y \circ w$.
If $x \preccurlyeq y$ and $z \prec w$, then $x \circ z \prec y \circ w$.
If $x \preccurlyeq y$ and $z \preccurlyeq w$, then $x \circ z \preccurlyeq y \circ w$.


Proof
Because:

$\struct {G, \circ, \preccurlyeq}$ is a group
$\preccurlyeq$ is compatible with $\circ$
it follows from Reflexive Reduction of Relation Compatible with Group Operation is Compatible that $\prec$ is compatible with $\circ$ .

By the definition of an ordering, $\preccurlyeq$ is transitive and antisymmetric.
Therefore by Reflexive Reduction of Transitive Antisymmetric Relation is Strict Ordering, $\prec$ is transitive.

The result follows by Operating on Transitive Relationships Compatible with Operation.
$\blacksquare$


Also see
Properties of Ordered Group





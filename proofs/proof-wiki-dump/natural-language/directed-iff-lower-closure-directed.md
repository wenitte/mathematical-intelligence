# 

Source: https://proofwiki.org/wiki/Directed_iff_Lower_Closure_Directed



Theorem
Let $\struct {S, \precsim}$ be a preordered set.
Let $H$ be a non-empty subset of $S$.
Then $H$ is directed if and only if:

$H^\precsim$ is directed
where $H^\precsim$ denotes the lower closure of $H$ with respect to $\precsim$.


Proof
Sufficient Condition
Let us assume that $H$ is directed.
Let $x, y \in H^\precsim$.
By definition of lower closure:

$\exists x' \in H: x \precsim x'$
and

$\exists y' \in H: y \precsim y'$
By definition of directed subset:

$\exists z \in H: x' \precsim z \land y' \precsim z$
By definition of reflexivity;

$z \precsim z$
By definition of lower closure:

$z \in H^\precsim$
Thus by definition of transitivity:

$\exists z \in H^\precsim: x \precsim z \land y \precsim z$
Thus by definition:

$H^\precsim$ is directed.
$\Box$


Necessary Condition
Let us assume that $H^\precsim$ is directed.
Let $x, y \in H$.
By definition of reflexivity:

$x \precsim x \land y \precsim y$
By definition of lower closure:

$x, y \in H^\precsim$
By definition of directed subset:

$\exists z \in H^\precsim: x \precsim z \land y \precsim z$
By definition of lower closure:

$\exists z' \in H: z \precsim z'$
Thus by definition of transitivity

$\exists z' \in H: x \precsim z' \land y \precsim z'$
Thus by definition:

$H$ is directed.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_0:30





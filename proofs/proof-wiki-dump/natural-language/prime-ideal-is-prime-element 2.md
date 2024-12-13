# 

Source: https://proofwiki.org/wiki/Prime_Ideal_is_Prime_Element



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a lattice.
Let $I$ be an ideal in $L$.

Then:

$I$ is a prime ideal
if and only if:

$I$ is a prime element in $\struct {\map {\mathit {Ids} } L, \precsim}$
where:

$\map {\mathit {Ids} } L$ denotes the set of all ideals in $L$
$\mathord \precsim := \mathord \subseteq \restriction_{\map {\mathit {Ids} } L \times \map {\mathit {Ids} } L}$


Proof
Sufficient Condition
Let $I$ be a prime ideal.
Let $x, y \in \map {\mathit {Ids} } L$ such that

$x \wedge y \precsim I$
By definition of $\precsim$:

$x \wedge y \subseteq I$
By Meet is Intersection in Set of Ideals:

$x \cap y \subseteq I$
Aiming for a contradiction, suppose:

$x \not \precsim I$ and $y \not \precsim I$
By definition of $\precsim$:
$x \nsubseteq I$ and $y \nsubseteq I$
By definition of subset:

$\exists a \in x: a \notin I$
and

$\exists b \in y: b \notin I$
By Meet Precedes Operands:

$a \wedge b \preceq a$ and $a \wedge b \preceq b$
By definition lower section:

$a \wedge b \in x$ and $a \wedge b \in y$
By definitions subset and intersection:

$a \wedge b \in I$
By Characterization of Prime Ideal:

$a \in I$ or $b \in I$
This contradicts $a \notin I$ and $b \notin I$
Hence the assumption:

$x \not \precsim I$ and $y \not \precsim I$
was false.
$\Box$


Necessary Condition
Let $I$ be prime element in $\struct {\map {\mathit {Ids} } L, \precsim}$
Let $x, y \in S$ such that:

$x \wedge y \in I$
By Lower Closure of Element is Ideal:

$X := x^\preceq$ and $Y := y^\preceq$ are ideals in $L$
By Meet is Intersection in Set of Ideals:

$X \cap Y = X \wedge Y$
We will prove that:

$X \wedge Y \subseteq I$
Let $a \in X \wedge Y$.
By definition of intersection:

$a \in X$ and $a \in Y$
By definition of lower closure of element:

$a \preceq x$ and $a \preceq y$
By definition of infimum:

$a \preceq x \wedge y$
Thus by definition of lower section:

$a \in I$
$\Box$

By definition of $\precsim$:

$X \wedge Y \precsim I$
By definition of prime element:

$X \precsim I$ or $Y \precsim I$
By definition of $\precsim$:

$X \subseteq I$ or $Y \subseteq I$
By definition of reflexivity:

$x \preceq x$ and $y \preceq y$
By definition of lower closure of element:

$x \in X$ and $y \in Y$
Thus by definition of subset:

$x \in I$ or $y \in I$
Hence by Characterization of Prime Ideal:

$I$ is prime ideal.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:19





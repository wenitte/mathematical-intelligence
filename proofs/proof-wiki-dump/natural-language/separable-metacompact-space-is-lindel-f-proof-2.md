# 

Source: https://proofwiki.org/wiki/Separable_Metacompact_Space_is_Lindel%C3%B6f/Proof_2

Theorem
Let $T = \struct {S, \tau}$ be a separable topological space which is also metacompact.
Then $T$ is a Lindelöf space.


Proof
$T$ is metacompact if and only if every open cover of $S$ has an open refinement which is point finite.
$T$ is a Lindelöf space if every open cover of $S$ has a countable subcover.

Having established the definitions, we proceed.
Let $\UU$ be an open cover of $S$.
Let $\VV$ be a point finite open refinement of $\UU$.
By Point Finite Set of Open Sets in Separable Space is Countable, $\VV$ is countable.
Define a mapping $H$ on $\VV$ thus:

$\forall V \in \VV: \map H V = \set {U \in \UU: V \subseteq U}$
By Image of Countable Set under Mapping is Countable, the image of $H$ is countable.
Call this image $I$.
Since $\VV$ is a refinement of $\UU$, $\O \notin I$.
By the Axiom of Countable Choice, $I$ has a choice function $c$.
Then $G = c \circ H: \VV \to \UU$ is a mapping such that:

$\forall V \in \VV: V \subseteq \map G V$
Then $\QQ = \map G \VV$ is countable by Image of Countable Set under Mapping is Countable.
Each element of $\QQ$ is an element of $\UU$ by the definition of $G$.

Let $x \in S$.
Then since $\VV$ is a cover for $S$:

$\exists V \in \VV: x \in V$
Then $x \in V \subseteq \map G V \in \QQ$.
Thus $\QQ$ is a countable subcover of $\UU$.
Thus each open cover of $S$ has a countable subcover, so $T$ is a Lindelöf space.
$\blacksquare$


Axiom of Countable Choice
This proof depends on the Axiom of Countable Choice.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.






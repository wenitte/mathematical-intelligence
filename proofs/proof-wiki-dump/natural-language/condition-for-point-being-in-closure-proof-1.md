# 

Source: https://proofwiki.org/wiki/Condition_for_Point_being_in_Closure/Proof_1



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$.
Let $H^-$ denote the closure of $H$ in $T$.

Let $x \in S$.
Then $x \in H^-$ if and only if every open neighborhood of $x$ contains a point in $H$.


Proof
From the definition of closure, we have that $H^-$ is the union of $H$ and all the limit points of $H$ in $T$.
By definition, an open neighborhood of $x$ in $T$ is an open set of $T$ which contains $x$.


Necessary Condition
Let $x \in H^-$.
Then either:

$(1): \quad x \in H$, in which case every open neighborhood of $x$ in $T$ trivially contains a point in $H$ (that is, $x$ itself);
$(2): \quad x$ is a limit point of $H$ in $T$.

Suppose $(2)$ holds.
Then it follows directly from the definition of limit point that every open neighborhood of $x$ in $T$ contains a point in $H$ other than $x$.


Sufficient Condition
Suppose that every open neighborhood of $x$ in $T$ contains a point in $H$.

If $x \in H$, then $x$ is in the union of $H$ and all the limit points of $H$ in $T$.
Hence by definition of closure:

$x \in H^-$

If $x \notin H$ then $x$ must be a limit point of $H$ by definition.
So again, $x$ is in the union of $H$ and all the limit points of $H$ in $T$.
Hence by definition of closure:

$x \in H^-$
$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Scattered_Space



Definition
The following definitions of the concept of Scattered Space are equivalent:

Definition 1
A topological space $T = \struct {S, \tau}$ is scattered if and only if it contains no non-empty subset which is dense-in-itself.

That is, $T = \struct {S, \tau}$ is scattered if and only if every non-empty subset $H$ of $S$ contains at least one point which is isolated in $H$.

Definition 2
A topological space $T = \left({S, \tau}\right)$ is scattered if and only if it contains no non-empty closed set which is dense-in-itself.

That is, $T = \left({S, \tau}\right)$ is scattered if and only if every non-empty closed set $H$ of $S$ contains at least one point which is isolated in $H$.


Proof
Definition 1 implies Definition 2
Let $T$ be defined as in definition 1.
That is, $T$ contains no non-empty subset which is dense-in-itself.

Let $H \subseteq T$.
Then whether $H$ is closed or not, it is not dense-in-itself.
In particular, if $H$ is closed, then it is not dense-in-itself.
Hence $T$ satisfies definition 2 .
$\Box$


Definition 2 implies Definition 1
Now let $T$ be defined as in definition 2.
Let $H \subseteq T$.
Then $H^-$ is closed, where $H^-$ denotes the closure of $H$.
From Topological Closure is Closed, $H^-$ is closed.
Because $T$ satisfies definition $(2)$, $H^-$ has an isolated point by definition.
From Isolated Point of Closure of Subset is Isolated Point of Subset, we conclude that $H$ also has an isolated point.
Hence $T$ satisfies definition 2.
$\blacksquare$






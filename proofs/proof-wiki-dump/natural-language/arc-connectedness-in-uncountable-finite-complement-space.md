# 

Source: https://proofwiki.org/wiki/Arc-Connectedness_in_Uncountable_Finite_Complement_Space

Theorem
Let $T = \struct {S, \tau}$ be a finite complement topology on a uncountable set $S$.

If the Continuum Hypothesis is accepted as true, then:

$T$ is arc-connected
$T$ is locally arc-connected.


Proof
Let $a, b \in S$ such that $a \ne b$.
Let us assume the truth of the Continuum Hypothesis.
Then $a$ and $b$ are contained in a subset $X \subseteq S$ whose cardinality is the same as that of $\closedint 0 1$.
So by definition of cardinality we can set up a bijection $f: \closedint 0 1 \leftrightarrow X$ such that $\map f 0 = a$ and $\map f 1 = b$.
Each element of $S$ is closed from Finite Complement Space is $T_1$.
Hence $f$ is continuous and therefore an arc in $T$.
As $a$ and $b$ are arbitrary, $T$ is arc-connected.

Now let $\BB$ be a basis for $T$.
Let $B \in \BB$ and let $a, b \in B$.
By definition of a finite complement topology on a uncountable set, $B$ is uncountable.
So, by the same argument as above, we can set up an arc $f$ between any points of $B$.
So $T$ is locally arc-connected.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $19$. Finite Complement Topology on an Uncountable Space: $11$





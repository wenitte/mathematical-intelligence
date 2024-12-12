# 

Source: https://proofwiki.org/wiki/Arc-Connectedness_is_Equivalence_Relation



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $a \sim b $ denote the relation:

$a \sim b \iff a$ is arc-connected to $b$
where $a, b \in S$.

Then $\sim$ is an equivalence relation.


Proof
Checking in turn each of the criteria for equivalence:


Reflexivity
The definition of arc-connected specifically makes provision that:

$\forall a \in S: a \sim a$
specifically to ensure that $\sim$ be reflexive.
$\Box$


Symmetry
If $x \sim y$ then $x$ is is arc-connected to $y$ by definition.
In the trivial case of $x = y$, $y \sim x$ by reflexivity.
Suppose that $x \ne y$.
We form the mapping $g: \R \to \R$:

$\map g x = 1 - x$
which is trivially continuous and injective.
By Composite of Continuous Mappings is Continuous, $g \circ f$ is continuous.
By Composite of Injections is Injection, $g \circ f$ is also injective.
Putting it together we see that $g \circ f$ is a continuous injection which maps $0$ to $y$ and $1$ to $x$.
So $y \sim x$ and $\sim$ has been shown to be symmetric.
$\Box$


Transitivity
Follows directly from Joining Arcs makes Another Arc.
$\Box$

$\sim$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness





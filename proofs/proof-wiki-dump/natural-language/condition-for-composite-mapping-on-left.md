# 

Source: https://proofwiki.org/wiki/Condition_for_Composite_Mapping_on_Left



Theorem
Let $A, B, C$ be sets.
Suppose that $C$ is non-empty.
Let $f: A \to B$ and $g: A \to C$ be mappings.

Let $\RR: B \to C$ be a relation such that $g = \RR \circ f$ is the composite of $f$ and $\RR$.
Then $\RR$ may be a mapping if and only if:

$\forall x, y \in A: \map f x = \map f y \implies \map g x = \map g y$

That is:

$\forall x, y \in A: \map f x = \map f y \implies \map g x = \map g y$
if and only if:

$\exists h: B \to C$ such that $h$ is a mapping and $h \circ f = g$


Proof
Sufficient Condition
Suppose $\forall x, y \in A: \map f x = \map f y \implies \map g x = \map g y$.
Consider the subset $G \subseteq \Img f \times C$ defined by:

$G = \set {\tuple {y, z}: \exists x \in A: y = \map f x, z =\map g x}$
Clearly $G \ne \O$ because for any $x \in A$ we have $\tuple {\map f x, \map g x} \in G$.
What we need to show is that $G$ is the graph of a mapping $t: \Img f \to C$.
To do that, we need to show that for every $y \in \Img f$, there is a unique $z \in C$ such that $\tuple {y, z} \in G$.
It is clear that there is at least one such $z$: choose any $x \in A$ such that $y = \map f x$ and set $z = \map g x$.

Now we need to show that such a $z$ is unique.
Suppose we have $\tuple {y, z} \in G$ and $\tuple {y, z'} \in G$.
Then by the definition of $G$:

$\exists x, x' \in A: y = \map f x = \map f {x'}, z = \map g x, z' = \map g {x'}$

We have taken as a hypothesis that:

$\forall x, y \in A: \map f x = \map f y \implies \map g x = \map g y$
So $\map g x = \map g {x'}$ and so $z = z'$.
So $G$ is the graph of a mapping which we can denote:

$t: \Img f \to C$
Also, since:

$\forall x \in A: \tuple {\map f x, \map g x} \in G$
it follows that:

$\forall x \in A: \map f x = \map t {\map f x}$
Since $C$ is non-empty, it has an element $c$.
By Law of Excluded Middle, we can now construct a mapping $h$ as follows:

$\map h x = \begin{cases}
   \map t x  & : x \in \Img f \\
   c         & : x \in B \setminus \Img f
\end{cases}$
So:

$\forall x \in A: \map {\paren {h \circ f} } x = \map h {\map f x} = \map t {\map f x} = \map g x$

Thus we have constructed a mapping $h$ such that $h \circ f = g$, as required.
$\Box$


Necessary Condition
Suppose there exists some mapping $h: B \to C$ such that $h \circ f = g$.
Let $\map f x = \map f y$.
Then we have:














\(\ds \map f x\)

\(=\)







\(\ds \map f y\)














\(\ds \leadsto \ \ \)





\(\ds \map h {\map f x}\)

\(=\)







\(\ds \map h {\map f y}\)





Definition of Mapping








\(\ds \leadsto \ \ \)





\(\ds \map {h \circ f} x\)

\(=\)







\(\ds \map {h \circ f} y\)





Definition of Composition of Mappings








\(\ds \leadsto \ \ \)





\(\ds \map g x\)

\(=\)







\(\ds \map g y\)





Definition of $g$



$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Comment
Hence we have a necessary and sufficient condition for determining whether the composition of mappings actually exists as a mapping.
Note that this is different from being given two mappings and creating their composition.


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.3$





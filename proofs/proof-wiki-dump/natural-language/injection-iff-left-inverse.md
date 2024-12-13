# 

Source: https://proofwiki.org/wiki/Injection_iff_Left_Inverse



Theorem
A mapping $f: S \to T, S \ne \O$ is an injection if and only if:

$\exists g: T \to S: g \circ f = I_S$
where $g$ is a mapping.

That is, if and only if $f$ has a left inverse.


Proof 1
Let:

$\exists g: T \to S: g \circ f = I_S$
From Identity Mapping is Injection, $I_S$ is injective, so $g \circ f$ is injective.
So from Injection if Composite is Injection, $f$ is an injection.
Note that the existence of such a $g$ requires that $S \ne \O$.
$\Box$

Now, assume $f$ is an injection.
We now define a mapping $g: T \to S$ as follows.
As $S \ne \O$, we choose $x_0 \in S$.
By definition of injection:

$f^{-1} {\restriction_{\Img f} } \to S$ is a mapping
so it is possible to define:

$\map g y = \begin{cases}
x_0: & y \in T \setminus \Img f \\
\map {f^{-1} } y: & y \in \Img f \end{cases}$


It does not matter what the elements of $T \setminus \Img f$ are.
Using the construction given, the equation $g \circ f = I_S$ holds whatever value (or values) we choose for $g \sqbrk {T \setminus \Img f}$.
The remaining elements of $T$ can be mapped arbitrarily, and will not affect the image of any $x \in S$ under the mapping $g \circ f$.

So, for all $x \in S$:

$\map {g \circ f} x = \map g {\map f x}$
is the unique element of $S$ which $f$ maps to $\map f x$.
This unique element is $x$.
Thus $g \circ f = I_S$.
$\blacksquare$


Proof 2
Take the result Condition for Composite Mapping on Left:
Let $A, B, C$ be sets.
Let $f: A \to B$ and $g: A \to C$ be mappings.
Then:

$\forall x, y \in A: \map f x = \map f y \implies \map g x = \map g y$
if and only if:

$\exists h: B \to C$ such that $h$ is a mapping and $h \circ f = g$.

Let $C = A = S$, let $B = T$ and let $g = I_S$.
Then the above translates into:

$\exists h: T \to S$ such that $h$ is a mapping and $h \circ f = g$
if and only if:

$\forall x, y \in S: \map f x = \map f y \implies \map {I_S} x = \map {I_S} y$

But as $\map {I_S} x = x$ and $\map {I_S} y = y$ by definition of identity mapping, it follows that:

$\exists h: T \to S$ such that $h$ is a mapping and $h \circ f = g$
if and only if:

$\forall x, y \in S: \map f x = \map f y \implies x = y$
which is our result.
$\blacksquare$


Proof 3
Let $f: S \to T$ be an injection.
Then $f$ is a one-to-many relation.
By Inverse of Many-to-One Relation is One-to-Many, $f^{-1}: T \to S$ is many-to-one.
By Many-to-One Relation Extends to Mapping, there is a Mapping $g: T \to S$ such that $f^{-1} \subseteq g$.
Let $\tuple {x, y} \in g \circ f$.
Then:

$\exists z \in T: \tuple {x, z} \in f, \tuple {z, y} \in g$
Since $\tuple {x, z} \in f$:

$\tuple {z, x} \in f^{-1} \subseteq g$
Since $\tuple {z, y} \in g$, $\tuple {z, x} \in g$ and $g$ is a mapping:

$x = y$
so:

$\tuple {x, y} \in I_S$
So we see that:

$g \circ f \subseteq I_S$

Let $x \in S$.
Then:

$\tuple {x, \map f x} \in f$
and:

$\tuple {\map f x, x} \in f^{-1} \subseteq g$
So:

$\tuple {x, x} \in g \circ f$
Thus:

$I_S \subseteq g \circ f$
By definition of set equality:

$I_S = g \circ f$
$\blacksquare$


Also see
Surjection iff Right Inverse
Conditions for Uniqueness of Left Inverse Mapping: in general the left inverse is not unique.


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites: Exercise $\text{(i)}$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Exercise $5.6$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 0.4$: Theorem $6$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.3$: Exercise $5$
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 1.3$: Mappings: Exercise $5$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 2$: Functions: Exercise $2.5 \ \text{(a)}$





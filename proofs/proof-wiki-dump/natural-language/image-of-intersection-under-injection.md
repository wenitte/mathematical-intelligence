# 

Source: https://proofwiki.org/wiki/Image_of_Intersection_under_Injection



Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.

Then:

$\forall A, B \subseteq S: f \sqbrk {A \cap B} = f \sqbrk A \cap f \sqbrk B$
if and only if $f$ is an injection.

This can be expressed in the language and notation of direct image mappings as:

$\forall A, B \subseteq S: \map {f^\to} {A \cap B} = \map {f^\to} A \cap \map {f^\to} B$


General Result
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let $\powerset S$ be the power set of $S$.

Then:

$\ds \forall \mathbb S \subseteq \powerset S: f \sqbrk {\bigcap \mathbb S} = \bigcap_{X \mathop \in \mathbb S} f \sqbrk X$
if and only if $f$ is an injection.

This can be expressed in the language and notation of direct image mappings as:

$\ds \forall \mathbb S \subseteq \powerset S : \map {f^\to} {\bigcap \mathbb S} = \bigcap_{X \mathop \in \mathbb S} \map {f^\to} X$


Family of Sets
Let $S$ and $T$ be sets.
Let $\family {S_i}_{i \mathop \in I}$ be a family of subsets of $S$.
Let $f: S \to T$ be a mapping.

Then:

$\ds f \sqbrk {\bigcap_{i \mathop \in I} S_i} = \bigcap_{i \mathop \in I} f \sqbrk {S_i}$
if and only if $f$ is an injection.

This can be expressed in the language and notation of direct image mappings as:

$\ds \map {f^\to} {\bigcap_{i \mathop \in I} S_i} = \bigcap_{i \mathop \in I} \map {f^\to} {S_i}$


Proof 1
An injection is a type of one-to-one relation, and therefore also a one-to-many relation.

Therefore Image of Intersection under One-to-Many Relation applies:

$\forall A, B \subseteq S: \RR \sqbrk {A \cap B} = \RR \sqbrk A \cap \RR \sqbrk B$
if and only if $\RR$ is a one-to-many relation.

We have that $f$ is a mapping and therefore a many-to-one relation.
So $f$ is a one-to-many relation if and only if $f$ is also an injection.

It follows that:

$\forall A, B \subseteq S: f \sqbrk {A \cap B} = f \sqbrk A \cap f \sqbrk B$
if and only if $f$ is an injection.
$\blacksquare$


Proof 2
From Image of Intersection under Mapping:

$f \sqbrk {A \cap B} \subseteq f \sqbrk A \cap f \sqbrk B$
which holds for all mappings.
It remains to be shown that:

$f \sqbrk A \cap f \sqbrk B \subseteq f \sqbrk {A \cap B}$
if and only if $f$ is an injection.


Sufficient Condition
Suppose that:

$\forall A, B \subseteq S: f \sqbrk {A \cap B} = f \sqbrk A \cap f \sqbrk B$
If $S$ is singleton, then $f$ is a fortiori an injection from Mapping from Singleton is Injection.
So, assume $S$ is not singleton.

Aiming for a contradiction, suppose $f$ is specifically not an injection.
Then:

$\exists x, y \in S: \exists z \in T: \tuple {x, z} \in T, \tuple {y, z} \in T, x \ne y$
and of course $\set x \subseteq S, \set y \subseteq S$.

So:

$z \in f \sqbrk {\set x}$
$z \in f \sqbrk {\set y}$
and so by definition of intersection:

$z \in f \sqbrk {\set x} \cap f \sqbrk {\set y}$
But:

$\set x \cap \set y = \O$

Thus from a corollary to Image of Empty Set is Empty Set:

$f \sqbrk {\set x \cap \set y} = \O$
and so:

$f \sqbrk {\set x \cap \set y} \ne f \sqbrk {\set x} \cap f \sqbrk {\set y}$
But by hypothesis:

$\forall A, B \subseteq S: f \sqbrk {A \cap B} = f \sqbrk A \cap f \sqbrk B$
From this contradiction it follows that $f$ is an injection.
$\Box$


Necessary Condition
Let $f$ be an injection.

It is necessary to show:

$f \sqbrk {S_1} \cap f \sqbrk {S_2} \subseteq f \sqbrk {S_1 \cap S_2}$

Let $t \in f \sqbrk {S_1} \cap f \sqbrk {S_2}$.
Then:














\(\ds t\)

\(\in\)







\(\ds f \sqbrk {S_1} \cap f \sqbrk {S_2}\)














\(\ds \leadsto \ \ \)





\(\ds t\)

\(\in\)







\(\ds f \sqbrk {S_1}\)





Definition of Set Intersection












\(\, \ds \land \, \)

\(\ds t\)

\(\in\)







\(\ds f \sqbrk {S_2}\)














\(\ds \leadsto \ \ \)

\(\ds \exists s_1 \in S_1, s_2 \in S_2: \, \)



\(\ds t\)

\(=\)







\(\ds \map f {s_1}\)





Definition of Image of Subset under Mapping












\(\, \ds \land \, \)

\(\ds t\)

\(=\)







\(\ds \map f {s_2}\)














\(\ds \leadsto \ \ \)





\(\ds \map f {s_1}\)

\(=\)







\(\ds \map f {s_2}\)














\(\ds \leadsto \ \ \)





\(\ds s_1\)

\(=\)







\(\ds s_2\)





Definition of Injection








\(\ds \leadsto \ \ \)





\(\ds s_1 = s_2\)

\(\in\)







\(\ds S_1\)


















\(\, \ds \land \, \)

\(\ds s_1 = s_2\)

\(\in\)







\(\ds S_2\)














\(\ds \leadsto \ \ \)





\(\ds s_1 = s_2\)

\(\in\)







\(\ds S_1 \cap S_2\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds \map f {s_1} = \map f {s_2}\)

\(\in\)







\(\ds f \sqbrk {S_1 \cap S_2}\)





Image of Element is Subset








\(\ds \leadsto \ \ \)





\(\ds f \sqbrk {S_1} \cap f \sqbrk {S_2}\)

\(\subseteq\)







\(\ds f \sqbrk {S_1 \cap S_2}\)





Definition of Subset




So if $f$ is an injection, it follows that:

$f \sqbrk {S_1 \cap S_2} = f \sqbrk {S_1} \cap f \sqbrk {S_2}$
$\Box$

Putting the results together, we see that:

$f \sqbrk {S_1 \cap S_2} = f \sqbrk {S_1} \cap f \sqbrk {S_2}$ if and only if $f$ is an injection.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites: Exercise $\text{(ii)}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 12 \alpha$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Exercise $2$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $7$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 2$: Functions: Exercise $2.2 \ \text{(g)}$





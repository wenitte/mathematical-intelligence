# 

Source: https://proofwiki.org/wiki/Image_of_Intersection_under_Injection/Proof_2



Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.

Then:

$\forall A, B \subseteq S: f \sqbrk {A \cap B} = f \sqbrk A \cap f \sqbrk B$
if and only if $f$ is an injection.

This can be expressed in the language and notation of direct image mappings as:

$\forall A, B \subseteq S: \map {f^\to} {A \cap B} = \map {f^\to} A \cap \map {f^\to} B$


Proof
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
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions: Exercise $2 \ \text{(c})$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $2.1$





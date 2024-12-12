# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Bijection/Definition_1_iff_Definition_4



Theorem
The following definitions of the concept of Bijection are equivalent:

Definition 1
A mapping $f: S \to T$ is a bijection if and only if both:

$(1): \quad f$ is an injection
and:

$(2): \quad f$ is a surjection.
Definition 4
A mapping $f \subseteq S \times T$ is a bijection if and only if:

for each $y \in T$ there exists one and only one $x \in S$ such that $\tuple {x, y} \in f$.


Proof
Let $f: S \to T$ be a bijection by definition 1.
Then by definition:

$f$ is an injection
$f$ is a surjection

By definition of injection:

every element of $T$ is the image of at most $1$ element of $S$.
By definition of surjection:

every element of $T$ is the image of at least $1$ element of $S$.

So:

for each $y \in T$ there exists one and only one $x \in S$ such that $\tuple {x, y} \in f$.
Thus $f$ is a bijection by definition 4.
$\Box$

Let $f: S \to T$ be a bijection by definition 4.
Then by definition:

for each $y \in T$ there exists one and only one $x \in S$ such that $\tuple {x, y} \in f$.

But:

every element of $T$ is the image of at most $1$ element of $S$
defines an injection
and:

every element of $T$ is the image of at least $1$ element of $S$
defines a surjection.

From Injection iff Left Inverse, $f$ is an injection if and only if $f$ has a left inverse mapping.
From Surjection iff Right Inverse, $f$ is a surjection if and only if $f$ has a right inverse mapping.
Putting these together, it follows that:

$f$ is an injection
$f$ is a surjection
Thus $f$ is a bijection by definition 1.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 22$: Injections; bijections; inverse of a bijection





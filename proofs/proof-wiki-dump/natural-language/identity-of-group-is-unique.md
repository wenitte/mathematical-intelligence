# 

Source: https://proofwiki.org/wiki/Identity_of_Group_is_Unique



Theorem
Let $\struct {G, \circ}$ be a group which has an identity element $e \in G$.
Then $e$ is unique.


Proof 1
By the definition of a group, $\struct {G, \circ}$ is also a monoid.
The result follows by applying the result Identity of Monoid is Unique.
$\blacksquare$


Proof 2
Let $e$ and $f$ both be identity elements of a group $\struct {G, \circ}$.
Then:














\(\ds e\)

\(=\)







\(\ds e \circ f\)





$f$ is an identity














\(\ds \)

\(=\)







\(\ds f\)





$e$ is an identity



So $e = f$ and there is only one identity after all.
$\blacksquare$


Proof 3
From Group has Latin Square Property, there exists a unique $x \in G$ such that:

$a x = b$
and there exists a unique $y \in G$ such that:

$y a = b$
Setting $b = a$, this becomes:
There exists a unique $x \in G$ such that:

$a x = a$
and there exists a unique $y \in G$ such that:

$y a = a$
These $x$ and $y$ are both $e$, by definition of identity element.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.6$. Elementary theorems on groups
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $1$: The definition of a ring: Definitions $1.1 \ \text{(b)}$





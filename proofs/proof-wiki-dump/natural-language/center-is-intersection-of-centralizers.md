# 

Source: https://proofwiki.org/wiki/Center_is_Intersection_of_Centralizers



Theorem
The center of a group is the intersection of all the centralizers of the elements of that group:

$\ds \map Z G = \bigcap_{g \mathop \in G} \map {C_G} g$


Proof
Denote $Z = \map Z G$ and $C = \ds \bigcap_{g \mathop \in G} \map {C_G} g$ for simplicity.
By definition of set equality, it suffices to prove $Z \subseteq C$ and $C \subseteq Z$.


$Z$ is contained in $C$
Suppose that $x \in Z$.
Then from the definition of center:

$\forall g \in G: x g = g x$
By definition of centralizer, this corresponds to:

$\forall g \in G: x \in \map {C_G} g$
Therefore we have, by definition of set intersection:

$\ds x \in \bigcap_{g \mathop \in G} \map {C_G} g = C$
Hence $x \in C$.
It follows by definition of subset that $Z \subseteq C$.
$\Box$


$C$ is contained in $Z$
Suppose now that $x \in C$.
Then, by definition of intersection:

$\forall g \in G: x \in \map {C_G} g$
That is, using the definition of centralizer:

$\forall g \in G: x g = g x$
By definition of the center, this means:

$x \in \map Z G = Z$
Hence $x \in Z$.
It follows that $C \subseteq Z$.
$\Box$

Therefore, we have established that:

$x \in Z \iff x \in C$
By definition of set equality:

$Z = C$
$\blacksquare$


Sources
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $1$: Introduction to Finite Group Theory: $1.13$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 37$. Some important general examples of subgroups





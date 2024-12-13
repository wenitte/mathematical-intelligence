# 

Source: https://proofwiki.org/wiki/Product_of_Subset_with_Intersection



Theorem
Let $\struct {G, \circ}$ be an algebraic structure.
Let $X, Y, Z \subseteq G$.
Then:

$X \circ \paren {Y \cap Z} \subseteq \paren {X \circ Y} \cap \paren {X \circ Z}$
$\paren {Y \cap Z} \circ X \subseteq \paren {Y \circ X} \cap \paren {Z \circ X}$
where $X \circ Y$ denotes the subset product of $X$ and $Y$.


Corollary
Let $\struct {G, \circ}$ be a group.
Let $X, Y, Z \subseteq G$ such that $X$ is a singleton.

Then:

$X \circ \paren {Y \cap Z} = \paren {X \circ Y} \cap \paren {X \circ Z}$
$\paren {Y \cap Z} \circ X = \paren {Y \circ X} \cap \paren {Z \circ X}$
where $X \circ Y$ denotes the subset product of $X$ and $Y$.


Proof 1
Let $x \in X, t \in Y \cap Z$.
By the definition of intersection, $t \in Y$ and $t \in Z$.

Consider $X \circ \paren {Y \cap Z}$.
We have $x \circ t \in X \circ \paren {Y \cap Z}$ by definition of subset product.
As $t \in Y$ and $t \in Z$, we also have $x \circ t \in X \circ Y$ and $x \circ t \in X \circ Z$.
The result follows.

Similarly, consider $\paren {Y \cap Z} \circ X$.
Then we have $t \circ x \in \paren {Y \cap Z} \circ X$ by definition of subset product.
As $t \in Y$ and $t \in Z$, we also have $t \circ x \in Y \circ X$ and $t \circ x \in Z \circ X$.
Again, the result follows.
$\blacksquare$


Proof 2
Consider the relation $\RR \subseteq G \times G$ defined as:

$\forall g, h \in G: \tuple {g, h} \in \RR \iff \exists g \in X$
Then:

$\forall S \subseteq G: X \circ S = \RR \sqbrk S$
Then:














\(\ds X \circ \paren {Y \cap Z}\)

\(=\)







\(\ds \RR \sqbrk {Y \cap Z}\)




















\(\ds \)

\(\subseteq\)







\(\ds \RR \sqbrk Y \cap \RR \sqbrk Z\)





Image of Intersection under Relation














\(\ds \)

\(=\)







\(\ds \paren {X \circ Y} \cap \paren {X \circ Z}\)










Next, consider the relation $\RR \subseteq G \times G$ defined as:

$\forall g, h \in G: \tuple {g, h} \in \RR \iff \exists h \in X$
Then:

$\forall S \subseteq G: S \circ X = \RR \sqbrk S$
Then:














\(\ds \paren {Y \cap Z} \circ X\)

\(=\)







\(\ds \RR \sqbrk {Y \cap Z}\)




















\(\ds \)

\(\subseteq\)







\(\ds \RR \sqbrk Y \cap \RR \sqbrk Z\)





Image of Intersection under Relation














\(\ds \)

\(=\)







\(\ds \paren {Y \circ X} \cap \paren {Z \circ X}\)









$\blacksquare$


Equality does not Hold
While it is the case that:

$X \circ \paren {Y \cap Z} \subseteq \paren {X \circ Y} \cap \paren {X \circ Z}$
it is not necessarily the case that:

$X \circ \paren {Y \cap Z} = \paren {X \circ Y} \cap \paren {X \circ Z}$


Also see
Product of Subset with Union


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 9$: Compositions Induced on the Set of All Subsets: Exercise $9.1$





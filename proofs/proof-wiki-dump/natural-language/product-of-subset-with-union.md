# 

Source: https://proofwiki.org/wiki/Product_of_Subset_with_Union



Theorem
Let $\struct {G, \circ}$ be an algebraic structure.
Let $X, Y, Z \subseteq G$.
Then:

$X \circ \paren {Y \cup Z} = \paren {X \circ Y} \cup \paren {X \circ Z}$
$\paren {Y \cup Z} \circ X = \paren {Y \circ X} \cup \paren {Z \circ X}$
where $X \circ Y$ denotes the subset product of $X$ and $Y$.


Proof 1
Let $x \circ t \in X \circ \paren {Y \cup Z}$.
We have $x \in X, t \in Y \cup Z$ by definition of subset product.
By definition of set union, it follows that $t \in Y$ or $t \in Z$.
So we also have $x \circ t \in X \circ Y$ or $x \circ t \in X \circ Z$.
That is:

$x \circ t \in \paren {X \circ Y} \cup \paren {X \circ Z}$
and so:

$X \circ \paren {Y \cup Z} \subseteq \paren {X \circ Y} \cup \paren {X \circ Z}$

Now let $x \circ t \in \paren {X \circ Y} \cup \paren {X \circ Z}$.
By definition of set union, it follows that $x \circ t \in X \circ Y$ or $x \circ t \in X \circ Z$.
So $x \in X$, and $y \in Y$ or $y \in Z$.
That is, $x \in X$, and $y \in Y \cup Z$ by definition of set union.
Hence:

$x \circ t \in X \circ \paren {Y \cup Z}$
and so:

$\paren {X \circ Y} \cup \paren {X \circ Z} \subseteq X \circ \paren {Y \cup Z}$

That is:

$X \circ \paren {Y \cup Z} = \paren {X \circ Y} \cup \paren {X \circ Z}$

The result:

$\paren {Y \cup Z} \circ X = \paren {Y \circ X} \cup \paren {Z \circ X}$
follows similarly.
$\blacksquare$


Proof 2
Consider the relation $\RR \subseteq G \times G$ defined as:

$\forall g, h \in G: \tuple {g, h} \in \RR \iff \exists g \in X$
Then:

$\forall S \subseteq G: X \circ S = \map \RR S$
Then:














\(\ds X \circ \paren {Y \cup Z}\)

\(=\)







\(\ds \map \RR {Y \cup Z}\)




















\(\ds \)

\(=\)







\(\ds \map \RR y \cup \map \RR Z\)





Image of Union under Relation














\(\ds \)

\(=\)







\(\ds \paren {X \circ Y} \cup \paren {X \circ Z}\)










Next, consider the relation $\RR \subseteq G \times G$ defined as:

$\forall g, h \in G: \tuple {g, h} \in \RR \iff \exists h \in X$
Then:

$\forall S \subseteq G: S \circ X = \map \RR S$
Then:














\(\ds \paren {Y \cup Z} \circ X\)

\(=\)







\(\ds \map \RR {Y \cup Z}\)




















\(\ds \)

\(=\)







\(\ds \map \RR Y \cup \map \RR Z\)





Image of Union under Relation














\(\ds \)

\(=\)







\(\ds \paren {Y \circ X} \cup \paren {Z \circ X}\)









$\blacksquare$


Also see
Product of Subset with Intersection


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 9$: Compositions Induced on the Set of All Subsets: Exercise $9.1$





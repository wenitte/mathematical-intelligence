# 

Source: https://proofwiki.org/wiki/G-Tower_is_Well-Ordered_under_Subset_Relation



Theorem
Let $M$ be a class.
Let $g: M \to M$ be a progressing mapping on $M$.
Let $M$ be a $g$-tower.

Then $M$ is well-ordered under the subset relation such that:




\((1)\)  

$:$  



Smallest Element:   









$\O$ is the smallest element of $M$   

  


\((2)\)  

$:$  



Immediate Successor:   









the immediate successor of $x$ (if there is one) is $\map g x$   

  


\((3)\)  

$:$  



Limit Element:   









every limit element is the union of its set of predecessors.   

  



Corollary
Let $y \in M$ other than $\O$.
Then the strict lower closure $y^\subset$ of $y$ is non-empty and exactly one of the following conditions holds:

$(\text C 1): \quad y^\subset$ has a greatest element $x$ and $\map g x = y$
$(\text C 2): \quad y^\subset$ has no greatest element $x$ and $\bigcup y^\subset = y$


Empty Set
$\O$ is the smallest element of $M$.


Successor of Non-Greatest Element
Let $x \in M$ such that $x$ is not the greatest element of $M$.
Then the immediate successor of $x$ is $\map g x$.


Union of Limit Elements
Let $x \in M$ be a limit element of $M$.
Then:

$x = \bigcup x^\subset$
where $\bigcup x^\subset$ denotes the union of the lower section of $x$.


Proof
Let $M$ be a $g$-tower.
By $g$-Tower is Nest, $M$ is a nest.
Hence a fortiori $\subseteq$ is a total ordering on $M$.

It remains to be shown that $\subseteq$ is a well-ordering, by showing the following:

Let $A \subseteq M$ be an arbitrary non-empty subclass of $M$.
Let $L$ be the set of all elements $x$ which are proper subsets of all elements of $A$:

$L = \set {x \in M: \forall z \in A: x \subsetneqq z}$
Since $L \subseteq \powerset z$ for all $z \in A$, it follows by Subclass of Set is Set that $L$ is in fact a set.

It is to be shown that the following conditions hold:

$(1): \quad$ If $L$ is empty, then $\O$ is the smallest element of $A$.
$(2): \quad$ If $L$ is non-empty and contains a greatest element $x$, then $\map g x$ is the smallest element of $A$.
$(3): \quad$ If $L$ is non-empty and contains no greatest element, then its union $\bigcup L$ is the smallest element of $A$.


Case $(1)$ -- $L$ is empty
As $L$ is empty:

$\O \notin L$
Hence $\O$ is not a proper subset of every element of $A$.
However, $\O$ is a subset (although not necessarily proper) of every element of $A$.
Hence $\O$ must be one of the elements of $A$.
Hence $\O$ is by definition the smallest element of $A$.
$\Box$


Case $(2)$ -- $L$ is non-empty and contains a greatest element $x$
Let $L$ be non-empty and contain a greatest element $x$.
We have that:

from $g$-Tower is Closed under Mapping that $M$ is closed under $g$
a priori $g$ is a progressing mapping on $M$.
From $g$-Tower is Nest: Lemma 2 we have:

$\forall x, y \in M: \map g x \subseteq y \lor y \subseteq x$
From Fixed Point of $g$-Tower is Greatest Element:

if $x = \map g x$, then $x$ is the greatest element (under the subset relation) of $M$.
Hence the conditions are fulfilled for Closed Class under Progressing Mapping Lemma be applied, which gives us that:

if:
$x$ is a proper subset of all elements of $A$ and the greatest element of $A$ with that property,
then:
$\map g x \in A$ and is the smallest element of $A$.
This is statement $(2)$.
$\Box$


Case $(3)$ -- $L$ is non-empty and contains no greatest element
Suppose $\bigcup L$ were an element of $L$.
Then $\bigcup L$ would be the greatest element of $L$.
But $L$ contains no greatest element.
Hence $\bigcup L$ is not an element of $L$.

From Restriction of Total Ordering is Total Ordering, $\subseteq$ is a total ordering on $L$.
This makes $L$ a nest.
As $L$ is a set, $L$ is a fortiori a chain.
By $g$-Tower is Closed under Chain Unions:

$\bigcup L \in M$
Let $y \in A$.
We have by definition of $L$ that each element of $L$ is a subset of $y$.
Hence:

$\forall y \in A: \bigcup L \subseteq y$
But a priori:

$\bigcup L \notin L$
Hence there exists at least one $z \in A$ such that $\bigcup L$ is not a proper subset of $z$.
Hence for such a $z$ it must be that:

$\bigcup L = z$
That is:

$\bigcup L \in A$
and because:

$\forall y \in A: \bigcup L \subseteq y$
it follows by definition that $\bigcup L$ is the smallest element of $A$.
$\Box$

Thus it has been shown that every non-empty subclass of $M$ has a smallest element.
Hence by definition $M$ is well-ordered under the subset relation.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 3$ The well ordering of $g$-towers: Theorem $3.1$





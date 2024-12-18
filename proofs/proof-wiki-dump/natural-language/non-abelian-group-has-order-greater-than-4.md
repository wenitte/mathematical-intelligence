# 

Source: https://proofwiki.org/wiki/Non-Abelian_Group_has_Order_Greater_than_4


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.
Theorem
Let $\struct {G, \circ}$ be a non-abelian group.
Then the order of $\struct {G, \circ}$ is greater than $4$.


Proof 1
Let $\left({G, \circ}\right)$ be a non-abelian group whose identity is $e$.
For a group $\left({G, \circ}\right)$ to be non-abelian, we require:

$\exists x, y \in G: x \circ y \ne y \circ x$
Suppose $x \circ y \in \left\{ {x, y, e}\right\}$.

$x \circ y = e \implies y \circ x = e$
and $\left({G, \circ}\right)$ is abelian.

Without loss of generality, suppose $x \circ y = x$.














\(\ds x \circ y = x\)

\(\implies\)







\(\ds y = e\)




















\(\ds \)

\(\implies\)







\(\ds y \circ x = x\)




















\(\ds \)

\(\implies\)







\(\ds x \circ y = y \circ x\)









and again, $\left({G, \circ}\right)$ is abelian.
Similarly for $x \circ y = y$.
Again, the same applies if $y \circ x \in \left\{ {x, y, e}\right\}$.

So, if $x \circ y \ne y \circ x$, then;

$x \circ y$ and $y \circ x$ must be different elements
$x \circ y$ and $y \circ x$ must both different from $e, x$ and $y$.

Thus, in a non-abelian group, there needs to be at least $5$ elements:

$e, x, y, x \circ y, y \circ x$
$\blacksquare$


Proof 2
It follows from Trivial Group is Cyclic Group and Prime Group is Cyclic that groups of order less than $4$ are cyclic.
Therefore, by Cyclic Group is Abelian, all groups of order less than $4$ are abelian.

Let $G$ have order $4$.
From Order of Element Divides Order of Finite Group, every element of $G$ has order that divides $4$.
Therefore any element of $G$ has order $1$, $2$ or $4$.

Let $g \in G$ have order $4$.
Then $G$ is generated by $g$.
Therefore $G$ is cyclic, and therefore abelian by Cyclic Group is Abelian.

Let $G$ be such that it has no element of order $4$.
From Identity is Only Group Element of Order 1, all the elements apart from its identity must have order $2$.
That is, $G$ is a Boolean group.
By Boolean Group is Abelian, $G$ is abelian.
The result follows.
$\blacksquare$






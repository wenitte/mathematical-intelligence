# 

Source: https://proofwiki.org/wiki/Count_of_Operations_on_Finite_Set_which_are_Closed_on_Every_Subset

Theorem
Let $S$ be a finite set with $n$ elements.
There are $2^{n \paren {n - 1} }$ binary operations on $S$ which are closed on all subsets of $S$.


Proof
Suppose $\circ$ is a binary operation on $S$ such that $a \circ b = c$ for $a \ne b \ne c \ne a$.
Then $\circ$ is not closed on $\set {a, b} \subseteq S$.
Similarly, suppose $\circ$ is a binary operation on $S$ such that $a \circ a = b$ for $a \ne b$.
Then $\circ$ is not closed on $\set a \subseteq S$.

Hence for $\circ$ to be closed on all subsets of $S$:

$\forall a \in S: a \circ a = a$
and:

$\forall a, b \in S: \paren {a \circ b = a} \lor \paren {a \circ b = b}$.

So for every ordered pair $\tuple {x, y}$ of elements of $S$ such that $a \ne b$ there are two possible products: $x$ or $y$.

For an algebraic structure of order $n$, there are $n^2$ such ordered pairs.
However, of these $n^2$ such ordered pairs $\tuple {x, y}$, $n$ of these are such that $x = y$.
There remain $n^2 - n = n \paren {n - 1}$ ordered pairs $\tuple {x, y}$, such that $x \ne y$.
Each one contributes $2$ different products
It follows by the Product Rule for Counting that there are $2^{n \paren {n - 1} }$ binary operations on $S$ which are closed on all subsets of $S$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Exercise $8.2$





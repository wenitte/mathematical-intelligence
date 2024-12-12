# 

Source: https://proofwiki.org/wiki/Count_of_Commutative_Operations_on_Finite_Set_which_are_Closed_on_Every_Subset

Theorem
Let $S$ be a finite set with $n$ elements.
There are $2^{n \paren {n - 1} / 2}$ commutative binary operations on $S$ which are closed on all subsets of $S$.


Proof
From Count of Operations on Finite Set which are Closed on Every Subset, there are $2^{n \paren {n - 1} }$ binary operations on $S$ which are closed on all subsets of $S$.
For each $a, b \in S$, we have that

there are $2$ possible products for $a \circ b$
there are $2$ possible products for $b \circ a$
and so on the set $\set {a, b}$ there are $4$ binary operations which are closed on all subsets of $\set {a, b}$.

Let $\circ$ be commutative.
Then:

$a \circ b = b \circ a$
and so now there are only $2$ possible such products.
Hence the number of commutative binary operations on $S$ which are closed on all subsets of $S$ equals the number of distinct doubleton subsets of $S$.
There are half as many of these as there are ordered pairs.

That is, there are $\dfrac {n^2 - n} 2 = \dfrac {n \paren {n - 1} } 2$ doubletons $\set {x, y} \subseteq S$, such that $x \ne y$.
The result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Exercise $8.2$





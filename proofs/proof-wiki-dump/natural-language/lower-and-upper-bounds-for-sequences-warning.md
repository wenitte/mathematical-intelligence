# 

Source: https://proofwiki.org/wiki/Lower_and_Upper_Bounds_for_Sequences/Warning

Theorem
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $x_n \to l$ as $n \to \infty$.

Then it is not necessarily the case that:

$(1): \quad \forall n \in \N: x_n > a \implies l > a$
$(2): \quad \forall n \in \N: x_n < b \implies l < b$


Proof
Take the examples:

$(1): \quad \sequence {x_n} = \dfrac 1 n$
$(2): \quad \sequence {y_n} = -\dfrac 1 n$
Then :

$\forall n \in \N_{>0}: \dfrac 1 n > 0, -\dfrac 1 n < 0$
From Sequence of Reciprocals is Null Sequence, we have

$x_n \to 0$
$y_n \to 0$
as $n \to \infty$.
However, it is clearly false that $0 > 0$ and $0 < 0$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Some simple properties of convergent sequences: $\S 4.24$





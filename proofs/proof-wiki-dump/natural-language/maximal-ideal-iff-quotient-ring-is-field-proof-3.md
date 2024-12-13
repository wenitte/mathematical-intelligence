# 

Source: https://proofwiki.org/wiki/Maximal_Ideal_iff_Quotient_Ring_is_Field/Proof_3

Theorem
Let $\struct {R, +, \circ}$ be a commutative ring with unity whose zero is $0_R$ and whose unity is $1_R$.
Let $J$ be an ideal of $R$.

The following are equivalent:

$(1): \quad$ $J$ is a maximal ideal.
$(2): \quad$ The quotient ring $R / J$ is a field.


Proof
Let $J$ be a maximal ideal.
We have by definition of quotient ring that $J$ is the zero element of $R / J$.
Let $A \in R / J$ be a non-zero element of $R / J$.
Let $x \in A$.
Since $A \ne J$, we have that $x \notin J$.
Let the ideal $K = J + A$ of $R$ be formed.
This contains all the elements of the form $j + r a$, with $j \in J$ and $r \in R$.
As $J$ is maximal and $J \subsetneq K$, it follows that:

$K = R$
and so:

$1_R \in K$
That is:

$\exists j \in J, r \in R: j + r a = 1_R$
Thus:

$\paren {r + J} \paren {a + J} = \paren {1 - u} J = 1_R + J$
and so $\paren {r + J}$ is the product inverse of $\paren {a + J}$.
So every non-zero element of $R / J$ has a product inverse.
That is, $R / J$ is a field.
$\Box$

Let $R / J$ be a field.
Let $K$ be an ideal of $R$ such that:

$J \subsetneq K \subseteq R$
Let $a \in K$ such that $a \notin J$.
Then:

$J + \ideal a \subsetneq K$
But as $a \notin J$, we have that $a + J$ is a non-zero element of $R / J$.
Thus as $R / J$ is a field, $a + J$ has a product inverse $r + J$:

$\paren {r + J} \paren {a + J} = 1_R + J$
So:

$\exists r \in R, j \in J: r a + \paren {-1_R} = j$
That is:

$r a + \paren {-1_R} \in J$
So:

$j + r a = 1_R$
and from Ideal of Unit is Whole Ring: Corollary this implies:

$J + \ideal a = R$
So:

$K = R$
and it follows by definition that $J$ is maximal.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Rings: $\S 23$. Maximal Ideals: Theorem $43$





# 

Source: https://proofwiki.org/wiki/Cartesian_Product_is_not_Associative/Proof_1

Theorem
Let $A, B, C$ be non-empty sets.
Then:

$A \times \paren {B \times C} \ne \paren {A \times B} \times C$
where $A \times B$ is the cartesian product of $A$ and $B$.


Intuitive Proof
By definition:

$A \times B = \set {\tuple {a, b}: a \in A, b \in B}$
that is, the set of all ordered pairs $\tuple {a, b}$ such that $a \in A$ and $b \in B$.
Now:

Elements of $A \times \paren {B \times C}$ are in the form $\tuple {a, \tuple {b, c} }$
Elements of $\paren {A \times B} \times C$ are in the form $\tuple {\tuple {a, b}, c}$.
So for $A \times \paren {B \times C} = \paren {A \times B} \times C$ we would need to have that $a = \tuple {a, b}$ and $\tuple {b, c} = c$.
This can not possibly be so, except perhaps in the most degenerate cases.

So from the strict perspective of the interpretation of the pure definitions:

$A \times \paren {B \times C} \ne \paren {A \times B} \times C$
$\blacksquare$






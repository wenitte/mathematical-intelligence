# 

Source: https://proofwiki.org/wiki/Preorder_Category_is_Category

Theorem
Let $\struct {S, \precsim}$ be a preordered set.
Let $\mathbf S$ be its associated preorder category.

Then $\mathbf S$ is a category.


Proof
Let us verify the axioms $(C1)$ up to $(C3)$ for a metacategory.
Note that for objects $a, b$ of $\mathbf S$, there is at most one morphism $a \to b$, by definition of $\mathbf S$.

Suppose that $a \to b$ and $b \to c$ are morphisms of $\mathbf S$.
Then we have $a \precsim b$ and $b \precsim c$, and as $\precsim$ is a preordering:

$a \precsim c$
which is to say that there is a unique morphism $a \to c$.
By uniqueness, this morphism is the composite of $a \to b$ and $b \to c$.

Also, for any $a \in S$, there is a morphism $a \to a$ by virtue of:

$a \precsim a$
since $\precsim$ is a preordering.
The uniqueness of the morphisms mentioned above implies directly that $a \to a$ classifies as the identity morphism $\operatorname{id}_a$ for $a$.

The uniqueness of morphisms also immediately implies associativity.

Hence $\mathbf S$ is a metacategory.
Since both $S$ and $\precsim$ are sets, $\mathbf S$ is also a category.
$\blacksquare$






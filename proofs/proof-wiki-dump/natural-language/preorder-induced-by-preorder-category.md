# 

Source: https://proofwiki.org/wiki/Preorder_Induced_by_Preorder_Category

Theorem
Let $\struct {S, \precsim}$ be a preordered set.
Let $\mathbf S$ be its associated preorder category.
Let $\precsim'$ be the preorder induced by $\mathbf S$ as on Category Induces Preorder.

Then $\precsim'$ is the same as $\precsim$.


Proof
Suppose that for some $a, b \in S$, we have:

$a \precsim' b$
By Category Induces Preorder, this happens if and only if there exists an $\mathbf S$-morphism $f: a \to b$.

By definition of $\mathbf S$, this $f: a \to b$ exists if and only if:

$a \precsim b$

Hence the result.
$\blacksquare$






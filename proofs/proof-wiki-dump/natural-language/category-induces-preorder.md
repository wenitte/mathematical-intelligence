# 

Source: https://proofwiki.org/wiki/Category_Induces_Preorder



Theorem
Let $\mathbf S$ be a category with set of objects $S$.

Then the binary relation $\precsim$ defined by:

$\forall a, b \in S: a \precsim b \iff \exists f: a \to b$
is a preorder on $S$.


Proof
It suffices to establish $\precsim$ is reflexive and transitive.


Reflexivity
For any $a \in S$, we have the identity morphism $\operatorname{id}_a : a \to a$.
Hence $a \precsim a$.
$\Box$


Transitivity
For $a, b, c \in S$, let $a \precsim b$ and $b \precsim c$.
Then we have:

$f: a \to b$ and $g: b \to c$

Therefore, we have the composite morphism $g \circ f: a \to c$ as well.
Hence $a \precsim c$.
$\Box$

It follows that $\precsim$ is a preorder.
$\blacksquare$






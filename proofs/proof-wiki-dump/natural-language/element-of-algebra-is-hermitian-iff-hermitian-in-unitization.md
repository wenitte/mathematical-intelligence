# 

Source: https://proofwiki.org/wiki/Element_of_*-Algebra_is_Hermitian_iff_Hermitian_in_Unitization

Theorem
Let $\tuple {A, \ast}$ be a $\ast$-algebra over $\C$.
Let $A_+$ be the unitization of $A$.
Define:

$\tuple {u, \lambda}^\ast = \tuple {u^\ast, \overline \lambda}$
for each $\tuple {u, \lambda} \in A_+$.
Let $a \in A$.

Then $a$ is Hermitian in $A$ if and only if $\tuple {a, 0}$ is Hermitian in $A_+$. 


Proof
Suppose that $a$ is Hermitian. 
Then $a = a^\ast$.
Hence $\tuple {a, 0}^\ast = \tuple {a^\ast, 0} = \tuple {a, 0}$.
So $\tuple {a, 0}$ is Hermitian in $A_+$.

Now suppose that $\tuple {a, 0}$ is Hermitian in $A_+$.
Then we have:

$\tuple {a, 0}^\ast = \tuple {a, 0}$
while:

$\tuple {a, 0}^\ast = \tuple {a^\ast, 0}$
So we have $\tuple {a, 0} = \tuple {a^\ast, 0}$ and so $a = a^\ast$.
So $a$ is Hermitian in $A$.
$\blacksquare$






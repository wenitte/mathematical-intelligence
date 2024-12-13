# 

Source: https://proofwiki.org/wiki/Ideal_of_Algebra_over_Field_Embeds_into_Unitization_as_Ideal

Theorem
Let $K$ be a field.
Let $A$ be an algebra over $K$ that is not unital. 
Let $I$ be an ideal of $A$.
Let $A_+$ be the unitization of $A$.
Let:

$I_0 = \set {\tuple {x, 0_K} : x \in I}$

Then $I_0$ is an ideal of $A_+$. 


Proof
From the definition of an ideal, $I$ is a vector subspace of $A$. 
Hence from Vector Subspace of Algebra over Field Embeds into Unitization as Vector Subspace, $I_0$ is a vector subspace of $A_+$. 
Let $\tuple {x, 0_K} \in I$ and $\tuple {y, \lambda} \in A_+$. 
Then we have:

$\tuple {x, 0_K} \tuple {y, \lambda} = \tuple {x y + \lambda x, 0_K}$
Since $I$ is an ideal, we have $x y \in I$.
Since $I$ is a vector subspace of $A$, we have $x y + \lambda x \in I$.
Hence we have $\tuple {x, 0_K} \tuple {y, \lambda} \in I_0$.
Similarly we have:

$\tuple {y, \lambda} \tuple {x, 0_K} = \tuple {y x + \lambda x, 0_K}$
Since $I$ is an ideal, we have $y x \in I$.
Since $I$ is a vector subspace of $A$, we have $y x + \lambda x \in I$.
Hence we have $\tuple {y, \lambda} \tuple {x, 0_K} \in I_0$.
$\blacksquare$






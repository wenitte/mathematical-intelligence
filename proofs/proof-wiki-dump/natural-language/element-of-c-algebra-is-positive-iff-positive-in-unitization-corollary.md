# 

Source: https://proofwiki.org/wiki/Element_of_C*-Algebra_is_Positive_iff_Positive_in_Unitization/Corollary

Corollary
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra. 
Let $A_+$ be the unitization of $A$.
Define:

$\tuple {x, \lambda}^\ast = \tuple {x^\ast, \overline \lambda}$
for each $\tuple {x, \lambda} \in A_+$.
Let $\norm {\, \cdot \,}_\ast$ be such that $\struct {A_+, \ast, \norm {\, \cdot \,}_\ast}$ is a unital $\text C^\ast$-algebra.
Let $\le_A$ be the canonical preordering of $A$.
Let $\le_+$ be the canonical preordering of $A_+$.
Let $a, b \in A$.

Then:

$a \le_A b$ if and only if $\tuple {a, 0} \le_+ \tuple {b, 0}$


Proof
We have that $a \le_A b$ if and only if:

$b - a$ is positive in $A$.
From Element of C*-Algebra is Positive iff Positive in Unitization, this is the case if and only if:

$\tuple {b - a, 0}$ is positive in $A_+$.
We have $\tuple {b - a, 0} = \tuple {b, 0} - \tuple {a, 0}$, hence this is equivalent to $\tuple {b, 0} - \tuple {a, 0}$ positive.
This is therefore equivalent to $\tuple {a, 0} \le_+ \tuple {b, 0}$.
$\blacksquare$






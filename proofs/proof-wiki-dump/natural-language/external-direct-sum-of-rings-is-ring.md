# 

Source: https://proofwiki.org/wiki/External_Direct_Sum_of_Rings_is_Ring

Theorem
Let $\struct {R_1, +_1, \circ_1}, \struct {R_2, +_2, \circ_2}, \ldots, \struct {R_n, +_n, \circ_n}$ be rings.

Then their (external) direct product:

$\ds \struct {R, +, \circ} = \prod_{k \mathop = 1}^n \struct {R_k, +_k, \circ_k}$
is a ring.


Proof
Consider the structures $\struct {R_1, +_1}, \struct {R_2, +_2}, \ldots, \struct {R_n, +_n}$.
By the definition of a ring, these are all groups.
From External Direct Product of Groups is Group we have that the their external direct product:

$\ds \struct {R, +} = \prod_{k \mathop = 1}^n \struct {R_k, +_k}$
is a group.

Similarly, consider the structures $\struct {R_1, \circ_1}, \struct {R_2, \circ_2}, \ldots, \struct {R_n, \circ_n}$.
By the definition of a ring, these are all semigroups.
From External Direct Product of Semigroups we have that the their external direct product:

$\ds \struct {R, \circ} = \prod_{k \mathop = 1}^n \struct {R_k, \circ_k}$
is a semigroup.

Finally we note that from External Direct Product of Ringoids is Ringoid, $\circ$ as defined here is distributive over $+$.

Hence the result, by definition of ring.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.8$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 3.1$: Direct sums





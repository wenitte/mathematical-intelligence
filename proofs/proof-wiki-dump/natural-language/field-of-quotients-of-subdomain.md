# 

Source: https://proofwiki.org/wiki/Field_of_Quotients_of_Subdomain

Theorem
Let $\struct {F, +, \circ}$ be a field whose unity is $1_F$.
Let $\struct {D, +, \circ}$ be a subdomain of $\struct {F, +, \circ}$ whose unity is $1_D$.

Let:

$K = \set {\dfrac x y: x \in D, y \in D^*}$
where $\dfrac x y$ is the division product of $x$ by $y$.

Then $\struct {K, +, \circ}$ is a field of quotients of $\struct {D, +, \circ}$.


Proof
$1_D = 1_F$ by Subdomain Test.
The sum and product of two elements of $K$ are also in $K$ by Addition of Division Products and Product of Division Products.
The additive and product inverses of $K$ are also in $K$ by Negative of Division Product and Inverse of Division Product.
Thus by Subfield Test, $\struct {K, +, \circ}$ is a subfield of $\struct {F, +, \circ}$ which clearly contains $\struct {D, +, \circ}$.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers: Theorem $23.8$





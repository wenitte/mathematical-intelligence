# 

Source: https://proofwiki.org/wiki/Norm_on_Unitization_of_Normed_Algebra_is_Equivalent_to_Direct_Product_Norm

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {A, \norm {\, \cdot \,} }$ be a normed algebra over $\GF$ that is not unital as an algebra. 
Let $\struct {A_+, \norm {\, \cdot \,}_1 }$ be the normed unitization of $\struct {A, \norm {\, \cdot \,} }$.
Let $\norm {\, \cdot \,}_2$ be the direct product norm on $A \times \GF$.

Then $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ are equivalent norms. 


Proof
Let $u, v \in \R$. 
We have:

$\ds \frac 1 2 \paren {\size u + \size v} \le \frac 1 2 \paren {\max \set {\size u, \size v} + \max \set {\size u, \size v} } = \max \set {\size u, \size v}$
and:

$\ds \max \set {\size u, \size v} \le \max \set {\size u, \size v} + \min \set {\size u, \size v} = \size u + \size v$
Let $x \in A$ and $\lambda \in \GF$. 
Taking $u = \norm x$ and $v = \cmod \lambda$ in the above we obtain:

$\ds \frac 1 2 \paren {\norm x + \cmod \lambda} \le \max \set {\norm x, \size \lambda} \le \norm x + \cmod \lambda$
That is:

$\ds \frac 1 2 \norm {\tuple {x, \lambda} }_1 \le \norm {\tuple {x, \lambda} }_2 \le \norm {\tuple {x, \lambda} }_1$
So $\norm {\, \cdot \,}_1$ and $\norm {\, \cdot \,}_2$ are equivalent norms.
$\blacksquare$






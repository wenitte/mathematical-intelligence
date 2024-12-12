# 

Source: https://proofwiki.org/wiki/Character_on_Unital_C*-Algebra_is_Real_at_Hermitian_Elements

Theorem
Let $\tuple {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $\phi$ be a character on $A$.
Let $x \in A$ be Hermitian.

Then:

$\map \phi x \in \R$


Proof
Write:

$\map \phi x = \alpha + i \beta$
with $\alpha, \beta \in \R$. 
Let:

$x_t = x + i t {\mathbf 1}_A$
for each $t \in \R$. 
From Character on Unital Banach Algebra is Unital Algebra Homomorphism, we have $\map \phi { {\mathbf 1}_A} = 1$, and so:

$\map \phi {x_t} = \map \phi x + i t = \alpha + i \paren {\beta + t}$
Hence, we have:

$\cmod {\map \phi {x_t} }^2 = \alpha^2 + \paren {\beta + t}^2$
We now have: 














\(\ds \cmod {\map \phi {x_t} }^2\)

\(\le\)







\(\ds \norm {x_t}^2\)





Character on Banach Algebra is Continuous














\(\ds \)

\(=\)







\(\ds \norm {x_t x_t^\ast}\)





$(\text C^\ast 5)$ in the definition of a involution














\(\ds \)

\(=\)







\(\ds \norm {\paren {x + i t {\mathbf 1}_A} \paren {x - i t {\mathbf 1}_A} }\)





$(\text C^\ast 2)$, $(\text C^\ast 4)$ in the definition of a involution














\(\ds \)

\(=\)







\(\ds \norm {x^2 + t^2 {\mathbf 1}_A}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x^2} + t^2\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \norm x^2 + t^2\)





Bound on Norm of Power of Element in Normed Algebra



So we have:

$\alpha^2 + \beta^2 + 2 \beta t + t^2 \le \norm x^2 + t^2$
so that:

$\alpha^2 + \beta^2 + 2 \beta t \le \norm x^2$
for each $t \in \R$. 
Aiming for a contradiction, suppose that $\beta \ne 0$.
Suppose that $\beta > 0$.
Then taking:

$\ds t > \frac 1 {2 \beta} \norm x^2$
we have:

$\alpha^2 + \beta^2 + 2 \beta t > \alpha^2 + \beta^2 + \norm x^2 \ge \norm x^2$
contradicting that:

$\alpha^2 + \beta^2 + 2 \beta t \le \norm x^2$ for each $t \in \R$.
Now suppose that $\beta < 0$.
Take:

$\ds t < -\frac 1 {2 \beta} \norm x^2$
so that:

$\alpha^2 + \beta^2 + 2 \beta t > \alpha^2 + \beta^2 + \norm x^2 \ge \norm x^2$
similarly. 
We again get a contradiction to the fact that:

$\alpha^2 + \beta^2 + 2 \beta t \le \norm x^2$ for each $t \in \R$.
Hence we have a contradiction to our assumption that $\beta \ne 0$. 
Hence we have $\beta = 0$. 
Hence:

$\map \phi x = \alpha \in \R$
$\blacksquare$






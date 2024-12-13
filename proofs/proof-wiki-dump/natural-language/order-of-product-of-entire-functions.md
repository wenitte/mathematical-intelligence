# 

Source: https://proofwiki.org/wiki/Order_of_Product_of_Entire_Functions

Theorem
Let $f, g: \C \to \C$ be entire functions of order $\alpha$ and $\beta$.

Then $f g$ has order at most $\map \max {\alpha, \beta}$.


Proof
If $\map \max {\alpha, \beta} = +\infty$, the claim is trivial.
Thus we may assume that $\alpha < +\infty$ and $\beta < +\infty$.

Let $\epsilon > 0$ be arbitrary.
By Definition 1 of Order of Entire Function, we have:

$\map f z = \map \OO {\map \exp {\cmod z^{\alpha + \epsilon} } }$
and:

$\map g z = \map \OO {\map \exp {\cmod z^{\beta + \epsilon} } }$
By Definition of Big-O Notation/Complex/Infinity, there are $c_1,c_2,r_1,r_2 \in \R$ such that:

$\cmod z \ge r_1 \implies \cmod {\map f z} \le c_1 \map \exp {\cmod z^{\alpha + \epsilon} }$
and:

$\cmod z \ge r_2 \implies \cmod {\map g z} \le c_2 \map \exp {\cmod z^{\beta + \epsilon} }$
Let $r_0 := \max \set {r_1, r_2, 2^{1 / \epsilon } }$.
Then, if $\cmod z \ge r_0$, we have:














\(\ds \cmod {\map f z \map g z}\)

\(\le\)







\(\ds \paren { c_1 \map \exp {\cmod z^{\alpha + \epsilon} } } \paren {c_2 \map \exp {\cmod z^{\beta + \epsilon} } }\)




















\(\ds \)

\(=\)







\(\ds c_1 c_2 \map \exp {\cmod z^{\alpha + \epsilon} + \cmod z^{\beta + \epsilon} }\)




















\(\ds \)

\(\le\)







\(\ds c_1 c_2 \map \exp {2 \cmod z^{\map \max {\alpha, \beta}  + \epsilon} }\)





as $\cmod z \ge r_0 \ge 2^{1 / \epsilon} \ge 1$














\(\ds \)

\(=\)







\(\ds c_1 c_2 \map \exp {\paren {2 \cmod z^{-\epsilon} } \cmod z^{\map \max {\alpha, \beta}  + 2 \epsilon} }\)




















\(\ds \)

\(\le\)







\(\ds c_1 c_2 \map \exp {\cmod z^{\map \max {\alpha, \beta}  + 2 \epsilon} }\)





as $\cmod z \ge 2^{1 / \epsilon}$



Therefore the order of $fg$ is:

$\le \map \max {\alpha, \beta} + 2 \epsilon$
Letting $\epsilon \to 0$, the claim follows.
$\blacksquare$


Also see
Order of Sum of Entire Functions
Order of Product of Entire Function with Polynomial





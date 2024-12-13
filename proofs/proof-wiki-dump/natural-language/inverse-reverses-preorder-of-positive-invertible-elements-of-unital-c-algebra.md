# 

Source: https://proofwiki.org/wiki/Inverse_reverses_Preorder_of_Positive_Invertible_Elements_of_Unital_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $\le_A$ be the canonical preordering on $A$.
Let $a, b \in A$ be positive and invertible such that:

$a \le_A b$

Then we have:

$0 \le_A b^{-1} \le_A a^{-1}$


Proof
First suppose that $c \in A$ satisfies:

$c \ge_A {\mathbf 1}_A$
From Bounds on Hermitian Element of Unital C*-Algebra in terms of Bounds on Spectrum, we have:

$c \le_A \norm c {\mathbf 1}_A$
From Bound on Inverse in Canonical Preordering of Unital C*-Algebra we have:

$\norm c^{-1} {\mathbf 1}_A \le_A c^{-1} \le_A {\mathbf 1}_A$

From Spectrum of Inverse of Element of Unital Algebra, we have:

$\map {\sigma_A} {b^{-1} } = \set {z^{-1} : z \in \map {\sigma_A} b}$
Since $b$ is positive, we have $\map {\sigma_A} b \subseteq \openint 0 \infty$.
Hence $\map {\sigma_A} {b^{-1} } \subseteq \openint 0 \infty$.
So ${\mathbf 0}_A \le_A b^{-1}$.
Let $x \in A$ be the positive square root of $a$. 
That is, $a = x^2$ and $x$ is positive.
Since $x$ commutes with itself, we have that $x$ is invertible from Product of Commuting Elements in Monoid is Unit iff Each Element is Unit.
From Conjugation in C*-Algebra preserves Positivity: Corollary, we have:

$x^{-1} a x^{-1} \le_A x^{-1} b x^{-1}$
We have:

$x^{-1} a x^{-1} = x^{-1} x^2 x^{-1} = {\mathbf 1}_A$
Hence we have:

${\mathbf 1}_A \le_A x^{-1} b x^{-1}$
From Bound on Inverse in Canonical Preordering of Unital C*-Algebra, we have that:

$\paren {x^{-1} b x^{-1} }^{-1} \le_A {\mathbf 1}_A$
From Inverse of Product, we have:

$\paren {x^{-1} b x^{-1} }^{-1} = x b^{-1} x$
Hence:

$x b^{-1} x \le_A {\mathbf 1}_A$
Hence from Conjugation in C*-Algebra preserves Positivity: Corollary, we have:

$b^{-1} \le_A x^{-1} x^{-1}$
From Inverse of Product, we have $x^{-1} x^{-1} = \paren {x^2}^{-1} = a^{-1}$
Hence we have:

$b^{-1} \le_A a^{-1}$
$\blacksquare$


Sources
1990: Gerard J. Murphy: C*-Algebras and Operator Theory ... (previous) ... (next): $2.2$: Positive Elements of $C^\ast$-Algebras





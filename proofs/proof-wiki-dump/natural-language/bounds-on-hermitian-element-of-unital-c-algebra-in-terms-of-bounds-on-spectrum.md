# 

Source: https://proofwiki.org/wiki/Bounds_on_Hermitian_Element_of_Unital_C*-Algebra_in_terms_of_Bounds_on_Spectrum



Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $\le_A$ be the canonical preordering on $A$.
Let $a \in A$ be Hermitian.

Then we have $\map {\sigma_A} x \subseteq \closedint \alpha \beta$ if and only if:

$\alpha {\mathbf 1}_A \le_A a \le_A \beta {\mathbf 1}_A$
In particular:

$-\norm a {\mathbf 1}_A a \le_A \norm a {\mathbf 1}_A$


Proof
Necessary Condition
Since $a$ is Hermitian, and ${\mathbf 1}_A$ is Hermitian from Identity Element in Unital *-Algebra is Hermitian, we have:

$a - \lambda {\mathbf 1}_A$ is Hermitian for each $\lambda \in \R$.
From Spectral Mapping Theorem for Polynomials, we have:

$\map {\sigma_A} {a - \alpha {\mathbf 1}_A} = \set {t - \alpha : t \in \map {\sigma_A} a} \subseteq \closedint \alpha \beta - \alpha$
We have $\closedint \alpha \beta - \alpha = \closedint 0 {\beta - \alpha} \subseteq \hointr 0 \infty$. 
Hence $a - \alpha {\mathbf 1}_A$ is positive, giving $\alpha {\mathbf 1}_A \le a$. 
From Spectral Mapping Theorem for Polynomials, we also have:

$\map {\sigma_A} {\beta {\mathbf 1}_A - a} = \set {\beta - t : t \in \map {\sigma_A} a} \subseteq \beta - \closedint \alpha \beta$
Again, we have $\beta - \closedint \alpha \beta = \closedint 0 {\beta - \alpha} \subseteq \hointr 0 \infty$, so:

$\beta {\mathbf 1}_A - a$ is positive, giving $a \le \beta {\mathbf 1}_A$.
Hence we have:

$\alpha {\mathbf 1}_A \le_A a \le_A \beta {\mathbf 1}_A$
$\Box$


Sufficient Condition
Suppose that:

$\alpha {\mathbf 1}_A \le_A a \le_A \beta {\mathbf 1}_A$
So that:

$a - \alpha {\mathbf 1}_A \ge_A {\mathbf 0}_A$
and:

$\beta {\mathbf 1}_A - a \ge_A {\mathbf 0}_A$
Then by the Spectral Mapping Theorem for Polynomials, we have that:

$\map {\sigma_A} {a - \alpha {\mathbf 1}_A} = \set {t - \alpha : t \in \map {\sigma_A} a} \subseteq \hointr 0 \infty$
Hence $\map {\sigma_A} a \subseteq \hointr \alpha \infty$.
Similarly by the Spectral Mapping Theorem for Polynomials, we have that:

$\map {\sigma_A} {\beta {\mathbf 1}_A - a} = \set {\beta - t : t \in \map {\sigma_A} a} \subseteq \hointl {-\infty} \beta$
Hence we have:

$\map {\sigma_A} a \subseteq \hointr \alpha \infty \cap \hointl {-\infty} \beta = \closedint \alpha \beta$
$\Box$


Particular bound
From Spectrum of Element of Banach Algebra is Bounded, we have:

$\cmod \lambda \le \norm a$ for each $a \in \map {\sigma_A} x$.
Since $\map {\sigma_A} x \subseteq \R$, we have $-\norm a \le \lambda \le \norm a$ for each $a \in \map {\sigma_A} x$.
Hence we can take $\alpha = -\norm a$ and $\beta = \norm a$ to obtain:

$-\norm a {\mathbf 1}_A \le a \le \norm a {\mathbf 1}_A$
$\blacksquare$






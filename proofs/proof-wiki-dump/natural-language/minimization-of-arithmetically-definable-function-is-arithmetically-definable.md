# 

Source: https://proofwiki.org/wiki/Minimization_of_Arithmetically_Definable_Function_is_Arithmetically_Definable

Theorem
Let $f: \N^{k + 1} \to \N$ be a partial function.
Let $g: \N^k \to \N$ be the partial function defined as:

$\map g {x_1, \dotsc, x_k} \approx \map {\mu z} {\map f {x_1, \dotsc, x_k, z} }$
where $\mu$ is minimization.
Suppose that there exists a $\Sigma_1$ WFF of $k + 2$ free variables:

$\map {\phi_f} {y, x_1, \dotsc, x_k, z}$
such that:

$y = \map f {x_1, \dotsc, x_k, z} \iff \N \models \map {\phi_f} {\sqbrk y, \sqbrk {x_1}, \dotsc, \sqbrk {x_k}, \sqbrk z}$
where $\sqbrk a$ denotes the unary representation of $a \in \N$.
Then there exists a $\Sigma_1$ WFF of $k + 1$ free variables:

$\map {\phi_g} {y, x_1, \dotsc, x_k}$
such that:

$y = \map g {x_1, \dotsc, x_k} \iff \N \models \map {\phi_g} {\sqbrk y, \sqbrk {x_1}, \dotsc, \sqbrk {x_k} }$


Proof
Define:

$\map {\phi_g} {y, x_1, \dotsc, x_k} := \map {\phi_f} {0, x_1, \dotsc, x_k, y} \land \forall p < y: \exists q: \paren {q \ne 0 \land \map {\phi_f} {q, x_1, \dotsc, x_k, y} }$

For, by definition of minimization:

$y = \map g {x_1, \dotsc, x_k}$
if and only if

$\map f {x_1, \dotsc, x_k, y} = 0$
and

$\map f {x_1, \dotsc, x_k, p}$ is defined and $\ne 0$ for each $p < y$.

That $\phi_g$ is $\Sigma_1$ follows from:

Conjunction of Existential Quantifier
Bounded Universal Quantifier Distributes over Conjunction
$\blacksquare$






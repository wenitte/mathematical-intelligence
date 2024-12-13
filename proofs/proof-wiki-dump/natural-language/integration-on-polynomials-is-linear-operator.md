# 

Source: https://proofwiki.org/wiki/Integration_on_Polynomials_is_Linear_Operator

Theorem
Let $\map P \R$ be the vector space of all polynomial functions on the real number line $\R$.
Let $S$ be the mapping defined as:

$\ds \forall p \in \map P \R: \forall x \in \R: \map S {\map p x} = \int_0^x \map p t \rd t$

Then $S$ is a linear operator on $\map P \R$.


Proof
Let $\map f x, \map g x$ be real functions which are integrable on $\R$.
Let $\closedint a b$ be a closed interval of $\R$.
Then from Linear Combination of Definite Integrals, $\lambda f + \mu g$ is integrable on $\closedint a b$ and:

$\ds \int_a^b \paren {\lambda \map f t + \mu \map g t} \rd t = \lambda \int_a^b \map f t \rd t + \mu \int_a^b \map g t \rd t$

From Real Polynomial Function is Continuous:

$\forall p \in \map P \R: p$ is continuous on $\R$.
From Continuous Real Function is Darboux Integrable:

$\forall p \in \map P \R: p$ is integrable on $\R$.

The result follows from Condition for Linear Transformation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Example $28.6$





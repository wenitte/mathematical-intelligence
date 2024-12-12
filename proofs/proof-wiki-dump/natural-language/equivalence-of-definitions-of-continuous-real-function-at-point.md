# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Continuous_Real_Function_at_Point



Theorem
The following definitions of the concept of Continuous Real Function at Point are equivalent:

Definition 1
$f$ is continuous at $x$ if and only if the limit $\ds \lim_{y \mathop \to x} \map f y$ exists and:

$\ds \lim_{y \mathop \to x} \map f y = \map f x$
Definition 2
$f$ is continuous at $x$ if and only if the limit $\ds \lim_{y \mathop \to x} \map f y$ exists and:

$\ds \lim_{y \mathop \to x} \map f y = \map f {\lim_{y \mathop \to x} y}$


Proof
$(1)$ implies $(2)$
Let $f$ be a Continuous Real Function at Point by definition $1$.
Then by definition:

$\ds \lim_{y \mathop \to x} \map f y = \map f x$

We have that:

$\ds x = \lim_{y \mathop \to x} y$
and so it follows that:

$\ds \map f x = \map f {\lim_{y \mathop \to x} y}$
That is:

$\ds \lim_{y \mathop \to x} \map f y = \map f {\lim_{y \mathop \to x} y}$
Thus $f$ is a Continuous Real Function at Point by definition $2$.
$\Box$


$(2)$ implies $(1)$
Let $f$ be a Continuous Real Function at Point by definition $2$.
Then by definition:

$\ds \lim_{y \mathop \to x} \map f y = \map f {\lim_{y \mathop \to x} y}$

We have that:

$\ds \lim_{y \mathop \to x} y = x$.
Thus:

$\ds \map f {\lim_{y \mathop \to x} y} = \map f x$.
That is:

$\ds \lim_{y \mathop \to x} \map f y = \map f x$

Thus $f$ is a Continuous Real Function at Point by definition $1$.
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: $2.1$ Limits and Continuity





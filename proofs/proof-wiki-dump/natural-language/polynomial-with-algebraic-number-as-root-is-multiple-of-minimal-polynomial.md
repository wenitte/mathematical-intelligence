# 

Source: https://proofwiki.org/wiki/Polynomial_with_Algebraic_Number_as_Root_is_Multiple_of_Minimal_Polynomial

Theorem
Let $F$ be a field.
Let $\map P x$ be a polynomial in $F$.
Let $z$ be a root of $\map P x$.

Then $\map P x$ is a multiple of the minimal polynomial $\map m x$ in $z$ over $F$.


Proof
For $z$ to be a root of $F$, $z$ must be algebraic over $F$.
Let us write:

$\map P x = \map m x \, \map q x + \map r x$
where $\map q x$ and $\map r x$ are polynomials in $F$.
Then either $\map r x = 0$ or $\map \deg {\map r x} < \map \deg {\map m x}$.

Then:

$\map P z = \map m z \, \map q z + \map r z$
But as $z$ is a root of both $\map P x$ and $\map m x$, we have that:

$\map P z = \map m z = 0$
and so:

$\map r z = 0$

So if $\map r x \ne 0$ we have that $\map r x$ is a polynomial of smaller degree than $\map m x$.
This contradicts the minimality of $\map m x$.
Thus $\map r x = 0$ and so $\map P x$ is a multiple of $\map m x$.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Field Extensions: $\S 38$. Simple Algebraic Extensions: Theorem $71 \ \text{(ii)}$





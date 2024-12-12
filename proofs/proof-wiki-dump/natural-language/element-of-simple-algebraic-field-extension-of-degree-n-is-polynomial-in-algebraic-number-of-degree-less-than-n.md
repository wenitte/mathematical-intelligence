# 

Source: https://proofwiki.org/wiki/Element_of_Simple_Algebraic_Field_Extension_of_Degree_n_is_Polynomial_in_Algebraic_Number_of_Degree_Less_than_n

Theorem
Let $F$ be a field.
Let $\theta \in \C$ be algebraic over $F$ of degree $n$.
Let $\map F \theta$ be the simple field extension of $F$ by $\theta$.

Then any element of $\map F \theta$ can be written as $\map f \theta$, where $\map f x$ is a polynomial over $F$ of degree at most $n - 1$.


Proof
From Simple Algebraic Field Extension consists of Polynomials in Algebraic Number, an arbitrary element of $\map F \theta$ can be written as $\map f \theta$.
But:

$\map f x = \map m x \, \map q x + \map r x$
where:

$\map m x$ is minimal polynomial in $\theta$
$\map q x$ is a polynomial in $\map F \theta$
$\map r x$ is a polynomial in $\map F \theta$ such that either:
$\map \deg {\map r x} < \map \deg {\map m x}$
or:
$\map r x = 0$
Thus:

$\map f \theta = \map m \theta \, \map q \theta + \map r \theta$
and as $\map m \theta = 0$ we have:

$\map f \theta = \map r \theta$
So $\map f \theta$ can be expressed as $\map r \theta$ instead, which is of degree strictly less than that of $\map m \theta$.
Hence the result.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Field Extensions: $\S 38$. Simple Algebraic Extensions: Theorem $73$





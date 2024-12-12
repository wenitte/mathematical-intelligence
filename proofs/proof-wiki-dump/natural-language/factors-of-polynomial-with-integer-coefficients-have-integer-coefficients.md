# 

Source: https://proofwiki.org/wiki/Factors_of_Polynomial_with_Integer_Coefficients_have_Integer_Coefficients

Theorem
Let $\Q \sqbrk X$ be the ring of polynomial forms over the field of rational numbers in the indeterminate $X$.
Let $\map h X \in \Q \sqbrk X$ have coefficients all of which are integers.

Let it be possible to express $\map h X$ as:

$\map h X = \map f X \, \map g X$
where $\map f X, \map g X \in \Q \sqbrk X$.

Then it is also possible to express $\map h X$ as:

$\map h X = \map {f'} X \, \map {g'} X$
where:

$\map {f'} X, \map {g'} X \in \Q \sqbrk X$
the coefficients of $\map {f'} X$ and $\map {g'} X$ are all integers
$\map {f'} X = a \map f X$ and $\map {g'} X = b \map f X$, for $a, b \in \Q$.


Proof
Let $\cont h$ denote the content of $\map h X$.
From Polynomial has Integer Coefficients iff Content is Integer:

$\cont h \in \Z$
Let $\map h X = \map f X \, \map g X$ as suggested.
Then from Rational Polynomial is Content Times Primitive Polynomial:














\(\ds \map h X\)

\(=\)







\(\ds \cont f \cont g \cdot \map {f'} X \, \map {g'} X\)





Rational Polynomial is Content Times Primitive Polynomial














\(\ds \)

\(=\)







\(\ds \cont h \cdot \map {f'} X \, \map {g'} X\)





Content of Rational Polynomial is Multiplicative




From the above, $\map {f'} X$ and $\map {g'} X$ are primitive.
Hence by definition:

$\cont {f'} = \cont {g'} = 1$
From Polynomial has Integer Coefficients iff Content is Integer, both $\map {f'} X$ and $\map {g'} X$ have coefficients which are all integers.
We also have by definition of content that $\cont f$ and $\cont g$ are rational numbers.
The result follows.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 31$. Polynomials with Integer Coefficients: Theorem $63$





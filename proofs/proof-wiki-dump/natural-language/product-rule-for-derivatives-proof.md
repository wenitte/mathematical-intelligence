# 

Source: https://proofwiki.org/wiki/Product_Rule_for_Derivatives/Proof

Theorem
Let $\map f x, \map j x, \map k x$ be real functions defined on the open interval $I$.
Let $\xi \in I$ be a point in $I$ at which both $j$ and $k$ are differentiable.

Let $\map f x = \map j x \map k x$.

Then:

$\map {f'} \xi = \map j \xi \map {k'} \xi + \map {j'} \xi \map k \xi$

It follows from the definition of derivative that if $j$ and $k$ are both differentiable on the interval $I$, then:

$\forall x \in I: \map {f'} x = \map j x \map {k'} x + \map {j'} x \map k x$


Proof
First we note that from Differentiable Function is Continuous‎, $j$ is continuous at $\xi$.
Hence:

$(1): \quad \map j {\xi + h} \to \map j \xi$ as $h \to 0$

So:














\(\ds \map {f'} \xi\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map f {\xi + h} - \map f \xi} h\)





Definition of Derivative














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map j {\xi + h} \map k {\xi + h} - \map j \xi \map k \xi} h\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map j {\xi + h} \map k {\xi + h} - \map j {\xi + h} \map k \xi + \map j {\xi + h} \map k \xi - \map j \xi \map k \xi} h\)





adding $\pm \map j {\xi + h} \map k \xi$ to numerator














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\map j {\xi + h} \frac {\map k {\xi + h} - \map k \xi} h + \frac {\map j {\xi + h} - \map j \xi} h \map k \xi}\)





simplifying














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\map j {\xi + h} \frac {\map k {\xi + h} - \map k \xi} h} +  \lim_{h \mathop \to 0} \paren {\frac {\map j {\xi + h} - \map j \xi} h \map k \xi}\)





Sum Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\map j {\xi + h} } \lim_{h \mathop \to 0} \paren {\frac {\map k {\xi + h} - \map k \xi} h} + \lim_{h \mathop \to 0} \paren {\frac {\map j {\xi + h} - \map j \xi} h} \lim_{h \mathop \to 0} \paren {\map k \xi}\)





Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\map j {\xi + h} } \map {k'} \xi + \map {j'} \xi \lim_{h \mathop \to 0} \paren {\map k \xi}\)





Definition of Derivative














\(\ds \)

\(=\)







\(\ds \map j \xi \map {k'} \xi + \map {j'} \xi \map k \xi\)





from $(1)$



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation: Product
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 10.9 \ \text{(ii)}$





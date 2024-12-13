# 

Source: https://proofwiki.org/wiki/Rolle%27s_Theorem/Proof_2

Theorem
Let $f$ be a real function which is:

continuous on the closed interval $\closedint a b$
and:

differentiable on the open interval $\openint a b$.
Let $\map f a = \map f b$.

Then:

$\exists \xi \in \openint a b: \map {f'} \xi = 0$


Proof
First take the case where:

$\forall x \in \openint a b: \map f x = 0$
Then:

$\forall x \in \openint a b: \map {f'} x = 0$

Otherwise:

$\exists c \in \openint a b: \map f c \ne 0$
Let $\map f c > 0$.
Then there exists an absolute maximum at a point $\xi \in \openint a b$.
Hence:














\(\ds \dfrac {\map f {\xi + h} - \map f \xi} h\)

\(\le\)







\(\ds 0\)





for $\xi < \xi + h < b$














\(\ds \dfrac {\map f {\xi + h} - \map f \xi} h\)

\(\ge\)







\(\ds 0\)





for $a < \xi + h < \xi$



As $h \to 0$, we see that both of the above approach $\map {f'} \xi$, which is then both non-negative and non-positive.
That is:

$\map {f'} \xi = 0$

Similarly, let $\map f c < 0$.
Then there exists an absolute minimum at a point $\xi \in \openint a b$.
Hence:














\(\ds \dfrac {\map f {\xi + h} - \map f \xi} h\)

\(\ge\)







\(\ds 0\)





for $\xi < \xi + h < b$














\(\ds \dfrac {\map f {\xi + h} - \map f \xi} h\)

\(\le\)







\(\ds 0\)





for $a < \xi + h < \xi$



Again, as $h \to 0$, we see that both of the above approach $\map {f'} \xi$, which is then both non-negative and non-positive.
That is:

$\map {f'} \xi = 0$

Hence the result.
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: $2.3$ Rolle's Theorem
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.12$: Valid Arguments: Proposition $1.12.3$





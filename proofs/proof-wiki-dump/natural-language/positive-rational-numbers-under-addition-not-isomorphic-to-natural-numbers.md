# 

Source: https://proofwiki.org/wiki/Positive_Rational_Numbers_under_Addition_not_Isomorphic_to_Natural_Numbers

Theorem
The positive rational numbers $\Q_{\ge 0}$ under addition:

$\struct {\Q_{\ge 0}, +}$
is not isomorphic to the natural numbers under addition:

$\struct {\N, +}$


Proof
From:

Positive Rational Numbers under Addition form Commutative Monoid
Natural Numbers under Addition form Commutative Monoid
both $\struct {\Q_{\ge 0}, +}$ and $\struct {\N, +}$ form commutative monoids.

Aiming for a contradiction, suppose there exists an semigroup isomorphism $\phi$ from $\struct {\Q_{\ge 0}, +}$ to $\struct {\N, +}$.
By definition of isomorphism:

$\phi$ is a homomorphism
$\phi$ is a bijection.

Let $n \in \N$ be odd.
Let $q \in \Q_{\ge 0}$ such that $\map \phi q = n$.
Such a $q$ exists and is unique by definition of bijection.

But then we have:










\(\ds \exists m \in \N: \, \)



\(\ds \map \phi {\dfrac q 2}\)

\(=\)







\(\ds m\)





Definition of Bijection








\(\ds \leadsto \ \ \)





\(\ds \map \phi q\)

\(=\)







\(\ds \map \phi {\dfrac q 2 + \dfrac q 2}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\dfrac q 2} + \map \phi {\dfrac q 2}\)





Definition of Semigroup Homomorphism














\(\ds \)

\(=\)







\(\ds m + m\)




















\(\ds \)

\(=\)







\(\ds 2 m\)




















\(\ds \)

\(=\)







\(\ds n\)









But this contradicts the assertion that $n$ is odd.
So by Proof by Contradiction there can be no such isomorphism from $\struct {\Q_{\ge 0}, +}$ to $\struct {\N, +}$.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.1$





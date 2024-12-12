# 

Source: https://proofwiki.org/wiki/Entropy_of_Measure-Preserving_Transformation_with_respect_to_Finite_Sub-Sigma_Algebra_is_Well-Defined

Theorem
Let $\struct {X, \BB, \mu}$ be a probability space.
Let $T: X \to X$ be a $\mu$-preserving transformation.
Let $\AA \subseteq \BB$ be a finite sub-$\sigma$-algebra.

Then the entropy of $T$ with respect to $\AA$:

$\ds \map h {T, \AA} := \lim_{n \mathop \to \infty} \frac 1 n \map H {\bigvee_{k \mathop = 0}^{n - 1} T^{-k} \AA}$
is well-defined.


Proof
Let:

$\ds a_n := \map H {\bigvee_{k \mathop = 0}^{n - 1} T^{-k} \AA}$
We need to show that the limit:

$\ds \lim_{n \mathop \to \infty} \frac {a_n} n$
exists.
In view of Fekete's Subadditive Lemma, it suffices to show the subadditivity of $\sequence {a_n}$.
To this end, let $m, n \ge 1$.
Then:














\(\ds a_{m + n}\)

\(=\)







\(\ds \map H {\bigvee_{k \mathop = 0}^{m - 1} T^{-k} \AA \vee \bigvee_{k \mathop = m}^{m + n - 1} T^{-k} \AA  }\)




















\(\ds \)

\(\le\)







\(\ds \map H {\bigvee_{k \mathop = 0}^{m - 1} T^{-k} \AA} + \map H {\bigvee_{k \mathop = m}^{m + n - 1} T^{-k} \AA  }\)





Conditional Entropy of Join as Sum: Corollary $5$














\(\ds \)

\(=\)







\(\ds \map H {\bigvee_{k \mathop = 0}^{m - 1} T^{-k} \AA} + \map H {T^{-m} \sqbrk {\bigvee_{k \mathop = 0}^{n - 1} T^{-k} \AA } }\)




















\(\ds \)

\(=\)







\(\ds \map H {\bigvee_{k \mathop = 0}^{m - 1} T^{-k} \AA} + \map H {\bigvee_{k \mathop = 0}^{n - 1} T^{-k} \AA  }\)





Measure-Preserving Transformation Preserves Conditional Entropy: Corollary














\(\ds \)

\(=\)







\(\ds a_m + a_n\)









$\blacksquare$






# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Lebesgue_Measure

Theorem
Let $\lambda^n$ be the Lebesgue pre-measure on the half-open $n$-rectangles $\JJ_{ho}^n$.

Then Lebesgue measure, the extension of $\lambda^n$ to the Borel $\sigma$-algebra $\BB \left({\R^n}\right)$, exists and is unique.


Proof
From Lebesgue Pre-Measure is Pre-Measure, $\lambda^n$ is a pre-measure on $\JJ_{ho}^n$.
By Half-Open Rectangles form Semiring of Sets, $\JJ_{ho}^n$ is a semiring of sets.
Also, from Characterization of Euclidean Borel Sigma-Algebra, $\map \BB {\R^n} = \map \sigma {\JJ_{ho}^n}$.

Now observe that the half-open $n$-rectangles $\horectr {-n} n$ form an increasing sequence of sets with limit $\R^n$.
Also, by definition of $\lambda^n$, have:

$\map {\lambda^n} {\horectr {-n} n} = \ds \prod_{i \mathop = 1}^n n - \paren {-n} = \paren {2 n}^n < +\infty$

Hence, Carathéodory's Theorem and its corollary apply.
These yield existence and uniqueness of Lebesgue measure, the extension of $\lambda^n$ to $\map \BB {\R^n}$.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $4.9$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $6.6$





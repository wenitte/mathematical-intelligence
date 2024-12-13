# 

Source: https://proofwiki.org/wiki/Pre-Measure_of_Finite_Stieltjes_Function_Extends_to_Unique_Measure

Theorem
Let $\JJ_{ho}$ denote the collection of half-open intervals in $\R$.
Let $f: \R \to \R$ be a finite Stieltjes function.

Then the pre-measure of $f$, $\mu_f$, extends uniquely to a measure $\mu$ on $\map \BB \R$, the Borel $\sigma$-algebra on $\R$.
This unique measure $\mu$ is the measure of $f$.


Proof
We intend to use Carathéodory's Theorem (Measure Theory).
To this end, observe that by Characterization of Euclidean Borel Sigma-Algebra, we have:

$\map \BB \R = \map \sigma {\JJ_{ho} }$
From Pre-Measure of Finite Stieltjes Function is Pre-Measure, $\mu_f$ is a pre-measure.

Note that for all $n \in \N$, we have:

$\map {\mu_f} {\hointr {-n} n} = \map f n - \map f {-n} < +\infty$
and $\hointr {-n} n \uparrow \R$ as an increasing sequence of sets.

All these facts combine with Carathéodory's Theorem (Measure Theory) to establish existence and uniqueness of $\mu$.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 7$: Problem $9 \ \text{(ii)}$





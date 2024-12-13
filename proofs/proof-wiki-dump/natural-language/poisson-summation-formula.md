# 

Source: https://proofwiki.org/wiki/Poisson_Summation_Formula



Theorem
Let $f: \R \to \C$ be a Schwarz function.
Let $\hat f$ be its Fourier transform.

Then:

$\ds \sum_{n \mathop \in \Z} \map f n = \sum_{m \mathop \in \Z} \map {\hat f} m$


Proof
Let:

$\ds \map F x = \sum_{n \mathop \in \Z} \map f {x + n}$

Then $\map F x$ is $1$-periodic (because of absolute convergence), and has Fourier coefficients:














\(\ds \hat F_k\)

\(=\)







\(\ds \int_0^1 \sum_{n \mathop \in \Z} \map f {x + n} e^{-2\pi i k x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \Z} \int_0^1 \map f {x + n} e^{-2\pi i k x} \rd x\)





because $f$ is Schwarz, so convergence is uniform














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \Z} \int_n^{n + 1} \map f x e^{-2\pi i k x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_\R \map f x e^{-2\pi i k x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \map {\hat f} k\)





where $\hat f$ is the Fourier transform of $f$




Therefore by the definition of the Fourier series of $f$:

$\ds \map F x = \sum_{k \mathop \in \Z} \map {\hat f} k e^{i k x}$
Choosing $x = 0$ in this formula:

$\ds \sum_{n \mathop \in \Z} \map f n = \sum_{k \mathop \in \Z} \map {\hat f} k$
as required.
$\blacksquare$


Source of Name
This entry was named for Siméon-Denis Poisson.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 19$: The Poisson Summation Formula: $19.46$





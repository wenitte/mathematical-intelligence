# 

Source: https://proofwiki.org/wiki/Half-Range_Fourier_Cosine_Series/Identity_Function/0_to_Pi/Proof_2

Theorem
Let $\map f x$ be the real function defined on $\openint 0 \pi$ as:

  $\map f x$ and its $4$th approximation
$\map f x = x$

Then its half-range Fourier cosine series can be expressed as:














\(\ds x\)

\(\sim\)







\(\ds \frac \pi 2 - \frac 4 \pi \sum_{n \mathop = 1}^\infty \frac {\cos \paren {2 n - 1} x} {\paren {2 n - 1}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 - \frac 4 \pi \paren {\cos x + \frac {\cos 3 x} {3^2} + \frac {\cos 5 x} {5^2} + \cdots}\)











Proof
Let $\map f x: \openint 0 \lambda \to \R$ be the identity function on the open real interval $\openint 0 \lambda$:

$\forall x \in \openint 0 \lambda: \map f x = x$

From Half-Range Fourier Cosine Series for Identity Function, the half-range Fourier cosine series for $\map f x$ can be expressed as:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac \lambda 2 - \frac {4 \lambda} {\pi^2} \sum_{n \mathop = 0}^\infty \frac 1 {\paren {2 n + 1}^2} \cos \dfrac {\paren {2 n + 1} \pi x} \lambda\)




















\(\ds \)

\(=\)







\(\ds \frac \lambda 2 - \frac {4 \lambda} {\pi^2} \paren {\cos \dfrac {\pi x} \lambda + \frac 1 {3^2} \cos \dfrac {3 \pi x} \lambda + \frac 1 {5^2} \cos \dfrac {5 \pi x} \lambda + \dotsb}\)










The result follows by setting $\lambda = \pi$.
$\blacksquare$






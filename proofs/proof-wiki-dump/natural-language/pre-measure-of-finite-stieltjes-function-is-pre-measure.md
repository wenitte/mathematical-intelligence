# 

Source: https://proofwiki.org/wiki/Pre-Measure_of_Finite_Stieltjes_Function_is_Pre-Measure

Theorem
Let $\JJ_{ho}$ denote the collection of half-open intervals in $\R$.
Let $f: \R \to \R$ be a finite Stieltjes function.

Then the pre-measure of $f$, $\mu_f: \JJ_{ho} \to \overline \R_{\ge 0}$ is a pre-measure.
Here, $\overline \R_{\ge 0}$ denotes the set of positive extended real numbers.


Proof
It is immediate from the definition of $\mu_f$ that:

$\map {\mu_f} \O = 0$
Now suppose that for some half-open interval $\hointr a b$ one has:

$\ds \hointr a b = \bigcup_{n \mathop \in \N} \hointr {b_n} {b_{n + 1} }$
where $b_0 = a$ and $\ds \lim_{n \mathop \to \infty} b_n = b$.

Then we compute:














\(\ds \sum_{n \mathop \in \N} \map {\mu_f} {\hointr {b_n} {b_{n + 1} } }\)

\(=\)







\(\ds \sum_{n \mathop \in \N} \map f {b_{n + 1} } - \map f {b_n}\)





Definition of Pre-Measure of Finite Stieltjes Function














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map f {b_{n + 1} } - \map f {b_0}\)





Telescoping Series














\(\ds \)

\(=\)







\(\ds \map f b - \map f a\)





Definition of $\sequence {b_n}_{n \mathop \in \N}$














\(\ds \)

\(=\)







\(\ds \map {\mu_f} {\hointr a b}\)





Definition of Pre-Measure of Finite Stieltjes Function



which verifies the second condition for a pre-measure.

Hence $\mu_f$ is indeed a pre-measure.
$\blacksquare$






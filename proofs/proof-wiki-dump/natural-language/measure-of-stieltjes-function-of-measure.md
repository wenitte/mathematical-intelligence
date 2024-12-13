# 

Source: https://proofwiki.org/wiki/Measure_of_Stieltjes_Function_of_Measure

Theorem
Let $\mu$ be a measure on $\map \BB \R$, the Borel $\sigma$-algebra on $\R$.
Suppose that for all $n \in \N$, $\mu$ satisfies:

$\map \mu {\hointr {-n} n} < +\infty$

Let $f_\mu$ be the Stieltjes function of $\mu$.
Let $\mu_{f_\mu}$ be the measure of $f_\mu$.

Then $\mu_{f_\mu} = \mu$.


Proof
From Pre-Measure of Finite Stieltjes Function Extends to Unique Measure, it suffices to verify that:

$\map {\mu_{f_\mu} } {\hointr a b} = \map \mu {\hointr a b}$
for all half-open intervals $\hointr a b$.

Now we have:














\(\ds \map {\mu_{f_\mu} } {\hointr a b}\)

\(=\)







\(\ds \map {f_\mu} b - \map {f_\mu} a\)





Definition of $\mu_{f_\mu}$



If either $a = 0$ or $b = 0$, the result follows immediately from the definition of $f_\mu$.

Now suppose that $a < b < 0$.
Then:














\(\ds \map {f_\mu} b - \map {f_\mu} a\)

\(=\)







\(\ds \map \mu {\hointr a 0} - \map \mu {\hointr b 0}\)





Definition of $f_\mu$














\(\ds \)

\(=\)







\(\ds \map \mu {\hointr a b}\)





Measure of Set Difference with Subset




Finally, let $0 < a < b$.
Then:














\(\ds \map {f_\mu} b - \map {f_\mu} a\)

\(=\)







\(\ds \map \mu {\hointr 0 b} - \map \mu {\hointr 0 a}\)





Definition of $f_\mu$














\(\ds \)

\(=\)







\(\ds \map \mu {\hointr a b}\)





Measure of Set Difference with Subset




The final case $a < 0 < b$ is a trivial consequence of Measure is Finitely Additive Function.
Hence it must be that $\mu_{f_\mu} = \mu$.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 7$: Problem $9 \ \text{(iii)}$





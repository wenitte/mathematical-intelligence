# 

Source: https://proofwiki.org/wiki/Floor_of_x%2Bm_over_n/Proof_1

Theorem
Let $m, n \in \Z$ such that $n > 0$.
Let $x \in \R$.

Then:

$\floor {\dfrac {x + m} n} = \floor {\dfrac {\floor x + m} n}$
where $\floor x$ denotes the floor of $x$.


Proof
Let:

$y = x - \floor x$
$M = \floor x + m$
We now have:

$(1): \quad 0 \le y < 1$
and thus:

$\floor y = 0$
By Division Theorem, we can write:

$(2): \quad M = k n + r$
with $k \in \Z$ and $0 \le r \le n - 1$.
By $(1)$ and $(2)$:

$(3): \quad 0 \le y + r < 1 + n - 1 = n$

We have:














\(\ds \floor {\frac {y + M} n}\)

\(=\)







\(\ds \floor {\frac {y + k n + r} n}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds \floor {k + \frac {y + r} n}\)




















\(\ds \)

\(=\)







\(\ds k + \floor {\frac {y + r} n}\)





Floor of Number plus Integer














\(\ds \)

\(=\)







\(\ds k\)





from $(3)$














\(\ds \)

\(=\)







\(\ds \floor {\frac M n}\)










Substituting $y$ and $M$, we obtain:














\(\ds \floor {\frac {x + m} n}\)

\(=\)







\(\ds \floor {\frac {x - \floor x + \floor x + m} n}\)




















\(\ds \)

\(=\)







\(\ds \floor {\frac {y + M} n}\)




















\(\ds \)

\(=\)







\(\ds \floor {\frac M n}\)




















\(\ds \)

\(=\)







\(\ds \floor {\frac {\floor x + m} n}\)









and the result follows.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $35$ (Answers to Exercises)





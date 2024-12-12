# 

Source: https://proofwiki.org/wiki/Floor_of_x%2Bm_over_n



Theorem
Let $m, n \in \Z$ such that $n > 0$.
Let $x \in \R$.

Then:

$\floor {\dfrac {x + m} n} = \floor {\dfrac {\floor x + m} n}$
where $\floor x$ denotes the floor of $x$.


Corollary
Let $n \in \Z$ such that $n > 0$.
Let $x \in \R$.

Then:

$\floor {\dfrac x n} = \floor {\dfrac {\floor x} n}$
where $\floor x$ denotes the floor of $x$.


Proof 1
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


Proof 2
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = \dfrac {x + m} n$
It is clear that $f$ is both strictly increasing and continuous on the whole of $\R$.
Let $\dfrac {x + m} n \in \Z$.
Then:










\(\ds \exists s \in \Z: \, \)



\(\ds \dfrac {x + m} n\)

\(=\)







\(\ds s\)














\(\ds \leadsto \ \ \)





\(\ds x + m\)

\(=\)







\(\ds n s\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds n s - m\)




















\(\ds \)

\(\in\)







\(\ds \Z\)









Thus:

$\forall x \in \R: \map f x \in \Z \implies x \in \Z$
So the conditions are fulfilled for McEliece's Theorem (Integer Functions) to be applied:

$\floor {\map f x} = \floor {\map f {\floor x} } \iff \paren {\map f x \in \Z \implies x \in \Z}$
Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $35$





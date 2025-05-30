# 

Source: https://proofwiki.org/wiki/Ceiling_of_x%2Bm_over_n



Theorem
Let $m, n \in \Z$ such that $n > 0$.
Let $x \in \R$.

Then:

$\ceiling {\dfrac {x + m} n} = \ceiling {\dfrac {\ceiling x + m} n}$
where $\ceiling x$ denotes the ceiling of $x$.


Corollary
Let $n \in \Z$ such that $n > 0$.
Let $x \in \R$.

Then:

$\ceiling {\dfrac x n} = \ceiling {\dfrac {\ceiling x} n}$
where $\ceiling x$ denotes the ceiling of $x$.


Proof 1













\(\ds \ceiling {\dfrac {x + m} n}\)

\(=\)







\(\ds -\floor {-\dfrac {x + m} n}\)





Floor of Negative equals Negative of Ceiling














\(\ds \)

\(=\)







\(\ds -\floor {\dfrac {-x - m} n}\)




















\(\ds \)

\(=\)







\(\ds -\floor {\dfrac {\floor {-x} - m} n}\)





Floor of $\dfrac {x + m} n$














\(\ds \)

\(=\)







\(\ds -\floor {\dfrac {-\ceiling x - m} n}\)





Floor of Negative equals Negative of Ceiling














\(\ds \)

\(=\)







\(\ds -\floor {-\dfrac {\ceiling x + m} n}\)




















\(\ds \)

\(=\)







\(\ds \ceiling {\dfrac {\ceiling x + m} n}\)





Floor of Negative equals Negative of Ceiling



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

$\ceiling {\map f x} = \ceiling {\map f {\ceiling x} } \iff \paren {\map f x \in \Z \implies x \in \Z}$
Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $35$




